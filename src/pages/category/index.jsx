import {Component} from 'react';
import {Card, message, Table} from "antd";
import {reqCategory} from "../../api/index.js";


const columns = [
    {
        id: '编码',
        dataIndex: 'code',
        key: 'code',
    },
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '创建时间',
        dataIndex: 'createdAt',
        key: 'createdAt',
    },
    {
        title: '更新时间',
        dataIndex: 'updatedAt',
        key: 'updatedAt',
    },
];


class Category extends Component {

    state = {
        loading: false, // 是否正在获取数据中
        categories: [], // 一级分类列表
        subCategories: [], // 二级分类列表
        parentCode: '0', // 当前需要显示的分类列表的父分类ID
        parentName: '', // 当前需要显示的分类列表的父分类名称
        showStatus: 0, // 标识添加/更新的确认框是否显示, 0: 都不显示, 1: 显示添加, 2: 显示更新
    }

    /*执行异步任务: 发异步ajax请求*/
    componentDidMount() {
        // 获取一级分类列表显示
        this.getCategory()
    }

    /*
   异步获取一级/二级分类列表显示
   parentId: 如果没有指定根据状态中的parentId请求, 如果指定了根据指定的请求
    */
    getCategory = async (parentCode) => {
        // 在发请求前, 显示loading
        this.setState({loading: true})
        parentCode = parentCode || this.state.parentCode
        // 发异步ajax请求, 获取数据
        const result = await reqCategory(parentCode)
        // 在请求完成后, 隐藏loading
        this.setState({loading: false})
        if (result.code === 0) {
            const categories = result.data
            console.info("category ={}",categories)
            if(parentCode==='0') {
                // 更新一级分类状态
                this.setState({
                    categories
                })
                console.log('----', this.state.categories.length)
            } else {
                // 更新二级分类状态
                this.setState({
                    subCategories: categories
                })
            }
        } else {
            message.error('获取分类列表失败')
        }
    }

    render() {
        const {categories, subCategories, parentCode, parentName, loading, showStatus} = this.state
        return (
            <Card
                title=""
                bordered={false}
                style={{
                    width: '100%',
                }}>
                <Table dataSource={categories} columns={columns}/>
            </Card>
        );
    }


}

export default Category;