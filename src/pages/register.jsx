import AuthForm from '../components/AuthForm';
import { register } from '../api/auth';

export default function Register() {
  const handleRegister = async (data) => {
    try {
      const response = await register(data);
      console.log('Registration Success:', response);
      // optionally login the user or redirect
    } catch (err) {
      console.error('Registration failed:', err.response?.data || err.message);
    }
  };

  return (
    <>
      <h2>Register</h2>
      <AuthForm onSubmit={handleRegister} buttonText="Register" />
    </>
  );
}
