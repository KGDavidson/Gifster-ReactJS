import SectionGIFs from "./SectionGIFs";

const SearchSection = (props: { searchText: string }) => {
    return (
        <div className="section">
            <SectionGIFs
                url="https://api.giphy.com/v1/gifs/search?"
                searchText={props.searchText}
            ></SectionGIFs>
        </div>
    );
};

export default SearchSection;
