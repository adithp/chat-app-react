import React, { useEffect, useState } from 'react'

function OnlineFriends() {
    const [myContacts,setMyContacts] = useState([])
    setMyContacts([{
        name:"Putra Pratama",
        tag:"hey, how are you man ?",
        online:true,
        image:"../../Assets/images/Profile (1).jpg",
        messages:[{
            message:"hey, how are you man?",
            time:"12:34",
            send:true,
        },
        {
            message:"i am fine",
            time:"12:35",
            send:false,
        },
    ]  
        }])
   
    let hello = ()=>{
        myContacts.map((item)=>{
            console.log(item.messages[0].message)
        })
    }
    hello()
    return (
        <h1>Hello</h1>
    )
}

export default OnlineFriends
