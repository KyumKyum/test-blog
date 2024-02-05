import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface CanvasProps {
    children: ReactNode
}

export default function Canvas ({children}: CanvasProps) {
    return (
        <div className="flex flex-col flex-1 h-full justify-between">
            <Header/>
                {children}
            <Footer/>
        </div>
    )
}