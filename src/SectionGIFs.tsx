import { useEffect, useState } from "react";
import GIF from "./GIF";

const SectionGIFs = (props: { url: string; searchText?: string }) => {
    const [gifs, setGIFs] = useState(null);

    useEffect(() => {
        const getTrending = () => {
          fetch(
              props.url +
                  new URLSearchParams({
                      api_key: process.env.REACT_APP_API_KEY || '',
                      q: props.searchText ?? "",
                  })
          )
              .then((response) =>
                  response.status === 200 ? response.json() : null
              )
              .then((json) => {
                  if (json !== null) {
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

      getTrending();
    }, [props]);

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
