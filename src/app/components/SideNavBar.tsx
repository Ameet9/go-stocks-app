import React from 'react'
import user from "../../../public/user.png";
import notification from "../../../public/notification-bell.png";
import Image from 'next/image';

export default function SideNavBar() {
    const sideNavTitles = [
        "Discussion Forum",
        "Market Stories",
        "Sentiment",
        "Market",
        "Sector",
        "Watchlist",
        "Events",
        "News/Interview"
    ];
    return (
        <>
            <div className='p-4'>
                <div className='grid grid-flow-col auto-cols-max gap-2 items-center justify-between'>
                    <Image src={user} alt='' height={25} width={25}></Image>
                    <h1>Hello User</h1>
                    <Image src={notification} alt='' height={25} width={25}></Image>
                </div>
            </div>
            <hr className="my-4" />
            <div className='grid grid-flow-row auto-rows-max'>
                {
                    sideNavTitles.map((i) => (
                        <div className='hover:bg-blue-400 p-4'>
                            <h1>{i}</h1>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
