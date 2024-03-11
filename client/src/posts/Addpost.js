import  Axios  from "axios"
import { useState} from "react"
import { useNavigate } from "react-router-dom"
const Addpost=()=>{
    const navigate=useNavigate()
    const[values,setValues]=useState({
        title:"",
        body :""
    })
    const changeInput=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }
    const submitForm=async(e)=>{
        e.preventDefault()
        const {data}= await Axios.post("http://localhost:7003/api/posts/", values)
        setValues({title:"", body:""})
        navigate("/posts")
    }
    return(
        <div className="form_box">
           <form onSubmit={submitForm} >
           <input placeholder="press the title" 
           onChange={changeInput}
           name="title"
           id="title"
           value={values.title}/>
           
            <textarea placeholder="press the body" 
           onChange={changeInput}
           name="body"
           id="body"
           className="text_input"
           value={values.body}/>
          <button disabled={values.title===""} type="submit" className="btn_submit">save</button>
           </form>
        </div>
        )
    }
export default Addpost