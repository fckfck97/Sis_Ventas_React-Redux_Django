import LoadingTable from "components/loaders/LoadingTable";

function SubCategoriaForm({
  categoria_list,
  loading,
  onChange,
  onSubmit,
  descripcion,
  uc,
  id,
  categoria,
}) {
  return (
    <>
      <h2 className="text-2xl font-gilroy-black tracking-tight text-gray-900 sm:text-3xl dark:text-gray-400 py-4">
        {id ? "Actualizar Sub-Categoria" : "Crear Sub-Categoria"}
      </h2>
      {categoria_list ? (
        <>
          <form onSubmit={(e) => onSubmit(e)}>
            {categoria_list ? (
              <>
                <div class="relative z-0 mb-6 w-full group">
                  <label class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Categoria
                  </label>
                  <select
                    required
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    onChange={(e) => onChange(e)}
                    value={categoria}
                    name="categoria"
                  >
                    <option>Selecciona la Categoria</option>
                    {categoria_list.map((c) => (
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
                type="text"
                value={descripcion}
                name="descripcion"
                onChange={(e) => onChange(e)}
                required
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
              ></input>
              <label
                for="name_subcategoria"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Nombre de la Sub-Categoria
              </label>
            </div>
            <div class="relative z-0 mb-6 w-full group">
              <input
                type="text"
                value={uc}
                name="uc"
                onChange={(e) => onChange(e)}
                required
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
              ></input>
              <label
                for="name_uc"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                User_Create
              </label>
            </div>
            <div className="py-4">
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
    </>
  );
}

export default SubCategoriaForm;
