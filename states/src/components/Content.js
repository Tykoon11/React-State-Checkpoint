
import React, { useState, useEffect } from "react";


function Content({person}) {
  const {fullName, bio, imageSrc, profession } = person

  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  }, []);

  return (
    <div className="container" style={{marginTop:20}}>
      <div className="card mb-3" style={{width: "80vw", height: '100%'}}>
        <div className="row g-0">
        <div className="col-md-4">
        <img src={imageSrc} style={{height: '100%', width: '100%'}} className="img-fluid rounded-start" alt=""/>
        </div>
        <div className="col-md-8">
        <div className="card-body">
        <h3 classNames="card-title">{fullName}</h3>
        <h5>{profession}</h5>
        <p className="card-text">{bio}</p>

        <p className="card-text"><small class="text-muted">Last mounted {count} seconds ago</small></p>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Content
