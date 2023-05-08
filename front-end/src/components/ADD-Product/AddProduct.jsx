import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './addproduct.style.css'
import { storage } from '../Firebase';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const AddItem = (props) => {
    const [addproduct, setaddproduct] = useState({"name":"", "description": "", "category": "", "stock":"", "image":""});
    const [imageUp, setimageUp]=useState(null);
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        //adding image using firebase
        if(imageUp == null) return;
        const imageRef = ref(storage, `images/${imageUp.name + v4()}`);
        const snapshot= await uploadBytes(imageRef, imageUp);
        const downloadUrl= await getDownloadURL(snapshot.ref);
        
        
        //API calls
        const url="http://localhost:5000";
        // const url="http://localhost:5000";
        const response = await fetch(`${url}/api/product/addproduct`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "jwt-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ name:addproduct.name, description: addproduct.description, category:addproduct.category, stock:addproduct.stock, image:downloadUrl})
        });
        const json = await response.json();
        if (json) {
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
    const imageUpload=(e)=>{
        setimageUp(e.target.files[0]);
    }

    return (
        <div className="addProduct">
            <h2 style={{textAlign: 'center'}}>Add Product</h2>
            <form className="row g-3" onSubmit={handleSubmit}>
            <div className="innputt">
                <label htmlFor="inputEmail4" className="form-label">Name*</label>
                <input type="text" className="form-control" id="inputEmail4" onChange={onchange} name='name' minLength={3} required/>
            </div>
            <div className="innputt">
                <label htmlFor="inputAddress2" className="form-label">Description*</label>
                <input type="text" className="form-control" id="inputAddress2" onChange={onchange} name='description'/>
            </div>
            <div className="innputt">
                <label htmlFor="inputState" className="form-label">Category*</label>
                <select id="category" className="form-control" name="category" onChange={onchange} style={{width:'100%'}}>
                <option value="">Select</option>
                <option value="Electronic">Electronic</option>
                <option value="Stationary">Stationary</option>
                <option value="Utilities">Utilities</option>
                <option value="Bedings">Bedings</option>
                <option value="Tools">Tools</option>
                <option value="Others">Others</option>
                </select>
            </div>
            <div className="innputt">
            <label htmlFor="formFile" className="form-label">Count*</label>
            <select id="formstock" className="form-control" name="stock" onChange={onchange} style={{width:'100%'}}>
                <option value="">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                </select>
            </div>
            <div className="innputt">
            <label htmlFor="formFile" className="form-label">Add Image*</label>
            <input className="form-control" type="file" id="formFile" onChange={imageUpload} name='image'/>
            </div>
            <div className="col-12" style={{display:'flex', justifyContent:'center'}}>
                <button type="submit" className="btn buton mt-4">Add Product</button>
            </div>
        </form>
        </div>
    )
}

export default AddItem