import { useParams, useLocation, useNavigate } from 'react-router-dom';

// 创建高阶组件，将路由信息通过 props 传递给类组件
const withRouter = (Component) => {
  function ComponentWithRouterProp(props) {
    let params = useParams();  // 获取URL中的参数
    let location = useLocation();  // 获取当前的路径信息
    let navigate = useNavigate();  // 导航函数

    // 把 router 的信息作为 props 传递给原始组件
    return <Component {...props} router={{ params, location, navigate }} />;
  }

  return ComponentWithRouterProp;
};

export default withRouter;