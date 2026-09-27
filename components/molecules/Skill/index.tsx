import { Icon } from '@iconify/react';

import { Text } from '@/components/atoms/texts/Parragraphs';
import SkillLevel  from '@/components/atoms/bars/SkillLevel';

interface skillInfo{
    icon?:string
    skill:string,
    perc:number,
}

const MainSkill = ({icon="", skill, perc}: skillInfo) => {
    const isIcon = icon !== "";
    return(
        <div className="w-full h-fit flex flex-col gap-1 items-center justify-start">
            <div className="w-full h-fit flex flex-row items-center justify-between">
                <div className='w-fit h-4 flex flex-row gap-2 justify-start items-center'>
                    { isIcon && <Icon icon={icon}/> }
                    <Text text={skill} align="text-left"/>
                </div>
                
                <Text text={perc.toString()+"%"} align="text-right"/>
            </div>
            <SkillLevel perc={perc} />
        </div>
    );
}

const ExtraSkill = ({icon="wordpress:list-item", skill}:{icon?:string, skill:string}) => {
    return(
        <div className="w-full h-6 flex flex-row gap-2 items-center justify-start">
          <Icon icon={icon} />
        <Text text={skill} align="text-left"/>
        </div>
    );
}

export {MainSkill, ExtraSkill};