import React, {Component} from 'react';
import axios from "axios";

class Search extends Component {
    queryKey = React.createRef();

    queryData = () => {

        const queryKey = this.queryKey.current.value;
        if (queryKey === '') {
            alert("请输入查询的关键词")
        }

        axios.get(`https://api.github.com/search/users?q=${queryKey}`).then(
            response => {
                //请求成功后通知App更新状态
                console.info("get data success",response.data.items)
                // eslint-disable-next-line react/prop-types
                this.props.updateAppState({users:response.data.items})
            },
            error => {
                //请求失败后通知App更新状态
                console.info("get data error",error.message)
            }
        )

        console.info("query key %s", queryKey);

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
