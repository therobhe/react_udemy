import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_ITEMS = [
  { id: "p1", price: 6, title: "My first book", description: "first book i wrote" },
  { id: "p2", price: 12, title: "My second book", description: "second book i wrote" },
  { id: "p3", price: 2, title: "My third book", description: "third book i wrote" }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEMS.map((item) => (
          <ProductItem key={item.id} id={item.id} title={item.title} price={item.price} description={item.description} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
