import  Axios  from "axios"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
const Addtask=()=>{
    const navigate=useNavigate()
    const [tagsArr, setTagsArr]=useState([])
    const[values,setValues]=useState({
        title:"",
        completed :false,
        tags:[]
    })
    const changeInputTitle=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }
    const changeChekBox=(e)=>{
        setValues({...values,["completed"]:!values.completed})
    }
    const changeInputTags=(e)=>{
        setTagsArr(e.target.value.split(","))
        setValues({...values,[e.target.name]:tagsArr})
    }
    const submitForm=async(e)=>{
        e.preventDefault()
        const {data}= await Axios.post("http://localhost:7003/api/todos/", values)
        setValues({title:"", completed:"", tags:""})
        navigate("/tasks")
    }
    return(
        <div className="form_box">
           <form onSubmit={submitForm} >
           <input placeholder="press the title" 
           onChange={changeInputTitle}
           name="title"
           id="title"
           value={values.title}/>
          <input placeholder="press the tags" 
           onChange={changeInputTags}
           name="tags"
           id="tags"
           value={values.tags}/>
            <input 
            type="checkbox"
            onChange={changeChekBox}
            name="completed"
            id="completed"
          />
           <button disabled={values.title===""} type="submit" className="btn_submit">save</button>
           </form>
        </div>
        )
    }
export default Addtask