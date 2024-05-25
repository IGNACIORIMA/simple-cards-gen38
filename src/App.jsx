
import './App.css'
import Card from './components/Card'

function App() {
  
  return (
    <>
      <div className='app'>
        <h1 className='app_title'>Simple Cards</h1>
        <div className='app_container'>
          <Card
            color = 'dodgerblue'
            text = 'Primary'
          />
          <Card
            color = 'lightgreen'
            text = 'Secondary'
          />
          <Card
            color = 'crimson'
            text = 'Danger'
          />
        </div>
      </div>
    </>
  )
}

export default App
