import { BrowserRouter as Router, Route } from 'react-router-dom'

export interface RouteModle {
  path: string // 路由路径
  name: string // 页面名称
  exact: boolean // 是否精确匹配
  children?: RouteModle[] // 子路由
  component?: any // 组件
}

export default function router() {
  return (
    <Router>
      <Route></Route>
    </Router>
  )
}
