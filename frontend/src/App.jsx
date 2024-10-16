import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import './App.css';
import Register from './register/register.jsx';
import Main from './main/MainPage.jsx';
import { useRef } from 'react';
import CreatePost from './main/Createpost.jsx';
// 
function App() {
  const navigate = useNavigate();
  const idRef = useRef(null);
  const passWordRef = useRef(null);

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleMainClick = () => {
    fetch("http://localhost:3000/auth/signin", {
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
        return res.json();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then((data) => {
      alert(data.message);
      localStorage.setItem("token", data.token)
      if (data.message === '로그인 성공')
        navigate("/main");
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation: ',error);
    });

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
        <Route path="/create_post" element = {<CreatePost />} />
      </Routes>
    </Router>
  );
}




export default AppWrapper;
