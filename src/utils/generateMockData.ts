import { User, Guarantor } from '../types';

const organizations = ['Lendsqr', 'Irorun', 'Lendstar'];
const statuses: Array<'Active' | 'Inactive' | 'Pending' | 'Blacklisted'> = [
  'Active',
  'Inactive',
  'Pending',
  'Blacklisted',
];
const genders: Array<'Male' | 'Female'> = ['Male', 'Female'];
const maritalStatuses: Array<'Single' | 'Married' | 'Divorced' | 'Widowed'> = ['Single', 'Married', 'Divorced', 'Widowed'];
const educationLevels = ['B.Sc', 'M.Sc', 'Ph.D', 'HND', 'OND'];
const employmentStatuses = ['Employed', 'Unemployed', 'Self-employed'];
const sectors = ['FinTech', 'Healthcare', 'Education', 'Technology', 'Agriculture'];
const residenceTypes = ["Parent's Apartment", 'Rented Apartment', 'Own House', 'Shared Apartment'];
const relationships = ['Sister', 'Brother', 'Mother', 'Father', 'Friend', 'Colleague'];

const firstNames = [
  'Grace', 'Debby', 'Tosin', 'Adedeji', 'Chioma', 'Emeka', 'Ngozi', 'Oluwaseun',
  'Blessing', 'Chidi', 'Funmi', 'Ibrahim', 'Kemi', 'Musa', 'Nkechi', 'Olu',
];

const lastNames = [
  'Effiom', 'Ogana', 'Dokumu', 'Adeyemi', 'Okafor', 'Mensah', 'Bello', 'Eze',
  'Williams', 'Johnson', 'Akinola', 'Oladipo', 'Adeleke', 'Nwankwo', 'Bakare',
];

const getRandomElement = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generatePhoneNumber = (): string => {
  return `0${getRandomNumber(700, 909)}${getRandomNumber(1000000, 9999999)}`;
};

const generateBVN = (): string => {
  return String(getRandomNumber(10000000000, 99999999999));
};

const generateAccountNumber = (): string => {
  return String(getRandomNumber(1000000000, 9999999999));
};

const generateDate = (): string => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = getRandomElement(months);
  const day = getRandomNumber(1, 28);
  const year = getRandomNumber(2019, 2020);
  const hour = getRandomNumber(1, 12);
  const minute = getRandomNumber(10, 59);
  const period = getRandomElement(['AM', 'PM']);

  return `${month} ${day}, ${year} ${hour}:${minute} ${period}`;
};

const generateUsername = (firstName: string, lastName: string): string => {
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}${getRandomNumber(1, 999)}`;
};

const generateEmail = (firstName: string, lastName: string, domain?: string): string => {
  const defaultDomain = domain || getRandomElement(['gmail.com', 'yahoo.com', 'lendsqr.com', 'irorun.com']);
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${defaultDomain}`;
};

const generateGuarantor = (): Guarantor => {
  const firstName = getRandomElement(firstNames);
  const lastName = getRandomElement(lastNames);

  return {
    fullName: `${firstName} ${lastName}`,
    phoneNumber: generatePhoneNumber(),
    email: generateEmail(firstName, lastName),
    relationship: getRandomElement(relationships),
  };
};

export const generateMockUsers = (count: number = 500): User[] => {
  const users: User[] = [];

  for (let i = 0; i < count; i++) {
    const firstName = getRandomElement(firstNames);
    const lastName = getRandomElement(lastNames);
    const fullName = `${firstName} ${lastName}`;
    const username = generateUsername(firstName, lastName);
    const organization = getRandomElement(organizations);

    const user: User = {
      id: `user_${i + 1}`,
      organization,
      username,
      email: generateEmail(firstName, lastName, organization.toLowerCase() + '.com'),
      phoneNumber: generatePhoneNumber(),
      dateJoined: generateDate(),
      status: getRandomElement(statuses),

      fullName,
      bvn: generateBVN(),
      gender: getRandomElement(genders),
      maritalStatus: getRandomElement(maritalStatuses),
      children: getRandomElement(['None', '1', '2', '3', '4']),
      typeOfResidence: getRandomElement(residenceTypes),

      levelOfEducation: getRandomElement(educationLevels),
      employmentStatus: getRandomElement(employmentStatuses),
      sectorOfEmployment: getRandomElement(sectors),
      durationOfEmployment: `${getRandomNumber(1, 10)} years`,
      officeEmail: generateEmail(firstName, lastName, organization.toLowerCase() + '.com'),
      monthlyIncome: `₦${getRandomNumber(50, 500)},000.00- ₦${getRandomNumber(100, 800)},000.00`,
      loanRepayment: `${getRandomNumber(10, 100)},000`,

      twitter: `@${username}`,
      facebook: fullName,
      instagram: `@${username}`,

      guarantors: [generateGuarantor(), generateGuarantor()],

      accountBalance: `₦${getRandomNumber(100, 500)},000.00`,
      accountNumber: generateAccountNumber(),
      bankName: getRandomElement(['Providus Bank', 'GTBank', 'Access Bank', 'First Bank', 'Zenith Bank']),

      tier: getRandomNumber(1, 3),
    };

    users.push(user);
  }

  return users;
};

export const calculateUserStats = (users: User[]) => {
  return {
    totalUsers: users.length,
    activeUsers: users.filter(u => u.status === 'Active').length,
    usersWithLoans: Math.floor(users.length * 0.5), // Simulate 50% with loans
    usersWithSavings: Math.floor(users.length * 0.7), // Simulate 70% with savings
  };
};
