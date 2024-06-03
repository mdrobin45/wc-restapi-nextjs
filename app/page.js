"use client";

import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

export default function Products() {
   const [cars, setCars] = useState([]);

   // Fetch cars
   useEffect(() => {
      fetch("./api/products")
         .then((res) => res.json())
         .then((data) => setCars(data));
   }, []);
   return (
      <div className="grid px-4 md:px-6 lg:px-10 pb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
         {cars.map((car) => (
            <ProductCard key={car.price} />
         ))}
      </div>
   );
}
