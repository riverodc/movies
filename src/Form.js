import React from "react";

export default function Form(props) {
    const [cantidad, funEstado] = React.useState(0);
    const { movie } = props;

    return (
        <form>
        <h3>{movie.name}</h3>
        <h4>Entradas Disponibles {movie.available - cantidad}</h4>
        <button type="button" onClick={() =>
         funEstado(cantidad - 1)} disabled = {cantidad <= 0}> - </button >
        {cantidad}
        <button type="button" onClick={() =>
         funEstado(cantidad + 1)} disabled = { cantidad === movie.available}> + </button>


      </form>
    );
}