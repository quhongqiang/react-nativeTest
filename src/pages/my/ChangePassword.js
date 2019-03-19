import React, {Component} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, Dimensions  } from 'react-native';
import { StackActions, NavigationActions, withNavigation } from 'react-navigation';

const {width, height} = Dimensions.get('window');
class ChangePassword extends Component {
  static navigationOptions = {
    headerStyle: {
      elevation: 0,  //去除安卓手机header的样式
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      isTrue: false,//确认按钮能不能点击
      isImage: false, //小眼睛
      isImage1: false, //小眼睛
      text: '',
      text1: '',
      show: true,  //密码是否显示
      show1: true,  //密码是否显示
    };
  }
  newOnChangeText = (text1) => {
    this.setState({
      text1
    },()=> {
      if (this.state.text1.length >= 8) {
        this.setState({
          isTrue: true
        })
      } else if (this.state.text1.length < 8) {
        this.setState({
          isTrue: false
        })
      }
      if (this.state.text != "") {
        this.setState({
          isImage1: true
        })
      } else if (this.state.text == "") {
        this.setState({
          isImage1: false
        })
      }
    })
  }
  oldOnChangeText = (text) => {
    this.setState({
      text
    },()=> {
      if (this.state.text != "") {
        this.setState({
          isImage: true
        })
      } else if (this.state.text == "") {
        this.setState({
          isImage: false
        })
      }
    })
  }
  render() {
    return (
      <ScrollView style={styles.container}>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset = {120} >
          <Text style={styles.title}>修改密码</Text>
          <Text style={styles.totst}>密码为8-16位，须包含数字、字母2中元素</Text>
          <View style={styles.flex}>
            <TextInput
              style={styles.textinput}
              placeholder="请输入初始密码"
              placeholderTextColor = "#cccccc"
              maxLength = {16}
              value={this.state.value}
              secureTextEntry = {this.state.show}
              onChangeText={this.oldOnChangeText}
            />
            {
              this.state.isImage == true ? <TouchableOpacity style={styles.TouchableOpacity} onPress={() => {
                if (this.state.show) {
                  this.setState({
                    show: false
                  })
                }else {
                  this.setState({
                    show: true
                  })
                }
              }}>
                <Image
                  style={styles.icon}
                  resizeMode='cover'
                  source={require("../../img/open.png")}
                />
              </TouchableOpacity> : <TouchableOpacity style={styles.TouchableOpacity}>

              </TouchableOpacity>
            }
          </View>
          <Text style={styles.Line}></Text>
          <View style={styles.flex}>
            <TextInput
              style={styles.textinput}
              placeholder="请输入新密码"
              placeholderTextColor = "#cccccc"
              maxLength = {16}
              secureTextEntry = {this.state.show1}
              onChangeText={this.newOnChangeText}
            />
            {
              this.state.isImage1 == true ? <TouchableOpacity style={styles.TouchableOpacity} onPress={() => {
                if (this.state.show1) {
                  this.setState({
                    show1: false
                  })
                }else {
                  this.setState({
                    show1: true
                  })
                }
              }}>
                <Image
                  style={styles.icon}
                  resizeMode='cover'
                  source={require("../../img/open.png")}
                />
              </TouchableOpacity> : <TouchableOpacity style={styles.TouchableOpacity}>

              </TouchableOpacity>
            }
          </View>
          <Text style={styles.Line}></Text>
          {
            this.state.isTrue == true ? <Text style={styles.errorconfirm} onPress={() => {
              alert('你点击了确认，该跳转了！~')
              // this.props.navigation.navigate('ChangePassword')
            }}>确认</Text> : <Text style={styles.confirm}>确认</Text>
          }
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: height,
    padding: 16,
  },
  title: {
    color: '#4a4a4a',
    fontSize: 23,
    fontFamily: 'PingFangSC-Semibold',
  },
  totst: {
    color: '#999999',
    fontFamily: 'PingFang-SC-Medium',
    fontSize: 13,
    marginTop: 16,
  },
  Line: {
    height: 1,
    backgroundColor: '#d8d8d8',
  },
  flex: {
    width: '100%',
    position: 'relative',
  },
  TouchableOpacity: {
    width: 30,
    height: 20,
    position: 'absolute',
    right: 0,
    bottom: 5,
  },
  icon: {
    width: 18,
    height: 12,
  },
  textinput: {
    width: '90%',
    marginTop: 50,
    color: '#4a4a4a',
    fontSize: 18,
  },
  errorconfirm: {
    marginTop: 44,
    height: 44,
    lineHeight: 44,
    textAlign: 'center',
    fontSize: 16,
    color: '#ffffff',
    backgroundColor: '#25A3FF',
    borderRadius: 4,
  },
  confirm: {
    marginTop: 44,
    height: 44,
    lineHeight: 44,
    textAlign: 'center',
    fontSize: 16,
    color: '#ffffff',
    backgroundColor: '#cccccc',
    borderRadius: 4,
  }
})
export default withNavigation(ChangePassword);
