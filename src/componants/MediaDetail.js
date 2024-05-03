function MediaDetail({clickedItem, selectedState, filetype, version, filepath}){
 

    if (clickedItem === null) {
        return <span>Hover a state to find out it's Captal. <br/> Click see a photo of it.</span> 
        }
        return <>
        <img src={"./"+filepath+"/"+clickedItem+"_"+version+"."+filetype} alt={"A photo of: "+clickedItem+", "+selectedState}/>
        <div className="description">A photo of: {clickedItem}, {selectedState}</div>
        </>
  } 


  export default MediaDetail;
