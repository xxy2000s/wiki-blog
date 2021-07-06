import storageService from '@/service/storageService';
import userService from '@/service/userService';

const userModule = {
  namespaced: true, // 开启命名空间
  state: {
    token: storageService.get(storageService.USER_TOKEN),
    // userInfo: storageService.get(storageService.USER_INFO) ? JSON.parse(storageService.get(storageService.USER_INFO)) : null, //eslint-disable-line
  },

  mutations: {
    SET_TOKEN(state, token) {
      // 更新本地缓存
      storageService.set(storageService.USER_TOKEN, token);
      console.log("本地缓存中的token ", storageService.get(storageService.USER_TOKEN));

      // 更新state
      state.token = token;
      console.log("state中的token ", state.token);
    },
    // SET_USERINFO(state, userInfo) {
    //   // 更新本地缓存 JSON.stringify进行序列化
    //   storageService.set(storageService.USER_INFO, JSON.stringify(userInfo));
    //   // 更新state
    //   state.userInfo = userInfo;
    // },
  },

  actions: {
    // register(context, { name, telephone, password }) {
    //   return new Promise((resolve, reject) => {
    //     userService.register({ name, telephone, password }).then((res) => {
    //       // 保存token
    //       context.commit('SET_TOKEN', res.data.data.token);
    //       return userService.info();
    //     }).then((res) => {
    //       // 保存用户信息
    //       context.commit('SET_USERINFO', res.data.data.user);
    //       resolve(res);
    //     }).catch((err) => {
    //       reject(err);
    //     });
    //   });
    // },
    login(context, { name, password }) {
      return new Promise((resolve, reject) => {
        userService.login({ name, password }).then((res) => {
          // 保存token
          context.commit('SET_TOKEN', res.data.data.token);
          // return userService.info();
        }).then((res) => {
          // 保存用户信息
          // context.commit('SET_USERINFO', res.data.data.user);
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    // logout(context) {
    //   // 清除token
    //   context.commit('SET_TOKEN', '');
    //   storageService.set(storageService.USER_TOKEN, '');
    //   // 清除用户信息
    //   context.commit('SET_USERINFO', '');
    //   storageService.set(storageService.USER_INFO, '');
    //   window.location.reload();
    // },
  },
};

export default userModule;
