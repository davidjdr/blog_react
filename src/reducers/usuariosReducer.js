import { TRAER_TODOS, CARGANDO } from "../types/usuariosTypes";

const INITIAL_STATE = {
    usuarios: [],
    cargando: false,
    error: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TRAER_TODOS:
                return { ...state, usuarios: action.payload, cargando: false};

        case CARGANDO:
            return {...state, cargando: true};
        
        case CARGANDO:
            return {...state, error: action.payload, cargando: false};
         default: 
            return state;
    }
}
