import axios from "axios";
import { proveedorListURL } from "constants";
import { GET_PROVEEDOR_SUCCESS, GET_PROVEEDOR_FAIL } from "./types";

export const get_proveedor_list = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = await axios.get(`${proveedorListURL}`, config);

    if (res.status === 200) {
      dispatch({
        type: GET_PROVEEDOR_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_PROVEEDOR_FAIL,
      });
    }
  } catch {
    dispatch({
      type: GET_PROVEEDOR_FAIL,
    });
  }
};
