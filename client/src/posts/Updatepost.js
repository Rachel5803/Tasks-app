import { useParams } from "react-router-dom"
import Axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
const Updatepost = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [values, setValues] = useState({
        title: "",
        body: ""
    })
    const [post, setPost] = useState({})
    const fetchPostById = async () => {
        const { data } = await Axios.get(`http://localhost:7003/api/posts/${id}`)
        setPost(data)
        setValues({ title: data.title, body: data.body })
    }
    const changeInput = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const submitForm = async (e) => {
        e.preventDefault()
        console.log(values);
        const { data } = await Axios.put("http://localhost:7003/api/posts/", { ...values, _id: id })
        navigate("/posts")
    }
    useEffect(() => {
        fetchPostById()
    }, [])
    return (
        <div className="form_box">
            <form onSubmit={submitForm}>
                <input placeholder="press the title"
                    onChange={changeInput}
                    name="title"
                    id="title"
                    value={values.title} />
                     <input placeholder="press the body"
                    onChange={changeInput}
                    name="body"
                    id="body"
                    value={values.body} />


               
                <button disabled={values.title === ""} type="submit" className="btn_submit">save</button>
            </form>
        </div>
    )
}
export default Updatepost