'use client';
import React from 'react';

const LoadingCube = () => (
  <div className="h-screen w-full flex items-center justify-center bg-blue-50">
    <div className="relative w-16 h-16" style={{ perspective: '200px' }}>
      <div className="w-full h-full relative transform-gpu" 
           style={{ 
             transformStyle: 'preserve-3d',
             animation: 'spin 4s infinite linear'
           }}>
        {/* Front face - Red */}
        <div className="absolute w-16 h-16 bg-red-500/90 transform-gpu"
             style={{ transform: 'translateZ(8px)' }} />
        {/* Back face - Purple */}
        <div className="absolute w-16 h-16 bg-purple-500/90 transform-gpu"
             style={{ transform: 'translateZ(-8px) rotateY(180deg)' }} />
        {/* Right face - Green */}
        <div className="absolute w-16 h-16 bg-green-500/90 transform-gpu"
             style={{ transform: 'translateX(8px) rotateY(90deg)' }} />
        {/* Left face - Yellow */}
        <div className="absolute w-16 h-16 bg-yellow-500/90 transform-gpu"
             style={{ transform: 'translateX(-8px) rotateY(-90deg)' }} />
        {/* Top face - Blue */}
        <div className="absolute w-16 h-16 bg-blue-500/90 transform-gpu"
             style={{ transform: 'translateY(-8px) rotateX(90deg)' }} />
        {/* Bottom face - Orange */}
        <div className="absolute w-16 h-16 bg-orange-500/90 transform-gpu"
             style={{ transform: 'translateY(8px) rotateX(-90deg)' }} />
      </div>
    </div>
    <style jsx>{`
      @keyframes spin {
        0% { transform: rotateX(0) rotateY(0) rotateZ(0); }
        100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
      }
    `}</style>
  </div>
);

export default LoadingCube;