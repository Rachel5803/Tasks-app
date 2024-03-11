import Axios from "axios"
import { Link } from "react-router-dom"
import { MdDelete } from "react-icons/md"
import { MdCreate } from "react-icons/md";
import { MdCheck } from "react-icons/md";
import { useEffect, useState } from "react";
const Taskitem = ({ task, fetchTasks }) => {
    const [colorbtn, setColorbtn] = useState(true)
    const handelDelete = async () => {
        const { data: responseData } = await Axios.delete("http://localhost:7003/api/todos/", {
            data: { id: task._id }
        })
        fetchTasks()
    }
    const handelCompleted = async () => {
        const { data } = await Axios.put(`http://localhost:7003/api/todos/complete/${task._id}`)
        setColorbtn(!colorbtn)
        fetchTasks()
    }
    useEffect(() => {
        setColorbtn(task.completed)
    }, [])
    return (
        <div className="item">
            <div className="date_created"> {task.createdAt}</div>
            <h2  style={{textDecoration: colorbtn?"line-through":"none"}}>{task.title}</h2>
            <div className="buttons">
            <button onClick={handelCompleted} className="icon_completed" style={{ color: colorbtn ? "black" : "darkgray"}}>  completed <MdCheck /> </button>
            <button onClick={handelDelete} className="icon"> <MdDelete /></button>
            <Link to={`/tasks/update/${task._id}`} className="icon"><MdCreate /></Link>
            </div>
            </div>
            )
        }
export default Taskitem