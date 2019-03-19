import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { withNavigation } from 'react-navigation';

import TabNavigator from 'react-native-tab-navigator';
import HomePage from './pages/home/HomePage.js';
import MyPage from './pages/my/MyPage.js';
import ReceptionPage from './pages/reception/ReceptionPage.js';

class Index extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor() {
      super();
      this.state = {
          selectedTab: '个人中心',
      }
  }
  render() {
      return (
          <View style={styles.container}>
              <TabNavigator>
                  <TabNavigator.Item
                      selected={this.state.selectedTab === '首页'}
                      title="首页"
                      titleStyle={styles.tabText}
                      selectedTitleStyle={styles.selectedTabText}
                      renderIcon={() => <Image style={styles.icon} source={require("./img/delete.png")} />}
                      renderSelectedIcon={() => <Image style={styles.icon} source={require("./img/delete.png")} />}
                      onPress={() => this.setState({ selectedTab: '首页' })}>
                      <HomePage />
                  </TabNavigator.Item>
                  <TabNavigator.Item
                      selected={this.state.selectedTab === '接待/预约'}
                      title="接待/预约"
                      titleStyle={styles.tabText}
                      selectedTitleStyle={styles.selectedTabText}
                      renderIcon={() => <Image style={styles.icon} source={require("./img/delete.png")} />}
                      renderSelectedIcon={() => <Image style={styles.icon} source={require("./img/delete.png")} />}
                      onPress={() => this.setState({ selectedTab: '接待/预约' })}>
                      <ReceptionPage />
                  </TabNavigator.Item>
                  <TabNavigator.Item
                      selected={this.state.selectedTab === '个人中心'}
                      title="个人中心"
                      titleStyle={styles.tabText}
                      selectedTitleStyle={styles.selectedTabText}
                      renderIcon={() => <Image style={styles.icon} source={require("./img/delete.png")} />}
                      renderSelectedIcon={() => <Image style={styles.icon} source={require("./img/delete.png")} />}
                      onPress={() => this.setState({ selectedTab: '个人中心' })}>
                      <MyPage />
                  </TabNavigator.Item>
              </TabNavigator>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabText: {
        color: "#666666",
        fontSize: 13
    },
    selectedTabText: {
        color: "#ff8a00",
        fontSize: 13
    },
    icon: {
        width: 25,
        height: 25
    }
});
export default withNavigation(Index);
