import React from 'react'
import './Comp2.css'
import Custom from './Custom'

const Comp2 = () => {


  return (
    <div>
    <form>

        {/* Form Title */}

    <div className="container mt-2 p-1">
        <h2 className='me-3 tit'>Upload An Items</h2>
    </div>

    <div>
    {/* First Feild */}
    <div className="form-group mt-2 ">
        <label className='text-dark p-1'><h6 className='headings'>ITEM NAME</h6></label>
        <input type="text" name="txtName" className="form-control inputs" placeholder="Your Name *" />
    </div>

    {/* Second Feild */}
    <div>
    <div className='d-flex justify-content-between'>
    <div className="form-group mt-2">
        <label className='text-dark p-1'><h6 className='headings'>ITEM CODE</h6></label>
        <input type="text" name="txtName" className="form-control inputs" placeholder="Enter Item Code *" />
    </div>
    <div className="form-group ms-2 mt-2">
        <label className='text-dark p-1'><h6 className='headings'>ITEM PRICE (IN $)</h6></label>
        <input type="text" name="txtName" className="form-control inputs" placeholder="Enter Item Price *" />
    </div>
    </div>
    </div>

    {/* Third Feild */ }
    <div className='mt-2'>
    <label className='text-dark p-1 '><h6 className='headings'>DESCRIPTION</h6></label>
    <Custom/>

</div>


    <div className="form-group mt-2 ">
         <label className='text-dark p-1'><h6 className='headings'>ITEM Description</h6></label>
         <label type="text" name="txtName" className="form-control desc desc2 inputs ">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium obcaecati nam accusamus placeat ex, nobis pariatur commodi Lorem. 
         </label>
   </div>



    <div className="form-group mt-2  ">
        <label className='text-dark p-1'><h6 className='headings'>ADD INGREDIENTS ( SEPARARTED BY COMMAS )</h6></label>
       
        <Custom/>

        
    </div>

    {/* Seventh Feild */}
    <div className="form-group mt-2">
        <div className='row'>
        <div className='col-4'>
    <label className='text-dark p-1'><h6 className='headings'>DESCRIPTION</h6></label>
    <select className="form-select form-control inputs" aria-label="Default select example">
  <option selected></option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
</div>
        <div className="col-4">
        <label className='text-dark p-1'><h6 className='headings'>COOK TIME</h6></label>
        <input type="text" name="txtName" className="form-control inputs" placeholder="Your Name *" />
        </div>
        <div className="col-4">
        <label className='text-dark p-1'><h6 className='headings '>ENERGY</h6></label>
        <input type="text" name="txtName" className="form-control inputs" placeholder="Your Name *"  />
        </div>


        </div>
        
    </div>
    </div>
    </form>
      


    </div>
  )
}

export default Comp2
