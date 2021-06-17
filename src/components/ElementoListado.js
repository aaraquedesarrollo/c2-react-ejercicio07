import PropTypes from "prop-types";
import { useState } from "react";

export const ElementoListado = (props) => {
  const {
    cosa,
    cosa: { id, texto, editando },
    editarElemento,
    borrarElemento,
    setCosas,
    cosas,
  } = props;

  const [tempCosa, setTempCosa] = useState({ ...cosa });

  const volcarCosa = () => {
    setCosas(
      cosas.map((cosa) => {
        if (cosa.id === id) {
          return tempCosa;
        }
        return cosa;
      })
    );
  };

  return (
    <li className="item-lista">
      {editando ? (
        <form className="formulario">
          <input
            type="text"
            placeholder="Edita la cosa"
            value={tempCosa.texto}
            onChange={(e) =>
              setTempCosa({ ...tempCosa, texto: e.target.value })
            }
          ></input>
        </form>
      ) : (
        <span className="texto" onClick={editarElemento}>
          {texto}
        </span>
      )}
      <div>
        {editando ? (
          <button className="btn btn-success mr-3" onClick={volcarCosa}>
            Guardar elemento
          </button>
        ) : (
          <button className="btn btn-info mr-3" onClick={editarElemento}>
            Editar elemento
          </button>
        )}
        <button className="btn btn-danger" onClick={borrarElemento}>
          Borrar elemento
        </button>
      </div>
    </li>
  );
};

ElementoListado.propTypes = {
  cosa: PropTypes.shape({
    id: PropTypes.number.isRequired,
    texto: PropTypes.string.isRequired,
    editando: PropTypes.bool.isRequired,
  }),
  editarElemento: PropTypes.func.isRequired,
  borrarElemento: PropTypes.func.isRequired,
  setCosas: PropTypes.func.isRequired,
};
