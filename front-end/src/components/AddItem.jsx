import React , {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const AddItem = (props) => {
    const [addproduct, setaddproduct] = useState({"name":"", "description": "", "category": "", "stock":"", "image":""});
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        //API calls
        // const url="https://cloudnote-af56.onrender.com";
        const formData= new FormData();
        formData.append('name', addproduct.name);
        formData.append('description', addproduct.description);
        formData.append('category', addproduct.category);
        formData.append('stock', addproduct.stock);
        formData.append('image', addproduct.image, addproduct.image.name);
        const url="http://localhost:5000";
        try {
            let response=await axios.post(`${url}/api/product/addproduct`,formData,{
                headers:{"Content-Type": "multipart/form-data",
                "jwt-token": localStorage.getItem('token')}
            });
            if(response.status===200){
                navigate("/");
                props.showAlert("Product Added Successful", "success");  
            }else{
                props.showAlert("Product Not Added", "danger");
            }
        } catch (error) {
            console.log(error)
        }
    }

    const onchange = (e) => {
        setaddproduct({ ...addproduct, [e.target.name]: e.target.value })
    }
    const imageUpload=(e)=>{
        setaddproduct({ ...addproduct, image: e.target.files[0] })
    }

    return (
        <div className="container my-5">
            <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-12">
                <label htmlFor="inputEmail4" className="form-label">Name</label>
                <input type="text" className="form-control" id="inputEmail4" onChange={onchange} name='name' minLength={3} required/>
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">Description</label>
                <input type="text" className="form-control" id="inputAddress2" onChange={onchange} name='description'/>
            </div>
            <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">Category</label>
                <input type="text" className="form-control" id="category" onChange={onchange} name='category'/>
                
            </div>
            <div className="col-md-4">
            <label htmlFor="formFile" className="form-label">Count</label>
            <input className="form-control" type="text" id="formstock" onChange={onchange} name='stock'/>
            </div>
            <div className="col-md-4">
            <label htmlFor="formFile" className="form-label">Add Image</label>
            <input className="form-control" type="file" id="formFile" onChange={imageUpload} name='image'/>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Add</button>
            </div>
        </form>
        </div>
    )
}

export default AddItem