import MyHeader from './Components/UI/Header/MyHeader'
import AppRouter from './Components/AppRouter'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <MyHeader/>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App
