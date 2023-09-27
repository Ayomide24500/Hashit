import {createBrowserRouter} from "react-router-dom"
import Layout from "../Common/Layout"
// import Body from "../Pages/Body"
import HomeScreen from "../Pages/HomeScreen"
// import HomeScreen from "../Pages/HomeScreen"


export const Mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomeScreen />
            }
        ]
    },
])
