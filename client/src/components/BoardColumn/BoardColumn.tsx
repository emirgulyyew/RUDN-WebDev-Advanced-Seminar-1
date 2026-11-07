import type { Card } from '../../types/card';
import { BoardCard } from '../BoardCard/BoardCard';
import { useFilterStore } from '../../store';

interface BoardColumnProps {
  cards: Card[];
}

export function BoardColumn({ cards }: BoardColumnProps) {
  const hideDone = useFilterStore((state) => state.hideDone);
  const filteredCards = hideDone ? cards.filter(card => !card.isDone) : cards;

  return (
    <div className="board-column">
      <h2>В работе ({filteredCards.length})</h2>
      <div className="cards-list">
        {filteredCards.map((card) => (
          <BoardCard 
            key={card.id} 
            title={card.title} 
            isDone={card.isDone} 
          />
        ))}
      </div>
    </div>
  );
}
