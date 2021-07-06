//post示例import request from "request";
import request from "@/utils/request.js";
//import qs from 'qs'
const apiUrl = "/api/tags";
export async function createTag(tagName) {
  const resData = await request
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
  const resData = await request
  .get(
    apiUrl+'/'+tid,
  )
  .then(async (res)=>{
      return res.data.data.tag
  });
  return resData;
}

export async function getTags(){
    const resData = await request
    .get(
      apiUrl,
    )
    .then(async (res)=>{
        return res.data.data.tags
    });
    return resData;
}
export async function getATag(name){
  const resData = await request
  .get(
    apiUrl+'/name/'+name,
  )
  .then(async (res)=>{
      return res.data.data.tag
  });
  return resData;
}
// export async function deleteTag(tagName)