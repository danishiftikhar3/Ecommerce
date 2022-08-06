import React, { Component } from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';

const top = [
  {
    'id': '1',
    'jacket': 'Jacket'
  },
  {
    'id': '2',
    'jacket': 'Jeans'
  },
  {
    'id': '3',
    'jacket': 'Coats'
  },
  {
    'id': '4',
    'jacket': 'T-Shirts'
  },
  {
    'id': '5',
    'jacket': 'Polo Shirts'
  },


];

const women = [
  {
    'id': '1',
    'jacket': 'Jacket'
  },
  {
    'id': '2',
    'jacket': 'Jeans'
  },
  {
    'id': '3',
    'jacket': 'Coats'
  },
  {
    'id': '4',
    'jacket': 'T-Shirts'
  },
  {
    'id': '5',
    'jacket': 'Polo Shirts'
  },
];


const kids = [
  {
    'id': '1',
    'jacket': 'Jacket'
  },
  {
    'id': '2',
    'jacket': 'Jeans'
  },
  {
    'id': '3',
    'jacket': 'Coats'
  },
  {
    'id': '4',
    'jacket': 'T-Shirts'
  },
  {
    'id': '5',
    'jacket': 'Polo Shirts'
  },
];



export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abc: false,
      top: -280,

      abc2: false,
      top2: -280,

      abc3: false,
      top3: -280,
    };
  }

  render() {
    return (
      <ScrollView>
        <View>
          <View style={styles.mainview}>
            <View style={styles.view1}>
              <TouchableOpacity>
                <Image style={styles.backimg} source={require('../../assets/marrow.png')}></Image>
              </TouchableOpacity>
            </View>
            <View style={styles.view2}>
              <Text style={styles.tx1}>Categories</Text>
            </View>
          </View>

          <View style={{ width: '95%', backgroundColor: 'white', height: 500, height: this.state.abc == true ? 250 : 50, alignSelf: 'center', borderRadius: 20, marginTop: 90 }}>
            <View style={{ flexDirection: 'row', backgroundColor: '#DFDFDF' }}>
              <TouchableOpacity onPress={() => this.setState({ abc: !this.state.abc })}
              >
                {this.state.abc == true ? <Image resizeMode="contain" style={{ width: 50, height: 35, marginTop: 15,  }}
                  source={require('../../assets/mupar.png')} ></Image> : <Image resizeMode="contain" style={{ width: 50, height: 35, marginTop: 15,transform: [{ rotate: '180deg' }] }}
                    source={require('../../assets/mupar.png')} ></Image>}

              </TouchableOpacity>
              <View style={{ width: '30%' }}></View>

              <Text style={{ alignSelf: "center", fontSize: 20 }}>Men</Text>
            </View>
            {this.state.abc == true ?

              <View>


                <FlatList

                  data={top}
                  renderItem={({ item, index }) => (
                    <View style={{backgroundColor:"lightblue"}}>

                      <View>
                        <TouchableOpacity>
                          <Text style={{ fontSize: 18, alignSelf: 'center', marginTop: 15 }}>{item.jacket}</Text>
                        </TouchableOpacity>
                      </View>

                    </View>

                  )}
                  keyExtractor={item => item.id}
                />
              </View>
              : null}

          </View>


          <View style={{ width: '95%', backgroundColor: 'white', height: 500, height: this.state.abc2 == true ? 250 : 50, alignSelf: 'center', borderRadius: 20, marginTop: 20 }}>
            <View style={{ flexDirection: 'row', backgroundColor: '#DFDFDF' }}>
              <TouchableOpacity onPress={() => this.setState({ abc2: !this.state.abc2 })}
              >
                {this.state.abc2 == true ? <Image resizeMode="contain" style={{ width: 50, height: 35, marginTop: 15,  }}
                  source={require('../../assets/mupar.png')} ></Image> : <Image resizeMode="contain" style={{ width: 50, height: 35, marginTop: 15,transform: [{ rotate: '180deg' }] }}
                    source={require('../../assets/mupar.png')} ></Image>}

              </TouchableOpacity>
              <View style={{ width: '28%' }}></View>

              <Text style={{ alignSelf: "center", fontSize: 20 }}>Women</Text>
            </View>
            {this.state.abc2 == true ?

              <View>
                

                <FlatList
                  data={women}
                  renderItem={({ item, index }) => (
                    <View style={{backgroundColor:"pink"}}>

                      <View>
                        <TouchableOpacity>
                          <Text style={{ fontSize: 18, alignSelf: 'center', marginTop: 15 }}>{item.jacket}</Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                  )}
                  keyExtractor={item => item.id}
                />
              </View>
              : null}


          </View>


          <View style={{ width: '95%', backgroundColor: 'white', height: 500, height: this.state.abc3 == true ? 250 : 50, alignSelf: 'center', borderRadius: 20, marginTop: 20 }}>
            <View style={{ flexDirection: 'row', backgroundColor: '#DFDFDF' }}>
              <TouchableOpacity onPress={() => this.setState({ abc3: !this.state.abc3 })}
              >
                {this.state.abc3 == true ? <Image resizeMode="contain" style={{ width: 50, height: 35, marginTop: 15, }}
                  source={require('../../assets/mupar.png')} ></Image> : <Image resizeMode="contain" style={{ width: 50, height: 35, marginTop: 15,transform: [{ rotate: '180deg' }] }}
                    source={require('../../assets/mupar.png')} ></Image>}

              </TouchableOpacity>
              <View style={{ width: '28%' }}></View>

              <Text style={{ alignSelf: "center", fontSize: 20 }}>Kids</Text>
            </View>
            {this.state.abc3 == true ?

              <View>
                

                <FlatList
                  data={kids}
                  renderItem={({ item, index }) => (
                    <View style={{backgroundColor:'wheat'}}>

                      <View>
                        <TouchableOpacity>
                          <Text style={{ fontSize: 18, alignSelf: 'center', marginTop: 15 }}>{item.jacket}</Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                  )}
                  keyExtractor={item => item.id}
                />
              </View>
              : null}


          </View>
          <View style={{ marginTop: 100 }}></View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  background: {
    height: 230,
    width: '100%',
  },
  mainview: {
    borderWidth: 1,
    flexDirection: 'row',
    height: 70,
    borderBottomColor: '#c0c0c0',
    borderBottomWidth: 2

  },
  backimg: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 10

  },
  homeimg: {
    width: 50,
    height: 30,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 5
  },
  view1: {
    width: '38%'
  },
  view2: {
    justifyContent: 'center',
    flexDirection: 'row',



  },
  tx1: {
    alignSelf: 'center',
    fontSize: 20,
    textAlignVertical: "center",

  },
  jacket: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    justifyContent: 'center',
    marginTop: 15,
    marginLeft: 10,


  },

  kids: {
    width: 70,
    height: 110,
    resizeMode: 'contain',
    justifyContent: 'center',
    marginTop: 15,
    marginLeft: 10,


  },

});
