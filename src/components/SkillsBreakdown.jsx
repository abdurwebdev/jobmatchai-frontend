import styles from './SkillsBreakdown.module.css';

export default function SkillsBreakdown({ matched, missing }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.section}>
        <h4 className={styles.title} style={{ color: '#34d399' }}>✅ Matched Skills ({matched.length})</h4>
        <div className={styles.tags}>
          {matched.map(s => (
            <span key={s} className={styles.tag} style={{ background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(52,211,153,0.3)', color: '#34d399' }}>{s}</span>
          ))}
        </div>
      </div>
      <div className={styles.section}>
        <h4 className={styles.title} style={{ color: '#f87171' }}>❌ Missing Skills ({missing.length})</h4>
        <div className={styles.tags}>
          {missing.map(s => (
            <span key={s} className={styles.tag} style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(248,113,113,0.3)', color: '#f87171' }}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}