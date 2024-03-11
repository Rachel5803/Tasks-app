import Axios from "axios"
import { Link } from "react-router-dom"
import { MdDelete } from "react-icons/md"
import { MdCreate } from "react-icons/md";
const Postitem = ({ post, fetchPosts }) => {
    const handelDelete = async () => {
        const { data: responseData } = await Axios.delete("http://localhost:7003/api/posts/", {
            data: { id: post._id }
        })
        fetchPosts()
    }
    return (
        <div className="item">
            <div className="date_created"> {post.createdAt}</div>
            <h2 >{post.title}</h2>
            <div className="buttons">
           <button onClick={handelDelete} className="icon"> <MdDelete /></button>
            <Link to={`/posts/update/${post._id}`} className="icon"><MdCreate /></Link>
            </div>
            </div>
            )
        }
export default Postitem