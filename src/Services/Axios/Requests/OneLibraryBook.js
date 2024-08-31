import apiRequests from "../Configs/Config";

const LibraryOneData = (id) => {
  return apiRequests
    .get(`/library/${id}`)
    .then((res) => res.data);
};

export default LibraryOneData;
