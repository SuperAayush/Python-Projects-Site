import React from 'react'

const Day2 = () => {
    return (
        <div className="day2">
            <p>
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
    )
}

export default Day2
