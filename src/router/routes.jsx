import AddNews from "../pages/AddNews/AddNews";
import AddRooms from "../pages/AddRooms/AddRooms";
import AddStatusReservation from "../pages/AddStatusReservation/AddStatusReservation";
import Autorization from "../pages/Autorization/Autorization";
import EditProfile from "../pages/EditProfile/EditProfile";
import Gym from "../pages/Gym/Gym";
import Main from "../pages/Main/Main";
import LoadNews from "../pages/News/LoadNews";
import News from "../pages/News/News";
import Profile from "../pages/Profile/Profile";
import Registration from "../pages/Registration/Registration";
import ReservationRoom from "../pages/ReservationRoom/ReservationRoom";
import LoadRoom from "../pages/Rooms/LoadRoom";
import Rooms from "../pages/Rooms/Rooms";

export const publicRoutes = [
  { path: '/signin', component: Autorization },
  { path: '/signup', component: Registration },
  { path: '/main', component: Main },
  { path: '/rooms', component: Rooms },
  { path: '/rooms/:id', component: LoadRoom },
  { path: '/news', component: News },
  { path: '/news/:id', component: LoadNews },
  { path: '/gym', component: Gym },
]
export const privateRoutes = [
  { path: '/main', component: Main },
  { path: '/profile', component: Profile },
  { path: '/rooms', component: Rooms },
  { path: '/rooms/:id', component: LoadRoom },
  { path: '/news', component: News },
  { path: '/news/:id', component: LoadNews },
  { path: '/editProfile/:id', component: EditProfile },
  { path: '/reservationRoom/:id', component: ReservationRoom },
  { path: '/gym', component: Gym },
]
export const adminRoutes = [
  { path: '/addNews', component: AddNews },
  { path: '/addRooms', component: AddRooms },
  { path: '/editNews/:id', component: AddNews },
  { path: '/editRoom/:id', component: AddRooms },
  { path: '/addStatusReservation/', component: AddStatusReservation },
]