import { useEffect, useState } from 'react'
import EntryList from './components/entryLlst';
import './App.css'
import EntryForm from './components/EntryForm';

function App() {
  const [dbResult, setDbresult] = useState([]);
  const [СurrentPage, setCurrentPage] = useState('list')


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users ')
      .then(response => response.json())
      .then(data => setDbresult(data))
    
  }, []);

function deleteEntry(id) {
    const updatedList = dbResult.filter((entry) => entry.id !== id);
    setDbresult(updatedList);
  };
   
  return (
    <div className='container'>
      <nav>
        <ul className='nav_list'>
          <li className='nav_item'><a href="#" onClick={() => setCurrentPage('list')}>List of entries</a></li>
          <li className='nav_item'><a href="#" onClick={() => setCurrentPage('form')}>Add entry form</a></li>
        </ul>
      </nav>
      {СurrentPage === 'list' && <EntryList dbResult={dbResult} deleteEntry={deleteEntry}/>}
      {СurrentPage === 'form' && <EntryForm/>}
    </div>
  )
}

export default App
