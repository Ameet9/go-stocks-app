import React, { useState } from 'react'
import SideNavBar from '../SideNavBar';
import arrow from "../../../../public/tri.png";
import Image from 'next/image';
import DiscussionComponent from '../DiscussionComponent';
import MobileStoriesComponent from './MobileStoriesComponent';

export default function MobileContentComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const [discussionPage, setDiscussionPage] = useState(true);
    const [storiesPage, setStoriesPage] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    const toggleDiscussion = () => {
        setDiscussionPage(true);
        setStoriesPage(false);
    };
    const toggleStories = () => {
        setDiscussionPage(false);
        setStoriesPage(true);
    };
    return (
        <>
            <div className="relative min-h-screen ">
                <div
                    className={`absolute left-0 min-h-screen w-60 bg-blue-950 text-white transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"
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
                <div className="">
                    <div className="grid grid-cols-2 gap-2 bg-blue-950 p-2">
                        <div className='' onClick={toggleDiscussion}>
                            <h1 className='text-white font-bold' >DISCUSSION FORUM</h1>
                        </div>
                        <div className='' onClick={toggleStories}>
                            <h1 className='text-white font-bold'>MARKET STORIES</h1>
                        </div>
                    </div>
                    <div>
                        {discussionPage && <DiscussionComponent></DiscussionComponent>}
                        {storiesPage && <MobileStoriesComponent></MobileStoriesComponent>}
                    </div>
                </div>
            </div>
        </>
    )
}
