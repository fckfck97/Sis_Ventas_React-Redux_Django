const localhost = "http://127.0.0.1:8000";

const apiURL = "/api";

export const endpoint = `${localhost}${apiURL}`;

//categoria
export const categoriaListURL = `${endpoint}/inventario/categoria-list`;
export const categoriaCreateURL = `${endpoint}/inventario/categoria-create`;
export const categoriaUpdateURL = `${endpoint}/inventario/categoria-update/`;
export const categoriaDeleteURL = `${endpoint}/inventario/categoria-delete/`;
//subcategoria
export const subcategoriaListURL = `${endpoint}/inventario/subcategoria-list`;
export const subcategoriaCreatetURL = `${endpoint}/inventario/subcategoria-create`;
export const subcategoriaUpdateURL = `${endpoint}/inventario/subcategoria-update/`;
//producto
export const productoListURL = `${endpoint}/inventario/producto-list`;
export const productoCreatetURL = `${endpoint}/inventario/producto-create`;
export const productoUpdateURL = `${endpoint}/inventario/producto-update/`;
//cliente
export const clienteListURL = `${endpoint}/facturacion/cliente-list`;
export const clienteCreatetURL = `${endpoint}/facturacion/cliente-create`;
export const clienteUpdateURL = `${endpoint}/facturacion/cliente-update/`;
//proveedor
export const proveedorListURL = `${endpoint}/compra/proveedor-list`;
export const proveedorCreatetURL = `${endpoint}/compra/proveedor-create`;
export const proveedorUpdateURL = `${endpoint}/compra/proveedor-update/`;
