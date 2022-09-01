import axios from "axios";

class Api {
  _baseUrl = "https://test-front.framework.team";

  onGetResponse = async (url, params) => {
    const res = await axios.get(url, { params: params });
    return { data: res.data, totalCount: res.headers["x-total-count"] };
  };

  getImages = async (params) => {
    const res = await this.onGetResponse(this._baseUrl + "/paintings", params);
    return res;
  };

  getAuthors = async () => {
    const res = await this.onGetResponse(this._baseUrl + "/authors");
    return res.data;
  };

  getLocations = async (params) => {
    const res = await this.onGetResponse(this._baseUrl + "/locations", params);
    return res.data;
  };

  getLocationName = async (id) => {
    const res = await this.onGetResponse(this._baseUrl + "/locations/" + id);
    return res.data;
  };

  getAuthorName = async (id) => {
    const res = await this.onGetResponse(this._baseUrl + "/authors/" + id);
    return res.data;
  };
}

export default Api;
