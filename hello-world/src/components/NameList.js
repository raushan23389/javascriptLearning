import React from 'react'
import Person from './Person'

function NameList() {
    const names=['bruce','clark','dyna','bruce']
    const persons = [
        {
            id : 1,
            name : 'raushan',
            age : 28,
            skill : 'javascript'
        },
        {
            id : 2,
            name : 'raushan',
            age : 28,
            skill : 'javascript'
        },
        {
            id : 3,
            name : 'raushan',
            age : 28,
            skill : 'javascript'
        }


    ]
    const nameList = names.map((name,index) => <h2 key={index}> {name}</h2>)
    return (
        <div>
           {nameList}
        </div>
    )
}

export default NameList
