import React, { useEffect, useState } from 'react'
import TreeCard from './TreeCard'
import { deepClone } from '../../../utils/tools'
// import { treeData1, treeData2, treeData3, treeData4 } from './data'
import TreeLine from './TreeLine'
import useTreeLightList from './useTreeLightList'
let timer
export default function useTreeLight(props) {
  const { dataSource, isToCenter, onAddChild, onDelete, onEdit } = props
  const [scaleValue, setScaleValue] = useState(1)
  //添加position和lines
  const { treeData, treeBoundary, processEndNode, endNodeLines } = useTreeLightList({ dataSource })

  //查找行列值和position值一致的元素
  const findTreeNode = ({ treeData, position }) => {
    let result
    const findTreeNodeLoop = (arr, parentId = '') => {
      for (let i = 0; i < arr.length; i++) {
        if (
          position.rolIndex === arr[i].position.rolIndex &&
          position.colIndex === arr[i].position.colIndex
        ) {
          result = arr[i]
        }
        if (Array.isArray(arr[i].children) && arr[i].children.length > 0) {
          findTreeNodeLoop(arr[i].children, `${parentId}${i + 1}`)
        }
      }
    }
    const treeDataCopy = deepClone(treeData)
    findTreeNodeLoop(treeDataCopy)
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
    const endNodeLine = endNodeLines.find(item => item.rolIndex === rolIndex && item.colIndex === colIndex)
    return (
      <>
        {treeNode && (
          <TreeCard
            title={treeNode.name}
            color={treeNode.color}
            item={treeNode}
            treeNodeContent={treeNode.content}
            onAddChild={onAddChild}
            onDelete={onDelete}
            onEdit={onEdit}
          >
          </TreeCard>
        )}
        {lineType && <TreeLine lineType={lineType}></TreeLine>}
        {processEndNode.rolIndex === rolIndex && processEndNode.colIndex === colIndex && <div className="m-tree-end-node">流程结束</div>}
        {endNodeLine && <TreeLine lineType={endNodeLine.lineType}></TreeLine>}
      </>
    )
  }

  //根节点回到可视区域内
  const handleResetTreeToCenter = () => {
    const treeRoot = document.getElementById('m-tree-root')
    if (treeRoot) {
      treeRoot.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      })
    }
  }

  //调解大小
  const handleScale = (value) => {
    setScaleValue((value / 100).toFixed(2))
    clearTimeout(timer)
    timer = setTimeout(() => {
      handleResetTreeToCenter()
    }, 200)
  }

  useEffect(() => {
    if (isToCenter) {
      handleResetTreeToCenter()
    }
    // eslint-disable-next-line
  }, [isToCenter])

  //渲染dom
  const renderDom = () => {
    const dataArr = []
    const { rolIndexEnd = 10, colIndexEnd = 10 } = treeBoundary
    const rolCount = rolIndexEnd + 6 < 10 ? 10 : rolIndexEnd + 6
    const colCount = colIndexEnd + 2 < 10 ? 10 : colIndexEnd + 2

    for (let i = 0; i < rolCount; i++) {
      let dataRow = []
      for (let j = 0; j < colCount; j++) {
        dataRow.push({
          row: i,
          col: j,
        })
      }
      dataArr.push(dataRow)
    }
    const isDev = localStorage.getItem('isDev') === 'true' ? true : false
    return (
      <div className="m-tree-wrap">
        <div
          className="m-tree-inner"
          style={{ transform: `scale(${scaleValue})` }}
        >
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
        </div>
      </div>
    )
  }

  return {
    getTreeDom: renderDom,
    handleResetTreeToCenter,
    handleScale,
  }
}
