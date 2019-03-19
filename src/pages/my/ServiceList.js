      import React, {Component} from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity,TextInput, ScrollView } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { DatePicker, List } from '@ant-design/react-native';
import { withNavigation } from 'react-navigation';

class ServiceList extends Component {
  static navigationOptions = {
    headerStyle: {
      elevation: 0,
    },
    headerRight: (
      <Text></Text>
    ),
    headerTitle: '服务单',
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center',
      alignSelf: 'center',
      color: '#4a4a4a',
      fontSize: 17,
      fontFamily: 'PingFangSC-Medium',
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        order: 'FW152311530689754862',
        state: '1',              //1.待服务 2.已服务 3.已取消 4.服务中。已创建
        orderName: '李易峰',
        orderPhone: '13152353241',
        orderSource: '散客',
        userName: '黄圣依',
      },{
        order: 'WE1531SF210689754862',
        state: '2',              //1.待服务 2.已服务 3.已取消 4.服务中。已创建
        orderName: '冯绍峰',
        orderPhone: '14231242142',
        orderSource: '商务票',
        userName: '赵丽颖',
      },{
        order: 'ZW153sdff330689754862',
        state: '3',              //1.待服务 2.已服务 3.已取消 4.服务中。已创建
        orderName: '成龙',
        orderPhone: '15241312421',
        orderSource: '悦途会员',
        userName: '传奇手游',
      },{
        order: 'RW0689752FFWFWFW4862',
        state: '4',              //1.待服务 2.已服务 3.已取消 4.服务中。已创建
        orderName: '古天乐',
        orderPhone: '116321412422',
        orderSource: '企业客户',
        userName: '贪玩蓝月',
      },{
        order: 'QE52311vfevswcs4862',
        state: '5',              //1.待服务 2.已服务 3.已取消 4.服务中。已创建
        orderName: '渣渣辉',
        orderPhone: '1523242152',
        orderSource: '蚂蚁金服',
        userName: '贪玩蓝月',
      }],
      state: '',
      statrArr: [{
        title: '全部',
      },{
        title: '已服务',
      },{
        title: '已取消',
      },{
        title: '待服务',
      },{
        title: '服务中',
      },{
        title: '已创建',
      }],
      model: false,
      value: undefined,
    };
  }

  _model = () => {
    this.setState({
      model: !this.state.model,
    })
  }
  render() {
    let {list} = this.state;
    let {statrArr} = this.state;
    let backgroundColor = {
      backgroundColor: 'rgba(37, 163, 255, 1)',
      color: '#ffffff',
    };
    // let activeColor = {
    //   backgroundColor: 'rgba(37, 163, 255, 1)',
    // };
    return (
      <View style={styles.container}>
        {
          this.state.model == true ? <View style={styles.ceng}>
            <View>
              <View style={styles.model}>
                <Text style={styles.title}>起止时间</Text>
                <Text>时间控件</Text>
                <Text style={styles.title}>服务状态</Text>
                <View style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginBottom: 10,
                }}>
                  {
                    statrArr ? statrArr.map((list, index) => {
                      return (<View key={index} style={styles.view}><Text style={styles.btn}>{list.title}</Text></View>)
                    }) : ''
                  }
                </View>
              </View>
              <View style={{flexDirection: "row",}}>
                <Text style={styles.button}>重置</Text>
                <Text style={[styles.button, backgroundColor]}>确定</Text>
              </View>
            </View>
          </View> : <Text style={{height: 0}}></Text>
        }
        <ScrollView>
        <View style={styles.search}>
          <View style={styles.searchBorder}>
            <Image style={styles.icons} source={require("../../img/setup.png")} />
            <TextInput
              style={styles.searchInput}
              placeholder="请输入手机号查询"
              placeholderTextColor = "#cccccc"
              maxLength = {11}
              returnKeyType="search"
              onFocus={() => {
                this.setState({
                  model: false
                })
              }}
            />
          </View>
          <TouchableOpacity onPress={() => {
            this._model()
          }}>
            <Image
              style={styles.icon}
              resizeMode='cover'
              source={require("../../img/setup.png")}
            />
          </TouchableOpacity>
        </View>
        </ScrollView>
        <ScrollView>
          {
            list ? list.map((item, index) => {
              let state = '';
              let stateColor = '';
              if (item.state == 1) { //1.待服务 2.已服务 3.已取消 4.服务中。已创建
                state = '待服务';
                stateColor = '#F5A623';
              }else if (item.state == 2) {
                state = '已服务';
                stateColor = '#6a6a6a';
              }else if (item.state == 3) {
                state = '已取消';
                stateColor = '#6a6a6a';
              }else if (item.state == 4) {
                state = '服务中';
                stateColor = '#25A3FF';
              }else if (item.state == 5) {
                state = '已创建';
                stateColor = '#6a6a6a';
              }
              return (
                <TouchableOpacity activeOpacity={1} key = {index} onPress={() => {
                  this.props.navigation.navigate('ServiceDetail');
                }}>
                  <View style={styles.list}>
                    <View style={styles.orderNumber}>
                      <Text style={styles.number}>服务单号：{item.order}</Text>
                      <Text style={{fontSize: 15,fontFamily: 'PingFang-SC-Medium',color: stateColor,}}>{state}</Text>
                      <Image style={styles.iconRight} source={require("../../img/right.png")} />
                    </View>
                    <Text style={styles.orderName}>{item.orderName}</Text>
                    <Text style={styles.orderName}>{item.orderPhone}</Text>
                    <View style={styles.orderSource}>
                      <Text style={styles.orderName}>接待来源：{item.orderSource}</Text>
                      <Text style={styles.userName}>{item.userName}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            }) : <Text style={{ flex: 1, alignItems: 'center', justifyContent: 'center',fontSize: 30 }}>暂无数据</Text>
          }
        </ScrollView >
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: '100%',
    backgroundColor: '#f5f5f5',
    position: 'relative',
  },
  ceng: {
    width: "100%",
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    position: 'absolute',
    top: 50,
    zIndex: 130,
  },
  model: {
    backgroundColor: '#f5f5f5',
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    color: '#4a4a4a',
    fontSize: 15,
    fontFamily: 'PingFang-SC-Medium',
    opacity: 1.0,
    marginTop: 20,
    marginBottom: 14,
  },
  view: {
    width: '33%',
    justifyContent: 'center',
    alignItems:'center',
  },
  btn: {
    borderStyle: 'solid',
    borderColor: '#cccccc',
    borderWidth: 1,
    width: 90,
    height: 30,
    textAlign: 'center',
    lineHeight: 30,
    color: '#999999',
    fontSize: 15,
    marginBottom: 15,
  },
  button: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
    height: 44,
    backgroundColor: '#ffffff',
    color: '#4a4a4a',
    textAlign: 'center',
    lineHeight: 44,
    fontSize: 16,
    fontFamily: 'PingFang-SC-Medium',
  },
  search: {
    width: '100%',
    height: 52,
    flexDirection: "row",
    backgroundColor: '#ffffff',
    marginBottom: 8,
  },
  searchBorder: {
    width: "80%",
    flexDirection: "row",
    height: 30,
    marginBottom: 11,
    marginTop: 10,
    marginLeft: 16,
    borderStyle: 'solid',
    borderColor: '#cccccc',
    borderWidth: 1,
    position: 'relative',
  },
  searchInput: {
    position: 'absolute',
    left: 37,
    height: 30,
    fontSize: 14,
    width: '85%',
    paddingTop: 5,
    paddingBottom: 5,
  },
  icons: {
    width: 15,
    height: 15,
    marginLeft: 12,
    marginTop: 7,
    marginBottom: 8,
  },
  icon: {
    width: 16,
    height: 16,
    marginLeft: 30,
    marginTop: 16,
    marginBottom: 16,
  },
  list: {
    backgroundColor: '#ffffff',
    paddingLeft: 14,
    paddingRight: 14,
    marginBottom: 8,
  },
  orderNumber: {
    flexDirection: "row",
    paddingTop: 14,
    paddingBottom: 20,
  },
  number: {
    fontSize: 15,
    fontFamily: 'PingFangSC-Semibold',
    fontWeight: 'bold',
    color: '#4a4a4a',
    flex: 1,
  },
  orderName: {
    color: '#6a6a6a',
    fontSize: 13,
    paddingBottom: 10,
    fontFamily: 'PingFang-SC-Medium',
    flex: 1,
  },
  orderSource: {
    flexDirection: "row",
    paddingBottom: 14,
  },
  userName: {
    color: '#4a4a4a',
    fontSize: 15,
  },
  iconRight: {
    width: 8,
    height: 13,
    marginTop: 4,
    marginLeft: 6,
  }
})

export default withNavigation(ServiceList);
