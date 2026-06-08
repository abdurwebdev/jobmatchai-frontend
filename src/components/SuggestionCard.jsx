import styles from './SuggestionCard.module.css';

export default function SuggestionCard({ suggestions, summary }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.summary}>
        <p className={styles.summaryText}>{summary}</p>
      </div>
      <h4 className={styles.title}>💡 AI Suggestions</h4>
      <div className={styles.list}>
        {suggestions.map((s, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.num}>0{i + 1}</span>
            <p>{s}</p>
          </div>
        ))}
      </div>
    </div>
  );
}