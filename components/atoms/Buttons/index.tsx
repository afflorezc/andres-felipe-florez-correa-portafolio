import { Icon } from '@iconify/react';
import  Link from 'next/link';

export function MainButton({text, onClick}:{text:string, onClick:()=>void}){
    return(
        <button className="flex flex-row h-10.5 md:h-11.5 lg:h-13 w-fit gap-3 rounded-md bg-(--accent) px-7 pt-4 pb-4
                    items-center justify-center text-(--soft-accent) hover:bg-(--soft-accent) 
                    hover:text-(--accent) hover:cursor-pointer hover:scale-103"
                onClick={onClick}    >
            <p className="w-fit text-medium text-xs md:text-sm lg:text-base">{text}</p>
            <Icon icon="akar-icons:arrow-right" />
        </button>
    );
}

export function PortfolioLink({text, link}:{text:string, link:string}){
    return(
        <Link href={link} target="_blank" rel="noopener noreferrer" className="w-fit h-fit">
            <div className="w-fit flex flex-row items-center gap-1 md:gap-2 lg:gap-3 text-(--accent)
                            hover:text-(--secondary) hover:scale-103">
                <p className="w-fit text-medium text-sm md:text-base lg:text-lg">{text}</p>
                <Icon icon="akar-icons:chevron-right-small" />
            </div>
        </Link>
    );
}

export function PortfolioButton({text, onClick}:{text:string, onClick:()=>void}){
    return(
        <button className="w-fit flex flex-row items-center gap-1 md:gap-2 lg:gap-3 text-(--accent)
                            hover:text-(--secondary) hover:cursor-pointer hover:scale-103"
                onClick={onClick}>
                <p className="w-fit text-medium text-sm md:text-base lg:text-lg">{text}</p>
                <Icon icon="akar-icons:chevron-right-small" />
        </button>
    );
}

export function TextButton({text, onClick}:{text:string, onClick:()=>void}){
    return(
        <button className="text-(--accent) hover:text-(--secondary) hover:cursor-pointer 
                            hover:scale-103"
                onClick={onClick}>
                <p className="w-fit text-medium text-sm md:text-base lg:text-lg">{text}</p>
        </button>
    );

}