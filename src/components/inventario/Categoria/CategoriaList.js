import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LoadingTable from "components/loaders/LoadingTable";

const CategoriaList = ({ categoria_list }) => {
  return (
    <div>
      {categoria_list ? (
        <>
          {" "}
          <div class="float-right py-4 ">
            <Link
              to="/categoria-create"
              className="text-gray-400 hover:text-gray-500 font-gilroy-regular"
            >
              <button
                type="button"
                class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 "
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Nuevo
              </button>
            </Link>
          </div>
          <h2 className="text-2xl font-gilroy-black tracking-tight text-gray-900 sm:text-3xl dark:text-gray-400 py-4 ">
            Lista de Categoria
          </h2>
          <div class="overflow-x-auto relative">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    ID
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Descripcion
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Estado
                  </th>
                  <th scope="col" class="py-3 px-6">
                    F. Creado
                  </th>
                  <th scope="col" class="py-3 px-6">
                    F. Modif
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {categoria_list.map((categoria) => (
                  <tr
                    key={categoria.id}
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {categoria.id}
                    </th>
                    <td class="py-4 px-6">{categoria.descripcion}</td>
                    <td class="py-4 px-6">
                      {categoria.estado ? "Activo" : "Inactivo"}
                    </td>
                    <td class="py-4 px-6">
                      {new Date(categoria.fc).toDateString()}
                    </td>
                    <td class="py-4 px-6">
                      {new Date(categoria.fm).toDateString()}
                    </td>
                    <td>
                      {" "}
                      <Link to={`/categoria-update/${categoria.id}`}>
                        <button
                          type="button"
                          class="py-1 px-2 text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                        >
                          <svg
                            class="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            ></path>
                          </svg>
                        </button>
                      </Link>
                      <button
                        type="button"
                        class="py-1 px-2 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <LoadingTable />
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(CategoriaList);
