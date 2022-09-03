const dic = [
  {
    type: 'PaymentStatusEnum',
    items: [
      {
        code: '0',
        label: '已消费'
      },
      {
        code: '1',
        label: '未消费'
      }
    ]
  },
  {
    type: 'SupplierGivingDeductionEnum',
    items: [
      {
        code: '0',
        label: '赠送'
      },
      {
        code: '1',
        label: '扣减'
      }
    ]
  },
  {
    type: 'ApproveApplyStatusEnum',
    items: [
      {
        code: '0',
        label: '处理中'
      },
      {
        code: '1',
        label: '已通过'
      },
      {
        code: '2',
        label: '已拒绝'
      },
      {
        code: '3',
        label: '已取消'
      }
    ]
  },
  {
    type: 'PromotionUserSourceEnum',
    items: [
      {
        code: '1',
        label: '服务顾问添加'
      },
      {
        code: '2',
        label: '推广企业添加'
      },
      {
        code: '3',
        label: '超管添加'
      }
    ]
  },
  {
    type: 'BudgetTypeEnum',
    items: [
      {
        code: '0',
        label: '组织架构'
      },
      {
        code: '1',
        label: '人员'
      },
      {
        code: '2',
        label: '采购项分类'
      }
    ]
  },
  {
    type: 'ApplyTabEnum',
    items: [
      {
        code: '0',
        label: '全部'
      },
      {
        code: '1',
        label: '待提交'
      },
      {
        code: '2',
        label: '待审批'
      },
      {
        code: '3',
        label: '待报价'
      },
      {
        code: '4',
        label: '报价结束'
      },
      {
        code: '5',
        label: '生成订单'
      },
      {
        code: '6',
        label: '已取消'
      }
    ]
  },
  {
    type: 'MallCommonStatusEnum',
    items: [
      {
        code: '0',
        label: '否'
      },
      {
        code: '1',
        label: '是'
      }
    ]
  },
  {
    type: 'TeamBusinessTypeEnum',
    items: [
      {
        code: '0',
        label: '采购方'
      },
      {
        code: '1',
        label: '供应方'
      },
      {
        code: '2',
        label: '超管'
      }
    ]
  },
  {
    type: 'OrgTypeEnum',
    items: [
      {
        code: '0',
        label: '公司'
      },
      {
        code: '1',
        label: '部门'
      }
    ]
  },
  {
    type: 'PromotionWithdrawalTypeEnum',
    items: [
      {
        code: '0',
        label: '个人提现'
      },
      {
        code: '1',
        label: '企业提现'
      }
    ]
  },
  {
    type: 'MsgSmallTypeEnum',
    items: [
      {
        code: 'INVITE_JOIN_TEAM',
        label: '邀请加入团队通知'
      },
      {
        code: 'INVITE_JOIN_TEAM_SUCCESS',
        label: '邀请加入团队同意通知'
      },
      {
        code: 'INVITE_JOIN_TEAM_FAIL',
        label: '邀请加入团队拒绝通知'
      },
      {
        code: 'APPLY_JOIN_TEAM',
        label: '申请加入团队通知'
      },
      {
        code: 'APPLY_JOIN_TEAM_SUCCESS',
        label: '申请加入团队成功通知'
      },
      {
        code: 'APPLY_JOIN_TEAM_FAIL',
        label: '申请加入团队失败通知'
      },
      {
        code: 'REMOVE_TEAM',
        label: '移除团队通知'
      },
      {
        code: 'DISSOLVE_TEAM_USER',
        label: '解散团队通知'
      },
      {
        code: 'CLIENT_DISSOLVE_TEAM',
        label: '客户解散团队通知'
      },
      {
        code: 'SUPPLIER_DISSOLVE_TEAM',
        label: '供应商解散团队通知'
      },
      {
        code: 'INVITE_CLIENT',
        label: '邀请供应商'
      },
      {
        code: 'INVITE_CLIENT_RESULT',
        label: '邀请供应商结果'
      },
      {
        code: 'PURCHASE_BUDGET_APPROVE',
        label: '预算审批通知'
      },
      {
        code: 'PURCHASE_BUDGET_APPROVE_SUCCESS',
        label: '预算审批成功通知'
      },
      {
        code: 'PURCHASE_BUDGET_APPROVE_FAIL',
        label: '预算审批驳回通知'
      },
      {
        code: 'PURCHASE_PLAN_APPROVE',
        label: '需求审批通知'
      },
      {
        code: 'PURCHASE_PLAN_APPROVE_SUCCESS',
        label: '需求审批成功通知'
      },
      {
        code: 'PURCHASE_PLAN_APPROVE_FAIL',
        label: '需求审批驳回通知'
      },
      {
        code: 'PURCHASE_APPLY_INVITE_REFUSE',
        label: '申请邀请拒绝通知'
      },
      {
        code: 'PURCHASE_APPLY_INVITE_GIVE_UP_QUOTED',
        label: '申请邀请放弃报价通知'
      },
      {
        code: 'PURCHASE_APPLY_END',
        label: '申请报价结束通知'
      },
      {
        code: 'PURCHASE_APPLY_BID_START',
        label: '竞价开始通知'
      },
      {
        code: 'PURCHASE_APPLY_APPROVE',
        label: '申请审批通知'
      },
      {
        code: 'PURCHASE_APPLY_APPROVE_SUCCESS',
        label: '申请审批成功通知'
      },
      {
        code: 'PURCHASE_APPLY_APPROVE_FAIL',
        label: '申请审批驳回通知'
      },
      {
        code: 'PURCHASE_CONSULT_END',
        label: '咨询结束通知'
      },
      {
        code: 'PURCHASE_CONSULT_APPROVE',
        label: '咨询审批通知'
      },
      {
        code: 'PURCHASE_CONSULT_APPROVE_SUCCESS',
        label: '咨询审批成功通知'
      },
      {
        code: 'PURCHASE_CONSULT_APPROVE_FAIL',
        label: '咨询审批驳回通知'
      },
      {
        code: 'PURCHASE_ORDER_APPROVE',
        label: '采购订单审批通知'
      },
      {
        code: 'PURCHASE_ORDER_APPROVE_SUCCESS',
        label: '采购订单审批成功通知'
      },
      {
        code: 'PURCHASE_ORDER_APPROVE_FAIL',
        label: '采购订单审批驳回通知'
      },
      {
        code: 'PURCHASE_ORDER_SUCCESS',
        label: '采购订单接单通知'
      },
      {
        code: 'PURCHASE_ORDER_FAIL',
        label: '采购订单被拒通知'
      },
      {
        code: 'PURCHASE_RECONCILIATION_APPROVE',
        label: '对账单审批通知'
      },
      {
        code: 'PURCHASE_RECONCILIATION_APPROVE_SUCCESS',
        label: '对账单审批成功通知'
      },
      {
        code: 'PURCHASE_RECONCILIATION_APPROVE_FAIL',
        label: '对账单审批驳回通知'
      },
      {
        code: 'PURCHASE_PROTOCOL_APPROVE',
        label: '协议审批通知'
      },
      {
        code: 'PURCHASE_PROTOCOL_APPROVE_SUCCESS',
        label: '协议审批成功通知'
      },
      {
        code: 'PURCHASE_PROTOCOL_APPROVE_FAIL',
        label: '协议审批驳回通知'
      },
      {
        code: 'PURCHASE_CONTRACT_APPROVE',
        label: '采购合同审批通知'
      },
      {
        code: 'PURCHASE_CONTRACT_APPROVE_SUCCESS',
        label: '采购合同审批成功通知'
      },
      {
        code: 'PURCHASE_CONTRACT_APPROVE_FAIL',
        label: '采购合同审批驳回通知'
      },
      {
        code: 'PURCHASE_CONTRACT_SUCCESS',
        label: '供应商接受合同签署通知'
      },
      {
        code: 'PURCHASE_CONTRACT_FAIL',
        label: '供应商拒绝合同签署通知'
      },
      {
        code: 'NEED_PAY_APPROVE',
        label: '应付审批通知'
      },
      {
        code: 'NEED_PAY_APPROVE_SUCCESS',
        label: '应付审批成功通知'
      },
      {
        code: 'NEED_PAY_APPROVE_FAIL',
        label: '应付审批驳回通知'
      },
      {
        code: 'USE_APPROVE',
        label: '领用审批通知'
      },
      {
        code: 'USE_APPROVE_SUCCESS',
        label: '领用审批成功通知'
      },
      {
        code: 'USE_APPROVE_FAIL',
        label: '领用审批驳回通知'
      },
      {
        code: 'STORE_CHECK_APPROVE',
        label: '库存盘点审批通知'
      },
      {
        code: 'STORE_CHECK_APPROVE_SUCCESS',
        label: '库存盘点审批成功通知'
      },
      {
        code: 'STORE_CHECK_APPROVE_FAIL',
        label: '库存盘点审批驳回通知'
      },
      {
        code: 'SHIP_NOTICE',
        label: '发货通知'
      },
      {
        code: 'PENDING_PAYMENT',
        label: '对账单信息'
      },
      {
        code: 'SELL_PAY',
        label: '应付信息'
      },
      {
        code: 'SUPPLIER_MEMBER_APPROVE',
        label: '供应商会员审批通知'
      },
      {
        code: 'SUPPLIER_MEMBER_APPROVE_SUCCESS',
        label: '供应商会员审批成功通知'
      },
      {
        code: 'SUPPLIER_MEMBER_APPROVE_FAIL',
        label: '供应商会员审批驳回通知'
      },
      {
        code: 'APPLY_CONSULT_SUPPLIER_REPLY',
        label: '咨询已回复通知'
      },
      {
        code: 'APPLY_BUSINESS_INQUIRY_SUPPLIER_REPLY',
        label: '线索已回复通知'
      },
      {
        code: 'APPLY_BUSINESS_BIDDING_SUPPLIER_REPLY',
        label: '线索已回复通知'
      },
      {
        code: 'INVITE_SUPPLIER',
        label: '邀请客户'
      },
      {
        code: 'INVITE_SUPPLIER_RESULT',
        label: '邀请客户结果'
      },
      {
        code: 'SELL_CLUE',
        label: '线索信息'
      },
      {
        code: 'SELL_CLUE_INVITE',
        label: '邀请报价通知'
      },
      {
        code: 'SELL_BUSINESS_QUOTED_REMIND',
        label: '商机报价提醒'
      },
      {
        code: 'SELL_BUSINESS_BID_START_REMIND',
        label: '竞价开始提醒'
      },
      {
        code: 'SELL_BUSINESS_CLUE_ASSIGN',
        label: '线索指派提醒'
      },
      {
        code: 'SELL_ORDER_APPROVE',
        label: '销售订单审批通知'
      },
      {
        code: 'SELL_ORDER_APPROVE_SUCCESS',
        label: '销售订单审批成功通知'
      },
      {
        code: 'SELL_ORDER_APPROVE_FAIL',
        label: '销售订单审批驳回通知'
      },
      {
        code: 'SELL_ORDER_INVITE',
        label: '销售订单通知'
      },
      {
        code: 'SELL_CONTRACT_APPROVE',
        label: '销售合同审批通知'
      },
      {
        code: 'SELL_CONTRACT_APPROVE_SUCCESS',
        label: '销售合同审批成功通知'
      },
      {
        code: 'SELL_CONTRACT_APPROVE_FAIL',
        label: '销售合同审批驳回通知'
      },
      {
        code: 'SELL_CONTRACT_INVITE',
        label: '销售合同邀请签署通知'
      },
      {
        code: 'BUSINESS_ASSIGN',
        label: '商机跟进通知'
      },
      {
        code: 'SELL_PROTOCOL_APPROVE',
        label: '协议审批通知'
      },
      {
        code: 'SELL_PROTOCOL_APPROVE_SUCCESS',
        label: '协议审批成功通知'
      },
      {
        code: 'SELL_PROTOCOL_APPROVE_FAIL',
        label: '协议审批驳回通知'
      },
      {
        code: 'SELL_SPU_ON_APPROVE',
        label: '协议审批通知'
      },
      {
        code: 'SELL_SPU_ON_APPROVE_SUCCESS',
        label: '协议审批成功通知'
      },
      {
        code: 'SELL_SPU_ON_APPROVE_FAIL',
        label: '协议审批驳回通知'
      },
      {
        code: 'APPLY_CONSULT_PURCHASE_REPLY',
        label: '咨询待回复通知'
      },
      {
        code: 'APPLY_BUSINESS_INQUIRY_PURCHASE_REPLY',
        label: '线索待回复通知'
      },
      {
        code: 'APPLY_BUSINESS_BIDDING_PURCHASE_REPLY',
        label: '线索待回复通知'
      }
    ]
  },
  {
    type: 'AppDeliveryManagementEnum',
    items: [
      {
        code: '0',
        label: '待发货'
      },
      {
        code: '1',
        label: '待收货'
      },
      {
        code: '2',
        label: '已收货'
      }
    ]
  },
  {
    type: 'ECompanyAuthStatusEnum',
    items: [
      {
        code: 'NOT_AUTH',
        label: '未认证'
      },
      {
        code: 'ALREADY_AUTH',
        label: '已认证'
      }
    ]
  },
  {
    type: 'ThirdTradePlatformTypeEnum',
    items: [
      {
        code: '1',
        label: '电脑网站支付'
      },
      {
        code: '2',
        label: '手机网站支付'
      },
      {
        code: '3',
        label: 'APP'
      },
      {
        code: '4',
        label: '小程序/微信公众号'
      },
      {
        code: '5',
        label: '付款码'
      }
    ]
  },
  {
    type: 'SkuStockEnum',
    items: [
      {
        code: '0',
        label: '有货'
      },
      {
        code: '1',
        label: '无货'
      }
    ]
  },
  {
    type: 'WithdrawalStatusEnum',
    items: [
      {
        code: '0',
        label: '未支付'
      },
      {
        code: '1',
        label: '处理中'
      },
      {
        code: '2',
        label: '成功'
      },
      {
        code: '3',
        label: '失败'
      }
    ]
  },
  {
    type: 'RefundStatusEnum',
    items: [
      {
        code: '0',
        label: '进行中'
      },
      {
        code: '1',
        label: '退款成功'
      },
      {
        code: '2',
        label: '退款失败'
      }
    ]
  },
  {
    type: 'SMSTypeEnum',
    items: [
      {
        code: '0',
        label: '登录'
      },
      {
        code: '1',
        label: '忘记密码'
      },
      {
        code: '2',
        label: '更换主管理员'
      },
      {
        code: '3',
        label: '更换手机号'
      },
      {
        code: '4',
        label: '解散团队'
      },
      {
        code: '5',
        label: '短信码验证'
      },
      {
        code: '6',
        label: '推广账户设置密码'
      }
    ]
  },
  {
    type: 'PayPeriodEnum',
    items: [
      {
        code: '0',
        label: '一次性付款'
      },
      {
        code: '1',
        label: '多次付款'
      }
    ]
  },
  {
    type: 'SealAuthStatusEnum',
    items: [
      {
        code: 'NORMAL',
        label: '生效'
      },
      {
        code: 'FAILURE',
        label: '失效'
      },
      {
        code: 'WAITING',
        label: '待生效'
      }
    ]
  },
  {
    type: 'ClueOriginEnum',
    items: [
      {
        code: '0',
        label: '邀请'
      },
      {
        code: '1',
        label: '公共'
      }
    ]
  },
  {
    type: 'SupplierTypeEnum',
    items: [
      {
        code: '0',
        label: '服务类'
      },
      {
        code: '1',
        label: '商品类'
      }
    ]
  },
  {
    type: 'SpuOriginEnum',
    items: [
      {
        code: '0',
        label: '普通供应商'
      },
      {
        code: '1',
        label: '平台商家'
      },
      {
        code: '2',
        label: '智采精选'
      }
    ]
  },
  {
    type: 'OrderCoopStatementEnum',
    items: [
      {
        code: '0',
        label: '待对账'
      },
      {
        code: '2',
        label: '已对账'
      }
    ]
  },
  {
    type: 'SupplierPayWayEnum',
    items: [
      {
        code: '0',
        label: '网银支付'
      },
      {
        code: '1',
        label: '平台赠送'
      },
      {
        code: '2',
        label: '退款'
      },
      {
        code: '3',
        label: '支付宝'
      },
      {
        code: '4',
        label: '微信支付'
      }
    ]
  },
  {
    type: 'ValidityTypeEnum',
    items: [
      {
        code: '0',
        label: '时间段'
      },
      {
        code: '1',
        label: '时间范围'
      },
      {
        code: '2',
        label: '长期'
      }
    ]
  },
  {
    type: 'SealSizeEnum',
    items: [
      {
        code: 'mm42_42',
        label: '42mm*42mm'
      },
      {
        code: 'mm40_40',
        label: '40mm*40mm'
      },
      {
        code: 'mm38_38',
        label: '38mm*38mm'
      },
      {
        code: 'mm45_30',
        label: '45mm*30mm'
      },
      {
        code: 'mm22_22',
        label: '22mm*22mm'
      }
    ]
  },
  {
    type: 'MsgMainTypeEnum',
    items: [
      {
        code: 'SYSTEM',
        label: '系统'
      },
      {
        code: 'PURCHASE',
        label: '采购'
      },
      {
        code: 'SELL',
        label: '销售'
      }
    ]
  },
  {
    type: 'CertifyOrgTypeEnum',
    items: [
      {
        code: '1',
        label: '企业类'
      },
      {
        code: '2',
        label: '个体工商户'
      },
      {
        code: '99',
        label: '其他组织'
      }
    ]
  },
  {
    type: 'CoopStatementApplyInvoiceStatusEnum',
    items: [
      {
        code: '0',
        label: '申请成功'
      },
      {
        code: '1',
        label: '申请失败'
      }
    ]
  },
  {
    type: 'PostPredictTimeEnum',
    items: [
      {
        code: '0',
        label: '上午'
      },
      {
        code: '1',
        label: '下午'
      },
      {
        code: '2',
        label: '上午8:00~10:00'
      },
      {
        code: '3',
        label: '上午10:00~12:00'
      },
      {
        code: '4',
        label: '下午12:00~14:00'
      },
      {
        code: '5',
        label: '下午14:00~16:00'
      },
      {
        code: '6',
        label: '下午16:00~18:00'
      }
    ]
  },
  {
    type: 'BusinessSetTypeEnum',
    items: [
      {
        code: 'MALL_ORDER_DEADLINE',
        label: '线上支付应付记录有效时长'
      },
      {
        code: 'HELP_OTHER_APPLY',
        label: '是否允许帮助他人发起采购申请'
      },
      {
        code: 'MALL_NEED_PAY_NEED_APPROVE',
        label: '商城订单审批通过之后，生成的应付是否需要审批'
      },
      {
        code: 'OPEN_MALL_SELL',
        label: '开通商城销售'
      },
      {
        code: 'SET_GET_CLUE_LABEL',
        label: '设置获取线索标签'
      },
      {
        code: 'MALL_ORDER_NEED_APPROVE',
        label: '商城订单是否需内部审批（默认需要审批）'
      },
      {
        code: 'PROMOTION_ACCOUNT_PASSWORD_SETTING',
        label: '推广账户密码设置'
      },
      {
        code: 'MALL_SELL_DUTY',
        label: '商城销售负责人'
      }
    ]
  },
  {
    type: 'SupplierMemberEnum',
    items: [
      {
        code: '0',
        label: '待提交'
      },
      {
        code: '1',
        label: '待审核'
      },
      {
        code: '2',
        label: '待生效'
      },
      {
        code: '3',
        label: '生效中'
      },
      {
        code: '4',
        label: '审核拒绝'
      },
      {
        code: '5',
        label: '已失效'
      },
      {
        code: '6',
        label: '支付申请'
      }
    ]
  },
  {
    type: 'OperateStatusEnum',
    items: [
      {
        code: '0',
        label: '未处理'
      },
      {
        code: '1',
        label: '已处理'
      },
      {
        code: '2',
        label: '已失效'
      }
    ]
  },
  {
    type: 'NeedPayTypeEnum',
    items: [
      {
        code: '0',
        label: '订单'
      },
      {
        code: '1',
        label: '对账单'
      }
    ]
  },
  {
    type: 'BusinessTabEnum',
    items: [
      {
        code: '0',
        label: '有效商机'
      },
      {
        code: '1',
        label: '成交商机'
      },
      {
        code: '2',
        label: '未成交商机'
      }
    ]
  },
  {
    type: 'PayStatusEnum',
    items: [
      {
        code: '0',
        label: '未支付'
      },
      {
        code: '1',
        label: '支付处理中'
      },
      {
        code: '2',
        label: '支付成功'
      },
      {
        code: '3',
        label: '支付失败'
      },
      {
        code: '4',
        label: '订单关闭'
      }
    ]
  },
  {
    type: 'ContractFieldParamTypeEnum',
    items: [
      {
        code: 'NUMBER',
        label: '数字'
      },
      {
        code: 'STRING',
        label: '文本'
      }
    ]
  },
  {
    type: 'BillTypeEnum',
    items: [
      {
        code: '0',
        label: '订单'
      },
      {
        code: '1',
        label: '对账单'
      }
    ]
  },
  {
    type: 'ApplyInviteTypeEnum',
    items: [
      {
        code: '0',
        label: '申请'
      },
      {
        code: '1',
        label: '邀请'
      }
    ]
  },
  {
    type: 'ContractStatusEnum',
    items: [
      {
        code: 'SIGNING',
        label: '签约中'
      },
      {
        code: 'SIGNED',
        label: '履约中'
      },
      {
        code: 'FINISH',
        label: '已完成'
      },
      {
        code: 'ANOMALY',
        label: '执行异常'
      }
    ]
  },
  {
    type: 'GradeStatusEnum',
    items: [
      {
        code: '0',
        label: '启用'
      },
      {
        code: '1',
        label: '停用'
      }
    ]
  },
  {
    type: 'FloorTypeEnum',
    items: [
      {
        code: '0',
        label: '页面'
      },
      {
        code: '1',
        label: '分类'
      }
    ]
  },
  {
    type: 'PayValidationEnum',
    items: [
      {
        code: '1',
        label: '可以购买'
      },
      {
        code: '2',
        label: '前往充值'
      },
      {
        code: '3',
        label: '请联系管理人员'
      }
    ]
  },
  {
    type: 'ApproveReceiptTypeEnum',
    items: [
      {
        code: 'PROCUREMENT',
        label: '采购审核'
      },
      {
        code: 'STATEMENT',
        label: '对账单审核'
      },
      {
        code: 'COOP_STATEMENT',
        label: '合作商对账单审核'
      },
      {
        code: 'SALES',
        label: '销售审核'
      },
      {
        code: 'NEED_PAY',
        label: '应付审核'
      },
      {
        code: 'MEMBER',
        label: '供应商会员审核'
      }
    ]
  },
  {
    type: 'SealCentralEnum',
    items: [
      {
        code: 'STAR',
        label: '五角星'
      },
      {
        code: 'NONE',
        label: '无图案'
      }
    ]
  },
  {
    type: 'MallSearchTypeEnum',
    items: [
      {
        code: '1',
        label: '商品'
      },
      {
        code: '2',
        label: '服务商'
      }
    ]
  },
  {
    type: 'SpuSupplierTypeEnum',
    items: [
      {
        code: '0',
        label: '首页'
      },
      {
        code: '1',
        label: '自有供应商'
      },
      {
        code: '2',
        label: '三方商城'
      },
      {
        code: '3',
        label: '平台商家商品'
      },
      {
        code: '4',
        label: '平台商家'
      }
    ]
  },
  {
    type: 'VersionPushTypeEnum',
    items: [
      {
        code: '0',
        label: '静默推送'
      },
      {
        code: '1',
        label: '弹窗提示'
      },
      {
        code: '2',
        label: '强制更新'
      }
    ]
  },
  {
    type: 'YesNoEnum',
    items: [
      {
        code: '0',
        label: '否'
      },
      {
        code: '1',
        label: '是'
      }
    ]
  },
  {
    type: 'ApplyClueStatusEnum',
    items: [
      {
        code: '0',
        label: '未查看'
      },
      {
        code: '1',
        label: '已查看'
      },
      {
        code: '2',
        label: '已转商机'
      },
      {
        code: '3',
        label: '忽略'
      },
      {
        code: '4',
        label: '已失效'
      }
    ]
  },
  {
    type: 'BillStatusEnum',
    items: [
      {
        code: '0',
        label: '未对账'
      },
      {
        code: '1',
        label: '对账中'
      },
      {
        code: '2',
        label: '已对账'
      },
      {
        code: '3',
        label: '核销中'
      },
      {
        code: '4',
        label: '结算中'
      },
      {
        code: '5',
        label: '已核销'
      },
      {
        code: '6',
        label: '已结算'
      }
    ]
  },
  {
    type: 'OriginTypeEnum',
    items: [
      {
        code: '0',
        label: '邀请'
      },
      {
        code: '1',
        label: '申请'
      }
    ]
  },
  {
    type: 'OrderPurchaseStatusEnum',
    items: [
      {
        code: 'WAIT_COMMIT',
        label: '待提交'
      },
      {
        code: 'APPROVING',
        label: '待审核'
      },
      {
        code: 'APPROVE_REJECT',
        label: '审批拒绝'
      },
      {
        code: 'WAIT_CONFIRMATION',
        label: '未确认'
      },
      {
        code: 'CONFIRMED',
        label: '已确认'
      },
      {
        code: 'REJECTED',
        label: '已拒绝'
      },
      {
        code: 'REVOKED',
        label: '审核已撤销'
      },
      {
        code: 'REVOKED_ORDER',
        label: '订单已取消'
      },
      {
        code: 'PAYING',
        label: '支付中'
      },
      {
        code: 'COMPLETED',
        label: '已完成'
      }
    ]
  },
  {
    type: 'AppInvoiceRegulatorEnum',
    items: [
      {
        code: '0',
        label: '待收票'
      },
      {
        code: '1',
        label: '已收票'
      },
      {
        code: '2',
        label: '已拒绝'
      },
      {
        code: '3',
        label: '发票信息'
      }
    ]
  },
  {
    type: 'TimePeriodEnum',
    items: [
      {
        code: '0',
        label: '一年'
      },
      {
        code: '1',
        label: '半年'
      },
      {
        code: '2',
        label: '一个季度'
      },
      {
        code: '3',
        label: '一个月'
      }
    ]
  },
  {
    type: 'WaiverTypeEnum',
    items: [
      {
        code: '0',
        label: ''
      },
      {
        code: '1',
        label: '经沟通无法满足客户需求'
      },
      {
        code: '2',
        label: '客户需求不明确，存在风险'
      },
      {
        code: '3',
        label: '客户存在经营风险'
      },
      {
        code: '4',
        label: '其他'
      }
    ]
  },
  {
    type: 'AdjustTypeEnum',
    items: [
      {
        code: '1',
        label: '调整服务人'
      },
      {
        code: '2',
        label: '调整推广企业'
      },
      {
        code: '3',
        label: '服务人转交'
      }
    ]
  },
  {
    type: 'TargetIdEnum',
    items: [
      {
        code: '0',
        label: '购买咨询'
      },
      {
        code: '1',
        label: '购买线索'
      },
      {
        code: '2',
        label: '购买会员等级'
      }
    ]
  },
  {
    type: 'GradeOpenStatusEnum',
    items: [
      {
        code: '0',
        label: '未开通'
      },
      {
        code: '1',
        label: '等待审核'
      },
      {
        code: '2',
        label: '已开通'
      }
    ]
  },
  {
    type: 'TerraceInvoiceEnum',
    items: [
      {
        code: '0',
        label: '待确认'
      },
      {
        code: '1',
        label: '已确认'
      },
      {
        code: '2',
        label: '已拒绝'
      }
    ]
  },
  {
    type: 'SealTemplateTypeEnum',
    items: [
      {
        code: 'TEMPLATE_ROUND',
        label: '圆章'
      },
      {
        code: 'TEMPLATE_OVAL',
        label: '椭圆章'
      },
      {
        code: 'RECTANGLE',
        label: '带边框矩形印章'
      },
      {
        code: 'BORDERLESS',
        label: '无边框矩形印章'
      },
      {
        code: 'SQUARE',
        label: '带边框正方形印章'
      },
      {
        code: 'SQUARE_NO_BORDER',
        label: '无边框正方形印章'
      }
    ]
  },
  {
    type: 'DeliveryStatusEnum',
    items: [
      {
        code: 'WAIT',
        label: '待发货'
      },
      {
        code: 'PART',
        label: '部分发货'
      },
      {
        code: 'ALL_SEND',
        label: '全部发货'
      },
      {
        code: 'SUC',
        label: '已收货'
      },
      {
        code: 'PART_SUC',
        label: '部分收货'
      }
    ]
  },
  {
    type: 'FollowTypeEnum',
    items: [
      {
        code: '0',
        label: '业务'
      }
    ]
  },
  {
    type: 'StoreExitTypeEnum',
    items: [
      {
        code: '0',
        label: '领用出库'
      },
      {
        code: '1',
        label: '调拨出库'
      },
      {
        code: '2',
        label: '销售出库'
      },
      {
        code: '3',
        label: '生产出库'
      }
    ]
  },
  {
    type: 'ContractTypeEnum',
    items: [
      {
        code: '0',
        label: '模板生成'
      },
      {
        code: '1',
        label: '上传合同'
      }
    ]
  },
  {
    type: 'ProtocolRelTypeEnum',
    items: [
      {
        code: '0',
        label: '商城商品'
      },
      {
        code: '1',
        label: '采购项'
      }
    ]
  },
  {
    type: 'BusinessTypeEnum',
    items: [
      {
        code: '0',
        label: '采购'
      },
      {
        code: '1',
        label: '销售'
      },
      {
        code: '2',
        label: '采购+销售'
      }
    ]
  },
  {
    type: 'BillReceiptPaymentTypeEnum',
    items: [
      {
        code: '0',
        label: '应收'
      },
      {
        code: '1',
        label: '应付'
      }
    ]
  },
  {
    type: 'ClueListOperationEnum',
    items: [
      {
        code: '1',
        label: '参与报价'
      },
      {
        code: '2',
        label: '付费查看'
      },
      {
        code: '3',
        label: '申请成为供应商'
      },
      {
        code: '4',
        label: '升级为付费会员'
      }
    ]
  },
  {
    type: 'BiddingTypeEnum',
    items: [
      {
        code: '0',
        label: '设置获取咨询竞价'
      },
      {
        code: '1',
        label: '设置获取线索竞价'
      }
    ]
  },
  {
    type: 'CredentialTypeEnum',
    items: [
      {
        code: '0',
        label: '身份证'
      },
      {
        code: '1',
        label: '港澳居民来往内地通行证'
      },
      {
        code: '2',
        label: '台湾居民来往大陆通行证'
      },
      {
        code: '3',
        label: '外国护照'
      }
    ]
  },
  {
    type: 'OrderGoodsOriginEnum',
    items: [
      {
        code: '0',
        label: '待采购项'
      },
      {
        code: '1',
        label: '采购项'
      },
      {
        code: '2',
        label: '商城'
      },
      {
        code: '3',
        label: '购物车'
      },
      {
        code: '4',
        label: '咨询'
      }
    ]
  },
  {
    type: 'SupplierServiceSpuEnum',
    items: [
      {
        code: '0',
        label: '未分类'
      },
      {
        code: '1',
        label: '服务类'
      },
      {
        code: '2',
        label: '商品类'
      },
      {
        code: '3',
        label: '综合类'
      }
    ]
  },
  {
    type: 'WechatLoginStatusEnum',
    items: [
      {
        code: '0',
        label: '登录成功'
      },
      {
        code: '1',
        label: '需要绑定手机号'
      }
    ]
  },
  {
    type: 'PayTimeNodeEnum',
    items: [
      {
        code: '0',
        label: '生成订单后自动创建待支付'
      },
      {
        code: '1',
        label: '合同签订后自动创建待支付'
      },
      {
        code: '2',
        label: '验收确认后自动创建待支付'
      },
      {
        code: '3',
        label: '手动创建待支付信息'
      },
      {
        code: '4',
        label: '自定义条件及时间'
      },
      {
        code: '5',
        label: '线下订单支付方式'
      }
    ]
  },
  {
    type: 'OrderButtonEnum',
    items: [
      {
        code: '0',
        label: '编辑'
      },
      {
        code: '1',
        label: '提交审批'
      },
      {
        code: '2',
        label: '前往审批'
      },
      {
        code: '3',
        label: '在线支付'
      },
      {
        code: '4',
        label: '线下支付'
      },
      {
        code: '5',
        label: '前往收货'
      },
      {
        code: '6',
        label: '支付详情'
      }
    ]
  },
  {
    type: 'PlatformMallSupplierWayEnum',
    items: [
      {
        code: '0',
        label: '供应商申请'
      },
      {
        code: '1',
        label: '超管邀请'
      }
    ]
  },
  {
    type: 'BannerTypeEnum',
    items: [
      {
        code: '0',
        label: '页面'
      },
      {
        code: '1',
        label: '分类'
      }
    ]
  },
  {
    type: 'PromotionBindTypeEnum',
    items: [
      {
        code: '1',
        label: '企业'
      },
      {
        code: '2',
        label: '项目'
      }
    ]
  },
  {
    type: 'BusinessSetValueEnum',
    items: [
      {
        code: 'MINUTE',
        label: '分钟'
      },
      {
        code: 'HOUR',
        label: '小时'
      },
      {
        code: 'OTHER',
        label: '其他'
      },
      {
        code: 'NOT',
        label: '无'
      }
    ]
  },
  {
    type: 'BillingStatusEnum',
    items: [
      {
        code: '0',
        label: '待开票'
      },
      {
        code: '1',
        label: '已开票'
      }
    ]
  },
  {
    type: 'AliqrPayModeEnum',
    items: [
      {
        code: '0',
        label: '订单码-简约前置模式'
      },
      {
        code: '1',
        label: '订单码-前置模式'
      },
      {
        code: '2',
        label: '订单码-跳转模式'
      },
      {
        code: '3',
        label: '订单码-迷你前置模式'
      },
      {
        code: '4',
        label: '订单码-可定义宽度的嵌入式二维码'
      }
    ]
  },
  {
    type: 'OrderPurchaseMethodEnum',
    items: [
      {
        code: 'INQUIRY',
        label: '询价采购'
      },
      {
        code: 'MALL',
        label: '商城采购'
      },
      {
        code: 'BID',
        label: '竞价采购'
      },
      {
        code: 'CONSULT',
        label: '咨询采购'
      },
      {
        code: 'SPECIFY',
        label: '指定供应商'
      },
      {
        code: 'OFFLINE',
        label: '线下订单'
      },
      {
        code: 'PLATFORM',
        label: '平台商城'
      },
      {
        code: 'SELECTED',
        label: '智采精选'
      },
      {
        code: 'PROTOCOL',
        label: '协议采购'
      }
    ]
  },
  {
    type: 'BusinessFeePayWayEnum',
    items: [
      {
        code: '0',
        label: '网银支付'
      },
      {
        code: '1',
        label: '账户余额'
      },
      {
        code: '2',
        label: '赠送余额'
      },
      {
        code: '3',
        label: '支付宝'
      },
      {
        code: '4',
        label: '微信支付'
      },
      {
        code: '5',
        label: '余额支付'
      },
      {
        code: '6',
        label: '条码支付'
      }
    ]
  },
  {
    type: 'OrderPayStatusEnum',
    items: [
      {
        code: '0',
        label: '未完成支付'
      },
      {
        code: '1',
        label: '已完成支付'
      }
    ]
  },
  {
    type: 'NeedPayStatusEnum',
    items: [
      {
        code: '0',
        label: '草稿'
      },
      {
        code: '1',
        label: '审核中'
      },
      {
        code: '2',
        label: '审核失败'
      },
      {
        code: '3',
        label: '待支付'
      },
      {
        code: '4',
        label: '已支付'
      },
      {
        code: '5',
        label: '待结算'
      },
      {
        code: '6',
        label: '待确认'
      },
      {
        code: '7',
        label: '已结算'
      }
    ]
  },
  {
    type: 'PayModeEnum',
    items: [
      {
        code: '0',
        label: '电汇'
      },
      {
        code: '1',
        label: '汇票'
      },
      {
        code: '2',
        label: '现金'
      },
      {
        code: '3',
        label: '银行卡'
      },
      {
        code: '4',
        label: '支票'
      },
      {
        code: '5',
        label: '支付宝'
      },
      {
        code: '6',
        label: '微信支付'
      },
      {
        code: '7',
        label: '其他'
      },
      {
        code: '8',
        label: '对公转账'
      }
    ]
  },
  {
    type: 'StoreCheckTypeEnum',
    items: [
      {
        code: '0',
        label: '无'
      },
      {
        code: '1',
        label: '确认盘盈'
      },
      {
        code: '2',
        label: '确认盘亏'
      },
      {
        code: '3',
        label: '盘盈退回'
      },
      {
        code: '4',
        label: '盘亏追回'
      }
    ]
  },
  {
    type: 'PaymentAuthStatusEnum',
    items: [
      {
        code: '0',
        label: '未开通'
      },
      {
        code: '1',
        label: '已开通'
      }
    ]
  },
  {
    type: 'ContractAuditStatusEnum',
    items: [
      {
        code: 'DRAFT',
        label: '草稿（不显示）'
      },
      {
        code: 'NEW',
        label: '待提交'
      },
      {
        code: 'APPROVING',
        label: '待审核'
      },
      {
        code: 'APPROVE_REJECT',
        label: '审批拒绝'
      },
      {
        code: 'APPROVE_REVOKED',
        label: '已撤销'
      },
      {
        code: 'WAIT_CONFIRMATION',
        label: '待确认'
      },
      {
        code: 'WAIT_APPROVE',
        label: '待审核'
      },
      {
        code: 'WAIT_PURCHASE_SIGN',
        label: '待采购方签约'
      },
      {
        code: 'WAIT_SUPPLIER_SIGN',
        label: '待供货方签约'
      },
      {
        code: 'SIGN',
        label: '已签约'
      },
      {
        code: 'REJECTED',
        label: '已拒绝'
      },
      {
        code: 'REVOKED',
        label: '已撤销'
      }
    ]
  },
  {
    type: 'OrderSupplierDataScopeEnum',
    items: [
      {
        code: 'ALL',
        label: '全部数据'
      },
      {
        code: 'MANAGER',
        label: '我负责的'
      }
    ]
  },
  {
    type: 'BillOrderTypeEnum',
    items: [
      {
        code: '0',
        label: '供应商账单'
      },
      {
        code: '1',
        label: '采购商账单'
      },
      {
        code: '2',
        label: '电商账单'
      }
    ]
  },
  {
    type: 'BusinessScreenEnum',
    items: [
      {
        code: '0',
        label: '全部'
      },
      {
        code: '1',
        label: '我的商机'
      }
    ]
  },
  {
    type: 'MaterialsPropertyEnum',
    items: [
      {
        code: '0',
        label: '费用'
      },
      {
        code: '1',
        label: '固定资产'
      },
      {
        code: '2',
        label: '存货'
      }
    ]
  },
  {
    type: 'OrgCertificationWayEnum',
    items: [
      {
        code: 'ORG_LEGAL',
        label: '法人认证'
      },
      {
        code: 'AUTHORIZATION',
        label: '授权认证'
      },
      {
        code: 'PAYMENT',
        label: '对公打款认证'
      }
    ]
  },
  {
    type: 'ApplyUsedTypeEnum',
    items: [
      {
        code: '0',
        label: '订单'
      },
      {
        code: '1',
        label: '申请'
      }
    ]
  },
  {
    type: 'PhotocopyImageTypeEnum',
    items: [
      {
        code: '0',
        label: '身份证人像面'
      },
      {
        code: '1',
        label: '身份证国徽面'
      },
      {
        code: '2',
        label: '活体照片'
      },
      {
        code: '3',
        label: '经办人身份证正面'
      },
      {
        code: '4',
        label: '经办人身份证反面'
      },
      {
        code: '5',
        label: '统一社会信用代码证'
      },
      {
        code: '6',
        label: '基本户开户证明'
      },
      {
        code: '7',
        label: '个体工商营业执照'
      },
      {
        code: '8',
        label: '用信凭证'
      },
      {
        code: '9',
        label: '港澳居民来往内地通行证正面'
      },
      {
        code: '10',
        label: '港澳居民来往内地通行证反面'
      },
      {
        code: '11',
        label: '台湾居民来往大陆通行证正面'
      },
      {
        code: '12',
        label: '台湾居民来往大陆通行证反面'
      },
      {
        code: '13',
        label: '外国护照正面'
      },
      {
        code: '14',
        label: '外国护照反面'
      }
    ]
  },
  {
    type: 'GradePriceEnableChangeEnum',
    items: [
      {
        code: '0',
        label: '不允许'
      },
      {
        code: '1',
        label: '允许'
      }
    ]
  },
  {
    type: 'OperationTypeEnum',
    items: [
      {
        code: '1',
        label: '审核'
      },
      {
        code: '2',
        label: '调整'
      }
    ]
  },
  {
    type: 'ApplyWayEnum',
    items: [
      {
        code: '0',
        label: '默认'
      },
      {
        code: '1',
        label: '支付'
      },
      {
        code: '2',
        label: '手动调整'
      }
    ]
  },
  {
    type: 'SettleCancelRecordType',
    items: [
      {
        code: '0',
        label: '结算'
      },
      {
        code: '1',
        label: '核销'
      }
    ]
  },
  {
    type: 'CostTypeEnum',
    items: [
      {
        code: '0',
        label: '费用'
      },
      {
        code: '1',
        label: '折扣'
      }
    ]
  },
  {
    type: 'GoodStatusEnum',
    items: [
      {
        code: '0',
        label: '待上架'
      },
      {
        code: '1',
        label: '已上架'
      },
      {
        code: '2',
        label: '已下架'
      },
      {
        code: '3',
        label: '审核中'
      },
      {
        code: '4',
        label: '审核不通过'
      },
      {
        code: '5',
        label: '强制下架'
      }
    ]
  },
  {
    type: 'NearbyTimeEnum',
    items: [
      {
        code: '0',
        label: '近7天'
      },
      {
        code: '1',
        label: '近30天'
      },
      {
        code: '2',
        label: '近6月'
      },
      {
        code: '3',
        label: '近12月'
      }
    ]
  },
  {
    type: 'ProtocolTradingMethodEnum',
    items: [
      {
        code: '0',
        label: '货到付款'
      },
      {
        code: '1',
        label: '货到付款(自动对账)'
      }
    ]
  },
  {
    type: 'BindBankStatusEnum',
    items: [
      {
        code: '0',
        label: '未绑定'
      },
      {
        code: '1',
        label: '待短信验证'
      },
      {
        code: '2',
        label: '待被动打款验证'
      },
      {
        code: '3',
        label: '被动已打款待验证'
      },
      {
        code: '4',
        label: '处理中'
      },
      {
        code: '5',
        label: '成功'
      },
      {
        code: '6',
        label: '失败'
      }
    ]
  },
  {
    type: 'MessageStatusEnum',
    items: [
      {
        code: '0',
        label: '未阅读'
      },
      {
        code: '1',
        label: '已阅读'
      },
      {
        code: '2',
        label: '已失效'
      }
    ]
  },
  {
    type: 'WithdrawalArrivalTypeEnum',
    items: [
      {
        code: '0',
        label: 'T+1'
      },
      {
        code: '1',
        label: 'D0'
      }
    ]
  },
  {
    type: 'WarnSmallTypeEnum',
    items: [
      {
        code: 'PURCHASE_PLAN_TIMEOUT',
        label: '计划超时'
      },
      {
        code: 'PURCHASE_ORDER_BIG',
        label: '订单金额过大无合同'
      },
      {
        code: 'PURCHASE_ORDER_TIMEOUT',
        label: '订单超时未确认'
      },
      {
        code: 'SELL_CLUE_TIMEOUT',
        label: '线索超时'
      },
      {
        code: 'SELL_ORDER_PAY',
        label: '订单未付款'
      },
      {
        code: 'SELL_SEND_TIMEOUT',
        label: '发货超时'
      }
    ]
  },
  {
    type: 'ContractPurchaseTypeEnum',
    items: [
      {
        code: '0',
        label: '协议客户'
      },
      {
        code: '1',
        label: '规模客户'
      },
      {
        code: '2',
        label: '战略合作客户'
      }
    ]
  },
  {
    type: 'EmployeeTypeEnum',
    items: [
      {
        code: '1',
        label: '全职'
      },
      {
        code: '2',
        label: '兼职'
      },
      {
        code: '3',
        label: '实习'
      },
      {
        code: '4',
        label: '劳务派遣'
      },
      {
        code: '5',
        label: '劳务外包'
      },
      {
        code: '6',
        label: '退休返聘'
      }
    ]
  },
  {
    type: 'ApplyShieldOriginEnum',
    items: [
      {
        code: '0',
        label: '黑名单'
      },
      {
        code: '1',
        label: '新建'
      }
    ]
  },
  {
    type: 'SelectedStatusEnum',
    items: [
      {
        code: '0',
        label: '未选中'
      },
      {
        code: '1',
        label: '已选中'
      },
      {
        code: '2',
        label: '半选'
      }
    ]
  },
  {
    type: 'SolutionTypeEnum',
    items: [
      {
        code: '0',
        label: '采购+销售'
      },
      {
        code: '1',
        label: '采购'
      },
      {
        code: '2',
        label: '销售'
      },
      {
        code: '3',
        label: '超管'
      },
      {
        code: '4',
        label: '无团队'
      },
      {
        code: '5',
        label: '自定义'
      },
      {
        code: '6',
        label: '标准版'
      },
      {
        code: '7',
        label: '专业版'
      }
    ]
  },
  {
    type: 'OrderStatementGenerateEnum',
    items: [
      {
        code: '0',
        label: '账单未生成'
      },
      {
        code: '1',
        label: '账单已生成'
      }
    ]
  },
  {
    type: 'DateTypeEnum',
    items: [
      {
        code: '0',
        label: '年'
      },
      {
        code: '1',
        label: '月'
      },
      {
        code: '2',
        label: '日'
      },
      {
        code: '3',
        label: '时'
      },
      {
        code: '4',
        label: '分'
      },
      {
        code: '5',
        label: '秒'
      },
      {
        code: '6',
        label: '毫秒'
      }
    ]
  },
  {
    type: 'ScriptOrderTypeEnum',
    items: [
      {
        code: '0',
        label: '数字'
      },
      {
        code: '1',
        label: '字符串'
      }
    ]
  },
  {
    type: 'ProtocolPricingModeEnum',
    items: [
      {
        code: '0',
        label: '固定价格协议（以本协议价格为准）'
      },
      {
        code: '1',
        label: '浮动价格协议（以商城售价为准）'
      },
      {
        code: '2',
        label: '折扣价格协议（基于商城售价打折）'
      }
    ]
  },
  {
    type: 'UseWayEnum',
    items: [
      {
        code: '0',
        label: '通用'
      },
      {
        code: '1',
        label: '办公用品'
      },
      {
        code: '2',
        label: '生产资料'
      },
      {
        code: '3',
        label: '礼品'
      },
      {
        code: '4',
        label: '福利'
      },
      {
        code: '5',
        label: '培训'
      }
    ]
  },
  {
    type: 'ApplyCompanyTypeEnum',
    items: [
      {
        code: '0',
        label: '申请发布公司'
      }
    ]
  },
  {
    type: 'SealStatusEnum',
    items: [
      {
        code: 'NOT_EFFECT',
        label: '待生效'
      },
      {
        code: 'ENABLED',
        label: '启用'
      },
      {
        code: 'EXPIRED',
        label: '过期'
      },
      {
        code: 'VOIDED',
        label: '已驳回'
      }
    ]
  },
  {
    type: 'InvoiceOperationType',
    items: [
      {
        code: '0',
        label: '开票'
      },
      {
        code: '1',
        label: '收票'
      }
    ]
  },
  {
    type: 'CostValueEnum',
    items: [
      {
        code: '0',
        label: '具体金额'
      },
      {
        code: '1',
        label: '百分比'
      }
    ]
  },
  {
    type: 'CoopStatementOrderErrorMsgEnum',
    items: [
      {
        code: '0',
        label: '订单金额不一致'
      },
      {
        code: '1',
        label: '订单已对账'
      }
    ]
  },
  {
    type: 'StoreExitStatusEnum',
    items: [
      {
        code: '0',
        label: '新增'
      },
      {
        code: '1',
        label: '待出库'
      },
      {
        code: '2',
        label: '已出库'
      },
      {
        code: '3',
        label: '取消出库'
      }
    ]
  },
  {
    type: 'ApplyOperationEnum',
    items: [
      {
        code: '0',
        label: '保存'
      },
      {
        code: '1',
        label: '提交'
      },
      {
        code: '2',
        label: '发布'
      }
    ]
  },
  {
    type: 'ContractTemplateStatusEnum',
    items: [
      {
        code: 'DRAFT',
        label: 'DRAFT'
      },
      {
        code: 'FORMAL',
        label: 'FORMAL'
      }
    ]
  },
  {
    type: 'TaskSubcategoryTypeEnum',
    items: []
  },
  {
    type: 'BusinessRuleTypeEnum',
    items: [
      {
        code: 'SUPPLIER_AGREEMENT_TEXT_CONFIGURATION',
        label: '供应商协议文本配置'
      }
    ]
  },
  {
    type: 'SearchMappingTypeEnum',
    items: [
      {
        code: '0',
        label: '品牌'
      },
      {
        code: '1',
        label: '分类'
      },
      {
        code: '2',
        label: '供应商'
      },
      {
        code: '3',
        label: '合作电商'
      },
      {
        code: '4',
        label: '公司地址信息'
      },
      {
        code: '5',
        label: '公司行业'
      }
    ]
  },
  {
    type: 'IdTypeEnum',
    items: [
      {
        code: 'CRED_PSN_CH_IDCARD',
        label: ' 中国大陆身份证'
      },
      {
        code: 'CRED_PSN_CH_TWCARD',
        label: ' 台湾来往大陆通行证'
      },
      {
        code: 'CRED_PSN_CH_MACAO',
        label: ' 澳门来往大陆通行证'
      },
      {
        code: 'CRED_PSN_CH_HONGKONG',
        label: ' 香港来往大陆通行证'
      },
      {
        code: 'CRED_PSN_PASSPORT',
        label: ' 护照'
      }
    ]
  },
  {
    type: 'ApplyConditionTypeEnum',
    items: [
      {
        code: '0',
        label: '不限'
      },
      {
        code: '1',
        label: '限制'
      }
    ]
  },
  {
    type: 'InvoiceRelationTypeEnum',
    items: [
      {
        code: '0',
        label: '采购商会员费开票'
      },
      {
        code: '1',
        label: '平台会员费开票'
      },
      {
        code: '2',
        label: '平台推广账户开票'
      }
    ]
  },
  {
    type: 'ApproveBusinessTypeEnum',
    items: [
      {
        code: 'PROCUREMENT_BUDGET',
        label: '采购预算审核'
      },
      {
        code: 'PROCUREMENT_PLAN',
        label: '采购需求审核'
      },
      {
        code: 'PROCUREMENT_APPLY',
        label: '采购申请审核'
      },
      {
        code: 'PROCUREMENT_CONSULT',
        label: '采购咨询审核'
      },
      {
        code: 'PROCUREMENT_ORDER',
        label: '采购订单审核'
      },
      {
        code: 'STATEMENT',
        label: '对账单审核'
      },
      {
        code: 'COOP_STATEMENT',
        label: '合作商对账单审核'
      },
      {
        code: 'NEED_PAY',
        label: '应付审核'
      },
      {
        code: 'PROCUREMENT_CONTRACT',
        label: '采购合同审核'
      },
      {
        code: 'COLLATION',
        label: '领用审核'
      },
      {
        code: 'STORE_CHECK',
        label: '库存盘点审核'
      },
      {
        code: 'PROTOCOL',
        label: '协议审核'
      },
      {
        code: 'SUPPLIER_MEMBER_APPLY',
        label: '供应商会员审核'
      },
      {
        code: 'SALES_ORDER',
        label: '销售订单审核'
      },
      {
        code: 'SALES_CONTRACT',
        label: '销售合同审核'
      },
      {
        code: 'SALES_PROTOCOL',
        label: '协议审核'
      },
      {
        code: 'SALES_SPU_ON',
        label: '销售商品上架审核'
      }
    ]
  },
  {
    type: 'RequisitionDetailsStatusEnum',
    items: [
      {
        code: '0',
        label: '待领用'
      },
      {
        code: '1',
        label: '已领用'
      },
      {
        code: '2',
        label: '已取消'
      }
    ]
  },
  {
    type: 'BusinessStatusEnum',
    items: [
      {
        code: '0',
        label: '待报价'
      },
      {
        code: '1',
        label: '已报价'
      },
      {
        code: '2',
        label: '二轮待报价'
      },
      {
        code: '3',
        label: '二轮已报价'
      },
      {
        code: '4',
        label: '三轮待报价'
      },
      {
        code: '5',
        label: '三轮已报价'
      },
      {
        code: '6',
        label: '生成订单'
      },
      {
        code: '7',
        label: '未成交'
      },
      {
        code: '8',
        label: '已失效'
      },
      {
        code: '9',
        label: '放弃'
      },
      {
        code: '10',
        label: '待支付'
      },
      {
        code: '11',
        label: '未支付失效'
      }
    ]
  },
  {
    type: 'SealStyleEnum',
    items: [
      {
        code: 'CIRCLE_STAR',
        label: '圆形章-五角星'
      },
      {
        code: 'ELLIPSE',
        label: '椭圆章'
      },
      {
        code: 'CIRCLE',
        label: '圆形章-不带五角星'
      },
      {
        code: 'SQUARE_HORIZONTAL',
        label: '方形横排'
      },
      {
        code: 'SQUARE_VERTICAL',
        label: '方形竖排'
      }
    ]
  },
  {
    type: 'DataDescribeEnum',
    items: [
      {
        code: 'REASONS',
        label: '在商机管理中对无需跟进的商机进行操作放弃，放弃的时候选择放弃的原因。'
      },
      {
        code: 'PAY_WAY',
        label: '维护公司常用付款方式，便于发起采购时直接选择。'
      }
    ]
  },
  {
    type: 'UserGenderEnum',
    items: [
      {
        code: '0',
        label: '女'
      },
      {
        code: '1',
        label: '男'
      },
      {
        code: '2',
        label: '未知'
      }
    ]
  },
  {
    type: 'GoodTypeEnum',
    items: [
      {
        code: '0',
        label: '物资'
      },
      {
        code: '1',
        label: '工程'
      },
      {
        code: '2',
        label: '服务'
      }
    ]
  },
  {
    type: 'ScopeOfEnum',
    items: [
      {
        code: 'SOPA',
        label: 'SOPA'
      },
      {
        code: 'SASD',
        label: 'SASD'
      },
      {
        code: 'XUAS',
        label: 'XUAS'
      },
      {
        code: 'JD_1',
        label: 'JD_1'
      },
      {
        code: 'JD_2',
        label: 'JD_2'
      },
      {
        code: 'JD_3',
        label: 'JD_3'
      },
      {
        code: 'JD_4',
        label: 'JD_4'
      },
      {
        code: 'MON_1',
        label: 'MON_1'
      },
      {
        code: 'MON_2',
        label: 'MON_2'
      },
      {
        code: 'MON_3',
        label: 'MON_3'
      },
      {
        code: 'MON_4',
        label: 'MON_4'
      },
      {
        code: 'MON_5',
        label: 'MON_5'
      },
      {
        code: 'MON_6',
        label: 'MON_6'
      },
      {
        code: 'MON_7',
        label: 'MON_7'
      },
      {
        code: 'MON_8',
        label: 'MON_8'
      },
      {
        code: 'MON_9',
        label: 'MON_9'
      },
      {
        code: 'MON_10',
        label: 'MON_10'
      },
      {
        code: 'MON_11',
        label: 'MON_11'
      },
      {
        code: 'MON_12',
        label: 'MON_12'
      }
    ]
  },
  {
    type: 'SetPasswordOrNotEnum',
    items: [
      {
        code: '2',
        label: '已设置'
      },
      {
        code: '1',
        label: '未设置'
      }
    ]
  },
  {
    type: 'MemberGradeEnum',
    items: [
      {
        code: '0',
        label: '免费会员'
      },
      {
        code: '1',
        label: '付费会员 '
      }
    ]
  },
  {
    type: 'InvoiceOpenReceiveStatusEnum',
    items: [
      {
        code: '0',
        label: '待收/开票'
      },
      {
        code: '1',
        label: '已开票'
      },
      {
        code: '2',
        label: '收票中'
      },
      {
        code: '3',
        label: '已收票'
      },
      {
        code: '4',
        label: '开票中'
      }
    ]
  },
  {
    type: 'ApplyClueTabEnum',
    items: [
      {
        code: '0',
        label: '待处理'
      },
      {
        code: '1',
        label: '已转商机'
      },
      {
        code: '2',
        label: '已放弃'
      },
      {
        code: '3',
        label: '更多'
      },
      {
        code: '4',
        label: '已结束'
      },
      {
        code: '5',
        label: '看过我的'
      }
    ]
  },
  {
    type: 'TabPageEnum',
    items: [
      {
        code: '0',
        label: '我的客户'
      },
      {
        code: '1',
        label: '申请审核'
      },
      {
        code: '2',
        label: '邀请记录'
      },
      {
        code: '3',
        label: '黑名单'
      },
      {
        code: '4',
        label: '历史'
      }
    ]
  },
  {
    type: 'CommonStatusEnum',
    items: [
      {
        code: '0',
        label: '否'
      },
      {
        code: '1',
        label: '是'
      }
    ]
  },
  {
    type: 'CoopStatusEnum',
    items: [
      {
        code: '0',
        label: '预开通'
      },
      {
        code: '1',
        label: '可用'
      },
      {
        code: '2',
        label: '停用'
      }
    ]
  },
  {
    type: 'OpenBusinessTypeEnum',
    items: [
      {
        code: '0',
        label: '开户'
      }
    ]
  },
  {
    type: 'RecordInvoiceEnum',
    items: [
      {
        code: '0',
        label: '待收票'
      },
      {
        code: '1',
        label: '已收票'
      }
    ]
  },
  {
    type: 'PayTypeEnum',
    items: [
      {
        code: '0',
        label: '比例'
      },
      {
        code: '1',
        label: '金额'
      }
    ]
  },
  {
    type: 'OrderDataScopeEnum',
    items: [
      {
        code: 'ALL',
        label: '全部数据'
      },
      {
        code: 'INITIATE',
        label: '我发起的'
      }
    ]
  },
  {
    type: 'OrderSupplierStatusEnum',
    items: [
      {
        code: 'WAIT_COMMIT',
        label: '待确认'
      },
      {
        code: 'WAIT_PAY',
        label: '待支付'
      },
      {
        code: 'APPROVING',
        label: '待审核'
      },
      {
        code: 'CONFIRMED',
        label: '已确认'
      },
      {
        code: 'REJECTED',
        label: '已拒绝'
      },
      {
        code: 'REVOKED',
        label: '审核已撤销'
      },
      {
        code: 'REVOKED_ORDER',
        label: '客户已取消'
      }
    ]
  },
  {
    type: 'PromotionCompanyStatusEnum',
    items: [
      {
        code: '0',
        label: '停用'
      },
      {
        code: '1',
        label: '启用'
      }
    ]
  },
  {
    type: 'GradeRelEnum',
    items: [
      {
        code: '0',
        label: '无关系'
      },
      {
        code: '1',
        label: '免费会员'
      },
      {
        code: '2',
        label: '付费会员'
      }
    ]
  },
  {
    type: 'PlatformMallSupplierStatusEnum',
    items: [
      {
        code: '0',
        label: '申请中'
      },
      {
        code: '1',
        label: '生效中'
      },
      {
        code: '2',
        label: '已禁用'
      }
    ]
  },
  {
    type: 'BusinessFeeTypeEnum',
    items: [
      {
        code: '0',
        label: '报价费'
      },
      {
        code: '1',
        label: '服务费'
      }
    ]
  },
  {
    type: 'PromotionUserIdentity',
    items: [
      {
        code: '0',
        label: '推广人'
      },
      {
        code: '1',
        label: '服务顾问'
      },
      {
        code: '2',
        label: '管理员'
      }
    ]
  },
  {
    type: 'ApplyConsultTabEnum',
    items: [
      {
        code: '0',
        label: '待处理'
      },
      {
        code: '1',
        label: '已结束'
      },
      {
        code: '2',
        label: '更多'
      },
      {
        code: '3',
        label: ''
      }
    ]
  },
  {
    type: 'StayInfoStatusEnum',
    items: [
      {
        code: '0',
        label: '待采购'
      },
      {
        code: '1',
        label: '寻源中'
      },
      {
        code: '2',
        label: '已下单'
      }
    ]
  },
  {
    type: 'SupplierAccountStatusEnum',
    items: [
      {
        code: '0',
        label: '待申请'
      },
      {
        code: '1',
        label: '待开票'
      },
      {
        code: '2',
        label: '已开票'
      },
      {
        code: '3',
        label: '-'
      }
    ]
  },
  {
    type: 'OpenContractMemberTypeEnum',
    items: [
      {
        code: '0',
        label: '自主开通'
      },
      {
        code: '1',
        label: '签约开通'
      }
    ]
  },
  {
    type: 'ModuleGroupEnum',
    items: [
      {
        code: '0',
        label: '通用'
      },
      {
        code: '1',
        label: '采购'
      },
      {
        code: '2',
        label: '销售'
      },
      {
        code: '3',
        label: '超管'
      }
    ]
  },
  {
    type: 'PurchaseTypeEnum',
    items: [
      {
        code: '0',
        label: '货物'
      },
      {
        code: '1',
        label: '服务'
      },
      {
        code: '2',
        label: '工程'
      }
    ]
  },
  {
    type: 'ShowTypeEnum',
    items: [
      {
        code: '0',
        label: '仅展示排名'
      },
      {
        code: '1',
        label: '展示排名及最低价'
      }
    ]
  },
  {
    type: 'ApplyModelEnum',
    items: [
      {
        code: '0',
        label: '询价采购'
      },
      {
        code: '1',
        label: '商城采购'
      },
      {
        code: '2',
        label: '竞价采购'
      },
      {
        code: '3',
        label: '咨询采购'
      }
    ]
  },
  {
    type: 'MenuTypeEnum',
    items: [
      {
        code: '0',
        label: '功能菜单'
      },
      {
        code: '1',
        label: '功能页面'
      },
      {
        code: '2',
        label: '按钮'
      }
    ]
  },
  {
    type: 'GradeTypeEnum',
    items: [
      {
        code: '1',
        label: '免费会员'
      },
      {
        code: '2',
        label: '付费会员'
      }
    ]
  },
  {
    type: 'OpenAccountTypeEnum',
    items: [
      {
        code: '0',
        label: '自营类业务交易款'
      },
      {
        code: '1',
        label: '撮合类业务订单服务费'
      },
      {
        code: '2',
        label: '竞价采购类保证金交易款'
      }
    ]
  },
  {
    type: 'TaskMainTypeEnum',
    items: [
      {
        code: 'SYSTEM',
        label: '系统'
      },
      {
        code: 'PURCHASE',
        label: '采购'
      },
      {
        code: 'SELL',
        label: '销售'
      }
    ]
  },
  {
    type: 'ImageCollectStatusEnum',
    items: [
      {
        code: '0',
        label: '未采集'
      },
      {
        code: '1',
        label: '处理中'
      },
      {
        code: '2',
        label: '成功'
      },
      {
        code: '3',
        label: '失败'
      }
    ]
  },
  {
    type: 'OrderTypeEnum',
    items: [
      {
        code: '0',
        label: '自有商城'
      },
      {
        code: '1',
        label: '非商城'
      },
      {
        code: '2',
        label: '三方商城'
      },
      {
        code: '3',
        label: '平台商城'
      },
      {
        code: '4',
        label: '智采精选'
      }
    ]
  },
  {
    type: 'AuditStatusEnum',
    items: [
      {
        code: '0',
        label: '待提交'
      },
      {
        code: '1',
        label: '待审核'
      },
      {
        code: '2',
        label: '通过'
      },
      {
        code: '3',
        label: '不通过'
      },
      {
        code: '4',
        label: '已取消'
      }
    ]
  },
  {
    type: 'PurchaseMethodEnum',
    items: [
      {
        code: '0',
        label: '指定供应商'
      },
      {
        code: '1',
        label: '询价采购'
      },
      {
        code: '2',
        label: '竞价采购'
      },
      {
        code: '3',
        label: '商城采购'
      }
    ]
  },
  {
    type: 'ApplyClientOriginEnum',
    items: [
      {
        code: '0',
        label: '平台'
      },
      {
        code: '1',
        label: '自有'
      },
      {
        code: '2',
        label: '新建'
      },
      {
        code: '3',
        label: '标签过滤'
      }
    ]
  },
  {
    type: 'FeedbackStatusEnum',
    items: [
      {
        code: '2',
        label: '待跟进'
      },
      {
        code: '1',
        label: '已跟进'
      }
    ]
  },
  {
    type: 'ModuleTerminalEnum',
    items: [
      {
        code: '0',
        label: 'COMMON'
      },
      {
        code: '1',
        label: 'WEB'
      },
      {
        code: '2',
        label: 'APP'
      }
    ]
  },
  {
    type: 'WithdrawalTypeEnum',
    items: [
      {
        code: '0',
        label: '接口提现'
      },
      {
        code: '1',
        label: '商户服务系统'
      },
      {
        code: '2',
        label: '自动提现'
      }
    ]
  },
  {
    type: 'OrderOriginEnum',
    items: [
      {
        code: '0',
        label: '新建'
      },
      {
        code: '1',
        label: '申请'
      },
      {
        code: '2',
        label: '计划'
      },
      {
        code: '3',
        label: '商城申请'
      },
      {
        code: '4',
        label: '商城'
      },
      {
        code: '5',
        label: '咨询'
      },
      {
        code: '6',
        label: '平台商城'
      },
      {
        code: '7',
        label: '智采精选'
      }
    ]
  },
  {
    type: 'OrgIdTypeEnum',
    items: [
      {
        code: 'CRED_ORG_USCC',
        label: '统一社会信用代码'
      },
      {
        code: 'CRED_ORG_REGCODE',
        label: '工商注册号'
      }
    ]
  },
  {
    type: 'CertificationTypeEnum',
    items: [
      {
        code: 'USER',
        label: 'USER'
      },
      {
        code: 'ORG',
        label: 'ORG'
      }
    ]
  },
  {
    type: 'PromotionFollowTypeEnum',
    items: [
      {
        code: '0',
        label: '初步洽谈'
      },
      {
        code: '1',
        label: '达成意向'
      },
      {
        code: '2',
        label: '实施中'
      },
      {
        code: '3',
        label: '已正常使用'
      }
    ]
  },
  {
    type: 'ImmediatelySignEnum',
    items: [
      {
        code: '10',
        label: '是'
      },
      {
        code: '20',
        label: '否'
      }
    ]
  },
  {
    type: 'DataDictionaryEnum',
    items: [
      {
        code: 'REASONS',
        label: '放弃原因'
      },
      {
        code: 'PAY_WAY',
        label: '付款方式'
      }
    ]
  },
  {
    type: 'WinStatusEnum',
    items: [
      {
        code: '0',
        label: '未选定'
      },
      {
        code: '1',
        label: '已选部分'
      },
      {
        code: '2',
        label: '已选定'
      }
    ]
  },
  {
    type: 'BusinessRelStatusEnum',
    items: [
      {
        code: '0',
        label: '添加未注册'
      },
      {
        code: '1',
        label: '添加已注册'
      },
      {
        code: '2',
        label: '彼此添加'
      },
      {
        code: '3',
        label: '黑名单'
      },
      {
        code: '4',
        label: '删除'
      }
    ]
  },
  {
    type: 'ApproveNodeStatueEnum',
    items: [
      {
        code: '0',
        label: '待审核'
      },
      {
        code: '1',
        label: '审批通过'
      },
      {
        code: '2',
        label: '审批拒绝'
      },
      {
        code: '3',
        label: '失效'
      }
    ]
  },
  {
    type: 'InvoiceReceiveCodeStatusEnum',
    items: [
      {
        code: '0',
        label: '待收票'
      },
      {
        code: '3',
        label: '已收票'
      },
      {
        code: '2',
        label: '收票中'
      }
    ]
  },
  {
    type: 'OperationResultEnum',
    items: [
      {
        code: '0',
        label: '待审核'
      },
      {
        code: '1',
        label: '已同意'
      },
      {
        code: '2',
        label: '已拒绝'
      },
      {
        code: '3',
        label: '已取消'
      }
    ]
  },
  {
    type: 'DateFormatEnum',
    items: [
      {
        code: 'YEAR',
        label: '年'
      },
      {
        code: 'MONTH',
        label: '月'
      },
      {
        code: 'DAY',
        label: '日'
      }
    ]
  },
  {
    type: 'StoreEnterStatusEnum',
    items: [
      {
        code: '0',
        label: '待入库'
      },
      {
        code: '1',
        label: '已入库'
      }
    ]
  },
  {
    type: 'ApplyDataOriginEnum',
    items: [
      {
        code: '0',
        label: '新建'
      },
      {
        code: '1',
        label: '咨询'
      }
    ]
  },
  {
    type: 'CoopStatementStatusEnum',
    items: [
      {
        code: '0',
        label: '已创建/已申请'
      },
      {
        code: '1',
        label: '审批中'
      },
      {
        code: '2',
        label: '审批通过'
      },
      {
        code: '3',
        label: '已对账/待结算'
      },
      {
        code: '5',
        label: '部分结算'
      },
      {
        code: '6',
        label: '已结算'
      },
      {
        code: '7',
        label: '审批未通过'
      },
      {
        code: '8',
        label: '对账单异常'
      }
    ]
  },
  {
    type: 'ApplyWinStatusEnum',
    items: [
      {
        code: '0',
        label: ''
      },
      {
        code: '1',
        label: '已选部分'
      },
      {
        code: '2',
        label: '已选定'
      }
    ]
  },
  {
    type: 'UploadFileTypeEnum',
    items: [
      {
        code: '0',
        label: '头像'
      },
      {
        code: '1',
        label: '文档'
      }
    ]
  },
  {
    type: 'BillPayWayEnum',
    items: [
      {
        code: '0',
        label: '现金'
      },
      {
        code: '1',
        label: '支票'
      },
      {
        code: '2',
        label: '电汇'
      },
      {
        code: '3',
        label: '对公转账'
      },
      {
        code: '4',
        label: '线上支付'
      }
    ]
  },
  {
    type: 'MsgSubcategoryTypeEnum',
    items: []
  },
  {
    type: 'OrderSupplierDeliveryAuthorityEnum',
    items: [
      {
        code: '0',
        label: '可以发货'
      },
      {
        code: '1',
        label: '请联系管理人员发货'
      }
    ]
  },
  {
    type: 'ApplyRuleModelEnum',
    items: [
      {
        code: '0',
        label: '公开询价'
      },
      {
        code: '1',
        label: '邀请询价'
      },
      {
        code: '2',
        label: '公开竞价'
      },
      {
        code: '3',
        label: '邀请竞价'
      }
    ]
  },
  {
    type: 'CoopStatementOrderStatusEnum',
    items: [
      {
        code: '0',
        label: '对账正常'
      },
      {
        code: '1',
        label: '对账异常'
      }
    ]
  },
  {
    type: 'SupplierPayRecordTypeEnum',
    items: [
      {
        code: '0',
        label: '手动'
      },
      {
        code: '1',
        label: '自动'
      },
      {
        code: '2',
        label: '退款'
      }
    ]
  },
  {
    type: 'ClassifyTypeEnum',
    items: [
      {
        code: '0',
        label: '大'
      },
      {
        code: '1',
        label: '中'
      },
      {
        code: '2',
        label: '小'
      }
    ]
  },
  {
    type: 'PayTimeTypeEnum',
    items: [
      {
        code: '0',
        label: '具体日期'
      },
      {
        code: '1',
        label: '日期范围'
      },
      {
        code: '2',
        label: '工作日范围'
      }
    ]
  },
  {
    type: 'PaySourceEnum',
    items: [
      {
        code: '0',
        label: '账户余额'
      },
      {
        code: '1',
        label: '平台赠送余额'
      },
      {
        code: '2',
        label: '中金支付'
      },
      {
        code: '3',
        label: '平台扣减赠送余额'
      }
    ]
  },
  {
    type: 'CompanyUserTypeEnum',
    items: [
      {
        code: '0',
        label: '个人用户'
      },
      {
        code: '1',
        label: '企业用户'
      },
      {
        code: '2',
        label: '个体工商用户'
      }
    ]
  },
  {
    type: 'PostWayEnum',
    items: [
      {
        code: '0',
        label: '物流配送'
      },
      {
        code: '1',
        label: '自主配送'
      }
    ]
  },
  {
    type: 'ContractFieldTypeEnum',
    items: [
      {
        code: 'SYSTEM',
        label: '系统'
      },
      {
        code: 'CONSUMER',
        label: '自定义'
      }
    ]
  },
  {
    type: 'ApplySupplierStatusEnum',
    items: [
      {
        code: '0',
        label: '平台供应商'
      },
      {
        code: '1',
        label: '自有供应商'
      },
      {
        code: '2',
        label: '报价非供应商'
      }
    ]
  },
  {
    type: 'SolutionVersionEnum',
    items: [
      {
        code: '0',
        label: '敏捷版'
      },
      {
        code: '1',
        label: '标准版'
      },
      {
        code: '2',
        label: '专业版'
      }
    ]
  },
  {
    type: 'ReceiveInvoiceInfoEnum',
    items: [
      {
        code: '0',
        label: '待收票'
      },
      {
        code: '1',
        label: '已收票'
      }
    ]
  },
  {
    type: 'OrderStatementEnum',
    items: [
      {
        code: '0',
        label: '待对账'
      },
      {
        code: '1',
        label: '对账中'
      },
      {
        code: '2',
        label: '已对账'
      }
    ]
  },
  {
    type: 'CorporationScaleEnum',
    items: [
      {
        code: '0',
        label: '大型'
      },
      {
        code: '1',
        label: '中型'
      },
      {
        code: '2',
        label: '小型'
      },
      {
        code: '3',
        label: '微型'
      },
      {
        code: '4',
        label: '其他'
      }
    ]
  },
  {
    type: 'CompanyScaleEnum',
    items: [
      {
        code: '0',
        label: '小于50人'
      },
      {
        code: '1',
        label: '50-99人'
      },
      {
        code: '2',
        label: '100-499人'
      },
      {
        code: '3',
        label: '500-999人'
      },
      {
        code: '4',
        label: '1000-4999人'
      },
      {
        code: '5',
        label: '5000-9999人'
      },
      {
        code: '6',
        label: '10000人以上'
      }
    ]
  },
  {
    type: 'BalanceStatusEnum',
    items: [
      {
        code: '0',
        label: '待结算'
      },
      {
        code: '1',
        label: '已结算'
      },
      {
        code: '2',
        label: '已拒绝'
      }
    ]
  },
  {
    type: 'VersionPlatformEnum',
    items: [
      {
        code: '0',
        label: '安卓'
      },
      {
        code: '1',
        label: 'IOS'
      },
      {
        code: '2',
        label: 'windows'
      },
      {
        code: '3',
        label: 'OS'
      }
    ]
  },
  {
    type: 'BusinessSetDeadlineEnum',
    items: [
      {
        code: '0',
        label: '15分钟'
      },
      {
        code: '1',
        label: '30分钟'
      },
      {
        code: '2',
        label: '60分钟'
      },
      {
        code: '3',
        label: '120分钟'
      },
      {
        code: '4',
        label: '8小时'
      },
      {
        code: '5',
        label: '12小时'
      },
      {
        code: '6',
        label: '24小时'
      },
      {
        code: '7',
        label: '48小时'
      },
      {
        code: '8',
        label: '3天'
      },
      {
        code: '9',
        label: '5天'
      },
      {
        code: '10',
        label: '7天'
      },
      {
        code: '11',
        label: '10天'
      },
      {
        code: '12',
        label: '15天'
      }
    ]
  },
  {
    type: 'WarnStatusEnum',
    items: [
      {
        code: '0',
        label: '未查看'
      },
      {
        code: '1',
        label: '已查看'
      }
    ]
  },
  {
    type: 'PhotocopyTypeEnum',
    items: [
      {
        code: '0',
        label: '开户上传身份影印图片'
      },
      {
        code: '1',
        label: '实名用户补充影印件'
      }
    ]
  },
  {
    type: 'PromotionWithdrawalStatusEnum',
    items: [
      {
        code: '0',
        label: '申请中'
      },
      {
        code: '1',
        label: '已提现'
      },
      {
        code: '2',
        label: '已拒绝'
      }
    ]
  },
  {
    type: 'CoopOrderStatusEnum',
    items: [
      {
        code: '1',
        label: '预占单'
      },
      {
        code: '2',
        label: '即时单'
      }
    ]
  },
  {
    type: 'SalesSettingPermissionEnum',
    items: [
      {
        code: '0',
        label: '可以设置'
      },
      {
        code: '1',
        label: '请联系管理人员'
      },
      {
        code: '2',
        label: '可以使用密码支付支付'
      },
      {
        code: '3',
        label: '余额不足'
      }
    ]
  },
  {
    type: 'IdentityEnum',
    items: [
      {
        code: '0',
        label: '平台所有企业'
      },
      {
        code: '1',
        label: '自有供应商'
      }
    ]
  },
  {
    type: 'ApplyStatusEnum',
    items: [
      {
        code: '0',
        label: '待提交'
      },
      {
        code: '1',
        label: '待审批'
      },
      {
        code: '2',
        label: '已拒绝'
      },
      {
        code: '3',
        label: '已撤销'
      },
      {
        code: '4',
        label: '待报价'
      },
      {
        code: '5',
        label: '报价结束'
      },
      {
        code: '6',
        label: '二轮待报价'
      },
      {
        code: '7',
        label: '二轮报价结束'
      },
      {
        code: '8',
        label: '三轮待报价'
      },
      {
        code: '9',
        label: '三轮报价结束'
      },
      {
        code: '10',
        label: '部分成单'
      },
      {
        code: '11',
        label: '生成订单'
      },
      {
        code: '12',
        label: '已取消'
      },
      {
        code: '13',
        label: ''
      }
    ]
  },
  {
    type: 'FreeGradeLimitEnum',
    items: [
      {
        code: '0',
        label: '不限制'
      },
      {
        code: '1',
        label: '限制'
      }
    ]
  },
  {
    type: 'TaskSmallTypeEnum',
    items: [
      {
        code: 'PURCHASE_PLAN',
        label: '计划审核'
      },
      {
        code: 'PURCHASE_BUDGET',
        label: '预算审核'
      },
      {
        code: 'PURCHASE_APPLY',
        label: '申请审核'
      },
      {
        code: 'PURCHASE_ORDER',
        label: '订单审核'
      },
      {
        code: 'STATEMENT',
        label: '对账审核'
      },
      {
        code: 'NEED_PAY',
        label: '应付审核'
      },
      {
        code: 'PURCHASE_CONTRACT',
        label: '合同审核'
      },
      {
        code: 'PENDING_STORAGE',
        label: '待入库'
      },
      {
        code: 'PURCHASE_APPRAISAL',
        label: '订单评价'
      },
      {
        code: 'PURCHASE_RECONCILIATION',
        label: '对账审核'
      },
      {
        code: 'PENDING_PAYMENT',
        label: '待付款审核'
      },
      {
        code: 'INVOICE_CONFIRM',
        label: '发票确认'
      },
      {
        code: 'SUPPLIER',
        label: '供应商审核'
      },
      {
        code: 'SUPPLIER_APPRAISAL',
        label: '供应商评价'
      },
      {
        code: 'USE',
        label: '领用审核'
      },
      {
        code: 'OUT_STORAGE',
        label: '待出库'
      },
      {
        code: 'USE_CONFIRM',
        label: '领用确认'
      },
      {
        code: 'STORE_CHECK',
        label: '库存盘点'
      },
      {
        code: 'SELL_CLUE_CONFIRM',
        label: '线索确认'
      },
      {
        code: 'SELL_BUSINESS_FOLLOW',
        label: '商机跟进'
      },
      {
        code: 'SELL_ORDER',
        label: '订单审核'
      },
      {
        code: 'SELL_CONTRACT',
        label: '合同审核'
      },
      {
        code: 'SELL_DELIVERED',
        label: '待发货'
      },
      {
        code: 'SELL_SALES',
        label: '售后信息'
      },
      {
        code: 'SELL_RECONCILIATION',
        label: '对账审核'
      },
      {
        code: 'SELL_BILL',
        label: '发票开具'
      },
      {
        code: 'SELL_BACK_CONFIRM',
        label: '回款确认'
      },
      {
        code: 'SELL_CLIENT_APPRAISAL',
        label: '客户评价'
      },
      {
        code: 'GOODS_UP',
        label: '产品上架审核'
      },
      {
        code: 'CLIENT_CONFIRM',
        label: '客户确认'
      }
    ]
  },
  {
    type: 'ProtocolBillingCycleEnum',
    items: [
      {
        code: '0',
        label: '自然月度'
      },
      {
        code: '1',
        label: '半月度'
      },
      {
        code: '2',
        label: '每月指定日期'
      },
      {
        code: '3',
        label: '手动发起'
      }
    ]
  },
  {
    type: 'BillClaimEnum',
    items: [
      {
        code: '0',
        label: '不限制发票类型'
      },
      {
        code: '1',
        label: '增值税专用发票'
      },
      {
        code: '2',
        label: '增值税普通发票'
      }
    ]
  },
  {
    type: 'InvoiceCategoryEnum',
    items: [
      {
        code: '0',
        label: '增值税专用发票'
      },
      {
        code: '1',
        label: '增值税普通发票'
      }
    ]
  },
  {
    type: 'OppositeTypeEnum',
    items: [
      {
        code: '0',
        label: '销售'
      },
      {
        code: '1',
        label: '采购'
      }
    ]
  },
  {
    type: 'DeliverDateModelEnum',
    items: [
      {
        code: '0',
        label: '所有采购项同一时间交付'
      },
      {
        code: '1',
        label: '每类采购项交付时间不同'
      }
    ]
  },
  {
    type: 'AnnexTypeEnum',
    items: [
      {
        code: 'ANNEX',
        label: '附件'
      },
      {
        code: 'STATEMENT',
        label: '对账单'
      },
      {
        code: 'COOP_STATEMENT',
        label: '合作商对账单'
      },
      {
        code: 'MALL_COOP',
        label: '商城合作电商'
      },
      {
        code: 'ORDER',
        label: '订单附件'
      },
      {
        code: 'ORDER_GOODS_DES',
        label: '订单商品说明附件'
      },
      {
        code: 'ORDER_EVALUATION',
        label: '订单商品评价附件'
      },
      {
        code: 'SUPPLIER_ORDER_EVALUATION',
        label: '供应商评价附件'
      },
      {
        code: 'DELIVERY',
        label: '发货附件'
      },
      {
        code: 'OPEN_INVOICE_PDF',
        label: '发票附件'
      },
      {
        code: 'OPEN_INVOICE_OFD',
        label: '发票附件'
      },
      {
        code: 'CONTRACT',
        label: '合同附件'
      },
      {
        code: 'PROTOCOL',
        label: '协议附件'
      }
    ]
  },
  {
    type: 'PaymentRegisterStatusEnum',
    items: [
      {
        code: '0',
        label: '未处理'
      },
      {
        code: '1',
        label: '处理中'
      },
      {
        code: '2',
        label: '成功'
      },
      {
        code: '3',
        label: '失败'
      }
    ]
  },
  {
    type: 'ModuleRequiredFlagEnum',
    items: [
      {
        code: '0',
        label: '非必选'
      },
      {
        code: '1',
        label: '必选'
      },
      {
        code: '2',
        label: '建议选择'
      }
    ]
  },
  {
    type: 'EmployeeStatusEnum',
    items: [
      {
        code: '0',
        label: '离职'
      },
      {
        code: '1',
        label: '在职'
      }
    ]
  },
  {
    type: 'SortTypeEnum',
    items: [
      {
        code: '0',
        label: '生序'
      },
      {
        code: '1',
        label: '降序'
      }
    ]
  },
  {
    type: 'ThirdPayTypeEnum',
    items: [
      {
        code: '0',
        label: '余额支付'
      },
      {
        code: '1',
        label: '支付宝'
      },
      {
        code: '2',
        label: '微信'
      },
      {
        code: '3',
        label: '中金支付'
      }
    ]
  },
  {
    type: 'TimeEnum',
    items: [
      {
        code: 'WHOLE_YEAR',
        label: '整年'
      },
      {
        code: 'FIRST_HALF_OF_THE_YEAR',
        label: '上半年'
      },
      {
        code: 'SECOND_HALF',
        label: '下半年'
      },
      {
        code: 'FIRST_QUARTER',
        label: '第一季度'
      },
      {
        code: 'SECOND_QUARTER',
        label: '第二季度'
      },
      {
        code: 'THIRD_QUARTER',
        label: '第三季度'
      },
      {
        code: 'FOURTH_QUARTER',
        label: '第四季度'
      },
      {
        code: 'JANUARY',
        label: '一月'
      },
      {
        code: 'FEBRUARY',
        label: '二月'
      },
      {
        code: 'MARCH',
        label: '三月'
      },
      {
        code: 'APRIL',
        label: '四月'
      },
      {
        code: 'MAY',
        label: '五月'
      },
      {
        code: 'JUNE',
        label: '六月'
      },
      {
        code: 'JULY',
        label: '七月'
      },
      {
        code: 'AUGUST',
        label: '八月'
      },
      {
        code: 'SEPTEMBER',
        label: '九月'
      },
      {
        code: 'OCTOBER',
        label: '十月'
      },
      {
        code: 'NOVEMBER',
        label: '十一月'
      },
      {
        code: 'DECEMBER',
        label: '十二月'
      }
    ]
  },
  {
    type: 'MallReverseStatusEnum',
    items: [
      {
        code: '0',
        label: '是'
      },
      {
        code: '1',
        label: '否'
      }
    ]
  },
  {
    type: 'SetUpPayWayEnum',
    items: [
      {
        code: '0',
        label: '先发货后付款'
      },
      {
        code: '1',
        label: '先支付后发货'
      }
    ]
  },
  {
    type: 'BusinessOperationEnum',
    items: [
      {
        code: '0',
        label: '转商机'
      },
      {
        code: '1',
        label: '指派'
      },
      {
        code: '2',
        label: '转交'
      },
      {
        code: '3',
        label: '报价'
      },
      {
        code: '4',
        label: '更新报价'
      },
      {
        code: '5',
        label: '放弃'
      }
    ]
  },
  {
    type: 'InvoiceStatusEnum',
    items: [
      {
        code: '0',
        label: '待收票'
      },
      {
        code: '1',
        label: '已收票'
      },
      {
        code: '2',
        label: '已拒绝'
      }
    ]
  },
  {
    type: 'PromotionUserStatusEnum',
    items: [
      {
        code: '1',
        label: '启用'
      },
      {
        code: '0',
        label: '停用'
      }
    ]
  },
  {
    type: 'ApplyConsultStatusEnum',
    items: [
      {
        code: '0',
        label: '未回复'
      },
      {
        code: '1',
        label: '已回复'
      },
      {
        code: '3',
        label: '忽略'
      },
      {
        code: '4',
        label: '已失效'
      }
    ]
  },
  {
    type: 'MallTypeEnum',
    items: [
      {
        code: '0',
        label: '平台商城'
      },
      {
        code: '1',
        label: '智采精选'
      }
    ]
  },
  {
    type: 'BuyItemEnum',
    items: [
      {
        code: '0',
        label: '购买咨询'
      },
      {
        code: '1',
        label: '购买线索'
      },
      {
        code: '2',
        label: '购买会员等级'
      },
      {
        code: '3',
        label: '平台扣减赠送余额'
      },
      {
        code: '4',
        label: '报名费'
      },
      {
        code: '5',
        label: '服务费'
      },
      {
        code: '6',
        label: '浏览记录'
      }
    ]
  },
  {
    type: 'SealTypeEnum',
    items: [
      {
        code: 'PUBLIC',
        label: '公章'
      },
      {
        code: 'CONTRACT',
        label: '合同专用章'
      },
      {
        code: 'FINANCE',
        label: '财务专用章'
      },
      {
        code: 'PERSONNEL',
        label: '人事专用章'
      },
      {
        code: 'COMMON',
        label: '无业务类型(其他)'
      }
    ]
  },
  {
    type: 'RoleTypeEnum',
    items: [
      {
        code: '0',
        label: '普通'
      },
      {
        code: '1',
        label: '默认'
      }
    ]
  },
  {
    type: 'StatusEnum',
    items: [
      {
        code: '0',
        label: '成功'
      },
      {
        code: '1',
        label: '失败'
      },
      {
        code: '2',
        label: '待审核'
      },
      {
        code: '3',
        label: '已退款'
      },
      {
        code: '4',
        label: '已拒绝'
      }
    ]
  },
  {
    type: 'NodeTypeEnum',
    items: [
      {
        code: '0',
        label: '组织'
      },
      {
        code: '1',
        label: '人员'
      }
    ]
  },
  {
    type: 'ApplyOriginEnum',
    items: [
      {
        code: '0',
        label: '待采购项'
      },
      {
        code: '1',
        label: '采购项'
      },
      {
        code: '2',
        label: '新建'
      },
      {
        code: '3',
        label: '购物车'
      },
      {
        code: '4',
        label: '咨询'
      }
    ]
  },
  {
    type: 'RoleScopeEnum',
    items: [
      {
        code: '0',
        label: '本人'
      },
      {
        code: '1',
        label: '主属部门'
      },
      {
        code: '2',
        label: '主属部门及附属部门'
      },
      {
        code: '3',
        label: '本企业(不含下级企业)'
      },
      {
        code: '4',
        label: '本企业(含下级企业)'
      },
      {
        code: '5',
        label: '自定义'
      }
    ]
  },
  {
    type: 'StoreEnterTypeEnum',
    items: [
      {
        code: '0',
        label: '采购入库'
      },
      {
        code: '1',
        label: '调拨入库'
      }
    ]
  },
  {
    type: 'QuotationTypeEnum',
    items: [
      {
        code: '0',
        label: '整单报价'
      },
      {
        code: '1',
        label: '分单报价'
      }
    ]
  },
  {
    type: 'RequisitionStatusEnum',
    items: [
      {
        code: '0',
        label: '草稿'
      },
      {
        code: '1',
        label: '待审核'
      },
      {
        code: '2',
        label: '不通过'
      },
      {
        code: '3',
        label: '已撤回'
      },
      {
        code: '4',
        label: '待领用'
      },
      {
        code: '5',
        label: '已领用'
      },
      {
        code: '6',
        label: '取消领用'
      }
    ]
  },
  {
    type: 'DeliverAddressModelEnum',
    items: [
      {
        code: '0',
        label: '所有采购项同一地点交付'
      },
      {
        code: '1',
        label: '每类采购项交付地点不同'
      }
    ]
  },
  {
    type: 'SupplierAccountRecordStatusEnum',
    items: [
      {
        code: '0',
        label: '成功'
      },
      {
        code: '1',
        label: '失败'
      }
    ]
  },
  {
    type: 'OrderPurchasePermissionsPayableEnum',
    items: [
      {
        code: '0',
        label: '拥有应付权限'
      },
      {
        code: '1',
        label: '未拥有应付权限'
      }
    ]
  },
  {
    type: 'BankCardTypeEnum',
    items: [
      {
        code: '0',
        label: '借记账户'
      },
      {
        code: '1',
        label: '贷记账户'
      }
    ]
  },
  {
    type: 'QuotationTaxRateEnum',
    items: [
      {
        code: '0',
        label: '0%'
      },
      {
        code: '1',
        label: '1%'
      },
      {
        code: '2',
        label: '3%'
      },
      {
        code: '3',
        label: '6%'
      },
      {
        code: '4',
        label: '9%'
      },
      {
        code: '5',
        label: '13%'
      }
    ]
  },
  {
    type: 'PurchaseItemTypeEnum',
    items: [
      {
        code: '0',
        label: '物资'
      },
      {
        code: '1',
        label: '工程'
      },
      {
        code: '2',
        label: '服务'
      }
    ]
  },
  {
    type: 'CoopInvoiceCategoryEnum',
    items: [
      {
        code: '0',
        label: '普通发票'
      },
      {
        code: '1',
        label: '增值税普通发票'
      },
      {
        code: '2',
        label: '增值税专用发票'
      }
    ]
  },
  {
    type: 'AppPayableRegulatorEnum',
    items: [
      {
        code: '0',
        label: '应付订单审批'
      },
      {
        code: '1',
        label: '应付信息'
      },
      {
        code: '2',
        label: '已付记录'
      }
    ]
  },
  {
    type: 'ProtocolStatusEnum',
    items: [
      {
        code: '0',
        label: '草稿'
      },
      {
        code: '1',
        label: '审核中'
      },
      {
        code: '2',
        label: '审核拒绝'
      },
      {
        code: '3',
        label: '待确认'
      },
      {
        code: '4',
        label: '供应商拒绝'
      },
      {
        code: '5',
        label: '已同意'
      },
      {
        code: '6',
        label: '生效中'
      },
      {
        code: '7',
        label: '已失效'
      },
      {
        code: '8',
        label: '作废'
      }
    ]
  },
  {
    type: 'ProtocolDeliveryTimeEnum',
    items: [
      {
        code: '0',
        label: '半小时'
      },
      {
        code: '1',
        label: '1小时'
      },
      {
        code: '2',
        label: '2小时'
      },
      {
        code: '3',
        label: '4小时'
      },
      {
        code: '4',
        label: '8小时'
      },
      {
        code: '5',
        label: '12小时'
      },
      {
        code: '6',
        label: '24小时'
      },
      {
        code: '7',
        label: '次日'
      },
      {
        code: '8',
        label: '2天'
      },
      {
        code: '9',
        label: '3天'
      },
      {
        code: '10',
        label: '4天'
      },
      {
        code: '11',
        label: '5天'
      },
      {
        code: '12',
        label: '6天'
      },
      {
        code: '13',
        label: '7天'
      },
      {
        code: '14',
        label: '根据商品协商'
      }
    ]
  },
  {
    type: 'InvoiceOpenCodeStatusEnum',
    items: [
      {
        code: '0',
        label: '待开票'
      },
      {
        code: '1',
        label: '已开票'
      },
      {
        code: '4',
        label: '开票中'
      }
    ]
  },
  {
    type: 'BillingTypeEnum',
    items: [
      {
        code: '0',
        label: '会员费'
      },
      {
        code: '1',
        label: '账户充值'
      },
      {
        code: '3',
        label: '报价费'
      },
      {
        code: '4',
        label: '服务费'
      }
    ]
  },
  {
    type: 'ChargeStatusEnum',
    items: [
      {
        code: '0',
        label: '待开票'
      },
      {
        code: '1',
        label: '待收款'
      },
      {
        code: '2',
        label: '已结算'
      },
      {
        code: '3',
        label: '已拒绝'
      }
    ]
  },
  {
    type: 'ApplyBusinessTypeEnum',
    items: [
      {
        code: '0',
        label: '采购寻源'
      },
      {
        code: '1',
        label: '采购咨询'
      }
    ]
  },
  {
    type: 'CurrencyTypeEnum',
    items: [
      {
        code: '0',
        label: '人民币'
      },
      {
        code: '1',
        label: '美元'
      },
      {
        code: '2',
        label: '欧元'
      },
      {
        code: '3',
        label: '日元'
      },
      {
        code: '4',
        label: '港币'
      }
    ]
  },
  {
    type: 'ReceiveTypeEnum',
    items: [
      {
        code: '0',
        label: '系统自动'
      },
      {
        code: '1',
        label: '手动'
      }
    ]
  },
  {
    type: 'CustomerStatusEnum',
    items: [
      {
        code: '0',
        label: '添加未注册'
      },
      {
        code: '1',
        label: '添加已注册'
      },
      {
        code: '2',
        label: '彼此添加'
      }
    ]
  },
  {
    type: 'OrgCertificationStateEnum',
    items: [
      {
        code: '0',
        label: '未认证'
      },
      {
        code: '1',
        label: '保存'
      },
      {
        code: '2',
        label: '审核中'
      },
      {
        code: '3',
        label: '审核通过'
      },
      {
        code: '4',
        label: '审核拒绝'
      },
      {
        code: '5',
        label: '认证过期'
      }
    ]
  },
  {
    type: 'StatementStatusEnum',
    items: [
      {
        code: '0',
        label: '审批中'
      },
      {
        code: '1',
        label: '审批未通过'
      },
      {
        code: '2',
        label: '待结算'
      },
      {
        code: '3',
        label: '待确认'
      },
      {
        code: '4',
        label: '已结算'
      }
    ]
  },
  {
    type: 'CertificationStatusEnum',
    items: [
      {
        code: 'NEW',
        label: '未认证'
      },
      {
        code: 'IN_CERTIFICATION',
        label: '认证中'
      },
      {
        code: 'SUCCESS',
        label: '认证成功'
      },
      {
        code: 'FAIL',
        label: '认证失败'
      },
      {
        code: 'EXPIRED',
        label: '认证过期'
      }
    ]
  },
  {
    type: 'ReceiveStatusEnum',
    items: [
      {
        code: '0',
        label: '待收货'
      },
      {
        code: '1',
        label: '已收货'
      }
    ]
  },
  {
    type: 'ProfitSourceEnum',
    items: [
      {
        code: '0',
        label: '会员费'
      },
      {
        code: '1',
        label: '售卖线索'
      },
      {
        code: '2',
        label: '售卖咨询'
      },
      {
        code: '3',
        label: '三方商城采购'
      }
    ]
  },
  {
    type: 'EvaluationStarsEnum',
    items: [
      {
        code: '0',
        label: '零'
      },
      {
        code: '1',
        label: '一颗星'
      },
      {
        code: '2',
        label: '两颗星'
      },
      {
        code: '3',
        label: '三颗星'
      },
      {
        code: '4',
        label: '四颗星'
      },
      {
        code: '5',
        label: '五颗星'
      }
    ]
  },
  {
    type: 'PromotionWithdrawalWayEnum',
    items: [
      {
        code: '0',
        label: '申请提现'
      },
      {
        code: '1',
        label: '超管提现'
      }
    ]
  },
  {
    type: 'BouncedPromptEnum',
    items: [
      {
        code: '0',
        label: '已提示，不再提示'
      },
      {
        code: '1',
        label: '未提示，展示弹窗'
      }
    ]
  },
  {
    type: 'BudgetStatusEnum',
    items: [
      {
        code: '0',
        label: '草稿'
      },
      {
        code: '1',
        label: '待审核'
      },
      {
        code: '2',
        label: '待生效'
      },
      {
        code: '3',
        label: '生效中'
      },
      {
        code: '4',
        label: '已失效'
      },
      {
        code: '5',
        label: '不通过'
      },
      {
        code: '6',
        label: '已取消'
      },
      {
        code: '7',
        label: '已作废'
      }
    ]
  },
  {
    type: 'ItemSourceEnum',
    items: [
      {
        code: '0',
        label: '自建'
      },
      {
        code: '1',
        label: '商城'
      }
    ]
  },
  {
    type: 'InventoryStatusEnum',
    items: [
      {
        code: '0',
        label: '已取消'
      },
      {
        code: '1',
        label: '有效'
      }
    ]
  },
  {
    type: 'StageEnum',
    items: [
      {
        code: '0',
        label: '采购申请'
      },
      {
        code: '1',
        label: '采购订单'
      },
      {
        code: '2',
        label: '已开票订单'
      },
      {
        code: '3',
        label: '已收货订单'
      }
    ]
  },
  {
    type: 'ApplyConsultReplyCompanyEnum',
    items: [
      {
        code: '0',
        label: '供应商'
      },
      {
        code: '1',
        label: '采购方'
      }
    ]
  },
  {
    type: 'UserCertificationStateEnum',
    items: [
      {
        code: '0',
        label: '未认证'
      },
      {
        code: '1',
        label: '已认证'
      }
    ]
  },
  {
    type: 'ProtocolSignerTypeEnum',
    items: [
      {
        code: '10',
        label: '企业法人（企业）'
      },
      {
        code: '20',
        label: '经办人（企业）'
      },
      {
        code: '30',
        label: '个体工商户自身 （个体）'
      },
      {
        code: '40',
        label: '个人小微商户'
      }
    ]
  },
  {
    type: 'SpuChooseStatusEnum',
    items: [
      {
        code: '0',
        label: '待选'
      },
      {
        code: '1',
        label: '已选'
      },
      {
        code: '2',
        label: '弃选'
      }
    ]
  },
  {
    type: 'ConditionTypeEnum',
    items: [
      {
        code: 'organizer',
        label: '发起人'
      },
      {
        code: 'amount',
        label: '金额（元）'
      },
      {
        code: 'purchase_origin',
        label: '采购来源'
      }
    ]
  },
  {
    type: 'MethodOfPaymentEnum',
    items: [
      {
        code: '0',
        label: '企业网银支付'
      },
      {
        code: '1',
        label: '推广账户余额支付'
      }
    ]
  },
  {
    type: 'PaymentTypeEnum',
    items: [
      {
        code: '0',
        label: '购买咨询'
      },
      {
        code: '1',
        label: '购买线索'
      },
      {
        code: '2',
        label: '购买会员等级'
      }
    ]
  }
]
