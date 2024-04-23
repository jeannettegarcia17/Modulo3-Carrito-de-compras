import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Products } from "./components/Products"
import { IS_DEVELOPMENT } from "./config";
import { products as initialProducts } from "./mocks/products.json"
import { useState } from "react"
import { useFilters } from "./hooks/useFilters.jsx";
import { Cart } from "./components/Cart.jsx";
import { CartProvider } from "./context/cart.jsx";


function App() {

  const [products] = useState(initialProducts);

  const {filters, filterProducts, setFilters} = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <Header />
      <Cart /> 
      <Products products={filteredProducts} />
      { IS_DEVELOPMENT && <Footer filters={filters} /> }
    </CartProvider>
  )
}

export default App;

