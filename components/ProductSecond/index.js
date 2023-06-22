import React from 'react'
import Card from '../Card'



export default function ProductSecond(props){
    console.log(props,"props")
    return(
        <>
        <Card innerData={props}/>
        </>
    )
}
