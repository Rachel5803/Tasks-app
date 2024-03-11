import Axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Photoitem from "./Photoitem"
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
const Photoslist = () => {
    const [photos, setPhotos] = useState([])
    const [search, setSearch] = useState("")
    const changeSearch = (e) => {
        setSearch(e.target.value)
    }
    const fetchPhotos = async () => {
        try {
            const { data } = await Axios.get("http://localhost:7003/api/photos")
            setPhotos(data)
          }  catch (error) {
            console.error("Error fetching photos:", error);
            setPhotos([])
          }
        
    }
    useEffect(() => {
        fetchPhotos()
    }, [])
    if (photos.length === 0) {
        return (
            <div >
             <div className="message_empty">There are no photos in the system, 
             you can add a photo using the button at the bottom of the page</div>
             <Link to="/photos/add" className="add_btn"><MdOutlineAddPhotoAlternate /></Link>
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
            <div className="photos-list">

                {photos.map((photo) => {
                    if (photo.title.toLowerCase().includes(search.toLowerCase()))
                        return <Photoitem photo={photo} fetchPhotos={fetchPhotos} />
                })}
                <Link to="/photos/add" className="add_btn"><MdOutlineAddPhotoAlternate /></Link>
            </div>

        </div>
    )
}
export default Photoslist