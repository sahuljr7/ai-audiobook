export interface Story {
  id: string
  title: string
  summary: string
  genre: string
  mood: string
  style: string
  narrator: string
  duration: number
  thumbnail: string
  createdAt: string
  audioUrl?: string
}

const colors = [
  'from-violet-600 to-blue-600',
  'from-cyan-600 to-blue-600',
  'from-green-600 to-emerald-600',
  'from-pink-600 to-rose-600',
  'from-amber-600 to-orange-600',
  'from-purple-600 to-pink-600',
]

export const mockStories: Story[] = [
  {
    id: '1',
    title: 'The Last Detective',
    summary:
      'A retired detective is drawn back into the case that ended their career, only to discover the truth was buried deeper than anyone imagined.',
    genre: 'Mystery',
    mood: 'Mysterious',
    style: 'Slow burn',
    narrator: 'Deep Male',
    duration: 15,
    thumbnail: '',
    createdAt: '2024-02-10',
  },
  {
    id: '2',
    title: 'Neon Hearts',
    summary:
      'In a cyberpunk metropolis, two strangers meet in a floating café above the smog, sharing secrets that could change everything.',
    genre: 'Sci-Fi',
    mood: 'Intense',
    style: 'Fast-paced',
    narrator: 'Energetic Female',
    duration: 15,
    thumbnail: '',
    createdAt: '2024-02-09',
  },
  {
    id: '3',
    title: 'Whispers in the Oak',
    summary:
      'A young author discovers an old oak tree in her new cottage that tells stories of the past, each one more haunting than the last.',
    genre: 'Fantasy',
    mood: 'Cozy',
    style: 'Slow burn',
    narrator: 'Calm Female',
    duration: 15,
    thumbnail: '',
    createdAt: '2024-02-08',
  },
  {
    id: '4',
    title: 'Echoes of Tomorrow',
    summary:
      'A time traveler realizes they can only observe events, never change them, but discovers one person can see them across centuries.',
    genre: 'Sci-Fi',
    mood: 'Mysterious',
    style: 'Twist ending',
    narrator: 'Deep Male',
    duration: 15,
    thumbnail: '',
    createdAt: '2024-02-07',
  },
  {
    id: '5',
    title: 'The Midnight Garden',
    summary:
      'A cursed garden blooms only at midnight, and a botanist must uncover its secrets before the final flower opens forever.',
    genre: 'Horror',
    mood: 'Dark',
    style: 'Fast-paced',
    narrator: 'Energetic Female',
    duration: 15,
    thumbnail: '',
    createdAt: '2024-02-06',
  },
  {
    id: '6',
    title: 'Coffee & Conundrums',
    summary:
      'A barista and a regular customer slowly realize their conversations hold the solutions to the greatest mysteries neither was trying to solve.',
    genre: 'Feel-Good',
    mood: 'Calm',
    style: 'Emotional',
    narrator: 'Calm Female',
    duration: 15,
    thumbnail: '',
    createdAt: '2024-02-05',
  },
]

export const genres = [
  'Thriller',
  'Mystery',
  'Romance',
  'Sci-Fi',
  'Fantasy',
  'Horror',
  'Feel-Good',
]

export const styles = [
  'Fast-paced',
  'Slow burn',
  'Twist ending',
  'Emotional',
  'Dark & gritty',
]

export const moods = [
  { emoji: '😌', label: 'Calm' },
  { emoji: '😱', label: 'Intense' },
  { emoji: '🕵️', label: 'Mysterious' },
  { emoji: '🌙', label: 'Cozy' },
  { emoji: '⚡', label: 'Dark' },
]

export const narratorVoices = [
  { id: 'calm-male', name: 'Calm Male', gender: 'Male' },
  { id: 'deep-male', name: 'Deep Male', gender: 'Male' },
  { id: 'energetic-male', name: 'Energetic Male', gender: 'Male' },
  { id: 'calm-female', name: 'Calm Female', gender: 'Female' },
  { id: 'energetic-female', name: 'Energetic Female', gender: 'Female' },
  { id: 'sultry-female', name: 'Sultry Female', gender: 'Female' },
]

export interface Badge {
  id: string
  name: string
  description: string
  emoji: string
  unlockedDate: string
}

export interface CompletedBook {
  storyId: string
  completedDate: string
  rating: number
  totalTimeSpent: number
  listeningTime: number
}

export interface UserProfile {
  id: string
  name: string
  email: string
  avatar: string
  rewardPoints: number
  currentStreak: number
  longestStreak: number
  totalListeningHours: number
  isPremium: boolean
  badges: Badge[]
  completedBooks: CompletedBook[]
  joinedDate: string
}

export const mockBadges: Badge[] = [
  {
    id: 'first-book',
    name: 'First Book Completed',
    description: 'Completed your first audiobook',
    emoji: '📚',
    unlockedDate: '2024-01-15',
  },
  {
    id: 'week-streak',
    name: '7-Day Reading Streak',
    description: 'Maintained a 7-day listening streak',
    emoji: '🔥',
    unlockedDate: '2024-02-01',
  },
  {
    id: 'audiobook-fan',
    name: 'Audiobook Enthusiast',
    description: 'Listened to 50+ hours of audiobooks',
    emoji: '🎧',
    unlockedDate: '2024-02-05',
  },
  {
    id: 'genre-explorer',
    name: 'Genre Explorer',
    description: 'Completed books in 5 different genres',
    emoji: '🌍',
    unlockedDate: '2024-02-08',
  },
  {
    id: 'night-reader',
    name: 'Night Owl Reader',
    description: 'Logged most listening time between 9 PM - 6 AM',
    emoji: '🌙',
    unlockedDate: '2024-02-10',
  },
]

export const mockCompletedBooks: CompletedBook[] = [
  {
    storyId: '1',
    completedDate: '2024-01-15',
    rating: 4.5,
    totalTimeSpent: 120,
    listeningTime: 15,
  },
  {
    storyId: '3',
    completedDate: '2024-02-01',
    rating: 5,
    totalTimeSpent: 180,
    listeningTime: 15,
  },
  {
    storyId: '6',
    completedDate: '2024-02-08',
    rating: 4,
    totalTimeSpent: 90,
    listeningTime: 15,
  },
]

export interface Quote {
  id: string
  text: string
  author: string
  category: 'motivational' | 'relatable' | 'philosophical' | 'romance' | 'thriller' | 'fantasy'
  genre?: string
}

export const mockQuotes: Quote[] = [
  {
    id: 'q1',
    text: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
    category: 'motivational',
  },
  {
    id: 'q2',
    text: 'It is during our darkest moments that we must focus to see the light.',
    author: 'Aristotle',
    category: 'philosophical',
  },
  {
    id: 'q3',
    text: 'Every mystery has an ending, but the truth often starts where secrets die.',
    author: 'Unknown',
    category: 'thriller',
    genre: 'Mystery',
  },
  {
    id: 'q4',
    text: 'In a world of chaos, love remains the strongest force.',
    author: 'Sarah',
    category: 'romance',
    genre: 'Romance',
  },
  {
    id: 'q5',
    text: 'We are stronger together than we could ever be alone.',
    author: 'J.K. Rowling',
    category: 'relatable',
  },
  {
    id: 'q6',
    text: 'Magic exists in every moment if you know where to look.',
    author: 'J.R.R. Tolkien',
    category: 'fantasy',
    genre: 'Fantasy',
  },
  {
    id: 'q7',
    text: 'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt',
    category: 'motivational',
  },
  {
    id: 'q8',
    text: 'Sometimes the smallest things take up the most room in our hearts.',
    author: 'A.A. Milne',
    category: 'relatable',
  },
  {
    id: 'q9',
    text: 'In the darkest times, hope is something you give yourself.',
    author: 'Dumbledore',
    category: 'philosophical',
  },
  {
    id: 'q10',
    text: 'Life is not about finding yourself. Life is about creating yourself.',
    author: 'George Bernard Shaw',
    category: 'motivational',
  },
]

export const mockUser: UserProfile = {
  id: 'user-1',
  name: 'Alex Chen',
  email: 'alex@echotales.com',
  avatar: '',
  rewardPoints: 1250,
  currentStreak: 7,
  longestStreak: 14,
  totalListeningHours: 52.5,
  isPremium: true,
  badges: mockBadges,
  completedBooks: mockCompletedBooks,
  joinedDate: '2023-11-20',
}
