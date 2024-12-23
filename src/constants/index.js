export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Connect',
    href: '#contact',
  },
];


export const workExperiences = [
  {
    id: 1,
    name: 'Salesforce Trailhead | SmartInternz',
    pos: 'Development Intern',
    duration: 'May 2024 - July 2024',
    title: "Led the testing and enhancement of Trailhead modules, boosting user engagement by 20% and ensuring a seamless learning experience. Conducted thorough code reviews to foster teamwork and uphold high development standards. ",
    icon: '/assets/salesforce.png',
   
  },
  {
    id: 2,
    name: 'JPMorgan Chase [Virtual]',
    pos: 'SWE Intern',
    duration: 'June 2024 - July 2024',
    title: "Optimized dependency management workflows, saved 15% of the development time. Streamlined the overall build process for better efficiency, along with implementing dynamic real-time graphs.",
    icon: '/assets/jpmc.webp',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'AICTE - NEAT',
    pos: 'Machine Learning & AI Intern',
    duration: 'May 2023 - July 2023',
    title: "- Trained, and evaluated neural networks achieving a 30% reduction in training time including optimization of scalable data-lake solutions, streamlining data ingestion pipelines.",
    icon: '/assets/aicte.webp',
    animation: 'salute',
  },
]
// ---------------------------------------------------------------------------------


export const clientReviews = [
  {
    id: 1,
    name: 'Former Lead [Founding Chapter]',
    position: 'Google Developer Student Clubs | MRUH',
    img: 'assets/gdsc.png',
    review:
      'Led tech workshops and webinars on cutting-edge technology, partnering with 20+ colleges to host hackathons and events. Was one of the best experiences managing tech communities & enthusiasts.',
  },
  {
    id: 2,
    name: 'Student Vice President',
    position: 'Innovation & Entrepreneurship Cell | MRUH',
    img: 'assets/ecell.jpg',
    review:
      'Organized national and state-level summits, bringing industry leaders & innovators together. Spearheaded initiatives promoting collaboration, innovation, entrepreneurship & community building.',
  },
  {
    id: 3,
    name: 'Community Organizer ',
    position: 'GDSC WoW [Wonders of Wonders] ',
    img: 'assets/wow.jpeg',
    review:
      'Led the India Team in orchestrating a dynamic, month-long series of events across 12+ cities and 700+ Google Developer Student Clubs (GDSCs), driving innovation and fostering growth in the tech and development community.',
  },
  {
    id: 4,
    name: 'Community Volunteer',
    position: 'Web 2 & Web 3 spaces',
    img: 'assets/community.jpg',
    review:
      'Working with the OG web 2 and web 3 tech communities of the town like TensorFlow User Groups Hyd [TFUG], Google Developers Group [GDG], Women Tech Makers [WTM] Flutter & FlutterFlow Hyderabad, Hyderabad DAO etc as a volunteer.',
  },
];



//-----------------------------------------------------------------------------



export const myProjects = [
  {
    title: 'CogniDrive - Enhancing Autonomous Vehicle Efficacy',
    desc: 'Leverages cutting-edge Deep Reinforcement Learning (DRL) and Behavioral Cloning techniques to empower autonomous vehicles with advanced capabilities, enabling them to navigate complex, dynamic environments with unparalleled precision and adaptability. Enhances vehicle intelligence, allowing for safer, more efficient decision-making in real-time, while constantly improving performance.',
    subdesc:
      'Built with Python for scripting, CARLA for simulation, and TensorFlow for machine learning && DRL. Also integrates NumPy, Pygame, OpenCV, and testing frameworks like unittest, with CMake for building C++ components, supporting cross-platform development.',
    href: 'https://github.com/Sudhiksha03v/CogniDrive---Autonomous-Vehicle-Safety',
    texture: '/textures/project/cars.mp4',
    logo: '/assets/cognidrive.jpg',
    logoStyle: {
      backgroundColor: 'rgba(255, 251, 251, 0.3)',
      border: 'rgba(239, 231, 231, 0.3)',
      boxShadow: '0px 0px 60px 0pxrgba(236, 225, 224, 0.3)',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.webp',
      },
      {
        id: 2,
        name: 'Carla Simulator',
        path: 'assets/carla.png',
      },
      {
        id: 3,
        name: 'DRL',
        path: '/assets/ml.webp',
      },
      {
        id: 4,
        name: 'Open CV',
        path: '/assets/opencv.png',
      },
    ],
  },


  {
    title: 'PocketMultiverse - Orrery Web App (Made for a NASA Hack)',
    desc: 'A React and Vite web application integrating Three.js and WebGL to visualize near-Earth objects and the solar system using real-time data. The app allows users to explore celestial bodies, providing detailed information and interactive features for engaging with real-time astronomical data',
    subdesc:
      'This uses React and Vite for a dynamic and interactive user interface, powered by Three.js and WebGL for immersive 3D rendering. Leveraging resources from NASA 3D Resources, Planet Pixel Emporium & TurboSquid.Also uses Babel with modern ES6+ features and ensuring compatibility across browsers.',
    href: 'https://github.com/Sudhiksha03v/pocket-multiverse',
    texture: '/textures/project/nasa.mp4',
    logo: '/assets/nasa.jpg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.png',
      },
      {
        id: 2,
        name: 'Vite',
        path: 'assets/vite.png',
      },
      {
        id: 3,
        name: 'WebGL',
        path: '/assets/webgl.png',
      },
      {
        id: 4,
        name: 'Javascript',
        path: '/assets/js.png',
      },
    ],
  },



  {
    title: 'AgroDetect - Plant Disease Detection | ML Modelling',
    desc: 'Developed an image recognition-based machine learning system for the identification of diseases in tomato plants, which allowed early detection and timely intervention. It was integrated with data-lake infrastructure for better management of data and optimized algorithms for efficient agricultural operations.',
    subdesc:
      'Utilizes ML techniques for image recognition, specifically targeting tomato leaves to detect health conditions such as infection or disease. Key technologies and tools include Python, TensorFlow, OpenCV, Keras, trained on labeled datasets to ensure accurate classification and disease detection.',
    href: 'https://github.com/Sudhiksha03v/AgroDetect',
    texture: '/textures/project/agro.mp4',
    logo: '/assets/agro.jpg',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.webp',
      },
      {
        id: 2,
        name: 'TensorFlow',
        path: 'assets/tf.png',
      },
      {
        id: 3,
        name: 'OpenCV',
        path: '/assets/opencv.png',
      },
      {
        id: 4,
        name: 'Keras',
        path: '/assets/keras.png',
      },
    ],
  },


  {
    title: 'VaultX - A footwear brand mockup for a B2C Startup.',
    desc: 'A polished and intuitive landing page for a user-friendly footwear brand, designed to deliver a seamless and engaging experience for visitors. The page showcases a modern and responsive layout that adapts effortlessly across devices, with an emphasis on user-centered design principles. ',
    subdesc:
      'Integrated with a dynamic newsletter feature powered by Node.js and Mailchimp, users can easily subscribe to receive updates, promotions, and exclusive offers. This project demonstrates a strong focus on clean, visually appealing design, optimal performance, and smooth functionality for an elevated user journey',
    href: 'https://sudhiksha03v.github.io/VaultX/',
    texture: '/textures/project/vault.mp4',
    logo: '/assets/vault.jpg',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Javascript',
        path: '/assets/js.png',
      },
      {
        id: 2,
        name: 'node',
        path: 'assets/node.png',
      },
      {
        id: 3,
        name: 'html',
        path: '/assets/html.png',
      },
      {
        id: 4,
        name: 'css',
        path: '/assets/css.png',
      },
    ],
  },

  {
    title: 'VaultX - A footwear brand mockup for a B2C Startup.',
    desc: 'A polished and intuitive landing page for a user-friendly footwear brand, designed to deliver a seamless and engaging experience for visitors. The page showcases a modern and responsive layout that adapts effortlessly across devices, with an emphasis on user-centered design principles. ',
    subdesc:
      'Integrated with a dynamic newsletter feature powered by Node.js and Mailchimp, users can easily subscribe to receive updates, promotions, and exclusive offers. This project demonstrates a strong focus on clean, visually appealing design, optimal performance, and smooth functionality for an elevated user journey',
    href: 'https://sudhiksha03v.github.io/VaultX/',
    texture: '/textures/project/vault.mp4',
    logo: '/assets/vault.jpg',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Javascript',
        path: '/assets/js.png',
      },
      {
        id: 2,
        name: 'node',
        path: 'assets/node.png',
      },
      {
        id: 3,
        name: 'html',
        path: '/assets/html.png',
      },
      {
        id: 4,
        name: 'css',
        path: '/assets/css.png',
      },
    ],
  },
];




export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

