

function Thumb(props: {title:string, url:string, textx:string}){
    return (
        <>
            <div className="col">
              <div className="card shadow-sm">
                <h5 className="text-center text-uppercase my-3">{props.title}</h5>
                <img src={props.url} className="img-fluid"/>
                <div className="card-body">
                  <p className="card-text">
                    {props.textx}
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                  >
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>        
        </>
    )
}

export default Thumb