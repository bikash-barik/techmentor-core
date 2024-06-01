import liveclasses from "../Assets/Images/live classes.png";
import doubtsolving from "../Assets/Images/doubt-solving.png";
import expertguidance from "../Assets/Images/expert-guidance.png";
import projects from "../Assets/Images/50+projects.png";
import access from "../Assets/Images/lifetimecontentaccess.png";

import logo from '../Assets/Images/new_logo_techmentor_core-removebg-preview.png';
import student from '../Assets/Images/Digvijay.png';

export const featureData = [
  {
    featureimg: liveclasses,
    featurename: "Live Classes",
  },
  {
    featureimg: expertguidance,
    featurename: "1 on 1 Expert Guidance",
  },
  {
    featureimg: projects,
    featurename: "50+ Projects",
  },
  {
    featureimg: access,
    featurename: "Lifetime access to Content",
  },
  {
    featureimg: doubtsolving,
    featurename: "Doubt Solving",
  },
];

export const Highlight = [
  {
    title:
      "Live lectures from experienced instructors in big tech firms on weekdays.",
  },
  {
    title:
      "Access to lecture recorclings for review and catching up on missed classes.",
  },
  {
    title: "Daily assignments to practice and reinforce concepts",
  },
  {
    title:
      "Personalize learning support through live doubt resolution and mentorship sessions",
  },
  {
    title:
      "Skill evaluation via weekend contests, module-end tests and mock interviews",
  },
  {
    title:
      "Self-learning resources include topic-wise notes, coding questions, major projects, and soft skill training for interviews",
  },
];

export const CurriculumData = [
  {
    title: "Intro to Programming",
    desc: "An introduction to programming fundamentals to start your journey as a Software developer.",
  },
  {
    title: "Fundamental DSA Constructs",
    desc: "Deep dive into the most important topics of Data Structures and Algorithms.",
  },
  {
    title: "Essential Data Structures",
    desc: "Strong focus on problem-solving. Comprehend challenging concepts in DSA",
  },
  {
    title: "Prominent Algorithms and Data Structures",
    desc: "Analyze complex DSA algorithms & problems and come up with Optimal solutions",
  },
  {
    title: "Basics of Spring & Spring Boot",
    desc: "Establish a foundation in Backend development and APIs",
  },
  {
    title: "Advanced Spring and Implementation",
    desc: "Build impressive Spring-based capstone projects to boost your profile.",
  },
  {
    title: "AIntro to HTML, CSS and JavaScript",
    desc: "Client-side programming and Integration with backend to build a frill-stack web application.",
  },
  {
    title: "Project Building",
    desc: "Build 2 full-stack projects using frontend technologies and springhoot alongwith learning core computer science subjects like Operating System, Gompriter Networks, System Design, etc.",
  },
  {
    title: "Advanced DSA",
    desc: "Dynamic Programming, Backtracking followed by a revision.",
  },
];


export const PricingData = [{
    title: "Pay After Placement",
    desc: "Limited seats for top performers in the selection process with 0 upfront cost!",
    installments : [
      {
        package1:"3-5 LPA",
        installment1:"₹ 1,80,000",
      },
      {
        package1:"5-10 LPA",
        installment1:"₹ 2,40,000",
      },
      {
        package1:"10-15 LPA",
        installment1:"₹ 3,00,000",
      },
      {
        package1:"20+ LPA",
        installment1:"₹ 4,00,000"
      }
    ],
    notice: "Placement services will have to start immediately after course completion"
  },
  {
    title: "Pay Tuition Fee",
    desc: "Pay a minimal Tuition fees in monthly instalments and pay remaining fee after placement.",
    price : "₹ 6250/month",
    pricedesc:"In up to 12 month, Total ₹ 75000",
    payrest:"Pay rest after your Placement in upto 12 months installments",
    installments : [
      {
        package1:"3-5 LPA",
        installment1:"40,000",
      },
      {
        package1:"5-10 LPA",
        installment1:"₹ 60,000",
      },  
      {
        package1:"10-15 LPA",
        installment1:"₹ 1,00,000",
      },
      {
        package1:"20+ LPA",
        installment1:"₹ 1,50,000",
      }
    ],
    notice : "Placement Services can be availed anytime up to 3 years from Course Completion."
  }];


export const StudentDetailsData = [
    {
        heading : "Student with career gap",
        name:"Akosh Ingoley",
        studentimg : student,
        role:"Software Engineer",
        companyimg : logo,
        quote : "“From losing hope to now worming as an SDE in TechMentorCore”"
    },
    {
        heading : "Non-IT Working Professional",
        name:"Neel Ratn",
        studentimg : student,
        role:"Software Engineer",
        companyimg : logo,
        quote : "“Salary jump from 3.6 to 12+ Lakhs in 10 months”"
    },
    {
        heading : "Student with CS/IT Background",
        name:"Abdullah Farhon Safwi",
        studentimg : student,
        role:"Software Engineer",
        companyimg : logo,
        quote : "“From losing hope to now worming as an SDE in Maersk”"
    },
    {
        heading : "Student with Low CGPA",
        name:"Vineet Raj",
        studentimg : student,
        role:"Software Engineer",
        companyimg : logo,
        quote : "“From scoring less than 60 % in Gollege to working in HSBC”"
    },
]