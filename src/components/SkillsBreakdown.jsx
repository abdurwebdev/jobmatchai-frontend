import styles from './SkillsBreakdown.module.css';

export default function SkillsBreakdown({ matched, missing }) {
  return (
    <div className={styles.wrap}>
      {/* Matched Section */}
      <div className={styles.section}>
        <h4 className={styles.title} style={{ color: '#111111' }}>
          ✓ Matched Competencies ({matched.length})
        </h4>
        <div className={styles.tags}>
          {matched.map(s => (
            <span 
              key={s} 
              className={styles.tag} 
              style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', color: '#111111', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Missing Section */}
      <div className={styles.section}>
        <h4 className={styles.title} style={{ color: '#666666' }}>
          ✕ Missing Focus Areas ({missing.length})
        </h4>
        <div className={styles.tags}>
          {missing.map(s => (
            <span 
              key={s} 
              className={styles.tag} 
              style={{ background: 'rgba(0,0,0,0.03)', border: '1px solid transparent', color: '#666666' }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}