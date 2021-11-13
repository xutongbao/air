import React from 'react'
import TreeCard from './TreeCard'
import { deepClone } from '../../utils/tools'

export default function TreeLight() {
  const treeData = [
    {
      name: '申请人',
      content: '商之讯',
      belongCategory: '0',
      status: true,
      id: 1622771045562,
      color: 'blue',
      positon: {
        rolIndex: 1,
        colIndex: 2,
      },
      children: [
        {
          name: '审批人',
          content: '申请人自选 不限范围 多选 依次审批',
          belongCategory: 1622771045562,
          status: false,
          id: 1622771052842,
          color: 'orange',
          positon: {
            rolIndex: 2,
            colIndex: 2,
          },
          children: [
            {
              name: '抄送人',
              content: '申请人自选',
              belongCategory: 1622771052842,
              status: false,
              id: 1636424256035,
              color: 'green',
              positon: {
                rolIndex: 3,
                colIndex: 2,
              },
            },
          ],
        },
      ],
    },
  ]

  //给树状数据添加层级id
  const formatTreeData = ({ treeData }) => {
    const find = (arr, parentId = '') => {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i].children) && arr[i].children.length > 0) {
          arr[i].id = `${parentId}${i + 1}`
          find(arr[i].children, `${parentId}${i + 1}`)
        } else {
          arr[i].id = `${parentId}${i + 1}`
        }
      }
    }
    const treeDataCopy = deepClone(treeData)
    find(treeDataCopy)
    return treeDataCopy
  }

  //查找行列值和position值一致的元素
  const findTreeNode = ({ treeData, positon }) => {
    let result
    const find = (arr, parentId = '') => {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i].children) && arr[i].children.length > 0) {
          if (
            positon.rolIndex === arr[i].positon.rolIndex &&
            positon.colIndex === arr[i].positon.colIndex
          ) {
            result = arr[i]
          }
          find(arr[i].children, `${parentId}${i + 1}`)
        } else {
          if (
            positon.rolIndex === arr[i].positon.rolIndex &&
            positon.colIndex === arr[i].positon.colIndex
          ) {
            result = arr[i]
          }
        }
      }
    }
    const treeDataCopy = deepClone(treeData)
    find(treeDataCopy)
    return result
  }

  const tempTreeData = formatTreeData({ treeData })
  console.log(tempTreeData)

  //根据树结构判断是否应该渲染TreeCard组件
  const renderTreeCard = ({ rolIndex, colIndex }) => {
    const result = findTreeNode({
      treeData: tempTreeData,
      positon: { rolIndex, colIndex },
    })
    console.log(result)
    if (result) {
      return <TreeCard title={result.name} color={result.color}>{result.content}</TreeCard>
    } else {
      return null
    }
  }

  const getDom = () => {
    const dataArr = []
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
