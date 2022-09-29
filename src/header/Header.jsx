import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="header-titles">
        <span className="header-title-small">React & Node</span>
        <span className="header-title-large">Blog</span>
      </div>
      <img className="header-image" src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
  )
}
