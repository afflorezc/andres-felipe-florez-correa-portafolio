import { Icon } from '@iconify/react';
import  Link from 'next/link';

export function MainButton({text}:{text:string}){
    return(
        <div className="flex flex-row h-13 w-38 rounded-md bg-(--accent) pl-7 pr-7 pt-4 pb-4
                    items-center justify-between">
            <p className="w-fit text-medium text-base text-(--soft-accent)">{text}</p>
            <Icon icon="akar-icons:arrow-right" className="text-(--soft-accent)"/>
        </div>
    );
}

export function PortfolioLink({text, link}:{text:string, link:string}){
    return(
        <Link href={link} target="_blank" rel="noopener noreferrer" className="w-fit h-fit">
            <div className="w-30 flex flex-row items-center justify-between text-(--accent)">
                <p className="w-fit text-medium text-lg">{text}</p>
                <Icon icon="akar-icons:chevron-right-small" />
            </div>
        </Link>
    );
}