import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { productoUpdateURL } from "constants";
import { get_subcategoria_list } from "redux/actions/inventario";
import LoadingTable from "components/loaders/LoadingTable";
import { useParams } from "react-router-dom";

function ProductoCreate({ get_subcategoria_list, subcategoria_list }) {
  useEffect(() => {
    get_subcategoria_list();
  }, []);

  const params = useParams();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    codigo: "RM-P-0",
    codigo_barra: "",
    descripcion: "",
    precio: "0",
    subcategoria: "",
    foto: "",
    uc: "",
    estado: "",
  });

  const {
    codigo,
    codigo_barra,
    descripcion,
    precio,
    subcategoria,
    foto,
    uc,
    estado,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (subcategoria) {
      setLoading(true);

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const formData = new FormData();
      formData.append("codigo", codigo);
      formData.append("codigo_barra", codigo_barra);
      formData.append("descripcion", descripcion);
      formData.append("precio", precio);
      formData.append("subcategoria", subcategoria);
      formData.append("foto", foto);
      const fetchData = async () => {
        axios
          .post(`${productoUpdateURL}${params.id}`, formData, config)
          .then((res) => {
            setLoading(false);
            toast.success("Producto Creado Correctamente");
          })
          .catch((err) => {
            setLoading(false);
            toast.error("Error al Crear el Producto ");
          });
      };

      fetchData();
    } else {
      toast.error("Debes Ingresar los Datos Correctamente");
    }
  };

  return (
    <FullWidthLayout>
      <h2 className="text-2xl font-gilroy-black tracking-tight text-gray-900 sm:text-3xl dark:text-gray-400 py-4 ">
        Actualizar Producto
      </h2>
      {subcategoria_list ? (
        <>
          <form className="grid grid-cols-1 gap-y-6">
            <div class="relative z-0 mb-6 w-full group">
              <input
                type="text"
                value={codigo}
                name="codigo"
                readOnly
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              ></input>
              <label
                for="codigo"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Codigo
              </label>
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input
                type="text"
                value={codigo_barra}
                name="codigo_barra"
                readOnly
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              ></input>
              <label
                for="codigo_barra"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Codigo de Barra
              </label>
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="descripcion"
                id="descripcion"
                value={descripcion}
                onChange={(e) => onChange(e)}
                required
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              ></input>
              <label
                for="descripcion"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Descripcion del Producto
              </label>
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input
                type="number"
                name="precio"
                id="precio"
                value={precio}
                onChange={(e) => onChange(e)}
                required
                min="0"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              ></input>
              <label
                for="precio"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Precio
              </label>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              {subcategoria_list ? (
                <>
                  <div class="relative z-0 mb-6 w-full group">
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Sub-Categoria
                    </label>
                    <select
                      name="subcategoria"
                      onChange={(e) => onChange(e)}
                      value={subcategoria}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    >
                      <option value="" disabled selected>
                        -----------
                      </option>
                      {subcategoria_list.map((c) => (
                        <option value={c.id}>{c.descripcion}</option>
                      ))}
                    </select>
                  </div>
                </>
              ) : (
                <LoadingTable />
              )}

              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="file"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                ></input>
                <label
                  for="floating_company"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Foto
                </label>
              </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="checkbox"
                  value={estado}
                  checked
                  class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                ></input>

                <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Estado
                </label>
              </div>
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="uc"
                  id="uc"
                  value={uc}
                  onChange={(e) => onChange(e)}
                  required
                  min="0"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                ></input>
                <label
                  for="uc"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  User_Create
                </label>
              </div>
            </div>
            <div>
              {loading ? (
                <button className="float-right inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-gilroy-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  loading
                </button>
              ) : (
                <button
                  type="submit"
                  className="float-right inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-gilroy-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </>
      ) : (
        <LoadingTable />
      )}
    </FullWidthLayout>
  );
}

const mapStateToProps = (state) => ({
  subcategoria_list: state.subcategoria_list.subcategoria,
});

export default connect(mapStateToProps, {
  get_subcategoria_list,
})(ProductoCreate);
