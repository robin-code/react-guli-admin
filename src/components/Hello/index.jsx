import React from "react";
import hello from "./index.module.css"

export default class index extends React.Component {
    render() {
        return (
            <h1 className={hello.title}>First Component!!!</h1>
        )
    }
}

