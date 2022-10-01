import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img
        className="write-image"
         src="https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=600" 
         alt="" />
      <form className="write-form">
        <div className="write-form-group">
            <label htmlFor="file-input">
            <i class="write-icon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="file-input" style={{display: "none"}}/>
            <input type="text" placeholder="Title" className="write-input" autoFocus={true} />
        </div>
        <div className="write-form-group">
            <textarea placeholder="Tell your story..." type="text" className="write-input write-text"></textarea>
        </div>
        <button className="write-submit">Publish</button>
      </form>
    </div>
  )
}
