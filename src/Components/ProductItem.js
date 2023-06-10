import React from 'react'

export default function ProductItem(props) {
    let{title , price ,description , image,id} = props;
   
  return (

        <div>
   
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={image}
              className="card-img-top"
              alt="..."
              height="200"  width="200"
            />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <h6 className="card-title">Price-{price}$</h6>
              <p className="card-text">{description}...</p>
              <a href={id} className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
      
    </div>


  );
}
