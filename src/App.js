// import logo from './logo.svg';
import {  useState } from 'react'
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';

function App() {
  
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState('')
  const setAlert  = (message,type)=>{
        setalert({
          msg:message,
          type:type
        }) 
        setTimeout(() => {
          setalert("")
        }, 3000); 
  }
  const toggleMode = ()=>{
    if (mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor= "rgb(57,57,61)"
      document.body.style.color='white'
      setAlert('Dark Mode have Been enable','success')
      document.title = 'TextUtils - Dark Mode'
      setInterval(() => {
      document.title = 'TextUtils - Home'
        
      }, 2000);
    }
    else{
      setmode('light')
      document.body.style.backgroundColor= "white"
      document.body.style.color='black'
      setAlert('light Mode have Been enable','success')
      document.title = 'TextUtils - Light Mode'
      setInterval(() => {
        document.title = 'TextUtils - Home'
          
        }, 2000);
      
      

    }
  }
 
  
  return (
    
   <> 
   
  
     <Router>
     <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
     <Alert Alert={alert}></Alert>
     <Routes>
        <Route path='/' element={<TextForm alert = {setAlert} heading="Enter The text to analyze"/> }
        ></Route>
        <Route path='about' element={<About/>}>

        </Route>
      </Routes>
      </Router> 
    
    
        </> 
   
  );
}

export default App;
