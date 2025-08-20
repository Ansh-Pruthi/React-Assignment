import Signup from './components/Signup';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Account from './components/Account';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/account' element={<Account/>}/>
      </Routes>
    </>
  )
}

export default App
