import { useState } from "react";

export const Inventory = () => {
  const [inventory, setInventory] = useState({
    books: 5,
    notebooks: 21,
    pens: 70,
    inkpens: 10,
  });
   

    const Add = () => {
        setInventory({ ...inventory, books : inventory.books + 1 });  
 
       
       
      };
      const Add2 = () => {
        setInventory({ ...inventory, notebooks: inventory.notebooks + 1 });
      };
      const Add3 = () => {
        setInventory({ ...inventory, pens: inventory.pens + 1 });
      };
      const Add4 = () => {
        setInventory({ ...inventory, inkpens : inventory.inkpens + 1 });
      };
      const Sub = () => {
        if(inventory.books===0){
            return  
           }
             
        setInventory({ ...inventory, books: inventory.books - 1 });
        // console.log(inventory.books)
      };
      const Sub2 = () => {
        if(inventory.notebooks === 0){
         return  
        }
            setInventory({ ...inventory, notebooks: inventory.notebooks - 1 });
            
        
      };
      const Sub3 = () => {
        if(inventory.pens===0){
            return  
           }
             
        setInventory({ ...inventory, pens: inventory.pens - 1 });
      };
      const Sub4 = () => {
        if(inventory.inkpens===0){
            return  
           }
             
        setInventory({ ...inventory, inkpens : inventory.inkpens - 1 });
      };

      let sum = inventory.books + inventory.inkpens + inventory.notebooks + inventory.pens;
    


  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >

      <div className="items">
        <span>Books: </span>
        <button className="btn" onClick={Sub}>-</button>
        <button className="btn" onClick={Add}>+</button>
        <span>{inventory.books}</span>
      </div>

      <div className="items">
        <span>Notebooks: </span>
        <button className="btn" onClick={Sub2} >-</button>
        <button className="btn" onClick={Add2}>+</button>
        <span>{inventory.notebooks}</span>
      </div>

      <div className="items">
        <span>Pen: </span>
        <button className="btn" onClick={Sub3}>-</button>
        <button className="btn" onClick={Add3}>+</button>
        <span>{inventory.pens}</span>
      </div>

      <div className="items">
        <span>Ink Pens: </span>
        <button className="btn" onClick={Sub4}>-</button>
        <button className="btn" onClick={Add4}>+</button>
        <span>{inventory.inkpens}</span>
      </div>
      
            {/*calculate total and show it*/}
      total: {sum} 
    </div>
  );
};