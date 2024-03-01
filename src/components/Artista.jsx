import { Link } from "react-router-dom";

export const Artista = (props) => {
  return (
    <div className="artista-item">
      <Link to={`/artista/${props.id}`}>
        <img src={props.imagen} />
      </Link>
      <h2>{props.titulo}</h2>
    </div>
  );
};
export default Artista;
