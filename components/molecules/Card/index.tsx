"use client"

import { useState } from "react";

import React from 'react';
import Image from 'next/image';

import CardIcon from '@/components/atoms/icons/CardIcon';
import { SideBarTitle } from '@/components/atoms/texts/Titles';
import { Text } from '@/components/atoms/texts/Parragraphs';
import { PortfolioButton } from '@/components/atoms/Buttons';
import Details from "../information/Details";

interface cardItems{
    icon: string,
    title: string,
    text:string
}

interface PortfolioInfo{
    image:string,
    title:string,
    description:string,
    fullDescription:string,
    link:{ text: string, ref: string}
}

const Card = ({icon, title, text}:cardItems) => {
    return(
        <div className="min-w-56 w-56 h-36 md:w-65 md:h-46 xl:w-70 xl:h-56 flex flex-col items-center justify-start p-4 gap-1 md:p-6 md:gap-2 
                        xl:p-8 xl:gap-3 border-1 bg-(--card-background) border-(--border-color) 
                        rounded-xl md:rounded-2xl xl:rounded-3xl shadow-sm shadow-(--shadow-color)">
        
            <CardIcon icon={icon} />
            <SideBarTitle title={title} />
            <Text text={text} align="text-center" />
        </div>
    );
}

const EducationSectCard = ({title, 
    children,}: Readonly<{title:string, children:React.ReactNode}>) => {
    return(
        <div className="w-fit flex flex-col gap-3 lg:gap-4 items-start justify-start">
            <SideBarTitle title={title}/>
            <div>{children}</div>
        </div>
    );
}

const PortfolioCard = ({detailLinkText, portfolio}:{detailLinkText:string, portfolio:PortfolioInfo}) => {
    const [showDetails, setShowDetails] = useState(false);
    return(
        <div className="w-58 md:w-68 lg:w-78 shrink-0 flex flex-col items-center justify-start bg-(--card-background)">
            <Image src={portfolio.image} alt={`portfolio-${portfolio.title}`}
                 width={310} height={300}/>
            <div className="w-full flex flex-col items-start justify-start gap-2 p-3 md:gap-2.5 p-3.5 lg:gap-3 lg:p-4">
                <SideBarTitle title={portfolio.title} />
                <Text text={portfolio.description} align="text-left" />
                <PortfolioButton text={portfolio.link.text} onClick={()=>setShowDetails(true)} />
            </div>

            { showDetails && (
                <Details title={portfolio.title} description={portfolio.fullDescription} 
                            link={portfolio.link.ref} linkText={detailLinkText}
                    onClose={()=>setShowDetails(false)}/>
            )}
        </div>
    );
}

export {Card, EducationSectCard, PortfolioCard}
