const express = require('express');

// Mock skills data (replace with database calls)
const mockSkills = [
  {
    id: '1',
    name: 'Straight Jump',
    description: 'Basic straight jump entry into the water.',
    difficulty: 'beginner',
    diveNumber: '100',
    category: 'forward',
    prerequisites: [],
    isUnlocked: true,
    isCompleted: false,
    videoUrl: 'https://example.com/videos/straight-jump.mp4',
    thumbnailUrl: 'https://example.com/thumbnails/straight-jump.jpg',
    coachingTips: ['Keep arms at your sides', 'Point your toes'],
    judgingCriteria: {
      approach: 'Confident and controlled',
      takeoff: 'Strong vertical lift',
      execution: 'Straight body position maintained',
      entry: 'Clean vertical entry with minimal splash',
      degreeOfDifficulty: 1.0
    }
  }
];

const getSkills = async (req, res) => {
  try {
    res.json({success: true, data: mockSkills});
  } catch (error) {
    res.status(500).json({success: false, error: error.message});
  }
};

const getSkillById = async (req, res) => {
  try {
    const {id} = req.params;
    const skill = mockSkills.find(s => s.id === id);
    
    if (!skill) {
      return res.status(404).json({success: false, error: 'Skill not found'});
    }
    
    res.json({success: true, data: skill});
  } catch (error) {
    res.status(500).json({success: false, error: error.message});
  }
};

module.exports = {getSkills, getSkillById};