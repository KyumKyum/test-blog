import Link from "next/link";

export default function Header () {
    return (
        <div className="flex flex-row w-full h-1/5 bg-purple-400">
            <Link href={'/profile'} className="text-3xl" >{'Profile'}</Link>
        </div>
    )
}