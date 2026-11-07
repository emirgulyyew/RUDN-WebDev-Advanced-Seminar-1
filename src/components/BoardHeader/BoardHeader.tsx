import { useFilterStore } from '../../store';

export function BoardHeader() {
  const { hideDone, toggleHideDone } = useFilterStore();

  return (
    <header style={{ padding: '10px 20px', background: '#f5f5f5', marginBottom: 20, borderRadius: 8 }}>
      <h1>Моя -Канбан-доска</h1>
      <button 
        onClick={toggleHideDone}
        style={{
          padding: '8px 12px',
          backgroundColor: hideDone ? '#4caf50' : '#2196f3',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer'
        }}
      >
        {hideDone ? 'Показать все' : 'Скрыть выполненные'}
      </button>
    </header>
  );
}
