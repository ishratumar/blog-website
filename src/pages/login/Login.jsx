import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="login-title">Login</span>
      <form className="login-form">
        <label>Email</label>
        <input type="email" placeholder="Enter your email..." className="login-input" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." className="login-input" />
        <button className="login-button">Login</button>
      </form>
      <button className="login-register-button">Register</button>
    </div>
  )
}
