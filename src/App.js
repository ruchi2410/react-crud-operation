import  './App.css';
import Create from './components/create/create'
import Read from './components/read/read'
import { Routes, Route } from 'react-router-dom'
import Update from './components/update/update'
import Delete from './components/delete/delete'

function App() {
  return (
  
  <>
     
    <div className="main">
      <div>
        <h3>React Crud Operations</h3>
      </div>

      <div>
        <Routes>
        <Route path='/' element={<Create/>} />
        </Routes>
      </div>

      <div style={{ marginTop: 20 }}>
      <Routes>
        <Route path='/read' element={<Read/>} />
      </Routes>
      </div>

      <Routes>
      <Route path='/update' element={<Update/>} />
      <Route path='/delete' element={<Delete/>} />
      </Routes>
      
      
    </div>
 
  </>
    
  );
}

export default App;





