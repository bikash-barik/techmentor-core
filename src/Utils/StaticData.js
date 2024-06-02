import liveclasses from "../Assets/Images/live classes.png";
import doubtsolving from "../Assets/Images/doubt-solving.png";
import expertguidance from "../Assets/Images/expert-guidance.png";
import projects from "../Assets/Images/50+projects.png";
import access from "../Assets/Images/lifetimecontentaccess.png";
import weeklycontest from '../Assets/Images/weekly-contest.png';
import coding from '../Assets/Images/coding.png';
import dedicatedcoach from '../Assets/Images/dedicated career coach.png';
import hrmock from '../Assets/Images/hr mock.png';
import resume from '../Assets/Images/resume.png';
import companyspecific from '../Assets/Images/companyspecific.png';

import student1 from '../Assets/Images/students/ashish dash.jpeg';
import student2 from '../Assets/Images/students/debasish sundaray.jpeg';
import student3 from '../Assets/Images/students/satyabrata dhal.jpeg';
import student4 from '../Assets/Images/students/chandan.jpeg';

import tcs from '../Assets/Images/company-logo/tcs.png';
import kovaion from '../Assets/Images/company-logo/kovaion.png';
import wipro from '../Assets/Images/company-logo/wipro.png';
import indexnine from '../Assets/Images/company-logo/indexnine.png';

import highlight1 from '../Assets/Images/highlight1.png';
import highlight2 from '../Assets/Images/highlight2.png';
import highlight3 from '../Assets/Images/highlight3.png';
import highlight4 from '../Assets/Images/highlight4.png';
import highlight5 from '../Assets/Images/highlight5.png';
import highlight6 from '../Assets/Images/highlight6.png';

import eligible1 from '../Assets/Images/eligible1.png';
import eligible2 from '../Assets/Images/eligible2.png';
import eligible3 from '../Assets/Images/eligible3.png';

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
  {
    featureimg: weeklycontest,
    featurename: "Weekly Contest",
  },
  {
    featureimg: coding,
    featurename: "5000+ Coding Questions",
  },
  {
    featureimg: dedicatedcoach,
    featurename: "Dedicated Career Coach",
  },
  {
    featureimg: hrmock,
    featurename: "Mock HR & Tech Interviews",
  },
  {
    featureimg: resume,
    featurename: "Resume & Portfolio Building",
  },
  {
    featureimg: companyspecific,
    featurename: "Company Specific Preparation",
  },
];


export const Highlight = [
  {
    imgurl : highlight1,
    title:"Live lectures from experienced instructors in big tech firms on weekdays.",
  },
  {
    imgurl : highlight2,
    title:
      "Access to lecture recorclings for review and catching up on missed classes.",
  },
  {
    imgurl : highlight3,
    title: "Daily assignments to practice and reinforce concepts",
  },
  {
    imgurl : highlight4,
    title:
      "Personalize learning support through live doubt resolution and mentorship sessions",
  },
  {
    imgurl : highlight5,
    title:
      "Skill evaluation via weekend contests, module-end tests and mock interviews",
  },
  {
    imgurl : highlight6,
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
        name:"Ashish Dash",
        studentimg : student1,
        role:"System Engineer",
        companyimg : tcs,
        quote : "“From losing hope to now worming as an SDE in TechMentorCore”"
    },
    {
        heading : "Non-IT Working Professional",
        name:"Debashish Sundaray",
        studentimg : student2,
        role:"Software Engineer",
        companyimg : kovaion,
        quote : "“Salary jump from 3.6 to 12+ Lakhs in 10 months”"
    },
    {
        heading : "Student with CS/IT Background",
        name:"Satyabrata Dhal",
        studentimg : student3,
        role:"Project Trainee",
        companyimg : wipro,
        quote : "“From losing hope to now worming as an Project Trainee in Wipro"
    },
    {
      heading : "Student with CS/IT Background",
      name:"Chandan Chiranjeeb Sahoo",
      studentimg : student4,
      role:"Software Engineer",
      companyimg : indexnine,
      quote : "“From losing hope to now worming as an Project Trainee in Wipro"
  }
]

export const eligibleData = [
  {
    image : eligible1,
    heading:"Final Year Students",
    subheading:"Preparing for Final Year Placements and for the long-lasting Tech Journey ahead."
  },
  {
    image : eligible2,
    heading:"Students and Graduates",
    subheading:"Looking to start their career in tech."
  },
  {
    image : eligible3,
    heading:"Working Professionals",
    subheading:"Looking to upskill and make that dream switch."
  }
]

export const powerData=[
  {
    innerdiv1:"In Demand Skill",
    innerdiv2:"Java's robustness and scalability make it ideal for handling complex and large-scale applications. By studying Java backend, you'll be equipped to build efficiem, reliable, and high-performance systems capable of handling substantial user laads."
  },
  {
    innerdiv1:"Robust and Scalable Solution",
    innerdiv2:"Java's robustness and scalability make it ideal for handling complex and large-scale applications. By studying Java backend, you'll be equipped to build efficiem, reliable, and high-performance systems capable of handling substantial user laads."
  },
  {
    innerdiv1:"Versatility",
    innerdiv2:"Java is not limited to a single domain. It can be used to develop a wide range of applications, from web developmem to emerprise solutions and even Android mobile applications."
  },
  {
    innerdiv1:"Industry Giants repy on java",
    innerdiv2:"Many renowned companies, including tech giants like Google, Amazon, and Netflix, rely on Java for their backend infrastructure. Mudying Java backend means you'll be aligning yourself with industry best practices and standarcls."
  },
  {
    innerdiv1:"Future proof technology",
    innerdiv2:"Java has stood the test of time and is continually evolving. With regular updates and advancemems, studying Java backend guarantees that you are investing in a future-proof skillset."
  },
]