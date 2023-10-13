import { currentProfile } from '@/lib/currentProfile';
import { db } from '@/lib/db';
import { redirect } from 'next/navigation';
import SidebarActions from './SidebarActions';
import { Separator } from '../ui/separator';
import { ScrollArea } from '../ui/scroll-area';
import SidebarItem from './SidebarItem';
import { ModeToggle } from '../ThemeToggle/ModeToggle';
import { UserButton } from '@clerk/nextjs';

const Sidebar = async () => {

    const profile = await currentProfile();

    if (!profile) {
        return redirect('/');
    }

    const servers = await db.server.findMany({
        where: {
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    });

    return (
        <div className='flex flex-col items-center h-full w-full space-y-4 py-3 text-primary dark:bg-[#1E1F22]'>
            <SidebarActions />
            <Separator className='h-[2px] w-10 mx-auto bg-zinc-300 rounded-md dark:bg-zinc-700' />
            <ScrollArea className='flex-1 w-full'>
                {
                    servers.map(server => (
                        <div key={server.id} className='mb-4'>
                            <SidebarItem
                                id={server.id}
                                imageUrl={server.imageUrl}
                                name={server.name}
                            />
                        </div>
                    ))
                }
            </ScrollArea>
            <div className='flex flex-col items-center pb-3 mt-auto gap-y-4'>
                <ModeToggle/>
                <UserButton
                    afterSignOutUrl='/'
                    appearance={{
                        elements:{
                            avatarBox:'h-[48px] w-[48px]'
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default Sidebar;