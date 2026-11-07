import { useQuery } from '@tanstack/react-query';
import type { Card } from './types/card'; 
import { BoardColumn } from './components/BoardColumn/BoardColumn';
import { BoardHeader } from './components/BoardHeader/BoardHeader';

const MOCK_CARDS: Card[] = [
  { id: '1', title: 'Изучить теорию по React', isDone: true },
  { id: '2', title: 'Сделать Задание 1', isDone: false },
  { id: '3', title: 'Разобраться с Zustand и фильтрами', isDone: false },
];

async function fetchCards(): Promise<Card[]> {
  return MOCK_CARDS;
}

export default function App() {
  const { data: cards = [] } = useQuery<Card[]>({
    queryKey: ['cards'],
    queryFn: fetchCards,
  });

  return (
    <div className="app" style={{ padding: 20 }}>
      <BoardHeader />
      <BoardColumn cards={cards} />
    </div>
  );
}
