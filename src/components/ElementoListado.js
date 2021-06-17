export const ElementoListado = () => {
  return (
    <li className="item-lista">
      <span className="">Cosa numero 1</span>
      <div>
        <button className="btn btn-info mr-3"> Editar elemento</button>
        <button className="btn btn-danger"> Borrar elemento</button>
      </div>
    </li>
  );
};
