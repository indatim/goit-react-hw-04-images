import React, { Component } from 'react';
import { ThreeDots } from  'react-loader-spinner'

class Loader extends Component {
  render() {
    return (
        <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#4fa94d" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'}}
        wrapperClassName=""
        visible={true}
         />
    );
  }
}

export default Loader;