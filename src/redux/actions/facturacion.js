import axios from "axios";
import { clienteListURL } from "constants";
import { GET_CLIENTE_SUCCESS, GET_CLIENTE_FAIL } from "./types";

export const get_cliente_list = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = await axios.get(`${clienteListURL}`, config);

    if (res.status === 200) {
      dispatch({
        type: GET_CLIENTE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_CLIENTE_FAIL,
      });
    }
  } catch {
    dispatch({
      type: GET_CLIENTE_FAIL,
    });
  }
};
