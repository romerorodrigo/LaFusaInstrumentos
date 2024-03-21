import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Item } from '../Item/Item';

export const ItemListCarousel = ({ products }) => {
  // Divido los productos en grupos de 3
  const fragmentedItems = products.reduce((acc, curr, index) => {
    const fragmentedIndex = Math.floor(index / 3);

    if (!acc[fragmentedIndex]) {
      acc[fragmentedIndex] = [];
    }
    acc[fragmentedIndex].push(curr);
    return acc;
  }, []);

  return (
    <Carousel>
      {fragmentedItems.map((group, index) => (
        <Carousel.Item key={index}>
          <div className="row">
            {group.map((item, idx) => (
              <div className="col" key={idx}>
                <Item key={item.id} {...item}  />
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};