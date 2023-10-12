'use client'

import { UploadDropzone } from '@/lib/uploadthing';
import { X } from 'lucide-react';
import Image from 'next/image';

import '@uploadthing/react/styles.css';
import { error } from 'console';

interface FileUploadProps {
    endpoint: 'messageFile' | 'serverImage';
    value: string;
    onChange: (url?: string) => void;
}

const FileUpload = ({
    onChange,
    value,
    endPoint
}: FileUploadProps) => {

    const fileType = value?.split('.').pop();

    if (value && fileType !== 'pdf') {
        return (
            <div className='relative h-20 w-20'>
                <Image
                    fill
                    src={value}
                    alt='Image Uploaded'
                    className='rounded-full'
                />
                <button
                    onClick={() => onChange('')}
                    className='absolute top-0 right-0 bg-rose-500 text-white p-1 rounded-full shadow-sm'
                    type='button'
                >
                    <X className='h-4 w-4'/>
                </button>
            </div>
        )
    }

    return (
        <UploadDropzone
            endpoint={endPoint}
            onClientUploadComplete={(res) => {
                onChange(res?.[0].url)
            }}
            onUploadError={(error: Error) => {
                console.log(error);
            }}
        />
    );
}

export default FileUpload;