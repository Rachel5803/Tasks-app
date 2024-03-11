import  Axios  from "axios"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
const Adduser=()=>{
    const navigate=useNavigate()
    const [values, setValues] = useState({
        name: "",
        username: "",
        email: "",
        address: "",
        phone: ""
    })
    const changeInput=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }
    const submitForm=async(e)=>{
        e.preventDefault()
        const {data}= await Axios.post("http://localhost:7003/api/users/", values)
        setValues({ name: data.title, username: data.username,email: data.email,address: data.address,phone: data.phone,  })
        navigate("/users")
    }
    return(
        <div className="form_box">
           <form onSubmit={submitForm} >
           <input placeholder="press the name"
                    onChange={changeInput}
                    name="name"
                    id="name"
                    value={values.name} />
                    <input placeholder="press the username"
                    onChange={changeInput}
                    name="username"
                    id="username"
                    value={values.username} />
                    <input placeholder="press the email"
                    onChange={changeInput}
                    name="email"
                    id="email"
                    value={values.email} />
                    <input placeholder="press the address"
                    onChange={changeInput}
                    name="address"
                    id="address"
                    value={values.address} />
                    <input placeholder="press the phone"
                    onChange={changeInput}
                    name="phone"
                    id="phone"
                    value={values.phone} />

           <button disabled={values.name===""||values.username===""} type="submit" className="btn_submit">save</button>
           </form>
        </div>
        )
    }
export default Adduser