import React from 'react';
import './Card.css';

const type = ['spade', 'heart', 'diamond', 'club'];

const Card: React.FC<{ from: string; row: number; value: number }> = ({
  from,
  row,
  value
}) => {
  const cardType = type[Math.floor(value / 13)];
  const cardValue = (value % 13) + 1;

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer!.setData(
      'data',
      JSON.stringify({
        from,
        row,
        value
      })
    );
  };

  return (
    <div
      className={`card card-${cardType}-${cardValue}`}
      draggable="true"
      onDragStart={onDragStart}
    />
  );
};

export default Card;
