import TemplateContainer from "../components/containers/templateContainer";
import TemplateComponent from "../components/templateComponent";

export default function TemplateSection({
    id,
}: Readonly<{
    id: string;
}>) {
    return (
        <div id={id}>
            <TemplateContainer>
                <TemplateComponent title="Component - templateComp"/>
            </TemplateContainer>
        </div>
    );
};
