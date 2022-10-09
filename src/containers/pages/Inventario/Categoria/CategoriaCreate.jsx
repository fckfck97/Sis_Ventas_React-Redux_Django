import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { categoriaCreateURL } from "constants";
import { useNavigate } from "react-router-dom";
import CategroriaForm from "components/inventario/Categoria/CategoriaForm";

function CategoriaCreate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    descripcion: "",
    estado: true,
    uc: "",
  });

  const { descripcion, uc } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (descripcion) {
      setLoading(true);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const formData = new FormData();
      formData.append("descripcion", descripcion);
      formData.append("estado", true);
      formData.append("uc", uc);
      const fetchData = async () => {
        axios
          .post(`${categoriaCreateURL}`, formData, config)
          .then((res) => {
            setLoading(false);
            toast.success("Categoria Creada Correctamente");
            navigate("/categoria-list");
          })
          .catch((err) => {
            setLoading(false);
            toast.error("Error al Crear la Categoria ");
          });
      };

      fetchData();
    } else {
      toast.error("Debes Ingresar los Datos Correctamente");
    }
  };

  return (
    <FullWidthLayout>
      <CategroriaForm
      loading={loading}
      onChange={onChange}
      onSubmit={onSubmit}
      descripcion={descripcion}
      uc={uc}
      />
    </FullWidthLayout>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(CategoriaCreate);
