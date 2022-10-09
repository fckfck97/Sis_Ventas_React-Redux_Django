import { Fragment, useState } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import useDarkMode from "hooks/useDarkMode";
import { Helmet } from "react-helmet";

const navigation = [
  { name: "Categoria", href: "/categoria-list", current: false },
  { name: "Sub-Categoria", href: "/subcategoria-list", current: false },
  { name: "Producto", href: "/producto-list", current: false },
  { name: "Proveedor", href: "/proveedor-list", current: false },
  { name: "Cliente", href: "/cliente-list", current: false },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar({ account }) {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const ThemeIcon = () => {
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <span onClick={handleMode}>
        {darkTheme ? (
          <i className="bx bx-sun dark:text-dark-txt hover:text-yellow-500 dark:hover:text-yellow-500 ml-4 md:mr-3 mr-2 inline-flex text-xl"></i>
        ) : (
          <i className="bx bx-moon dark:text-dark-txt hover:text-blue-900  ml-4 md:mr-3 mr-2 inline-flex text-xl"></i>
        )}
      </span>
    );
  };

  // SEARCH
  const [effectSearch, setEffectSearch] = useState(false);
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => (window.location.href = "/search/" + term), 0.2);
    setTerm("");
  };

  const authLinks = (
    <Fragment>
      <button className="bx bx-user-circle text-3xl dark:hover:text-white hover:text-blue-600 text-gray-600 dark:text-dark-txt text-md font-gilroy-medium"></button>
    </Fragment>
  );
  const guestLinks = (
    <Fragment>
      <button className="bx bx-user-circle text-3xl dark:hover:text-white hover:text-blue-600 text-gray-600 dark:text-dark-txt text-md font-gilroy-medium"></button>
    </Fragment>
  );

  return (
    <>
      <Helmet>
        <title>Sistema de Ventas Remetal, C.A</title>
        <meta
          name="description"
          content="Pagina de Inicio - Sistema de Ventas Remetal, C.A"
        />
      </Helmet>
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? "fixed inset-0 z-50 overflow-y-auto" : "",
            "bg-white dark:bg-dark-main border-t border-gray-200 dark:border-dark-third lg:static lg:overflow-y-visible"
          )
        }
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                  <div className="flex-shrink-0 flex items-center">
                    <NavLink to="/">
                      {/* Dark Image */}
                      <img
                        src="https://bafybeieh27hiity5cm7q2z5tic7oka6wd52dxnmqj5wtducckqic4c4aia.ipfs.dweb.link/Solopython-logo.png"
                        width={35}
                        height={25}
                        layout="fixed"
                        alt=""
                        className="dark:hidden  flex"
                      />
                      {/* White Image */}
                      <img
                        src="https://bafybeieh27hiity5cm7q2z5tic7oka6wd52dxnmqj5wtducckqic4c4aia.ipfs.dweb.link/Solopython-logo.png"
                        width={35}
                        height={25}
                        layout="fixed"
                        alt=""
                        className="hidden md:hidden dark:flex"
                      />
                    </NavLink>
                    <button className="ml-1">
                      <ThemeIcon />
                    </button>
                  </div>
                </div>

                <div className="min-w-0 flex-1 md:px-8 lg:px- xl:col-span-6">
                  <div className="flex items-center px-6 py-4 md:max-w-md md:mx-auto lg:max-w-auto lg:mx-0 xl:px-0">
                    <form onSubmit={(e) => onSubmit(e)} className="w-full">
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <div className="relative">
                        <button
                          type="submit"
                          className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center"
                        >
                          <SearchIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </button>
                        <input
                          id="search"
                          name="search"
                          required
                          onChange={(e) => {
                            handleChange(e);
                          }}
                          className="block w-full font-gilroy-light bg-white dark:bg-dark-bg border dark:border-dark-bg border-gray-300 rounded-full py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                          placeholder="Search"
                          type="search"
                        />
                      </div>
                    </form>
                  </div>
                </div>

                <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>

                <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                  <NavLink
                    to="/categoria-list"
                    className="mx-4 text-lg dark:hover:text-white hover:text-blue-600 text-gray-600 dark:text-dark-txt text-md font-gilroy-semibold"
                  >
                    Categoria
                  </NavLink>
                  <NavLink
                    to="/subcategoria-list"
                    className="mx-4 text-lg dark:hover:text-white hover:text-blue-600 text-gray-600 dark:text-dark-txt text-md font-gilroy-semibold"
                  >
                    SubCategoria
                  </NavLink>
                  <NavLink
                    to="/producto-list"
                    className="mx-4 text-lg dark:hover:text-white hover:text-blue-600 text-gray-600 dark:text-dark-txt text-md font-gilroy-semibold"
                  >
                    Producto
                  </NavLink>
                  <NavLink
                    to="/proveedor-list"
                    className="mx-4 text-lg dark:hover:text-white hover:text-blue-600 text-gray-600 dark:text-dark-txt text-md font-gilroy-semibold"
                  >
                    Proveedor
                  </NavLink>
                  <NavLink
                    to="/cliente-list"
                    className="mx-4 text-lg dark:hover:text-white hover:text-blue-600 text-gray-600 dark:text-dark-txt text-md font-gilroy-semibold"
                  >
                    Cliente
                  </NavLink>

                  {/*                     
                    {
                      account ?
                      authLinks:guestLinks
                    } */}
                </div>
              </div>
            </div>

            <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-100 text-gray-900"
                        : "hover:bg-gray-50",
                      "block rounded-md py-2 px-3 text-base font-gilroy-medium"
                    )}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
  );
}

export default Navbar;
