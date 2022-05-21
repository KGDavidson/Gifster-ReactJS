import { useEffect, useState } from "react";
import { API_KEY } from "./API_KEY";
import GIF from "./GIF";

const SectionGIFs = (props: { url: string; searchText?: string }) => {
    const [gifs, setGIFs] = useState(null);

    const getTrending = () => {
        fetch(
            props.url +
                new URLSearchParams({
                    api_key: API_KEY,
                    q: props.searchText ?? "",
                })
        )
            .then((response) =>
                response.status === 200 ? response.json() : null
            )
            .then((json) => {
                if (json !== null) {
                    const tmpGIFs = json.data.filter(
                        (gif: GIF) =>
                            gif === undefined ||
                            (gif.type !== "sticker" && gif.type !== "gif")
                    );
                    setGIFs(
                        json.data.map((gif: GIF) => {
                            return {
                                bitly_url: gif.bitly_url,
                                id: gif.id,
                                embed_url: gif.embed_url,
                                title: gif.title,
                            };
                        })
                    );
                }
            });
    };

    useEffect(() => {
        getTrending();
    }, []);

    return (
        <div className="gifs">
            {gifs != null ? (
                (gifs as GIF[])
                    .slice(0, 60)
                    .map((gif: GIF) => <GIFContainer gif={gif}></GIFContainer>)
            ) : (
                <div></div>
            )}
        </div>
    );
};

const GIFContainer = (props: { gif: GIF }) => {
    return (
        <div className="gif">
            <iframe title={props.gif.title} src={props.gif.embed_url}></iframe>
        </div>
    );
};

export default SectionGIFs;
