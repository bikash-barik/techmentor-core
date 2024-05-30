import './Curriculum.css';
const data = [
  {
    title : "Intro to Programming",
    desc : "An introduction to programming fundamentals to start your journey as a Software developer."
  },
  {
    title : "Fundamental DSA Constructs",
    desc : "Deep dive into the most important topics of Data Structures and Algorithms."
  },
  {
    title : "Essential Data Structures",
    desc : "Strong focus on problem-solving. Comprehend challenging concepts in DSA"
  },
  {
    title : "Prominent Algorithms and Data Structures",
    desc : "Analyze complex DSA algorithms & problems and come up with Optimal solutions"
  },
  {
    title : "Basics of Spring & Spring Boot",
    desc : "Establish a foundation in Backend development and APIs"
  },
  {
    title : "Advanced Spring and Implementation",
    desc : "Build impressive Spring-based capstone projects to boost your profile."
  },
  {
    title : "AIntro to HTML, CSS and JavaScript",
    desc : "Client-side programming and Integration with backend to build a frill-stack web application."
  },
  {
    title : "Project Building",
    desc : "Build 2 full-stack projects using frontend technologies and springhoot alongwith learning core computer science subjects like Operating System, Gompriter Networks, System Design, etc."
  },
  {
    title : "Advanced DSA",
    desc : "Dynamic Programming, Backtracking followed by a revision."
  },
]
export default function Curriculum() {
  return (
    <>
     <section className='curriculumsection'>
       <div className='curriculumdiv'>
          <h1>Expert-Led Curriculum</h1>

          <h3>Your path to Mastery in Programming by equipping you to conquer any challenge!</h3>
       </div>
      
      {
        data.map((item)=> {
          return (
            <div className="curriculumdesc">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          )
        })
      }
       
     </section> 
    </>
  )
}
