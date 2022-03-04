import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(n) {
    const number = parseInt(n)
    if (number < 0) return -1
    if (number === 0) return 1
    return calcFatorial(number - 1) * number
}
function checkEvenOrOdd(n) {
    const number = parseInt(n)
    if (number % 2 === 0) return 'Par'
    return 'Ímpar'
}

const UseEffect = (props) => {

    const [number, setNumber] = useState(0)
    const [fatorial, setFatorial] = useState(0)
    const [evenOrOdd, setEvenOrOdd] = useState('Não definido')
    const [number2, setNumber2] = useState(0)

    useEffect(function () {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function () {
        setEvenOrOdd(checkEvenOrOdd(number2))
    }, [number2])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red">{fatorial}</span>
                </div>
                <input type="number" className="input" value={number} onChange={event => setNumber(event.target.value)} />
            </div>
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">Par ou Ímpar:</span>
                    <span className="text red">{evenOrOdd}</span>
                </div>
                <input type="number" className="input" value={number2} onChange={event => setNumber2(event.target.value)} />
            </div>
        </div>
    )
}

export default UseEffect
