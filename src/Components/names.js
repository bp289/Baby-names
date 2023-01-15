import "../App.css";
import Name from "./Name.js";
import { useState } from "react";
import Favourites from "./Favourites";

function Names({ query, data }) {
  const [favs, setFavs] = useState([]);

  const handleClick = (name) => {
    if (favs.includes(name)) {
      setFavs(favs.filter((item) => item.name !== name.name));
    } else {
      setFavs([...favs, name]);
    }
  };
  return (
    <div>
      <Favourites favs={favs} handleClick={handleClick} />
      <div className="container">
        {query ? (
          <>
            {data
              .filter((e) => {
                return (
                  !favs.includes(e) &&
                  e.name.toLowerCase().includes(query.toLowerCase())
                );
              })
              .map((e) => {
                return <Name e={e} handleClick={handleClick} />;
              })}
          </>
        ) : (
          <>
            {data
              .filter((e) => !favs.includes(e))
              .map((e, key) => {
                return <Name e={e} handleClick={handleClick} />;
              })}
          </>
        )}
      </div>
    </div>
  );
}

export default Names;
