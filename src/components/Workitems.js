import React from 'react'
import '../css/work.css'


function Workitems(props) {
  let{date,Name,Description,Url,username,sitename}=props;
  
    return (
        <>
      <div className="card-body">    
                    <h3 className="card-title">{Name}</h3>
                    <p className="card-text">{Description}</p>
                    <p className="card-text date">Pushed at:{new Date(date).toLocaleDateString('en-US', { day: '2-digit',month: '2-digit',year: 'numeric',})}</p>
                   
                    <div className="d-flex">
                        <a type="button" className="btn " href={Url} target='blank'>Git Repo</a>
                        <a type="button" className="btn " href={`https://${username}.github.io/${sitename}/`} target='blank'>Go Live</a>
                    </div>
                </div>
        </>
    )
}

export default Workitems;