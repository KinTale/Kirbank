import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import client from "../utils/client";
import dateFormat from 'dateformat'
import { Button } from "react-bootstrap";
import { Transaction } from "../utils/interfaces";

function ViewTransactions() {
  let navigate = useNavigate()
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    client.get('/transaction')
      .then(res =>
        setTransactions(res.data.list))
  }, [])

  return (
    <div className="container">
      
      <Button className="btn-dark " onClick={() => navigate('/home')}>Back to Home</Button>
      <nav className="navbar ">
        <form className="d-flex ">
          <input className="form-control me-2" type="search" placeholder="Transaction" aria-label="Search" />
          <button className="btn btn-dark" type="submit">Search</button>
        </form>
         <div >
       <h3>Current Balance: -£300:00</h3>
      </div>
      </nav>
     
      <table className="table table-sm table-bordered table-dark table-hover table-responsive" >
        <thead >
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Title</th>
            <th scope="col">Amount</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        {transactions != null && (transactions.map((item, index) =>
          <tbody key={index}>
            <tr className="table-secondary">
              <th scope="row">{dateFormat(item.date, "mmm dS, yy")}</th>
              <td>{item.title}</td>
              <td>{item.amount}</td>
              <td>TBA</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>

  );
}

export default ViewTransactions;