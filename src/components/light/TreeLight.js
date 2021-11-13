import React from 'react'
import TreeCard from './TreeCard'
import { deepClone } from '../../utils/tools'
import { treeData1, treeData2 } from './data'

let treeData = treeData2

export default function TreeLight() {
  //查找行列值和position值一致的元素
  const findTreeNode = ({ treeData, positon }) => {
    let result
    const find = (arr, parentId = '') => {
      for (let i = 0; i < arr.length; i++) {
        if (
          positon.rolIndex === arr[i].positon.rolIndex &&
          positon.colIndex === arr[i].positon.colIndex
        ) {
          result = arr[i]
        }
        if (Array.isArray(arr[i].children) && arr[i].children.length > 0) {
          find(arr[i].children, `${parentId}${i + 1}`)
        }
      }
    }
    const treeDataCopy = deepClone(treeData)
    find(treeDataCopy)
    return result
  }

  //根据树结构判断是否应该渲染TreeCard组件
  const renderTreeCard = ({ rolIndex, colIndex }) => {
    const result = findTreeNode({
      treeData,
      positon: { rolIndex, colIndex },
    })
    if (result) {
      return (
        <TreeCard title={result.name} color={result.color}>
          {result.content}
        </TreeCard>
      )
    } else {
      return null
    }
  }

  //基础网格
  const getDom = () => {
    const dataArr = []
    //20行， 10列
    for (let i = 0; i < 20; i++) {
      let dataRow = []
      for (let j = 0; j < 10; j++) {
        dataRow.push({
          row: i,
          col: j,
        })
      }
      dataArr.push(dataRow)
    }
    return (
      <>
        {dataArr.map((colList, rolIndex) => (
          <div className="m-tree-row" key={rolIndex}>
            {colList.map((item, colIndex) => (
              <div key={`${rolIndex}-${colIndex}`} className="m-tree-col">
                {renderTreeCard({ rolIndex, colIndex })}
              </div>
            ))}
          </div>
        ))}
      </>
    )
  }

  return (
    <div className="m-tree-wrap">
      <div className="m-tree-row">{getDom()}</div>
    </div>
  )
}
