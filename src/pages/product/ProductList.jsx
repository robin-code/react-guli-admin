import {Component} from "react";
import {reqSearchProducts} from "../../api/index.js";
import {Card, message, Table} from "antd";

export class ProductList extends Component {

    constructor(props) {
        super(props);
        this.initColumns();
    }
    state = {
        page: 1,
        size: 5,
        loading: false,
        productList: [],
        totalElements: 0,
        searchName: '',
        searchType: ''
    }


    /*
    初始化table的列的数组
     */
    initColumns = () => {
        this.columns = [
            {
                title: '商品名称',
                dataIndex: 'name',
            },
            {
                title: '商品描述',
                dataIndex: 'desc',
            },
            {
                title: '价格',
                dataIndex: 'price',
                render: (price) => '¥' + price  // 当前指定了对应的属性, 传入的是对应的属性值
            },
            {
                width: 100,
                title: '状态',
            },

            {
                width: 100,
                title: '操作'
            },
        ];
    }

    componentDidMount() {
        this.getProductList();
    }

    getProductList = async () => {
        const {page, size, searchName, searchType} = this.state;
        this.setState({loading: true})
        console.info("query product page=%d,size=%d,searchName=%s", page - 1, size, searchName)
        const result = await reqSearchProducts({page: page - 1, size, searchName, searchType});
        this.setState({loading: false})
        if (result.code === 0) {
            const content = result.data.content;
            const totalElements = result.data.totalElements;
            this.setState({
                productList: content,
                totalElements: totalElements,

            })
        } else {
            message.error("request product fail");
        }

    }
    handleTableChange = (pagination) => {
        this.setState({
            page: pagination.current,
            size: pagination.pageSize,
        }, this.getProductList);
    };

    render() {
        const {loading, productList, size, totalElements} = this.state;
        return (
            <Card>
                <Table
                    loading={loading}
                    rowKey='id'
                    bordered dataSource={productList} columns={this.columns}
                    pagination={{
                        showSizeChanger: true,
                        defaultPageSize: size,
                        showQuickJumper: true,
                        total: totalElements
                    }}

                    onChange={this.handleTableChange} // 分页、排序或过滤时触发

                >
                </Table>
            </Card>
        )
    }
}