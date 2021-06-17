import { Listado } from "./components/Listado";

function App() {
  return (
    <div className="container">
      <header className="text-center mb-5">
        <h1>Cosicas</h1>
        <button className="btn btn-primary">Añadir cosica</button>
      </header>
      <main className="row">
        <section className="col-12">
          <Listado />
        </section>
      </main>
    </div>
  );
}

export default App;
