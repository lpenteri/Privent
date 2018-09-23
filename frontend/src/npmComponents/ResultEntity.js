import React from 'react';
import '../css/searchResults.css';


class ResultEntity extends React.PureComponent {
  constructor(props) {
      super(props);
      this.venueClicked = this.venueClicked.bind(this);
  }

  venueClicked(e)
  {
    this.props.click(this.props.item);
  }

  render() {
    const {item} = this.props;



    return (
      <div>
          <div className="resultEntityDivPlaceholder" id={item._id} onClick={this.venueClicked}>
            <div className ="resultEntityImgPlaceholder">
              <img className="resultImg" width="200" height="200" src={item.imageName}/>
            </div>
            <div className = "resultEntityPlaceholderExpImg">
              <div className="resultEntityContentPrice">
                <div className ="resultEntityTitleBio">
                  <h3 className="resultEntityTitle">
                    <span className="resultEntityTitleSpan">
                      {item.name}
                    </span>
                  </h3>
                    <span className="resultEntityCategory resultEntityTitle">
                      {item.type}
                    </span>
                  <div className="resultEntityAddress">
                    <a className="resultEntityLocation" href="">{item.location}</a>
                    <span className="resultEntityCapacity"> Capacity: {item.capacity} people</span>
                  </div>
                  <div className="resultEntitybio">
                      <span>{item.bio}</span>
                  </div>
                  <div className="resultEntityPricing">
                    <div className="resultEntityPricinFlatFee">
                      <span className="PricingTitle">
                        Flat fee
                      </span>
                      <span className="PricingValue">
                        {item.flat_fee} PUSD
                      </span>
                    </div>

                    <div className="resultEntityPricinPerHour">
                      <span className="PricingTitle">
                        Per hour
                      </span>
                      <span className="PricingValue">
                        {item.hourly_fee} PUSD
                      </span>
                    </div>

                    <div className="resultEntityPricinPerParticipant">
                      <span className="PricingTitle">
                        Per participant
                      </span>
                      <span className="PricingValue">
                        {item.per_participant_fee} PUSD
                      </span>
                    </div>


                 </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default ResultEntity;
