import React, { FC, useState } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import TrendingSection from "./TrendingSection";
import "./styles/index.scss";
import ArtistsSection from "./ArtistsSection";
import SearchSection from "./SearchSection";

const App: FC = () => {
    const [searchText, setSearchText] = useState("");

    const onSearch = (e: any, input: string) => {
        e.preventDefault();
        console.log(input);
        setSearchText(input);
    };

    return (
        <div className="container">
            <Navbar></Navbar>
            <SearchBar onSearch={onSearch}></SearchBar>
            {!searchText ? (
                <div>
                    <TrendingSection></TrendingSection>
                    <ArtistsSection></ArtistsSection>
                </div>
            ) : (
                <SearchSection searchText={searchText}></SearchSection>
            )}
        </div>
    );
};

export default App;
