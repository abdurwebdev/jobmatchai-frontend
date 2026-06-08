import { Sparkles, Cpu, Activity } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.headerWrapper}>
      {/* Brand Group - Left Alignment */}
      <div className={styles.logoGroup}>
        <div className={styles.avatarIcon}>
          <Sparkles size={16} strokeWidth={1.5} className={styles.brandIconAnim} />
        </div>
        <span className={styles.brandName}>JobMatch AI</span>
      </div>
      
      {/* Middle Context Stream */}
      <div className={styles.metaStatus}>
        <span>Vector Workspace</span>
        <span className={styles.statusDot}>●</span>
        <span className={styles.serifTime}>Engine <em>v1.0</em></span>
      </div>
      
      {/* Right Floating Control Pill */}
      <div className={styles.pillNav}>
        <span className={styles.activePill}>Optimizer</span>
        <span className={styles.techBadge}>
          <Cpu size={12} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
          Mistral + LangChain
        </span>
      </div>
    </header>
  );
}