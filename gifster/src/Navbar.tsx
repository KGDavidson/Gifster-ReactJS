import { useState } from "react";

const Navbar = () => {
    const [hamburgerMenu, setHamburgerMenu] = useState(false);

    const toggleMenu = () => {
        setHamburgerMenu(!hamburgerMenu);
    };

    return (
        <div className="navbar">
            <a href="/">
                <h1>GIFSTER</h1>
            </a>
            <div className="buttonsRow">
                <NavbarButtons></NavbarButtons>
                <div className="uploadButton">Upload</div>
                <HamburgerButton toggleMenu={toggleMenu}></HamburgerButton>
            </div>
            <HamburgerMenu show={hamburgerMenu}></HamburgerMenu>
        </div>
    );
};

const HamburgerMenu = (props: { show: boolean }) => {
    return (
        <div
            className={
                props.show ? "hamburgerMenu fadeIn" : "hamburgerMenu fadeOut"
            }
        >
            <HamburgerSection
                title={["Reactions", "https://giphy.com/reactions"]}
            ></HamburgerSection>
            <HamburgerSection
                title={["Entertainments", "https://giphy.com/entertainment"]}
            ></HamburgerSection>
            <HamburgerSection
                title={["Sports", "https://giphy.com/sports"]}
            ></HamburgerSection>
            <HamburgerSection
                title={["Categories", "https://giphy.com/categories"]}
                lColumn={{
                    "GIPHY Studios": "https://giphy.com/giphystudios",
                    Animals: "https://giphy.com/categories/animals",
                    Artists: "https://giphy.com/artists",
                    Emotions: "https://giphy.com/categories/emotions",
                    Entertainment: "https://giphy.com/entertainment",
                }}
                rColumn={{
                    Gaming: "https://giphy.com/gaming",
                    "Holidays/Greetings": "https://giphy.com/greetings",
                    Reactions: "https://giphy.com/categories/reactions",
                    Sports: "https://giphy.com/categories/sports",
                    Clips: "https://giphy.com/clips",
                }}
            ></HamburgerSection>
            <HamburgerSection
                title={["Stickers", "https://giphy.com/stickers"]}
                lColumn={{
                    Originals:
                        "https://giphy.com/originals/stickers/studios-stickers",
                    Trending: "https://giphy.com/stickers/trending",
                }}
                rColumn={{
                    Reactions: "https://giphy.com/stickers/reactions",
                    Packs: "https://giphy.com/stickers/packs",
                }}
            ></HamburgerSection>
            <HamburgerSection
                title={["About", "https://giphy.com/about"]}
                lColumn={{
                    DMCA: "https://giphy.com/dmca",
                    FAQ: "https://giphy.com/faq",
                    Jobs: "https://jobs.giphy.com/",
                }}
                rColumn={{
                    "Engineering Blog": "https://engineering.giphy.com/blog/",
                    "GIPHY Arts": "https://arts.giphy.com/",
                    "Community Guidelines":
                        "https://giphy.com/community-guidelines",
                }}
            ></HamburgerSection>
        </div>
    );
};

const HamburgerSection = (props: {
    title: string[];
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
            <a href={props.title[1]}>
                <h2>
                    {props.title[0]}
                    <span>▻</span>
                </h2>
            </a>
            {columns}
        </div>
    );
};

const HamburgerButton = (props: { toggleMenu: () => void }) => {
    const [closed, setClosed] = useState(true);

    const clickCallback = () => {
        setClosed(!closed);
        props.toggleMenu();
    };

    return (
        <svg
            onClick={clickCallback}
            rotate="-90deg"
            width="39"
            height="39"
            xmlns="http://www.w3.org/2000/svg"
            className="hamburgerButton"
        >
            <g fill="none" fillRule="evenodd">
                {closed ? (
                    <path
                        d="M12 12h-1v-2h19v2H12zm-4 9H7v-2h23v2H8zm4 8h-1v-2h19v2H12z"
                        fill="#0CF"
                    ></path>
                ) : (
                    <path
                        d="M10.858 12.272l15.87 15.87.756.756 1.414-1.414-.756-.756-15.87-15.87-.756-.756-1.414 1.414z M28.142 12.272l-15.87 15.87-.756.756-1.414-1.414.756-.756 15.87-15.87.756-.756 1.414 1.414z"
                        fill="#0CF"
                    ></path>
                )}
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
