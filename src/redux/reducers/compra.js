import { GET_PROVEEDOR_SUCCESS, GET_PROVEEDOR_FAIL } from "../actions/types";

const initialState = {
  proveedor: null,
  count: null,
  next: null,
  previous: null,
};

//action proveedor
export default function proveedor_list(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROVEEDOR_SUCCESS:
      return {
        ...state,
        proveedor: payload.results,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_PROVEEDOR_FAIL:
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
