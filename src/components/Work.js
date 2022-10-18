import React, { useEffect, useState } from 'react';
import "../css/work.css";
import Workitems from './Workitems';


function Work(props) {
  let { username } = props;
  const [repository, setrepository] = useState([]);
//   const capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

  const getrepo = async () => {
    let response = await fetch(`https://api.github.com/users/${username}/repos`);
    let data = await response.json();
    setrepository(data);
  }

  useEffect(() => {
    getrepo();
   
    // eslint-disable-next-line
  }, [])
 
  return (
    <>
      <div id='Work' className=" work-page">
        <h3 className='page-text' >GITHUB REPOSITORY</h3>
        <div className="card-list">
        {repository.map((element) => {
          return <div className='card' key={element.id}>
            <Workitems Name={element.name} Description={element.description} Url={element.html_url} sitename={element.name} username={username} date={element.pushed_at} />
          </div>
        })}
      </div>

      </div>
    </>
  )
}

export default Work