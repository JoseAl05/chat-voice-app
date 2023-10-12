import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import { initialProfile } from '@/lib/initialProfile';
import InitialModal from '@/components/Modals/InitialModal';

const SetupPage = async () => {

    const profile = await initialProfile();

    const server = await db.server.findFirst({
        where: {
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    });

    if(server){
        return redirect(`/server/${server.id}`)
    }

    return (
        <InitialModal />
    );
}

export default SetupPage;