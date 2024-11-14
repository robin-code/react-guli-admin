import {Component} from 'react';
import {Button, Card, message, Space, Table} from "antd";
import {reqCategory} from "../../api/index.js";
import LinkButton from "../../components/link-button/index.jsx";


const columns = [
    {
        title: '编码',
        dataIndex: 'code',
        key: 'code',
    },
    {
        title: '分类名称',
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
    ,
    {
        title: '操作',
        key: 'action',
        width: 300,
        render: (category) => (
            <Space size="middle">
                <Button onClick={() => this.showSubCategory(category)}>查询子分类</Button>
                {this.state.parentCode === '0' ?
                    <Button onClick={() => this.showSubCategorys(category)}>查看子分类</Button> : null}
                <a>编辑分类</a>
            </Space>
        ),

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

    /*
  初始化Table所有列的数组
   */
    initColumns = () => {
        this.columns = [
            {
                title: '编码',
                dataIndex: 'code',
                key: 'code',
            },
            {
                title: '分类名称',
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
            {
                title: '操作',
                key: 'action',
                width: 300,
                render: (category) => (
                    <Space size="middle">
                        {this.state.parentCode === '0' ?
                            <Button onClick={() => this.showSubCategorys(category)}>查看子分类</Button> : null}
                        <a>编辑分类</a>
                    </Space>
                ),

            },
        ]
    }

    /*
    为第一次render()准备数据
     */
    componentWillMount() {
        this.initColumns()
    }

    /*执行异步任务: 发异步ajax请求*/
    componentDidMount() {
        // 获取一级分类列表显示
        this.getCategory()
    }


    /*
显示指定一级分类列表
 */
    showCategorys = () => {
        // 更新为显示一列表的状态
        this.setState({
            parentCode: '0',
            parentName: '',
            subCategories: []
        })
    }

    /*
  显示指定一级分类对象的二子列表
   */
    showSubCategorys = (category) => {
        // 更新状态
        console.info("show showSubCategorys,parentCode={}",category.parentCode)
        this.setState({
            parentCode: category.code,
            parentName: category.name
        }, () => { // 在状态更新且重新render()后执行
            console.log('parentCode=', this.state.code) // '0'
            // 获取二级分类列表显示
            this.getCategory()
        })

        // setState()不能立即获取最新的状态: 因为setState()是异步更新状态的
        // console.log('parentId', this.state.parentId) // '0'
    }


    /*
   异步获取一级/二级分类列表显示
   parentId: 如果没有指定根据状态中的parentId请求, 如果指定了根据指定的请求
    */
    getCategory = async (parentCode) => {
        console.info("request category list parentCode={}",parentCode)
        // 在发请求前, 显示loading
        this.setState({loading: true})
        parentCode = parentCode || this.state.parentCode
        // 发异步ajax请求, 获取数据
        const result = await reqCategory(parentCode)
        // 在请求完成后, 隐藏loading
        this.setState({loading: false})
        if (result.code === 0) {
            const categories = result.data
            console.info("category ={}", categories)
            if (parentCode === '0') {
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
        const category = this.category || {} // 如果还没有指定一个空对象
        // card的左侧
        const title = parentCode === '0' ? '一级分类列表' : (
            <span>
        <LinkButton onClick={this.showCategorys}>一级分类列表</LinkButton>
        <span>{parentName}</span>
      </span>
        )
        const extra = <Button type='primary'>
            添加
        </Button>;
        return (
            <Card
                title={title}
                extra={extra}
            >
                <Table
                    loading={loading}
                    rowKey='id'
                    bordered dataSource={parentCode === '0' ? categories : subCategories} columns={this.columns}
                    pagination={{defaultPageSize: 5, showQuickJumper: true}}
                />
            </Card>
        );
    }


}

export default Category;