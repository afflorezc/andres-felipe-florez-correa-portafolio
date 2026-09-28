import React from 'react';
import Image from 'next/image';

import SocialNetworkLink from '@/components/atoms/icons/SocialNetworkLink';
import { SectionStart, HeroStart } from '@/components/molecules/information/SectionStart';
import { PersonalAvatar, PersonalData } from '../Info';
import { SkillsWithBar, ExtraSkills } from '../lists/SkillsList';
import { SectionTitle, SideBarTitle } from '@/components/atoms/texts/Titles';
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

interface extraSkillData{
    title:string,
    data:extraSkill[]
}

interface iconInfo{
    icon:string,
    link:string
}

export function MainSection({title, description, children}
        :Readonly<{title:string, description:string, children:React.ReactNode}>){
    return(
        <div className="w-full flex flex-col gap-8 md:gap-10 lg:gap-12 items-center justify-start">
            <SectionStart title={title} description={description}/>
            {children}
        </div>
    );
}

export function Hero({title, description, fullDescription, messageTitle, buttonText}:
                { title:mainTitle, description:string, fullDescription:string,
                    messageTitle:string, buttonText:string }){
    return(
        <div className="w-full flex flex-col-reverse items-center md:flex-row md:items-end justify-between bg-(--card-background)">
            <HeroStart title={title} description={description} fullDescription={fullDescription}
                messageTitle={messageTitle} buttonText={buttonText}/>
            <Image src="/me.png" alt="profile-photo"  width={360} height={480}/>
        </div>
    );
}

export function SideBar({name, profession, personalData, skills, extraSkills}:
            { name:string, profession:string, personalData:personalInfo[],
              skills:skillsData[], extraSkills:extraSkillData
            }){
    return(
        <aside className="hidden w-53 lg:inline-flex md:w-65 xl:w-76 h-full shrink-0 overflow-y-auto flex flex-col 
                        p-5 gap-8 md:p-8 gap-10 xl:p-10 xl:gap-12 border-r-1 
                        border-(--border-color) scrollbar-none bg-(--sidebar-background)">
            <div className="w-full flex flex-col gap-18 md:gap-20 xl:gap-22">
                <PersonalAvatar name={name} profession={profession} />
                <PersonalData data={personalData}/>
            </div>

            { skills.map( (skill, index) => (
                <SkillsWithBar key={index} title={skill.title} skills={skill.data}/>
            ))}
            
            <ExtraSkills title={extraSkills.title} skills={extraSkills.data} />
        </aside>
    );
}

export function PersonalDetails({personalData, icons, skills, extraSkills}:
            { personalData:personalInfo[], icons:iconInfo[],
              skills:skillsData[], extraSkills:extraSkillData
            }){

    return(
        <div className="lg:hidden w-full flex flex-col gap-6 md:gap-10">
            <div className="w-full grid grid-flow-row grid-cols-2 gap-6 items-center md:gap-10">
                <PersonalData data={personalData}/>
                { skills.map( (skill, index) => (
                    <SkillsWithBar key={index} title={skill.title} skills={skill.data}/>
                ))}
                
                <ExtraSkills title={extraSkills.title} skills={extraSkills.data} />
            </div>
            <div className="md:hidden flex flex-row gap-2 items-center justify-start">
                <SectionTitle title="Sigueme:" />
                { icons.map( (icon, index) => (
                    <SocialNetworkLink key={index} link={icon.link} icon={icon.icon} />
                ))}
            </div>
        </div>
        
    );

}

export function SocialBar({icons}:{icons:iconInfo[]}){
    return(
        <aside className="hidden md:inline-flex w-16 md:w-18 lg:w-20 h-full flex flex-col items-center justify-start bg-(--sidebar-background)
                          gap-2 md:gap-3 lg:gap-4 pt-10 shrink-0 overflow-hidden border-l-1 border-(--border-color)">
            <SideBarTitle title="Links" primary={false} />
            { icons.map( (icon, index) => (
                <SocialNetworkLink key={index} link={icon.link} icon={icon.icon} />
            ))}

        </aside>
    );
}

export function Footer(){
    return(
        <footer className="w-full shrink-0 h-9 md:h-12 lg:h-15 flex flex-row items-center justify-center 
                           bg-(--card-background)">
            <Text text="All Rights Reserved" align="text-center" />
        </footer>
    );
}