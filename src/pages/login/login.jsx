import './login.css'
import logo from '../../assets/logo.png'

function Login() {
    return <div className="login">
        <header className="login-header">
            <img src={logo} alt="logo"/>
            <h1>React项目: 后台管理系统</h1>
        </header>

        <section className="login-content">
            <h2>登录</h2>
        </section>
    </div>
        ;
}

export default Login;