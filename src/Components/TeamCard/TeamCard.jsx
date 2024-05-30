import inst3 from '../../Assets/Images/Digvijay.png';

export default function TeamCard() {
  return (
    <>
      <div className="col-lg-3 col-md-6 teamcard">
            <div className="team-item bg-light">
                <div className="overflow-hidden">
                    <img className="img-fluid teamimage" src={inst3} alt=""/>
                </div>
                
                <div className="text-center p-4">
                    <h5 className="mb-0">Jyothi Vedurada</h5>
                    <small>Associate Professor</small>
                </div>

            </div>
     </div> 
    </>
  )
}
