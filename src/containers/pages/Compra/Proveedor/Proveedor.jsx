import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import { get_proveedor_list } from "redux/actions/compra";
import { useEffect } from "react";
import ProveedorList from "components/compra/Proveedor/ProveedorList";

const Proveedor = ({ get_proveedor_list, proveedor_list }) => {
  useEffect(() => {
    get_proveedor_list();
  }, []);

  return (
    <FullWidthLayout>
      <ProveedorList proveedor_list={proveedor_list}/>
    </FullWidthLayout>
  );
};
const mapStateToProps = (state) => ({
  proveedor_list: state.proveedor_list.proveedor,
});

export default connect(mapStateToProps, {
  get_proveedor_list,
})(Proveedor);
