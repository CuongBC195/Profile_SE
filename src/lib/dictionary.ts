export type Dictionary = {
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    description: string;
    viewProjects: string;
    getInTouch: string;
  };
  skills: {
    title: string;
    subtitle: string;
    proficiency: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    learnMore: string;
    experience: string;
    projectsCompleted: string;
    businessTools: string;
    education: string;
    degree: string;
    years: string;
    count: string;
  };
  aboutPage: {
    title: string;
    subtitle: string;
    role: string;
    journey: {
      title: string;
      p1: string;
      p2: string;
      p3: string;
    };
    experience: {
      title: string;
      hms: {
        title: string;
        description: string;
      };
      uta: {
        title: string;
        description: string;
      };
      fj3do: {
        title: string;
        description: string;
      };
    };
    sidebar: {
      quickInfo: string;
      location: string;
      locationValue: string;
      experience: string;
      experienceValue: string;
      focus: string;
      focusValue: string;
      education: string;
      educationValue: string;
      availability: string;
      availabilityValue: string;
      achievements: string;
      interests: string;
      processOptimization: string;
      businessInnovation: string;
      continuousLearning: string;
      problemSolving: string;
    };
  };
  projectsPage: {
    title: string;
    subtitle: string;
    featured: {
      title: string;
      subtitle: string;
    };
    allProjects: {
      title: string;
      subtitle: string;
    };
    categories: {
      all: string;
      businessAnalysis: string;
      systemDesign: string;
      requirementsAnalysis: string;
    };
    status: {
      completed: string;
    };
    buttons: {
      demo: string;
      code: string;
      liveDemo: string;
    };
    hms: {
      description: string;
    };
    mab: {
      description: string;
    };
    fj3do: {
      description: string;
    };
  };
  contactPage: {
    title: string;
    subtitle: string;
    conversation: {
      title: string;
      description: string;
    };
    form: {
      title: string;
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      send: string;
      sending: string;
      success: string;
      disclaimer: string;
    };
    info: {
      followMe: string;
      available: string;
      accepting: string;
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
};

export const dictionary: Record<'en' | 'vi', Dictionary> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hello, I'm",
      role: 'Software Engineer',
      description: 'A passionate Software Engineer specializing in full-stack development with expertise in .NET 8, ASP.NET Core Web API, and modern frontend technologies. Experienced in building scalable RESTful APIs, designing optimized database schemas, and developing responsive web applications. Committed to writing clean, maintainable code and solving complex technical challenges with logical problem-solving approaches.',
      viewProjects: 'View Projects',
      getInTouch: 'Get In Touch',
    },
    skills: {
      title: 'Technical Skills',
      subtitle: 'Technologies and tools I use to bring ideas to life',
      proficiency: 'Proficiency',
    },
    about: {
      title: 'About Me',
      p1: "I'm a Software Engineer with expertise in full-stack development, specializing in .NET 8, ASP.NET Core Web API, and modern frontend frameworks. With 1+ year of experience building scalable applications, I focus on creating efficient RESTful APIs, optimizing database performance, and developing responsive user interfaces.",
      p2: "Currently pursuing my Bachelor of Information Technology at FPT University Can Tho, I combine academic knowledge with hands-on experience in .NET development, React, Next.js, and database design. I'm passionate about clean code principles, logical problem-solving, and staying updated with the latest technologies.",
      learnMore: 'Learn More',
      experience: 'Experience',
      projectsCompleted: 'Projects Completed',
      businessTools: 'Technologies',
      education: 'Education',
      degree: 'Bachelor IT',
      years: '1 year+',
      count: '8+',
    },
    aboutPage: {
      title: 'About Me',
      subtitle: 'Software Engineer specializing in full-stack development in Can Tho City',
      role: 'Software Engineer',
      journey: {
        title: 'My Journey',
        p1: "Hello! I'm Bui Chi Cuong, a passionate Software Engineer with expertise in full-stack development. I specialize in building scalable applications using .NET 8, ASP.NET Core Web API, and modern frontend technologies like Next.js and React. Currently completing my Bachelor of Information Technology (Software Engineering .NET) at FPT University Campus Can Tho with a GPA of 7.9.",
        p2: 'I have hands-on experience developing RESTful APIs, designing and optimizing database schemas (PostgreSQL, SQL Server, MySQL), and creating responsive web applications. My focus is on writing clean, maintainable code and implementing best practices in software engineering. I enjoy solving complex technical challenges and continuously learning new technologies to stay at the forefront of software development.',
        p3: 'With experience across healthcare systems, e-commerce platforms, and recruitment applications, I bring strong technical skills in backend development, database optimization, and frontend implementation. I\'m eager to apply my expertise in API design, clean code principles, and logical problem-solving to build robust, scalable software solutions that deliver exceptional user experiences.',
      },
      experience: {
        title: 'Experience',
        hms: {
          title: 'Full-stack Developer',
          description: 'Developed a comprehensive health management platform allowing users to track physical fitness, nutrition, and mental well-being. Implemented features for tracking weight, body metrics, workout schedules, and nutrition plans. Integrated Gemini API for food recognition, nutrition analysis, and AI-powered recommendations. Built backend with ASP.NET Web API, SQL Server, and Redis. Developed frontend with ReactJS + Bootstrap for web and React Native (Expo) for mobile. Integrated PayOS for payments, containerized with Docker, and deployed on Google Cloud Platform.',
        },
        uta: {
          title: 'Software Engineer Intern',
          description: 'Developed web applications using ASP.NET and modern frontend frameworks. Implemented database designs, created API endpoints, and wrote clean, maintainable code following best practices. Participated in code reviews and collaborated with team members on technical solutions.',
        },
        fj3do: {
          title: 'Full-Stack Developer',
          description: 'Built a recruitment platform using Java Jakarta Servlet and modern web technologies. Designed database schemas for job posting and candidate management systems. Developed both frontend interfaces and backend APIs, ensuring optimal performance and user experience.',
        },
      },
      sidebar: {
        quickInfo: 'Quick Info',
        location: 'Location',
        locationValue: 'Phong Dien, Can Tho City',
        experience: 'Experience',
        experienceValue: '1+ years',
        focus: 'Focus',
        focusValue: 'Full-Stack Development',
        education: 'Education',
        educationValue: 'Bachelor IT - GPA 7.9',
        availability: 'Availability',
        availabilityValue: 'Open to work',
        achievements: 'Key Achievements',
        interests: 'Interests',
        processOptimization: 'API Development',
        businessInnovation: 'Clean Code',
        continuousLearning: 'Continuous Learning',
        problemSolving: 'Problem Solving',
      },
    },
    projectsPage: {
      title: 'My Projects',
      subtitle: 'A showcase of my latest work and contributions to the developer community',
      featured: {
        title: 'Featured Projects',
        subtitle: 'Highlighting some of my most impactful and innovative projects',
      },
      allProjects: {
        title: 'All Projects',
        subtitle: 'Explore my complete portfolio of work',
      },
      categories: {
        all: 'All',
        businessAnalysis: 'Backend Development',
        systemDesign: 'Full-Stack',
        requirementsAnalysis: 'Frontend Development',
      },
      status: {
        completed: 'Completed',
      },
      buttons: {
        demo: 'Live Demo',
        code: 'GitHub',
        liveDemo: 'Live Demo',
      },
      hms: {
        description: 'Developed a comprehensive health management platform that allows users to track physical fitness, nutrition, and mental well-being in a unified system. Key features include tracking weight, body metrics, workout schedules, and nutrition plans. Integrated Gemini API for food recognition, nutrition analysis, and AI-powered recommendations for meal plans, workouts, and cooking instructions. Built with ASP.NET Web API, SQL Server, and Redis for high performance. Frontend includes ReactJS + Bootstrap for web and React Native (Expo) for mobile. Integrated PayOS for online payments, containerized with Docker, and deployed on Google Cloud Platform (GCP).',
      },
      mab: {
        description: 'Developed a comprehensive electronic contract and receipt management platform that enables users to create, manage, sign, and track digital documents with legally binding digital signatures. Key features include creating contracts from templates or custom PDFs with rich text editor, digital signatures with drawing and typing support, multi-party signing, PDF generation and merging with embedded signatures using PuppeteerSharp and iText7. Includes automated email notifications, JWT authentication with RBAC, and comprehensive user management dashboard. Built with ASP.NET Core 8.0 Web API, PostgreSQL, Entity Framework Core, Next.js 15, TypeScript, and Tailwind CSS.',
      },
      fj3do: {
        description: 'Recruitment platform connecting job seekers and employers. Built with Java Jakarta Servlet, featuring comprehensive database design for job postings, candidate management, and application tracking. Implemented RESTful architecture for seamless API integration.',
      },
    },
    contactPage: {
      title: 'Get In Touch',
      subtitle: "Let's discuss your software development needs or collaboration opportunities",
      conversation: {
        title: "Let's Start a Conversation",
        description: "I'm always interested in new opportunities, collaborations, or just a friendly chat about software development and technology. Whether you have a project in mind, need consultation on API development, or want to discuss building scalable applications, I'd love to hear from you.",
      },
      form: {
        title: 'Send a Message',
        name: 'Name',
        namePlaceholder: 'Your full name',
        email: 'Email',
        emailPlaceholder: 'your.email@example.com',
        subject: 'Subject',
        subjectPlaceholder: 'Project inquiry, collaboration, etc.',
        message: 'Message',
        messagePlaceholder: 'Tell me about your development project, ideas, or just say hello...',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Email client opened! Please send the email to complete your message.',
        disclaimer: 'By sending this message, you agree that I may contact you about your inquiry.',
      },
      info: {
        followMe: 'Follow Me',
        available: 'Available for software development projects',
        accepting: 'Currently accepting new freelance and full-time software engineering opportunities',
      },
      cta: {
        title: 'Ready to Start Your Software Development Project?',
        subtitle: "Let's build scalable, efficient solutions together",
        button: 'Email Me Directly',
      },
    },
  },
  vi: {
    nav: {
      home: 'Trang chủ',
      about: 'Giới thiệu',
      projects: 'Dự án',
      contact: 'Liên hệ',
    },
    hero: {
      greeting: 'Xin chào, tôi là',
      role: 'Kỹ sư Phần mềm',
      description: 'Một Kỹ sư Phần mềm đam mê chuyên về phát triển full-stack với chuyên môn trong .NET 8, ASP.NET Core Web API và các công nghệ frontend hiện đại. Có kinh nghiệm xây dựng RESTful API có khả năng mở rộng, thiết kế schema cơ sở dữ liệu tối ưu và phát triển ứng dụng web responsive. Cam kết viết code sạch, dễ bảo trì và giải quyết các thách thức kỹ thuật phức tạp với phương pháp giải quyết vấn đề logic.',
      viewProjects: 'Xem Dự án',
      getInTouch: 'Liên hệ',
    },
    skills: {
      title: 'Kỹ năng Chuyên môn',
      subtitle: 'Công nghệ và công cụ tôi sử dụng để hiện thực hóa ý tưởng',
      proficiency: 'Thành thạo',
    },
    about: {
      title: 'Về tôi',
      p1: 'Tôi là Kỹ sư Phần mềm với chuyên môn về phát triển full-stack, chuyên về .NET 8, ASP.NET Core Web API và các framework frontend hiện đại. Với hơn 1 năm kinh nghiệm xây dựng ứng dụng có khả năng mở rộng, tôi tập trung vào việc tạo RESTful API hiệu quả, tối ưu hóa hiệu suất cơ sở dữ liệu và phát triển giao diện người dùng responsive.',
      p2: 'Hiện đang theo học Cử nhân Công nghệ Thông tin tại Đại học FPT Cần Thơ, tôi kết hợp kiến thức học thuật với kinh nghiệm thực tế trong phát triển .NET, React, Next.js và thiết kế cơ sở dữ liệu. Tôi đam mê các nguyên tắc clean code, giải quyết vấn đề logic và cập nhật các công nghệ mới nhất.',
      learnMore: 'Tìm hiểu thêm',
      experience: 'Kinh nghiệm',
      projectsCompleted: 'Dự án hoàn thành',
      businessTools: 'Công nghệ',
      education: 'Học vấn',
      degree: 'Cử nhân CNTT',
      years: '1 năm+',
      count: '8+',
    },
    aboutPage: {
      title: 'Về tôi',
      subtitle: 'Kỹ sư Phần mềm chuyên về phát triển full-stack tại Cần Thơ',
      role: 'Kỹ sư Phần mềm',
      journey: {
        title: 'Hành trình của tôi',
        p1: 'Xin chào! Tôi là Bùi Chí Cường, một Kỹ sư Phần mềm đam mê với chuyên môn về phát triển full-stack. Tôi chuyên về xây dựng ứng dụng có khả năng mở rộng sử dụng .NET 8, ASP.NET Core Web API và các công nghệ frontend hiện đại như Next.js và React. Hiện đang hoàn thành chương trình Cử nhân Công nghệ Thông tin (Kỹ thuật Phần mềm .NET) tại Đại học FPT Cần Thơ với GPA 7.9.',
        p2: 'Tôi có kinh nghiệm thực tế trong việc phát triển RESTful API, thiết kế và tối ưu hóa schema cơ sở dữ liệu (PostgreSQL, SQL Server, MySQL), và tạo ứng dụng web responsive. Trọng tâm của tôi là viết code sạch, dễ bảo trì và triển khai các best practices trong kỹ thuật phần mềm. Tôi thích giải quyết các thách thức kỹ thuật phức tạp và liên tục học hỏi các công nghệ mới để luôn ở vị trí hàng đầu trong phát triển phần mềm.',
        p3: 'Với kinh nghiệm trong các hệ thống chăm sóc sức khỏe, nền tảng thương mại điện tử và ứng dụng tuyển dụng, tôi mang đến các kỹ năng kỹ thuật mạnh mẽ trong phát triển backend, tối ưu hóa cơ sở dữ liệu và triển khai frontend. Tôi mong muốn áp dụng chuyên môn của mình trong thiết kế API, nguyên tắc clean code và giải quyết vấn đề logic để xây dựng các giải pháp phần mềm mạnh mẽ, có khả năng mở rộng mang lại trải nghiệm người dùng xuất sắc.',
      },
      experience: {
        title: 'Kinh nghiệm',
        hms: {
          title: 'Lập trình viên Full-stack',
          description: 'Phát triển nền tảng quản lý sức khỏe toàn diện cho phép người dùng theo dõi thể lực, dinh dưỡng và sức khỏe tinh thần. Triển khai tính năng theo dõi cân nặng, chỉ số cơ thể, lịch tập luyện và kế hoạch dinh dưỡng. Tích hợp Gemini API để nhận diện thực phẩm, phân tích dinh dưỡng và đề xuất AI. Xây dựng backend với ASP.NET Web API, SQL Server và Redis. Phát triển frontend với ReactJS + Bootstrap cho web và React Native (Expo) cho mobile. Tích hợp PayOS cho thanh toán, containerized với Docker và triển khai trên Google Cloud Platform.',
        },
        uta: {
          title: 'Thực tập sinh Kỹ sư Phần mềm',
          description: 'Phát triển ứng dụng web sử dụng ASP.NET và các framework frontend hiện đại. Triển khai thiết kế cơ sở dữ liệu, tạo endpoint API và viết code sạch, dễ bảo trì tuân theo best practices. Tham gia code review và hợp tác với các thành viên trong nhóm về các giải pháp kỹ thuật.',
        },
        fj3do: {
          title: 'Lập trình viên Full-Stack',
          description: 'Xây dựng nền tảng tuyển dụng sử dụng Java Jakarta Servlet và các công nghệ web hiện đại. Thiết kế schema cơ sở dữ liệu cho hệ thống đăng tin tuyển dụng và quản lý ứng viên. Phát triển cả giao diện frontend và API backend, đảm bảo hiệu suất tối ưu và trải nghiệm người dùng.',
        },
      },
      sidebar: {
        quickInfo: 'Thông tin nhanh',
        location: 'Địa điểm',
        locationValue: 'Phong Điền, TP. Cần Thơ',
        experience: 'Kinh nghiệm',
        experienceValue: '1+ năm',
        focus: 'Trọng tâm',
        focusValue: 'Phát triển Full-Stack',
        education: 'Học vấn',
        educationValue: 'Cử nhân CNTT - GPA 7.9',
        availability: 'Tình trạng',
        availabilityValue: 'Sẵn sàng làm việc',
        achievements: 'Thành tựu chính',
        interests: 'Sở thích',
        processOptimization: 'Phát triển API',
        businessInnovation: 'Clean Code',
        continuousLearning: 'Học tập liên tục',
        problemSolving: 'Giải quyết vấn đề',
      },
    },
    projectsPage: {
      title: 'Dự án của tôi',
      subtitle: 'Trưng bày các công việc mới nhất và đóng góp cho cộng đồng lập trình viên',
      featured: {
        title: 'Dự án nổi bật',
        subtitle: 'Điểm qua một số dự án ấn tượng và sáng tạo nhất của tôi',
      },
      allProjects: {
        title: 'Tất cả dự án',
        subtitle: 'Khám phá toàn bộ danh mục công việc của tôi',
      },
      categories: {
        all: 'Tất cả',
        businessAnalysis: 'Phát triển Backend',
        systemDesign: 'Full-Stack',
        requirementsAnalysis: 'Phát triển Frontend',
      },
      status: {
        completed: 'Hoàn thành',
      },
      buttons: {
        demo: 'Demo',
        code: 'Mã nguồn',
        liveDemo: 'Xem Demo',
      },
      hms: {
        description: 'Phát triển nền tảng quản lý sức khỏe toàn diện cho phép người dùng theo dõi thể lực, dinh dưỡng và sức khỏe tinh thần trong một hệ thống thống nhất. Tính năng chính bao gồm theo dõi cân nặng, chỉ số cơ thể, lịch tập luyện và kế hoạch dinh dưỡng. Tích hợp Gemini API để nhận diện thực phẩm, phân tích dinh dưỡng và đề xuất AI cho bữa ăn, bài tập và hướng dẫn nấu ăn. Xây dựng với ASP.NET Web API, SQL Server và Redis để đạt hiệu suất cao. Frontend bao gồm ReactJS + Bootstrap cho web và React Native (Expo) cho mobile. Tích hợp PayOS cho thanh toán trực tuyến, containerized với Docker và triển khai trên Google Cloud Platform (GCP).',
      },
      mab: {
        description: 'Phát triển nền tảng quản lý hợp đồng và hóa đơn điện tử toàn diện cho phép người dùng tạo, quản lý, ký và theo dõi tài liệu số với chữ ký số có giá trị pháp lý. Tính năng chính bao gồm tạo hợp đồng từ template hoặc PDF tùy chỉnh với rich text editor, chữ ký số hỗ trợ vẽ và gõ, ký đa bên, tạo và hợp nhất PDF với chữ ký nhúng sử dụng PuppeteerSharp và iText7. Bao gồm thông báo email tự động, xác thực JWT với RBAC và dashboard quản lý người dùng toàn diện. Xây dựng với ASP.NET Core 8.0 Web API, PostgreSQL, Entity Framework Core, Next.js 15, TypeScript và Tailwind CSS.',
      },
      fj3do: {
        description: 'Nền tảng tuyển dụng kết nối người tìm việc và nhà tuyển dụng. Được xây dựng với Java Jakarta Servlet, có thiết kế cơ sở dữ liệu toàn diện cho đăng tin tuyển dụng, quản lý ứng viên và theo dõi ứng tuyển. Triển khai kiến trúc RESTful để tích hợp API mượt mà.',
      },
    },
    contactPage: {
      title: 'Liên hệ',
      subtitle: 'Hãy thảo luận về nhu cầu phát triển phần mềm hoặc cơ hội hợp tác',
      conversation: {
        title: 'Bắt đầu cuộc trò chuyện',
        description: 'Tôi luôn quan tâm đến các cơ hội mới, sự hợp tác hoặc chỉ là một cuộc trò chuyện thân thiện về phát triển phần mềm và công nghệ. Cho dù bạn có ý tưởng dự án, cần tư vấn về phát triển API hoặc muốn thảo luận về xây dựng ứng dụng có khả năng mở rộng, tôi rất mong được nghe từ bạn.',
      },
      form: {
        title: 'Gửi tin nhắn',
        name: 'Tên',
        namePlaceholder: 'Họ và tên của bạn',
        email: 'Email',
        emailPlaceholder: 'email.cua.ban@example.com',
        subject: 'Chủ đề',
        subjectPlaceholder: 'Hỏi về dự án, hợp tác, v.v.',
        message: 'Tin nhắn',
        messagePlaceholder: 'Hãy cho tôi biết về dự án phát triển, ý tưởng của bạn hoặc chỉ cần nói xin chào...',
        send: 'Gửi tin nhắn',
        sending: 'Đang gửi...',
        success: 'Đã mở ứng dụng email! Vui lòng gửi email để hoàn tất tin nhắn của bạn.',
        disclaimer: 'Bằng cách gửi tin nhắn này, bạn đồng ý rằng tôi có thể liên hệ với bạn về yêu cầu của bạn.',
      },
      info: {
        followMe: 'Theo dõi tôi',
        available: 'Sẵn sàng cho các dự án phát triển phần mềm',
        accepting: 'Hiện đang nhận các cơ hội kỹ sư phần mềm freelance và toàn thời gian',
      },
      cta: {
        title: 'Sẵn sàng bắt đầu dự án Phát triển Phần mềm của bạn?',
        subtitle: 'Hãy cùng nhau xây dựng các giải pháp hiệu quả, có khả năng mở rộng',
        button: 'Gửi Email Trực tiếp',
      },
    },
  },
};
