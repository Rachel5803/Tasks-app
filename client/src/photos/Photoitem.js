import Axios from "axios"
import { Link } from "react-router-dom"
import { MdDelete } from "react-icons/md"
import { MdCreate } from "react-icons/md";
const Taskitem = ({ photo, fetchPhotos }) => {
    const handelDelete = async () => {
        const { data: responseData } = await Axios.delete("http://localhost:7003/api/photos/", {
            data: { id: photo._id }

        })
        fetchPhotos()
    }
    return (
        <div className="photo-item">
            <h2>{photo.title}</h2>
            <img src={process.env.PUBLIC_URL + `/images/` + photo.imageUrl + `.png`} className="photo" />
            <div className="buttons">
                <button onClick={handelDelete} className="icon btn-photo" > <MdDelete /></button>
                <Link to={`/photos/update/${photo._id}`} className="icon btn-photo"><MdCreate /></Link>
            </div>
        </div>
    )
}
export default Taskitem