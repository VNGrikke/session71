import React from 'react'
import { useSelector } from 'react-redux';
import Count from './components/b1/Count'
import RandomNumber from './components/b2/RandomNumber'
import DarkMode from './components/b3/DarkMode'
import { RootState } from './store/store';
import ChangeView from './components/b4/ChangeView';
import Menu from './components/b5/Menu';

export default function App() {
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);
  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Count />
      <RandomNumber />
      <DarkMode />
      <ChangeView/>
      <Menu/>
    </div>
  )
}
