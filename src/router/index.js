import Home from '../pages/home'
import UseCallback from '../pages/useCallback/index'
import useEffect from '../pages/useEffect/index'
import UseReducer from '../pages/useReducer/index'
import UseContext from '../pages/useContext/index'


const routes = [
  {
    path: "/",
    exact:true,
    component: Home
  },
  {
    path: "/UseCallback",
    component: UseCallback
  },
  {
    path: "/useEffect",
    component: useEffect
  },
  {
    path: "/UseReducer",
    component: UseReducer
  },
  {
    path: "/UseContext",
    component: UseContext
  },
]
export default routes;