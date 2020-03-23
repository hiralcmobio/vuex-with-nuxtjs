import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2c91cf92 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _e96f4d0c = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _919c3404 = () => interopDefault(import('../pages/blogs/index.vue' /* webpackChunkName: "pages/blogs/index" */))
const _6e4a9812 = () => interopDefault(import('../pages/recipes/index.vue' /* webpackChunkName: "pages/recipes/index" */))
const _3dea34d2 = () => interopDefault(import('../pages/todos.vue' /* webpackChunkName: "pages/todos" */))
const _d9e1b396 = () => interopDefault(import('../pages/users/index.vue' /* webpackChunkName: "pages/users/index" */))
const _4bce7c76 = () => interopDefault(import('../pages/website.vue' /* webpackChunkName: "pages/website" */))
const _52e85c2e = () => interopDefault(import('../pages/blogs/_id/index.vue' /* webpackChunkName: "pages/blogs/_id/index" */))
const _0f1559fd = () => interopDefault(import('../pages/recipes/_id/index.vue' /* webpackChunkName: "pages/recipes/_id/index" */))
const _04d01ea0 = () => interopDefault(import('../pages/users/_id/index.vue' /* webpackChunkName: "pages/users/_id/index" */))
const _096ef2fc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _2c91cf92,
    children: [{
      path: "",
      component: _e96f4d0c,
      name: "about"
    }]
  }, {
    path: "/blogs",
    component: _919c3404,
    name: "blogs"
  }, {
    path: "/recipes",
    component: _6e4a9812,
    name: "recipes"
  }, {
    path: "/todos",
    component: _3dea34d2,
    name: "todos"
  }, {
    path: "/users",
    component: _d9e1b396,
    name: "users"
  }, {
    path: "/website",
    component: _4bce7c76,
    name: "website"
  }, {
    path: "/blogs/:id",
    component: _52e85c2e,
    name: "blogs-id"
  }, {
    path: "/recipes/:id",
    component: _0f1559fd,
    name: "recipes-id"
  }, {
    path: "/users/:id",
    component: _04d01ea0,
    name: "users-id"
  }, {
    path: "/",
    component: _096ef2fc,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
