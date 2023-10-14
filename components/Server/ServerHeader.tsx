'use client'

import { ServerWithMembersAndProfiles } from '@/types';
import { MemberRole, Server } from '@prisma/client';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { ChevronDown, LogOut, PlusCircle, Settings, Trash, UserPlus, Users } from 'lucide-react';
import { useModalStore } from '@/hooks/useModalStore';



interface ServerHeaderProps {
    server: ServerWithMembersAndProfiles;
    role: MemberRole;
}

const ServerHeader = ({
    server,
    role
}: ServerHeaderProps) => {

    const isAdmin = role === MemberRole.ADMIN;
    const isMod = isAdmin || role === MemberRole.MODERATOR;

    const { onOpen } = useModalStore();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='focus:outline-none' asChild>
                <button className='
                    flex
                    items-center
                    px-3
                    h-12
                    w-full
                    text-md
                    font-semibold
                    border-neutral-200
                    border-b-2
                    dark:border-neutral-800
                    transition
                    hover:bg-zinc-700/10
                    dark:hover:bg-zinc-700/50
                    '
                >
                    {server.name}
                    <ChevronDown className='h-5 w-5 ml-auto' />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56 text-xs font-medium text-black space-y-[2px] dark:text-neutral-400'>
                {
                    isMod && (
                        <DropdownMenuItem
                            onClick={() => onOpen('invite', { server })}
                            className='text-indigo-600 px-3 py-2 text-sm cursor-pointer dark:text-indigo-400'
                        >
                            Invite People
                            <UserPlus className='h-4 w-4 ml-auto' />
                        </DropdownMenuItem>
                    )
                }
                {
                    isAdmin && (
                        <DropdownMenuItem className='px-3 py-2 text-sm cursor-pointer'>
                            Server Settings
                            <Settings className='h-4 w-4 ml-auto' />
                        </DropdownMenuItem>
                    )
                }
                {
                    isAdmin && (
                        <DropdownMenuItem className='px-3 py-2 text-sm cursor-pointer'>
                            Manage Members
                            <Users className='h-4 w-4 ml-auto' />
                        </DropdownMenuItem>
                    )
                }
                {
                    isMod && (
                        <DropdownMenuItem className=' px-3 py-2 text-sm cursor-pointer'>
                            Create Channel
                            <PlusCircle className='h-4 w-4 ml-auto' />
                        </DropdownMenuItem>
                    )
                }
                {
                    isMod && (
                        <DropdownMenuSeparator />
                    )
                }
                {
                    isAdmin && (
                        <DropdownMenuItem className='text-rose-500 px-3 py-2 text-sm cursor-pointer'>
                            Delete Server
                            <Trash className='h-4 w-4 ml-auto' />
                        </DropdownMenuItem>
                    )
                }
                {
                    !isAdmin && (
                        <DropdownMenuItem className='text-rose-500 px-3 py-2 text-sm cursor-pointer'>
                            Leave Server
                            <LogOut className='h-4 w-4 ml-auto' />
                        </DropdownMenuItem>
                    )
                }
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default ServerHeader;