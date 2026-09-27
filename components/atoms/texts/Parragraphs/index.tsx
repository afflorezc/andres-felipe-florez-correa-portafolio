interface textProps{
    text:string,
    align:string,
    primary?:boolean,
    accented?:boolean
}

export function Text({text, align, primary=false, accented=false}:textProps){
    return <p className={`w-fit text-xs md:text-sm xl:text-base ${accented? 'text-(--accent)': 
            primary? 'text-(--primary)':'text-(--secondary)'} text-normal ${align}`}>{text}</p>
}

export function Date({date}:{date:string}){
    return(
        <div className="h-5 w-32 bg-(--accent) flex flex-col items-center justify-center p-px rounded-xs">
            <p className="text-[10px] md:text-xs text-normal text-(--card-background)">{date}</p>
        </div>
    )
}