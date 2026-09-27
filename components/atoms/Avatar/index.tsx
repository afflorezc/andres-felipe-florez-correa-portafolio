import Image from "next/image";
const Index = () => {
    return(
        <div className="relative h-fit w-fit flex flex-col items-center justify-start">
            <div className="flex flex-row items-center justify-center overflow-hidden
                            size-38 bg-(--card-background) rounded-[4.75rem]">
                <Image src="/me.png" alt="profile photo" width={152} height={152}/>
            </div>
            <div className="absolute top-[7.665rem] left-[7.665rem] size-4 absolute 
                    bg-(--available) rounded-lg"> </div>
        </div>
        
    );
}

export default Index;