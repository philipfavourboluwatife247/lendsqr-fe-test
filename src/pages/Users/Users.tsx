import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import StatCard from '../../components/StatCard/StatCard';
import FilterPopup, { FilterData } from '../../components/FilterPopup/FilterPopup';
import ActionMenu from '../../components/ActionMenu/ActionMenu';
import Pagination from '../../components/Pagination/Pagination';
import { api } from '../../services/api';
import { storage } from '../../utils/localStorage';
import { User } from '../../types';
import { calculateUserStats } from '../../utils/generateMockData';
import styles from './Users.module.scss';

// Import icons from assets
import usersIcon from '../../assets/icons/users-icon.svg';
import activeUsersIcon from '../../assets/icons/active-users-icon.svg';
import usersLoansIcon from '../../assets/icons/users-loans-icon.svg';
import usersSavingsIcon from '../../assets/icons/users-savings-icon.svg';
import searchIcon from '../../assets/icons/navbar/search-icon.svg';
import filterIcon from '../../assets/icons/table/filter-icon.svg';

const Users: React.FC = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [activeFilterColumn, setActiveFilterColumn] = useState<string | null>(null);
  const [activeActionMenu, setActiveActionMenu] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState('');

  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    usersWithLoans: 0,
    usersWithSavings: 0,
  });

  const filterRef = useRef<HTMLDivElement>(null);
  const actionRef = useRef<HTMLDivElement>(null);

  // Fetch users on mount
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const data = await api.getUsers();
        setUsers(data);
        setFilteredUsers(data);
        setStats(calculateUserStats(data));
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Close filter/action menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setActiveFilterColumn(null);
      }
      if (actionRef.current && !actionRef.current.contains(event.target as Node)) {
        setActiveActionMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle filter
  const handleFilter = async (filters: FilterData) => {
    setLoading(true);
    try {
      const filtered = await api.filterUsers(filters);
      setFilteredUsers(filtered);
      setCurrentPage(1);
    } catch (error) {
      console.error('Error filtering users:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle reset filter
  const handleResetFilter = () => {
    setFilteredUsers(users);
    setCurrentPage(1);
  };

  // Handle view user details
  const handleViewDetails = (user: User) => {
    storage.saveUser(user);
    navigate(`/users/${user.id}`);
  };

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching:', searchQuery);

    const query = searchQuery.toLowerCase();
    const searchedUsers = users.filter((user) =>
      user.username.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.organization.toLowerCase().includes(query)
    );

    setFilteredUsers(searchedUsers);
    setCurrentPage(1);
  };

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  };

  // Toggle filter popup
  const toggleFilter = (column: string) => {
    setActiveFilterColumn(activeFilterColumn === column ? null : column);
    setActiveActionMenu(null);
  };

  // Toggle action menu
  const toggleActionMenu = (userId: string) => {
    setActiveActionMenu(activeActionMenu === userId ? null : userId);
    setActiveFilterColumn(null);
  };

  if (loading && users.length === 0) {
    return (
      <Layout>
        <div className={styles.loading}>Loading users...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.usersPage}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Users</h1>

          {/* Mobile Search Bar */}
          <form className={styles.mobileSearch} onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for anything"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>
              <img src={searchIcon} alt="Search" />
            </button>
          </form>
        </div>

        {/* Summary Cards */}
        <div className={styles.statsGrid}>
          <StatCard icon={usersIcon} label="Users" value={stats.totalUsers} iconBg="rgba(223, 24, 255, 0.1)" />
          <StatCard icon={activeUsersIcon} label="Active Users" value={stats.activeUsers} iconBg="rgba(87, 24, 255, 0.1)" />
          <StatCard icon={usersLoansIcon} label="Users with Loans" value={stats.usersWithLoans} iconBg="rgba(245, 95, 68, 0.1)" />
          <StatCard icon={usersSavingsIcon} label="Users with Savings" value={stats.usersWithSavings} iconBg="rgba(255, 51, 102, 0.1)" />
        </div>

        {/* Users Table */}
        <div className={styles.tableContainer}>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  {['organization','username','email','phone','date','status'].map((col, i) => (
                    <th key={i}>
                      <div className={styles.thContent}>
                        <span>
                          {col === 'organization' && 'Organization'}
                          {col === 'username' && 'Username'}
                          {col === 'email' && 'Email'}
                          {col === 'phone' && 'Phone Number'}
                          {col === 'date' && 'Date Joined'}
                          {col === 'status' && 'Status'}
                        </span>
                        <button
                          className={styles.filterIcon}
                          onClick={() => toggleFilter(col)}
                        >
                          <img src={filterIcon} alt="Filter" />
                        </button>
                        {activeFilterColumn === col && (
                          <div ref={filterRef}>
                            <FilterPopup
                              onFilter={handleFilter}
                              onReset={handleResetFilter}
                              onClose={() => setActiveFilterColumn(null)}
                            />
                          </div>
                        )}
                      </div>
                    </th>
                  ))}
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {currentUsers.map((user) => (
                  <tr key={user.id} onClick={() => handleViewDetails(user)}>
                    <td>{user.organization}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.dateJoined}</td>
                    <td>
                      <span className={`${styles.status} ${styles[user.status.toLowerCase()]}`}>
                        {user.status}
                      </span>
                    </td>
                    <td>
                      <div className={styles.actionCell}>
                        <button
                          className={styles.actionBtn}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleActionMenu(user.id);
                          }}
                        >
                          ⋮
                        </button>
                        {activeActionMenu === user.id && (
                          <div ref={actionRef}>
                            <ActionMenu
                              userId={user.id}
                              onClose={() => setActiveActionMenu(null)}
                            />
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            itemsPerPage={itemsPerPage}
            onItemsPerPageChange={handleItemsPerPageChange}
            totalItems={filteredUsers.length}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Users;

