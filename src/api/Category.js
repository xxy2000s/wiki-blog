//post示例import axios from "axios";
import axios from "axios";
//import qs from 'qs'
const apiUrl = "/api/categories";
export async function createCategory(categoryName) {
  const resData = await axios
    .post(
      apiUrl,
      {
        name:categoryName,
      }
    )
    .then(async (res) => {
      return res.data.msg;
    });
  return resData;
}

export async function getCategories(){
    const resData = await axios
    .get(
      apiUrl,
    )
    .then(async (res)=>{
        return res.data.data.categories
    });
    return resData;
}

export async function getACategory(id){
  const resData = await axios
  .get(
    apiUrl+'/'+id,
  )
  .then(async (res)=>{
      return res.data.data.category
  });
  return resData;
}

export async function getACategoryByName(name){
  const resData = await axios
  .get(
    apiUrl+'/name/'+name,
  )
  .then(async (res)=>{
      return res.data.data.category
  });
  return resData;
}

export async function updateCategory(category_id){
  const resData = await axios
  .put(
    apiUrl+'/'+category_id,
  )
  .then(async (res)=>{
      return res.data.data.category
  });
  return resData;
}
// export async function deleteTag(tagName)