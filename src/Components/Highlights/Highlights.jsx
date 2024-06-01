import { Highlight } from "../../Utils/StaticData";

export default function Highlights() {
  return (
    <>
       <section className='curriculumsection mt-4'>
       <div className='curriculumdiv'>
          <h1>Highlights</h1>
       </div>
      
      {
        Highlight.map((item)=> {
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
