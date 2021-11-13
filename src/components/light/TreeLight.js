import React from 'react'
import { Row, Col } from 'antd'

export default function TreeLight() {
  const treeData = [
    {
      name: '申请人',
      belongCategory: '0',
      status: true,
      id: 1622771045562,
      children: [
        {
          name: '审批人',
          belongCategory: 1622771045562,
          status: false,
          id: 1622771052842,
          children: [
            {
              name: '抄送人',
              belongCategory: 1622771052842,
              status: false,
              id: 1636424256035,
            },
          ],
        },
      ],
    },
  ]
  const getDom = () => {
    const dataArr = []
    for (let i = 0; i < 10; i++) {
      let dataRow = []
      for (let j = 0; j < 10; j++) {
        dataRow.push({
          row: i,
          col: j,
        })
      }
      dataArr.push(dataRow)
    }
    console.log(dataArr)
    // for (let i = 0; i < 10; i++) {

    //   colArr.push(
    //     <div key={i} className="m-tree-col">
    //       <div>1</div>
    //     </div>
    //   )
    // }
    return (
      <>
        {dataArr.map((colList, rolIndex) => (
          <div className="m-tree-row" key={rolIndex}>
            {colList.map((item, colIndex) => (
              <div key={`${rolIndex}-${colIndex}`} className="m-tree-col">
                {item.row},{item.col}
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
