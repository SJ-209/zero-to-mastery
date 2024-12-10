import React from "react";
import './ImageLInkForm.css';

const ImageLinkForm = ({ onInputChange }) => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Give it a try.'}
            </p>
            <div className='center'>
                <div className=' form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}></input>
                    <button className='w-30 grow f4 link ph3 pv2dib white bg-light-blue'>Detect</button>
                </div>
            </div>
        </div> 
    );
}

export default ImageLinkForm;