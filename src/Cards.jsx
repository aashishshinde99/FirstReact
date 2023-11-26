import { Simulate } from 'react-dom/test-utils';
import Card from './Card'
import data from './data'

// console.log(data);
var cardFun = (val,i)=>{
  return <Card name={val.name} img={val.img} desc={val.desc} link={val.link} />
}
console.log(cardFun);
function Cards() {
  return (
    <>
      <div className='cardsComponent'>
        {data.map(cardFun)}
      </div>
    </>
  );
}
  
export default Cards;
