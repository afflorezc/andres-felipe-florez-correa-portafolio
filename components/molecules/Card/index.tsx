import React from 'react';
import Image from 'next/image';

import CardIcon from '@/components/atoms/icons/CardIcon';
import { SideBarTitle } from '@/components/atoms/texts/Titles';
import { Text } from '@/components/atoms/texts/Parragraphs';
import { PortfolioLink } from '@/components/atoms/Buttons';

interface cardItems{
    icon: string,
    title: string,
    text:string
}

interface PortfolioInfo{
    image:string,
    title:string,
    description:string,
    link:{ text: string, ref: string}
}

const Card = ({icon, title, text}:cardItems) => {
    return(
        <div className="w-70 h-56 flex flex-col items-center justify-start p-8 gap-3 border-1
                        bg-(--card-background) border-(--border-color) rounded-3xl shadow-sm
                        shadow-(--shadow-color)">
        
            <CardIcon icon={icon} />
            <SideBarTitle title={title} />
            <Text text={text} align="text-center" />
        </div>
    );
}

const EducationSectCard = ({title, 
    children,}: Readonly<{title:string, children:React.ReactNode}>) => {
    return(
        <div className="w-fit flex flex-col gap-4 items-start justify-start">
            <SideBarTitle title={title}/>
            <div>{children}</div>
        </div>
    );
}

const PortfolioCard = ({portfolio}:{portfolio:PortfolioInfo}) => {

    return(
        <div className="w-78 shrink-0 flex flex-col items-center justify-start bg-(--card-background)">
            <Image src={portfolio.image} alt={`portfolio-${portfolio.title}`}
                 width={310} height={300}/>
            <div className="w-full flex flex-col items-start justify-start gap-3 p-4">
                <SideBarTitle title={portfolio.title} />
                <Text text={portfolio.description} align="text-left" />
                <PortfolioLink text={portfolio.link.text} link={portfolio.link.ref} />
            </div>
        </div>
    );
}

export {Card, EducationSectCard, PortfolioCard}
