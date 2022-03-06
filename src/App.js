import logo from './logo.svg';
import './App.css';

function App() {
 const arr1=["Android","Blackberry","iPhone","Windows Phone"]
 const obj=[
         {
          name:"Samsung",
          type1:"square"
         },
         {
           name:"HTC",
           type1:"square"
         },
         {
           name:"Micromax",
           type1:"disc"
         },
         {
           name:"Apple",
           type1:"circle"
         }
 ]
 
  return (
    <div>
      <div>
      <h3>Mobile Operating System</h3>
        <ul>
        {arr1.map((e)=>{
          return <li>{e}</li>
        })}
        </ul>
      </div>
        <h3>Mobile manufacturers</h3>
        <ul>
          {obj.map((data)=><li type={data.type1}>{data.name}</li>)}
        </ul>
    </div>
  );
  
}

export default App;
