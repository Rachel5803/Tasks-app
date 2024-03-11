import { NavLink } from "react-router-dom"
import { MdCheck } from "react-icons/md";
import { MdDensitySmall } from "react-icons/md";
import { MdAlbum } from "react-icons/md";
import { MdPerson } from "react-icons/md";
const Navigation=()=>{
    return(
        <div className="nav">
            <NavLink to= "/" className="link link_home"> Home page </NavLink>
            <NavLink to= "/tasks" className="link"><MdCheck /> Todos</NavLink>
            <NavLink to= "/posts" className="link"><MdDensitySmall />  Posts</NavLink>
            <NavLink to= "/photos" className="link"><MdAlbum />  Albums </NavLink>
            <NavLink to= "/users" className="link"> <MdPerson /> Users </NavLink>
            </div>
    )
}
export default Navigation