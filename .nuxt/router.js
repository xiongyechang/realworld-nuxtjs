import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1ac4010a = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _77dad970 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _f88ec610 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _512c0f78 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _6595f034 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _3261b484 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _37f652c5 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

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
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _1ac4010a,
    children: [{
      path: "",
      component: _77dad970,
      name: "home"
    }, {
      path: "/login",
      component: _f88ec610,
      name: "login"
    }, {
      path: "/register",
      component: _f88ec610,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _512c0f78,
      name: "profile"
    }, {
      path: "/settings",
      component: _6595f034,
      name: "settings"
    }, {
      path: "/editor",
      component: _3261b484,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _37f652c5,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
