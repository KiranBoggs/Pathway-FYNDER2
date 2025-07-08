"use client"
import React, { useState } from 'react';
import { Heart, X, Play, Share2, MessageCircle, Bookmark, User, TrendingUp, Award, Target, ChevronRight } from 'lucide-react';

const CareerDiscoveryPlatform = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [likedVideos, setLikedVideos] = useState(new Set());
  const [userProfile, setUserProfile] = useState({
    name: '',
    skills: [],
    hobbies: [],
    aspirations: ''
  });
  const [showProfile, setShowProfile] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const careerVideos = [
    {
      id: 1,
      title: "Day in the Life: Software Engineer at Google",
      company: "Google",
      category: "Tech",
      views: "2.1M",
      likes: "156K",
      description: "Follow me through a typical day as a software engineer at Google, from morning standup to code reviews!",
      thumbnail: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=600&fit=crop",
      duration: "3:45"
    },
    {
      id: 2,
      title: "Investment Banking Analyst at JPMorgan",
      company: "JPMorgan Chase",
      category: "Finance",
      views: "890K",
      likes: "67K",
      description: "What it's really like working in investment banking - the good, the challenging, and everything in between.",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=600&fit=crop",
      duration: "4:12"
    },
    {
      id: 3,
      title: "Creative Director at Publicis",
      company: "Publicis",
      category: "Creative",
      views: "543K",
      likes: "89K",
      description: "Behind the scenes of creating award-winning campaigns and leading creative teams.",
      thumbnail: "https://images.unsplash.com/photo-1552664688-5c3d3527e03d?w=400&h=600&fit=crop",
      duration: "5:20"
    },
    {
      id: 4,
      title: "Data Scientist at Netflix",
      company: "Netflix",
      category: "Tech",
      views: "1.3M",
      likes: "234K",
      description: "How we use machine learning to recommend your next binge-watch and optimize streaming quality.",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop",
      duration: "6:15"
    },
    {
      id: 5,
      title: "UX Designer at Airbnb",
      company: "Airbnb",
      category: "Design",
      views: "756K",
      likes: "112K",
      description: "Designing experiences that help people belong anywhere - from research to final designs.",
      thumbnail: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=600&fit=crop",
      duration: "4:30"
    }
  ];

  const handleLike = (videoId) => {
    const newLikedVideos = new Set(likedVideos);
    if (newLikedVideos.has(videoId)) {
      newLikedVideos.delete(videoId);
    } else {
      newLikedVideos.add(videoId);
    }
    setLikedVideos(newLikedVideos);
  };

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % careerVideos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + careerVideos.length) % careerVideos.length);
  };

  const generateCareerAnalysis = () => {
    const analysis = {
      topCareer: "Software Engineer",
      confidence: 85,
      traits: ["Analytical", "Creative Problem Solver", "Tech-Savvy", "Collaborative"],
      matchedCareers: [
        { name: "Software Engineer", match: 85 },
        { name: "Data Scientist", match: 78 },
        { name: "UX Designer", match: 72 },
        { name: "Product Manager", match: 69 }
      ]
    };
    return analysis;
  };

  const currentVideo = careerVideos[currentVideoIndex];

  if (showProfile) {
    return (
      <div className="min-h-screen bg-black text-white p-4">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-6">
            <button 
              onClick={() => setShowProfile(false)}
              className="text-white"
            >
              <X size={24} />
            </button>
            <h1 className="text-xl font-bold">Your Profile</h1>
            <div></div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                value={userProfile.name}
                onChange={(e) => setUserProfile({...userProfile, name: e.target.value})}
                className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Skills</label>
              <input
                type="text"
                value={userProfile.skills.join(', ')}
                onChange={(e) => setUserProfile({...userProfile, skills: e.target.value.split(', ').filter(s => s)})}
                className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
                placeholder="e.g., Programming, Design, Writing"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Hobbies</label>
              <input
                type="text"
                value={userProfile.hobbies.join(', ')}
                onChange={(e) => setUserProfile({...userProfile, hobbies: e.target.value.split(', ').filter(h => h)})}
                className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
                placeholder="e.g., Gaming, Photography, Music"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Career Aspirations</label>
              <textarea
                value={userProfile.aspirations}
                onChange={(e) => setUserProfile({...userProfile, aspirations: e.target.value})}
                className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
                placeholder="What do you want to achieve in your career?"
                rows={3}
              />
            </div>

            <button
              onClick={() => {
                setShowProfile(false);
                setShowAnalysis(true);
              }}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              Generate Career Analysis
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showAnalysis) {
    const analysis = generateCareerAnalysis();
    return (
      <div className="min-h-screen bg-black text-white p-4">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between mb-6">
            <button 
              onClick={() => setShowAnalysis(false)}
              className="text-white"
            >
              <X size={24} />
            </button>
            <h1 className="text-xl font-bold">Career Wrapped</h1>
            <Share2 size={24} className="text-purple-400" />
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-900 to-pink-900 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Award className="text-yellow-400 mr-2" size={32} />
                <div>
                  <h2 className="text-2xl font-bold">{analysis.topCareer}</h2>
                  <p className="text-purple-200">Your top career match</p>
                </div>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span>Confidence Level</span>
                  <span className="text-green-400 font-bold">{analysis.confidence}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full" 
                    style={{ width: `${analysis.confidence}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Target className="mr-2 text-blue-400" size={20} />
                Your Key Traits
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {analysis.traits.map((trait, index) => (
                  <div key={index} className="bg-blue-900/50 px-3 py-2 rounded-lg text-sm text-center">
                    {trait}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <TrendingUp className="mr-2 text-green-400" size={20} />
                Top Career Matches
              </h3>
              <div className="space-y-3">
                {analysis.matchedCareers.map((career, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm">{career.name}</span>
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-700 rounded-full h-2 mr-2">
                        <div 
                          className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full" 
                          style={{ width: `${career.match}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-400">{career.match}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex space-x-3">
              <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold">
                Share Results
              </button>
              <button className="flex-1 border border-purple-500 text-purple-400 py-3 rounded-lg font-semibold">
                Email Parents
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
  <div style={{backgroundColor: 'red', color: 'white', padding: '20px', minHeight: '100vh'}}>
    <h1>TEST - Component is loading!</h1>
    <p>Current video: {currentVideo.title}</p>
    <button onClick={() => setShowProfile(true)}>Test Profile Button</button>
  </div>
);

export default CareerDiscoveryPlatform;
