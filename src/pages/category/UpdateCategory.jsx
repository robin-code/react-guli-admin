import React, {Component} from "react";
import {Button, Col, Form, Input, Row} from "antd";
import PropTypes from "prop-types";
import {reqUpdateCategory} from "../../api/index.js";

export class UpdateCategory extends Component {
    formRef = React.createRef();

    static propTypes = {
        category: PropTypes.object.isRequired,
        updateCategory: PropTypes.func.isRequired,
    }

    handleSubmit = async (values) => {
        console.info('form value ', values)
        const {id, name, code, parentCode} = values;
        const result = await reqUpdateCategory(id, name, code, parentCode)
        console.info("update category ,id=%d, name=%s, code=%s, parentCode=%s,result=%s", id, name, code, parentCode, JSON.stringify(result))
        this.props.updateCategory()
    }

    render() {

        const {id, name, code, parentCode} = this.props.category

        return (
            <Form ref={this.formRef} onFinish={this.handleSubmit}>
                <Form.Item
                    label='分类 id'
                    name='id' initialValue={id}
                >
                    <Input disabled></Input>
                </Form.Item>

                <Form.Item
                    label='分类编码'
                    name='code' initialValue={code}
                    rules={[{
                        required: true, message: '编码必填',
                    },]}
                >
                    <Input></Input>
                </Form.Item>


                <Form.Item
                    label='分类名称'
                    name='name' initialValue={name}
                    rules={[{
                        required: true, message: '分类名称必填',
                    },]}
                >
                    <Input></Input>
                </Form.Item>

                <Form.Item label='父类编码' name='parentCode' initialValue={parentCode}
                           rules={[{
                               required: true, message: '父类编码必填',
                           },]}
                >
                    <Input></Input>
                </Form.Item>

                <Form.Item>
                    <Row>
                        <Col style={{'margin-right': 40}}>
                            <Button type="primary" htmlType="submit">
                                确认
                            </Button>
                        </Col>
                        <Col>
                            <Button>
                                取消
                            </Button>
                        </Col>
                    </Row>
                </Form.Item> </Form>
        )
    }
}