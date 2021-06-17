import { useState } from "react";
import { ElementoListado } from "./ElementoListado";

export const Listado = () => {
  const [cosas, setCosas] = useState([
    {
      id: 1,
      texto: "Cosa 1",
      editando: false,
    },
    {
      id: 2,
      texto: "Cosa 2",
      editando: false,
    },
    {
      id: 3,
      texto: "Cosa 3",
      editando: false,
    },
    {
      id: 4,
      texto: "Cosa 4",
      editando: false,
    },
  ]);
  const [anyadiendo, setAnyadiendo] = useState(false);
  const [nuevaCosa, setNuevaCosa] = useState("");

  const anyadirCosa = () => {
    setNuevaCosa("");
    setAnyadiendo(true);
  };

  const volver = () => {
    setAnyadiendo(false);
  };

  const anyadirElemento = (e) => {
    e.preventDefault();
    if (nuevaCosa === "") {
      return;
    }
    const tempCosas = cosas;
    tempCosas.push({ id: getLastId(), texto: nuevaCosa, editando: false });
    setCosas(tempCosas);
    setAnyadiendo(false);
  };

  const getLastId = () => cosas[cosas.length - 1].id + 1;

  const editarElemento = (idEditar) => {
    setCosas(
      cosas.map((cosa) => {
        return cosa.id === idEditar ? { ...cosa, editando: true } : cosa;
      })
    );
  };

  const borrarElemento = (idBorrar) => {
    setCosas(cosas.filter((cosa) => cosa.id !== idBorrar));
  };

  return (
    <>
      <button className="btn btn-primary mb-3" onClick={anyadirCosa}>
        Añadir cosica
      </button>
      {anyadiendo ? (
        <div className="d-flex justify-content-center">
          <form className="formulario">
            <input
              type="text"
              placeholder="Introduce nueva cosa"
              value={nuevaCosa}
              onChange={(e) => setNuevaCosa(e.target.value)}
            ></input>
            <>
              <button
                className="btn btn-success mt-3 mr-2"
                onClick={(e) => anyadirElemento(e)}
              >
                Guardar elemento
              </button>
              <button className="btn btn-secondary mt-3" onClick={volver}>
                Volver
              </button>
            </>
          </form>
        </div>
      ) : (
        <ul className="listado list-group">
          {cosas.map((cosa) => (
            <ElementoListado
              key={cosa.id}
              cosa={cosa}
              editarElemento={() => editarElemento(cosa.id)}
              borrarElemento={() => borrarElemento(cosa.id)}
              setCosas={setCosas}
              cosas={cosas}
            />
          ))}
        </ul>
      )}
    </>
  );
};
