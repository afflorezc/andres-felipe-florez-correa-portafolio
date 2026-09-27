import { Icon } from '@iconify/react';

const Index = ({icon}:{icon:string}) => {
    return (
        <div className="size-12 md:size-14 lg:size-16 border-1 border-(--border-color)
                    lg:h-18 lg:w-18 border-solid rounded-lg bg-(--card-background)
                    relative inline-flex items-center justify-center">
            <Icon icon={icon} className='h-full w-full' color='var(--accent)'/>
        </div>
);
};

export default Index;