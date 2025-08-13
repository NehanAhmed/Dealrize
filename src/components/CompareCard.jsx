import React, { useState, useRef, useEffect } from 'react';
import { Clock, Frown, AlertCircle, X, Diamond, MessageSquare, Calendar, Inbox, BarChart3, Zap, TrendingUp, Sparkles } from 'lucide-react';
import Logo from './Logo';

const ComparisonCard = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  // Beam animation component
  // Grid pattern background
  const GridPattern = ({ className = "" }) => (
    <div className={`absolute inset-0 opacity-5 ${className}`}>
      <div className="grid h-full w-full grid-cols-10 gap-px">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="border border-gray-400"></div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto my-20 p-8 bg-zinc-50 relative font-poppins" ref={cardRef} onMouseMove={handleMouseMove}>

      {/* Subtle grid background */}
      <GridPattern />

      {/* Header with enhanced design */}


      {/* Cards Container with enhanced spacing */}
      <div className="flex items-center justify-center gap-12 relative mb-16">



        {/* Left Card - Problems (Enhanced) */}
        <div
          className="relative w-90 group"
          onMouseEnter={() => setHoveredCard('left')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Card glow effect */}


          <div className="relative bg-zinc-50 rounded-2xl p-6 border-2 shadow-lg transform -rotate-1 hover:rotate-0 transition-all duration-500 hover:shadow-2xl overflow-hidden"
            style={{ borderColor: '#fb8500' }}>

            {/* Beam effect */}
            {/* <BeamLine /> */}

            {/* Floating dots */}
            {hoveredCard === 'left' && (
              <>
                {[...Array(5)].map((_, i) => (
                  <div key={i}
                    className="absolute w-1 h-1 rounded-full animate-pulse"
                    style={{
                      backgroundColor: '#fb8500',
                      opacity: '0.4',
                      left: Math.random() * 100 + '%',
                      top: Math.random() * 100 + '%',
                      animationDelay: Math.random() * 2 + 's'
                    }} />
                ))}
              </>
            )}

            {/* Header Icon with enhanced design */}
            <div className="flex justify-center mb-6 relative">
              <div className="absolute inset-0 w-16 h-16 mx-auto rounded-xl animate-pulse"
                style={{ backgroundColor: '#fb8500', opacity: '0.1' }}></div>
              <div
                className="relative w-16 h-16 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110 overflow-hidden"
                style={{ backgroundColor: '#fb8500' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer"></div>
                <AlertCircle className="w-8 h-8 text-white relative z-10" />
              </div>
            </div>

            <div className="space-y-6 relative z-10">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#fb8500' }}></div>
                  <h2 className="text-xl font-bold" style={{ color: '#023047' }}>Without Dealrize AI</h2>
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#fb8500' }}></div>
                </div>
                <div className="w-16 h-0.5 rounded-full mx-auto mb-4" style={{ backgroundColor: '#fb8500' }}></div>
              </div>

              <div className="space-y-3">
                {[
                  { icon: Frown, text: "Missed valuable brand opportunities buried in emails" },
                  { icon: Clock, text: "Wasting hours sorting spam from real offers" },
                  { icon: X, text: "Slow, inconsistent replies that cost you deals" },
                  { icon: AlertCircle, text: "No clear system to track follow-ups or deadlines" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-orange-50/50 to-red-50/30 hover:from-orange-50 hover:to-red-50 transition-all duration-300 border border-orange-100/50">
                    <div className="mt-1 p-2 rounded-lg bg-zinc-50 shadow-sm border border-orange-200/50">
                      <item.icon className="w-4 h-4" style={{ color: '#fb8500' }} />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Card - AI Solution (Enhanced) */}
        <div
          className="relative w-110 group"
          onMouseEnter={() => setHoveredCard('right')}
          onMouseLeave={() => setHoveredCard(null)}
        >
          {/* Card glow effect */}


          <div className="relative bg-zinc-50 rounded-3xl p-8 border-2 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden"
            style={{ borderColor: '#219EBC' }}>

            {/* Enhanced beam effect */}

            {/* Floating particles */}
            {hoveredCard === 'right' && (
              <>
                {[...Array(8)].map((_, i) => (
                  <div key={i}
                    className="absolute w-1 h-1 rounded-full animate-float"
                    style={{
                      backgroundColor: i % 2 === 0 ? '#219EBC' : '#023047',
                      opacity: '0.3',
                      left: Math.random() * 100 + '%',
                      top: Math.random() * 100 + '%',
                      animationDelay: Math.random() * 3 + 's',
                      animationDuration: (Math.random() * 2 + 3) + 's'
                    }} />
                ))}
              </>
            )}

            {/* Header Icon with premium design */}
            <div className="flex justify-center mb-8 relative">
              <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl animate-pulse"
                style={{ backgroundColor: '#219EBC', opacity: '0.1' }}></div>
              <div
                className="relative w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-110 overflow-hidden"
                style={{ background: `linear-gradient(135deg, #219EBC 0%, #023047 100%)` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 animate-shimmer-slow"></div>
                <Diamond className="w-10 h-10 text-white relative z-10 animate-pulse" />
              </div>
            </div>

            <div className="space-y-8 relative z-10">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Diamond className="w-5 h-5 animate-pulse" style={{ color: '#219EBC' }} />
                  <h2 className="text-2xl font-extrabold " style={{ color: '#023047' }}>
                    With <span className='text-orange text-2xl font-extrabold'>Dealrize</span> AI
                  </h2>
                  <Diamond className="w-5 h-5 animate-pulse" style={{ color: '#219EBC' }} />
                </div>
                <div className="w-24 h-0.5 rounded-full mx-auto mb-6"
                  style={{ background: `linear-gradient(90deg, #219EBC 0%, #023047 100%)` }}></div>
              </div>

              <div className="space-y-4">
                {[
                  { icon: MessageSquare, text: "Instantly detects and highlights real brand offers", accent: '#219EBC' },
                  { icon: Calendar, text: "Automates replies to close deals faster", accent: '#023047' },
                  { icon: Inbox, text: "Keeps all collabs organized and prioritized", accent: '#219EBC' },
                  { icon: BarChart3, text: "Tracks every follow-up and key date in one place", accent: '#023047' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50/30 to-indigo-50/20 hover:from-blue-50/50 hover:to-indigo-50/40 transition-all duration-300 border border-blue-100/50 group/item hover:scale-[1.02]">
                    <div className="mt-1 p-3 rounded-xl shadow-sm border border-blue-200/50 bg-zinc-50 group-hover/item:shadow-md transition-all duration-300"
                      style={{ backgroundColor: `${item.accent}10` }}>
                      <item.icon className="w-5 h-5" style={{ color: item.accent }} />
                    </div>
                    <p className="text-lg text-blue  leading-relaxed font-semibold group-hover/item:text-gray-800 transition-colors duration-300">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonCard;