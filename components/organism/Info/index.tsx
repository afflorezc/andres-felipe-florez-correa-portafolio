import Education from '@/components/molecules/information/Education'; 
import { Text } from '@/components/atoms/texts/Parragraphs';
import { EducationSectCard } from '@/components/molecules/Card';
import { SideBarTitle  } from '@/components/atoms/texts/Titles';
import Avatar from '@/components/atoms/Avatar';
import PersonalInfo from '@/components/molecules/information/PersonalInfo';

interface studyDetails{
    role:string,
    institution:string,
    initDate:string,
    endDate:string,
    title:string,
    description:string
}

interface personalInfo{
    field:string,
    value:string,
    accented?:boolean
}

export function EducationCard({details, middle=true}:{details:studyDetails, middle?:boolean}){
    return(
        <div className={`w-full flex flex-col md:flex-row items-start justify-start gap-10 pb-2 
                        md:gap-30 pb-3 lg:gap-40 lg:pb-4 ${middle && 'border-(--border-color) border-b-1'}`}>
            <EducationSectCard title={details.institution}>
                 <Education role="Student" date={details.initDate +" - "+ details.endDate}/>
            </EducationSectCard>

            <EducationSectCard title={details.title}>
                <Text text={details.description} align="text-left"/>
            </EducationSectCard> 
        </div>
    );
}

export function PersonalAvatar({name, profession}:{name:string, profession:string}){
    return(
        <div className="w-full flex flex-col items-center justify-start gap-4 md:gap-6 lg:gap-8">
            <Avatar />
            <div className="w-full flex flex-col items-center justify-start gap-1 lg:gap-1.5">
                <SideBarTitle title={name}/>
                <Text text={profession} align="text-center"/>
            </div>

        </div>
    );
}

export function PersonalData({data}:{data:personalInfo[]}){
    return(
        <div className="w-full flex flex-col gap-1.5 lg:gap-2 items-center justify-start">
            { data.map( (infoField, index) => (
                <PersonalInfo key={index} field={infoField.field} value={infoField.value}
                    accent={infoField.accented} />
            ))}
        </div>
    );
}