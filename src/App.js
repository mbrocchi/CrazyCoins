import React, {useState, useEffect} from 'react';
import './App.css';
import Card from './Card'
import logo from './bitcoin.png'
import refresh from './refresh.png'
import loader from './loader.gif'

function App() {

  const [items, setItems] = useState([]);
  const [reload, setReload] = useState(true);
  const [loaderView, loaderVisible] = useState(true)

  const getCoins = () => {
    setItems([]);
    loaderVisible(true);
    fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=20&currency=AUD').then (     
        (response) => {
          loaderVisible(false);
              response.json().then (
                (result) => {
                  setItems(result.coins);
                  console.log(result)
              })
            } 
      ).catch((error) => {
          console.log("There was an issue connecting to the server!");
        });
  }

  useEffect(() => {
    getCoins();
  }, [reload]);

  return (
    <div className="App">
      <div className="bitheader">
        <div><h1><img style={{width:'15%'}} alt='' src={logo}/> Crazy Coins</h1></div>
        <div id="reloadBtn" onClick={()=>{setReload(!reload)}} style={{marginLeft:'20px', paddingBottom:'17.5px'}}>
            <img style={{width:'40px'}} alt='' src={refresh}/></div>
      </div>

     { loaderView && <div style={{display:'flex', justifyContent: 'center', height:'100vh', alignItems: 'center'}}><img style={{width:'200px', height:'200px'}} alt='' src={loader}/></div> }
      <div className="bitcards">
          {      
            items.map( item => (        
              <Card key={item.id} item={item}/>         
            ))
          }
      </div>
    </div>
  );

}

export default App;
