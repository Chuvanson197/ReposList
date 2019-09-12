import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,Image,
} from 'react-native';
import { connect } from 'react-redux';

import styles from './style'
import {listRepos,listReposPage} from './reducer';

class ListReposView extends Component {
  constructor (props){
    super(props);
    this.state = {
    username: '',
    page: 2,
    loadmore:'Load More'
    }
    
  }
  static navigationOptions = {
    title: 'Repositories'
  };
  _handleChange = (evt) => {
    this.setState({
      username: evt.nativeEvent.text
    });
  }
  _handleSubmit = () => {
    console.log('username',this.state.username);
      this.props.listRepos(this.state.username,this.state.page);
      this.setState({
        page: 2
      })
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
    const {repos} = this.props;
    if(repos.length>0){
      return(
        <View style={styles.loadingMore}>
          <TouchableOpacity
            style={styles.loadingButton}
            onPress={
              ()=>{
                this.setState({page: (this.state.page+1)}); 
                this._handleLoadMore();
                }
              }
          >
            <Text style={styles.loadingText}>{this.state.loadmore}</Text>
          </TouchableOpacity>
        </View>
      );
      }else{
        return null;
    }
  }

  _handleLoadMore = () => {
    this.props.listReposPage(this.state.username,this.state.page) ; 
  };

  _renderItem =  ({ item }) => (
    <TouchableOpacity
    style={styles.itembutton} 
    onPress={
    () => this.props.navigation.navigate('ListStar',{full_name: item.full_name})
    }>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.owner.avatar_url }} 
        style={styles.itemImage} />
        <Text style={styles.itemName}>{item.full_name}</Text>
        <Text style={styles.itemNumberStar}>{item.stargazers_count}</Text>
      </View>
    </TouchableOpacity>
  )


  render() {
    const { repos } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>GitHub Username</Text>
        <TextInput
          placeholder="Enter your github username"
          style={styles.input}
          onChange={this._handleChange}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={this._handleSubmit}
          >
          <Text style={styles.buttonText}>VIEW</Text>
        </TouchableOpacity>
        <FlatList
          data={repos}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter}
          onEndReachedThreshold={0.4}
        />
      </View>
    );
  }
}


const mapStateToProps = state => {
  let {repos,loading} = state.getListRepos;  
  return {
    repos: repos,
    loading: loading
  };
};
  
const mapDispatchToProps = {
  listRepos,listReposPage
};
  
export default connect (mapStateToProps, mapDispatchToProps)(ListReposView);