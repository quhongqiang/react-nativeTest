import React, {Component} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class HeaderView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderDown: false,
    };
  }
  render() {
    return (
      <View style={{ flexDirection: 'column' }}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            height: 48,
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <TouchableOpacity
            onPress={()=>{}}
            style={{
              paddingLeft: 15,
              paddingTop: 5,
              paddingBottom: 5
            }}
          >
            <Image
              style={{ width: 16, height: 20 }}
              source={require('../../img/left.png')}
            />
          </TouchableOpacity>
          <View style={{ alignItems: 'center',justifyContent: 'center', flex: 1,flexDirection: 'row',}}>
            <Text
              style={{ color: '#4A4A4A', fontWeight: 'bold', fontSize: 17, backgroundColor: 'red'  }}
              onPress={()=>{
                this.setState({
                  orderDown: !this.state.orderDown,
                })
              }}
            >
              订单
            </Text>
            <Image
              style={{ width: 16, height: 20 }}
              source={this.state.orderDown ? require('../../img/left.png') : require('../../img/right.png')}
            />
          </View>
          <TouchableOpacity
            onPress={()=>{}}
            style={{
              paddingRight: 15,
              paddingTop: 5,
              paddingBottom: 5
            }}
          >
            <Image
              style={{ width: 16, height: 20 }}
              source={require('../../img/right.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
