import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//categoria
import CategoriaCreate from "containers/pages/Inventario/Categoria/CategoriaCreate";
import CategoriaUpdate from "containers/pages/Inventario/Categoria/CategoriaUpdate";
import Categoria from "containers/pages/Inventario/Categoria/Categoria";
//subcategoria
import SubCategoriaCreate from "containers/pages/Inventario/SubCategoria/SubCategoriaCreate";
import SubCategoria from "containers/pages/Inventario/SubCategoria/SubCategoria";
import SubCategoriaUpdate from "containers/pages/Inventario/SubCategoria/SubCategoriaUpdate";
//producto
import ProductoCreate from "containers/pages/Inventario/Producto/ProductoCreate";
import Producto from "containers/pages/Inventario/Producto/Producto";
import ProductoUpdate from "containers/pages/Inventario/Producto/ProductoUpdate";
//proveedor
import ProveedorCreate from "containers/pages/Compra/Proveedor/ProveedorCreate";
import Proveedor from "containers/pages/Compra/Proveedor/Proveedor";
import ProveedorUpdate from "containers/pages/Compra/Proveedor/ProveedorUpdate";
//Cliente
import ClienteCreate from "containers/pages/Facturacion/Cliente/ClienteCreate";
import Cliente from "containers/pages/Facturacion/Cliente/Cliente";
import ClienteUpdate from "containers/pages/Facturacion/Cliente/ClienteUpdate";



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Display */}
          <Route path="*" element={<Error404 />} />

          {/* Home Display */}
          <Route path="/" element={<Home />} />

          <Route path="/categoria-list" element={<Categoria />} />
          <Route path="/categoria-create" element={<CategoriaCreate />} />
          <Route path="/categoria-update/:id" element={<CategoriaUpdate />} />

          <Route path="/subcategoria-list" element={<SubCategoria />} />
          <Route path="/subcategoria-create" element={<SubCategoriaCreate />} />
          <Route path="/subcategoria-update/:id" element={<SubCategoriaUpdate />} />
          
          <Route path="/producto-list" element={<Producto />} />
          <Route path="/producto-create" element={<ProductoCreate />} />
          <Route path="/producto-update/:id" element={<ProductoUpdate />} />

          <Route path="/proveedor-list" element={<Proveedor />} />
          <Route path="/proveedor-create" element={<ProveedorCreate />} />
          <Route path="/proveedor-update/:id" element={<ProveedorUpdate />} />

          <Route path="/cliente-list" element={<Cliente />} />
          <Route path="/cliente-create" element={<ClienteCreate />} />
          <Route path="/cliente-update/:id" element={<ClienteUpdate />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
