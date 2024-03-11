import { useParams } from "react-router-dom"
import Axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
const Updatetask = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [values, setValues] = useState({
        title: "",
        completed: "",
        tags: []
    })
    const [tagsArr, setTagsArr] = useState([])
    const fetchTaskById = async () => {
        const { data } = await Axios.get(`http://localhost:7003/api/todos/${id}`)
        setValues({ title: data.title, completed: data.completed, tags: data.tags })
    }
    const changeInputTitle = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const changeChekBox = (e) => {
        setValues({ ...values, completed: e.target.checked })
    }
    const changeInputTags = (e) => {
        setTagsArr(e.target.value.split(","))
        setValues({ ...values, [e.target.name]: tagsArr })
    }
    const submitForm = async (e) => {
        e.preventDefault()
        const { data } = await Axios.put("http://localhost:7003/api/todos/", { ...values, _id: id })
        navigate("/tasks")
    }
    useEffect(() => {
        fetchTaskById()
    }, [])
    return (
        <div className="form_box">
            <form onSubmit={submitForm}>
                <input placeholder="press the title"
                    onChange={changeInputTitle}
                    name="title"
                    id="title"
                    value={values.title} />
                <input placeholder="press the tags"
                    onChange={changeInputTags}
                    name="tags"
                    id="tags"
                    value={values.tags} />
                <input
                    type="checkbox"
                    onChange={changeChekBox}
                    name="completed"
                    id="completed"
                    checked={values.completed}
                />
                <button disabled={values.title === ""} type="submit" className="btn_submit">save</button>
            </form>
        </div>
    )
}
export default Updatetask