const projects = [
  {
    name: "Code Quest",
    description:
      "A dynamic coding platform featuring competitive contests and real-time collaborative coding.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
      {
        name: "webrtc",
        color: "violet-text-gradient",
      },
    ],
    image: "",
    source_code_link: "",
  },
  {
    name: "Site Sync",
    description:
      "A seamless website deployment platform for efficient project launches.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
      {
        name: "kafka",
        color: "violet-text-gradient",
      },
      {
        name: "postgresql",
        color: "orange-text-gradient",
      },
    ],
    image: "https://github.com/Sumitsh28/Site-Sync/blob/main/file.png?raw=true",
    source_code_link: "https://site-sync.vercel.app/",
  },
  {
    name: "Squad Hub",
    description:
      "A vibrant social media website enabling real-time communication and video group interactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chakraui",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "violet-text-gradient",
      },
      {
        name: "webrtc",
        color: "orange-text-gradient",
      },
    ],
    image: "",
    source_code_link: "",
  },
  {
    name: "Ind Hire",
    description:
      "A comprehensive job search platform connecting employees and employers seamlessly.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
      {
        name: "clerk",
        color: "violet-text-gradient",
      },
      {
        name: "shadcnui",
        color: "orange-text-gradient",
      },
    ],
    image: "",
    source_code_link: "",
  },
  {
    name: "Baat Cheet",
    description:
      "BAAT-CHEET is a real-time chat application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack and Socket.IO for real-time communication.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
      {
        name: "expressjs",
        color: "violet-text-gradient",
      },
    ],
    image:
      "https://github.com/Sumitsh28/Baat-Cheet/blob/master/file.png?raw=true",
    source_code_link: "https://baat-cheet-j0y6.onrender.com/",
  },
  {
    name: "EZ Resumee",
    description:
      "EZResumee, The Resume Builder Website is an innovative project designed to streamline the process of creating professional resumes.This platform offers users a seamless experience in crafting personalized resumes tailored to their career aspirations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "firebase",
        color: "pink-text-gradient",
      },

      {
        name: "redux",
        color: "violet-text-gradient",
      },
    ],
    image:
      "https://github.com/Sumitsh28/EZResumee/blob/master/file%20(1).png?raw=true",
    source_code_link: "https://resume-builder-128d2.web.app/",
  },
  {
    name: "Expense Tracker",
    description:
      "Expense Tracker is a web application developed using the MERN stack along with GraphQL for efficient data querying. This project allows users to track their expenses, categorize them, and analyze their spending habits over time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "graphql",
        color: "pink-text-gradient",
      },

      {
        name: "mongodb",
        color: "violet-text-gradient",
      },
      {
        name: "aceternityui",
        color: "orange-text-gradient",
      },
    ],
    image:
      "https://github.com/Sumitsh28/Expense/blob/master/file%20(2).png?raw=true",
    source_code_link: "https://expense-jgp9.onrender.com/",
  },
  {
    name: "Movieflix",
    description: "AN APP FOR ALL YOUR FAVOURITE MOVIES AND WATCHLATERS",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "scss",
        color: "pink-text-gradient",
      },

      {
        name: "omdbapi",
        color: "violet-text-gradient",
      },
    ],
    image:
      "https://github.com/Sumitsh28/movieflix/blob/main/Screenshot%20(88).png?raw=true",
    source_code_link: "https://movie-flix-ky.netlify.app/",
    gh_link: "https://github.com/Sumitsh28/movieflix",
  },
  {
    name: "IndKart",
    description: "Marketplace for all your goods",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "mongodb",
        color: "pink-text-gradient",
      },

      {
        name: "redux",
        color: "violet-text-gradient",
      },
    ],
    image: "",
    source_code_link: "",
    gh_link: "https://github.com/Sumitsh28/IndKart",
  },
  {
    name: "Dashboard UI",
    description: "Responsive Dashboard UI made in react.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image:
      "https://github.com/Sumitsh28/Flame/blob/main/Screenshot%20(89).png?raw=true",
    source_code_link: "https://flame-assignment.netlify.app/",
    gh_link: "https://github.com/Sumitsh28/Flame",
  },
  {
    name: "SMTP Mailing Server",
    description: "Simple Mailing SMTP server.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },

      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://cdn.educba.com/academy/wp-content/uploads/2019/07/smtp-protocol.png",
    source_code_link: "",
    gh_link: "https://github.com/Sumitsh28/Mail-server",
  },
  {
    name: "Atomic Blog",
    description: "Simple Blogging Website.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://raw.githubusercontent.com/Sumitsh28/Atomic-Blog/main/file%20(1).png",
    source_code_link: "https://atomic-blog-rho.vercel.app/",
    gh_link: "https://github.com/Sumitsh28/Atomic-Blog",
  },
  {
    name: "Classy Weather",
    description: "Simple weather website.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image:
      "https://github.com/Sumitsh28/Classy-Weather/raw/main/file.png?raw=true",
    source_code_link: "https://classy-weather-orcin-ten.vercel.app/",
    gh_link: "https://github.com/Sumitsh28/Classy-Weather",
  },
  {
    name: "usePopcorn",
    description: "Movie searching site.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://github.com/Sumitsh28/Movieflix-v2/raw/main/file.png?raw=true",
    source_code_link: "https://movieflix-v2.vercel.app/",
    gh_link: "https://github.com/Sumitsh28/Movieflix-v2",
  },
  {
    name: "Trillo",
    description:
      "A static booking website. Beautiful booking website made using HTML ans SCSS",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },

      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: "https://github.com/Sumitsh28/Trillo/raw/main/file.png?raw=true",
    source_code_link: "https://trillo-flame.vercel.app/",
    gh_link: "https://github.com/Sumitsh28/Trillo",
  },
  {
    name: "Nexter",
    description:
      "A static real estate buying website. Beautiful real estate buying website made using HTML ans SCSS",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },

      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: "https://github.com/Sumitsh28/Nexter/raw/main/file.png?raw=true",
    source_code_link: "https://nexter-tau-rust.vercel.app/",
    gh_link: "https://github.com/Sumitsh28/Nexter",
  },
  {
    name: "Natours",
    description:
      "A static travel package booking website. Beautiful travel website made using HTML ans SCSS",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },

      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: "https://github.com/Sumitsh28/Natours/raw/main/file.png?raw=true",
    source_code_link: "https://natours-two-silk.vercel.app/",
    gh_link: "https://github.com/Sumitsh28/Natours",
  },
  {
    name: "World Wise",
    description:
      "A travel tracking website. Track all your travel destinations using World Wise. Built using React.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },

      {
        name: "geolocation api",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://github.com/Sumitsh28/World-Wise/raw/main/file%20(1).png?raw=true",
    source_code_link: "https://world-wise-two-psi.vercel.app/",
    gh_link: "https://github.com/Sumitsh28/World-Wise",
  },
  {
    name: "Bill Split",
    description:
      "Bill Split: Way to split your bills. Bill spliting website built using React.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image:
      "https://github.com/Sumitsh28/Bill-Split/raw/main/file%20(1).png?raw=true",
    source_code_link: "https://bill-split-iota.vercel.app/",
    gh_link: "https://github.com/Sumitsh28/Bill-Split",
  },
  {
    name: "Pizza order",
    description: "Static Pizza Ordering Website built with React.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image:
      "https://github.com/Sumitsh28/Pizza-Order/raw/main/file%20(1).png?raw=true",
    source_code_link: "https://pizza-order-khaki.vercel.app/",
    gh_link: "https://github.com/Sumitsh28/Pizza-Order",
  },
  {
    name: "Pig Game",
    description: "Just a simple game.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image:
      "https://github.com/Sumitsh28/PigGame/raw/main/file%20(1).png?raw=true",
    source_code_link: "https://pig-game-phi-orpin.vercel.app/",
    gh_link: "https://github.com/Sumitsh28/PigGame",
  },
  {
    name: "Omni Foods",
    description:
      "A healthy meal delivered to your door, every single day Built with HTML, CSS, Javascript.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://github.com/Sumitsh28/Omnifoods/raw/main/file%20(1).png?raw=true",
    source_code_link: "https://omnifoods-five.vercel.app/",
    gh_link: "https://github.com/Sumitsh28/Omnifoods",
  },
  {
    name: "Bankist",
    description:
      "Bankist, The Banking Website is an innovative project. Built with cutting-edge technologies including HTML,CSS, and Javascript, this platform offers users a seamless experience in making accounts.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },

      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "orange",
        color: "orange-text-gradient",
      },
    ],
    image:
      "https://github.com/Sumitsh28/Bankist/raw/main/file%20(1).png?raw=true",
    source_code_link: "https://bankist-pearl.vercel.app/",
    gh_link: "https://github.com/Sumitsh28/Bankist",
  },
  {
    name: "Guess My Number",
    description: "Just a game.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },

      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "orange",
        color: "orange-text-gradient",
      },
    ],
    image:
      "https://github.com/Sumitsh28/Guess-My-Number/raw/main/file%20(1).png?raw=true",
    source_code_link: "https://guess-my-number-nu-lovat.vercel.app/",
    gh_link: "https://github.com/Sumitsh28/Guess-My-Number",
  },
];

export { projects };
