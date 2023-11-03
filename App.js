import "./App.css"
import { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import Card from "./components/Card";
const App = () => {
  //   const namehandeler = () =>{setName("Mr Nabeel")}
  //   const [userName, setName]=useState("Mr Ahsan");
  // return (<p onClick={namehandeler}>
  //   My Name is {userName}
  // </p>)
  const [productData, setProductData] = useState([])

  const getData = () => {
    axios.get("https://fakestoreapi.com/products")
      .then(response => {
        setProductData(response.data)
      })
      .catch((error) => { console.log(error) })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <section className="section">
      {productData.map((e, i) => {
        const description = e.description.slice(0, 100);
        return <Card id={i} image={e.image} title={e.title} category={e.category} description={description} price={e.price} rating={e.rating.rate} lastButton={"Add To Cart"} />

      })}
    </section >)


}
export default App;










// =================================================================================================
// New Class Hook Of use effect
// useeffect ===> component miunt hota hy ya jb state my change hota hy tb y run hota hy
/* <></> => ak ndli div jisy fregment bolty hain
<react.fregment></r?Aeact.fregment> */

// useState or useEffect 

// 4 methods of Api
// 1- get (reading)
// 2- put (update)
// 3-delete (delete)
// 4- post (create)











// Modern Move
// async await 
// try caches