import { createRouter,createWebHistory} from "vue-router";

// 路由信息
const routes = [
    {
        path: "/",
        name: "home",
        component: () => import('../views/index/home.vue')
    },
    {
        path: "/management",
        name: "management",
        component: () => import('../views/blog/manage.vue')
    },
    {
      path: "/article",
      name: "article",
      component: ()=>import('../components/Vditor.vue')
   },
    {
        path: "/detail/:id",
        name: "show-article",
        component: () => import('../views/blog/article.vue')
    },
    {
        path: "/todo",
        name: "todo",
        component:  () => import('../views/index/todo.vue'),
    },
    {
        path: "/blogs",
        name: "blogs",
        component:  () => import('../views/index/blogs.vue'),
        // children: [
        //   {
        //      path: "timeline",
        //      name: "timeline",
        //      component: () => import('../views/blog/timeline.vue'),
        //      props: true,
        //      meta: {title: "首页"}
        //   }
        // ]
    },
    {
        path: "/blogs/timeline",
        name: "timeline",
        component: () => import('../views/blog/timeline.vue'),
        //props: true,
        //meta: {title: "首页"}
    },
    {
        path: "/navi",
        name: "navi",
        component: () => import('../views/index/navi.vue'),
    //     children: [
    //       {
    //           path: "tools",
    //           name: "tools",
    //           component: () => import('../views/navi/tools.vue'),
    //       },
    //       {
    //         path: "cs",
    //         name: "cs",
    //         component: () => import('../views/navi/cs.vue'),
    //       },
    //       {
    //         path: "frontend",
    //         name: "frontend",
    //         component: () => import('../views/navi/frontend.vue'),
    //       },
    //       {
    //         path: "backend",
    //         name: "backend",
    //         component: () => import('../views/navi/backend.vue'),
    //       },
    //     ]
    },


    //navi的兄弟

    {
        path: "/navi/tools",
        name: "tools",
        component: () => import('../views/navi/tools.vue'),
    },
    {
      path: "/navi/cs",
      name: "cs",
      component: () => import('../views/navi/cs.vue'),
    },
    {
      path: "/navi/frontend",
      name: "frontend",
      component: () => import('../views/navi/frontend.vue'),
    },
    {
      path: "/navi/backend",
      name: "backend",
      component: () => import('../views/navi/backend.vue'),
    },




    //没有当前的路径的话，就404    
    {
        path: "/:catchAll(.*)",
        component: () => import('../views/NotFound.vue'),
    },
];

// 导出路由
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
