import { Icon } from '@iconify/react';
import  Link from 'next/link';

export function MainButton({text}:{text:string}){
    return(
        <div className="flex flex-row h-10.5 md:h-11.5 lg:h-13 w-fit gap-3 rounded-md bg-(--accent) px-7 pt-4 pb-4
                    items-center justify-center text-(--soft-accent) hover:bg-(--soft-accent) 
                    hover:text-(--accent) hover:cursor-pointer hover:scale-103">
            <p className="w-fit text-medium text-xs md:text-sm lg:text-base">{text}</p>
            <Icon icon="akar-icons:arrow-right" />
        </div>
    );
}

export function PortfolioLink({text, link}:{text:string, link:string}){
    return(
        <Link href={link} target="_blank" rel="noopener noreferrer" className="w-fit h-fit">
            <div className="w-30 flex flex-row items-center justify-between text-(--accent)
                            hover:text-(--soft-accent) hover:scale-103">
                <p className="w-fit text-medium text-sm md:text-base lg:text-lg">{text}</p>
                <Icon icon="akar-icons:chevron-right-small" />
            </div>
        </Link>
    );
}