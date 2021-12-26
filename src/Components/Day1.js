import React,{useState} from 'react'
import "../Styling/Day1.css"

const Day1 = () => {
    const[data1,setData1] =useState(" ")
    const[data2,setData2]=useState(" ")
    const[print,setPrint] = useState(false)


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

    return (
        <div className="day1">
        <h1 className="day1-heading"> Welcome to Band Name Creator</h1>
        <p className="text-input1">Enter your City Name here</p>
        <input className="in1" type="text" onChange={Input1} placeholder="City Name"/>
        <p className="text-input2">Enter your Name here</p>
        <input className="in2" type="text" onChange={Input2} placeholder="Your Name"/>
        <button className="btn2" onClick={() =>setPrint(true)}>Enter</button>


        {
          print ?
          <div>
              <p className="intro-band">Your Band Name Could be:</p>
              <p className="bandname">{data1+data2}</p>
              <p className="scroll-code"><a href="#pycode1">scroll down for python code</a></p>
              <p className="down-arrow"><span><a href="#pycode1">&#x2193;</a></span></p>
               <p id="pycode1" className="day1-code">
                print("Welcome to band name creator")<br />
                # BAND NAME CREATOR<br />
                city=input("Enter Your City Name\n")<br />
                name=input("Enter Your Name\n")<br />
                print("Your band name could be " + city + " " + name)<br />
            </p>
          </div>
            :(null)
        }
        </div>
    )
}


export default Day1
