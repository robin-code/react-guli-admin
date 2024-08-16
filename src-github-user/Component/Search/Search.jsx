import React, {Component} from 'react';
import axios from "axios";
import PubSub from 'pubsub-js'

class Search extends Component {


    queryKey = React.createRef();

    queryData = () => {
        const queryKey = this.queryKey.current.value;
        if (queryKey === '') {
            alert("请输入查询的关键词")
        }
        PubSub.publish("query-github-user", {isFirst: false})
        axios.get(`https://api.github.com/search/users?q=${queryKey}`).then(
            response => {
                PubSub.publish("query-github-user",{users: response.data.items, isLoading: false})
                this.queryKey.current.value = ''
            },
            error => {
                //请求失败后通知App更新状态
                PubSub.publish("query-github-user",{err: error, isLoading: false})
            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" ref={this.queryKey} placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.queryData}>Search</button>
                </div>
            </section>
        );
    }

}

export default Search;
