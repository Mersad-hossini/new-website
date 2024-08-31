import apiRequests from "../Configs/Config";

const library = () => {
  return apiRequests
    .get("/library")
    .then((res) => res.data.library);
};

export default library;