
import React, { useState } from 'react';
import { Home, CheckSquare, Camera, Lightbulb, Trophy, ChevronRight, Wrench } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [xp, setXp] = useState(20);
  const [streak, setStreak] = useState(1);
  const [completedTasks, setCompletedTasks] = useState(1);
  const [level, setLevel] = useState(1);
  const [levelTitle, setLevelTitle] = useState('Rookie Homeowner');
  const [xpToNext, setXpToNext] = useState(80);

  const maintenanceTasks = [
    { id: 1, title: 'Check smoke detectors', frequency: 'Monthly', xp: 15, icon: '⭐', completed: false },
    { id: 2, title: 'Run water in unused drains', frequency: 'Monthly', xp: 10, icon: '⭐', completed: false },
    { id: 3, title: 'Clean gutters', frequency: 'Every 3 months', xp: 35, icon: '⭐', completed: false },
  ];

  const [tasks, setTasks] = useState(maintenanceTasks);

  return (
    <div className="app-shell">
      {/* App Icon */}
      <div className="bg-white pt-12 pb-4 px-6">
        <img
          src={`data:image/svg+xml,${encodeURIComponent(`
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
              <defs>
                <linearGradient id='skyGrad' x1='0%' y1='0%' x2='0%' y2='100%'>
                  <stop offset='0%' style='stop-color:#87CEEB;stop-opacity:1'/>
                  <stop offset='100%' style='stop-color:#5DADE2;stop-opacity:1'/>
                </linearGradient>
              </defs>
              <rect width='200' height='200' rx='45' fill='url(#skyGrad)'/>
              <path d='M100 45 L145 75 L145 140 C145 145 140 150 135 150 L65 150 C60 150 55 145 55 140 L55 75 Z' fill='#FFA500'/>
              <path d='M100 35 L160 80 L150 80 L150 70 Z' fill='#FF6347'/>
              <path d='M100 35 L40 80 L50 80 L50 70 Z' fill='#FF6347'/>
              <path d='M85 100 L115 100 L115 150 L85 150 Z' fill='#8B4513'/>
              <circle cx='95' cy='120' r='3' fill='#FFD700'/>
              <path d='M100 155 L100 175 M85 165 L115 165 M90 172 L110 172' stroke='#4CAF50' stroke-width='4' fill='none'/>
              <circle cx='100' cy='165' r='18' fill='none' stroke='#4CAF50' stroke-width='4'/>
              <path d='M92 165 L98 171 L110 157' stroke='white' stroke-width='3' fill='none' stroke-linecap='round' stroke-linejoin='round'/>
              <path d='M130 60 L145 55 L150 70 M135 65 L140 63' stroke='#A9A9A9' stroke-width='2' fill='none'/>
              <path d='M175 85 L185 88 L180 98' stroke='#87CEEB' stroke-width='2' fill='none'/>
            </svg>
          `)}`}
          alt="HouseHomie Icon"
          className="w-16 h-16 rounded-2xl shadow-lg mb-2 mx-auto"
        />
      </div>

      {/* Header */}
      <div className="bg-white px-6 pb-6">
        <p className="text-green-600 text-sm mb-1">Good evening</p>
        <h1 className="text-4xl font-bold text-gray-800">Homeowner</h1>
      </div>

      {/* Level Card */}
      <div className="px-6 py-4">
        <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-6 shadow-lg">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-white bg-opacity-30 rounded-full p-3">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-white text-2xl font-bold">Level {level}</h2>
                <p className="text-white text-opacity-90 text-sm">{levelTitle}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white text-3xl font-bold">{xp}</p>
              <p className="text-white text-opacity-90 text-xs">XP EARNED</p>
            </div>
          </div>
          <div className="bg-white bg-opacity-30 rounded-full h-3 overflow-hidden">
            <div
              className="bg-white h-full rounded-full transition-all duration-500"
              style={{ width: `${(xp / (xp + xpToNext)) * 100}%` }}
            ></div>
          </div>
          <p className="text-white text-center text-sm mt-2 opacity-90">{xpToNext} XP to Handy Helper</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-6 py-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="text-orange-500">🔥</div>
              <p className="text-gray-500 text-sm">Streak</p>
            </div>
            <p className="text-4xl font-bold text-gray-800">{streak}</p>
            <p className="text-gray-400 text-sm mt-1">days in a row</p>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="text-green-500">✓</div>
              <p className="text-gray-500 text-sm">Completed</p>
            </div>
            <p className="text-4xl font-bold text-gray-800">{completedTasks}</p>
            <p className="text-gray-400 text-sm mt-1">total tasks</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setActiveTab('fixit')}
            className="bg-red-50 rounded-2xl p-5 text-left shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
              <Wrench className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-red-600 font-semibold mb-1">Fix Something</h3>
            <p className="text-red-400 text-sm">Snap a photo of an issue</p>
          </button>
          <button
            onClick={() => setActiveTab('ideas')}
            className="bg-green-50 rounded-2xl p-5 text-left shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-3">
              <Lightbulb className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-green-600 font-semibold mb-1">Get Ideas</h3>
            <p className="text-green-400 text-sm">Design your dream space</p>
          </button>
        </div>
      </div>

      {/* Upcoming Tasks */}
      {activeTab === 'home' && (
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Upcoming Tasks</h2>
            <button
              onClick={() => setActiveTab('tasks')}
              className="text-green-600 text-sm font-medium flex items-center gap-1"
            >
              See All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-3">
            {tasks.map(task => (
              <div key={task.id} className="bg-white rounded-2xl p-5 shadow-sm flex items-center gap-4">
                <div className="bg-green-50 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⭐</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-800 font-semibold">{task.title}</h3>
                  <p className="text-gray-400 text-sm">{task.frequency} • +{task.xp} XP</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            ))}
          </div>

          {/* Encouragement Banner */}
          <div className="mt-6 bg-orange-50 rounded-2xl p-5 flex items-center gap-4">
            <div className="text-4xl">⭐</div>
            <div>
              <h3 className="text-gray-800 font-semibold">You're doing great!</h3>
              <p className="text-gray-600 text-sm">1 tasks completed this cycle</p>
            </div>
          </div>
        </div>
      )}

      {/* Tasks Tab */}
      {activeTab === 'tasks' && (
        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">All Tasks</h2>
          <div className="space-y-3">
            {tasks.map(task => (
              <div key={task.id} className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-green-50 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-800 font-semibold">{task.title}</h3>
                    <p className="text-gray-400 text-sm">{task.frequency} • +{task.xp} XP</p>
                  </div>
                </div>
                <button className="w-full bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition-colors">
                  Complete Task
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Fix It Tab */}
      {activeTab === 'fixit' && (
        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Fix Something</h2>
          <div className="bg-white rounded-3xl p-8 shadow-sm text-center mb-6">
            <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Got a Problem?</h3>
            <p className="text-gray-600 mb-6">Take a photo and we'll help you fix it step by step!</p>
            <button className="bg-red-500 text-white font-semibold py-4 px-8 rounded-xl hover:bg-red-600 transition-colors w-full">
              Take Photo
            </button>
          </div>
          <div className="bg-blue-50 rounded-2xl p-5">
            <h3 className="font-semibold text-gray-800 mb-3">Recent Fixes</h3>
            <div className="space-y-2">
              <div className="bg-white rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-800">Leaky Faucet</p>
                  <p className="text-sm text-gray-500">Fixed 3 days ago</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ideas Tab */}
      {activeTab === 'ideas' && (
        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Get Ideas</h2>
          <div className="bg-white rounded-3xl p-8 shadow-sm text-center mb-6">
            <Lightbulb className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Dream It, Do It!</h3>
            <p className="text-gray-600 mb-6">Upload photos of your space for DIY-friendly renovation ideas</p>
            <button className="bg-green-500 text-white font-semibold py-4 px-8 rounded-xl hover:bg-green-600 transition-colors w-full">
              Upload Photos
            </button>
          </div>
          <div className="bg-purple-50 rounded-2xl p-5">
            <h3 className="font-semibold text-gray-800 mb-3">What's Your Style?</h3>
            <div className="grid grid-cols-2 gap-2">
              {['Modern', 'Rustic', 'Minimalist', 'Cozy'].map(style => (
                <button key={style} className="bg-white text-gray-700 font-medium py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors">
                  {style}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
        <div className="flex items-center justify-around max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-green-600' : 'text-gray-400'}`}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button
            onClick={() => setActiveTab('tasks')}
            className={`flex flex-col items-center gap-1 ${activeTab === 'tasks' ? 'text-green-600' : 'text-gray-400'}`}
          >
            <CheckSquare className="w-6 h-6" />
            <span className="text-xs font-medium">Tasks</span>
          </button>
          <button
            onClick={() => setActiveTab('fixit')}
            className={`flex flex-col items-center gap-1 ${activeTab === 'fixit' ? 'text-green-600' : 'text-gray-400'}`}
          >
            <Camera className="w-6 h-6" />
            <span className="text-xs font-medium">Fix It</span>
          </button>
          <button
            onClick={() => setActiveTab('ideas')}
            className={`flex flex-col items-center gap-1 ${activeTab === 'ideas' ? 'text-green-600' : 'text-gray-400'}`}
          >
            <Lightbulb className="w-6 h-6" />
            <span className="text-xs font-medium">Ideas</span>
          </button>
        </div>
      </div>
    </div>
  );
}
