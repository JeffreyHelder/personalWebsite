import LargeContainer from "../components/layout/containers/largeContainer";
import PortfolioCard from "../components/portCard";
import pieces from "../port-pieces";

export default function WorkSection({
    id,
}: Readonly<{
    id: string;
}>) {
    return (
        <div id={id} className="flex flex-col item-center w-full py-8">
            <LargeContainer>
                <h2 className="text-center text-white font-light md:text-5xl text-3xl">Some Work</h2>
                <p className="text-center text-gray-300 font-light text-lg mt-1">Here's a collection of pieces I've made.</p>
            </LargeContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl w-full gap-6 mx-auto py-10">
                {pieces.map((piece) => (
                <PortfolioCard key={piece.title} title={piece.title} image={piece.image} link={piece.link} description={piece.description} repo={piece.repo} />
                ))}
            </div>
        </div>
    );
};
