import "./App.css";
import SearchBar from "./SearchBar"
import AddItem from "./AddItems"
import ItemsDisplay from "./ItemsDisplay"
import {useState, useEffect} from "react";



function App() {
  const [filters,setFilters] = useState({});
  const[data,setData] = useState({items:[]})
  const updateFilters = (searchParams) => {
   setFilters(searchParams);

  };

  useEffect(() =>
  {
    fetch("http://localhost:3000/items").then((response) => response.json()).then((data) => setData({items: data}));
    
  },[]);

  const deleteItem = (item) => {
    const items = data["items"];
    const requestOptions ={
      method: "Delete"
    }
    fetch(`http://localhost:3000/items/${item.id}`,requestOptions).then((response) => {
    if(response.ok){
      const idx = items.indexOf(item);
      items.splice(idx,1);
      setData({items:items});
    }
    });
  }

  const addItemToData = (item) => {
    let items = data["items"];

    const requestOptions = {
      method: "POST",
      headers:
      {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item)
    };
    fetch("http://localhost:3000/items", requestOptions).then((response) => response.json())
    .then((data) => {
      items.push(data)
      setData({items:items});
    });
    /*
    get
    post
    put
    delete
    */
  }; 


  const filterData = (data) => {
    const filteredData = []; 

    for(const item of data){
    if(!filters.name){
      return data;
    }
      if(filters.name !== "" && item.name !== filters.name)
        {
          continue;
        }
      if(filters.price !== 0 && item.price > filters.price)
      {
        continue;
      }  
      if(filters.type !== "" && item.type !== filters.type)
      {
        continue;
      }  
      if(filters.brand !== "" && item.brand !== filters.brand)
      {
        continue;
      }  
      filteredData.push(item);
    }
    return filteredData;
  };

  return (
    <div className="container">
      <div className = "row mt-3">
      <ItemsDisplay deleteItem = {deleteItem} items = {filterData(data["items"])}/>
      </div>
      <div className = "row mt-3">
      <SearchBar updateSearchParams = {updateFilters}/>
      </div>
      <div className = "row mt-3">
      <AddItem addItem = {addItemToData}/>
      </div>
    </div>
  );
  }

 
export default App;
