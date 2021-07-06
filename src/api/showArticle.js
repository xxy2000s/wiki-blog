import request from '@/utils/request'
const apiUrl = "/api/posts/"
export async function showArticle(articleId) {
    console.log(apiUrl+articleId);
  const resData = await request
  .get(
    apiUrl+articleId
    //用qs.stringify是把传递参数格式化成x-www-form-urlencode 形式传递在url中。我这里后端直接传raw就行
    // qs.stringify({
    //     category_id:category_id,
    //     title:title,
    //     head_img:head_img,
    //     content:content,
    // })  
    )
  .then(async (res) => {
    return res.data.data.post;
  })
  .catch((err)=>{
      console.log(err.data, " err")
  });
  return resData;
}