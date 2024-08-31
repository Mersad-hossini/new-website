import React, { useCallback, useEffect, useState } from "react";
import AuthContext from "./context/authContext";
import Cookies from "universal-cookie";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const [userInfos, setUserInfos] = useState({});
  const cookies = new Cookies(null, { path: "/" });

  const router = useRoutes(routes);

  // const login = useCallback((userInfos, token) => {
  //   setToken(token);
  //   setIsLoggedIn(true);
  //   setUserInfos(userInfos);
  //   cookies.set("user", JSON.stringify({ token }));
  // }, []);

  const login = useCallback((token) => {
    setToken(token);
    setIsLoggedIn(true);
    cookies.set("user", JSON.stringify({ token }));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserInfos({});
    cookies.remove("user", { path: "/" });
  }, []);

  // useEffect(() => {
  //   const cookieData = JSON.parse(cookies.get("user"));
  //   if (cookieData) {
  //     fetch("http://example.ir/auth/me", {
  //       headers: {
  //         Authorization: `Bearer ${cookieData.token}`,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((userData) => {
  //         setIsLoggedIn(true);
  //         setUserInfos(userData);
  //       });
  //   }
  // }, [login]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        token,
        userInfos,
        login,
        logout,
      }}
    >
      {router}
    </AuthContext.Provider>
  );
}
