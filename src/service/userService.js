import request from '@/utils/request';

// 用户注册
// const register = ({ name, telephone, password }) => {
//   return request.post('auth/register', { name, telephone, password });
// };

// 用户登录
const login = ({ name, password }) => {
  const apiurl = "/api/auth/login"
  return request.post(apiurl, { name, password });
};
// 获取用户信息
const info = () => {
  return request.get('auth/info');
};

export default {
  // register,
  login,
  info,
};
