import axios from "axios";
import {
  categoriaListURL,
  subcategoriaListURL,
  productoListURL,
} from "constants";
import {
  GET_CATEGORIA_SUCCESS,
  GET_CATEGORIA_FAIL,
  GET_SUB_CATEGORIA_SUCCESS,
  GET_SUB_CATEGORIA_FAIL,
  GET_PRODUCTO_SUCCESS,
  GET_PRODUCTO_FAIL,
} from "./types";

export const get_categoria_list = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(`${categoriaListURL}`, config);

    if (res.status === 200) {
      dispatch({
        type: GET_CATEGORIA_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_CATEGORIA_FAIL,
      });
    }
  } catch {
    dispatch({
      type: GET_CATEGORIA_FAIL,
    });
  }
};

//get subcategoria
export const get_subcategoria_list = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = await axios.get(`${subcategoriaListURL}`, config);

    if (res.status === 200) {
      dispatch({
        type: GET_SUB_CATEGORIA_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_SUB_CATEGORIA_FAIL,
      });
    }
  } catch {
    dispatch({
      type: GET_SUB_CATEGORIA_FAIL,
    });
  }
};


//get producto
export const get_producto_list = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = await axios.get(`${productoListURL}`, config);

    if (res.status === 200) {
      dispatch({
        type: GET_PRODUCTO_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_PRODUCTO_FAIL,
      });
    }
  } catch {
    dispatch({
      type: GET_PRODUCTO_FAIL,
    });
  }
};
