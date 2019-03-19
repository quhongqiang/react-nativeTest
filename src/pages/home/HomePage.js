import React, {Component} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackActions, NavigationActions, withNavigation } from 'react-navigation';

class HomePage extends Component {
  // static navigationOptions = {
  //   title: '首页',
  // };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>首页</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('ChangePassword')
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({

})
export default withNavigation(HomePage);
