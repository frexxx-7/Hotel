import MyHeader from './components/UI/Header/MyHeader'
import AppRouter from './Components/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import AdminPanel from './components/UI/AdminPanel/AdminPAnel'
import { useStateContext } from './context/ContextProvider'
import MyAside from './components/UI/Aside/MyAside'
import { Transition } from 'react-transition-group'


function App() {
  const { showAside } = useStateContext()
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
