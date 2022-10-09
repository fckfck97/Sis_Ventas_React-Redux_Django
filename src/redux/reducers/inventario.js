import {
  GET_CATEGORIA_SUCCESS,
  GET_CATEGORIA_FAIL,
  GET_SUB_CATEGORIA_SUCCESS,
  GET_SUB_CATEGORIA_FAIL,
  GET_PRODUCTO_SUCCESS,
  GET_PRODUCTO_FAIL,
} from "../actions/types";

const initialState = {
  results: null,
  count: null,
  next: null,
  previous: null,
};



//action categoria
export function categoria_list(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CATEGORIA_SUCCESS:
      return {
        ...state,
        categoria: payload.results,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_CATEGORIA_FAIL:
      return {
        ...state,
        categoria: null,
        count: null,
        next: null,
        previous: null,
      };
    default:
      return state;
  }
}

//action subcategoria
export function subcategoria_list(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SUB_CATEGORIA_SUCCESS:
      return {
        ...state,
        subcategoria: payload.results,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_SUB_CATEGORIA_FAIL:
      return {
        ...state,
        subcategoria: null,
        count: null,
        next: null,
        previous: null,
      };
    default:
      return state;
  }
}

//action producto
export function producto_list(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTO_SUCCESS:
      return {
        ...state,
        producto: payload.results,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_PRODUCTO_FAIL:
      return {
        ...state,
        subcategoria: null,
        count: null,
        next: null,
        previous: null,
      };
    default:
      return state;
  }
}
