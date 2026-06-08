import { useState } from 'react';
import { useMatchStore } from '../store/matchStore';
import { 
  Sparkles, 
  Cpu, 
  FileText, 
  Briefcase, 
  AlertTriangle, 
  ArrowRight, 
  RotateCcw,
  Activity
} from 'lucide-react';
import ScoreGauge from '../components/ScoreGauge';
import SkillsBreakdown from '../components/SkillsBreakdown';
import SuggestionCard from '../components/SuggestionCard';
import styles from './MatchPage.module.css';

export default function MatchPage() {
  const [resume, setResume] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const { analyze, result, loading, error, reset } = useMatchStore();

  const handleAnalyze = () => {
    if (!resume.trim() || !jobDesc.trim()) return;
    analyze(resume, jobDesc);
  };

  const handleReset = () => {
    reset();
    setResume('');
    setJobDesc('');
  };

  return (
    <div className={styles.pageContainer}>
      {/* 1. Header (Mirrors image_03c44f.png layout with loose tracking and asymmetric alignments) */}
      <header className={styles.headerWrapper}>
        <div className={styles.logoGroup}>
          <div className={styles.avatarIcon}>
            <Sparkles size={18} strokeWidth={2.5} className={styles.brandIconAnim} />
          </div>
          <span className={styles.brandName}>JobMatch AI</span>
        </div>
        
        <div className={styles.metaStatus}>
          <Activity size={13} className={styles.pulseIcon} />
          <span>Vector Workspace</span>
          <span className={styles.statusDot}>●</span>
        </div>
        
        <div className={styles.pillNav}>
          <span className={styles.activePill}>Optimizer</span>
          <span className={styles.techBadge}>
            <Cpu size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
            Mistral + LangChain
          </span>
        </div>
      </header>

      {/* 2. Main Workspace Dynamic Zone */}
      <main className={styles.workspace}>
        {!result ? (
          /* INPUT STATE */
          <div className={styles.splitLayout}>
            <div className={styles.introPane}>
              <h1 className={styles.mainTitle}>
                Match your resume <br />
                is a creative studio crafting <br />
                digital paths with <em>precision</em>.
              </h1>
              
              {error && (
                <p className={styles.errorMsg}>
                  <AlertTriangle size={16} style={{ marginRight: '6px' }} />
                  {error}
                </p>
              )}
              
              <button
                className={styles.actionButton}
                onClick={handleAnalyze}
                disabled={loading || !resume.trim() || !jobDesc.trim()}
              >
                {loading ? (
                  <><span className={styles.miniSpinner} /> Mapping Vector Spaces...</>
                ) : (
                  <>
                    Run Evaluation Analysis
                    <ArrowRight size={16} className={styles.arrowIcon} />
                  </>
                )}
              </button>
            </div>

            <div className={styles.editorPane}>
              <div className={styles.fieldBox}>
                <div className={styles.fieldHeader}>
                  <label>
                    <FileText size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                    Paste Resume Text
                  </label>
                  <span>{resume.length} chars</span>
                </div>
                <textarea
                  className={styles.minimalTextarea}
                  placeholder="Drop structural professional experience and core competencies..."
                  value={resume}
                  onChange={e => setResume(e.target.value)}
                />
              </div>

              <div className={styles.fieldBox}>
                <div className={styles.fieldHeader}>
                  <label>
                    <Briefcase size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                    Target Job Specification
                  </label>
                  <span>{jobDesc.length} chars</span>
                </div>
                <textarea
                  className={styles.minimalTextarea}
                  placeholder="Drop role benchmarks, required tech stacks, and KPIs..."
                  value={jobDesc}
                  onChange={e => setJobDesc(e.target.value)}
                />
              </div>
            </div>
          </div>
        ) : (
          /* RESULTS STATE */
          <div className={styles.dashboardLayout}>
            <div className={styles.dashHeader}>
              <h2>Engine Evaluation Complete</h2>
              <button className={styles.backButton} onClick={handleReset}>
                <RotateCcw size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                Target Another Opening
              </button>
            </div>

            <div className={styles.dashGrid}>
              <div className={styles.cardGauge}>
                <ScoreGauge score={result.score} />
              </div>
              <div className={styles.cardSuggestions}>
                <SuggestionCard suggestions={result.suggestions} summary={result.summary} />
              </div>
              <div className={styles.cardSkills}>
                <SkillsBreakdown matched={result.matchedSkills} missing={result.missingSkills} />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}