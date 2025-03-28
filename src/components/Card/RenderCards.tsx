import ProductCard, { CardItem } from "./Card";
import { Grid, GridItem } from "@chakra-ui/react";

type ProductCardProps = {
  products: CardItem[];
};

// const maxStars: number[] = [1, 2, 3, 4, 5];
// renderizar as estrelinhas

const RenderCards = ({ products }: ProductCardProps) => {
  //   const itemRating = Math.round(item.rating.rate);
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap='6'>
      {products.map((product: CardItem) => (
        <ProductCard key={product.id} item={product} />
      ))}
    </Grid>
  );
};

export default RenderCards;
