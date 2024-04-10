export default function TemplateComponent(props: { title: string; }) {
    return (
        <div>
            <img src="jeffrey-helder.svg" alt='Jeffrey Helder' width={50} height={50}/>
            <h2>{props.title}</h2>
        </div>
    );
};
