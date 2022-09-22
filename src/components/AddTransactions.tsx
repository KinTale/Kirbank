import { useState } from "react";
import { change, submit } from "../utils/interfaces";
import { Button } from "react-bootstrap";
import client from "../utils/client";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom"


function AddTransactions() {
  let navigate = useNavigate()
  const blankData = {
    description: "",
    amount: 0,
    date: new Date() as Date,
    type: "deposit"
  }
  const [transactions, setTransactions] = useState(blankData)
  const [radio, setRadio] = useState("deposit")

  const handleChange = (e: change): void => {
    const { name, value } = e.target
    name === 'amount' ?
      setTransactions({
        ...transactions, [name]: parseInt(value)
      }) : setTransactions({
        ...transactions, [name]: value
      })
    console.log(transactions)
  }

  const handleRadio = (e: change): void => {
    let checkedValue = e.target.value
    setRadio(checkedValue)
    setTransactions({ ...transactions, type: checkedValue })
  }

  const handleSubmit = (e: submit): void => {
    e.preventDefault()
  

    client.post('/transaction', transactions)
      .then(res => console.log({ res: res }))
      .catch((err) => console.log(err))

    console.log({ filled: transactions })
  }
  const handleDate = (e: change) => {
    let date = new Date(e.target.value)
    let newDate = date.getTime()
    console.log(newDate)
    setTransactions({ ...transactions, date: date })
  }
  return (

    <div className="d-flex flex-column "><h1 className="mb-2"> Add Transactions</h1>
      <Form className="border shadow-sm rounded border-dark p-3" onSubmit={handleSubmit}>
        <Form.Group className="d-flex flex-column" >
          <label htmlFor="title">Description</label>
          <input className="mb-2" placeholder="Type description" name='description' value={transactions.description} onChange={handleChange} />

          <label htmlFor="amount">Amount</label>
          <input className='mb-2' type='number' placeholder="Amount" name='amount' value={transactions.amount} onChange={handleChange} />

          <label className="d-flex align-items-center ">
            <input type='radio' value='deposit' name="deposit" onChange={handleRadio} checked={radio === "deposit"} />
            <h6 className="m-2">Deposit</h6>
            <input type='radio' value='withdrawl' name="withdrawl" onChange={handleRadio} checked={radio === "withdrawl"} />
            <h6 className="m-2">Withdrawl</h6>
          </label>
          <label htmlFor="date">Date</label>
          <Form.Control type='date' placeholder="Date" name='date' onChange={handleDate} />
          <Button className='mt-3' variant="dark" type="submit">Create Transaction</Button>
        </Form.Group>
      </Form>
      <Button className="btn-dark mt-2 shadow-sm" onClick={() => navigate('/home')}>Back to Home</Button>
    </div>

  );
}

export default AddTransactions;