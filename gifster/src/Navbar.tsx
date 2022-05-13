import {
    FC,
    JSXElementConstructor,
    ReactElement,
    ReactFragment,
    ReactPortal,
} from "react";

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>GIFSTER</h1>
            <div className="buttonsRow">
                <div className="uploadButton">Upload</div>
                <HamburgerButton></HamburgerButton>
            </div>
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
