import posts from "../data.js"
import PostCard from "./PostCard"
export default function PostCards(){
  return(
  <div style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
    {posts.map(post=>{
      return (
        <PostCard key={post.id} post={post}/>
      )
    })}
    </div>)
}