import React, { useEffect, useState } from 'react'

const Timer = ({onSlide}) => {
    const [counter,setCounter] = useState(0)

    useEffect(()=>{
        const handlerTimer = () => {
            // Update counter
            setCounter(c => c + 1)
        }

        // Config timer with setTimeOut
        const timerId = setTimeout(handlerTimer, 5000)

        // To slide image
        onSlide()

        // Clean timer
        return()=>{
            clearTimeout(timerId)
        }

    },[counter])



    return (
        <div>
            Compteur : {counter}
        </div>
  )

}

export default Timer
