import axios from "axios";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

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

  return (
    <div>
      <ul>
        {products &&
          products.map((p) => {
            return <li>{p.info}</li>;
          })}
      </ul>
    </div>
  );
}
