import React, {Component} from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { StackActions, NavigationActions, withNavigation } from 'react-navigation';

class ServiceDetail extends Component {
  static navigationOptions = {
    headerStyle: {
      elevation: 0,
    },
    headerRight: (
      <Text></Text>
    ),
    headerTitle: '服务单详情',
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
      <ScrollView style={styles.container}>
        <View style={styles.userInfo}>
          <View style={styles.flex}>
            <Text style={styles.key}>客户姓名:</Text>
            <Text style={styles.value}>马天磊</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.key}>客户手机号:</Text>
            <Text style={styles.value}>15236989563</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.key}>证件类型:</Text>
            <Text style={styles.value}>身份证</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.key}>证件号码:</Text>
            <Text style={styles.value}>130927********5699</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.key}>会员类型:</Text>
            <Text style={styles.value}>金卡会员</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.key}>会员卡号:</Text>
            <Text style={styles.value}>6666-0000-8866-8888</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.key}>接待来源:</Text>
            <Text style={styles.value}>悦途会员</Text>
          </View>
        </View>
        <View style={styles.trainInfo}>
          <View style={styles.flex}>
            <Text style={styles.key}>车次/航班号:</Text>
            <Text style={styles.value}>G120</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.key}>起始站:</Text>
            <Text style={styles.value}>北京西站</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.key}>到达站:</Text>
            <Text style={styles.value}>天津站</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.key}>开车/起飞时间:</Text>
            <Text style={styles.value}>2018-01-09 14:02</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.key}>检票口:</Text>
            <Text style={styles.value}>北1</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.key}>站厅座位号:</Text>
            <Text style={styles.value}>20</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.key}>提醒时间:</Text>
            <Text style={styles.value}>2018-01-09 13:32</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.key}>备注:</Text>
            <Text style={styles.value}>备注信息</Text>
          </View>
        </View>
        <View style={styles.serveInfo}>
          <View style={styles.flex}>
            <Text style={styles.key}>使用服务:</Text>
            <Text style={styles.value}>高铁贵宾厅</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.key}>服务单号:</Text>
            <Text style={styles.value}>FW527848684432400384</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.key}>服务单状态:</Text>
            <Text style={{
              width: '70%',
              paddingTop: 9,
              paddingBottom: 9,
              color: "#25A3FF",
              fontSize: 15,
              fontFamily: 'PingFang-SC-Medium',
            }}>服务中</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.key}>服务时间:</Text>
            <Text style={styles.value}>2018-01-09 14:02:02</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.key}>结束时间:</Text>
            <Text style={styles.value}>-</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.key}>接待人:</Text>
            <Text style={styles.value}>李馨馨</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.key}>身份校验:</Text>
            <Text style={styles.value}>-</Text>
          </View>
        </View>
        <View>
          <Text style={styles.modify} onPress={() => {
            this.props.navigation.navigate('ModifyOrder');
          }}>修改</Text>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
  userInfo: {
    backgroundColor: '#ffffff',
    marginTop: 2,
    width: "100%",
  },
  flex: {
    flexDirection: "row",
  },
  key: {
    width: '30%',
    paddingLeft: 16,
    paddingTop: 9,
    paddingBottom: 9,
    color: "#6a6a6a",
    fontSize: 15,
    fontFamily: 'PingFang-SC-Medium',
  },
  value: {
    width: '70%',
    paddingTop: 9,
    paddingBottom: 9,
    color: "#4a4a4a",
    fontSize: 15,
    fontFamily: 'PingFang-SC-Medium',
  },
  trainInfo: {
    backgroundColor: '#ffffff',
    marginTop: 8,
  },
  serveInfo: {
    backgroundColor: '#ffffff',
    marginTop: 8,
  },
  modify: {
    width: '90%',
    height: 44,
    lineHeight: 44,
    textAlign: 'center',
    fontFamily: 'PingFang-SC-Medium',
    borderRadius: 4,
    backgroundColor: '#25A3FF',
    color: "#ffffff",
    fontSize: 16,
    margin: '5%',
  }
})
export default withNavigation(ServiceDetail);
