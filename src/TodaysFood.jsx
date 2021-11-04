import React from 'react'

export default function TodaysFood ({ food }) {
    return (
        <div className="todays-column">
            <h3 className="todays-title">Today's foods</h3>
            <ul>
                {
                    food.map((food) => {
                        return (
                            <li key={food.name}>
                                {food.quantity} {food.name} = {food.calories*food.quantity} calories 
                            </li>
                        )
                    })
                }
            </ul>
            <p><b>Total</b>: {food.reduce((acc, val) => acc + val.calories*val.quantity, 0)} cal</p>
        </div>
    )
}
