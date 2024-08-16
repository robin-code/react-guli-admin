import React, {Component} from 'react';
import axios from "axios";

class Search extends Component {
    queryKey = React.createRef();

    queryData = () => {
        const queryKey = this.queryKey.current.value;
        if (queryKey === '') {
            alert("请输入查询的关键词")
        }
        // eslint-disable-next-line react/prop-types
        this.props.updateAppState({isFirst:false})
        axios.get(`https://api.github.com/search/users?q=${queryKey}`).then(
            response => {
                //请求成功后通知App更新状态
                // eslint-disable-next-line react/prop-types
                this.props.updateAppState({users:response.data.items,isLoading:false})
            },
            error => {
                //请求失败后通知App更新状态
                // eslint-disable-next-line react/prop-types
                this.props.updateAppState({err:error,isLoading:false})
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
