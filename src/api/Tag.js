//post示例import axios from "axios";
import axios from "axios";
//import qs from 'qs'
const apiUrl = "/api/tags";
export async function createTag(tagName) {
    console.log(tagName);
  const resData = await axios
    .post(
      apiUrl,
      {
        name:tagName,
      }
    )
    .then(async (res) => {
      return res.data.msg;
    });
  return resData;
}

export async function getTagName(tid){
  const resData = await axios
  .get(
    apiUrl+'/'+tid,
  )
  .then(async (res)=>{
      return res.data.data.tag
  });
  return resData;
}

export async function getTags(){
    const resData = await axios
    .get(
      apiUrl,
    )
    .then(async (res)=>{
        return res.data.data.tags
    });
    return resData;
}
export async function getATag(name){
  const resData = await axios
  .get(
    apiUrl+'/name/'+name,
  )
  .then(async (res)=>{
      return res.data.data.tag
  });
  return resData;
}
// export async function deleteTag(tagName)