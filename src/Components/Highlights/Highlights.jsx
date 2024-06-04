import { Highlight, HighlightBottom } from "../../Utils/StaticData";
import './Highlights.css';

export default function Highlights() {
  return (
    <>
       <section className='highlightsection'>
       <div className='curriculumdiv'>
          <h1 className="brochureheaderheading1">Highlights</h1>
       </div>

       <div className="highlightdiv">
       {
        Highlight.map((item)=> {
          return (
            <div className="highlightdesc">
              <div className="highlightimgdiv">
                <img src={item.imgurl} alt="" />
              </div>

              <div className="highlightparadiv">
                <h4>{item.title}</h4>
              </div>
            </div>
          )
        })
      }
       </div>
      
      <div className="highlightbottom row d-flex justify-content-center">
        {
          HighlightBottom.map((highlightbottom)=>(
            <div className="highlightbtmdiv col-2">
               <img src={highlightbottom.image} alt="" />
               <p>{highlightbottom.desc}</p>
            </div>
          ))
        }
       
      </div>
      
       
     </section> 
    </>
  )
}
