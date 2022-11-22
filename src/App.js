import './css/App.css';
import React, {useState} from 'react';
import MainTitle from './components/MainTitle';
import Buttons from './components/Buttons';
import Search from './components/Search';
import Table from './components/Table';
import data from './tools.json';

function App() {
  
  const [toolShopData, setToolShopData] = useState([...data]); 
  let editData = (e) => setToolShopData(e); 

  return (
    <div className="app">
     <MainTitle data={toolShopData} setData={editData} /> 
     <Search data={toolShopData} setData={editData}/>
     <Buttons data={toolShopData} setData={editData}/> 
     <Table data={toolShopData} />
    </div>
  );
}

export default App;
