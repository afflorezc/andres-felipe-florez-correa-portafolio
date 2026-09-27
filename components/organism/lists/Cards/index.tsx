import { Card, PortfolioCard } from '@/components/molecules/Card';

interface CardInfo{
    icon:string,
    title:string,
    description:string
}

interface PortfolioInfo{
    image:string,
    title:string,
    description:string,
    link:{ text: string, ref: string}
}

const Cards = ({cards}:{cards:CardInfo[]}) => {
    return(
        <div className="w-full flex flex-row flex-wrap items-start justify-start gap-4">
            { cards.map( (card, index) => (
                <Card key={index} icon={card.icon} title={card.title} text={card.description} />
            ))}
        </div>
    );
}

const PortfolioCards = ({portfolios}:{portfolios:PortfolioInfo[]}) =>{
    return(
        <div className="w-full flex flex-row overflow-x-auto items-start justify-start gap-14 scrollbar-thin">
            { portfolios.map( (portfolio, index) => (
                <PortfolioCard key={index} portfolio={portfolio}/>
            ))}
        </div>
    );
}

export { Cards, PortfolioCards };