//post示例import request from "request";
import request from '@/utils/request'
//import qs from 'qs'
const apiUrl = "/api/metas";
export async function createMeta(aid, tid) {
  const resData = await request
    .post(
      apiUrl,
      {
        aid:aid,
        tid:tid
      }
    )
    .then(async (res) => {
      return res.data.msg;
    });
  return resData;
}

export async function getMetas(aid){
    const resData = await request
    .get(
      apiUrl+'/'+aid,
    )
    .then(async (res)=>{
        return res.data.data.tagNames
    });
    return resData;
}
// export async function deleteTag(tagName)