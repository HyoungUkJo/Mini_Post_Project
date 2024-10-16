import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import './App.css';
import Register from './register/register.jsx';
import Main from './main/main.jsx';
import { useRef } from 'react';
// 
function App() {
  const navigate = useNavigate();
  const idRef = useRef(null);
  const passWordRef = useRef(null);

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleMainClick = () => {
    fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body : JSON.stringify({
        uid : idRef.current.value,
        password : passWordRef.current.value,
      }),
    }).then((res) => {
      if (res.ok) {
        console.log(res);
      };
    })

    navigate("/main");
  }


  return (
    <>
      <h1>형욱 민성 CROSS</h1>
      <label>
        Username: <input type="text" ref = {idRef}/>
      </label>
      <br />
      <label>
        Password: <input type="password" ref = {passWordRef}/>
      </label>
      <br />
      <button onClick={handleMainClick}>Login</button>
      <button onClick={handleRegisterClick}>Register</button>

    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}




export default AppWrapper;
