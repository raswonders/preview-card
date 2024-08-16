import { Product } from "./Product";
import product from "./data";

function App() {
  return (
    <main className="min-h-screen sm:flex sm:justify-center sm:items-center">
      <Product product={product} />
    </main>
  );
}

export default App;
