
const Index = ({perc}:{perc:number}) => {
    return (
        <div className="w-30 h-2 md:w-45 lg:w-55 border-[0.5px] border-(--accent)
                    rounded-lg p-[1px] flex flex-row items-start justify-start">
            
            <div className="h-full rounded-lg text-[var(--accent)] bg-(--accent)"
                    style={{width: `${perc}%`}}> </div>
        </div>
);
};

export default Index;