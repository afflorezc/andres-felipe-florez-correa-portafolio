
interface mainTitle{
    myName:string;
    specialty:string;
    profession:string;
}

export function MainTitle({myName, specialty, profession}:mainTitle) {
    return(
        <div className="w-full text-2xl md:text-3xl xl:text-4xl text-(--primary) font-bold">
            <span> {`I'm ${myName}`} </span>
            <span className="text-(--accent)" >{specialty}</span>
            <span> {`of ${profession}`}</span>
        </div>
    );
}

export function SectionTitle({title}:{title:string}){
    return(
        <h1 className="w-fit text-xl md:text-2xl xl:text-3xl text-(--primary) font-bold" >{title}</h1>
    );
}

export function SideBarTitle({title, primary=true}:{title:string, primary?:boolean}){
    return(
        <h1 className={`w-fit text-sm md:text-base lg:text-lg ${primary ? 'text-(--primary)': 'text-(--soft-accent)'} 
                            font-medium`}>{title}</h1>
    )
}