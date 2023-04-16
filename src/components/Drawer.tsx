import {
  Text,
  StyleSheet,
  View,
  DrawerLayoutAndroid,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Drawer extends Component {
  private drawerRef = React.createRef<DrawerLayoutAndroid>();
  render() {
    const navigationView = (
      <View style={styles.Cn1}>
        <Image
          style={styles.Bmg}
          source={require('../assets/image/bgmg.jpg')}
        />
        <Image
          style={styles.Dmg}
          source={require('../assets/image/chicken-rice.png')}
        />
        <Text style={styles.tx11}>Fatih AFF</Text>
        <View style={styles.cc}>
          <Text style={styles.tx12}>4 Followers</Text>
          <Image
            style={styles.cmg}
            source={require('../assets/image/follower.png')}
          />
        </View>
        <View style={styles.c1}>
          <Icon name="account" size={35} />
          <Text style={styles.I1}>Profile</Text>
        </View>
        <View style={styles.c2}>
          <Icon name="comment-text" size={35} />
          <Text style={styles.I2}>Messages</Text>
        </View>
        <View style={styles.c3}>
          <Icon name="run-fast" size={35} />
          <Text style={styles.I3}>Activity</Text>
        </View>
        <View style={styles.c4}>
          <Icon name="menu" size={35} />
          <Text style={styles.I4}>List</Text>
        </View>
        <View style={styles.c5}>
          <Icon name="alert" size={35} />
          <Text style={styles.I5}>Reports</Text>
        </View>
        <View style={styles.c6}>
          <Icon name="vector-line" size={35} />
          <Text style={styles.I6}>Statistic</Text>
        </View>
        <View style={styles.c7}>
          <Icon name="account-credit-card" size={35} />
          <Text style={styles.I7}>Sighn Out</Text>
        </View>
        <View style={styles.gar}></View>
        <View style={styles.c6}>
          <Icon name="vector-line" size={35} />
          <Text style={styles.I6}>Statistic</Text>
        </View>
        <View style={styles.c7}>
          <Icon name="account-credit-card" size={35} />
          <Text style={styles.I7}>Sighn Out</Text>
        </View>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        ref={this.drawerRef}
        drawerWidth={300}
        drawerPosition={'left'}
        renderNavigationView={() => navigationView}>
        <Icon
          name="menu"
          size={30}
          color={'black'}
          onPress={() => this.drawerRef.current?.openDrawer()}
        />
        {/* <Text
          style={{
            fontSize: 40,
          }}
          onPress={() => this.drawerRef.current?.openDrawer()}>
          Clik
        </Text> */}
        <View style={{alignItems: 'center', marginTop: 400}}>
          <Text
            style={{
              fontSize: 40,
              backgroundColor: 'blue',
              width: 70,
              height: 50,
              borderRadius: 20,
              color: 'black',
            }}>
            Clik
          </Text>
          <Text style={{fontSize: 20, color: 'black', marginTop: 10}}>
            tekan ini untuk pindah halaman
          </Text>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  Cn1: {height: 200},
  Dmg: {width: 90, height: 90, margin: 20},
  cmg: {width: 20, height: 20, marginLeft: 10, bottom: 10},
  cc: {flexDirection: 'row'},
  tx11: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    bottom: 15,
    marginLeft: 25,
  },
  tx12: {
    fontSize: 20,
    color: 'black',
    bottom: 15,
    marginLeft: 25,
  },
  Bmg: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  I1: {marginLeft: 20, fontSize: 15, fontWeight: 'bold', color: 'black'},
  I2: {marginLeft: 20, fontSize: 15, fontWeight: 'bold', color: 'black'},
  I3: {marginLeft: 20, fontSize: 15, fontWeight: 'bold', color: 'black'},
  I4: {marginLeft: 20, fontSize: 15, fontWeight: 'bold', color: 'black'},
  I5: {marginLeft: 20, fontSize: 15, fontWeight: 'bold', color: 'black'},
  I6: {marginLeft: 20, fontSize: 15, fontWeight: 'bold', color: 'black'},
  I7: {marginLeft: 20, fontSize: 15, fontWeight: 'bold', color: 'black'},
  c1: {flexDirection: 'row', marginLeft: 20, marginTop: 20},
  c2: {flexDirection: 'row', marginLeft: 20, marginTop: 20},
  c3: {flexDirection: 'row', marginLeft: 20, marginTop: 20},
  c4: {flexDirection: 'row', marginLeft: 20, marginTop: 20},
  c5: {flexDirection: 'row', marginLeft: 20, marginTop: 20},
  c6: {flexDirection: 'row', marginLeft: 20, marginTop: 20},
  c7: {flexDirection: 'row', marginLeft: 20, marginTop: 20},
  gar: {height: 1, width: '100%', backgroundColor: 'grey', marginTop: 60},
});
