import React, {useState, useEffect} from 'react';
import './App.css';
import Income from './Income'
import SavingInvestment from './SavingInvesments'

const App = function () {

  const [income, setIncome] = useState([])
  const [savings, setSavings] = useState([])
  
  
  useEffect(() => {
    const objData = {
      incomeObj: [
        { id: 1, title: 'After Tax Income' },
        { id: 2, title: 'Side Hustle Income' },
        { id: 3, title: 'Investment Income' },
        {id:4, total:'TOTAL:'}
      ],
      showContent: true
    }
    setIncome(objData.incomeObj)
  }, [])

  useEffect(() => {
    let savingsObj = {
      saving: [
        {id:1, title: 'RetirementAccount'},
        {id:2, title: 'Investment'},
        { id: 3, title: 'Cash Savings' },
        {id:4, total:'TOTAL'}
      ]
    }
    setSavings(savingsObj.saving)
  }, [])
  

  return (
    <div className="App">
        <h1 className='App__title'><spam className='App__title__spam'>Monthly</spam> Budgeting App</h1>
      <div className="App__container">
        {/* income */}
        <h2 className='main__title'>income</h2>
        {income.map(newIncomeData => (
          <Income income={newIncomeData} />
        ))}

        {/* saving and investment */}
        <h2 className='main__title'>Saving&Invesments</h2>
        {savings.map(savingData => (
          <SavingInvestment saving={savingData} />
        ))}
      </div>
    </div>
  );
  
}

export default App;
