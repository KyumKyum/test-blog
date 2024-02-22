
import Image from 'next/image';
import MainImage from '../../public/image/main.jpeg';
import Link from 'next/link';
import { useEffect, useState } from 'react';


export default function Sidebar(){


    return (
     <div className="flex flex-col h-full w-1/4 bg-[#db9dfc] items-center space-y-5">
        <Link href={'/'}>
            <Image src={MainImage} alt='My Image' className='min-w-[150px] min-h-[150px] max-w-[250px] max-h-[250px] rounded-[125px] shadow-2xl my-5'/>
        </Link>
        <p className='text-5xl font-neodgm'>{'Jay Lim'}</p>
        <p className='text-lg text-center font-neodgm'>{'Hello Everyone!!!'}<br/>{'Welcome to by personal blog!! :)'}</p>
    </div>
    )
}