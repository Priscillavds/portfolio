import styles from "./ShoppingList.module.css";
import React, { useState } from 'react';

interface ShoppingListItem {
    name: string,
    quantity: number;
  }
  
  const ShoppingList = () => {
    const [shoppingList, setShoppingList]= useState<ShoppingListItem[]>([{name:"aardappelen", quantity:5}]);
    const [name, setName]= useState<string>('');
    const [quantity, setQuantity]= useState<number>(0);
    const [succesMessage, setSuccesMessage]= useState("");
    const [errorsMessage, setErrorMessage]= useState("");
  
    const addShoppingItem = () => {
      if (quantity<1){
        setErrorMessage('Quantity should be above 0')
        setSuccesMessage('')
      }
      else {
  
      setShoppingList([...shoppingList, {name: name, quantity: quantity}]);
      setSuccesMessage('item added to shopping list')
      setErrorMessage('');
      }
    };
  
    const removeShoppingItem = (index: number) => {
      let shoppingListCopy = shoppingList.filter((item, i)=> i !== index);
      setShoppingList(shoppingListCopy);
      setSuccesMessage('item was removed from shopping list')
      setErrorMessage('');
    }
  
    return(
      <div>
        {errorsMessage && <div className={styles.error}>{errorsMessage}</div>}
        {succesMessage && <div className={styles.succes}>{succesMessage}</div>}
  
        <div className={styles.ShoppingAddForm}>
          <label>Name:</label>
          <input type="text" placeholder='Name' value={name} onChange={(event)=> setName(event.target.value)}/>
          <label>Quantity:</label>
          <input type="number" placeholder='Quantity' value={quantity} onChange={(event)=> setQuantity(parseInt(event.target.value))}/>
        </div>
        <button onClick={addShoppingItem}>Add</button>
  
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              shoppingList.map((item, index) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td><button onClick={() => {removeShoppingItem(index);}}>Remove</button></td>
                </tr>
              ))
            }
            
          </tbody>
        </table>
  
      </div>
    )
  }

const ShoppingListTabel = () => {
    return (
        <>
            <header className={styles.header}>ShoppingList</header>

                <div className={styles.container}>
                    <ShoppingList/>
                </div>
         </>
        )
  }
  export default ShoppingListTabel;