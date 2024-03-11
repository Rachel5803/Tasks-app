import  Axios  from "axios"
import { useState} from "react"
import { useNavigate } from "react-router-dom"
const Addphoto=()=>{
    const navigate=useNavigate()
    const[values,setValues]=useState({
        title:"",
        imegeUrl :""
    })
    const changeInput=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }
    const submitForm=async(e)=>{
        e.preventDefault()
        const {data}= await Axios.post("http://localhost:7003/api/photos/", values)
        setValues({title:"", imegeUrl:""})
        navigate("/photos")
    }
    return(
        <div className="form_box">
           <form onSubmit={submitForm} >
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
           <button disabled={values.title===""} type="submit" className="btn_submit">save</button>
           </form>
        </div>
        )
    }
export default Addphoto