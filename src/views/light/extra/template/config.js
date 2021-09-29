import { Form, Col, Input, Button } from 'antd'
import { Icon } from '../../../../components/light'
import { renderTime } from '../../../../utils/tools'

//表格列字段
const getColumns = (props) => {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '添加/更新时间',
      dataIndex: 'addtime',
      render: renderTime,
    },
    {
      title: '状态',
      dataIndex: 'isUp',
      render: (text) => {
        let hook = {
          0: {
            title: '下架',
            className: 'no-pass',
          },
          1: {
            title: '上架',
            className: 'pass',
          },
        }
        return (
          <span
            className={`m-check-status ${hook[text] && hook[text].className}`}
          >
            {hook[text] && hook[text].title}
          </span>
        )
      },
    },
    {
      title: '操作',
      //width: 220,
      render: (record) => {
        return (
          <div className="m-action">
            <Button
              className="m-action-btn"
              size="small"
              danger
              onClick={() => props.onDelete(record)}
            >
              删除
            </Button>
            <Button
              className="m-action-btn"
              size="small"
              onClick={() => props.onCheck(record)}
            >
              查看
            </Button>
            <Button
              className="m-action-btn"
              size="small"
              onClick={() => props.onEdit(record)}
            >
              编辑
            </Button>
            {record.isUp ? (
              <Button
                className="m-action-btn forbidden"
                size="small"
                onClick={() => props.onAction({ type: 'up', record })}
              >
                下架
              </Button>
            ) : (
              <Button
                className="m-action-btn open"
                size="small"
                onClick={() => props.onAction({ type: 'up', record })}
              >
                上架
              </Button>
            )}
            {record.bdAuditStatus === 0 && (
              <Button
                className="m-action-btn"
                size="small"
                onClick={() => props.onAction({ type: 'check', record })}
              >
                百度审核
              </Button>
            )}
            {record.bdAuditStatus !== 0 && (
              <>
                <Button
                  className="m-action-btn"
                  size="small"
                  onClick={() => props.onAction({ type: 'reset', record })}
                >
                  百度更新
                </Button>
                <Button
                  className="m-action-btn"
                  size="small"
                  onClick={() => props.onAction({ type: 'view', record })}
                >
                  百度查看
                </Button>
              </>
            )}
          </div>
        )
      },
    },
  ]
}

//搜索字段
const getSearchFields = (isExpand) => {
  // eslint-disable-next-line
  const expandClassname = `m-table-serach ${isExpand ? 'active' : ''}`
  const span = 6
  return (
    <>
      <Col span={span}>
        <Form.Item name="searchName" label="名称">
          <Input placeholder="名称" />
        </Form.Item>
      </Col>
    </>
  )
}

//添加编辑查看对话框表单字段
const getModalFields = () => {
  return (
    <>
      <Form.Item
        label="名称"
        name="name"
        rules={[
          {
            required: true,
            message: '请输入名称！',
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  )
}

//Tool组件里的按钮
const getToolBtnList = ({ onOperate, myAuthObj }) => {
  return (
    <>
      <div className="m-content-tool-row">
        {myAuthObj.btn && (
          <Button
            className="m-space"
            type="primary"
            onClick={() => onOperate({ type: 0 })}
          >
            <Icon name="correct" className="m-tool-btn-icon"></Icon>
            按钮
          </Button>
        )}
      </div>
    </>
  )
}

export { getColumns, getSearchFields, getModalFields, getToolBtnList }
