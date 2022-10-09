import { combineReducers } from 'redux';
import proveedor_list from './compra';
import cliente_list from './facturacion';
import {categoria_list, subcategoria_list , producto_list} from './inventario';




export default combineReducers({
     categoria_list,
     subcategoria_list,
     producto_list,
     proveedor_list,
     cliente_list
})