import PortfolioCard from "../components/portCard";
import SectionHeader from "../components/sectionHeader";
import pieces, { sectionTitles } from "../DataSource";

export default function WorkSection({
    id,
}: Readonly<{
    id: string;
}>) {
    return (
        <div id={id} className="flex flex-col item-center w-full py-8">
        <SectionHeader title={sectionTitles.portfolio.title} subheading={sectionTitles.portfolio.subtitle}/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl w-full gap-6 mx-auto py-10">
                {pieces.map((piece) => (
                <PortfolioCard key={piece.title} title={piece.title} image={piece.image} link={piece.link} description={piece.description} repo={piece.repo} />
                ))}
            </div>
        </div>
    );
};
