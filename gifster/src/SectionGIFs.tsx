import { useEffect, useState } from "react";
import { API_KEY } from "./API_KEY";

interface GIF {
    type: string;
    bitly_url: string;
    id: string;
    embed_url: string;
    title: string;
}

const SectionGIFs = (props: { url: string }) => {
    const [gifs, setGIFs] = useState(null);

    const getTrendingGIFs = () => {
        fetch(
            props.url +
                new URLSearchParams({
                    api_key: API_KEY,
                })
        )
            .then((response) =>
                response.status === 200 ? response.json() : null
            )
            .then((json) => {
                console.log(json);
                if (json !== null) {
                    const tmpGIFs = json.data.filter(
                        (gif: GIF) =>
                            gif === undefined ||
                            (gif.type !== "sticker" && gif.type !== "gif")
                    );
                    console.log(tmpGIFs);
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
        getTrendingGIFs();
    }, []);

    return (
        <div className="gifs">
            {gifs != null ? (
                (gifs as GIF[])
                    .slice(0, 30)
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
