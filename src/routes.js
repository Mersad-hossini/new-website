import React from "react"
import Home from "./pages/Home/Home"
import Register from "./pages/Register/Register"

const routes = [
    {path: "/", element: React.createElement(Home)},
    {path: "/register", element: React.createElement(Register)},
]

export default routes