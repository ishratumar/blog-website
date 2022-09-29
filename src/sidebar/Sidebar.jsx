import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar-item">
            <span className="sidebar-title">ABOUT ME</span>
            <img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit suscipit dolorum quos 
                doloremque assumenda tenetur expedita ducimus tempore.
            </p>
        </div>
        <div className="sidebar-item">
        <span className="sidebar-title">CATEGORIES</span>
        <ul className="sidebar-list">
            <li className="sidebar-list-item">Life</li>
            <li className="sidebar-list-item">Music</li>
            <li className="sidebar-list-item">Style</li>
            <li className="sidebar-list-item">Sport</li>
            <li className="sidebar-list-item">Tech</li>
            <li className="sidebar-list-item">Cinema</li>
        </ul>
        </div>
        <div className="sidebar-item">
        <span className="sidebar-title">FOLLOW US</span>
        <div className="sidebar-social">
            <i className="sidebar-icon fa-brands fa-square-facebook"></i>
            <i className="sidebar-icon fa-brands fa-square-twitter"></i>
            <i className="sidebar-icon fa-brands fa-square-pinterest"></i>
            <i className="sidebar-icon fa-brands fa-square-instagram"></i>
        </div>
        </div>
    </div>
  );
}
