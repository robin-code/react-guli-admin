import React, {Component} from 'react';
import {Button, Col, Form, Input, Row, Select} from "antd";
import PropTypes from "prop-types";

class AddCategory extends Component {
    formRef = React.createRef();
    static propTypes = {
        categories: PropTypes.array.isRequired, // 一级分类的数组
        parentCode: PropTypes.string.isRequired, // 父分类的code
        addCategory: PropTypes.func.isRequired,
    }
    handleSubmit = (values) => {
        console.info("add category form values=", values)
        const {addCategory} = this.props;
        addCategory(values);
        this.formRef.current.resetFields(); // 重置表单
    };

    render() {
        const {categories, parentCode} = this.props
        console.info("categories,parentCode", categories, parentCode)
        return (<Form ref={this.formRef} onFinish={this.handleSubmit}>
            <Form.Item label="所属分类" name="parentCode">
                <Select
                    defaultValue="0"
                    options={[{
                        value: '0', label: '一级分类',
                    },
                        ...categories.map(e => ({value: e.code, label: e.name}))
                    ]}
                />
            </Form.Item>

            <Form.Item
                label="分类名称"
                name="categoryName"
                rules={[{
                    required: true, message: '分类名称必填',
                },]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                label="分类编码"
                name="categoryCode"
                rules={[{
                    required: true, message: '分类编码必填',
                },]}
            >
                <Input/>
            </Form.Item>

            <Form.Item>
                <Row>
                    <Col>
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
            </Form.Item>
        </Form>)
    }
}

export default AddCategory;