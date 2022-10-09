import ClienteList from "components/facturacion/Cliente/ClienteList";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useEffect } from "react";
import { connect } from "react-redux";
import { get_cliente_list } from "redux/actions/facturacion";
const Cliente = ({ get_cliente_list, cliente_list }) => {
  useEffect(() => {
    get_cliente_list();
  }, []);

  return <FullWidthLayout><ClienteList cliente_list={cliente_list}/></FullWidthLayout>;
};
const mapStateToProps = (state) => ({
  cliente_list: state.cliente_list.cliente,
});

export default connect(mapStateToProps, {
  get_cliente_list,
})(Cliente);
