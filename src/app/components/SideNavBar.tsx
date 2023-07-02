import React from 'react'

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
            <div>
                <h1>Hello User</h1>
            </div>
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
