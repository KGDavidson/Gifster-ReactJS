import React, { FC } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import "./styles/index.scss";

const App: FC = () => {
    return (
        <div className="container">
            <Navbar></Navbar>
            <SearchBar></SearchBar>
        </div>
    );
};

export default App;
