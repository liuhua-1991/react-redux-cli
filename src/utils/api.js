// import "whatwg-fetch";
const base_api = "/mockjs/25507/";

export default {
  get(url) {
    return fetch(`${base_api}${url}`).then(response => {
      return response.json();
    });
  },
  post(url, data) {
    const options = { method: "PUT", body: JSON.stringify(data) };
    return fetch(`${base_api}${url}`, options).then(response => {
      return response.json();
    });
  },
  put(url, data) {
    // const options = getOptions;
    // options.method = "PUT";
    const options = { method: "PUT" };
    return fetch(`${base_api}${url}`, options).then(response => {
      return response.json();
    });
  },
  delete(url, data) {
    // const options = getOptions;
    // options.method = "DELETE";
    const options = { method: "DELETE" };
    return fetch(`${base_api}${url}`, options).then(response => {
      return response.json();
    });
  }
};
