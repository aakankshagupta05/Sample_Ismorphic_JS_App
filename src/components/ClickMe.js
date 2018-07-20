import React, {Component} from 'react';
import 'isomorphic-fetch';

export default class ClickMe extends Component {
  constructor(props) {
    super(props);

    this.state = { ipAddress : '' };

    this.showAlert = this.showAlert.bind(this);
  }
  
  showAlert() {
    let displayStr =  `How are you ? My IP address is : ${this.state.ipAddress}`; 
    alert(displayStr);
  }

  
  componentDidMount() {    
    var that = this;
    const url = 'http://ip.jsontest.com/'
  
  
    fetch(url,{
          method: 'GET',
          headers : {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
          }
        }).then(res=>res.json()).
        then(res=>{
          that.setState({ ipAddress: res.ip });
          console.log(res);
        }).catch(e=> {alert(e)});
        
  }

  render() {
    return (
      <div onClick={this.showAlert}>
        Click Me !
      </div>
    );
  }
}
