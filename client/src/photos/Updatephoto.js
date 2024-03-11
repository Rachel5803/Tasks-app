import { useParams } from "react-router-dom"
import Axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
const Updatephoto = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [values, setValues] = useState({
        title:"",
        imageUrl :""
    })
    const [photo, setPhoto] = useState({})
    const fetchPhotoById = async () => {
        const { data } = await Axios.get(`http://localhost:7003/api/photos/${id}`)
        setPhoto(data)
        setValues({ title: data.title, imageUrl: data.imageUrl})

    }
    const changeInput = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const submitForm = async (e) => {
        e.preventDefault()
        const { data } = await Axios.put("http://localhost:7003/api/photos/", { ...values, _id: id })
        navigate("/photos")
    }
    useEffect(() => {
        fetchPhotoById()
    }, [])
    return (
        <div className="form_box">
            <form onSubmit={submitForm}>
            <input placeholder="press the title" 
           onChange={changeInput}
           name="title"
           id="title"
           value={values.title}/>
           <input placeholder="press the picture" 
           onChange={changeInput}
           name="imageUrl"
           id="imageUrl"
           value={values.imageUrl}/>
                <button disabled={values.title === ""} type="submit" className="btn_submit">save</button>
            </form>
        </div>
    )
}
export default Updatephoto