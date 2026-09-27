import { Text, Date } from '@/components/atoms/texts/Parragraphs';

const Index = ({role, date}:{role:string, date:string}) => {
    return(
        <div className="w-fit flex flex-row gap-7 items-center justify-left">
            <Text text={role} align='text-left'/>
            <Date date={date} />
        </div>
    );
}

export default Index;