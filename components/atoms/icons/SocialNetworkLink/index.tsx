import { Icon } from '@iconify/react';
import  Link from 'next/link';

const Index = ({link, icon}:{link:string, icon:string}) => {
    return (
        <Link href={link} target="_blank" rel="noopener noreferrer"
            className="size-10 md:size-11 lg:size-12 hover:scale-103" >
            <div className="w-full h-full relative inline-flex items-center justify-center">
                <Icon 
                    icon="akar-icons:circle-fill" color='var(--accent)' 
                    className='w-full h-full'    />
                <Icon icon={icon} className="absolute w-5/8 h-5/8 text-[var(--soft-accent)]" />
            </div>
        </Link>
    );
};

export default Index;