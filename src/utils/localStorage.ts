import { User } from '../types';

const SELECTED_USER_KEY = 'lendsqr_selected_user';

export const storage = {
  // Save user to localStorage
  saveUser: (user: User): void => {
    try {
      localStorage.setItem(SELECTED_USER_KEY, JSON.stringify(user));
    } catch (error) {
      console.error('Error saving user to localStorage:', error);
    }
  },

  // Get user from localStorage
  getUser: (): User | null => {
    try {
      const userString = localStorage.getItem(SELECTED_USER_KEY);
      return userString ? JSON.parse(userString) : null;
    } catch (error) {
      console.error('Error getting user from localStorage:', error);
      return null;
    }
  },

  // Remove user from localStorage
  removeUser: (): void => {
    try {
      localStorage.removeItem(SELECTED_USER_KEY);
    } catch (error) {
      console.error('Error removing user from localStorage:', error);
    }
  },
};
