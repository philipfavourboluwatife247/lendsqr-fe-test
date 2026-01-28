import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.scss';

import switchOrgIcon from '../../assets/icons/sidebar/switch-org-icon.svg';
import dashboardIcon from '../../assets/icons/sidebar/dashboard-icon.svg';
import usersIcon from '../../assets/icons/sidebar/users-icon.svg';
import guarantorsIcon from '../../assets/icons/sidebar/guarantors-icon.svg';
import loansIcon from '../../assets/icons/sidebar/loans-icon.svg';
import decisionModelsIcon from '../../assets/icons/sidebar/decision-models-icon.svg';
import savingsIcon from '../../assets/icons/sidebar/savings-icon.svg';
import loanRequestsIcon from '../../assets/icons/sidebar/loan-requests-icon.svg';
import whitelistIcon from '../../assets/icons/sidebar/whitelist-icon.svg';
import karmaIcon from '../../assets/icons/sidebar/karma-icon.svg';
import organizationIcon from '../../assets/icons/sidebar/organization-icon.svg';
import loanProductsIcon from '../../assets/icons/sidebar/loan-products-icon.svg';
import savingsProductsIcon from '../../assets/icons/sidebar/savings-products-icon.svg';
import feesChargesIcon from '../../assets/icons/sidebar/fees-charges-icon.svg';
import transactionsIcon from '../../assets/icons/sidebar/transactions-icon.svg';
import servicesIcon from '../../assets/icons/sidebar/services-icon.svg';
import serviceAccountIcon from '../../assets/icons/sidebar/service-account-icon.svg';
import settlementsIcon from '../../assets/icons/sidebar/settlements-icon.svg';
import reportsIcon from '../../assets/icons/sidebar/reports-icon.svg';
import preferencesIcon from '../../assets/icons/sidebar/preferences-icon.svg';
import feesPricingIcon from '../../assets/icons/sidebar/fees-pricing-icon.svg';
import auditLogsIcon from '../../assets/icons/sidebar/audit-logs-icon.svg';
import systemsMessagesIcon from '../../assets/icons/sidebar/systems-messages-icon.svg';
import logoutIcon from '../../assets/icons/sidebar/logout-icon.svg';
import dropdownIcon from '../../assets/icons/navbar/dropdown-icon.svg';
import profileImage from '../../assets/images/profile.png';

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
    onClose?.();
  };

  const handleNavClick = () => {
    onClose?.();
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <div className={styles.mobileProfile}>
          <div className={styles.profileSection}>
            <img src={profileImage} alt="Adedeji" className={styles.avatar} />
            <div className={styles.profileInfo}>
              <span className={styles.name}>Adedeji</span>
              <img src={dropdownIcon} alt="" className={styles.dropdownIcon} />
            </div>
          </div>
          <NavLink to="/docs" className={styles.docsLink} onClick={handleNavClick}>
            Docs
          </NavLink>
        </div>

        <div className={styles.switchOrg} onClick={handleNavClick}>
          <img src={switchOrgIcon} alt="" className={styles.icon} />
          <span>Switch Organization</span>
          <img src={dropdownIcon} alt="" className={styles.dropdown} />
        </div>

        <NavLink to="/dashboard" className={styles.navItem} onClick={handleNavClick}>
          <img src={dashboardIcon} alt="" className={styles.icon} />
          <span>Dashboard</span>
        </NavLink>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>CUSTOMERS</h4>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.active : ''}`
            }
            onClick={handleNavClick}
          >
            <img src={usersIcon} alt="" className={styles.icon} />
            <span>Users</span>
          </NavLink>
          <NavLink to="/guarantors" className={styles.navItem} onClick={handleNavClick}>
            <img src={guarantorsIcon} alt="" className={styles.icon} />
            <span>Guarantors</span>
          </NavLink>
          <NavLink to="/loans" className={styles.navItem} onClick={handleNavClick}>
            <img src={loansIcon} alt="" className={styles.icon} />
            <span>Loans</span>
          </NavLink>
          <NavLink to="/decision-models" className={styles.navItem} onClick={handleNavClick}>
            <img src={decisionModelsIcon} alt="" className={styles.icon} />
            <span>Decision Models</span>
          </NavLink>
          <NavLink to="/savings" className={styles.navItem} onClick={handleNavClick}>
            <img src={savingsIcon} alt="" className={styles.icon} />
            <span>Savings</span>
          </NavLink>
          <NavLink to="/loan-requests" className={styles.navItem} onClick={handleNavClick}>
            <img src={loanRequestsIcon} alt="" className={styles.icon} />
            <span>Loan Requests</span>
          </NavLink>
          <NavLink to="/whitelist" className={styles.navItem} onClick={handleNavClick}>
            <img src={whitelistIcon} alt="" className={styles.icon} />
            <span>Whitelist</span>
          </NavLink>
          <NavLink to="/karma" className={styles.navItem} onClick={handleNavClick}>
            <img src={karmaIcon} alt="" className={styles.icon} />
            <span>Karma</span>
          </NavLink>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>BUSINESSES</h4>
          <NavLink to="/organization" className={styles.navItem} onClick={handleNavClick}>
            <img src={organizationIcon} alt="" className={styles.icon} />
            <span>Organization</span>
          </NavLink>
          <NavLink to="/loan-products" className={styles.navItem} onClick={handleNavClick}>
            <img src={loanProductsIcon} alt="" className={styles.icon} />
            <span>Loan Products</span>
          </NavLink>
          <NavLink to="/savings-products" className={styles.navItem} onClick={handleNavClick}>
            <img src={savingsProductsIcon} alt="" className={styles.icon} />
            <span>Savings Products</span>
          </NavLink>
          <NavLink to="/fees-and-charges" className={styles.navItem} onClick={handleNavClick}>
            <img src={feesChargesIcon} alt="" className={styles.icon} />
            <span>Fees and Charges</span>
          </NavLink>
          <NavLink to="/transactions" className={styles.navItem} onClick={handleNavClick}>
            <img src={transactionsIcon} alt="" className={styles.icon} />
            <span>Transactions</span>
          </NavLink>
          <NavLink to="/services" className={styles.navItem} onClick={handleNavClick}>
            <img src={servicesIcon} alt="" className={styles.icon} />
            <span>Services</span>
          </NavLink>
          <NavLink to="/service-account" className={styles.navItem} onClick={handleNavClick}>
            <img src={serviceAccountIcon} alt="" className={styles.icon} />
            <span>Service Account</span>
          </NavLink>
          <NavLink to="/settlements" className={styles.navItem} onClick={handleNavClick}>
            <img src={settlementsIcon} alt="" className={styles.icon} />
            <span>Settlements</span>
          </NavLink>
          <NavLink to="/reports" className={styles.navItem} onClick={handleNavClick}>
            <img src={reportsIcon} alt="" className={styles.icon} />
            <span>Reports</span>
          </NavLink>
        </div>

        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>SETTINGS</h4>
          <NavLink to="/preferences" className={styles.navItem} onClick={handleNavClick}>
            <img src={preferencesIcon} alt="" className={styles.icon} />
            <span>Preferences</span>
          </NavLink>
          <NavLink to="/fees-and-pricing" className={styles.navItem} onClick={handleNavClick}>
            <img src={feesPricingIcon} alt="" className={styles.icon} />
            <span>Fees and Pricing</span>
          </NavLink>
          <NavLink to="/audit-logs" className={styles.navItem} onClick={handleNavClick}>
            <img src={auditLogsIcon} alt="" className={styles.icon} />
            <span>Audit Logs</span>
          </NavLink>
          <NavLink to="/systems-messages" className={styles.navItem} onClick={handleNavClick}>
            <img src={systemsMessagesIcon} alt="" className={styles.icon} />
            <span>Systems Messages</span>
          </NavLink>
        </div>

        <button onClick={handleLogout} className={styles.logout}>
          <img src={logoutIcon} alt="" className={styles.icon} />
          <span>Logout</span>
        </button>

        <div className={styles.version}>v1.2.0</div>
      </div>
    </aside>
  );
};

export default Sidebar;
