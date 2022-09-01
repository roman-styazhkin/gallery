import React from "react";
import { Container, GalleryItem, Skeleton } from "./";

const Gallery = ({ items, loading }) => {
  return (
    <section className="gallery">
      <Container>
        <ul className="gallery__list">
          {loading
            ? Array(6)
                .fill()
                .map((_, i) => <Skeleton key={i} />)
            : items.map((item) => (
                <GalleryItem
                  key={item.id}
                  {...item}
                  imageUrl={"https://test-front.framework.team/" + item.imageUrl}
                />
              ))}
        </ul>
      </Container>
    </section>
  );
};

export default Gallery;
