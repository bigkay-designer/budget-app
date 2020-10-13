import React, {useState, useEffect} from 'react'
import './App.css'

function SavingInvestment({saving}) {

    return (
        <div className='main__div'>
            <ul>
                <li key={saving.id}>{saving.title}</li>
                <li className='main__total'>{saving.total}</li>
                <input type="number"/>
            </ul>
        </div>
    )
}

export default SavingInvestment
