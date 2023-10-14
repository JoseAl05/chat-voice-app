'use client'

import { useEffect, useState } from 'react';
import CreateServerModal from '../Modals/CreateServerModal';
import InviteModal from '../Modals/InviteModal';

const ModalProvider = () => {

    const [isMounted,setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    },[]);

    if(!isMounted){
        return null;
    }

    return (
        <>
            <CreateServerModal />
            <InviteModal />
        </>
    );
}

export default ModalProvider;