import React from "react";
import ComponenteButton from "./ComponenteButton";

const ComponenteInput = ({ nombre, cambiarNombre, contraseña, habilitar }) => {
  console.log(contraseña);

  const habilitarBoton = (e) => {
    if (e.target.value === "252525") {
      habilitar(true);
      console.log(contraseña);
      return;
    }
    habilitar(false);
  };

  return (
    <div>
      <form className="formulario">
        <label>
          Nombre : <span className="nombre">{nombre}</span>
        </label>
        <input
          type="text"
          onChange={(e) => cambiarNombre(e.target.value)}
          placeholder="Escribe tu nombre..."
          className="input-nombre"
        />
        <label>Contraseña</label>
        <input
          type="number"
          onChange={habilitarBoton}
          placeholder="Escribe la contraseña..."
          className="input-contraseña"
        />
        {contraseña ? <ComponenteButton /> : null}
      </form>
    </div>
  );
};

export default ComponenteInput;
