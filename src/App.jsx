import React from "react";
import { useSelector } from "react-redux";
import { Header, Filter, Gallery } from "./components";
import Animation from "./components/Animation";
import Footer from "./components/Footer";
import Api from "./services/Api";
import Utils from "./services/Utils";

const App = () => {
  const IMAGES_PER_PAGE = 8;
  const { getImages } = new Api();
  const { debounce } = new Utils();
  const { authorId, locationId, q, created_lte, created_gte } = useSelector(
    ({ filters }) => filters,
  );
  const [totalImages, setTotalImages] = React.useState(0);
  const activePage = useSelector(({ pagination }) => pagination.activePage);
  const [images, setImages] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [showGif, setShowGif] = React.useState(true);
  const dependencies = [authorId, locationId, q, created_lte, created_gte, activePage];

  const onGetImages = (response) => {
    setLoading(true);
    setImages(response.data);
    setTotalImages(response.totalCount);
    debounce(setLoading)(false);
    return response;
  };

  React.useEffect(() => {
    getImages({
      _page: activePage + 1,
      _limit: IMAGES_PER_PAGE,
      authorId,
      locationId,
      q,
      created_lte,
      created_gte,
    }).then(onGetImages);
  }, dependencies);

  React.useEffect(() => {
    setTimeout(() => setShowGif(false), 2500);
  }, []);

  const animation = showGif ? <Animation /> : null;

  return (
    <div className="App">
      {animation || (
        <>
          <Header />
          <Filter />
          <Gallery items={images} loading={loading} />
          <Footer totalImages={totalImages} activePage={activePage} perPage={IMAGES_PER_PAGE} />
        </>
      )}
    </div>
  );
};

export default App;
