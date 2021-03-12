import React, { Component } from 'react';
import {Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faPhone, faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons';
import image1 from '../../img/logo.png';
import Filters from '../filters/Filters';

class Example extends Component {
  constructor(){
    super()
    this.state={
      showMe:true
    }
  }
  operation()
  {
    this.setState({
      showMe:!this.state.showMe
    })
  }

  render(){
    return(
      
      <div>
        <div className="row d-flex bg-dark">
            <div className="col-md-4">     
                <img src={image1} alt="welcome"/>
            </div>
            <div className="col-md-6 mt-4 ml-4 mb-4 text-white">
                <h2>Място за вашата реклама!</h2>
                <h6><FontAwesomeIcon icon={faPhone} /> +359 999 99 99</h6>
                <h6><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:info@bestmovies.bg" className="text-light">info@bestmovies.bg</a></h6>
            </div>

        </div>
        <div className="row bg-danger">
            <div className="col-8">
              <Button color="danger" className="ml-4 m-2" onClick={()=>this.operation()} >Филтър <FontAwesomeIcon icon={faFilter} /></Button>
            </div>
            <div className="col-4 mt-2">
              <form>
                <label>
                  <input type="text" className="form-control" placeholder="Търси.." name="search" id="inputValue"/>
                </label>
                  <Button color="" className="ml-2 text-white"><FontAwesomeIcon icon={faSearch} /></Button>
              </form>
            </div>
        </div>
      {
        this.state.showMe?
      <div><Filters/></div>
      :null
      }
      </div>
      )
  }
}
export default Example;