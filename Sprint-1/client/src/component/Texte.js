import React, {Component} from "react";
import View from "../assets/icons/PNG/Icon-views.png";
import Like from "../assets/icons/PNG/Icon-likes.png";



class Texte extends Component  {

    render() { 

        return (

           <div className="container-texte">
                <h1 className="container-texte__title">BMX Rampage:2018 HightLights</h1>
               <div className="container-providor">
                  <div id="tablet">
                      <div className="container-providor__source">
                          <h4 className="container-providor__source__name">by Red cow</h4>
                          <p className="container-providor__source__name__date">12/18/2018</p>
                        </div>
                     <div className="container-info">
                        <img className="container-info__eye" src={View} alt="eye" />
                        <p className="container-info__eye__number">1001,023</p>
                        <img className="container-info__eye__number__like" src={Like} alt="thumb" />
                        <p class="container-info__eye__number__like__num">110,985</p>
                      </div>
                  </div>
                  <div id="line"></div>
                   <div className="container-description">
                    <p className="container-description__paragraphe">On a gusty day in Southern Utah, a group of 25
                        daring mountain bikers blew the doors off what is
                        possible on two wheels, unleashing some of the
                        biggest moments the sport has ever seen. While
                        mother nature only allowed for one full run before
                        the conditions made it impossible to ride, that was
                        all that was needed for event veteran Kyle Strait,
                        who won the event for the second time -- eight years
                            after his first Red Cow Rampage title</p>

                 </div>
                 </div>


            </div>
        )
    
    }    

        
        
}

export default Texte;