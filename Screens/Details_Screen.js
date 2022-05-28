import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import axios from 'axios';

export default class Details extends React.Component{
  constructor(){
    super();
    this.state = {
      url : `http://localhost:5000/star?name=${this.props.navigation.getParam( "star_name" )}`,
      details : {}
    }
  }

  componentDidMount(){
    this.getDetails()
  }

  getDetails=()=>{
    const {url} = this.state
    axios.get(url).then(response =>{
      return(
        this.setState({
          details : response.data.data
        })
      );
    })
    console.log(this.state.details);
  }

  render(){
    const {details} = this.state
    if(details.specifications){
      return(
        <View>
          <Text>{`Distance from Earth:${details.distance_from_earth}`}</Text>
          <Text>{`Distance from Sun:${details.distance_from_sun}`}</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});