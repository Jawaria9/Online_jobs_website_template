import React from "react";
import "./Modal.css";
import logo from "./freelancer-logo.svg"

function Modal(props) {

  return (

    <div className="modalBackground">
      <div className="modalContainer ">
        <div className="titleCloseBtn">
          <button
            onClick={props.onHideModal}
          >
            X
          </button>
        </div>
        <div class="logo-position">
          <img src={logo} alt="" width="180" height="60"
          />
        </div>


        <div className="title">
          <h5 class='fw-bold'>{props.heading}</h5>
        </div>

        <a href="#" class="fb btn text-light">
          <i class="fa fa-facebook fa-fw "></i> Login with Facebook
        </a>

        <hr></hr>
        <form>
          <div class="form-row">
            <div class="col">
              <input type="text" class="form-control" placeholder="Email or Username" />
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Password" />
            </div>
        
              
            <div class="col ">
            
              <label>
                <div class="checkbox-color"   name="remember"/>  {props.extra_text1}
              </label>
              <a class="link-color" href="#">{props.extra_text2}</a>
            
          </div>
           

          <div class="col ">
          <button  class='button-style' >{props.button}</button>
          </div>
      </div>
      <p class='text-center'>{props.text1}<a class='text-color' href="#">{props.text2}</a></p>

    </form>

      </div >
    </div >

  );
}

export default Modal;


