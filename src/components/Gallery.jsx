import { Container, GalleryItem } from "./";

const Gallery = ({ items, loading }) => {
  return (
    <section className="gallery">
      <Container>
        <ul className="gallery__list">
          {items.map((item) => (
            <GalleryItem key={item.id} {...item} loading={loading} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Gallery;
