import './App.css';
import {Routes,Route} from 'react-router-dom'
import LoginPage from './Views/LoginPage';
import { RegisterPage } from './Views/RegisterPage';
import { HomeLanding } from './Views/HomeLanding';
import { HomePageUser } from './Views/HomePageUser';
import { HomePageEditor } from './Views/HomePageEditor';
import { AppTheme } from './Theme/AppTheme';


function App() {
  return (
    <AppTheme>
      <Routes>
        

          <Route path='/' element={<HomeLanding/>}/>

          <Route path='login' element={<LoginPage/>} /> 
          <Route path='register' element={<RegisterPage/>} />
          
          <Route path='home-user' element={<HomePageUser/>} /> 
          <Route path='home-editor' element={<HomePageEditor/>} />
          
          <Route path='home-admin' element={<HomePageEditor/>} />

      
      </Routes>
    </AppTheme>
  );
}

export default App;
