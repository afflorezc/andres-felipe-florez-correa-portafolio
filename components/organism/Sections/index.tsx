import React from 'react';
import Image from 'next/image';

import SocialNetworkLink from '@/components/atoms/icons/SocialNetworkLink';
import { SectionStart, HeroStart } from '@/components/molecules/information/SectionStart';
import { PersonalAvatar, PersonalData } from '../Info';
import { SkillsWithBar, ExtraSkills } from '../lists/SkillsList';
import { SideBarTitle } from '@/components/atoms/texts/Titles';
import { Text } from '@/components/atoms/texts/Parragraphs';

interface mainTitle{
    myName:string,
    specialty:string,
    profesion:string
}

interface personalInfo{
    field:string,
    value:string,
    accented?:boolean
}

interface skillInfo{
    icon?:string
    skill:string,
    perc:number,
}

interface extraSkill{
    icon?:string,
    skill:string
}

interface skillsData{
    title:string,
    data:skillInfo[]
}

interface iconInfo{
    icon:string,
    link:string
}

export function MainSection({title, description, children}
        :Readonly<{title:string, description:string, children:React.ReactNode}>){
    return(
        <div className="w-full flex flex-col gap-12 items-center justify-start">
            <SectionStart title={title} description={description}/>
            {children}
        </div>
    );
}

export function Hero({title, description}:{title:mainTitle, description:string}){
    return(
        <div className="w-full flex flex-row items-end justify-between bg-(--card-background)">
            <HeroStart title={title} description={description}/>
            <Image src="/me.png" alt="profile-photo"  width={360} height={480}/>
        </div>
    );
}

export function SideBar({name, profession, personalData, skills, extraSkills}:
            { name:string, profession:string, personalData:personalInfo[],
              skills:skillsData[], extraSkills:extraSkill[]
            }){
    return(
        <aside className="w-76 h-full shrink-0 overflow-y-auto flex flex-col p-10 gap-12 border-r-1 
                        border-(--border-color) scrollbar-none bg-(--sidebar-background)">
            <div className="w-full flex flex-col gap-22">
                <PersonalAvatar name={name} profession={profession} />
                <PersonalData data={personalData}/>
            </div>

            { skills.map( (skill, index) => (
                <SkillsWithBar key={index} title={skill.title} skills={skill.data}/>
            ))}
            
            <ExtraSkills title="Extra Skills" skills={extraSkills} />
        </aside>
    );
}

export function SocialBar({icons}:{icons:iconInfo[]}){
    return(
        <aside className="w-23 h-full flex flex-col items-center justify-start bg-(--sidebar-background)
                          gap-4 pt-10 shrink-0 overflow-hidden border-l-1 border-(--border-color)">
            <SideBarTitle title="Links" primary={false} />
            { icons.map( (icon, index) => (
                <SocialNetworkLink key={index} link={icon.link} icon={icon.icon} />
            ))}

        </aside>
    );
}

export function Footer(){
    return(
        <footer className="w-full shrink-0 h-15 flex flex-row items-center justify-center 
                           bg-(--card-background)">
            <Text text="All Rights Reserved" align="text-center" />
        </footer>
    );
}