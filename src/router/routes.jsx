import AddNews from "../pages/AddNews/AddNews";
import AddRooms from "../pages/AddRooms/AddRooms";
import Autorization from "../pages/Autorization/Autorization";
import Main from "../pages/Main/Main";
import LoadNews from "../pages/News/LoadNews";
import News from "../pages/News/News";
import Profile from "../pages/Profile/Profile";
import Registration from "../pages/Registration/Registration";
import Rooms from "../pages/Rooms/Rooms";

export const publicRoutes = [
  { path: '/signin', component: Autorization },
  { path: '/signup', component: Registration },
  { path: '/main', component: Main },
  { path: '/rooms', component: Rooms },
  { path: '/news', component: News },
  { path: '/news:id', component: LoadNews },
]
export const privateRoutes = [
  { path: '/main', component: Main },
  { path: '/profile', component: Profile },
  { path: '/rooms', component: Rooms },
  { path: '/news', component: News },
  { path: '/news:id', component: LoadNews },
]
export const adminRoutes = [
  { path: '/addNews', component: AddNews },
  { path: '/addRooms', component: AddRooms },
]