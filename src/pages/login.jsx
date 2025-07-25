import AuthForm from "../components/AuthForm";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  const navigate = useNavigate();
  // ✅ If token exists, redirect to /profile
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/profile");
    }
  }, [navigate]);
  
  const handleLogin = async (data) => {
    try {
      const response = await login(data);
      console.log("Login Success:", response);
      localStorage.setItem("token", response.token);
      // redirect or show success
      navigate("/profile"); // ✅ redirect after login
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);
    }
  };

  return (
    <>
      <h2>Login</h2>
      <AuthForm onSubmit={handleLogin} buttonText="Login" />
    </>
  );
}
