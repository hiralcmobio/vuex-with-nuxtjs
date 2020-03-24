import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2c91cf92 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _e96f4d0c = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _6b88abed = () => interopDefault(import('../pages/add-product.vue' /* webpackChunkName: "pages/add-product" */))
const _919c3404 = () => interopDefault(import('../pages/blogs/index.vue' /* webpackChunkName: "pages/blogs/index" */))
const _3fd61d57 = () => interopDefault(import('../pages/crud_index.vue' /* webpackChunkName: "pages/crud_index" */))
const _6e4a9812 = () => interopDefault(import('../pages/recipes/index.vue' /* webpackChunkName: "pages/recipes/index" */))
const _3dea34d2 = () => interopDefault(import('../pages/todos.vue' /* webpackChunkName: "pages/todos" */))
const _d9e1b396 = () => interopDefault(import('../pages/users/index.vue' /* webpackChunkName: "pages/users/index" */))
const _4bce7c76 = () => interopDefault(import('../pages/website.vue' /* webpackChunkName: "pages/website" */))
const _52e85c2e = () => interopDefault(import('../pages/blogs/_id/index.vue' /* webpackChunkName: "pages/blogs/_id/index" */))
const _0f1559fd = () => interopDefault(import('../pages/recipes/_id/index.vue' /* webpackChunkName: "pages/recipes/_id/index" */))
const _0355c75f = () => interopDefault(import('../pages/update-product/_id/index.vue' /* webpackChunkName: "pages/update-product/_id/index" */))
const _04d01ea0 = () => interopDefault(import('../pages/users/_id/index.vue' /* webpackChunkName: "pages/users/_id/index" */))
const _d0244ff4 = () => interopDefault(import('../pages/product/_id/delete.vue' /* webpackChunkName: "pages/product/_id/delete" */))
const _772deda5 = () => interopDefault(import('../pages/product/_id/edit.vue' /* webpackChunkName: "pages/product/_id/edit" */))
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
    path: "/add-product",
    component: _6b88abed,
    name: "add-product"
  }, {
    path: "/blogs",
    component: _919c3404,
    name: "blogs"
  }, {
    path: "/crud_index",
    component: _3fd61d57,
    name: "crud_index"
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
    path: "/update-product/:id?",
    component: _0355c75f,
    name: "update-product-id"
  }, {
    path: "/users/:id",
    component: _04d01ea0,
    name: "users-id"
  }, {
    path: "/product/:id?/delete",
    component: _d0244ff4,
    name: "product-id-delete"
  }, {
    path: "/product/:id?/edit",
    component: _772deda5,
    name: "product-id-edit"
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
