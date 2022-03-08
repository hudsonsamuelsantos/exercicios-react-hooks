import { useState } from "react"

export const useCounter = (initialValue = 100) => {
    const [count, setCount] = useState(initialValue)

    function dec() {
        setCount(count - 1)
    }

    function inc() {
        setCount(count + 1)
    }

    return  [count, inc, dec]
}