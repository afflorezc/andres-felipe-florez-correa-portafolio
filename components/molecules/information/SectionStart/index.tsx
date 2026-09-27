import { SectionTitle, MainTitle } from "@/components/atoms/texts/Titles";
import { Text } from "@/components/atoms/texts/Parragraphs";
import { MainButton } from "@/components/atoms/Buttons";

interface mainTitle{
    myName:string,
    specialty:string,
    profesion:string
}

const SectionStart = ({title, description}: {title:string, description:string}) =>{
    return(
        <div className="w-110 flex flex-col items-center justify-start gap-6">
            <SectionTitle title={title} />
            <Text text={description} align="text-center"/>     
        </div>
    );
}

const HeroStart = ({title, description}: {title:mainTitle, description:string}) =>{
    return(
        <div className="w-140 flex flex-col items-start justify-center gap-8 p-12">
            <MainTitle myName={title.myName} specialty={title.specialty} profession={title.profesion} />
            <div className="w-112"><Text text={description} align="text-left"/></div>  
            <MainButton text="HIRE ME!" />  
        </div>
    );
}

export { SectionStart, HeroStart };