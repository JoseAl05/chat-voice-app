'use client'

import { Plus } from 'lucide-react';
import SidebarActionsTooltip from '../Tooltip/SidebarActionsTooltip';
import { useModalStore } from '@/hooks/useModalStore';

const SidebarActions = () => {

    const { onOpen } = useModalStore();

    return (
        <div>
            <SidebarActionsTooltip side='right' align='center' label='Add Server'>
                <button className='flex items-center group' onClick={() => onOpen('createServer')}>
                    <div className='
                        flex
                        items-center
                        justify-center
                        mx-3
                        h-[48px]
                        w-[48px]
                        rounded-[24px]
                        overflow-hidden
                        bg-background
                        transition-all
                        dark:bg-neutral-700
                        group-hover:rounded-[16px]
                        group-hover:bg-emerald-500
                        '
                    >
                        <Plus className='text-emerald-500 transition group-hover:text-white' size={25} />
                    </div>
                </button>
            </SidebarActionsTooltip>
        </div>
    );
}

export default SidebarActions;