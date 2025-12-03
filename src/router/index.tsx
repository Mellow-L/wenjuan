import React from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import ManageLayout from "../layouts/ManageLayout";
import SurveyLayout from "../layouts/SurveyLayout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";

import List from "../pages/manage/List";
import Edit from "../pages/survey/Edit";
import Stat from "../pages/survey/Stat";
import Trash from "../pages/manage/Trash";
import Star from "../pages/manage/Star";

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/manage',
        element:<ManageLayout/>,
        children:[
          {
            path:'list',
            element:<List/>
          },
          {
            path:'star',
            element:<Star/>
          },
          {
            path:'trash',
            element:<Trash/>
          }
        ]
      },
      {
        path:'*',
        element:<NotFound/>
      }
    ]
  },
  {
    path:'/survey',
    element:<SurveyLayout/>,
    children:[
      {
        path:'edit/:id',
        element:<Edit/>
      },
      {
        path:'stat/:id',
        element:<Stat/>
      }
    ]
  },
])

export default router

export const HOME_PATHNAME = '/'
export const LOGIN_PATHNAME = '/login'
export const REGISTER_PATHNAME = '/register'
export const MANAGE_LIST_PATHNAME = '/manage/list'
export const MANAGE_STAR_PATHNAME = '/manage/star'
export const MANAGE_TRASH_PATHNAME = '/manage/trash'
export const EDIT_PATHNAME = '/survey/edit'
export const STAT_PATHNAME = '/survey/stat'

export function isLoginOrRegister(pathname: string){  
  if([LOGIN_PATHNAME,REGISTER_PATHNAME].includes(pathname)) return true
  return false
}

export function isRequireUserInfo(pathname: string){
  if([HOME_PATHNAME,LOGIN_PATHNAME,REGISTER_PATHNAME].includes(pathname)) return false
  return true
}