import React from 'react';

const Navigation = () => {
    return (
        <div className=' bg-gray-800 '>
            <nav className='text-white h-[10vh] flex justify-between items-center max-w-[1200px] mx-auto'>
                <a href=""><img src="" alt="Logo-HTML" /></a>
                <div className='flex'>
                    <p className='p-3'>Home</p>
                    <p className='p-3'>Project</p>
                    <p className='p-3'>News</p>
                    <p className='p-3'>About</p>
                    <p className='p-3'>Contact</p>
                    <div className='mx-5'>
                        <button className='bg-white text-red-400 p-3 rounded-full'>Login</button>
                    </div>
                </div>

            </nav>
        </div>
    );
};

export default Navigation;