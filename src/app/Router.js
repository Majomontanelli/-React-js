import React from "react";
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import ItemListContainer from "../componentes/ItemListContainer";
import Layout from "./Layout";

const router= createBrowserRouter ([
    {path: "/",
     Element: <Layout/>,
     errorElement: <p>Error: ups, no encontrado</p>,
     children: [
    {   path: "/",
        Element: <ItemListContainer />
     },
    {   path: "/color/",
        Element: <ItemListContainer />
    },
     ]
    }
])





const Router = () => (
 <RouterProvider router={router} />
)
export default Router;