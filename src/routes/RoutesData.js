import About from "../components/About/About";
import Login from "../pages/auth/login/Login";
import SignUp from "../pages/auth/signup/SignUp";

const RouteData = {
    login: {
        path: "/",
        component: Login,
        menuText:"Login",
        isPrivate: false
    },
    signup: {
        path: "/signup",
        component: SignUp,
        menuText:"Sign Up",
        isPrivate: false
    },
    test: {
        path: "/about",
        component: About,
        menuText:"About Us",
        isPrivate: false
    },
}

export default RouteData;