import React from 'react'
import './Comp1.css'

const Comp1 = () => {
  return (
  <div>
            {/* Arrow & Back Text */}
            <div className='d-flex justify-content-center align-items-center section1'>
            <i className="fa-solid fa-arrow-left arrow me-3 mt-2"></i><span className='text-dark txt sm-ms-5 None-ms-3 '>Back</span>
            </div>

            {/* First Image Div*/}

            <div className=' d-flex justify-content-start ms-2 mt-5 boxes1'>
            <div className="bo d-grid justify-items-center bg-warning">
            <div className='box1 d-flex justify-content-center align-items-center' >
            <span><i class="fa-solid fa-image image1"></i></span>
            </div>
            <div className='box1 d-flex justify-content-center align-items-center'>
            <span className='text-light'>&nbsp;&nbsp;&nbsp;Upload <br /> Item Image</span>
            
            </div>
            </div>
            </div>
            <div className=' d-flex justify-content-start  ms-2 mt-5 boxes1'>
            <div className="bo d-grid justify-items-center bg-white">
            <div className='box1 d-flex justify-content-center align-items-center' >
            <span><i class="fa-solid fa-video image1 text-warning"></i></span>
            </div>
            <div className='box1 d-flex justify-content-center align-items-center'>
            <span>&nbsp;&nbsp;&nbsp;Upload <br /> Item Video</span>
            
            </div>
            </div>
            </div>
            
            </div>

  )
}

export default Comp1
