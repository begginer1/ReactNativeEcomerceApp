
import React from 'react';
import Product from './Product'
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationBarandfilter from './NavigationBarandfilter';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity, ScrollView } from 'react-native';


const App = () => {
  return (
    //  <NavigationBarandfilter/>
    <View>
      <View style={{ width: '100%', flexDirection: 'row' ,borderColor:'grey'}}>
        <Icon style={styles.icon} name="arrow-left" size={28} color="#000000" />
        <Text style={{ fontSize: 20, paddingLeft: 20, paddingRight: '10%', marginTop: '3%', fontWeight: 'bold', color: 'black' }}>My Cart</Text>
      </View>

      <View style={{ width: '100%', flexDirection: 'row' }}>
        <Icon style={styles.icon} name="circle" size={28} color="#9E33FF" />
        <View style={styles.hairline} />
        <Icon style={styles.icon} name="circle" size={28} color="#9E33FF" />
        <View style={styles.hairline} />
        <Icon style={styles.icon} name="circle" size={28} color="#9E33FF" />
      </View>

      <View style={{ width: '100%', flexDirection: 'row' }}>
        <Text style={{fontWeight:"bold",color:"#9E33FF",marginLeft:'1%',margin: '1%',marginTop: '1%',padding: '2%',paddingLeft: '5%'}}>Address</Text>
        <Text style={{fontWeight:"bold",color:"#9E33FF",marginLeft:'9%',margin: '1%',marginTop: '1%',padding: '2%',paddingLeft: '5%'}}>OrderSummary</Text>
        <Text style={{fontWeight:"bold",color:"#9E33FF",marginLeft:'13%',margin: '1%',marginTop: '1%',padding: '2%',paddingLeft: '5%'}}>Payment</Text>
      </View>
      <View style={{borderColor:'grey',borderStyle:'solid',borderWidth:30,}}>
      <Text style={{fontWeight:'bold',color:'black',marginTop:'2%'}}>Deliver To</Text>
      <Text style={{fontWeight:'bold',color:'black',marginTop:'6%'}}>Name</Text>
      <Text style={{fontWeight:'bold',color:'black',marginTop:'2%'}}>Address</Text>
      <Text style={{fontWeight:'bold',color:'black',marginTop:'2%'}}>PhoneNo</Text>
      </View>
      <View>
      <Text style={{fontWeight:'bold',color:'#9E33FF',marginTop:'2%',fontSize:18}}>1/2 ITEM SELECTED</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create(
  {
    icon: {
      margin: '1%',
      marginTop: '1%',
      padding: '2%',
      paddingLeft: '5%'
    },
    hairline: {
      backgroundColor: '#9E33FF',
      borderStyle:'dotted',
      marginTop: '6%',
      borderRadius: 1,
      height: 2,
      width: 100
    }

  }
);
export default App;