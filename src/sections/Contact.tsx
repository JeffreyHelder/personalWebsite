import ContactForm from "../components/form";
import LargeContainer from "../components/layout/containers/largeContainer";

export default function ContactSection({
    id,
}: Readonly<{
    id: string;
}>) {
    return (
        <div id={id} className="flex flex-col item-center w-full py-8">
            <LargeContainer>
                <h2 className="text-center text-white font-light md:text-5xl text-3xl">Contact Me</h2>
                <p className="text-center text-gray-300 font-light text-lg mt-1">Easily get a hold on me by using this amazing form</p>
            </LargeContainer>
            <div className="max-w-[400px] w-full gap-6 mx-auto py-4">
                <ContactForm />
            </div>
        </div>
    );
};
