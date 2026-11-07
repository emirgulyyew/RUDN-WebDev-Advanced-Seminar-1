import styles from './BoardCard.module.css';

interface BoardCardProps {
  title: string;
  isDone: boolean;
}

export function BoardCard({ title, isDone }: BoardCardProps) {
  const cardClassName = `${styles.boardCard || ''} ${isDone ? styles.done : ''}`;

  return (
    <div className={cardClassName}>
      <span>{title}</span>
    </div>
  );
}
