'use client';

import { useEffect, useState } from "react"

interface FooterProps {
    verse: string
}

export default function Footer ({verse}: FooterProps) {
    const [verseString, setVerseString] = useState('');

    // useEffect(function(){
        
    // }, [])
    useEffect(() => {
        if(verseString.length <= 0){
            setVerseString(verse);
        }
    }, [verse, verseString, setVerseString]);

    return (
        <div className="flex flex-row w-full h-1/5 justify-center items-center bg-purple-600">
            <p className="font-2xl font-neodgm text-white">
                {verseString.length <= 0 ? 'Loading' : verseString}
            </p>
        </div>
    )
}