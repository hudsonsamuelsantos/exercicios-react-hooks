import '../../index.css'
import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => setCount(count + 1)}>+1</button>
                    <button className="btn" onClick={() => setCount(count - 1)}>-1</button>
                    <button className="btn" onClick={() => setCount(1000)}>1000</button>
                </div>
            <SectionTitle title="Exercício #02"/>
                <input type="text" className="input" value={name} onChange={event => setName(event.target.value)}/>
                <span className="text">Estado: {name}</span>
        </div>
    )
}

export default UseState