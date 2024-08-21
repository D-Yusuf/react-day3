export default function PostCard({post}){
    const {image, title, description, likes} = post
    return (
      <div style={{display: "flex", flexDirection: "column", border: "1px solid black"}}>
        <img src={image} alt={title}/>
        <h1>{title}</h1>
        <p>{description}</p>
        <div style={{display: "flex", justifyContent: "space-around"}}>
          <p>{likes}</p>
          <button>Like</button>
        </div>
      </div>
    )
  }