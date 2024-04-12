import LargeContainer from "../components/layout/containers/largeContainer";
import SectionHeader from "../components/sectionHeader";
import { aboutItems, sectionTitles } from "../DataSource";

type ListGroupProps = {
    title: string,
    children: React.ReactNode,
}

const ListWrapper = ({title, children}:  ListGroupProps) => {
    return(
        <LargeContainer>
            <h2 className="text-center text-white font-light md:text-2xl text-xl">{title}</h2>
            <ul className="text-gray-400 text-sm text-center font-light mt-2 md:text-lg">
                {children}
            </ul>
        </LargeContainer>
    )
}

export default function AboutSection({
    id,
}: Readonly<{
    id: string;
}>) {
    return (
        <div id={id} className="flex py-20 flex-col">
            <SectionHeader title={sectionTitles.about.title} subheading={sectionTitles.about.subtitle}/>
            <div className="flex flex-col lg:flex-row md:gap-10 max-w-screen-lg mx-auto w-full">
                <ListWrapper title='Work Life'>
                    {aboutItems.work.map((item, idx) => (
                        <li key={idx}>
                            {item}
                        </li>
                    ))}
                </ListWrapper>
                <ListWrapper title="Hobbies & Interests">
                    {aboutItems.hobbies.map((item, idx) => (
                        <li key={idx}>
                            {item}
                        </li>
                    ))}
                </ListWrapper>
            </div>
        </div>
    );
};
