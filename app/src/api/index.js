import requests from "./request";

export const reqCategoryList = () => {
  return requests({ url: "/api/product/getBaseCategoryList", method: "get" });
};
