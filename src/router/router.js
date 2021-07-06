import { createRouter, createWebHistory } from "vue-router";

import store from '@/store';

// 路由信息
const routes = [
  {
      path: "/login",
      name: "login",
      component: () => import("../views/login/index.vue")
  },
  {
    path: "/",
    name: "home",
    component: () => import("../views/index/home.vue"),
  },
  {
    path: "/management",
    name: "management",
    redirect: "/management/link",
    component: () => import("../views/index/manage.vue"),
    children: [
      {
        path: "articles",
        name: "articleManagement",
        component: () => import("../views/backend/articleManagement.vue"),
      },
      {
        path: "categories",
        name: "categoryManagement",
        component: () => import("../views/backend/categoryManagement.vue"),
      },
      {
        path: "tags",
        name: "tagManagement",
        component: () => import("../views/backend/tagManagement.vue"),
      },
      {
        path: "links",
        name: "linkManagement",
        component: () => import("../views/backend/linkManagement.vue"),
      },
      {
        path:"link",
        name:"link",
        component:() => import("../views/backend/link.vue")
      }
    ],
  },
  {
    path: "/article",
    name: "article",
    component: () => import("../components/Vditor.vue"),
  },
  {
    path: "/detail/:id",
    name: "show-article",
    component: () => import("../views/blog/article.vue"),
  },
  {
    path: "/editor/:id",
    name: "editor",
    component: ()=>import("../views/blog/editor.vue")
  },
  {
    path: "/todo",
    name: "todo",
    component: () => import("../views/index/todo.vue"),
  },
  {
    path: "/blogs/categories/:id",
    name: "blogs",
    component: () => import("../views/index/blogs.vue"),
  },

  {
      path:"/list",
      name:"list",
      // redirect: "/list",
      component: ()=>import('../views/index/list.vue')
  },
  {
    path: "/blogs/tag/:id",
    name: "tags",
    component: () => import("../views/blog/tag.vue"),
  },
  {
    path: "/timeline",
    name: "timeline",
    component: () => import("../views/index/timeline.vue"),
    //props: true,
    //meta: {title: "首页"}
  },
  {
    path: "/navi",
    name: "navi",
    redirect: "/navi/menu1-1-1",
    component: () => import("../views/index/navi.vue"),
    children: [
      {
        path: "menu1-1-1",
        name: "computer network",
        component: () => import("../views/navi/menu1/menu1-1-1.vue"),
      },
      {
        path: "menu1-1-2",
        name: "os",
        component: () => import("../views/navi/menu1/menu1-1-2.vue"),
      },
      {
        path: "menu1-1-3",
        name: "data structure",
        component: () => import("../views/navi/menu1/menu1-1-3.vue"),
      },
      {
        path: "menu3-1-1",
        name: "backend",
        component: () => import("../views/navi/menu3/menu3-1-1.vue"),
      },
      {
        path: "menu3-1-2",
        name: "frontend",
        component: () => import("../views/navi/menu3/menu3-1-2.vue"),
      },
      {
        path: "menu3-2",
        name: "tools",
        component: () => import("../views/navi/menu3/menu3-2.vue"),
      },
      {
        path: "menu3-3",
        name: "tutorial",
        component: () => import("../views/navi/menu3/menu3-3.vue"),
      },
      {
        path: "menu3-4",
        name: "projects",
        component: () => import("../views/navi/menu3/menu3-4.vue"),
      },
      {
        path: "menu3-5",
        name: "life",
        component: () => import("../views/navi/menu3/menu3-5.vue"),
      },
      {
        path: "menu3-6",
        name: "episodes",
        component: () => import("../views/navi/menu3/menu3-6.vue"),
      },
    ],
  },
  //没有当前的路径的话，就404
  {
    path: "/:catchAll(.*)",
    component: () => import("../views/404.vue"),
  },
];

// 导出路由
const router = createRouter({
  scrollBehavior: () => ({ y: 0 }),
  history: createWebHistory(),
  routes,
});

// 跳转之前进行身份判断
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    // console.log(store.state.userModule.token);
    let token = store.state.userModule.token
    if (token === null || token === '') {
      next('/login');
    } else {
      next();
    }
  }

});


//让不同路由切换时都自动到返回到页面顶部 参考https://www.cnblogs.com/dfyg-xiaoxiao/p/10337557.html
router.afterEach((to, from) => {
  let bodySrcollTop = document.body.scrollTop;
  if (bodySrcollTop !== 0) {
    document.body.scrollTop = 0;
    return;
  }
  let docSrcollTop = document.documentElement.scrollTop;
  if (docSrcollTop !== 0) {
    document.documentElement.scrollTop = 0;
  }
});

export default router;
