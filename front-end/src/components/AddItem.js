import React from 'react'

const AddItem = () => {
    return (
        <div className="container my-5">
            <form className="row g-3">
            <div className="col-md-6">
                <label for="inputEmail4" className="form-label">First Name</label>
                <input type="text" className="form-control" id="inputEmail4"/>
            </div>
            <div className="col-md-6">
                <label for="inputPassword4" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="inputPassword4"/>
            </div>
            <div className="col-12">
                <label for="inputAddress" className="form-label">Address</label>
                <input type="text" className="form-control" id="inputAddress"/>
            </div>
            <div className="col-12">
                <label for="inputAddress2" className="form-label">Contact No.</label>
                <input type="text" className="form-control" id="inputAddress2"/>
            </div>
            <div className="col-12">
                <label for="inputAddress2" className="form-label">Description</label>
                <input type="text" className="form-control" id="inputAddress2"/>
            </div>
            <div className="col-md-6">
                <label for="inputState" className="form-label">Product Type</label>
                <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>Stationary</option>
                    <option>Bedings</option>
                    <option>Electronic</option>
                    <option>Household</option>
                </select>
            </div>
            <div className="col-md-6">
            <label for="formFile" class="form-label">Add Image</label>
            <input class="form-control" type="file" id="formFile"/>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Add</button>
            </div>
        </form>
        </div>
    )
}

export default AddItem