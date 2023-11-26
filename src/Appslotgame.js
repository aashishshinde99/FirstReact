import Cards from './Cards';

const slot = () =>{
    var x='🍎';
    var y='🍎';
    var z='🍎';
    if(x===y && x===z){
    return <p>This Is Match</p>
    console.log('This Is Match');
    }else{
    return <p>This Is Not Match</p>
    console.log('This Is Not Match');
    }
}


function Appslotgame() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Slot Machine Game</h2>
      </header>
      {slot()}
    </div>
  );
}

export default Appslotgame;
