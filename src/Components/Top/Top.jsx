import React from 'react'
import './Top.css';

export default function Top({data}) {
    console.log(data);
  return (
   <>
     <div className="container-fluid py-5 mb-5 page-header">
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-10 text-center">
                    <h1 className="text-5xl font-bold text-white" data-aos="fade-down">{data}</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="/">Pages</a></li>
                            <li className="breadcrumb-item text-white active" aria-current="page">{data}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}
