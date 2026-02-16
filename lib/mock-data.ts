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

export const mockUser = {
  id: 'user-1',
  name: 'Alex Chen',
  email: 'alex@echotales.com',
  avatar: '',
}
