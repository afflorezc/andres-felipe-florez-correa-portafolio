import { Text } from "@/components/atoms/texts/Parragraphs";

const Index = ({field, value, accent=false}: {field:string, value:string, accent?:boolean}) => {
    return(
        <div className="w-full h-fit flex flex-row items-center justify-between">
            <Text text={field} align="text-left" primary={true} />
            <Text text={value} align="text-right" primary={true} accented={accent}/>
        </div>
    );
}

export default Index;