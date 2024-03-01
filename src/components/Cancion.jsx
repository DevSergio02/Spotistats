import { Link } from "react-router-dom";

export const Cancion = (props) => {
  return (
    <div className="cancion-item">
      <Link to={`/cancion/${props.id}`}>
        <img src={props.imagenUrl} />
      </Link>
      <h2>{props.titulo}</h2>
    </div>
  );
};

export default Cancion;
