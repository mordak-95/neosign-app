import React from 'react';
import './Main.css';



export default (props) => {
    
    return (
      <div>
        <div class="cover container-fluid text-white" id={props.mainId}>
            <div class="cover-content d-flex flex-column justify-content-center align-items-center">
                <img src={props.img} alt="" class="rounded-circle"/>
                <h1 class="display-2 text-capitalize pt-4 pt-md-0">{props.title}</h1>
                <h6 class="pt-3 h4">{props.description}</h6>
            </div>
        </div>
      </div>
    );
  };