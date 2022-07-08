import './App.css';

import { Table } from './components/Table/Table';

const list = [
  { id: 1, name: "Alex", age: 27 },
  { id: 2, name: "Marcos", age: 35 },
  { id: 3, name: "Chaini", age: 24 },
]

const colNames = ["Id", "Name", "Age"];

function App() {
  return (
    <div className="App">
      <Table list={list} colNames={colNames}/>
    </div>
  );
}

export default App;
