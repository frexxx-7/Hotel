import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  showAside: false,
  currentUser: null,
  token: null,
  setUser: () => { },
  setToken: () => { },
  setShowAside: () => { }
})

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [showAside, setShowAside] = useState()
  const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

  const setToken = (token) => {
    _setToken(token)
    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token);
    } else {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  }


  return (
    <StateContext.Provider value={{
      user,
      setUser,
      token,
      setToken,
      showAside,
      setShowAside
    }}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);