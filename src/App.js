import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import { Fragment } from 'react';
import cartProvider from './store/cartProvider';

function App() {
  return (
  <cartProvider>
    <Header />

    <main>
      <Meals />
    </main>
    </cartProvider>);
}

export default App;
