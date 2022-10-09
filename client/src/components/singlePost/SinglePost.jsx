import "./singlePost.css"

export default function Singlepost() {
  return (
    <div className="single-post">
        <div className="post-wrapper">
          <img 
          src="https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="" 
          className="post-image" 
          />
          <h1 className="post-title">
            Lorem ipsum dolor sit amet
            <div className="post-edit">
            <i class="post-icon fa-regular fa-pen-to-square"></i>
            <i class="post-icon fa-regular fa-trash-can"></i>
            </div>
          </h1>
          <div className="post-info">
            <span className="post-author">Author:<b>Ishrat</b></span>
            <span className="post-date">Date: 1 hour ago</span>
          </div>
          <p className="post-description">
          Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Officiis atque ab perspiciatis rem perferendis neque 
          doloribus unde, fugiat voluptates facere, suscipit ad. Ducimus tempore 
          aspernatur magnam quae quis. Nulla, accusantium!
          Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Officiis atque ab perspiciatis rem perferendis neque 
          doloribus unde, fugiat voluptates facere, suscipit ad. Ducimus tempore 
          aspernatur magnam quae quis. Nulla, accusantium!
          Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Officiis atque ab perspiciatis rem perferendis neque 
          doloribus unde, fugiat voluptates facere, suscipit ad. Ducimus tempore 
          aspernatur magnam quae quis. Nulla, accusantium!
          </p>
        </div>
    </div>
  )
}
