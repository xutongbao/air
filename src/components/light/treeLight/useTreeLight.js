import React, { useEffect } from 'react'
import TreeCard from './TreeCard'
import { deepClone } from '../../../utils/tools'
// import { treeData1, treeData2, treeData3, treeData4 } from './data'
import TreeLine from './TreeLine'
import useTreeLightList from './useTreeLightList'

export default function useTreeLight(props) {
  const { dataSource, onAddChild, onDelete, onEdit } = props
  //添加position和lines
  const { treeData, treeBoundary } = useTreeLightList({ dataSource })

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

  useEffect(() => {
    handleResetTreeToCenter()
    // eslint-disable-next-line
  }, [dataSource])

  //渲染dom
  const renderDom = () => {
    const dataArr = []
    const { rolIndexEnd = 10, colIndexEnd = 10 } = treeBoundary
    console.log('s', rolIndexEnd, colIndexEnd)
    const rolCount = rolIndexEnd + 6 < 10 ? 10 : rolIndexEnd + 6
    const colCount = colIndexEnd + 2 < 10 ? 10 : colIndexEnd + 2
    console.log('r', rolCount, colCount)

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
        <div className="m-tree-row">
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
  }
}
