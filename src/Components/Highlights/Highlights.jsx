const data = [
    {
      title : "Live lectures from experienced instructors in big tech firms on weekdays.",
    },
    {
      title : "Access to lecture recorclings for review and catching up on missed classes.",
    },
    {
      title : "Daily assignments to practice and reinforce concepts",
    },
    {
      title : "Personalizecl learning support through live doubt resolution and mentorship sessions",
    },
    {
      title : "Skill evaluation via weekend contests, module-end tests and mock interviews",
    },
    {
      title : "Self-learning resources include topic-wise notes, coding questions, major projects, and soft skill training for interviews",
    }
]

export default function Highlights() {
  return (
    <>
       <section className='curriculumsection mt-4'>
       <div className='curriculumdiv'>
          <h1>Highlights</h1>
       </div>
      
      {
        data.map((item)=> {
          return (
            <div className="curriculumdesc">
              <h5>{item.title}</h5>
            </div>
          )
        })
      }
       
     </section> 
    </>
  )
}
