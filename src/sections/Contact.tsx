import { sectionTitles } from "../DataSource";
import ContactForm from "../components/form";
import SectionHeader from "../components/sectionHeader";

export default function ContactSection({
    id,
}: Readonly<{
    id: string;
}>) {
    return (
        <div id={id} className="flex flex-col item-center w-full py-8">
        <SectionHeader title={sectionTitles.contact.title} subheading={sectionTitles.contact.subtitle}/>
            <div className="max-w-[400px] w-full gap-6 mx-auto py-4">
                <ContactForm />
            </div>
        </div>
    );
};
