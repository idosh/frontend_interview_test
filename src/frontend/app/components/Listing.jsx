import React from 'react'

export const Listing = (props) => {
    console.log(props)
    let summary = props.realestateSummary;
   
    return (
        <div className="col-xs-6 col-sm-4 col-md-4">
            <div className="itemCont">
                <img className="img-responsive" 
                    src={props.advertisementAssets[0].advertisementThumbnails.inventory_m.url} 
                    alt={props.advertisementAssets[0].advertisementThumbnails.inventory_m.filename}/>
                    <div className="details">
                        <h2 className="title">{props.title}</h2>
                        <div className="location text-muted">
                            <span className="postal">{summary.address.postalCode} / </span>
                            <span className="city">{summary.address.city}</span>
                        </div>
                        <div className="meta">
                            <span className="price">{props.advertisementPrice.sellPrice}&nbsp;&euro;</span>
                            <span className="roomCount text-muted">{summary.numberOfRooms} Zimmer</span>
                            <span className="size text-muted">ab {summary.space} m²</span>
                        </div>
                    </div>
                        
            </div>
        
        </div>
    )
}