import React from 'react'
import {View, Text} from 'react-native'
import { SOME_KEY} from '@env'
import OfflineNotice  from '../components/HOC/OfflineNotice'
interface props {
    connected : any
}
const Home:React.FC<props> = ({connected}) => {
return(<View><Text>{connected ? '1' : 0}</Text></View>)
}

export default OfflineNotice(Home);