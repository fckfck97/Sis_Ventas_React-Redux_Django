import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { categoriaUpdateURL } from "constants";
import { useNavigate, useParams } from "react-router-dom";
import CategoriaForm from "components/inventario/Categoria/CategoriaForm";

function CategoriaUpdate() {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    descripcion: "",
    estado: true,
    uc: "",
  });

  const { descripcion, estado, uc } = formData;
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
          .put(`${categoriaUpdateURL}${params.id}`, formData, config)
          .then((res) => {
            setLoading(false);
            toast.success("Categoria Actualizada Correctamente");
            navigate("/categoria-list");
          })
          .catch((err) => {
            setLoading(false);
            toast.error("Error al Actualizar la Categoria ");
          });
      };

      fetchData();
    } else {
      toast.error("Debes Ingresar los Datos Correctamente");
    }
  };
  return (
    <FullWidthLayout>
      <CategoriaForm
        loading={loading}
        onChange={onChange}
        onSubmit={onSubmit}
        descripcion={descripcion}
        uc={uc}
        id={params.id}
      />
    </FullWidthLayout>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(CategoriaUpdate);
