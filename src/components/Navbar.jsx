import { Sparkles, Cpu, Activity } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.headerWrapper}>
      {/* Brand Group - Matches Left-hand Brand Logo alignment */}
      <div className={styles.logoGroup}>
        <div className={styles.avatarIcon}>
          <Sparkles size={18} strokeWidth={0.5} className={styles.brandIconAnim} />
        </div>
        <span className={styles.brandName}>JobMatch AI</span>
      </div>
      
      {/* Middle Context Stream - Matches the centered text/time metrics */}
      <div className={styles.metaStatus}>
        <Activity size={13} className={styles.pulseIcon} />
        <span>Vector Workspace</span>
        <span className={styles.statusDot}>●</span>
      </div>
      
      {/* Right Floating Control Pill - Matches the premium pill buttons */}
      <div className={styles.pillNav}>
        <span className={styles.activePill}>Optimizer</span>
        <span className={styles.techBadge}>
          <Cpu size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
          Mistral + LangChain
        </span>
      </div>
    </header>
  );
}