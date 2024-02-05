import Image from 'next/image';
import MainImage from '../../public/image/main.jpeg';
import Link from 'next/link';

export default function Sidebar() {
    return (
        <div className="flex flex-col h-full w-1/4 bg-[#7ca7eb] items-center py-10 space-y-4">
            <Image src={MainImage} alt='My Image!!!' className='w-[250px] h-[250px] rounded-full shadow-2xl'/>
            <Link href={'/'} className='text-5xl font-neodgm'>{'Jay Lim'}</Link>
            <p className='text-lg text-center font-neodgm'>
            {'Welcome Everyone!!!'}
                <br/>{'This is my blog!'}
            </p>
        </div>
    )
}