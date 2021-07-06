// 本地缓存服务

const PREFIX = 'wiki_';

// user 模块
const USER_PRIFIX = `${PREFIX}user_`;
const USER_TOKEN = `${USER_PRIFIX}token`;
const USER_INFO = `${USER_PRIFIX}info`;

// 储存
const set = (key, data) => {
  // localStorage实现本地缓存 以后也可改成cookie等方法而不影响其他的地方
  localStorage.setItem(key, data);
};

// 读取
const get = (key) => localStorage.getItem(key);
// 导出常量和方法
export default {
  set,
  get,
  USER_TOKEN,
  USER_INFO,
};
