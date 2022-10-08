import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
  return (
    <div className="register">
        <span className="register-title">Register</span>
      <form className="register-form">
        <label>Username</label>
        <input type="text" placeholder="Enter your username..." className="register-input" />
        <label>Email</label>
        <input type="email" placeholder="Enter your email..." className="register-input" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." className="register-input" />
        <button className="register-button">Register</button>
      </form>
      <button className="register-login-button">
      <Link to="/login" className="link">Login</Link>
      </button>
    </div>
  )
}
