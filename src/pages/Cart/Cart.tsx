import { useState, ChangeEvent, useEffect } from "react";

import NumberInput from "../../components/Input/NumberInput";
import SearchButton from "../../components/Button/SearchButton";
import axios from "axios";
import "./styles.css";
import ProductCard from "../../components/Card/Card";
import { Box } from "@chakra-ui/react";
import { CardItem } from "../../components/Card/Card";
import RenderCards from "../../components/Card/RenderCards";
import { CategoriesFilter } from "../../components/Checkbox/CheckboxFilter";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  const [amount, setAmount] = useState<string>("");
  const [card, setCard] = useState<CardItem>({} as CardItem);
  const [products, setProducts] = useState<CardItem[]>([]);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  console.log("selectedCategoies", selectedCategories);

  const filteredProducts = products.filter((item) =>
    selectedCategories.includes(item.category)
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const fetchData = async () => {
    // console.log("cliclou");
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${amount}`
      );

      console.log("response", response);
      setCard(response.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products`);

        console.log("response", response);

        setProducts(response.data);
      } catch (err) {
        console.log("err", err);
      }
    };

    fetchProducts();
  }, []);

  const getUniqueCategories = (products: CardItem[]) => {
    const allCategories: string[] = products.map((product) => product.category);

    const UniqueCategories = new Set(allCategories);

    return [...UniqueCategories];
  };

  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      {/* <div className='input-box'>
        <NumberInput value={amount} onChange={handleChange} />
        <SearchButton onClick={fetchData} />
      </div> */}
      <Navbar />

      <CategoriesFilter
        categories={getUniqueCategories(products)}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
      {card.id && <ProductCard item={card} />}

      <RenderCards
        products={filteredProducts.length > 0 ? filteredProducts : products}
      />
    </Box>
  );
}

export default Home;
