const menuList = [
  {
    label: '首页', // 菜单标题名称
    key: '/home', // 对应的path
    icon: 'home', // 图标名称
    isPublic: true, // 公开的
  },
  {
    label: '商品',
    key: '/products',
    icon: 'appstore',
    children: [ // 子菜单列表
      {
        label: '品类管理',
        key: '/category',
        icon: 'bars'
      },
      {
        label: '商品管理',
        key: '/product',
        icon: 'tool'
      },
    ]
  },

  {
    label: '用户管理',
    key: '/user',
    icon: 'user'
  },
  {
    label: '角色管理',
    key: '/role',
    icon: 'safety',
  },

  {
    label: '图形图表',
    key: '/charts',
    icon: 'area-chart',
    children: [
      {
        label: '柱形图',
        key: '/charts/bar',
        icon: 'bar-chart'
      },
      {
        label: '折线图',
        key: '/charts/line',
        icon: 'line-chart'
      },
      {
        label: '饼图',
        key: '/charts/pie',
        icon: 'pie-chart'
      },
    ]
  },

  {
    label: '订单管理',
    key: '/order',
    icon: 'windows',
  },
]

export default menuList