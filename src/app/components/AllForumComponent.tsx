import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Image, { StaticImageData } from 'next/image'
import hdefault from "../../../public/heartDefault.png";
import hFilled from "../../../public/heartFilled.png";

interface AllForumComponentProps {
    item: {
        id: number;
        imageUrl: StaticImageData;
        profilePic: StaticImageData;
        name: string;
        sector: number;
        postContent: string;
        likes: string;
        viewIconUrl: any;
        views: string;
        commentIconUrl: any;
        comments: string;
        shareIconUrl: any;
    };
}

export default function AllForumComponent({ item }: AllForumComponentProps) {
    const [like, setLike] = useState(false);
    const changeLike = () => {
        setLike(!like);
    }
    return (
        <div>
            <div>
                {item.imageUrl !== undefined && (
                    <div>
                        <Image src={item.imageUrl} alt='' height={200} className='w-full'></Image>
                    </div>
                )}
            </div>
            <div className='grid gap-3 grid-flow-row auto-rows-max mt-3'>
                <div className='flex gap-3 items-center'>
                    <Image src={item.profilePic} alt='' width={30} height={30} className='rounded-full'></Image>
                    <h1>{item.name}</h1>
                    <button className={
                        item.sector === 1 ? "bg-red-400 p-2 rounded-3xl" : item.sector === 2 ? "bg-blue-400 p-2 rounded-3xl" : "bg-yellow-400 p-2 rounded-3xl"
                    }>Sector {item.sector}</button>
                </div>
                <div className='mx-6 mb-2'>
                    <p>{item.postContent}</p>
                </div>
            </div>
            <div className="flex justify-between mx-5">
                <div className='grid grid-cols-2'>
                    <button onClick={changeLike}>
                        {like ? <Image src={hFilled} alt='' width={20} height={10}></Image>
                            : <Image src={hdefault} alt='' width={20} height={10}></Image>
                        }
                    </button>
                    <p>{item.likes}</p>
                </div>
                <div className='grid grid-cols-2'>
                    <button>
                        <Image src={item.viewIconUrl} alt='' height={20} width={20}></Image>
                    </button>
                    <p>{item.views}</p>
                </div>
                <div className='grid grid-cols-2'>
                    <button>
                        <Image src={item.commentIconUrl} alt='' height={20} width={20}></Image>
                    </button>
                    <p>{item.comments}</p>
                </div><div className='grid grid-cols-2'>
                    <button>
                        <Image src={item.shareIconUrl} alt='' height={20} width={20}></Image>
                    </button>
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}
AllForumComponent.propTypes = {
    item: PropTypes.object
}