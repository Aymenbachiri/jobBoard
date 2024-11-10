export type Job = {
  id: number;
  title: string;
  type: string;
  companyName: string;
  locationType: string;
  location: string;
  applicationEmail?: string;
  applicationUrl: string;
  slug: string;
  salary: number;
  approved: boolean;
  description: string;
  companyLogoUrl?: string;
  createdAt?: Date;
};

export const placeholderJobs: Job[] = [
  {
    id: 1,
    title: "Full-Stack Developer at Stripe",
    type: "Full-time",
    companyName: "Stripe",
    locationType: "Remote",
    location: "San Francisco, California, United States",
    applicationEmail: "apply@stripe.com",
    applicationUrl: "https://stripe.com/apply",
    slug: "full-stack-developer-at-stripe-1",
    salary: 150000,
    approved: true,
    description: `
        **About Stripe**
        
        Stripe is a global technology company that builds economic infrastructure for the internet. Our suite of products and services are designed to power commerce for online businesses of all sizes. At Stripe, we're looking for passionate, creative, and innovative developers to help build the next generation of payment platforms.
        
        **Job Description**
        
        As a Full-Stack Developer at Stripe, you will be working on cutting-edge technology to build and maintain scalable, efficient, and reliable software solutions. You'll collaborate with a team of talented engineers, designers, and product managers to deliver exceptional user experiences.
        
        **Key Responsibilities**
        
        - Design, develop, test, deploy, maintain, and improve software across the stack.
        - Work closely with other engineering teams to integrate and develop new features.
        - Contribute to the full software development lifecycle, including requirements analysis, architecture, design, coding, testing, and deployment.
        - Optimize applications for maximum speed and scalability.
        - Participate in code reviews and mentor junior developers.
        
        **Qualifications**
        
        - Bachelor's degree in Computer Science, Engineering, or a related field, or equivalent practical experience.
        - 3+ years of experience in full-stack development.
        - Proficiency in one or more general-purpose programming languages including but not limited to: Ruby, Java, JavaScript, Python.
        - Experience with front-end technologies such as React, Angular, or Vue.js.
        - Familiarity with server-side frameworks like Ruby on Rails, Django, or Node.js.
        - Knowledge of database technologies such as MySQL, PostgreSQL, and MongoDB.
        - Strong understanding of web technologies and architectures.
        - Excellent problem-solving skills and attention to detail.
        
        **Benefits**
        
        - Competitive salary and equity package.
        - Health, dental, and vision insurance.
        - Generous vacation and parental leave policies.
        - 401(k) plan with employer match.
        - Flexible work arrangements.
        - Continuous learning and development opportunities.
        
        Stripe is an equal opportunity employer. We value diversity and are committed to creating an inclusive environment for all employees.
      `,
    companyLogoUrl: "https://stripe.com/logo.png",
    createdAt: new Date("2024-10-01"),
  },
  {
    id: 2,
    title: "Full-Stack Developer at Vercel",
    type: "Full-time",
    companyName: "Vercel",
    locationType: "Hybrid",
    location: "Ottawa, Ontario, Canada",
    applicationEmail: "apply@vercel.com",
    applicationUrl: "https://vercel.com/apply",
    slug: "full-stack-developer-at-vercel-2",
    salary: 120000,
    approved: true,
    description: `
        **About Vercel:** 
        
        Vercel is a cloud platform for static sites and Serverless Functions that fits perfectly with your workflow. It enables developers to host Jamstack websites with ease.
        
        Job Description: We're looking for a talented Full-Stack Developer to join our dynamic team. As a Full-Stack Developer at Vercel, you'll work on a variety of projects, building high-quality, scalable web applications. You'll collaborate with a team of designers, developers, and product managers to push the boundaries of what's possible on the web.
        
        **Key Responsibilities:**
        
        - Develop and maintain front-end and back-end components of our web applications.
        - Collaborate with cross-functional teams to define, design, and ship new features.
        - Ensure the performance, quality, and responsiveness of applications.
        - Identify and correct bottlenecks and fix bugs.
        - Help maintain code quality, organization, and automatization.
        
        **Qualifications:**
        
        - Bachelor's degree in Computer Science or a related field, or equivalent experience.
        - Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model.
        - Experience with React.js and its core principles.
        - Experience with popular React.js workflows (such as Flux or Redux).
        - Familiarity with newer specifications of EcmaScript.
        - Experience with data structure libraries (e.g., Immutable.js).
        - Knowledge of isomorphic React is a plus.
        - Experience with RESTful APIs.
        - Knowledge of modern authorization mechanisms, such as JSON Web Token.
        - Familiarity with modern front-end build pipelines and tools.
        - Experience with common front-end development tools such as Babel, Webpack, NPM, etc.
        - A knack for benchmarking and optimization.
        - Familiarity with code versioning tools (such as Git).
        
        **Benefits:**
        
        - Competitive salary and equity.
        - Health, dental, and vision insurance.
        - Unlimited vacation policy.
        - Home office stipend.
        - Professional development allowance.
        
        Vercel is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.
        
        Join us at Vercel and be a part of shaping the future of web development!
      `,
    companyLogoUrl: "https://vercel.com/logo.png",
    createdAt: new Date("2024-09-15"),
  },
  {
    id: 3,
    title: "ChatGPT Backend Developer at OpenAI",
    type: "Part-time",
    companyName: "OpenAI",
    locationType: "On-site",
    location: "Cupertino, California, United States",
    applicationUrl: "https://openai.com/apply",
    slug: "chatgpt-backend-developer-at-openai-3",
    salary: 250000,
    approved: true,
    description: `
        **About OpenAI:**
        
        OpenAI is an AI research and deployment company dedicated to ensuring that artificial general intelligence (AGI) benefits all of humanity. We're leading the field in developing advanced AI models, like ChatGPT.
        
        **Job Description:**
        
        We are seeking a skilled ChatGPT Backend Developer to join our innovative team. In this role, you'll contribute to the development and optimization of the ChatGPT platform, focusing on backend systems that power conversational AI. You'll collaborate with a talented team of researchers, engineers, and product managers to enhance ChatGPT's capabilities and scalability.
        
        **Key Responsibilities:**
        
        - Design, build, and maintain efficient, reusable, and reliable backend code for ChatGPT.
        - Work closely with AI researchers to implement and scale new features and models.
        - Improve the performance and reliability of our systems as they scale.
        - Manage individual project priorities, deadlines, and deliverables.
        - Ensure the best possible performance, quality, and responsiveness of applications.
        - Identify bottlenecks and bugs, and devise solutions to these problems.
        
        **Qualifications:**
        
        - Bachelor's or Master's degree in Computer Science, Engineering, or a related field.
        - Strong experience in backend development, particularly with Python.
        - Experience with AI technologies, machine learning, or natural language processing is highly desirable.
        - Knowledge of cloud services (AWS, Google Cloud, or Azure) and serverless architecture.
        - Experience with database technology such as SQL, NoSQL, and Data Warehousing.
        - Familiarity with Docker, Kubernetes, and CI/CD pipelines.
        - Proficiency in code versioning tools, such as Git.
        - Strong problem-solving skills and a willingness to learn new technologies.
        
        **Benefits:**
        
        - Competitive salary and generous stock options.
        - Comprehensive health, dental, and vision insurance.
        - Flexible work schedule and location.
        - Generous vacation and leave policies.
        - Education and conference stipends.
        
        OpenAI is committed to diversity in its workforce and is proud to be an equal opportunity employer.
        
        If you're passionate about AI and want to contribute to cutting-edge technology that impacts the world, join us at OpenAI!
      `,
    companyLogoUrl: "https://openai.com/logo.png",
    createdAt: new Date("2024-08-30"),
  },
  {
    id: 4,
    title: "Full Stack Developer",
    type: "Full-time",
    companyName: "BuildTech",
    locationType: "Remote",
    location: "Austin, TX, United States",
    applicationUrl: "https://buildtech.io/jobs",
    slug: "full-stack-developer-at-buildtech-4",
    salary: 120000,
    approved: true,
    description:
      "Hiring a full stack developer with expertise in both frontend and backend technologies.",
    companyLogoUrl: "https://example.com/logos/buildtech.png",
    createdAt: new Date("2023-10-15"),
  },
  {
    id: 5,
    title: "Data Scientist",
    type: "Full-time",
    companyName: "Insight Analytics",
    locationType: "Remote",
    location: "Chicago, IL, United States",
    applicationUrl: "https://example.com/apply",
    slug: "data-scientist-at-insight-analytics-5",
    salary: 120000,
    approved: true,
    description:
      "We are seeking a data scientist with experience in machine learning and big data.",
    companyLogoUrl: "https://example.com/logos/insight_analytics.png",
    createdAt: new Date("2023-11-05"),
  },
  {
    id: 6,
    title: "DevOps Engineer",
    type: "Contract",
    companyName: "CloudServe",
    locationType: "Remote",
    location: "Washington, DC, United States",
    applicationUrl: "https://example.com/apply",
    slug: "devops-engineer-at-cloudserve-6",
    salary: 120000,
    approved: true,
    description:
      "Looking for a DevOps engineer to manage cloud infrastructure and CI/CD pipelines.",
    companyLogoUrl: "https://example.com/logos/cloudserve.png",
    createdAt: new Date("2023-10-22"),
  },
  // Add more listings as needed with unique `id` values
];
