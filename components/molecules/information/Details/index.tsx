import { SectionTitle } from "@/components/atoms/texts/Titles";
import { Text } from "@/components/atoms/texts/Parragraphs";
import Modal  from '@/components/molecules/Modal';
import { PortfolioLink } from "@/components/atoms/Buttons";

export default function Details({title, description,onClose,link=""}:
        {title:string, description:string,onClose:()=>void, link?:string}
){
    return(
        <Modal title={title} onClose={onClose} >
            <div className="w-full flex flex-col items-start gap-2 md:gap-4 lg:gap-6 p-4 md:p-6
                             lg:p-8 ">
                <SectionTitle title={title} />
                <Text text={description} align="text-left"/>
                { (link!=="") && 
                    <PortfolioLink text="Open in GitHub" link={link}/>}
            </div>
        </Modal>
    );
}
