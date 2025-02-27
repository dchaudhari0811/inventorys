import {useState} from "react";

function AddItems(props){
    const [name,setName] = useState("");
    const [price,setPrice] = useState(0);
    const [type,setType] = useState("");
    const [brand,setBrand] = useState("");

    const AddItemButtonPressed = () =>{
        props.addItem({name:name,price:price,type:type,brand:brand})
        setName("");
        setPrice(0);
        setType("");
        setBrand("");

    }

    return (
        <div className = "container">
            <div className = "row">
            <h2>Add an Item</h2>
            </div>
            <div className = "col">
                <div className = "row">
                <label htmlFor="name-field">Name:</label>
                <input id = "name-field" type = "text"  className = "form-control" value = {name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className = "row">
                <label htmlFor="price-field">Price:</label>
                <input id = "price-field" type = "number" className = "form-control" value = {price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className = "row">
                <label htmlFor="type-field">type:</label>
                <input id = "type-field" type = "text"  className = "form-control" value = {type} onChange={(e) => setType(e.target.value)}/>
                </div>
                <div className = "row">
                <label htmlFor="brand-field">brand:</label>
                <input id = "brand-field" type = "text"  className = "form-control" value = {brand} onChange={(e) => setBrand(e.target.value)}/>
                </div>
            </div>
                <div className = "row mt-3">
                <div className = "col-4"/>
                <button type = "button" className = "col-4 btn btn-primary" onClick = {AddItemButtonPressed}>Add Item</button>
                </div>
           
        </div>
    )
}
export default AddItems;