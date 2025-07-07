# DiveSteps Development Setup Guide

## Environment Requirements

### System Requirements
- **Node.js**: v16.0.0 or higher
- **npm**: v8.0.0 or higher
- **React Native CLI**: Latest version
- **Git**: Latest version

### Mobile Development
- **iOS Development**: macOS with Xcode 12+
- **Android Development**: Android Studio with SDK 28+

## Step-by-Step Setup

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/your-username/divesteps.git
cd divesteps

# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

### 2. React Native Setup

```bash
# Install React Native CLI globally
npm install -g react-native-cli

# For iOS (macOS only)
cd ios && pod install && cd ..

# For Android, ensure Android Studio is properly configured
```

### 3. Backend Configuration

```bash
# Copy environment template
cp backend/.env.example backend/.env

# Edit backend/.env with your settings:
# - Database URL
# - Firebase credentials
# - Cloudinary settings
# - JWT secret
```

### 4. Running the Application

```bash
# Terminal 1: Start backend server
npm run backend:dev

# Terminal 2: Start React Native metro bundler
npm start

# Terminal 3: Run on device/simulator
npm run ios     # For iOS
npm run android # For Android
```

## Troubleshooting

### Common Issues

1. **Metro bundler cache issues**
   ```bash
   npx react-native start --reset-cache
   ```

2. **iOS build issues**
   ```bash
   cd ios && pod install && cd ..
   npx react-native run-ios
   ```

3. **Android gradle issues**
   ```bash
   cd android && ./gradlew clean && cd ..
   npx react-native run-android
   ```

### Dependencies Issues

If you encounter module resolution issues, try:
```bash
rm -rf node_modules
npm install
```

## Development Workflow

1. **Feature Development**
   - Create feature branch
   - Implement changes
   - Test on both iOS and Android
   - Submit pull request

2. **Code Style**
   - Use TypeScript for type safety
   - Follow React Native best practices
   - Maintain consistent component structure

3. **Testing**
   - Test on multiple screen sizes
   - Verify navigation flows
   - Check data loading states

## Production Deployment

### Backend Deployment
- Deploy to Heroku, AWS, or similar platform
- Configure environment variables
- Set up database and file storage

### Mobile App Deployment
- **iOS**: Build for App Store via Xcode
- **Android**: Generate signed APK for Play Store

## Resources

- [React Native Documentation](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Firebase Documentation](https://firebase.google.com/docs)