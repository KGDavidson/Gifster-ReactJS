const SearchBar = () => {
    return (
        <div className="searchBar">
            <input></input>
            <div className="placeholder">
                <p>Search all the GIFs and Stickers</p>
                <p>@username to search channels</p>
                <p>Search all the GIFs and Stickers</p>
            </div>
            <SearchButton></SearchButton>
        </div>
    );
};

const SearchButton = () => {
    return (
        <div className="searchButton">
            <svg
                width="25px"
                version="1.1"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <title>search</title>
                <desc>Created with Sketch.</desc>
                <defs>
                    <path
                        id="a"
                        d="m11.548 20.409-7.301 7.7919c-0.56643 0.60452-1.5157 0.63539-2.1202 0.068957-0.60452-0.56643-0.63539-1.5157-0.068957-2.1202l7.3479-7.8419c-1.4462-1.8706-2.3081-4.2288-2.3081-6.7896 0-6.069 4.8414-11 10.827-11 5.986 0 10.827 4.931 10.827 11 0 6.069-4.8414 11-10.827 11-2.3854 0-4.5891-0.78305-6.377-2.1091zm6.377-0.89089c4.3167 0 7.8274-3.5756 7.8274-8s-3.5107-8-7.8274-8-7.8274 3.5756-7.8274 8 3.5107 8 7.8274 8z"
                    />
                </defs>
                <g fill="none" fillRule="evenodd">
                    <mask id="b" fill="white">
                        <use xlinkHref="#a" />
                    </mask>
                    <use fill="#FFFFFF" fillRule="nonzero" xlinkHref="#a" />
                    <g mask="url(#b)">
                        <g transform="translate(.25 .25)"></g>
                    </g>
                </g>
            </svg>
        </div>
    );
};
export default SearchBar;
