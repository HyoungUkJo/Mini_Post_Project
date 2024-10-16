import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const idRef = useRef(null);
  const passWordRef = useRef(null);
  const navigate = useNavigate();

  function signUp() {
    fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: idRef.current.value,
        password: passWordRef.current.value,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("회원가입 완료!");
        navigate("/");
        console.log(res);
      }
    });
  }
  return (
    <div>
      <h2>Register</h2>
      <label>
        Username: <input type="text" ref={idRef} />
      </label>
      <br />
      <label>
        Password: <input type="password" ref={passWordRef} />
      </label>
      <br />
      <button onClick={signUp}>Submit</button>
    </div>
  );
}

export default Register;
