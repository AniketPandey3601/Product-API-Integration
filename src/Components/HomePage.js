import React from "react";
import photo from "../Aniket-Pandey_passport.jpg";
import photo3 from "../droffle.jpeg"
import AOS from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"


export default function HomePage (props) {

//    async function buttonclick(){

//         console.log("View button clicked");
//         let url = "https://fakestoreapi.com/products";
//         let data= await fetch(url);
//         let parsedData = data.json();
//         console.log(parsedData);

//     }



function buttonclick(){
    props.setLoading(true)
     axios.get("https://fakestoreapi.com/products").then((data) => {
    //    console.log(data);
    //    setPost(data?.data);
    //     if (data.status === 200) {
    //       props.setResponse(true);
    //     }
    props.setPost(data.data);
              console.log(data);
             
              if (data.status === 200) {
                props.setResponse(true);
              
              }
            })
            .catch((e) => alert(e))
            .finally(() => props.setLoading(false));
        
    


    
       
    


}
 



  useEffect(() => {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 700, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease-in",
      once: true,
    });
  }, []);

  return (
    <div className="cont" data-aos="fade-up">
      <div
        className="first"
        // style={{ textAlign:"center", margin:50 ,borderStyle:"outset"}} >
        style={{
          backgroundColor:
            props.mode === "light" ? "GrayText" : "rgb(116, 130, 91)",
        }}
      >
        <h1>WELCOME TO MY WEBSITE!</h1>
      </div>
      <div className="photo3">
        <img src={photo3} alt="" width="65%" />
      </div>

      <div className="textintro">
        <div className="service" data-aos="fade-right">
          <h1>WHAT WE DO?</h1>
          <p>
            We are most affordable and result oriented
            <br />
            <strong>marketing agency</strong> in Agra out there.Dtroffle is
            indeed one of the most sought-after digital marketing agency.
          </p>
        </div>
      </div>
      <h1
        style={{
          color: props.mode === "light" ? "GrayText" : "white",
          fontFamily: "Arial, Helvetica, sans-serif",
          marginTop: "35px",
          textAlign: "center",
          
        }}
      >
        CLICK BUTTON BELOW TO VIEW PRODUCTS!!
      </h1>

      <div className="text-center my-4">
        <Link to="/ProductView">
          <div className="mb-3"></div>

          <button
            className="btn btn-outline-success btn-lg "
            type="button"
            onClick={buttonclick}
          >
            {" "}
            Click to View
          </button>
        </Link>
      </div>

      <div
        className="Bodypart"
        data-aos="fade-up"
        style={{
          backgroundColor:
            props.mode === "light" ? "grey" : "rgb(116, 130, 91)",
        }}
      >
        <h3 className="divtag1">ABOUT DEVELOPER</h3>
        <div className="divtag2">
          <strong>
            Looking for Internship/Full Time job.Currently working on droffle
            Company Assigment.
          </strong>
        </div>
        <img
          className="divtag3"
          src={photo}
          alt="myimage"
          width="100"
          height="100"
        />
        <div className="divtag4">Aniket Pandey - React Developer</div>
      </div>
    </div>
  );
}
