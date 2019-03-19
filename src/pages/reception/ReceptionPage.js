import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { withNavigation } from 'react-navigation';

class ReceptionPage extends Component {
  // static navigationOptions = {
  //   title: '首页',
  // };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>接待页面</Text>
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
export default withNavigation(ReceptionPage);
