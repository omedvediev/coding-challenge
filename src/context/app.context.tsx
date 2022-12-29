import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { initialState, reducer } from './app.state';

import { State } from './app.types';
import { httpRequest } from '../services';
import { toast } from 'react-toastify';

const AppContext = createContext<State>({});

/**
 * App context provider.
 *
 * @author Oleksii Medvediev
 * @category Providers
 */
const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getUsers = async () => {
    try {
      const users = await httpRequest();

      users && dispatch({ type: 'SET_USERS', payload: users });
    } catch (error) {
      toast.error('Something went wrong...');
      console.info(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

/**
 * useAppContext hook.
 *
 * @author Oleksii Medvediev
 * @category Hooks
 * @returns {State} - an object containing AppContext state values.
 */
const useAppContext = () => useContext(AppContext);

export { AppContextProvider, useAppContext };
