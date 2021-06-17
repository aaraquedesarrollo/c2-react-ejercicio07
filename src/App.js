import { Listado } from "./components/Listado";

function App() {
  return (
    <div className="container">
      <header className="text-center mb-4">
        <h1>Cosicas</h1>
      </header>
      <main className="row text-center">
        <section className="col-12">
          <Listado />
        </section>
      </main>
    </div>
  );
}

export default App;
