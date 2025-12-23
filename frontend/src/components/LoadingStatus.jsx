function LoadingStatus({theme}){
    return (<div className="loading-container">
              <div className="loading-spinner"></div>
                     <h2> Generating Your {theme} Story</h2>
                    <div className="loading-animation">
                    <div className="Spinner"></div>
              </div>
           <p className="loading-info">
           Please wait while we generate your story...
           </p>
    </div>);

}

export default LoadingStatus;