import React, { useState } from 'react'
import arrow from "../../../public/tri.png";
import Image from 'next/image';
import DiscussionComponent from './DiscussionComponent';
import StoriesComponent from './StoriesComponent';
import SideNavBar from './SideNavBar';

export default function ContentComponent() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className="relative min-h-screen ">
                <div
                    className={`absolute left-0 min-h-full w-60 bg-blue-950 text-white transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <SideNavBar></SideNavBar>
                    <button
                        className="absolute top-1/3 right-[-22px] transform -translate-y-1/2 bg-blue-950 text-white py-2 rounded-e-2xl h-20 z-10 pr-1"
                        onClick={toggleSidebar}
                    >
                        <Image src={arrow} alt='' height={20} width={20}></Image>
                    </button >
                </div >
                <div className={isOpen ? "relative ml-72" : "relative ml-10"}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2   p-2">
                        <div>
                            <div className='bg-blue-950 sm:bg-white'>
                                <h1 className='text-white sm:text-red-300 font-bold'>DISCUSSION FORUM</h1>
                            </div>
                            <DiscussionComponent></DiscussionComponent>
                        </div>
                        <div>
                            <div className='bg-blue-950 sm:bg-white'>
                                <h1 className='text-white sm:text-red-300 font-bold'>MARKET STORIES</h1>
                            </div>
                            <StoriesComponent isOpen={isOpen}></StoriesComponent>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
