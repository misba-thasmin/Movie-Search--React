import React from 'react'

const AddMovie = () => {
  return (
    <div>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Movie Name</label>
<input type="text" className="form-control" />


                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Poster</label>
<input type="file" name="" id="" className="form-contrl" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Language</label>
<select name="" id="" className="form-control">
    <option value="English">English</option>
    <option value="Malayalam">Malayalam</option>
    <option value="Hindi">Hindi</option>
    <option value="Korean">Korean</option>
    <option value="Tamil">Tamil</option>
</select>

                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Discription</label>
<input type="text" className="form-control" />

                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Director</label>
<input type="text" className="form-control" />

                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Actor</label>
<input type="text" className="form-control" />

                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Actress</label>
<input type="text" className="form-control" />

                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<button className="btn btn-secondary">Submit</button>

                </div>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default AddMovie