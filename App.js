import React, { useState } from 'react';
import { ScrollView, Modal, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, Alert, YellowBox, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
  state = {
    isVisible: false
  };
  displayModal(show) {
    this.setState({ isVisible: show })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>헤더 적용</Text>
        </View>
        <View style={styles.profilebackground}>
        </View>
        <View style={styles.profilephotocircle}>
        </View>

        <Image
          style={styles.tinyphoto}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <View style={styles.profilelist}>
          <View style={styles.profilelistdetail}>
            <TextInput placeholder='닉네임'>닉네임</TextInput>
            <Text>이메일(연동계정)</Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              }}
            />
              <Text style={styles.listtext}>알림설정</Text>
            <TouchableOpacity>
              <Text style={styles.listtext}>앱 버전</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.listtext}>문의사항</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.listtext}>구글플레이 스토어 리뷰</Text>
            </TouchableOpacity>

          </View>
        </View>


        <View style={styles.navigator}>
              <Text>네비게이터 적용공간</Text>
        </View>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  profilebackground: {
    height: 101,
    backgroundColor: '#cfcfcf',
    borderRadius: 100,
  },
  profilephotocircle: {
    position: 'absolute',
    top: 120,
    bottom: 430,
    right: 254,
    left: 16,
    height: 90,
    width: 90,
    borderRadius: 100,
    backgroundColor: 'white',
  },
  tinyphoto: {
    position: 'absolute',
    top: 128,
    bottom: 438,
    right: 262,
    left: 24,
    height: 74,
    width: 74,
    borderRadius: 100,
  },

  profilelist: {
    backgroundColor: 'white',
    height: 374,
    marginTop: 40,

  },
  profilelistdetail: {
    backgroundColor: 'white',
    marginTop:3,
    marginLeft: 32,
    marginRight: 24,
  },

  navigator: {
    height: 56,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#cfcfcf',


  },

  listtext:{
    fontSize:14,
    marginTop:32,
    flexDirection:'row',
  },
  //button component

  // 캐릭터 버튼
  characterbutton: {
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
  },
  characteraddbutton: {
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    padding: 0,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
  },

  categorybutton: {
    height: 32,
    width: 53,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    padding: 10,
    borderWidth: 0.8,
    borderColor: 'black',
    borderRadius: 20,
  },

});