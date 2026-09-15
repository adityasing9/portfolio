import React from 'react';

interface PaintSplashProps {
  className?: string;
}

export const PaintSplash: React.FC<PaintSplashProps> = ({ className = '' }) => {
  return (
    <div className={`relative pointer-events-none select-none flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 900 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(241,90,36,0.35)] opacity-95"
      >
        <defs>
          {/* Main fiery orange watercolor gradient */}
          <radialGradient id="splashCore" cx="50%" cy="50%" r="50%" fx="48%" fy="46%">
            <stop offset="0%" stopColor="#FF7A3D" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#F15A24" stopOpacity="0.92" />
            <stop offset="70%" stopColor="#E04010" stopOpacity="0.85" />
            <stop offset="90%" stopColor="#BF2C06" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#9E1D00" stopOpacity="0" />
          </radialGradient>

          {/* Left watercolor wash gradient */}
          <radialGradient id="splashLeft" cx="40%" cy="50%" r="45%">
            <stop offset="0%" stopColor="#FF8F5A" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#F15A24" stopOpacity="0.8" />
            <stop offset="85%" stopColor="#E44414" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#F15A24" stopOpacity="0" />
          </radialGradient>

          {/* Right dark-contrast watercolor wash gradient */}
          <radialGradient id="splashRight" cx="60%" cy="52%" r="48%">
            <stop offset="0%" stopColor="#FF6B2B" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#EA4812" stopOpacity="0.88" />
            <stop offset="75%" stopColor="#C93208" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#7E1700" stopOpacity="0" />
          </radialGradient>

          {/* Deep ink texture underlay */}
          <radialGradient id="splashDeep" cx="50%" cy="55%" r="40%">
            <stop offset="0%" stopColor="#D93C0A" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#B32B03" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#300B02" stopOpacity="0" />
          </radialGradient>

          {/* Watercolor pigment filter for organic natural brush edge */}
          <filter id="watercolorEdge" x="-15%" y="-15%" width="130%" height="130%" filterUnits="objectBoundingBox">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="14" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>

        <g filter="url(#watercolorEdge)">
          {/* Main expansive wash */}
          <path
            d="M450 120 
               C540 90, 640 110, 710 160 
               C790 220, 840 280, 820 370 
               C800 450, 740 510, 660 550 
               C580 590, 480 570, 410 590 
               C330 610, 240 590, 180 530 
               C110 470, 70 390, 90 310 
               C110 220, 190 170, 280 140 
               C340 120, 390 130, 450 120 Z"
            fill="url(#splashCore)"
          />

          {/* Dynamic outer left splash lobe */}
          <path
            d="M380 180 
               C290 140, 170 180, 120 250 
               C70 320, 80 410, 150 480 
               C210 540, 300 550, 370 510 
               C420 480, 440 410, 430 340 
               C420 270, 430 200, 380 180 Z"
            fill="url(#splashLeft)"
          />

          {/* Dynamic outer right brush swipe extending into dark half */}
          <path
            d="M460 170 
               C550 150, 680 160, 760 230 
               C830 300, 850 400, 810 480 
               C760 550, 670 580, 580 550 
               C510 520, 480 460, 490 390 
               C500 310, 490 230, 460 170 Z"
            fill="url(#splashRight)"
          />

          {/* Intense central brush pigment mass */}
          <path
            d="M430 200 
               C500 180, 580 190, 640 240 
               C710 300, 720 380, 680 440 
               C640 500, 560 520, 490 510 
               C420 500, 360 480, 330 430 
               C290 370, 310 290, 360 240 
               C390 210, 410 205, 430 200 Z"
            fill="url(#splashDeep)"
            opacity="0.85"
          />

          {/* Upper left dynamic spray strokes */}
          <path
            d="M320 130 C270 90, 220 120, 180 160 C150 190, 190 220, 240 210 C290 200, 340 160, 320 130 Z"
            fill="#F15A24"
            opacity="0.85"
          />
          <path
            d="M260 90 C220 70, 180 100, 160 130 C150 150, 170 170, 200 160 C230 150, 270 120, 260 90 Z"
            fill="#FF7A3D"
            opacity="0.75"
          />

          {/* Upper right spatter stroke */}
          <path
            d="M580 130 C640 100, 710 120, 750 160 C780 190, 750 220, 700 210 C650 200, 600 160, 580 130 Z"
            fill="#E04010"
            opacity="0.85"
          />

          {/* Lower right sweeping paint tail */}
          <path
            d="M620 480 C710 520, 800 540, 840 490 C870 450, 850 400, 810 430 C760 470, 690 480, 620 480 Z"
            fill="#F15A24"
            opacity="0.8"
          />

          {/* Lower left drips and strokes */}
          <path
            d="M260 490 C210 540, 160 570, 130 540 C110 510, 140 480, 180 470 C220 460, 250 480, 260 490 Z"
            fill="#D9381E"
            opacity="0.75"
          />
          <path
            d="M340 560 C320 610, 290 630, 270 610 C250 580, 270 550, 300 540 C320 530, 350 540, 340 560 Z"
            fill="#F15A24"
            opacity="0.7"
          />
        </g>

        {/* Crisp paint droplets and spatters (without heavy displacement for clean specks) */}
        <g fill="#F15A24" opacity="0.85">
          <circle cx="150" cy="180" r="7" />
          <circle cx="120" cy="220" r="4.5" />
          <circle cx="105" cy="270" r="9" />
          <circle cx="85" cy="330" r="6" />
          <circle cx="95" cy="390" r="4" />
          <circle cx="140" cy="520" r="6.5" />
          <circle cx="175" cy="570" r="5" />
          <circle cx="210" cy="590" r="8" />
          <circle cx="280" cy="625" r="4" />
          
          <circle cx="730" cy="140" r="6" />
          <circle cx="785" cy="190" r="8" />
          <circle cx="835" cy="250" r="5.5" />
          <circle cx="860" cy="320" r="7" />
          <circle cx="845" cy="400" r="9" />
          <circle cx="830" cy="460" r="4.5" />
          <circle cx="790" cy="530" r="7.5" />
          <circle cx="720" cy="580" r="5" />
          <circle cx="650" cy="610" r="8.5" />
          
          {/* Micro dots */}
          <circle cx="220" cy="110" r="2.5" />
          <circle cx="170" cy="140" r="3" />
          <circle cx="130" cy="160" r="2" />
          <circle cx="760" cy="115" r="3" />
          <circle cx="810" cy="160" r="2.5" />
          <circle cx="865" cy="280" r="3" />
          <circle cx="875" cy="360" r="2.5" />
          <circle cx="820" cy="505" r="3" />
          <circle cx="760" cy="565" r="2.5" />
        </g>

        {/* Contrasting dark splatter droplets (seen on left side in reference) */}
        <g fill="#2B2B2B" opacity="0.7">
          <circle cx="380" cy="590" r="5" />
          <circle cx="410" cy="610" r="3.5" />
          <circle cx="395" cy="625" r="2.5" />
          <circle cx="440" cy="620" r="4" />
          <circle cx="460" cy="600" r="3" />
        </g>
      </svg>
    </div>
  );
};
