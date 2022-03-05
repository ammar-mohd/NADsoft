import axios from "axios";

export function ArticleAPI(data) {
  const myPromise = new Promise((resolve, reject) => {
    try {
      axios
        .get(`https://en.wikipedia.org/w/rest.php/v1/search/page?q=${data == "" ? "frontend" : data}`)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (error) {
      reject(error);
    }
  });

  return myPromise;
}
