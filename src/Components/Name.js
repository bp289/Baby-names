import "../App.css";

export default function Name({ e, handleClick }) {
  return (
    <div key={e.id} className={e.sex} onClick={() => handleClick(e)}>
      {e.name}
    </div>
  );
}
