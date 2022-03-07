import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0,
}

function reducer(state, action) {
    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'login':
            return { ...state, user: action.payload }
        case 'numberX7':
            return { ...state, number: state.number * 7 }
        case 'numberDiv25':
            return {...state, number: parseInt(state.number / 25)}
        case 'numberAdd':
            return {...state, number: state.number + action.n}
        default:
            return state
    }
}

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className='center'>
                {state.user ? <span className='text'>{state.user}</span>
                    : <span className='text'>Sem Usuário</span>}
                <span className="text">{state.number}</span>
            </div>
            <div className="center">
                <div>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberAdd2' })}>+2</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'login', payload: 'Hudson Santos' })}>Login</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberX7' })}>X 7</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberDiv25' })}>/ 25</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'numberAdd', n: -7 })}>-7</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
