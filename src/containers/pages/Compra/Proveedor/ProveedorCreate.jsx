import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { proveedorCreatetURL } from "constants";
import { useNavigate } from "react-router-dom";
import ProveedorForm from "components/compra/Proveedor/ProveedorForm";

function ProveedorCreate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    razon_social: "",
    tipo: "",
    rif: "",
    direccion: "",
    telefono: "",
    email: "",
    estado: true,
    uc: "",
  });

  const { razon_social, tipo, rif, direccion, telefono, email, estado, uc } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (rif) {
      setLoading(true);

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const formData = new FormData();
      formData.append("razon_social", razon_social);
      formData.append("tipo", tipo);
      formData.append("rif", rif);
      formData.append("direccion", direccion);
      formData.append("telefono", telefono);
      formData.append("email", email);
      formData.append("estado", true);
      formData.append("uc", uc);
      const fetchData = async () => {
        axios
          .post(`${proveedorCreatetURL}`, formData, config)
          .then((res) => {
            setLoading(false);
            toast.success("Proveedor Creado Correctamente");
            navigate("/proveedor-list");
          })
          .catch((err) => {
            setLoading(false);
            toast.error("Error al Crear el Proveedor ");
          });
      };

      fetchData();
    } else {
      toast.error("Debes Ingresar los Datos Correctamente");
    }
  };

  return (
    <FullWidthLayout>
      <ProveedorForm
        loading={loading}
        onChange={onChange}
        onSubmit={onSubmit}
        razon_social={razon_social}
        tipo={tipo}
        rif={rif}
        direccion={direccion}
        telefono={telefono}
        email={email}
        uc={uc}
      />
    </FullWidthLayout>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(ProveedorCreate);
