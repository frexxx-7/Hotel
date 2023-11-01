import MyHeader from './components/UI/Header/MyHeader'
import { BrowserRouter } from 'react-router-dom'
import { useStateContext } from './context/ContextProvider'
import MyAside from './components/UI/Aside/MyAside'
import { Transition } from 'react-transition-group'
import AppRouter from './components/AppRouter'
import AdminPanel from './components/UI/AdminPanel/AdminPanel'


function App() {
  const { showAside, adminInfo, user } = useStateContext()
  const duration = 200;
  const defaultStyle = {
    transition: `transform ${duration}ms ease-in-out`,
  }

  const transitionStyles = {
    entering: {
      transform: 'translateX(-100%)',
    },
    entered: {
      transform: 'translateX(0)'
    },
    exiting: { transform: 'translateX(-100%)' },
    exited: { transform: 'translateX(-100%)', },
  };

  return (
    <BrowserRouter>
      {
      adminInfo && user &&
        adminInfo.username == user.name
          ?
          adminInfo.email == user.email
            ?
            <AdminPanel />
            :
            ""
          :
          ""

      }

      {<Transition in={showAside} timeout={duration} unmountOnExit>
        {state => (
          <div className='asideDiv' style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            <MyAside />
          </div>
        )}
      </Transition>}
      <MyHeader />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
