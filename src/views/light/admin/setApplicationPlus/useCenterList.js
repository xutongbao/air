import React from 'react'
import MyCard from './MyCard'
import { Dustbin } from './Dustbin'
import { Box } from './Box'

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
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Dustbin />
        </div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Box name="Glass" />
          <Box name="Banana" />
          <Box name="Paper" />
        </div>
      </div>
    )
  }

  return {
    getCenterListDom,
    getCenterListDomPlus,
  }
}
