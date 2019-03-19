import React, {Component} from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { StackActions, NavigationActions, withNavigation } from 'react-navigation';

class SetupPage extends Component {
  // react-navigation一些设置
  // https://blog.csdn.net/quhongqiang/article/details/86607467
  static navigationOptions = {
    headerStyle: {
      elevation: 0,
    },
    headerRight: (
      <Text></Text>
    ),
    headerTitle: '设置',
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center',
      alignSelf: 'center',
      color: '#4a4a4a',
      fontSize: 17,
      fontFamily: 'PingFangSC-Medium',
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.list}>
          <Text style={styles.title} onPress={() => {
            this.props.navigation.navigate('ChangePassword')
          }}>修改密码</Text>
          <Image style={styles.iconRight} source={require("../../img/right.png")} />
        </View>
        <View style={styles.exit}>
          <Text style={styles.titleColor} onPress={() => {
            alert('退出登录')
          }}>退出登录</Text>
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
  list: {
    width: '100%',
    marginTop: 8,
    backgroundColor: '#ffffff',
    flexDirection: "row",
  },
  title: {
    color: '#4a4a4a',
    fontSize: 16,
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
  },
  exit: {
    width: '100%',
    height: 50,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  titleColor: {
    textAlign: 'center',
    lineHeight: 50,
    backgroundColor: '#ffffff',
    color: '#25a3ff',
    fontFamily: 'PingFang-SC-Medium',
    fontSize: 16,
  }
})

export default withNavigation(SetupPage);
