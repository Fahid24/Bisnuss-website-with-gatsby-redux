import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { increment, incrementByAmount, reset } from "./counterSlice"
import styled from "styled-components"

const CounterView = () => {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `

  const Button = styled.button`
    border: none;
    margin: 5px;
    padding: 10px;
    font-weight: bold;
    text-decoration: none;
    font-size: medium;
    background-color: #fb2f79;
    border-radius: 20px;
    width: auto;
    height: auto;
    color: white;
    cursor: pointer;
  `

  return (
    <Section>
      <h1>counter: {count}</h1>
      <div>
        <Button
          onClick={() => {
            dispatch(increment())
          }}
        >
          increment
        </Button>
        <Button
          onClick={() => {
            dispatch(incrementByAmount(5))
          }}
        >
          incrementByAmount
        </Button>
        <Button
          onClick={() => {
            dispatch(reset())
          }}
        >
          reset
        </Button>
      </div>
    </Section>
  )
}

export default CounterView
