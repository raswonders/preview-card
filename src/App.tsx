import { Product } from "./Product";
import product from "./data";

function App() {
  return (
    <div className="min-h-screen sm:flex sm:justify-center sm:items-center">
      <Product product={product} />
    </div>
  );
}

export default App;
