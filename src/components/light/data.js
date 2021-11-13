//待转化的原始数据
const treeDataSource1 = [
  {
    name: '申请人',
    content: '商之讯',
    belongCategory: '0',
    status: true,
    id: 1622771045562,
    color: 'blue',
    children: [
      {
        name: '审批人',
        content: '申请人自选 不限范围 多选 依次审批',
        belongCategory: 1622771045562,
        status: false,
        id: 1622771052842,
        color: 'orange',
        children: [
          {
            name: '抄送人',
            content: '申请人自选',
            belongCategory: 1622771052842,
            status: false,
            id: 1636424256035,
            color: 'green',
          },
        ],
      },
    ],
  },
]

//待转化的原始数据
const treeDataSource2 = [
  {
    name: '申请人',
    content: '商之讯',
    belongCategory: '0',
    status: true,
    id: 1622771045562,
    color: 'blue',
    children: [
      {
        name: '审批人',
        content: '申请人自选 不限范围 多选 依次审批',
        belongCategory: 1622771045562,
        status: false,
        id: 1622771052842,
        color: 'orange',
        children: [
          {
            name: '抄送人',
            content: '申请人自选',
            belongCategory: 1622771052842,
            status: false,
            id: 1636424256035,
            color: 'green',
          },
        ],
      },
      {
        name: '审批人',
        content: '申请人自选 不限范围 多选 依次审批',
        belongCategory: 1622771045562,
        status: false,
        id: 1622771052842,
        color: 'orange',
        children: [
          {
            name: '抄送人',
            content: '申请人自选',
            belongCategory: 1622771052842,
            status: false,
            id: 1636424256035,
            color: 'green',
          },
        ],
      },
    ],
  },
]

//转化后的数据（一个孩子）
const treeData1 = [
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
          rolIndex: 3,
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
              rolIndex: 5,
              colIndex: 2,
            },
          },
        ],
      },
    ],
  },
]

//转化后的数据（两个孩子）
const treeData2 = [
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
          rolIndex: 3,
          colIndex: 1,
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
              rolIndex: 5,
              colIndex: 1,
            },
          },
        ],
      },
      {
        name: '审批人',
        content: '申请人自选 不限范围 多选 依次审批',
        belongCategory: 1622771045562,
        status: false,
        id: 1622771052842,
        color: 'orange',
        positon: {
          rolIndex: 3,
          colIndex: 3,
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
              rolIndex: 5,
              colIndex: 3,
            },
          },
        ],
      },
    ],
  },
]

//转化后的数据（三个孩子）
const treeData3 = [
  {
    name: '申请人',
    content: '商之讯',
    belongCategory: '0',
    status: true,
    id: 1622771045562,
    color: 'blue',
    positon: {
      rolIndex: 1,
      colIndex: 4,
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
          rolIndex: 3,
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
              rolIndex: 5,
              colIndex: 2,
            },
          },
        ],
      },
      {
        name: '审批人',
        content: '申请人自选 不限范围 多选 依次审批',
        belongCategory: 1622771045562,
        status: false,
        id: 1622771052842,
        color: 'orange',
        positon: {
          rolIndex: 3,
          colIndex: 4,
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
              rolIndex: 5,
              colIndex: 4,
            },
          },
        ],
      },
      {
        name: '审批人',
        content: '申请人自选 不限范围 多选 依次审批',
        belongCategory: 1622771045562,
        status: false,
        id: 1622771052842,
        color: 'orange',
        positon: {
          rolIndex: 3,
          colIndex: 6,
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
              rolIndex: 5,
              colIndex: 6,
            },
          },
        ],
      },
    ],
  },
]


export { treeDataSource1, treeDataSource2, treeData1, treeData2, treeData3 }
