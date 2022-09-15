import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import client from "../utils/client";
import dateFormat from 'dateformat'
import { Button } from "react-bootstrap";
import { Transaction } from "../utils/interfaces";

interface StateProps {
  balance: number
}
function ViewTransactions(props: StateProps) {
  let navigate = useNavigate()
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const { balance } = props

  useEffect(() => {
    client.get('/transaction')
      .then(res =>
        setTransactions(res.data.list))
  }, [])
  console.log(transactions)

  return (
    <div className="container">

      <Button className="btn-dark " onClick={() => navigate('/home')}>Back to Home</Button>
      <nav className="navbar ">
        <form className="d-flex ">
          <input className="form-control me-2" type="search" placeholder="Transaction" aria-label="Search" />
          <button className="btn btn-dark" type="submit">Search</button>
        </form>
        <div >
          <h3>Current Balance: {balance}</h3>
        </div>
      </nav>

      <table className="table table-sm table-bordered table-dark table-hover table-responsive" >
        <thead >
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">Money in</th>
            <th scope="col">Money out</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        {transactions != null && (transactions.map((item, index) =>
          <tbody key={index}>
            <tr className="table-secondary">
              <th scope="row">{dateFormat(item.date, "mmm dS, yy")}</th>
              <td>{item.description}</td>
              <td>{item.type === 'deposit' ? item.amount : ""}</td>
              <td>{item.type === 'withdrawl' ? -Math.abs(item.amount) : ""}</td>
              <td>{item.balanceAtTime}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>

  );
}

export default ViewTransactions;