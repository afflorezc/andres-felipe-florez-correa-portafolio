import { SideBarTitle } from "@/components/atoms/texts/Titles";
import { MainSkill, ExtraSkill } from "@/components/molecules/Skill";

type skillInfo = {
    icon?:string
    skill:string,
    perc:number,
}

type extraSkill = {
    icon?:string,
    skill:string
}

const SkillsWithBar = ({title, skills}:{title:string, skills:skillInfo[]}) => {
    return(
        <div className="w-full flex flex-col gap-2.5 lg:gap-3 items-start justify-start">
            <SideBarTitle title={title}/>
            { skills.map(sk => (
                <MainSkill key={sk.skill} icon={sk.icon} skill={sk.skill} perc={sk.perc} />
            ))}
        </div>
    );
}

const ExtraSkills = ({title, skills}:{title:string, skills:extraSkill[]}) => {
    return(
        <div className="w-full flex flex-col gap-1.5 md:gap-2 lg:gap-3 items-start justify-start">
            <SideBarTitle title={title}/>
            { skills.map( sk => (
                <ExtraSkill key={sk.skill} icon={sk.icon}  skill={sk.skill}/>
                )) }

        </div>
    );
}

export { SkillsWithBar, ExtraSkills }