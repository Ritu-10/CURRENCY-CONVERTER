import React,{useState} from "react";
import "./style.css";

export default function App() {

  const [dollar,setDollar] = useState()
  const [rupee,setRupee] = useState()
  const [Value , setValue] = useState()
  const [rupees,setRupees] = useState()

  function Dollar(e){
  setValue(e.target.value)
  }

  function Rupee(e){
    setRupees(e.target.value)
  }

  function Rup(){
    setRupee(Value*82)

  }

  function Dlr(){
    setDollar((rupees/82).toFixed(2))
  }

  return (
    <div>
      <h1>Currency Converter</h1>
      <div>
      <input onChange={Dollar} type="number" placeholder="Dollar" value={Value}/>
      <button onClick={Rup}>Rupees</button> :
      {rupee}
      </div>
      <div>
      <input  onChange={Rupee} type="number" placeholder="Rupee" value={rupees}/>
      <button onClick={Dlr}>Dollar</button> :
      {dollar}
      </div>
    </div>
  );
}
