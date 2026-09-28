"use client"

import { useState } from "react";

import { SectionTitle, MainTitle } from "@/components/atoms/texts/Titles";
import { Text } from "@/components/atoms/texts/Parragraphs";
import { MainButton } from "@/components/atoms/Buttons";
import Details from "../Details";

interface mainTitle{
    myName:string,
    specialty:string,
    profesion:string
}

const SectionStart = ({title, description}: {title:string, description:string}) =>{
    return(
        <div className="w-65 md:w-90 lg:w-110 flex flex-col items-center justify-start gap-3 md:gap-4 lg:gap-6">
            <SectionTitle title={title} />
            <Text text={description} align="text-center"/>     
        </div>
    );
}

const HeroStart = ({title, description, fullDescription, messageTitle, buttonText}: 
            {title:mainTitle, description:string, fullDescription:string
                messageTitle:string, buttonText:string }) =>{
    const [isHiring, setIsHiring] = useState(false);
    return(
        <div className="w-58 md:w-100 lg:120 xl:w-140 flex flex-col items-start justify-center gap-4 px-2 py-6
                        md:gap-6 md:px-6 py-8 xl:gap-8 xl:px-8 py-10">
            <MainTitle myName={title.myName} specialty={title.specialty} profession={title.profesion} />
            <div className="w-3/4"><Text text={description} align="text-left"/></div>  
            <MainButton text={buttonText} onClick={()=>setIsHiring(true)} />  

            { isHiring && (
                <Details title={messageTitle} description={fullDescription} 
                    onClose={()=>setIsHiring(false)}/>
            )}
        </div>
        
    );
}

export { SectionStart, HeroStart };