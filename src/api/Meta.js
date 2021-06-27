//post示例import axios from "axios";
import axios from "axios";
//import qs from 'qs'
const apiUrl = "/api/metas";
export async function createMeta(aid, tid) {
  const resData = await axios
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
    const resData = await axios
    .get(
      apiUrl+'/'+aid,
    )
    .then(async (res)=>{
        return res.data.data.tags
    });
    return resData;
}
// export async function deleteTag(tagName)