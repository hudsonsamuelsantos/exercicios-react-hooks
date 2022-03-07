import React from 'react'

export const data = {
    numbers: 123, 
    text: 'Context API...'
}

const DataContext = React.createContext(data)

export default DataContext