import Axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Taskitem from "./Taskitem"
import { MdAddTask } from "react-icons/md";
const Taskslist = () => {
    const [tasks, setTasks] = useState([])
    const [search, setSearch] = useState("")
    const changeSearch = (e) => {
        setSearch(e.target.value)
    }
    const fetchTasks = async () => {
        try {
            const { data } = await Axios.get("http://localhost:7003/api/todos")
            setTasks(data)
        }
        catch (error) {
            console.error("Error fetching tasks:", error);
            setTasks([])
        }
     }
     useEffect(() => {
        fetchTasks()
    }, [])
    if (tasks.length === 0) {
        return (
            <div >
             <div className="message_empty">There are no tasks in the system, 
             you can add a task using the button at the bottom of the page</div>
             <Link to="/tasks/add" className="add_btn"><MdAddTask /></Link>
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
                {tasks.map((task) => {
                    if (task.title.toLowerCase().includes(search.toLowerCase()))
                        return <Taskitem task={task} fetchTasks={fetchTasks}  />
                })}
                <Link to="/tasks/add" className="add_btn"><MdAddTask /></Link>
            </div>
        </div>
    )
}
export default Taskslist