import Autorization from "../pages/Autorization/Autorization";
import Main from "../pages/Main/Main";
import Profile from "../pages/Profile/Profile";
import Registration from "../pages/Registration/Registration";

export const publicRoutes = [
  { path: '/signin', component: Autorization },
  { path: '/signup', component: Registration },
  { path: '/main', component: Main },
]
export const privateRoutes = [
  { path: '/main', component: Main },
  { path: '/profile', component: Profile },
]