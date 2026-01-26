import { User } from '../types';
import { generateMockUsers } from '../utils/generateMockData';

// Generate mock data once and store it
const MOCK_USERS = generateMockUsers(500);

export const api = {
  // Get all users
  getUsers: async (): Promise<User[]> => {
    // Simulate API delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MOCK_USERS);
      }, 500);
    });
  },

  // Get user by ID
  getUserById: async (id: string): Promise<User | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = MOCK_USERS.find((u) => u.id === id);
        resolve(user);
      }, 300);
    });
  },

  // Filter users
  filterUsers: async (filters: {
    organization?: string;
    username?: string;
    email?: string;
    date?: string;
    phoneNumber?: string;
    status?: string;
  }): Promise<User[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let filtered = [...MOCK_USERS];

        if (filters.organization) {
          filtered = filtered.filter((u) =>
            u.organization.toLowerCase().includes(filters.organization!.toLowerCase())
          );
        }
        if (filters.username) {
          filtered = filtered.filter((u) =>
            u.username.toLowerCase().includes(filters.username!.toLowerCase())
          );
        }
        if (filters.email) {
          filtered = filtered.filter((u) =>
            u.email.toLowerCase().includes(filters.email!.toLowerCase())
          );
        }
        if (filters.phoneNumber) {
          filtered = filtered.filter((u) => u.phoneNumber.includes(filters.phoneNumber!));
        }
        if (filters.status) {
          filtered = filtered.filter((u) => u.status === filters.status);
        }

        resolve(filtered);
      }, 500);
    });
  },
};
