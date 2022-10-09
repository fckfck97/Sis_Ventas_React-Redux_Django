import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { subcategoriaCreatetURL } from "constants";
import { get_categoria_list } from "redux/actions/inventario";
import { useNavigate } from "react-router-dom";
import SubCategroriaForm from "components/inventario/SubCategoria/SubCategoriaForm";

function SubCategoriaCreate({ get_categoria_list, categoria_list }) {
  useEffect(() => {
    get_categoria_list();
    window.scrollTo(0, 0);
  }, []);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    categoria: "",
    descripcion: "",
    estado: true,
    uc: "",
  });

  const { categoria, descripcion, estado, uc } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (categoria) {
      setLoading(true);

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const formData = new FormData();
      formData.append("categoria", categoria);
      formData.append("descripcion", descripcion);
      formData.append("estado", estado);
      formData.append("uc", uc);
      const fetchData = async () => {
        axios
          .post(`${subcategoriaCreatetURL}`, formData, config)
          .then((res) => {
            setLoading(false);
            toast.success("Sub-Categoria Creada Correctamente");
            navigate("/subcategoria-list");
          })
          .catch((err) => {
            setLoading(false);
            toast.error("Error al Crear la Sub-Categoria ");
          });
      };

      fetchData();
    } else {
      toast.error("Debes Ingresar los Datos Correctamente");
    }
  };

  return (
    <FullWidthLayout>
      <SubCategroriaForm
        categoria_list={categoria_list}
        categoria={categoria}
        loading={loading}
        onChange={onChange}
        onSubmit={onSubmit}
        descripcion={descripcion}
        uc={uc}
      />
    </FullWidthLayout>
  );
}

const mapStateToProps = (state) => ({
  categoria_list: state.categoria_list.categoria,
});

export default connect(mapStateToProps, {
  get_categoria_list,
})(SubCategoriaCreate);
