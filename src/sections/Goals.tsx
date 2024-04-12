import { goalItems } from "../DataSource";
import LargeContainer from "../components/layout/containers/largeContainer";

export default function GoalsSection({
    id,
}: Readonly<{
    id: string;
}>) {
    return (
        <div id={id} className="flex pt-20 pb-14 flex-col">
            <div className="flex py-0 flex-col lg:flex-row gap-0 md:gap-5 max-w-screen-xl mx-auto w-full">
                {goalItems.map((item) => (
                    <LargeContainer key={item.title}>
                        <h2 className="text-center text-white font-light md:text-2xl text-xl">{item.title}</h2>
                        <p className="text-gray-400 text-sm text-center font-light mt-2 md:text-base">
                            {item.description}
                        </p>
                    </LargeContainer>
                ))}
            </div>
        </div>
    );
};
