import React from "react";

export default function Error (props) {
    return (
        <div className="py-4 fs-1 my-5 px-4"
         style={{ background: '#2d0506', borderRadius: '5px' }}>
            <i className="bi bi-x mx-2 px-1" 
            style={{ background: '#ec3c44', color: '#fff', borderRadius: '100%' }}></i>
            <i className="bi bi-caret-right-fill" style={{ color: 'rgba(110, 110, 110, 1)' }}></i>
            <span className="text-center" style={{ color: '#ec3c44' }}> 
                Error <strong>{props.status}</strong> 
            </span>
        </div>
    )
}