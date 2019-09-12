import React, {Component} from 'react';
import {
  Text,
  View,FlatList,Image,TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import {listStar,listStarPage} from './reducer';
import styles from './style'


class ListStarView extends React.Component{
  static navigationOptions = {
    title: 'Stargazers'
  }; 
  constructor (props){
  super(props);
  this.state = {
    page: 2,
  }
  }
  componentDidMount() {
    const {full_name}= this.props.navigation.state.params;
    this.props.listStar(full_name);
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: '100%',
          backgroundColor: '#CED0CE'
        }}
      />
    );
    }
  renderFooter = ()=>{
    if(this.props.stars.length>=30){
      return(
        <View style={styles.loadingMore}>
          <TouchableOpacity
            style={styles.loadingButton}
            onPress={
              ()=>{
                this.setState({
                  page: (this.state.page+1)
                  }); 
                this._handleLoadMore();
              }
            }
          >
          <Text style={styles.loadingText}>Loade More</Text>
        </TouchableOpacity>
      </View>
      );
    }
    else
    {
      return (
        <Text style={{
          textAlign:"center",
          fontSize: 18,
        }}>Đã hết data</Text>
      )
    } 
  }
  _renderItem = ({ item }) => (          
    <View style={styles.itemContainer}>
    <Image source={{ uri: item.avatar_url }} 
    style={styles.itemImage} />
   <Text style={styles.itemLogin}>{item.login}</Text>            
    </View>
  )
  _handleLoadMore(){
    const {full_name}= this.props.navigation.state.params;
    const {page} = this.state;
    this.props.listStarPage(full_name,page)
  }

  render() {
    const { stars } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={stars}
          extraData={this.state}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter}
          // onEndReachedThreshold={0.4}
        />
      </View>
    );
  }

}

const mapStateToProps = state => {
  let {stars,isloading} = state.getListStar;
    return {
      stars: stars,
      isloanding: isloading
    };
};
  
const mapDispatchToProps = {
  listStar,listStarPage
};
  
export default connect(mapStateToProps, mapDispatchToProps)(ListStarView);