import { createWebHistory, createRouter } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const routes = [
    {
    path: "/",
    name: "home",
    component: () => import("../views/home/Home.vue"),
    meta: {
        title: "Home",
    }
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../views/About.vue"),
        meta: {
            title: "About",
        }
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/Login.vue"),
        meta: {
            title: "Login",
        }
    },
    {
        path: "/register",
        name: "register",
        component: () => import("../views/Register.vue"),
        meta: {
            title: "Register",
        }
    },

    {
        path: "/blogs",
        name: "blogs",
        component: () => import("../views/Blogs.vue"),
        meta: {
            title: "Blogs",
        }
    },

    {
        path: "/contact",
        name: "contact",
        component: () => import("../views/Contact.vue"),
        meta: {
            title: "Contact",
        }

    },
    {
        path: "/blog-detail/:id",
        name: "blogdetail",
        component: () => import("../components/BlogDetail.vue"),
        meta: {
            title: "Blog detail",
        }
    },
    {
        path: "/addblog",
        name: "addblog",
        component: () => import("../views/AddBlog.vue"),
        meta: {
            title: "Add Blog",
        }
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("../views/NotFound.vue"),
        meta: {
            title: "Not Found",
        }
    },
    {
        path: "/edit-blog/:id",
        name: "editblog",
        component: () => import("../views/EditBlog.vue"),
        meta: {
            title: "Edit Blog",
        }
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

router.beforeEach(async (to, from, next) => {
    document.title = `${to.meta.title}`;
    next();
});

export default router;