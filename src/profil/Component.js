import React from "react";
import { Children } from "react";
import PropTypes from "prop-types"
const profil =(props)=>{  
    const styleo={color:"#316B83", textAlign:'center', fontFamily:"Roboto", backgroundColor:'#D5BFBF'}
 return (
      <div style={styleo}>
        <h1>Name :</h1>
        <h2>{props.fullName}</h2>
        {props.children}
        <h1>Bio :</h1> 
        <h2>{props.bio} </h2>
        <h1>Profession:</h1> 
        <h2>{props.profession}</h2>
        <button onClick={props.alertMe}>click me </button>
      </div>);}
      profil.propTypes={
        fullName : PropTypes.string
        ,bio: PropTypes.string
        ,profession: PropTypes.string

      }
      profil.defaultProps={
          fullName :"Hamza Ayechi",
          profession : " Student @ Isitcom" ,
          bio : ` Im 20 year old and im crrently studying 
          computer science at isitcom Hammem Sousse`

        }
      export default profil
      
