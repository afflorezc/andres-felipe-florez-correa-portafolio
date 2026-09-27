import Image from "next/image";
const Index = () => {
    return(
        <div className="relative h-fit w-fit flex flex-col items-center justify-start">
            <div className="flex flex-row items-center justify-center overflow-hidden
                            size-30 rounded-[3.7rem] md:size-34 md:rounded-[4.25rem]
                            lg:size-38 lg:rounded-[4.75rem] bg-(--card-background) ">
                <Image src="/me.png" alt="profile photo" width={152} height={152}/>
            </div>
            <div className="absolute top-[5.97rem] left-[5.97rem] md:top-[6.85rem] md:left-[6.85rem] 
                            lg:top-[7.665rem] lg:left-[7.665rem]  size-3 lg:size-4 absolute 
                            bg-(--available) rounded-lg"> </div>
        </div>
        
    );
}

export default Index;