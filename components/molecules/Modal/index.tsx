import React from "react";

import { TextButton } from "@/components/atoms/Buttons";
import { SideBarTitle } from "@/components/atoms/texts/Titles";

export default function Modal({title, onClose, children}:
            Readonly<{title:string, onClose:()=>void, children:React.ReactNode}>){
    return(
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-start p-25 md:p-35 lg:p-45">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" onClick={onClose} />

            <div className="w-80 shrink-1 h-fit md:w-150 lg:w-242 xl:w-280 relative z-10 flex flex-col bg-(--card-background)
                            border-1 bg-(--card-background) border-(--border-color) items-start justify-start 
                            gap-1 md:gap-2 xl:gap-3 rounded-xl md:rounded-2xl xl:rounded-3xl shadow-sm 
                            shadow-(--shadow-color)">
                
                <div className ="w-full h-fit flex flex-row-reverse p-1 md:p-2 lg:p-3
                                border-(--border-color) border-b-1" >
                    < TextButton text="X" onClick={onClose} />
                    <div className="w-full flex flex-row justify-center">
                        <SideBarTitle title={title} />
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
}