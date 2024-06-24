import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { addRandomNumber } from '../../store/reducers/randomNumberReducer';

export default function RandomNumber() {
    const randomNumbers = useSelector((state: RootState) => state.randomNumbers.numbers);
    const dispatch: AppDispatch = useDispatch();

    const generateRandomNumber = () => {
        dispatch(addRandomNumber());
    };

    const formatRandomNumbers = () => {
        return randomNumbers.join(', ');
    };

    return (
        <div>
            <h2>[{formatRandomNumbers()}]</h2>
            <button onClick={generateRandomNumber}>Generate Random Number</button>
        </div>
    );
};

