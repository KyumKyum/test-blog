import Link from "next/link";

export default function Header (){
    return (
        <div className="flex w-full h-1/6 bg-emerald-500">
            <Link href={'/profile'}>{'Profile'}</Link>
        </div>
    )
}