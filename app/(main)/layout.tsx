import Sidebar from '@/components/Sidebar/Sidebar';

const MainLayour = async({
    children
}:{
    children: React.ReactNode
}) => {
    return (
        <div className='h-full'>
            <div className='hidden fixed inset-y-0 z-30 flex-col h-full w-[72px] md:flex'>
                <Sidebar />
            </div>
            <main className='h-full md:pl-[72px]'>
                {children}
            </main>
        </div>
    );
}

export default MainLayour;