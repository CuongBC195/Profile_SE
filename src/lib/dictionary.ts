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
      role: 'Business Analyst & Backend Developer',
      description: 'A proactive and detail-oriented Business Analyst with a strong Software Engineering background, passionate about bridging business strategy and technology in dynamic international startup environments. Experienced in analyzing complex business processes, translating business needs into technical solutions, and creating thorough documentation (BRDs, User Stories). Eager to apply a systematic and solution-oriented mindset to optimize processes and drive growth.',
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
      p1: "I'm a Business Analyst (IT) with a solid technical background and 1+ year of experience in bridging business requirements with technical solutions. I specialize in requirements analysis, business documentation, and stakeholder communication.",
      p2: 'Currently pursuing my Bachelor of Information Technology at FPT University Can Tho, I combine academic knowledge with practical experience in Java, ASP.NET development, and business analysis tools like Figma, Draw.io, and Postman.',
      learnMore: 'Learn More',
      experience: 'Experience',
      projectsCompleted: 'Projects Completed',
      businessTools: 'Business Tools',
      education: 'Education',
      degree: 'Bachelor IT',
      years: '1 year+',
      count: '8+',
    },
    aboutPage: {
      title: 'About Me',
      subtitle: 'Business Analyst (IT) bridging technology and business needs in Can Tho City',
      role: 'Business Analyst & Backend Developer',
      journey: {
        title: 'My Journey',
        p1: "Hello! I'm Bui Chi Cuong, a proactive and detail-oriented Business Analyst with a strong Software Engineering background. I'm passionate about bridging business strategy and technology in dynamic international startup environments. Currently completing my Bachelor of Information Technology (Software Engineering .NET) at FPT University Campus Can Tho with a GPA of 7.9.",
        p2: 'I specialize in analyzing complex business processes, translating business needs into technical solutions, and creating comprehensive documentation including BRDs, SRS, User Stories, and Use Cases. My technical background in ASP.NET API development and backend systems allows me to effectively communicate with both business stakeholders and development teams.',
        p3: 'With experience across healthcare, HR tech, and recruitment platforms, I bring a systematic and solution-oriented mindset to optimize processes and drive growth. I\'m eager to apply my skills in requirement management, process analysis, and solution design to help organizations achieve their strategic objectives through effective technology implementation.',
      },
      experience: {
        title: 'Experience',
        hms: {
          title: 'Business Analyst / Backend Developer',
          description: 'Led requirements gathering sessions with stakeholders for a healthcare platform designed for personal health monitoring. Created comprehensive SRS documentation, designed 15+ core system workflows, and developed backend APIs using ASP.NET to ensure technical solutions aligned with business needs.',
        },
        uta: {
          title: 'Business Analyst Intern',
          description: 'Analyzed client requirements and existing business processes to identify system improvements. Authored comprehensive BRDs, User Stories, and Use Cases. Created wireframes and mockups in Figma, designed UML diagrams, and acted as liaison between stakeholders and technical teams.',
        },
        fj3do: {
          title: 'Business Analyst',
          description: 'Conducted stakeholder interviews with recruiters for an HR Tech platform. Designed end-to-end business logic and data models for job posting, candidate management, and application tracking. Created user flows and collaborated with development team on technical specifications.',
        },
      },
      sidebar: {
        quickInfo: 'Quick Info',
        location: 'Location',
        locationValue: 'Phong Dien, Can Tho City',
        experience: 'Experience',
        experienceValue: '1+ years',
        focus: 'Focus',
        focusValue: 'Business Analysis',
        education: 'Education',
        educationValue: 'Bachelor IT - GPA 7.9',
        availability: 'Availability',
        availabilityValue: 'Open to work',
        achievements: 'Key Achievements',
        interests: 'Interests',
        processOptimization: 'Process Optimization',
        businessInnovation: 'Business Innovation',
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
        businessAnalysis: 'Business Analysis',
        systemDesign: 'System Design',
        requirementsAnalysis: 'Requirements Analysis',
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
        description: 'Comprehensive healthcare management system with patient management, appointment scheduling, and medical records. Led development team and established detailed roadmaps and milestones.',
      },
      mab: {
        description: 'Multi-store e-commerce platform targeting the mom-and-baby retail sector. Researched user behaviors and market trends to enhance customer experience and boost engagement.',
      },
      fj3do: {
        description: 'Recruitment platform connecting job seekers and employers. Designed system workflows, user journeys, and data models to ensure smooth interaction between both sides.',
      },
    },
    contactPage: {
      title: 'Get In Touch',
      subtitle: "Let's discuss your business analysis needs or collaboration opportunities",
      conversation: {
        title: "Let's Start a Conversation",
        description: "I'm always interested in new opportunities, collaborations, or just a friendly chat about business analysis and technology. Whether you have a project in mind, need consultation on requirements analysis, or want to discuss business process optimization, I'd love to hear from you.",
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
        messagePlaceholder: 'Tell me about your project, ideas, or just say hello...',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Email client opened! Please send the email to complete your message.',
        disclaimer: 'By sending this message, you agree that I may contact you about your inquiry.',
      },
      info: {
        followMe: 'Follow Me',
        available: 'Available for business analysis projects',
        accepting: 'Currently accepting new freelance and full-time business analyst opportunities',
      },
      cta: {
        title: 'Ready to Start Your Business Analysis Project?',
        subtitle: "Let's transform your business requirements into actionable development plans",
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
      role: 'Chuyên viên Phân tích Nghiệp vụ & Lập trình viên Backend',
      description: 'Một Chuyên viên Phân tích Nghiệp vụ chủ động và tỉ mỉ với nền tảng Kỹ thuật Phần mềm vững chắc, đam mê kết nối chiến lược kinh doanh và công nghệ trong môi trường khởi nghiệp quốc tế năng động. Có kinh nghiệm phân tích quy trình nghiệp vụ phức tạp, chuyển đổi nhu cầu kinh doanh thành giải pháp kỹ thuật và tạo tài liệu chi tiết (BRD, User Stories). Mong muốn áp dụng tư duy hệ thống và định hướng giải pháp để tối ưu hóa quy trình và thúc đẩy tăng trưởng.',
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
      p1: 'Tôi là Chuyên viên Phân tích Nghiệp vụ (IT) với nền tảng kỹ thuật vững chắc và hơn 1 năm kinh nghiệm trong việc kết nối yêu cầu kinh doanh với giải pháp kỹ thuật. Tôi chuyên về phân tích yêu cầu, tài liệu hóa nghiệp vụ và giao tiếp với các bên liên quan.',
      p2: 'Hiện đang theo học Cử nhân Công nghệ Thông tin tại Đại học FPT Cần Thơ, tôi kết hợp kiến thức học thuật với kinh nghiệm thực tế trong phát triển Java, ASP.NET và các công cụ phân tích nghiệp vụ như Figma, Draw.io và Postman.',
      learnMore: 'Tìm hiểu thêm',
      experience: 'Kinh nghiệm',
      projectsCompleted: 'Dự án hoàn thành',
      businessTools: 'Công cụ nghiệp vụ',
      education: 'Học vấn',
      degree: 'Cử nhân CNTT',
      years: '1 năm+',
      count: '8+',
    },
    aboutPage: {
      title: 'Về tôi',
      subtitle: 'Chuyên viên Phân tích Nghiệp vụ (IT) kết nối công nghệ và nhu cầu kinh doanh tại Cần Thơ',
      role: 'Chuyên viên Phân tích Nghiệp vụ & Lập trình viên Backend',
      journey: {
        title: 'Hành trình của tôi',
        p1: 'Xin chào! Tôi là Bùi Chí Cường, một Chuyên viên Phân tích Nghiệp vụ chủ động và tỉ mỉ với nền tảng Kỹ thuật Phần mềm vững chắc. Tôi đam mê kết nối chiến lược kinh doanh và công nghệ trong môi trường khởi nghiệp quốc tế năng động. Hiện đang hoàn thành chương trình Cử nhân Công nghệ Thông tin (Kỹ thuật Phần mềm .NET) tại Đại học FPT Cần Thơ với GPA 7.9.',
        p2: 'Tôi chuyên về phân tích các quy trình nghiệp vụ phức tạp, chuyển đổi nhu cầu kinh doanh thành giải pháp kỹ thuật và tạo tài liệu toàn diện bao gồm BRD, SRS, User Stories và Use Cases. Nền tảng kỹ thuật về phát triển API ASP.NET và hệ thống backend cho phép tôi giao tiếp hiệu quả với cả các bên liên quan về kinh doanh và đội ngũ phát triển.',
        p3: 'Với kinh nghiệm trong các lĩnh vực chăm sóc sức khỏe, công nghệ nhân sự và nền tảng tuyển dụng, tôi mang đến tư duy hệ thống và định hướng giải pháp để tối ưu hóa quy trình và thúc đẩy tăng trưởng. Tôi mong muốn áp dụng các kỹ năng quản lý yêu cầu, phân tích quy trình và thiết kế giải pháp để giúp các tổ chức đạt được mục tiêu chiến lược thông qua việc triển khai công nghệ hiệu quả.',
      },
      experience: {
        title: 'Kinh nghiệm',
        hms: {
          title: 'Chuyên viên Phân tích Nghiệp vụ / Lập trình viên Backend',
          description: 'Dẫn dắt các buổi thu thập yêu cầu với các bên liên quan cho nền tảng chăm sóc sức khỏe được thiết kế để theo dõi sức khỏe cá nhân. Tạo tài liệu SRS toàn diện, thiết kế hơn 15 quy trình hệ thống cốt lõi và phát triển API backend sử dụng ASP.NET để đảm bảo các giải pháp kỹ thuật phù hợp với nhu cầu kinh doanh.',
        },
        uta: {
          title: 'Thực tập sinh Phân tích Nghiệp vụ',
          description: 'Phân tích yêu cầu của khách hàng và quy trình kinh doanh hiện tại để xác định các cải tiến hệ thống. Soạn thảo BRD, User Stories và Use Cases toàn diện. Tạo wireframe và mockup trong Figma, thiết kế sơ đồ UML và đóng vai trò liên lạc giữa các bên liên quan và đội ngũ kỹ thuật.',
        },
        fj3do: {
          title: 'Chuyên viên Phân tích Nghiệp vụ',
          description: 'Thực hiện phỏng vấn các bên liên quan với nhà tuyển dụng cho nền tảng Công nghệ Nhân sự. Thiết kế logic nghiệp vụ đầu cuối và mô hình dữ liệu cho đăng tin tuyển dụng, quản lý ứng viên và theo dõi ứng tuyển. Tạo luồng người dùng và phối hợp với đội ngũ phát triển về các thông số kỹ thuật.',
        },
      },
      sidebar: {
        quickInfo: 'Thông tin nhanh',
        location: 'Địa điểm',
        locationValue: 'Phong Điền, TP. Cần Thơ',
        experience: 'Kinh nghiệm',
        experienceValue: '1+ năm',
        focus: 'Trọng tâm',
        focusValue: 'Phân tích Nghiệp vụ',
        education: 'Học vấn',
        educationValue: 'Cử nhân CNTT - GPA 7.9',
        availability: 'Tình trạng',
        availabilityValue: 'Sẵn sàng làm việc',
        achievements: 'Thành tựu chính',
        interests: 'Sở thích',
        processOptimization: 'Tối ưu hóa quy trình',
        businessInnovation: 'Đổi mới kinh doanh',
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
        businessAnalysis: 'Phân tích Nghiệp vụ',
        systemDesign: 'Thiết kế Hệ thống',
        requirementsAnalysis: 'Phân tích Yêu cầu',
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
        description: 'Hệ thống quản lý chăm sóc sức khỏe toàn diện với quản lý bệnh nhân, đặt lịch hẹn và hồ sơ y tế. Dẫn dắt đội ngũ phát triển và thiết lập lộ trình và các cột mốc chi tiết.',
      },
      mab: {
        description: 'Nền tảng thương mại điện tử đa cửa hàng nhắm đến lĩnh vực bán lẻ mẹ và bé. Nghiên cứu hành vi người dùng và xu hướng thị trường để nâng cao trải nghiệm khách hàng và tăng cường tương tác.',
      },
      fj3do: {
        description: 'Nền tảng tuyển dụng kết nối người tìm việc và nhà tuyển dụng. Thiết kế quy trình hệ thống, hành trình người dùng và mô hình dữ liệu để đảm bảo tương tác mượt mà giữa hai bên.',
      },
    },
    contactPage: {
      title: 'Liên hệ',
      subtitle: 'Hãy thảo luận về nhu cầu phân tích nghiệp vụ hoặc cơ hội hợp tác',
      conversation: {
        title: 'Bắt đầu cuộc trò chuyện',
        description: 'Tôi luôn quan tâm đến các cơ hội mới, sự hợp tác hoặc chỉ là một cuộc trò chuyện thân thiện về phân tích nghiệp vụ và công nghệ. Cho dù bạn có ý tưởng dự án, cần tư vấn về phân tích yêu cầu hoặc muốn thảo luận về tối ưu hóa quy trình kinh doanh, tôi rất mong được nghe từ bạn.',
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
        messagePlaceholder: 'Hãy cho tôi biết về dự án, ý tưởng của bạn hoặc chỉ cần nói xin chào...',
        send: 'Gửi tin nhắn',
        sending: 'Đang gửi...',
        success: 'Đã mở ứng dụng email! Vui lòng gửi email để hoàn tất tin nhắn của bạn.',
        disclaimer: 'Bằng cách gửi tin nhắn này, bạn đồng ý rằng tôi có thể liên hệ với bạn về yêu cầu của bạn.',
      },
      info: {
        followMe: 'Theo dõi tôi',
        available: 'Sẵn sàng cho các dự án phân tích nghiệp vụ',
        accepting: 'Hiện đang nhận các cơ hội phân tích nghiệp vụ freelance và toàn thời gian',
      },
      cta: {
        title: 'Sẵn sàng bắt đầu dự án Phân tích Nghiệp vụ của bạn?',
        subtitle: 'Hãy chuyển đổi yêu cầu kinh doanh của bạn thành kế hoạch phát triển khả thi',
        button: 'Gửi Email Trực tiếp',
      },
    },
  },
};
