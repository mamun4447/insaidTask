import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    fetch("Products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="container mx-auto">
      <h1 className="mb-5 mt-10 font-bold text-4xl font-serif text-center">
        Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((product) => (
          <SingleProduct product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default Products;
