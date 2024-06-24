import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { toggleDarkMode } from '../../store/reducers/darkModeReducer';

export default function DarkMode() {
    const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);
    const dispatch: AppDispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleDarkMode());
    };

    return (
        <div className="dark-mode-toggle">
            <div>
                <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={handleToggle}
                />
                {darkMode ? 'tối' : 'sáng'}
            </div>
        </div>
    );
};

