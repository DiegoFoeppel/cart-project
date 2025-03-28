import { Card, Image, Text, Center, Button, Box } from "@chakra-ui/react";
import { RatingGroup } from "@chakra-ui/react";

type Rating = {
  rate: number;
  count: number;
};

export type CardItem = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

type ProductCardProps = {
  item: CardItem;
};

const ProductCard = ({ item }: ProductCardProps) => {
  const itemRating = Math.round(item.rating.rate);
  return (
    <Card.Root maxW='sm' overflow='hidden' padding='4'>
      <Center>
        <Image src={item.image} width='250px' height='250px' />
      </Center>
      <Card.Body gap='2'>
        <Card.Title mt='2'>{item.title}</Card.Title>
        <Card.Description>{item.description}</Card.Description>
        {/* <Text textStyle='2xl' fontWeight='medium' letterSpacing='tight' mt='2'>
          ${item.price}
        </Text> */}
      </Card.Body>
      <Card.Footer gap='2' display='flex' justifyContent='space-between'>
        <Text textStyle='2xl' fontWeight='medium' letterSpacing='tight' mt='2'>
          ${item.price}
        </Text>

        <RatingGroup.Root count={itemRating} defaultValue={5} size='sm' mt='2'>
          <RatingGroup.HiddenInput />
          <RatingGroup.Control />
        </RatingGroup.Root>
      </Card.Footer>
      <Button variant='outline' mt='3' mb='2'>
        Add to Cart
      </Button>
    </Card.Root>
  );
};

export default ProductCard;
