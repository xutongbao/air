import React from 'react'
import MyCard from './MyCard'

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

  return {
    getCenterListDom
  }
}
