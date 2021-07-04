//post示例import axios from "axios";
import axios from "axios";
//import qs from 'qs'
const apiUrl = "/api/links";
export async function createLink(title, url, sort, img, process, desc) {
  const resData = await axios
    .post(apiUrl, {
      title: title,
      url: url,
      sort: sort,
      img: img,
      process: process,
      desc: desc,
    })
    .then(async (res) => {
      return res.data;
    });
  return resData;
}

export async function getSingleLink(id) {
  const resData = await axios.get(apiUrl + "/" + id).then(async (res) => {
    return res.data.data.link;
  });
  return resData;
}

export async function getAllLinks() {
  const resData = await axios.get(apiUrl).then(async (res) => {
    return res.data.data.links;
  });
  return resData;
}

export async function getAllLinksBySort(sort) {
  const resData = await axios
    .get(apiUrl + "/sort/" + sort)
    .then(async (res) => {
      return res.data.data.links;
    });
  return resData;
}

export async function updateLink(id, title, url, sort, img, process, desc) {
  const resData = await axios
    .put(apiUrl + "/" + id, {
      title: title,
      url: url,
      sort: sort,
      img: img,
      process: process,
      desc: desc,
    })
    .then(async (res) => {
      return res.data.data.link;
    });
  return resData;
}


export async function deleteLink(id) {
  const resData = await axios
    .delete(
      apiUrl + "/" + id
    )
    .then(async (res) => {
      return res.data.data.link;
    });
  return resData;
}