import Axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Useritem from "./Useritem"
import { MdPersonAddAlt1 } from "react-icons/md";

const Userslist = () => {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")
    const [searchBy, setSearchBy] = useState("")
    const changeSearch = (e) => {
        setSearch(e.target.value)
    }
    const fetchUsers = async () => {
        try {
            const { data } = await Axios.get("http://localhost:7003/api/users")
            setUsers(data)
          }  catch (error) {
            console.error("Error fetching users:", error);
            setUsers([])
          }
     
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    if (users.length === 0) {
        return (
            <div >
             <div className="message_empty">There are no users in the system, 
             you can add a user using the button at the bottom of the page</div>
             <Link to="/users/add" className="add_btn"><MdPersonAddAlt1 /></Link>
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
            
            {users?.map((user) => {
                if (user.name.toLowerCase().includes(search.toLowerCase()))
                    return <Useritem user={user} fetchUsers={fetchUsers} />
            })}
            <Link to="/users/add" className="add_btn"><MdPersonAddAlt1 /></Link>
        </div>
        </div>
    )
}
export default Userslist