import Axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Postitem from "./Postitem"
import { MdPostAdd } from "react-icons/md";
const Postslist = () => {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState("")
    const changeSearch = (e) => {
        setSearch(e.target.value)
    }
    
    const fetchPosts = async () => {
        try {
            const { data } = await Axios.get("http://localhost:7003/api/posts/");
            setPosts(data);
          }  catch (error) {
            console.error("Error fetching users:", error);
            setPosts([])
          }

    }
    useEffect(() => {
        fetchPosts()
    }, [])
    if (posts.length === 0) {
        return (
           <div >
            <div className="message_empty">There are no posts in the system, 
            you can add a post using the button at the bottom of the page</div>
             <Link to="/posts/add" className="add_btn"><MdPostAdd /></Link>
           </div>
            )
    }
    return (
        <div>
            <div className="box-search">
                <input placeholder="search..."
                    className="searchInput"
                    onChange={changeSearch}
                    name="search"
                    id="search"
                    value={search} />
            </div>
            <div className="items-list">
                {posts.map((post) => {
                    if (post.title.toLowerCase().includes(search.toLowerCase()))
                        return <Postitem post={post} fetchPosts={fetchPosts} />
                })}
                <Link to="/posts/add" className="add_btn"><MdPostAdd /></Link>
            </div>
        </div>
    )
}
export default Postslist