
interface mainTitle{
    myName:string;
    specialty:string;
    profession:string;
}

export function MainTitle({myName, specialty, profession}:mainTitle) {
    return(
        <div className="w-150 text-5xl text-(--primary) font-bold">
            <span> {myName} </span>
            <span className="text-(--accent)" >{specialty}</span>
            <span> {profession }</span>
        </div>
    );
}

export function SectionTitle({title}:{title:string}){
    return(
        <h1 className="w-fit text-3xl text-(--primary) font-bold" >{title}</h1>
    );
}

export function SideBarTitle({title, primary=true}:{title:string, primary?:boolean}){
    return(
        <h1 className={`w-fit text-lg ${primary ? 'text-(--primary)': 'text-(--soft-accent)'} font-medium`}>{title}</h1>
    )
}