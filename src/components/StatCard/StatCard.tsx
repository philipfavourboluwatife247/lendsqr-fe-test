import React from 'react';
import styles from './StatCard.module.scss';

interface StatCardProps {
  icon: string; // Path to SVG icon
  label: string;
  value: string | number;
  iconBg: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, iconBg }) => {
  return (
    <div className={styles.statCard}>
      <div className={styles.iconWrapper} style={{ backgroundColor: iconBg }}>
        <img src={icon} alt={label} className={styles.icon} />
      </div>
      <p className={styles.label}>{label}</p>
      <h3 className={styles.value}>{value.toLocaleString()}</h3>
    </div>
  );
};

export default StatCard;
