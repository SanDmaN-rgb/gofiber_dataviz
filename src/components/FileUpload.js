import React, { Fragment } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

export const FileUpload = ({onSubmit, onChange, filename, uploadedFile}) => {
  
  return (
    <div>
    <Fragment>
        <form onSubmit={onSubmit} className="text-center">
          <div>
            <input type="file" id="customFile" onChange={onChange} className="
                    form-control
                    block
                    w-1/2
                    mt-5
                    ml-[25%]
                    sm:w-full
                    sm:ml-[10%]
                    xs:ml-[20%]
                    xxs:ml-[50%]
                    px-1
                    py-1
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 
                    "/>
            {/* <h1 className="custom-file-label" htmlFor="customFile">{filename}</h1> */}
          
          <input type="submit" value="Upload" className = "border-white border-3 rounded-md px-3 py-2 inline-block bg-[#91D8C7] hover:bg-[#0F8C79] hover:text-white duration-200 sm:ml-[15%] xs:ml-[50%] xxs:ml-[90%]"/>
        </div>
        </form>
        { uploadedFile ? <div>
          <div> 
            {/* <h1 className="text-center">
              { uploadedFile.fileName }
            </h1> */}
            <img style={{width:'100%'}} src={uploadedFile.filePath} alt=""/>
          </div>
        </div>: null}
    </Fragment>
    </div>
  )
}
