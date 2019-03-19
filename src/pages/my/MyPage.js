import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

class MyPage extends Component {
  constructor() {
    super();
    this.state = {
      name: '荒天帝',
      phone: '15231242123'
    }
  }
  setup = () => {
    alert(2)
    this.props.navigate('SetupPage');
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Image style={styles.photo} source={require("../../img/photo.jpg")} />
          <View style={styles.names}>
            <Text style={styles.name}>{this.state.name}</Text>
            <Text style={styles.phone}>账号：{this.state.phone}</Text>
          </View>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('SetupPage')}}>
            <Image
              style={styles.icon}
              resizeMode='cover'
              source={require("../../img/setup.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.list}>
          <Text style={styles.title} onPress={() => {
            this.props.navigation.navigate('AppointmentNumber');
          }}>预约设置</Text>
          <Image style={styles.iconRight} source={require("../../img/right.png")} />
        </View>
        <View style={styles.list}>
          <Text style={styles.title} onPress={() => {
            this.props.navigation.navigate('ServiceList');
          }}>服务单</Text>
          <Image style={styles.iconRight} source={require("../../img/right.png")} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
  info: {
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: "row",
    paddingTop: 40,
    paddingBottom: 40,
  },
  names: {
    flex: 1,
  },
  photo : {
    width: 60,
    height: 60,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 5,
  },
  name: {
    justifyContent: 'center',
    color: '#4a4a4a',
    fontSize: 20,
    marginTop: 3,
    fontFamily: 'PingFangSC-Semibold'
  },
  phone: {
    color: '#6a6a6a',
    fontFamily: 'PingFang-SC-Medium',
    marginTop: 10,
    fontSize: 15,
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 30,
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
  iconRight: {
    width: 10,
    height: 14,
    marginTop:18,
    marginBottom: 18,
    marginRight: 18,
  }
});
export default withNavigation(MyPage);
