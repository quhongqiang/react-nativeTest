/**
 * React Native App
 * dongtao 2017/04/22
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Modal,
  PixelRatio,
  View,
  TouchableOpacity
} from 'react-native';


class ModalDemo extends Component {

  constructor(props) {
    super(props);//这一句不能省略，照抄即可
    this.state = {
      animationType: 'none',//none slide fade
      modalVisible: false,//模态场景是否可见
      transparent: true,//是否透明显示
    };
  }

  render() {
    let modalBackgroundStyle = {
      backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '',
    };

    return (
      <View style={{ alignItems: 'center', flex: 1 }}>
        <Modal
          animationType={this.state.animationType}
          transparent={this.state.transparent}
          visible={this.state.modalVisible}
          onRequestClose={() => { this._setModalVisible(false) } }
          >
          <View activeOpacity={1} style={[styles.container, modalBackgroundStyle]}>
            <Text
              onPress={this._setModalVisible.bind(this,false) }
              style={styles.btn_text}>
              关闭
            </Text>
          </View>
        </Modal>

          <Text style={{ fontSize: 30,color:'red' }}  onPress={this._setModalVisible.bind(this, true) }>预定火车票</Text>


      </View>
    );
  }


  _setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  startShow=()=>{
    alert('开始显示了');
  }




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: 'blue'
  },
  btn_text: {
    lineHeight: 18,
    textAlign: 'center',
    color: '#fff',
  },
});
export default ModalDemo;
