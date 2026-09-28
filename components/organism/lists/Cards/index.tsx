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
    fullDescription:string,
    link:{ text: string, ref: string}
}

const Cards = ({cards}:{cards:CardInfo[]}) => {
    return(
        <div className="w-full flex flex-row flex-wrap items-start justify-center gap-2.5 md:gap-3.5 lg:gap-4">
            { cards.map( (card, index) => (
                <Card key={index} icon={card.icon} title={card.title} text={card.description} />
            ))}
        </div>
    );
}

const PortfolioCards = ({detailLinkText, portfolios}:{detailLinkText:string, portfolios:PortfolioInfo[]}) =>{
    return(
        <div className="w-full h-fit flex flex-row overflow-x-auto items-start justify-start gap-10
                        md:gap-12 lg:gap-14 scrollbar-thin">
            { portfolios.map( (portfolio, index) => (
                <PortfolioCard key={index} detailLinkText={detailLinkText} portfolio={portfolio}/>
            ))}
        </div>
    );
}

export { Cards, PortfolioCards };