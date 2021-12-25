import React from 'react'
import "../Styling/Day1.css"

const Day1 = () => {
    return (
        <div className="day1">
            <p>
                print("Welcome to band name creator")<br />
                # BAND NAME CREATOR<br />
                city=input("Enter Your City Name\n")<br />
                name=input("Enter Your Name\n")<br />
                print("Your band name could be " + city + " " + name)<br />
            </p>
        </div>
    )
}

export default Day1
