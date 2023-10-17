import React from "react";
import imgLoading from '../img/loading.gif'

export default function Loading() {
    return (
    <div className="text-center position-relative mx-auto">
        <span className="text-center" style={{color: '#ec3c44'}}> 
            <img className="w-50" style={{height: '35vh'}} src={imgLoading} alt="loading"/>
        </span>
    </div>
    )
}