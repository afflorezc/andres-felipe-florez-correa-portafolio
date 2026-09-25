
export function SectionIntro({text}:{text:string}){
    return <p className="w-full text-base text-(--secondary) text-normal text-center">{text}</p>
}

export function Text({text}:{text:string}){
    return <p className="w-full text-base text-(--secondary) text-normal text-left">{text}</p>
}

export function PersonalInfo({text}:{text:string}){
    return <p className="w-fit text-base text-(--primary) text-normal">{text}</p>
}

export function AccentedText({text}:{text:string}){
    return <p className="w-fit text-base text-(--accent) text-normal">{text}</p>
}

export function Date({date}:{date:string}){
    return(
        <div className="h-5 w-28 bg-(--accent) flex flex-col items-center justify-center p-px rounded-xs">
            <p className="w-fit text-xs text-normal text-(--card-background)">{date}</p>
        </div>
    )
}