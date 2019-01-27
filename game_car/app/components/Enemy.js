/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    Animated,
    ImageBackground,
  } from 'react-native';


type Props = {};
export default class App extends Component<Props> {



  render() {
    return (
      <Animated.Image source={this.props.enemyImg} style={
        {
          height:100,
          width:100,
          position: 'absolute',
          resizeMode:'stretch',
          left:this.props.enemyStartPosX,
          transform:[
            {translateY : this.props.moveEnemyVal}
          ]
        }
        }>
      </Animated.Image>

    );
  }
}

const styles = StyleSheet.create({

});
