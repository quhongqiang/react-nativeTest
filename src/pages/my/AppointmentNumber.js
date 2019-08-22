import React, {Component} from 'react';
import { View, Text, Button,Image, StyleSheet, Switch, TextInput,ScrollView,TouchableOpacity } from 'react-native';
import { StackActions, NavigationActions, withNavigation} from 'react-navigation';

import HeaderView from '../components/headerView'

class AppointmentNumber extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      value: false,  //开关
      number: '', //预约人数
      isTrue: false,
      orderDown: false,
    };
  }
  render() {
    return (
      <ScrollView>
      <HeaderView />
        <View style={{backgroundColor: '#f5f5f5'}}>
          <View style={styles.list}>
            <Text style={styles.title} onPress={() => {

            }}>站厅预约</Text>
            <Text>{this.state.changeTxt}</Text>
            <Switch
              style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4}], marginRight: 16 }}
              thumbColor='#ffffff'
              value={this.state.value}
              onValueChange={(value)=>{
                this.setState({value: value})
                if (value) {
                  this.setState({
                    isTrue: true
                  })
                }else {
                  this.setState({
                    isTrue: false
                  })
                }
              }}
            />

          </View>
          <View style={styles.list}>
            <Text style={styles.titleNum} onPress={() => {

            }}>站厅预约人数: </Text>
            <TextInput
              style={styles.textinput}
              editable = {this.state.isTrue}
              placeholder="站厅预约人数"
              placeholderTextColor = "#cccccc"
              keyboardType = "numeric"
              value={this.state.number}
              onChangeText={(number)=> {this.setState({number})}}
            />
          </View>
          <Text style={styles.errorconfirm} onPress={() => {
            alert('你点击了确认，该跳转了！~'+ this.state.number)
            // this.props.navigation.navigate('ChangePassword')
          }}>确认</Text>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  errorconfirm: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 44,
    height: 44,
    lineHeight: 44,
    textAlign: 'center',
    fontSize: 16,
    color: '#ffffff',
    backgroundColor: '#25A3FF',
    borderRadius: 4,
  },
  list: {
    width: '100%',
    marginTop: 8,
    backgroundColor: '#ffffff',
    flexDirection: "row",
  },
  title: {
    color: '#4a4a4a',
    fontSize: 15,
    fontFamily: 'PingFang-SC-Medium',
    flex: 1,
    height: 50,
    lineHeight: 50,
    marginLeft: 16,
  },
  titleNum: {
    color: '#4a4a4a',
    fontSize: 15,
    fontFamily: 'PingFang-SC-Medium',
    height: 50,
    lineHeight: 50,
    marginLeft: 16,
  },
  textinput: {
    flex: 1,
    color: '#4a4a4a',
    fontSize: 15,
  },
})
export default withNavigation(AppointmentNumber);
