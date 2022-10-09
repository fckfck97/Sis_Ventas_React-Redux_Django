import { GET_CLIENTE_SUCCESS, GET_CLIENTE_FAIL } from "../actions/types";

const initialState = {
  cliente: null,
  count: null,
  next: null,
  previous: null,
};

//action cliente
export default function cliente_list(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CLIENTE_SUCCESS:
      return {
        ...state,
        cliente: payload.results,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_CLIENTE_FAIL:
      return {
        ...state,
        proveedor: null,
        count: null,
        next: null,
        previous: null,
      };
    default:
      return state;
  }
}