import './App.css';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Calender from './Pages/Calender';
import CompletedTask from './Pages/CompletedTask';
import Home from './Pages/Home/Home';
import Todo from './Pages/Todo';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App () {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='' element={<Home />}></Route>
        <Route path='/todo' element={<Todo />}></Route>
        <Route path='/calender' element={<Calender />}></Route>
        <Route path='/completed-task' element={<CompletedTask />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
