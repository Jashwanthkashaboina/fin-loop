import { useState, useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import AuthLayout from "../AuthLayout";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { fetchUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, 
      {  username, password  },
      { withCredentials: true } // If this request has cookies for this backend, include them with the request.
    );
    
      toast.success(res.data.message);
      // console.log(localStorage.getItem("token"));

      await fetchUser();   //  update global auth state
      navigate("/");       // stay on landing page
    } catch (err) {
      toast.error("Invalid username or password");
    }
  };

  return (
    <AuthLayout title="Login into FinLoop">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          className="auth-input"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="password"
          value={password}
          className="auth-input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="auth-btn" type="submit">Login</button>
      </form>
    </AuthLayout>
  );
}

export default Login;
