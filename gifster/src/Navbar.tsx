const Navbar = () => {
    return (
        <div className="navbar">
            <h1>GIFSTER</h1>
            <div className="buttonsRow">
                <div className="uploadButton">Upload</div>
                <HamburgerButton></HamburgerButton>
            </div>
            <HamburgerMenu></HamburgerMenu>
        </div>
    );
};

const HamburgerMenu = () => {
    return (
        <div className="hamburgerMenu">
            <HamburgerSection title="Reactions"></HamburgerSection>
            <HamburgerSection title="Entertainments"></HamburgerSection>
            <HamburgerSection title="Sports"></HamburgerSection>
            <HamburgerSection
                title="Categories"
                lColumn={{
                    "GIPHY Studios": "",
                    Animals: "",
                    Artists: "",
                    Emotions: "",
                    Entertainment: "",
                }}
                rColumn={{
                    Gaming: "",
                    "Holidays/Greetings": "",
                    Reactions: "",
                    Sports: "",
                    Clips: "",
                }}
            ></HamburgerSection>
            <HamburgerSection
                title="Stickers"
                lColumn={{
                    Originals: "",
                    Trending: "",
                }}
                rColumn={{
                    Reactions: "",
                    Packs: "",
                }}
            ></HamburgerSection>
            <HamburgerSection
                title="About"
                lColumn={{
                    DMCA: "",
                    FAQ: "",
                    Jobs: "",
                }}
                rColumn={{
                    "Engineering Blog": "",
                    "GIPHY Arts": "",
                    "Community Guidelines": "",
                }}
            ></HamburgerSection>
        </div>
    );
};

const HamburgerSection = (props: {
    title: string;
    lColumn?: { [name: string]: string };
    rColumn?: { [name: string]: string };
}) => {
    const columns = (() => {
        if (props.lColumn === undefined || props.rColumn === undefined) {
            return <div></div>;
        }
        return (
            <div className="columns">
                <div className="column">
                    {Object.keys(props.lColumn).map((key) => {
                        return <a href={props.lColumn?.key}>{key}</a>;
                    })}
                </div>
                <div className="column">
                    {Object.keys(props.rColumn).map((key) => {
                        return <a href={props.rColumn?.key}>{key}</a>;
                    })}
                </div>
            </div>
        );
    })();

    return (
        <div className="section">
            <h2>
                {props.title}
                <span>▻</span>
            </h2>
            {columns}
        </div>
    );
};

const HamburgerButton = () => {
    return (
        <svg
            rotate="-90deg"
            width="39"
            height="39"
            xmlns="http://www.w3.org/2000/svg"
            className="hamburgerButton"
        >
            <g fill="none" fill-rule="evenodd">
                <path d="M0 0h39v39H0z"></path>
                <path
                    d="M12 12h-1v-2h19v2H12zm-4 9H7v-2h23v2H8zm4 8h-1v-2h19v2H12z"
                    fill="#0CF"
                ></path>
            </g>
        </svg>
    );
};

const NavbarButtons = () => {
    return (
        <div className="navbarButtons">
            <NavbarButton text="Reactions"></NavbarButton>
            <NavbarButton text="Entertainments"></NavbarButton>
            <NavbarButton text="Sports"></NavbarButton>
            <NavbarButton text="Categories"></NavbarButton>
            <NavbarButton text="Stickers"></NavbarButton>
            <NavbarButton text="About"></NavbarButton>
        </div>
    );
};

const NavbarButton = (props: { text: string }) => {
    return (
        <div className="navbarButton">
            <p>{props.text}</p>
        </div>
    );
};

export default Navbar;
