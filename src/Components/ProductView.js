import React from "react";


import Loading from "../Components/Loading";

import { useNavigate } from "react-router-dom";
import ProductItem from "../Components/ProductItem";


export default function ProductView(props) {
  const navigate = useNavigate();
  





   

  if (props.loading) {
    return (
      <div className="Loadingbody">
        <Loading mode={props.mode} />
      </div>
    );
  } else if (props.response) {
    return (
      <>
        <div className="container my-3 text-center">
          <h2 style={{ color: props.mode === "light" ? "black" : "white" }}>
            Different Products Available
          </h2>
          <div className="row">
            {props.post.map((item, i) => {
              return (
                <div className="col-md-4" key={i}>
                  <ProductItem
                    post={props.post}
                    title={item.title.slice(0, 50)}
                    description={item.description.slice(0, 95)}
                    price={item.price}
                    image={item.image}
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => navigate(-1)}
            >
              &larr;Go Back
            </button>
            
          </div>
        </div>
     
      </>
    );
  } else if (!props.response) {
    return <h1 className="text-center">NETWORK ERROR WAS FOUND.</h1>;
  }
}
