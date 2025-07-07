# DiveSteps - Mobile Diving Skills App

A comprehensive mobile application designed to help young divers (ages 8-16) track skill progression, learn proper techniques, and compare their dives against professional examples.

## 📱 Features

### Core Features (Implemented)
- **Skill Tree Progression**: Gamified skill progression with difficulty-based unlocking
- **Pro Technique Videos**: Professional dive video references for each skill
- **Interactive Trivia**: Educational quizzes about diving techniques and judging
- **User Profile**: Progress tracking and achievement system
- **Modern UI**: Beautiful, youth-friendly interface with bright colors

### Advanced Features (Coming Soon)
- **Video Comparison**: Side-by-side comparison of user dives vs. professional technique
- **AI Feedback**: Form analysis using computer vision
- **Social Features**: Team connectivity and progress sharing
- **Parent Dashboard**: Progress monitoring for parents and coaches

## 🏗️ Project Structure

```
divesteps/
├── src/                          # React Native app source
│   ├── components/               # Reusable UI components
│   │   ├── SkillCard.tsx        # Skill display card
│   │   └── ProgressBar.tsx      # Animated progress bar
│   ├── screens/                  # App screens
│   │   ├── WelcomeScreen.tsx    # Onboarding screen
│   │   ├── SkillTreeScreen.tsx  # Main skills overview
│   │   ├── SkillDetailScreen.tsx # Individual skill details
│   │   ├── TriviaScreen.tsx     # Interactive trivia
│   │   ├── VideoComparisonScreen.tsx # Video comparison (placeholder)
│   │   └── ProfileScreen.tsx    # User profile
│   ├── constants/
│   │   └── colors.ts            # App color scheme
│   ├── types/
│   │   └── index.ts             # TypeScript type definitions
│   ├── data/
│   │   └── mockData.ts          # Sample diving skills and trivia
│   └── App.tsx                  # Main app component with navigation
├── backend/                      # Node.js/Express API
│   ├── routes/                   # API route handlers
│   │   └── skills.js            # Skills management
│   ├── server.js                # Main server file
│   └── .env.example             # Environment variables template
├── package.json                  # Frontend dependencies
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- React Native development environment
- iOS Simulator or Android Emulator

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/divesteps.git
   cd divesteps
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Set up environment variables**
   ```bash
   cp backend/.env.example backend/.env
   # Edit backend/.env with your configuration
   ```

5. **Start the backend server**
   ```bash
   npm run backend:dev
   ```

6. **Start the React Native app**
   ```bash
   # For iOS
   npm run ios
   
   # For Android
   npm run android
   ```

## 🎨 Design System

### Color Palette
- **Primary**: Ocean Blue (#0077BE) - Main brand color
- **Secondary**: Turquoise (#00C6A7) - Accent and highlights
- **Accent**: Coral Red (#FF6B6B) - Call-to-action elements
- **Difficulty Colors**:
  - Beginner: Green (#10B981)
  - Intermediate: Orange (#F59E0B)
  - Advanced: Red (#EF4444)
  - Expert: Purple (#8B5CF6)

### UI Philosophy
- **Youth-Friendly**: Bright, engaging colors and gamified elements
- **Accessibility**: High contrast ratios and clear typography
- **Mobile-First**: Optimized for mobile devices with touch-friendly interface

## 📊 Data Models

### DiveSkill
```typescript
{
  id: string;
  name: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  diveNumber: string; // e.g., "101A", "203B"
  category: 'forward' | 'backward' | 'reverse' | 'inward' | 'twisting' | 'armstand';
  prerequisites: string[];
  isUnlocked: boolean;
  isCompleted: boolean;
  videoUrl: string;
  coachingTips: string[];
  judgingCriteria: JudgingCriteria;
}
```

### TriviaQuestion
```typescript
{
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: 'technique' | 'judging' | 'history' | 'safety';
}
```

## 🔧 API Endpoints

### Skills
- `GET /api/skills` - Get all diving skills
- `GET /api/skills/:id` - Get specific skill details

### Trivia
- `GET /api/trivia` - Get trivia questions

### Users
- `POST /api/users` - Create new user
- `GET /api/users/:id` - Get user profile

### Videos (Planned)
- `POST /api/videos/upload` - Upload user dive videos
- `POST /api/videos/compare` - Compare videos with AI analysis

## 🧪 Sample Data

The app includes comprehensive mock data for:
- **6 Diving Skills**: From basic straight jumps to advanced somersaults
- **4 Trivia Questions**: Covering technique and judging criteria
- **Progressive Difficulty**: Skills unlock based on prerequisites
- **Rich Metadata**: Coaching tips, judging criteria, and video references

## 📱 Screens Overview

1. **Welcome Screen**: Onboarding with feature highlights
2. **Skill Tree**: Gamified skill progression with category filtering
3. **Skill Detail**: In-depth skill information with video and tips
4. **Trivia**: Interactive quiz with explanations and scoring
5. **Profile**: User stats, achievements, and settings
6. **Video Comparison**: Future feature for technique analysis

## 🚧 Development Status

### ✅ Completed
- React Native app structure
- Navigation system
- UI components and screens
- Mock data and type definitions
- Basic backend API structure
- Skill progression system
- Trivia functionality

### 🔄 In Progress
- Video playback integration
- User authentication
- Data persistence

### 📋 Planned
- Video comparison feature
- AI-powered feedback
- Social sharing
- Parent/coach dashboard
- Cloud video storage
- Push notifications

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions or support, please contact the DiveSteps team or open an issue on GitHub.

---

**DiveSteps** - Empowering young divers to reach new depths! 🏊‍♀️🏆
