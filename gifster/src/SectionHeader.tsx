const SectionHeader = (props: {
    title: string;
    subtitle: string;
    logo: JSX.Element;
}) => {
    return (
        <div className="sectionHeader">
            <div className="left">
                {props.logo}
                <h3>{props.title}</h3>
            </div>
            <p>
                {props.subtitle} <span>▻</span>
            </p>
        </div>
    );
};

export default SectionHeader;
