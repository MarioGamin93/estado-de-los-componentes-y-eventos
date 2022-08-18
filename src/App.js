import React from "react";
import { useState } from "react";
import ComponenteInput from "./components/ComponenteInput";

function App() {
  const [nombre, setNombre] = useState("Mario");
  const [contraseña, setContraseña] = useState(false);

  return (
    <div className="App">
      <h1>Estado de los componentes y eventos</h1>

      <ComponenteInput
        nombre={nombre}
        cambiarNombre={setNombre}
        contraseña={contraseña}
        habilitar={setContraseña}
      />
      
    </div>
  );
}

export default App;
