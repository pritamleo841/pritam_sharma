import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstantInfoService {
  
  constructor() {}

  public PERSONAL_INFO = {
    firstName: 'Pritam',
    lastName: 'Sharma',
    epochDob: 862708800,
    month:"May",
    day:4,
    year:1997,
    maritalStatus: 'Married',
    address: {
      currentAddress: 'C-239, SP Sukhobrishti, Newtown, Action Area III',
      currentAddressZip: 700135,
      currentAddressDistrict: 'North 24 Parganas',
      currentAddressRegion: 'Greater Kolkata',
      permanentAddress: 'Near Hindischool, Kantapukur, Mogra',
      permanentAddressZip: 700148,
      permanentAddressDistrict: 'Hooghly',
      permanentAddressBlock: 'Chinsurah',
      state: 'West Bengal',
      country: 'India',
    },
    contact: {
      primaryPhoneNo: 8274825938,
      secondaryPhoneNo: 7003896166,
      primaryEmailId: 'sharmapritam841@gmail.com',
      secondaryEmailId: 'pritamleo841@gmail.com',
      facebookURL: 'https://www.facebook.com/profile.php?id=100025024550703',
      linkedinURL: 'https://www.linkedin.com/in/pritam-sharma-483242199/',
      instagramURL: 'https://www.instagram.com/iampritamleo/',
      leetcodeURL: 'https://leetcode.com/sharmapritam841/',
      hackerrankURL: 'https://www.hackerrank.com/pritamleo48',
      githubURL: 'https://github.com/pritamleo841',
      resumeLink:'https://drive.google.com/file/d/1-2DDYoQoMII_sRnILlcL0QOlB8h9h9KL/view?usp=sharing'
    },
    languages: ['English', 'Bengali', 'Hindi'],
    hobbies: ['Problem Solving', 'Cooking', 'Story Writing', 'Reading Books'],
    pastAchievement: 'NCC - A Certified (2009-2010).',
    personalAbilities: [
      'Analytical Skills',
      'Time Management',
      'Communication',
      'Team Player',
      'Attention to Details',
    ],
    interests: [
      'Full Stack Application Development',
      'Data Structures and Algorithms',
      'System Design',
      'UI development',
    ],
    achievements: [
      'Topper of the university(2014-2017), B.Sc. Computer Science',
      'BCD Spotlight Awards(2021-2022) - Top Performing SDE',
    ],
    aboutMe:
      "I am an energetic person, a quick learner and someone who provides attention to details. I was the topper of my Bsc batch and afterwards I pursued my MCA degree from JU,Kolkata. From the past 2 years, I've worked as a Senior Associate Developer which has provided me with a great deal of technical exposure along with the importance of working in a team and also the value of client satisfaction.",
  };

  public EDUCATION:any = [
     {
      name: 'B.R.G. HIGH SCHOOL',
      examination: 'Secondary',
      location: 'Mogra',
      year:2012,
      marks: 556,
      fullMarks: 700,
      average: 79.4,
      link:"https://schools.org.in/hugli/19121510102/bagati-ramgopal-ghosh-h-s-sch.html"
    },
    {
      name: 'B.R.G. HIGH SCHOOL',
      examination: 'Higher Secondary',
      location: 'Mogra',
      year:2014,
      marks: 387,
      fullMarks: 500,
      average: 77.4,
      link:"https://schools.org.in/hugli/19121510102/bagati-ramgopal-ghosh-h-s-sch.html"
    },
    {
      name: 'CHANDERNAGORE COLLEGE',
      examination: 'B.Sc. Computer Science (Hons.)',
      location: 'Chandannagar',
      year:2017,
      marks: 636,
      fullMarks: 800,
      average: 79.5,
      link:"https://www.chandernagorecollege.ac.in/"
    },
    {
      name: 'JADAVPUR UNIVERISTY',
      examination: 'Masters in Computer Application',
      location: 'Jadavpur',
      year:2020,
      cgpa: 8.02,
      average: 72.82,
      link:"http://www.jaduniv.edu.in/"
    },
  ];

  public EXPERIENCE: any = [

    {
      name: 'Alumnus Software',
      link:"https://www.alumnux.com/",
      location: 'Sector V,Kolkata',
      skills: ['C/C++', 'Apache Ant', 'Python'],
      position: 'Software Developer Intern',
      startDate: {
        month:1,
        year:2020
      },
      endDate: {
        month:6,
        year:2020
      },
      roles: [
        'Fine tuning libraries like Curl,PostgreSQL,Shibboleth under IPANEMA SD- WAN network infrastructure',
        'Implemented one IP |Engine Simulator for the need of virtualisation through Grafana tool.',
      ],
    },
    {
      name: 'BLU COCOON DIGITAL',
      link:"https://blucocoondigital.com/",
      location: 'Newtown,Kolkata',
      skills: [
        'Angular',
        'JavaScript',
        'Node',
        'MongoDB',
        'HTML5',
        'Azure Functions',
        'Microsoft Azure',
        'CSS3',
        'TypeScript',
        'ExpressJS',
      ],
      position: 'Senior Associate Developer',
      startDate: {
        month:12,
        year:2020
      },
      endDate: "NA",
      roles: [
        'Designed and written complex HTTP APIs that handles requests coming back and forth from the server to the browser in runtime using Node Js, Express Js',
        'Hands on experience in serverless and less infrastructure maintainable backend development using Azure Function Apps in Node Js',
        'Have worked and added JWT based authentication and authorization as well as Azure Active Directory to secure applications based on business requirements',
        "Developed multiple SPA(s) having responsive UI designs for all types of screens and sizes which has grown our applications' popularity over other applications on the market",
        'Worked day to day on hybrid applications that are device or platform independent and well accepted by Play Store/ App Store using Angular and Cordova plugins',
        'Migrated Node RED based applications to Node based application after removing all the external dependencies from Third Party Libraries',
        "Managed a small team for a course of time where I've handled agile based software development end to end. Familiar with all the agile development based ceremonies.",
      ],
    },
  ];

  public SKILLS: any = {
    languages: [
      {
        name: 'C/C++',
        score: 85,
      },
      {
        name: 'Python',
        score: 80,
      },
      {
        name: 'Javascript',
        score: 85,
      },
      {
        name: 'Typescript',
        score: 80,
      },
      {
        name: 'SQL',
        score: 80,
      },
      {
        name: 'NoSQL',
        score: 90,
      },
      {
        name: 'HTML',
        score: 85,
      },
      {
        name: 'CSS',
        score: 85,
      },
    ],
    frameworks: [
      {
        name: 'Angular',
        score: 85,
      },
      {
        name: 'Node',
        score: 85,
      },
      {
        name: 'Express',
        score: 80,
      },
    ],
    tools: [
      {
        name: 'Git',
        score: 90,
      },
      {
        name: 'VS Code',
        score: 90,
      },
      {
        name: 'Azure Portal',
        score: 80,
      },
    ],
  };

  public PROJECTS:any = [
    {
      name: 'At Your Door Step',
      description:
        "We are a technology company first, but with a major focus on consumer well-being through a healthy diet. Most people are very busy with their jobs, family and friends, and other important activities, which doesn't leave much time for cooking. This might lead to a poor diet and lasting health consequences. We want to solve this problem by using an AI-centric approach. Users can use our app to select their diet and foods they like and dislike, and our AI algorithm will create a custom and individual weekly meal plan. But we don't stop there. We partner with restaurants and other cooking partners to actually cook and deliver all meals from the generated meal plans, in selected cities. All this will be packed up in a monthly subscription, where users can choose between receiving one or two meals per day, every single day of the month",
      technologyUsed: ['HTML5', 'CSS3', 'Vanilla JS', 'Font Awesome Library'],
      year: 2022,
      month: 8,
      githubLink:"https://github.com/pritamleo841/AtYourDoorApp",
      hostLink:"NA"
    },
    {
        name: 'Secret Rooms',
        description: "A simple private chat room application using socket.io, nodeJS and expressJS.",
        technologyUsed: ['HTML5', 'CSS3', 'Vanilla JS', 'Font Awesome Library'],
        year: 2022,
        month: 3,
        githubLink:"https://github.com/pritamleo841/secret-rooms",
        hostLink:"NA"
    },
    {
      name: 'To dO',
      description:
        'We are working on an application that can store everyday important notes that are impossible sometimes to memorize at the end of each day.Our application uses google auth to sign in for each individual user and uses mongoDB to do necessary CRUD operations',
      technologyUsed: ['ExpressJS', 'NodeJS', 'EJS template engine'],
      year: 2022,
      month: 6,
      githubLink:"https://github.com/pritamleo841/Todo-App-main",
      hostLink:"NA"
    },
    {
      name: 'Professional Portfolio',
      description:
        'The website serves two purposes - A standard Angular made Portfolio to showcase my web development skills and a platform where any person interested of knowing myself as a person ,a developer, a technology enthusiast.',
      technologyUsed: ['Angular', 'Typescript', 'Angular Material','Font Awesome Library','Google Fonts Library'],
      year: 2022,
      month: 10,
      githubLink:"NA",
      hostLink:"NA"
    }
  ];

  public MONTHS = {
    1:"January",
    2:"February",
    3:"March",
    4:"April",
    5:"May",
    6:"June",
    7:"July",
    8:"August",
    9:"September",
    10:"October",
    11:"November",
    12:"December"
  }
}
