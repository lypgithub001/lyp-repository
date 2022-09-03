function statusFilter(e) {
  switch (e) {
    case '月度':
    case '待审核':
    case '待领用':
    case '待上架':
    case '添加未注册':
    case '添加已注册':
      // #ffb28b
      return 'statusColor1'
    case '季度':
      // #ff8783
      return 'statusColor2'
    case '半年度':
      // #ff8d66
      return 'statusColor3'
    case '年度':
      // #ff6e6c
      return 'statusColor4'
    case '自定义':
    case '未注册':
    case '未激活':
    case '已下架':
    case '已取消':
    case '不通过':
    case '拒绝':
    case '取消领用':
    case '已失效':
      // #ff525d
      return 'statusColor5'
    case '已注册':
    case '已激活':
    case '已上架':
    case '通过':
    case '已领用':
    case '同意':
    case '彼此添加':
      // #16ce9c
      return 'statusColor6'
    default:
      return 'statusColor1'
  }
}

export default statusFilter
