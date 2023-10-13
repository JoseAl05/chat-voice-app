import ServerSidebar from '@/components/Server/ServerSidebar';
import { currentProfile } from '@/lib/currentProfile';
import { db } from '@/lib/db';
import { redirectToSignIn } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const ServerLayout = async ({
    children,
    params
}: {
    children: React.ReactNode;
}) => {

    const profile = await currentProfile();

    if (!profile) {
        return redirectToSignIn();
    }

    const server = await db.server.findUnique({
        where: {
            id: params.serverId,
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    });

    if (!server) {
        return redirect('/');
    }

    return (
        <div>
            <div className='hidden fixed flex-col h-full w-60 z-20 inset-y-0 md:flex'>
                <ServerSidebar serverId={params.serverId} />
            </div>
            <main className='h-full md:pl-60'>
                {children}
            </main>
        </div>
    );
}

export default ServerLayout;