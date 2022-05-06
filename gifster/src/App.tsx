import React, { FC } from "react";
import Navbar from "./Navbar";
import "./styles/index.scss";

const App: FC = () => {
    return (
        <div className="container">
            <Navbar></Navbar>
        </div>
    );
};

export default App;
