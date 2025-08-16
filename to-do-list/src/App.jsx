import './App.css'
import AddList from './components/AddList/AddList'
import List from './components/List/List'

function App() {

  return (
    <div className='container'>
      <h1>Lista de tarefas</h1>
      <AddList />
      <List />
    </div>
  )
}

export default App
