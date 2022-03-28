import React,{useEffect,useState} from 'react'
import axios from 'axios';
export default function Checking() {

    const[text,setText]=useState("intial text");

    const getTrainerDetails = ()=>
    {
        axios.get('/api/trainers').then(function(response)
             {
                setText(response.data[0].description);
                console.log(response.data);
            })
    }

    // useEffect(()=>
    // {
    //     axios.get('/api/trainers').then(function(response)
    //          {
    //             console.log("########",response.data[1]);
                
    //         })
    // });
   

    // componentDidMount =()=>
    // {
    //     axios.get('/api/trainers').then(function(response)
    //     {
    //         console.log(response);
    //     })
    // }
  return (
    <>
    <h1>{text}</h1>
    <button type="button" className="btn btn-primary" onClick={getTrainerDetails}>Get Details</button>
    </>
  )
}
