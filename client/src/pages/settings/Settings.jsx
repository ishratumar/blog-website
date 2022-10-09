import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settings-wrapper">
            <div className="title">
                <span className="update-title">Update Your Account</span>
                <span className="delete-title">Delete Account</span>
            </div>
            <form className="settings-form">
                <label>Profile Picture</label>
                <div className="profile-picture">
                    <img
                     src="https://images.pexels.com/photos/4974417/pexels-photo-4974417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                     alt="" 
                     />
                     <label htmlFor="fileInput">
                     <i className="profile-picture-icon fa-regular fa-circle-user"></i>
                     </label>
                     <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Ishrat"/>
                <label>Email</label>
                <input type="email" placeholder="ishrat@gmail.com"/>
                <label>Password</label>
                <input type="password"/>
                <button className="submit">Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}
