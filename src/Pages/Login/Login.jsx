import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import regimg from '../../Assets/Images/regimg.svg'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigate('/upload');
    } catch (error) {
      setError('Invalid email or password. Please try again.'); 
    }
  };

  return (
    <>
      
      <div className="counter">
            <div className="registerimgdiv">
                <img src={regimg} alt="" />
            </div>
            <div className="counter_form">
				<form className="counter_form_content d-flex flex-column align-items-center justify-content-center" action="/">
					<div className="counter_form_title">Login</div>
					<input type="email" className="counter_input" placeholder="Your Email:" required="required" value={email} onChange={(e) => setEmail(e.target.value)}/>
					<input type="password" className="counter_input" placeholder="Password" required="required" value={password} onChange={(e) => setPassword(e.target.value)}/>
					<button type="submit" onClick={handleLogin} className="counter_form_button">Login</button>
                    <p><a href="/">Forget Password ?</a></p>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
				</form>
			</div>
      </div>
    </>
  )
}
