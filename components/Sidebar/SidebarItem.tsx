'use client'

import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import SidebarActionsTooltip from '../Tooltip/SidebarActionsTooltip';

interface SidebarItemProps {
    id: string;
    imageUrl: string;
    name: string;
}

const SidebarItem = ({
    id,
    imageUrl,
    name
}: SidebarActionsTooltip) => {

    const params = useParams();
    const router = useRouter();

    const onClick = () => {
        router.push(`/server/${id}`);
    }

    return (
        <SidebarActionsTooltip side='right' align='center' label={name}>
            <button
                onClick={() => onClick}
                className='relative flex items-center group'
            >
                <div className={cn(
                    'absolute left-0 w-[4px] bg-primary rounded-r-full transition-all',
                    params?.serverId !== id && 'group-hover:h-[20px]',
                    params?.serverId === id ? 'h-[36px]' : 'h-[8px]'
                )} />
                <div className={cn(
                    'relative group flex mx-4 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden',
                    params?.serverId === id && 'bg-primary/10 text-primary rounded-[16px]'
                )}>
                    <Image
                        fill
                        src={imageUrl}
                        alt='Server Channel'
                    />
                </div>
            </button>
        </SidebarActionsTooltip>
    );
}

export default SidebarItem;