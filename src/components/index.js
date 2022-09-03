//引入弹窗组件
import ElDialogModule from './ElDialogModule.vue'
import ElMessageModule from './ElMessageModule.vue'
//引入svg组件
import svgIcon from './svgIcon/svgIcon.vue'
// 引入Card组件
import CardContainer from './Table/CardContainer.vue'
//引入table相关组件
import TableSearch from './Table/TableSearch.vue'
import NewTableSearch from './Table/NewTableSearch.vue'
import Table from './Table/Table.vue'
import TableCard from './Table/TableCard.vue'
import Pagenation from './Table/Pagenation.vue'
import TableBottom from './Table/TableBottom.vue'
import MoreOperate from './Table/MoreOperate.vue'
import explainDetail from './step/explainDetail.vue'

//引入详情查看组件
import LookDetails from './lookDetails/index.vue'
import Descriptions from './descriptions/index.vue'
import ApprovalProcess from './ProcessPreview/approvalProcessNew.vue' //审批
import ProcessPreview from './ProcessPreview/index.vue'
import TagStyle from './Table/TagStyle.vue'
import FileUpload from './upLoad/fileUpload.vue'
import OperationRecord from './Business/operationRecord.vue'
import BottomDetail from './Table/BottomDetail.vue'
import TableBtn from './Table/tableBtn.vue'
import FakeSelect from '@/components/fakeSelect/index.vue'
//表头
import HeaderTabs from './headerTabs/index.vue'
export default (app) => {
  app
    .component('svg-icon', svgIcon)
    .component('el-dialog-module', ElDialogModule)
    .component('el-message-module', ElMessageModule)
    .component('card-container', CardContainer)
    .component('table-search', TableSearch)
    .component('NewTableSearch', NewTableSearch)
    .component('Table', Table)
    .component('table-card', TableCard)
    .component('Pagenation', Pagenation)
    .component('table-bottom', TableBottom)
    .component('look-details', LookDetails)
    .component('approval-process', ApprovalProcess)
    .component('tag-style', TagStyle)
    .component('FileUpload', FileUpload)
    .component('operation-record', OperationRecord)
    .component('HeaderTabs', HeaderTabs)
    .component('BottomDetail', BottomDetail)
    .component('MoreOperate', MoreOperate)
    .component('ExplainDetail', explainDetail)
    .component('ProcessPreview', ProcessPreview)
    .component('TableBtn', TableBtn)
    .component('FakeSelect', FakeSelect)
    .component('Descriptions', Descriptions)
}
