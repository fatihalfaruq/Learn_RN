import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';
export default class Learn extends Component {
  render() {
    return (
      <View>
        <View style={styles.con}>
          <Icon
            name="email-alert-outline"
            style={styles.i}
            size={50}
            color={'black'}
          />
        </View>
        <Fumi
          style={styles.TI}
          label={'Logic'}
          iconClass={FontAwesomeIcon}
          iconName={'university'}
          iconColor={'red'}
          iconSize={20}
          inputPadding={16}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  i: {backgroundColor: 'red', width: 50, height: 50},
  con: {alignItems: 'center', marginTop: 40},
  TI: {marginTop: 40},
});
