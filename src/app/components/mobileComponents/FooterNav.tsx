import React from 'react'
import menu from "../../../../public/app.png";
import home from "../../../../public/home-button.png";
import chat from "../../../../public/chat-bubble.png";
import apps from "../../../../public/apps.png";
import menubar from "../../../../public/menu-bar.png";
import Image from 'next/image';

export default function FooterNav() {
    return (
        <>
            <div className='bg-blue-950 h-10 bottom-0 w-full'>
                <div className='grid grid-flow-col auto-cols-max gap-3 justify-between items-center py-2 px-5'>
                    <Image src={menu} alt='' height={25} width={25}></Image>
                    <Image src={home} alt='' height={25} width={25}></Image>
                    <Image src={chat} alt='' height={25} width={25}></Image>
                    <Image src={apps} alt='' height={25} width={25}></Image>
                    <Image src={menubar} alt='' height={25} width={25}></Image>
                </div>
            </div>
        </>
    )
}
