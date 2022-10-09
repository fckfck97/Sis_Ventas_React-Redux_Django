import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import { useEffect } from "react";
import { get_categoria_list } from "redux/actions/inventario";
import CategoriaList from "components/inventario/Categoria/CategoriaList";



const Categoria = ({ get_categoria_list, categoria_list }) => {
  
  useEffect(() => {
    get_categoria_list();
  }, []);
  

  return (
    <FullWidthLayout>
      <CategoriaList categoria_list={categoria_list}/>
    </FullWidthLayout>
  );
};
const mapStateToProps = (state) => ({
  categoria_list: state.categoria_list.categoria,
});

export default connect(mapStateToProps, {
  get_categoria_list,
})(Categoria);
