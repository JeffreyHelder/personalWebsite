import { heroHeader } from "../DataSource";
import LargeContainer from "../components/layout/containers/largeContainer";

export default function HeroSection({
    id,
}: Readonly<{
    id: string;
}>) {
    return (
        <div id={id} className="flex">
            <LargeContainer>
                <h1 className="text-center text-white font-light md:text-5xl text-3xl">{heroHeader.title}</h1>
                <h2 className="text-center text-gray-300 font-light text-xl mt-1">{heroHeader.subTitle}</h2>
                <p className="text-center text-gray-400 font-light text-md md:text-lg mt-4 max-w-screen-md">{heroHeader.description}</p>
                <a href="#portfolio" className="mt-8 rounded-md py-3 px-14 bg-gradient-to-t from-violet-800 to-blue-500 text-white hover:brightness-125 text-xl transition-all duration-150 ease-in-out">Skip To Portfolio</a>
            </LargeContainer>
        </div>
    );
};
