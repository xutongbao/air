import React from 'react'
import MyCard from './MyCard'
import { Dustbin } from './Dustbin'
import { Box } from './Box'
import { Space } from 'antd'

export default function useCenterList({
  dataSource,
  cardActiveId,
  moveCard,
  handleCardActiveId,
}) {
  const getCenterListDom = () => {
    return (
      <div>
        {dataSource.map((card, index) => (
          <MyCard
            key={card.id}
            index={index}
            cardActiveId={cardActiveId}
            card={card}
            moveCard={moveCard}
            onCardActiveId={handleCardActiveId}
          />
        ))}
      </div>
    )
  }

  const getCenterListDomPlus = () => {
    return (
      <div>
        <div>
          <Dustbin />
        </div>
        <div className="m-box-wrap">
          <Space>
            <Box name="Glass" />
            <Box name="Banana" />
            <Box name="Paper" />
          </Space>
        </div>
      </div>
    )
  }

  return {
    getCenterListDom,
    getCenterListDomPlus,
  }
}
