import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase, decrease, reset } from '../../store/reducers/countReducer'

export default function Count() {
    const state: any = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(state);
    return (
        <div>
            <p>count: {state.count}</p>
            <button onClick={() => dispatch(increase())}>tang</button>
            <button onClick={() => dispatch(decrease())}>giam</button>
            <button onClick={() => dispatch(reset())}>reset</button>
        </div>
    )
}
