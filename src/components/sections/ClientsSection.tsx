import { useEffect, useState } from 'react';
import './ClientsSection.scss';

// Define fixed pairs of logos that will alternate with each other
const logoPairs = [
  // Pair 1
  [
    "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672b702ec9b191cc7f9c4f8f_logo-3.avif",
    "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672b702ec9b191cc7f9c4f8b_logo-1.avif"
  ],
  // Pair 2
  [
    "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672b6ef2639f18a8d60661c2_logo-9.avif",
    "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672b702e435224ece2015a18_logo-11.avif"
  ],
  // Pair 3
  [
    "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672b702f5224af25878a88db_logo-4.avif",
    "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672b702ee51675bac18ffda3_logo-5.avif"
  ],
  // Pair 4
  [
    "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672b702e1982de8ef1a7cb2b_logo-10.avif",
    "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672b702eff24b29d517cec8b_logo-2.avif"
  ],
  // Pair 5 - using some logos again but in a different cell
  [
    "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672b6a3604692d33d8ea98d0_logo-4.avif",
    "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672b702ec9b191cc7f9c4f8f_logo-3.avif"
  ],
  // Pair 6
  [
    "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672b702ec9b191cc7f9c4f8b_logo-1.avif",
    "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672b6ef2639f18a8d60661c2_logo-9.avif"
  ],
  // Pair 7
  [
    "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672b702e435224ece2015a18_logo-11.avif",
    "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672b702f5224af25878a88db_logo-4.avif"
  ],
  // Pair 8
  [
    "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672b702ee51675bac18ffda3_logo-5.avif",
    "https://cdn.prod.website-files.com/672a1dc3f9c27f98c24c36dc/672b702e1982de8ef1a7cb2b_logo-10.avif"
  ]
];

// Component for a single logo container that slides between two images
const LogoSlideContainer = ({ 
  currentLogo, 
  nextLogo, 
  isSliding, 
  index 
}: { 
  currentLogo: string, 
  nextLogo: string, 
  isSliding: boolean,
  index: number 
}) => {
  return (
    <div className="logo-slide-wrapper" style={{ animationDelay: `${index * 100}ms` }}>
      <div className={`logo-slide-track ${isSliding ? 'sliding' : ''}`}>
        <div className="logo-slide-item current">
          <img loading="lazy" alt="" src={currentLogo} className="logo-client" />
        </div>
        <div className="logo-slide-item next">
          <img loading="lazy" alt="" src={nextLogo} className="logo-client" />
        </div>
      </div>
    </div>
  );
};

const ClientsSection = () => {
  // State to track which images to show (first or second of each pair)
  const [showFirstImage, setShowFirstImage] = useState<boolean>(true);
  // State to control the slide animation
  const [isSliding, setIsSliding] = useState<boolean>(false);
  
  // Set up interval for logo alternation
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      // Start the slide animation
      setIsSliding(true);
      
      // After animation completes, update the logos and reset the animation
      setTimeout(() => {
        // Toggle between first and second image in each pair
        setShowFirstImage(prev => !prev);
        
        // Reset the slide animation
        setIsSliding(false);
      }, 800); // Match this to the CSS animation duration
      
    }, 3500); // Change logos every 3.5 seconds
    
    return () => clearInterval(rotationInterval);
  }, []);
  
  // Generate node IDs for logo grid items
  const getNodeId = (index: number): string => {
    const nodeIds = [
      "w-node-_2797b2f9-26d5-0a10-b841-4b6e9b282613-c24c36ef",
      "w-node-_2797b2f9-26d5-0a10-b841-4b6e9b282619-c24c36ef",
      "w-node-_2797b2f9-26d5-0a10-b841-4b6e9b28261f-c24c36ef",
      "w-node-_2797b2f9-26d5-0a10-b841-4b6e9b282625-c24c36ef",
      "w-node-_2797b2f9-26d5-0a10-b841-4b6e9b28262b-c24c36ef",
      "w-node-_2797b2f9-26d5-0a10-b841-4b6e9b282631-c24c36ef",
      "w-node-_2797b2f9-26d5-0a10-b841-4b6e9b282637-c24c36ef",
      "w-node-_2797b2f9-26d5-0a10-b841-4b6e9b28263d-c24c36ef"
    ];
    return nodeIds[index % nodeIds.length];
  };

  return (
    <div className="clients-section">
      <div className="container">
        <div className="main-grid">
          <div id="w-node-_4a0a34cf-a1e0-e2a0-840f-a56890ac4b9e-c24c36ef" className="small-number">
            Our clients
          </div>
          <div id="w-node-_2797b2f9-26d5-0a10-b841-4b6e9b282612-c24c36ef" className="w-layout-grid logo-grid-list">
            {logoPairs.map((pair, index) => (
              <div 
                key={`logo-container-${index}`}
                id={getNodeId(index)} 
                className="logo-grid-wrapper"
              >
                <div className="logo-grid-mask">
                  <LogoSlideContainer 
                    currentLogo={showFirstImage ? pair[0] : pair[1]}
                    nextLogo={showFirstImage ? pair[1] : pair[0]}
                    isSliding={isSliding}
                    index={index}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsSection; 