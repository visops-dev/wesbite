export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <div className="display-linebreak"> 
                      <p>{d.text}</p>
                    </div>
                  </div>
                <br></br>
                <br></br>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
