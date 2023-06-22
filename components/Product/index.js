import React from 'react'
import Card from '../Card'



export default function Product(props){
    console.log(props,"props")
    return(
        <>
        <Card innerData={props}/>
        </>
    )
}
