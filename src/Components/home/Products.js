import axios from "axios";
import { useEffect, useState, useRef } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const dateRef = useRef();

  useEffect(() => {
    axios
      .get("http://localhost:8080/products/")
      .then((response) => {
        const data = response.data;
        const prods = data.map((d) => {
          return { key: d.id, info: d.name + " " + d.dateManufactured };
        });
        setProducts(prods);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredPrice = priceRef.current.value;
    const enteredDate = dateRef.current.value;
    console.log(enteredName, enteredPrice, enteredDate);

    axios.post("http://localhost:8080/products/post/",{
      name:enteredName,
      price: enteredPrice,
      dateManufactured: enteredDate
    }).then((res) => {
      console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    });
  }

  const submitHandler2 = (event) => {
    event.preventDefault();
    const enteredId = idRef.current.value;
    const enteredName = nameRef.current.value;

    axios.put(`http://localhost:8080/products/post/${enteredId}?name=${enteredName}`)
    .then((res) => {
      console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    });
  }

  const submitHandler3 = (event) => {
    event.preventDefault();
    const enteredId = idRef.current.value;

    axios.delete(`http://localhost:8080/products/post/${enteredId}`)
    .then((res) => {
      console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    });
  }

  return (
    <div>
      <ul>
        {products &&
          products.map((p) => {
            return <li key={p.key}>{p.key}: {p.info}</li>;
          })}
      </ul>
      <hr/>
      POST Request
      <form className="p-3 mt-3" onSubmit={submitHandler}>
            <label>Name:</label>
            <input ref={nameRef} type='text' required/><br/>
            <label>Price:</label>
            <input ref={priceRef} type='number' required/><br/>
            <label>Date Manufactured:</label>
            <input ref={dateRef} type='date' required/><br/>
            <button>Submit</button>
      </form>
      <hr/>
      <p>
      Put request:
      Enter ID and name to be updated for respective product.
      </p>
      <form onSubmit={submitHandler2}>
        <label>ID:</label>
        <input ref={idRef} type='number' required /><br/>
        <label>Name:</label>
        <input ref={nameRef} type='text' required/><br/>
        <button type="submit">Update</button>
      </form>
      <hr/>
      <p>
      Delete request:
      Enter ID of the product to be deleted.
      </p>
      <form onSubmit={submitHandler3}>
        <label>ID:</label>
        <input ref={idRef} type='number' required /><br/>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}
