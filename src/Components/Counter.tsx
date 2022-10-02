import React, {useState} from "react"
import Button from "./Button";
import Header from "./Header";


const Counter=()=>{
const [count,setCount]=useState(0);

const handleClick=(value:number)=>{
    setCount(count+value)
}

return(
    <div>
        <Header label={"Counter"}/>
        <Header />
        <Header label="label 1">
               <div>Child div 1</div>
               <div>Child div 1</div>
               <div>Child div 1</div>
        </Header>
        <Header label={`${count}`}/>
        <Button label="Add" handleClick={()=>handleClick(1)}/>
        <Button label="Reduce" handleClick={()=>handleClick(-1)} />
    </div>
)
}
export default Counter;