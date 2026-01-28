import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { storage } from '../../utils/localStorage';
import { User } from '../../types';
import styles from './UserDetails.module.scss';
import backIcon from '../../assets/icons/back-icon.svg';
import starFilledIcon from '../../assets/icons/star-filled.svg';
import starOutlineIcon from '../../assets/icons/star-outline.svg';
import avatarIcon from '../../assets/icons/avatar.svg';

const UserDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<string>('general');

  useEffect(() => {
    const storedUser = storage.getUser();
    if (storedUser && storedUser.id === id) {
      setUser(storedUser);
    } else {
      navigate('/users');
    }
  }, [id, navigate]);

  const handleBack = () => navigate('/users');

  const renderStars = (tier: number) => {
    const stars = [];
    for (let i = 1; i <= 3; i++) {
      stars.push(
        <img key={i} src={i <= tier ? starFilledIcon : starOutlineIcon} alt="" className={styles.star} />
      );
    }
    return stars;
  };

  if (!user) return <Layout><div className={styles.loading}>Loading...</div></Layout>;

  return (
    <Layout>
      <div className={styles.userDetailsPage}>
        <button onClick={handleBack} className={styles.backButton}>
          <img src={backIcon} alt="" />
          <span>Back to Users</span>
        </button>

        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>User Details</h1>
          <div className={styles.actionButtons}>
            <button className={styles.blacklistBtn}>BLACKLIST USER</button>
            <button className={styles.activateBtn}>ACTIVATE USER</button>
          </div>
        </div>

        <div className={styles.userInfoCard}>
          <div className={styles.userInfoTop}>
            <div className={styles.userBasic}>
              <div className={styles.avatar}>
                <img src={avatarIcon} alt={user.fullName} />
              </div>
              <div className={styles.userNameSection}>
                <h2 className={styles.userName}>{user.fullName}</h2>
                <p className={styles.userId}>{user.id}</p>
              </div>
            </div>

            <div className={styles.userTier}>
              <p className={styles.tierLabel}>User's Tier</p>
              <div className={styles.stars}>{renderStars(user.tier)}</div>
            </div>

            <div className={styles.userBank}>
              <h3 className={styles.bankAmount}>{user.accountBalance}</h3>
              <p className={styles.bankDetails}>{user.accountNumber}/{user.bankName}</p>
            </div>
          </div>

          <div className={styles.tabs}>
            {['general', 'documents', 'bank', 'loans', 'savings', 'app'].map((tab) => (
              <button
                key={tab}
                className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'app' ? 'App and System' : tab.charAt(0).toUpperCase() + tab.slice(1).replace('Details', '') + ' Details'}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'general' && (
          <div className={styles.detailsContent}>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Personal Information</h3>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}><p className={styles.label}>FULL NAME</p><p className={styles.value}>{user.fullName}</p></div>
                <div className={styles.infoItem}><p className={styles.label}>PHONE NUMBER</p><p className={styles.value}>{user.phoneNumber}</p></div>
                <div className={styles.infoItem}><p className={styles.label}>EMAIL ADDRESS</p><p className={styles.value}>{user.email}</p></div>
                <div className={styles.infoItem}><p className={styles.label}>BVN</p><p className={styles.value}>{user.bvn}</p></div>
                <div className={styles.infoItem}><p className={styles.label}>GENDER</p><p className={styles.value}>{user.gender}</p></div>
                <div className={styles.infoItem}><p className={styles.label}>MARITAL STATUS</p><p className={styles.value}>{user.maritalStatus}</p></div>
                <div className={styles.infoItem}><p className={styles.label}>CHILDREN</p><p className={styles.value}>{user.children}</p></div>
                <div className={styles.infoItem}><p className={styles.label}>TYPE OF RESIDENCE</p><p className={styles.value}>{user.typeOfResidence}</p></div>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Education and Employment</h3>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}><p className={styles.label}>LEVEL OF EDUCATION</p><p className={styles.value}>{user.levelOfEducation}</p></div>
                <div className={styles.infoItem}><p className={styles.label}>EMPLOYMENT STATUS</p><p className={styles.value}>{user.employmentStatus}</p></div>
                <div className={styles.infoItem}><p className={styles.label}>SECTOR OF EMPLOYMENT</p><p className={styles.value}>{user.sectorOfEmployment}</p></div>
                <div className={styles.infoItem}><p className={styles.label}>DURATION OF EMPLOYMENT</p><p className={styles.value}>{user.durationOfEmployment}</p></div>
                <div className={styles.infoItem}><p className={styles.label}>OFFICE EMAIL</p><p className={styles.value}>{user.officeEmail}</p></div>
                <div className={styles.infoItem}><p className={styles.label}>MONTHLY INCOME</p><p className={styles.value}>{user.monthlyIncome}</p></div>
                <div className={styles.infoItem}><p className={styles.label}>LOAN REPAYMENT</p><p className={styles.value}>{user.loanRepayment}</p></div>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Socials</h3>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}><p className={styles.label}>TWITTER</p><p className={styles.value}>{user.twitter}</p></div>
                <div className={styles.infoItem}><p className={styles.label}>FACEBOOK</p><p className={styles.value}>{user.facebook}</p></div>
                <div className={styles.infoItem}><p className={styles.label}>INSTAGRAM</p><p className={styles.value}>{user.instagram}</p></div>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Guarantor</h3>
              {user.guarantors.map((guarantor, index) => (
                <div key={index} className={styles.guarantorWrapper}>
                  <div className={styles.infoGrid}>
                    <div className={styles.infoItem}><p className={styles.label}>FULL NAME</p><p className={styles.value}>{guarantor.fullName}</p></div>
                    <div className={styles.infoItem}><p className={styles.label}>PHONE NUMBER</p><p className={styles.value}>{guarantor.phoneNumber}</p></div>
                    <div className={styles.infoItem}><p className={styles.label}>EMAIL ADDRESS</p><p className={styles.value}>{guarantor.email}</p></div>
                    <div className={styles.infoItem}><p className={styles.label}>RELATIONSHIP</p><p className={styles.value}>{guarantor.relationship}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default UserDetails;
