import React from "react"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"

const routes = [
    {path: "/", element: React.createElement(Home)},
    {path: "/login", element: React.createElement(Login)},
]

export default routes