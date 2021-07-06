//post示例import request from "request";
import request from '@/utils/request'
//import qs from 'qs'
const apiUrl = "/api/posts";
export async function createArticle(category_id,title,head_img,content) {
    console.log(apiUrl);
  const resData = await request
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
      return res.data.data.post;
    });
  return resData;
}