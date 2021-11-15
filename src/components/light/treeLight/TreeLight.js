import React from 'react'
import TreeCard from './TreeCard'
import { deepClone } from '../../../utils/tools'
// import { treeData1, treeData2, treeData3, treeData4 } from './data'
import TreeLine from './TreeLine'
import useTreeLight from './useTreeLight'

export default function TreeLight(props) {
  const { dataSource, onAddChild, onDelete, onEdit } = props
  //添加position和lines
  const { treeData } = useTreeLight({ dataSource })

  //查找行列值和position值一致的元素
  const findTreeNode = ({ treeData, position }) => {
    let result
    const setPosition = (arr, parentId = '') => {
      for (let i = 0; i < arr.length; i++) {
        if (
          position.rolIndex === arr[i].position.rolIndex &&
          position.colIndex === arr[i].position.colIndex
        ) {
          result = arr[i]
        }
        if (Array.isArray(arr[i].children) && arr[i].children.length > 0) {
          setPosition(arr[i].children, `${parentId}${i + 1}`)
        }
      }
    }
    const treeDataCopy = deepClone(treeData)
    setPosition(treeDataCopy)
    return result
  }

  //查找行列值等于lines数组包含的行列值，对应的type
  const findLineType = ({ treeData, position }) => {
    let result
    const findLineTypeLoop = (arr, parentId = '') => {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i].lines)) {
          const lineItem = arr[i].lines.find(
            (item) =>
              item.rolIndex === position.rolIndex &&
              item.colIndex === position.colIndex
          )
          if (lineItem) {
            result = lineItem.lineType
          }
        }
        if (Array.isArray(arr[i].children) && arr[i].children.length > 0) {
          findLineTypeLoop(arr[i].children, `${parentId}${i + 1}`)
        }
      }
    }
    const treeDataCopy = deepClone(treeData)
    findLineTypeLoop(treeDataCopy)
    return result
  }

  //根据树结构判断是否应该渲染TreeCard组件
  const renderTreeCol = ({ rolIndex, colIndex }) => {
    const treeNode = findTreeNode({
      treeData,
      position: { rolIndex, colIndex },
    })
    const lineType = findLineType({
      treeData,
      position: { rolIndex, colIndex },
    })
    return (
      <>
        {treeNode && (
          <TreeCard
            title={treeNode.name}
            color={treeNode.color}
            item={treeNode}
            onAddChild={onAddChild}
            onDelete={onDelete}
            onEdit={onEdit}
          >
            {treeNode.content}
          </TreeCard>
        )}
        {lineType && <TreeLine lineType={lineType}></TreeLine>}
      </>
    )
  }

  //渲染dom
  const renderDom = () => {
    const dataArr = []
    //20行， 10列
    for (let i = 0; i < 20; i++) {
      let dataRow = []
      for (let j = 0; j < 20; j++) {
        dataRow.push({
          row: i,
          col: j,
        })
      }
      dataArr.push(dataRow)
    }
    const isDev = localStorage.getItem('isDev') === 'true' ? true : false
    return (
      <>
        {dataArr.map((colList, rolIndex) => (
          <div className="m-tree-row" key={rolIndex}>
            {colList.map((item, colIndex) => (
              <div
                key={`${rolIndex}-${colIndex}`}
                className={`m-tree-col ${isDev ? 'active' : ''}`}
              >
                {renderTreeCol({ rolIndex, colIndex })}
              </div>
            ))}
          </div>
        ))}
      </>
    )
  }

  return (
    <div className="m-tree-wrap">
      <div className="m-tree-row">{renderDom()}</div>
    </div>
  )
}
