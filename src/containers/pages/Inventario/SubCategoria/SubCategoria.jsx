import SubCategoriaList from "components/inventario/SubCategoria/SubCategoriaList";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useEffect } from "react";
import { connect } from "react-redux";
import { get_subcategoria_list } from "redux/actions/inventario";
const SubCategoria = ({ get_subcategoria_list, subcategoria_list }) => {
  useEffect(() => {
    get_subcategoria_list();
  }, []);
  return (
    <FullWidthLayout>
      <SubCategoriaList subcategoria_list={subcategoria_list}/>
    </FullWidthLayout>
  );
};
const mapStateToProps = (state) => ({
  subcategoria_list: state.subcategoria_list.subcategoria,
});

export default connect(mapStateToProps, {
  get_subcategoria_list,
})(SubCategoria);
