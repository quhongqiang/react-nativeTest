import React, {Component} from 'react';
import { View, Text, StyleSheet,ScrollView,TextInput } from 'react-native';
import { StackActions, NavigationActions, withNavigation } from 'react-navigation';


class HomePage extends Component {
  static navigationOptions = {
    headerStyle: {
      elevation: 0,
    },
    headerRight: (
      <Text></Text>
    ),
    headerTitle: '修改服务单',
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
        <View style={styles.flex}>
          <Text style={styles.key}>车次/航班号:</Text>
          <TextInput
            style={styles.value}
            placeholder="请输入车次/航班号"
            placeholderTextColor = "#cccccc"
            onChangeText={()=> {this.setState({})}}
          />
        </View>
        <View style={styles.flex}>
          <Text style={styles.key}>出发站:</Text>
          <TextInput
            style={styles.value}
            placeholder="请输入出发站"
            placeholderTextColor = "#cccccc"
            onChangeText={()=> {this.setState({})}}
          />
        </View>
        <View style={styles.flex}>
          <Text style={styles.key}>到达站:</Text>
          <TextInput
            style={styles.value}
            placeholder="请输入到达站"
            placeholderTextColor = "#cccccc"
            onChangeText={()=> {this.setState({})}}
          />
        </View>
        <View style={styles.flex}>
          <Text style={styles.key}>开车/起飞时间:</Text>
          <Text style={styles.value}>66668888</Text>
        </View>
        <View style={styles.flex}>
          <Text style={styles.key}>检票口:</Text>
          <TextInput
            style={styles.value}
            placeholder="请输入检票口"
            placeholderTextColor = "#cccccc"
            onChangeText={()=> {this.setState({})}}
          />
        </View>
        <View style={styles.flex}>
          <Text style={styles.key}>站厅座位号:</Text>
          <TextInput
            style={styles.value}
            placeholder="请输入站厅座位号"
            placeholderTextColor = "#cccccc"
            onChangeText={()=> {this.setState({})}}
          />
        </View>
        <View style={styles.flex}>
          <Text style={styles.key}>提醒时间:</Text>
          <Text style={styles.value}>66668888</Text>
        </View>
        <View style={styles.flex}>
          <Text style={styles.key}>备注:</Text>
          <TextInput
            style={{minHeight: 100,width: '70%',}}
            placeholder="请输入备注信息"
            underlineColorAndroid={'transparent'}
            multiline={true}
            placeholderTextColor = "#cccccc"
            onChangeText={()=> {this.setState({})}}
          />
        </View>
        <View>
          <Text style={styles.modify} onPress={() => {
            this.props.navigation.navigate('ModifyOrder');
          }}>保存修改</Text>
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
  flex: {
    flexDirection: "row",
    backgroundColor: '#ffffff',
    marginTop: 2,
  },
  key: {
    marginRight: 10,
    paddingLeft: 16,
    lineHeight: 50,
    height: 50,
    color: "#6a6a6a",
    fontSize: 15,
    fontFamily: 'PingFang-SC-Medium',
  },
  value: {
    width: '70%',
    color: "#4a4a4a",
    fontSize: 15,
    fontFamily: 'PingFang-SC-Medium',
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
export default withNavigation(HomePage);
