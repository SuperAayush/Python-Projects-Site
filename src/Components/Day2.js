import React,{useState} from 'react'
import Header from './Header'
import "../Styling/Day2.css"

const Day2 = () => {

var[data1,setData1] =useState()
const[data2,setData2]=useState()
const [data3,setData3] = useState()
const[print,setPrint]=useState(false)


const Input1 = (e) => {
        setData1(e.target.value)
        var str = e.target.value
        console.log(str)
    }

    const Input2 = (e) => {
        setData2(e.target.value)
        var str = e.target.value
        console.log(str)
    }

     const Input3 = (e) => {
        setData3(e.target.value)
        var str = e.target.value
        console.log(str)
    }
    var per=data2/100;
    var amount=data1*per;
    var total= data1 + amount;
    var ans=total/data3;

    return (
        <div className="day2">
        <Header />

        <h1 className="day1-heading"> Welcome to the tip calculator!😄</h1>
        <p className="text-input1">What is the total bill?</p>
        <input className="in1" type="text" onChange={Input1} placeholder="₹"/>
        <p className="text-input2">What percentage of tip would you like to give? 10%, 12%, or 15%?</p>
        <input className="in2" type="text" onChange={Input2} placeholder="Tip"/>
        <p className="text-input3">How many people to split the bill?</p>
        <input className="in2" type="text" onChange={Input3} placeholder="Number of people to split the bill"/>
        <button className="btn2" onClick={() =>setPrint(true)}>Enter</button>
    
        
        {
          print ?
          <div>
              <p className="intro-band">Each person should pay:</p>
              <p className="bandname">{ans}</p>
              <p className="scroll-code"><a href="#pycode1">scroll down for python code</a></p>
              <p className="down-arrow"><span><a href="#pycode1">&#x2193;</a></span></p>
               <p id="pycode2" className="day2-code">
                print("Welcome to the tip calculator!😄") <br />
                total=float(input("What is the total bill?\n₹")) <br />
                tip=int(input("What percentage of tip would you like to give? 10%, 12%, or 15%?\n")) <br />
                person=int(input("How many people to split the bill?\n")) <br />
                per=tip/100 <br />
                amount=total*per <br />
                total=total+amount <br />
                ans=round(total/person,2) <br />
                print(f"Each person should pay: ₹ (ans) ")
            </p>
          </div>
            :(null)
        }
            
        </div>
    )
}

export default Day2
