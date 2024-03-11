import Axios from "axios"
import { Link } from "react-router-dom"
import { MdDelete } from "react-icons/md"
import { MdCreate } from "react-icons/md";
const Useritem = ({ user, fetchUsers }) => {
    const handelDelete = async () => {
        const { data: responseData } = await Axios.delete("http://localhost:7003/api/users/", {
            data: { id: user._id }
        })
        fetchUsers()
    }
    return (
        <div className="item">
            <div className="date_created"> {user.createdAt}</div>
            <h2 >{user.name}</h2>
            <div >{user.username}</div>
            <div className="buttons">
                <button onClick={handelDelete} className="icon"> <MdDelete /></button>
            <Link to={`/users/update/${user._id}`} className="icon"><MdCreate /></Link>
            </div>
            </div>
            )
        }
export default Useritem