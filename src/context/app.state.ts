import { Action, State } from './app.types';

/**
 * Initial state for the useReducer hook in the AppContextProvider.
 */
const initialState: State = {};

/**
 * Reducer function for the useReducer hook in the AppContextProvider.
 *
 * @author Oleksii Medvediev
 * @category Reducers
 * @param state
 * @param action
 * @returns {State} - an updated useReducer state in the AppContextProvider.
 */
const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_USERS': {
      return {
        ...state,
        users: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export { initialState, reducer };
