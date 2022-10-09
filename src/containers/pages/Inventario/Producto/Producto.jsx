import ProductoList from "components/inventario/Producto/ProductoList";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useEffect } from "react";
import { connect } from "react-redux";
import { get_producto_list } from "redux/actions/inventario";

const Producto = ({ get_producto_list, producto_list }) => {
  useEffect(() => {
    get_producto_list();
  }, []);
  return (
    <FullWidthLayout>
      <ProductoList producto_list={producto_list}/>
    </FullWidthLayout>
  );
};
const mapStateToProps = (state) => ({
  producto_list: state.producto_list.producto,
});

export default connect(mapStateToProps, {
  get_producto_list,
})(Producto);
