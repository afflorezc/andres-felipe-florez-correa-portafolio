import { Icon } from '@iconify/react';
import  Link from 'next/link';

const Index = ({link, icon}:{link:string, icon:string}) => {
    return (
        <Link href={link} target="_blank" rel="noopener noreferrer"
            className="h-8 w-8 md:h-12 w-12 lg:h-(--icon-size) lg:w-(--icon-size)" >
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