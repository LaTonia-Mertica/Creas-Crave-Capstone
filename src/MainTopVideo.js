import React, { useState, useEffect } from "react";
import PalmTree from "./PalmTree.mp4";
import plusSignFavIcon from "./images/plusSignFavIcon.png";

export function MainTopVideo() {
  const videoName = "Main Top Video";
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    if (!window.localStorage.favoriteFavorites) {
      window.localStorage.favoriteFavorites = "";
    }
    let favoritedFavorites = window.localStorage.favoriteFavorites.split(",");
    if (favoritedFavorites.includes(videoName)) {
      setFavorited(true);
    }
  }, []);
  return (
    <div style={{ position: "relative" }}>
      <video
        autostart="true"
        autoPlay={false}
        muted="muted"
        src={PalmTree}
        className="vidContainer"
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        loop
        id="mainTopVideo"
        type="video/mp4"
      ></video>

      <a
        className="favIcon"
        href="/favorites"
        style={{
          position: "absolute",
          bottom: 81,
          left: 60,
          zIndex: 6,
          role: "button",
        }}
      >
        <img
          className={`plusSignFavIcon img-responsive ${
            favorited ? "favorited" : ""
          }`}
          style={{ width: "3%" }}
          src={plusSignFavIcon}
          alt="Plus Sign Icon"
          id="plusSignFavIcon"
          title="Fav This!"
          onClick={(event) => {
            event.preventDefault();

            setFavorited(!favorited);

            if (!window.localStorage.favoriteFavorites) {
              window.localStorage.favoriteFavorites = "";
            }
            let favoritedFavorites =
              window.localStorage.favoriteFavorites.split(",");
            if (favoritedFavorites.includes(videoName)) {
              alert("No Longer Favorited!");
              favoritedFavorites = favoritedFavorites.filter(
                (name) => name !== videoName
              );
            } else {
              favoritedFavorites.push(videoName);
              alert("Faved!");
            }
            window.localStorage.favoriteFavorites =
              favoritedFavorites.join(",");
          }}
        />
      </a>

      <a
        className="btn btn-secondary zoom"
        href="https://gumroad.com/l/VmnNl"
        style={{
          position: "absolute",
          bottom: 44,
          left: 50,
          zIndex: 5,
          backgroundColor: "#5ce1e6",
          border: "none",
          role: "button",
        }}
        data-cy="buy-main-vid"
      >
        BUY NOW
      </a>
    </div>
  );
}
export default MainTopVideo;