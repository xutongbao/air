import React from 'react'
import TreeCard from './TreeCard'
import { deepClone } from '../../utils/tools'
import { treeData1, treeData2, treeData3, treeData4 } from './data'

export default function TreeLight(props) {
  const { dataSource, onAddChild, onDelete, onEdit } = props

  //统计一个棵树各层的元素的个数，并求出最大值
  const getMaxTreeLevelNodeCount = ({ treeDataSource }) => {
    let levelObj = {}
    const find = (arr, level = 0) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i].level = level
        levelObj[level] = levelObj[level] ? levelObj[level] + 1 : 1
        if (Array.isArray(arr[i].children) && arr[i].children.length > 0) {
          find(arr[i].children, level + 1)
        }
      }
    }
    const treeDataSourceCopy = deepClone(treeDataSource)
    find(treeDataSourceCopy)

    let levelCountArr = []
    for (let key in levelObj) {
      levelCountArr.push(levelObj[key])
    }
    let maxLevelCount = 0
    if (Array.isArray(levelCountArr) && levelCountArr.length > 0) {
      maxLevelCount = Math.max.apply(null, levelCountArr)
    }

    return maxLevelCount
  }

  // const count = getMaxTreeLevelNodeCount({ treeDataSource: dataSource })
  // console.log(count)

  //如何添加position
  const handleAddPositon = ({ treeDataSource }) => {
    //rolIndex计算方式：孩子节点rolIndex = 父节点rolIndex + 2
    //colIndex计算方式：
    //(1)startColIndex标识起始位置，
    //(2)如果是第一个节点，需要加上一个levelMove偏移量，这个levelMove偏移量是
    //根据该节点的children计算出来的，和最大层节点数有关
    //(3)如果不是第一个节点，除了和levelMove偏移量有关外，和紧邻的上一个兄弟节点的位置也有关，
    //和紧邻的上一个兄弟节点的levelMove也有关，
    const setPositon = (arr, { rolIndex, startColIndex, isRoot }) => {
      for (let i = 0; i < arr.length; i++) {
        const maxTreeLevelNodeCount = getMaxTreeLevelNodeCount({
          treeDataSource: [arr[i]],
        })
        let levelMove = 0
        if (maxTreeLevelNodeCount % 2 === 0) {
          levelMove = ((maxTreeLevelNodeCount - 2) / 2) * 2 + 1
        } else {
          levelMove = ((maxTreeLevelNodeCount - 1) / 2) * 2
        }
        let fatherColIndex
        if (i === 0) {
          fatherColIndex = startColIndex + (isRoot ? levelMove : 0)
        } else if (i > 0 && arr[i - 1].positon) {
          fatherColIndex = arr[i - 1].positon.colIndex + 2 + arr[i - 1].positon.levelMove + levelMove
        }
        arr[i].positon = {
          rolIndex: rolIndex + 2,
          colIndex: fatherColIndex,
          levelMove,
        }
        if (Array.isArray(arr[i].children) && arr[i].children.length > 0) {
          let childrenLength = arr[i].children.length
          //奇数偶数处理方式不同
          let startColIndex

          if (childrenLength % 2 === 1) {
            startColIndex = fatherColIndex - ((childrenLength - 1) / 2) * 2
          } else {
            startColIndex = fatherColIndex - ((childrenLength - 2) / 2) * 2 - 1
          }
          setPositon(arr[i].children, {
            rolIndex: rolIndex + 2,
            startColIndex,
          })
        }
      }
    }
    const treeDataSourceCopy = deepClone(treeDataSource)
    //起始行数： -1 + 2 = 1
    //起始列： 2
    //初步设置position
    setPositon(treeDataSourceCopy, { rolIndex: -1, startColIndex: 2, isRoot: true })
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
  // console.log(treeDataResult)
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
        <TreeCard
          title={result.name}
          color={result.color}
          item={result}
          onAddChild={onAddChild}
          onDelete={onDelete}
          onEdit={onEdit}
        >
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
      for (let j = 0; j < 20; j++) {
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