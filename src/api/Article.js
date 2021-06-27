import axios from "axios"
const apiUrl = "/api/posts/categories/"
export async function getArticleByCategory(category_id) {
  const resData = await axios
  .get(
    apiUrl+category_id
    //用qs.stringify是把传递参数格式化成x-www-form-urlencode 形式传递在url中。我这里后端直接传raw就行
    // qs.stringify({
    //     category_id:category_id,
    //     title:title,
    //     head_img:head_img,
    //     content:content,
    // })  
    )
  .then(async (res) => {
    return res.data.data.posts;
  })
  .catch((err)=>{
      console.log(err.data, " err")
  });
  return resData;
}

const apiId = '/api/metas/tag/'
export async function getArticleByTag(tag_id) {
  const resData = await axios
  .get(
    apiId+tag_id
    //用qs.stringify是把传递参数格式化成x-www-form-urlencode 形式传递在url中。我这里后端直接传raw就行
    // qs.stringify({
    //     category_id:category_id,
    //     title:title,
    //     head_img:head_img,
    //     content:content,
    // })  
    )
  .then(async (res) => {
    return res.data.data.metas;
  })
  .catch((err)=>{
      console.log(err.data, " err")
  });
  return resData;
}