import React from "react";
import Api from "../services/Api";
import { Skeleton } from "./";

const GalleryItem = ({ imageUrl, created, authorId, locationId, name }) => {
  const onErrImgSrc = ({ currentTarget }) => {
    currentTarget.onerror = null;
    currentTarget.src = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";
  };

  const { getLocationName, getAuthorName } = new Api();

  const [authorName, setAuthorName] = React.useState(null);
  const [locationName, setLocationName] = React.useState(null);

  React.useEffect(() => {
    getAuthorName(authorId).then(({ name }) => setAuthorName(name));
    getLocationName(locationId).then(({ location }) => setLocationName(location));
  }, []);

  return (
    <li className="gallery__item">
      <img src={imageUrl} className="gallery__img" alt="test" onError={onErrImgSrc} />

      <div className="gallery__info">
        <h3 className="gallery__name">{name}</h3>
        <div className="gallery__box">
          <div className="gallery__info-item">
            <h4 className="gallery__caption">Author: {authorName}</h4>
          </div>
          <div className="gallery__info-item">
            <h4 className="gallery__caption">Created: {created}</h4>
          </div>
          <div className="gallery__info-item">
            <h4 className="gallery__caption">Location: {locationName}</h4>
          </div>
        </div>
      </div>
    </li>
  );
};

GalleryItem.defaultProps = {
  imageUrl: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
};

export default GalleryItem;
