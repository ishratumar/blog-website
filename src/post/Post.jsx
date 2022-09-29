import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img 
        className="post-image"
        src="https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="" />
        <div className="post-info">
            <div className="post-cats">
                <span className="post-cat">Music</span>
                <span className="post-cat">Life</span>
            </div>
            <span className="post-title">
                Lorem ipsum dolor sit amet
            </span>
            <hr/>
            <span className="post-date">1 hour ago</span>
        </div>
        <p className="post-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, 
            ea qui mollitia amet nobis cumque facere pariatur adipisci quidem maiores 
            a nam rerum assumenda laboriosam itaque eligendi esse reprehenderit? Pariatur?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, 
            ea qui mollitia amet nobis cumque facere pariatur adipisci quidem maiores 
            a nam rerum assumenda laboriosam itaque eligendi esse reprehenderit? Pariatur?
            </p>
    </div>
  )
}
