const SectionHeader = (props: {
    title: string;
    subtitle: string;
    logo: JSX.Element;
    url: string;
}) => {
    return (
        <div className="sectionHeader">
            <div className="left">
                {props.logo}
                <a href={props.url}>
                    <h3>{props.title}</h3>
                </a>
            </div>
            <a href={props.url}>
                {props.subtitle} <span>▻</span>
            </a>
        </div>
    );
};

export default SectionHeader;
