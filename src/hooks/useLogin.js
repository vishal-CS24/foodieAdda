import { useState } from "react";

export const useLogin = () => {
  const [loginState, setLoginState] = useState(false);
  const login = () => {
    setLoginState(true);
  };

  const logout = () => {
    setLoginState(false);
  };
  return { loginState, login, logout };
};
