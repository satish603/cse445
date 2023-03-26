import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const AddItem = (props) => {
    const [addproduct, setaddproduct] = useState({"name":"", "description": "", "category": "", "stock":""});
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        //API calls
        // const url="https://cloudnote-af56.onrender.com";
        const url="http://localhost:5000";
        const response = await fetch(`${url}/api/product/addproduct`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "jwt-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ name:addproduct.name, description: addproduct.description, category:addproduct.category, stock:addproduct.stock})
        });
        const json = await response.json();
        if (json.success) {
            navigate("/");
            props.showAlert("Product Added Successful", "success");
        }
        else{
            props.showAlert("Product Not Added", "danger");
        }
    }

    const onchange = (e) => {
        setaddproduct({ ...addproduct, [e.target.name]: e.target.value })
    }
    return (
        <div className="container my-5">
            <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-12">
                <label htmlFor="inputEmail4" className="form-label">Name</label>
                <input type="text" className="form-control" id="inputEmail4" onChange={onchange} name='name'/>
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
            <input className="form-control" type="file" id="formFile" onChange={onchange} name='url'/>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Add</button>
            </div>
        </form>
        </div>
    )
}

export default AddItem