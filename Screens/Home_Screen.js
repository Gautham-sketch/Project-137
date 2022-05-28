import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import {ListItem} from 'react-native-elements';
import axios from 'axios';

export default class Home extends React.Component{
  constructor(){
    super();
    this.state = {
      star_data : [],
      url : "http://127.0.0.1:5000/",
    }
  }

  componentDidMount(){
    this.getStarData()
  }

  getStarData=()=>{
    const {url} = this.state
    axios.get(url).then(response =>{
      return(
        this.setState({
          star_data : response.data.data
        })
      );
    })
    console.log(this.state.star_data)
  }

  keyExtractor=(item,index)=>{
    index.toString()
  }

  renderItem=(item,index)=>{
    <ListItem
    key = {index}
    title = {`Star:${item.name}`}
    subtitle = {`Distance from Earth: ${item.distance_from_earth}`}
    titleStyle = {styles.title}
    containerStyle = {styles.container}
    bottomDivider
    chevron
    onPress={()=>{
      this.props.navigation.navigate("Details",{star_name:item.name})
    }}/>
  }

  render(){
    const {star_data} = this.state
    if(star_data.length == 0){
      return(
        <View>
          <Text>LOADING.....</Text>
        </View>
      );
    }
    else if(star_data.length != 0){
      return (
        <View>
          <FlatList
          data = {this.state.star_data}
          keyExtractor = {this.keyExtractor}
          renderItem = {this.renderItem}/>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : 'yellow',
  },
  title: {
    fontSize : 20,
    fontWeight : "bold",
    color : 'red',
  },
});