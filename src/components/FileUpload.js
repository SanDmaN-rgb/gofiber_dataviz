import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const FileUpload = ({onSubmit, onChange, filename, uploadedFile}) => {
  
  return (
    <div className="col-md">
    <Fragment>
        <form onSubmit={onSubmit}>
          <div className="custom-file mb-4">
            <input type="file" className="custom-file-input" id="customFile" onChange={onChange}/>
            {/* <h1 className="custom-file-label" htmlFor="customFile">{filename}</h1> */}
          </div>
            <input type="submit" value="Upload" className="btn btn-primary" />
        
        </form>
        { uploadedFile ? <div className ="row mt-5">
          <div className="col-md-6 m-auto"> 
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
