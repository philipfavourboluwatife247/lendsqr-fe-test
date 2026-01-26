import React, { useState } from 'react';
import styles from './FilterPopup.module.scss';

interface FilterPopupProps {
  onFilter: (filters: FilterData) => void;
  onReset: () => void;
  onClose: () => void;
}

export interface FilterData {
  organization?: string;
  username?: string;
  email?: string;
  date?: string;
  phoneNumber?: string;
  status?: string;
}

const FilterPopup: React.FC<FilterPopupProps> = ({ onFilter, onReset, onClose }) => {
  const [filters, setFilters] = useState<FilterData>({
    organization: '',
    username: '',
    email: '',
    date: '',
    phoneNumber: '',
    status: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter(filters);
    onClose();
  };

  const handleReset = () => {
    setFilters({
      organization: '',
      username: '',
      email: '',
      date: '',
      phoneNumber: '',
      status: '',
    });
    onReset();
    onClose();
  };

  return (
    <div className={styles.filterPopup}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Organization</label>
          <select name="organization" value={filters.organization} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Lendsqr">Lendsqr</option>
            <option value="Irorun">Irorun</option>
            <option value="Lendstar">Lendstar</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="User"
            value={filters.username}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={filters.email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={filters.date}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={filters.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Status</label>
          <select name="status" value={filters.status} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
            <option value="Blacklisted">Blacklisted</option>
          </select>
        </div>

        <div className={styles.buttons}>
          <button type="button" onClick={handleReset} className={styles.resetBtn}>
            Reset
          </button>
          <button type="submit" className={styles.filterBtn}>
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterPopup;
