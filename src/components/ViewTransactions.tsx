import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"
import { useState, useEffect } from "react";
import client from "../utils/client";
import dateFormat from 'dateformat'
function ViewTransactions() {
  let navigate = useNavigate()
  interface Transaction {
    title: string,
    amount: number,
    date: number
  }
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    client.get('/transaction')
      .then(res =>
        setTransactions(res.data.list))
  }, [])
  return (
    <div className="d-flex flex-column justify-content-center align-items-center border p-3">
      This the view transactions page
      <Button className="btn-dark" onClick={() => navigate('/home')}>Back to Home</Button>

      {transactions != null && (transactions.map((item, index) =>
        <div key={index}>
          <div >{item.title}</div>
          <div >{item.amount}</div>
          <div >{dateFormat(item.date, "mmmm dS, yyyy" )}</div>
        </div>
      ))}


    </div>
  );
}

export default ViewTransactions;