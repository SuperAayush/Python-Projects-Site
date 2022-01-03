import React,{useState} from 'react'
import Header from './Header'
import "../Styling/Day2.css"

const Day2 = () => {

var[data1,setData1] =useState(" ")
const[data2,setData2]=useState(" ")
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

   var n1=data1.toLowerCase();
   var n2=data2.toLowerCase();

   let countn1t = 0;
   let countn2t = 0;
   let countn1l = 0;
   let countn2l = 0;

    
    for (let i = 0; i < n1.length; i++) 
    {
        if (n1.charAt(i) === 't' || n1.charAt(i) === 'r' || n1.charAt(i) === 'u' || n1.charAt(i) === 'e') 
        {
            countn1t += 1;
        }
         if (n2.charAt(i) === 't' || n2.charAt(i) ==='r' || n2.charAt(i) === 'u' || n2.charAt(i) === 'e') 
        {
            countn2t += 1;
        }
    }
    for (let i = 0; i < n1.length; i++) 
    {
        if (n1.charAt(i) === 'l' || n1.charAt(i) === 'o' || n1.charAt(i) === 'v') 
        {
            countn1l += 1;
        }
         if (n2.charAt(i) === 'l' || n2.charAt(i) ==='o' || n2.charAt(i) === 'v') 
        {
            countn2l += 1;
        }
    }
    var ans1= parseInt(countn1t) +parseInt(countn2t);
    var ans2= parseInt(countn1l) +parseInt(countn2l);

    return (
        <div className="day2">
        <Header />

        <h1 className="day1-heading"> Welcome to the love percentage calculator ❤️</h1>
        <p className="text-input1">Enter your name</p>
        <input className="in1" type="text" onChange={Input1} placeholder="Your Name"/>
        <p className="text-input2">Enter your partner name</p>
        <input className="in2" type="text" onChange={Input2} placeholder="Your Partner Name"/>
        <button className="btn2" onClick={() =>setPrint(true)}>Enter</button>
    
        
        {
          print ?
          <div>
              <p className="intro-band">Each person should pay:</p>
              <p className="bandname">{ans1 + "" + ans2 +" %"}</p>
              <p className="scroll-code"><a href="#pycode1">scroll down for python code</a></p>
              <p className="down-arrow"><span><a href="#pycode1">&#x2193;</a></span></p>
               <p id="pycode2" className="day2-code">
                print("Welcome to the love percentage calculator ❤️") <br />
                name=input("Enter your name\n")<br />
                partner=input("Enter your partner name\n")<br />
                name=name.lower()<br />
                partner=partner.lower()<br />

                #for word TRUE<br />
                t=name.count("t")+partner.count("t")<br />
                r=name.count("r")+partner.count("r")<br />
                u=name.count("u")+partner.count("u")<br />
                e=name.count("e")+partner.count("e")<br />

                #for word LOVE<br />
                l=name.count("l")+partner.count("l")<br />
                o=name.count("o")+partner.count("o")<br />
                v=name.count("v")+partner.count("v")<br />

                true=t+r+u+e<br />
                love=l+o+v+e<br />

                print(f"Your love percentage is (true)(love)% ")<br />
            </p>
          </div>
            :(null)
        }
            
        </div>
    )
}

export default Day2
