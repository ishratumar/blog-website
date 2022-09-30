import "./TopBar.css"

export default function TopBar() {
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
            <li className="top-list-item">HOME</li>
            <li className="top-list-item">ABOUT</li>
            <li className="top-list-item">CONTACT</li>
            <li className="top-list-item">WRITE</li>
            <li className="top-list-item">LOGOUT</li>
          </ul>
        </div>
        <div className="top-right">
          <img 
          className="top-image"
          src="https://images.pexels.com/photos/4974417/pexels-photo-4974417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="" />
          <i className="top-search-icon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
