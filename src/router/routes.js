import Home from '@/view/Home'
import Login from '@/view/Login'
export default [
  {
    path:'/home',
    component:Home
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/',
    redirect:'/home'
  }
]