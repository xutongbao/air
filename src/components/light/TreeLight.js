import React from 'react'
import TreeCard from './TreeCard'
import { deepClone } from '../../utils/tools'
import { treeData1, treeData2, treeData3, treeData4 } from './data'

export default function TreeLight(props) {
  const { dataSource, onAddChild } = props
  //如何添加position
  const handleAddPositon = ({ treeDataSource }) => {
    //rolIndex计算方式：孩子节点rolIndex = 父节点rolIndex + 2
    //colIndex计算方式：
    //(1)只有一个孩子时： 孩子colIndex = 父节点colIndex
    //(2)有两个孩子时：第1个孩子colIndex = 父节点colIndex - 1; 第2个孩子colIndex = 父节点colIndex + 1;
    const setPositon = (arr, { rolIndex, childColIndexArr }) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i].positon = {
          rolIndex: rolIndex + 2,
          colIndex: childColIndexArr[i],
        }
        if (Array.isArray(arr[i].children) && arr[i].children.length > 0) {
          let tempChildColIndexArr = []
          let childrenLength = arr[i].children.length
          //奇数偶数处理方式不同
          let startColIndex
          if (childrenLength % 2 === 1) {
            startColIndex = childColIndexArr[i] - ((childrenLength - 1) / 2) * 2
          } else {
            startColIndex =
              childColIndexArr[i] - ((childrenLength - 2) / 2) * 2 - 1
          }
          for (let i = 0; i < childrenLength; i++) {
            tempChildColIndexArr.push(startColIndex + i * 2)
          }

          // if (childrenLength === 1) {
          //   tempChildColIndexArr = [childColIndexArr[i]]
          // } else if (arr[i].children.length === 2) {
          //   tempChildColIndexArr = [childColIndexArr[i] - 1, childColIndexArr[i] + 1]
          // } else if (arr[i].children.length === 3) {
          //   tempChildColIndexArr = [childColIndexArr[i] - 2, childColIndexArr[i], childColIndexArr[i] + 2]
          // } else if (arr[i].children.length === 4) {
          //   tempChildColIndexArr = [childColIndexArr[i] - 3, childColIndexArr[i] - 1, childColIndexArr[i] + 1, childColIndexArr[i] + 3]
          // }
          setPositon(arr[i].children, {
            rolIndex: rolIndex + 2,
            childColIndexArr: tempChildColIndexArr,
          })
        }
      }
    }
    const treeDataSourceCopy = deepClone(treeDataSource)
    //起始行数： -1 + 2 = 1
    //起始列： 2
    //初步设置position
    setPositon(treeDataSourceCopy, { rolIndex: -1, childColIndexArr: [6] })
    //找出最小的colIndex
    //平移这个树

    return treeDataSourceCopy
  }

  //切换数据源
  let treeDataResult
  //let treeDataSource = treeData4
  let treeDataSource = dataSource
  treeDataResult = handleAddPositon({ treeDataSource })

  //打印添加position后的tree
  console.log(treeDataResult)
  //切换真正用于渲染的treeData
  let treeData = treeDataResult ? treeDataResult : treeDataSource

  //查找行列值和position值一致的元素
  const findTreeNode = ({ treeData, positon }) => {
    let result
    const setPositon = (arr, parentId = '') => {
      for (let i = 0; i < arr.length; i++) {
        if (
          positon.rolIndex === arr[i].positon.rolIndex &&
          positon.colIndex === arr[i].positon.colIndex
        ) {
          result = arr[i]
        }
        if (Array.isArray(arr[i].children) && arr[i].children.length > 0) {
          setPositon(arr[i].children, `${parentId}${i + 1}`)
        }
      }
    }
    const treeDataCopy = deepClone(treeData)
    setPositon(treeDataCopy)
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
        <TreeCard title={result.name} color={result.color} item={result} onAddChild={onAddChild} >
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
