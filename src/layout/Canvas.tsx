import Sidebar from "@/components/Sidebar";
import React from "react";

interface CanvasProps {
    children: React.ReactNode,
}

export default function Canvas ({children}: CanvasProps){
    return (
        <main className="flex flex-row h-svh w-full">
             <Sidebar/>
            {children}
        </main>
    )
}