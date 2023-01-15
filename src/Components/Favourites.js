import Name from "./Name.js";
import "../App.css";
export default function Favourites({ favs, handleClick }) {
  return (
    <div className="favourites">
      <h4>Favourites:</h4>
      {favs && (
        <div className="favContainer">
          {favs.map((e) => {
            return <Name e={e} handleClick={handleClick} />;
          })}
        </div>
      )}
    </div>
  );
}
