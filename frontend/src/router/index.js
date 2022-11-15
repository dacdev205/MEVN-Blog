import { createWebHistory, createRouter } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const routes = [
    {
    path: "/",
    name: "home",
    component: () => import("../views/home/Home.vue"),
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../views/about/About.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/Login.vue"),
    },
    {
        path: "/register",
        name: "register",
        component: () => import("../views/Register.vue"),
    },

    {
        path: "/blogs",
        name: "blogs",
        component: () => import("../views/Blogs.vue"),
    },

    {
        path: "/contact",
        name: "contact",
        component: () => import("../views/contact/Contact.vue"),

    },
    {
        path: "/blog-detail/:id",
        name: "blogdetail",
        component: () => import("../components/BlogDetail.vue"),
    },
    {
        path: "/addblog",
        name: "addblog",
        component: () => import("../views/addblog/AddBlog.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("../views/NotFound.vue"),
    },
    {
        path: "/edit-blog/:id",
        name: "editblog",
        component: () => import("../views/editblog/EditBlog.vue"),
    },
 
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from,savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else 
        if (to.hash) {
            const options = {
                top: document.querySelector(to.hash).offsetTop,
                behavior: 'smooth',
            };
            window.scrollTo(options);

        } else {
            return {x: 0, y: 0};
        }
    }
});

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener();
                resolve(user);
            },
            reject
        );
    });
}


router.beforeEach(async (to, from, next) => {
    if(to.matched.some((record) => record.meta.requiresAuth)) {
        if(await getCurrentUser()) {
            next();
        } else {
            alert("You dont have access!");
            next("/");
        }
    }else {
        next();
    }
});

export default router;