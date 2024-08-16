import {Component} from 'react';
import './list.css'
import PubSub from 'pubsub-js'

class index extends Component {
    state ={
        users:[],
        isFirst:true,
        isLoading:false,
        err:''
    }

    componentDidMount(){
        this.token = PubSub.subscribe('query-github-user',(_,stateObj)=>{
            this.setState(stateObj)
        })
    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }


    render() {
        // eslint-disable-next-line react/prop-types
        const {users, isFirst, isLoading, err} = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h1>请输入关键词进行查询</h1> :
                        isLoading ? <h1>加载中</h1> :
                            err ? <span>{err}</span> :
                                // eslint-disable-next-line react/prop-types
                                users.map(user => (
                                        <div className="card" key={user.id}>
                                            <a href={user.html_url} target="_blank">
                                                <img src={user.avatar_url} style={{width: '100px'}}/>
                                            </a>
                                            <p className="card-text">{user.login}</p>
                                        </div>
                                    )
                                )}
            </div>
        );
    }
}


export default index;
