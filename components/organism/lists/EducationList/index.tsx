import { EducationCard } from "../../Info"

interface studyDetails{
    role:string,
    institution:string,
    initDate:string,
    endDate:string,
    title:string,
    description:string
}

const Index = ({studies}:{studies:studyDetails[]}) => {
    const total = studies.length;
    return(
      <div className="w-full flex flex-col items-center justify-start gap-3 p-4
                      md:p-6 lg:gap-4 lg:p-8 bg-(--card-background)">
        {studies.map( (study, index) => (
            <EducationCard key={index} details={study} middle={index+1!==total} />
        ))}
      </div>
    );
}

export default Index;