import { render } from '@testing-library/react';
import React from 'react';
import './Main.css';



export default (props) => {


  let style = {
    background: 'linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url(' +  props.background  + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'buttom',
      
  };
    
    return (

      

      <div className="main" >
        <div style={style} className=" container-fluid text-white" id={props.mainId}>
            <div className="cover-content d-flex flex-column justify-content-center align-items-center">                 
              <img src={props.img} alt="" class="rounded-circle"/>                  
              <h1 className="display-2 text-capitalize pt-4 pt-md-0">{props.title}</h1>
              <h6 className="pt-3 h4">{props.description}</h6>
            </div>
        </div>
      </div>
    );
  };