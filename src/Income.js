import React, {useState, useEffect} from 'react'
import './App.css'

function Income({income}) {

    return (
        <div className='main__div'>
            <ul>
                <li key={income.id}>{income.title}</li>
                <li className='main__total'>{income.total}</li>
                <input type="number"/>
            </ul>
        </div>
    )
}

export default Income
