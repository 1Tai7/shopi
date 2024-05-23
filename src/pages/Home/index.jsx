/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/Card";

const Home = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <Layout className="bg-red-200">
      Hello from home
      <div className="grid gap-4 grid-cols-4 w-fill max-w-screen-lg">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
