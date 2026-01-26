import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ActionMenu.module.scss';
import viewDetailsIcon from '../../assets/icons/actions/view-details-icon.svg';
import blacklistIcon from '../../assets/icons/actions/blacklist-icon.svg';
import activateIcon from '../../assets/icons/actions/activate-icon.svg';

interface ActionMenuProps {
  userId: string;
  onClose: () => void;
}

const ActionMenu: React.FC<ActionMenuProps> = ({ userId, onClose }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/users/${userId}`);
    onClose();
  };

  const handleBlacklist = () => {
    console.log('Blacklist user:', userId);
    onClose();
  };

  const handleActivate = () => {
    console.log('Activate user:', userId);
    onClose();
  };

  return (
    <div className={styles.actionMenu}>
      <button onClick={handleViewDetails} className={styles.menuItem}>
        <img src={viewDetailsIcon} alt="" className={styles.icon} />
        View Details
      </button>
      <button onClick={handleBlacklist} className={styles.menuItem}>
        <img src={blacklistIcon} alt="" className={styles.icon} />
        Blacklist User
      </button>
      <button onClick={handleActivate} className={styles.menuItem}>
        <img src={activateIcon} alt="" className={styles.icon} />
        Activate User
      </button>
    </div>
  );
};

export default ActionMenu;
