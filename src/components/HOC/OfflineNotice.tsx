import React, { PureComponent, useEffect, useState} from 'react';
import { View, Text,Dimensions, StyleSheet } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
const { width } = Dimensions.get('window');

function MiniOfflineSign() {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Internet Connection</Text>
    </View>
  );
}
const OfflineNotice = WrappedComponent => props => { // curry
  const [isConnected, setIsConnected] = useState(false);
  useEffect(() => {
    getNetInfo()
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener((state) => {
      // console.log('state', state)
      setIsConnected(state.isConnected);
    });

    return () => {
      // Unsubscribe to network state updates
      unsubscribe();
    };
  }, []);
  const getNetInfo = () => {
    // To get the network state once
    NetInfo.fetch().then((state) => {
      // console.log('...state', state)
      setIsConnected(state.isConnected);
    });
  };

  return (
    <>
    {!isConnected ?
      <MiniOfflineSign /> : null}
      <WrappedComponent connected={isConnected} {...props}/>
    </>
  );
};

// const OfflineNotice :React.FC= (WrappedComponent) => {
//     return class extends PureComponent  {
//         state = {
//             isConnected: true
//           };
        
//           componentDidMount() {
//             NetInfo.addEventListener('connectionChange', this.handleConnectivityChange);
//           }
        
//           componentWillUnmount() {
//             // NetInfo.removeEventListener('connectionChange', this.handleConnectivityChange);
//           }
        
//           handleConnectivityChange = isConnected => {
//              console.log('connecteddd', connected)
//               this.setState({ isConnected });
//           };
        
//           render() {
//             return(
//               <>
//             {!this.state.isConnected ?
//               <MiniOfflineSign /> : null}
//               <WrappedComponent connected={'122'} {...this.props}/>
//             </>)
//               }

          
    
// }
// }
    
export default OfflineNotice;


const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    top: 30
  },
  offlineText: { color: '#fff' }
});
