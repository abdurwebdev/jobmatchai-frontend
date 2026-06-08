import styles from './ScoreGauge.module.css';

export default function ScoreGauge({ score }) {
  const getGrad = () => {
    if (score >= 75) return 'var(--grad-success)';
    if (score >= 50) return 'var(--grad-warn)';
    return 'var(--grad-danger)';
  };

  const getLabel = () => {
    if (score >= 75) return 'Strong Match';
    if (score >= 50) return 'Moderate Match';
    return 'Weak Match';
  };

  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className={styles.wrap}>
      <div className={styles.gaugeWrap}>
        <svg width="140" height="140" viewBox="0 0 140 140">
          <circle cx="70" cy="70" r="54" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="10"/>
          <circle
            cx="70" cy="70" r="54" fill="none"
            stroke="url(#scoreGrad)" strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform="rotate(-90 70 70)"
            style={{ transition: 'stroke-dashoffset 1s ease' }}
          />
          <defs>
            <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              {score >= 75
                ? <><stop offset="0%" stopColor="#10b981"/><stop offset="100%" stopColor="#34d399"/></>
                : score >= 50
                ? <><stop offset="0%" stopColor="#f59e0b"/><stop offset="100%" stopColor="#fbbf24"/></>
                : <><stop offset="0%" stopColor="#ef4444"/><stop offset="100%" stopColor="#f87171"/></>
              }
            </linearGradient>
          </defs>
        </svg>
        <div className={styles.scoreInner}>
          <span className={styles.scoreNum}>{score}</span>
          <span className={styles.scorePct}>/ 100</span>
        </div>
      </div>
      <p className={styles.label}>{getLabel()}</p>
      <p className={styles.summary}>ATS Compatibility Score</p>
    </div>
  );
}