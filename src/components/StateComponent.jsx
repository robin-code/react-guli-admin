import {Component} from 'react';

/**
 * h1 标题，显示今天天气炎热或者凉爽
 * 点击标题进行切换
 */

class StateComponent extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {isHot: true}
    //     this.clickHandle = this.clickHandle.bind(this);
    // }
    state = {isHot: true}

    render() {
        const {isHot} = this.state
        return (
            <h1 onClick={this.clickHandle}>今天天气 {isHot ? "炎热" : "凉爽"}</h1>
        );
    }



    clickHandle = () => {
        const isHot = !this.state.isHot
        this.setState({isHot})
    }

    // clickHandle() {
    //     const isHot = !this.state.isHot
    //     this.setState({isHot})
    // }
}

export default StateComponent;