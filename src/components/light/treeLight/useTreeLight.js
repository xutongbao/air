import { deepClone } from '../../../utils/tools'

export default function useTreeLight({ dataSource }) {
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

  //添加position
  const handleAddPosition = ({ treeDataSource }) => {
    //rolIndex计算方式：孩子节点rolIndex = 父节点rolIndex + 2
    //colIndex计算方式：
    //(1)startColIndex标识起始位置，
    //(2)如果是第一个节点，需要加上一个levelMove偏移量，这个levelMove偏移量是
    //根据该节点的children计算出来的，和最大层节点数有关
    //(3)如果不是第一个节点，除了和levelMove偏移量有关外，和紧邻的上一个兄弟节点的位置也有关，
    //和紧邻的上一个兄弟节点的levelMove也有关，
    const setPosition = (arr, { rolIndex, startColIndex, isRoot }) => {
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
        } else if (i > 0 && arr[i - 1].position) {
          fatherColIndex =
            arr[i - 1].position.colIndex +
            2 +
            arr[i - 1].position.levelMove +
            levelMove
        }
        arr[i].position = {
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
          setPosition(arr[i].children, {
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
    setPosition(treeDataSourceCopy, {
      rolIndex: -1,
      startColIndex: 2,
      isRoot: true,
    })
    //找出最小的colIndex
    //平移这个树

    return treeDataSourceCopy
  }

  //添加lines
  const handleAddLines = ({ treeDataSource }) => {
    const setLines = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        const rolIndex = arr[i].position.rolIndex + 1
        arr[i].lines = []

        if (Array.isArray(arr[i].children) && arr[i].children.length > 0) {
          const fatherColIndex = arr[i].position.colIndex
          const childrenColIndexArr = arr[i].children.map(
            (item) => item.position.colIndex
          )

          for (
            let j = arr[i].children[0].position.colIndex;
            j < arr[i].children[arr[i].children.length - 1].position.colIndex;
            j++
          ) {
            //设置不合孩子节点及父节点在同一列的lineType
            if (!childrenColIndexArr.includes(j) && j !== fatherColIndex) {
              arr[i].lines.push({
                rolIndex,
                colIndex: j,
                lineType: [2, 4],
              })
            }
            //设置父节点正下方的lineType
            if (!childrenColIndexArr.includes(j) && j === fatherColIndex) {
              if (arr[i].children.length > 1) {
                arr[i].lines.push({
                  rolIndex,
                  colIndex: j,
                  lineType: [1, 2, 4],
                })
              }
            }
          }

          //设置孩子节点正上方的lineType
          for (let j = 0; j < arr[i].children.length; j++) {
            const tempColIndex = arr[i].children[j].position.colIndex
            if (tempColIndex < fatherColIndex && j === 0) {
              arr[i].lines.push({
                rolIndex,
                colIndex: tempColIndex,
                lineType: [2, 3],
              })
            } else if (
              tempColIndex > fatherColIndex &&
              j === arr[i].children.length - 1
            ) {
              arr[i].lines.push({
                rolIndex,
                colIndex: tempColIndex,
                lineType: [4, 3],
              })
            } else if (
              arr[i].children.length === 1 &&
              fatherColIndex === tempColIndex
            ) {
              arr[i].lines.push({
                rolIndex,
                colIndex: tempColIndex,
                lineType: [1, 3],
              })
            } else if (
              arr[i].children.length > 1 &&
              fatherColIndex === tempColIndex
            ) {
              arr[i].lines.push({
                rolIndex,
                colIndex: tempColIndex,
                lineType: [1, 2, 3, 4],
              })
            } else if (
              arr[i].children.length > 1 &&
              fatherColIndex > tempColIndex &&
              j !== 0
            ) {
              arr[i].lines.push({
                rolIndex,
                colIndex: tempColIndex,
                lineType: [2, 3, 4],
              })
            } else if (
              arr[i].children.length > 1 &&
              fatherColIndex < tempColIndex &&
              j !== arr[i].children.length - 1
            ) {
              arr[i].lines.push({
                rolIndex,
                colIndex: tempColIndex,
                lineType: [2, 3, 4],
              })
            }
          }

          setLines(arr[i].children)
        }
      }
    }
    const treeDataSourceCopy = deepClone(treeDataSource)
    setLines(treeDataSourceCopy)
    return treeDataSourceCopy
  }

  //求树坐标的边界值
  const getTreeBoundary = ({ treeDataSource }) => {
    let rolIndexArr = []
    let colIndexArr = []
    const find = (arr, level = 0) => {
      for (let i = 0; i < arr.length; i++) {
        rolIndexArr.push(arr[i].position.rolIndex)
        colIndexArr.push(arr[i].position.colIndex)
        if (Array.isArray(arr[i].children) && arr[i].children.length > 0) {
          find(arr[i].children, level + 1)
        }
      }
    }
    const treeDataSourceCopy = deepClone(treeDataSource)
    find(treeDataSourceCopy)

    
    rolIndexArr.sort((a, b) => a - b)
    colIndexArr.sort((a, b) => a - b)
    return {
      rolIndexStart: rolIndexArr[0],
      rolIndexEnd: rolIndexArr[rolIndexArr.length - 1],
      colIndexStart: colIndexArr[0],
      colIndexEnd: colIndexArr[colIndexArr.length - 1]
    }
  }

  //切换数据源
  let treeDataResult
  let treeDataSource = dataSource
  let treeBoundary = {}
  if (Array.isArray(treeDataSource) && treeDataSource.length > 0) {
    treeDataResult = handleAddPosition({ treeDataSource })
    treeDataResult = handleAddLines({ treeDataSource: treeDataResult })
    treeBoundary = getTreeBoundary({ treeDataSource: treeDataResult })
  }

  //切换真正用于渲染的treeData
  let treeData = treeDataResult ? treeDataResult : treeDataSource
  return {
    treeData,
    treeBoundary
  }
}
