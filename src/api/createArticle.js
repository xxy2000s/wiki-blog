//post示例import axios from "axios";
import axios from "axios";
//import qs from 'qs'
const apiUrl = "/api/posts";
export async function createArticle(category_id,title,head_img,content) {
    console.log(apiUrl);
  const resData = await axios
    .post(
      apiUrl,
      //用qs.stringify是把传递参数格式化成x-www-form-urlencode 形式传递在url中。我这里后端直接传raw就行
      // qs.stringify({
      //     category_id:category_id,
      //     title:title,
      //     head_img:head_img,
      //     content:content,
      // })
      {
        category_id:category_id,
        title:title,
        head_img:head_img,
        content:content,
      }
    )
    .then(async (res) => {
      console.log(res.data.code);
      return res.data.msg;
    });
  return resData;
}