import LargeContainer from "./layout/containers/largeContainer";

type SectionHeaderProps = {
    title: string,
    subheading: string
}

const SectionHeader = ({title, subheading}: SectionHeaderProps)=> {
    return(
        <LargeContainer>
            <h2 className="text-center text-white font-light md:text-5xl text-3xl">{title}</h2>
            <p className="text-center text-gray-300 font-light text-lg mt-1 mb-6">{subheading}</p>
            <div className="w-[50%] border-gray-600 border-b-[1px] mx-auto"/>
        </LargeContainer>
    )
}

export default SectionHeader;