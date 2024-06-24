import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { toggleViewMode } from '../../store/reducers/changeViewReducer';
import './index.css';

export default function ChangeView() {
    const isGridView = useSelector((state: RootState) => state.viewMode.isGridView);
    const dispatch: AppDispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleViewMode());
    };

    return (
        <div className="view-mode-toggle">
            <button onClick={handleToggle}>
                {isGridView ? 'Switch to List View' : 'Switch to Grid View'}
            </button>
            <ul className={isGridView ? 'grid-view' : 'list-view'}>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
    );
};

