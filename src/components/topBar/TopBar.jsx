import { Link } from "react-router-dom";
import "./TopBar.css"

export default function TopBar() {
  const user = true;
  return (
    <div className='top'>
        <div className="top-left">
        <i className="top-icon fa-brands fa-square-facebook"></i>
        <i className="top-icon fa-brands fa-square-twitter"></i>
        <i className="top-icon fa-brands fa-square-pinterest"></i>
        <i className="top-icon fa-brands fa-square-instagram"></i>
        </div>
        <div className="top-center">
          <ul className="top-list">
            <li className="top-list-item">
              <Link to="/" className="link">HOME</Link>
            </li>
            <li className="top-list-item">
              <Link to="/about" className="link">ABOUT</Link>
            </li>
            <li className="top-list-item">
              <Link to="/contact" className="link">CONTACT</Link>
            </li>
            <li className="top-list-item">
              <Link to="/write" className="link">WRITE</Link>
            </li>
            <li className="top-list-item">
              {user && "LOGOUT"}
            </li>
          </ul>
        </div>
        <div className="top-right">
          {
            user ? (
              <img 
          className="top-image"
          src="https://images.pexels.com/photos/4974417/pexels-photo-4974417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="" />
            ) : (
              <ul className="top-list">
                <li className="top-list-item">
                <Link className="link" to="/login">LOGIN</Link>
                </li>
              <li className="top-list-item">
              <Link className="link" to="/register">REGISTER</Link>
              </li>
              </ul>
            )
          }
          <i className="top-search-icon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
