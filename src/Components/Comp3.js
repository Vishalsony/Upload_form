import React from 'react'
import './Comp2.css'

const Comp3 = () => {
  return (
    <>
    <div>
    <form className='forms bg-white'>

        {/* Form Title */}

    <div className="container mt-4 p-1">
        <h4 className='me-3'>Add Add-ones (Optional)</h4>
    </div>

   
   <div className='row mt-2'>
      <div className='col-7 form-group'>
      <label className='text-dark p-1'><h6 className='headings'>Add-ones</h6></label>
        <input type="text" name="txtName" className="form-control inputs" placeholder="Extra Cheese *" />
      </div>
      <div className='col-5 form-group'>
      <label className='text-dark p-1'><h6 className='headings'>PRICE (IN $)</h6></label>
        <input type="text" name="txtName" className="form-control inputs" placeholder="Your Name *" />
      </div>
   </div>
   <div className='row mt-3'>
      <div className='col-7 form-group'>
    
        <input type="text" name="txtName" className="form-control inputs" placeholder="Add Add-ons *" />
      </div>
      <div className='col-5 form-group'>
      
        <input type="text" name="txtName" className="form-control inputs" placeholder="Add Price *" />
      </div>
   </div>
   <div className='row mt-3'>
      <div className='col-7 form-group mt-3'>
      
        <label type="text" name="txtName" className="form-control inputs texts"><h6 className='d-flex align-items-center m-0 add'>+ Add more</h6></label>
      </div>
      
   </div>
   
    </form>

    

    </div>
    <div className="container-fluid-p-0 lastfluid ">
      <div className="container-fluid">
    <div className="container p-0">
    <div className='row mt-3 m' >
    <div className="col-8 p-0"><h5 className='tit'>Item In Stock</h5></div>
    <div className="col-4 d-flex justify-content-between yes ps-5"><h5 className='m-0'>yes</h5><div class="form-check form-switch ps-3">
    <input class="form-check-input swit" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
    
  </div></div>
  
    </div>
    </div>
    </div>

    <button className="container lbtn mt-3 p-0 sec">
   <span className='text-light'>Upload Items</span> 
    </button>
    </div>
    </>
  )
}

export default Comp3
