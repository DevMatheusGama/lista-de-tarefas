import './App.css'
import AddList from './components/AddList/AddList'
import List from './components/List/List'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState([])

  const addItem = (newItem) => {
    if (newItem.trim() === "") return 
    setItems([...items, newItem])
  }

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index))
  }

  return (
    <div className='container'>
      <h1>Lista de tarefas</h1>
      <AddList addItem={addItem}/>
      <List items={items} removeItem={removeItem} />
    </div>
  )
}

export default App
