import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import IndexJs from "./src/Index";
import HomePage from "./src/pages/home/HomePage";
import MyPage from "./src/pages/my/MyPage";
import ReceptionPage from "./src/pages/reception/ReceptionPage";
import SetupPage from "./src/pages/my/SetupPage"; //设置页面
import ChangePassword from "./src/pages/my/ChangePassword";//修改密码
import AppointmentNumber from "./src/pages/my/AppointmentNumber";//预约人数
import ServiceList from "./src/pages/my/ServiceList";//服务单
import ServiceDetail from "./src/pages/my/ServiceDetail";//服务单详情
import ModifyOrder from "./src/pages/my/ModifyOrder";//服务单详情
import Ac from "./src/pages/my/a";//测试

const AppNavigator = createStackNavigator({
  IndexJs: {
    screen: IndexJs, //首页
  },
  HomePage: {
    screen: HomePage,
  },
  MyPage: {
    screen: MyPage,
  },
  ReceptionPage: {
    screen: ReceptionPage,
  },
  SetupPage: {
    screen: SetupPage,
  },
  ChangePassword: {
    screen: ChangePassword,
  },
  AppointmentNumber: {
    screen: AppointmentNumber,
  },
  ServiceList: {
    screen: ServiceList,
  },
  ServiceDetail: {
    screen: ServiceDetail,
  },
  ModifyOrder: {
    screen: ModifyOrder,
  },
  Ac: {
    screen: Ac,
  },
}, {
    initialRouteName: 'ServiceList',
});

export default createAppContainer(AppNavigator);
