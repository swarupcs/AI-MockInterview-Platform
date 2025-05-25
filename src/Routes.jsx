
import { Route, Routes } from "react-router-dom"
import { LandingPage } from "./Pages/LandingPage"


export const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<><LandingPage/></>} // Replace with your LandingPage component
            />
        </Routes>
    )
}