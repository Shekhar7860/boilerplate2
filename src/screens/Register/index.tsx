import {useNavigation} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {useContext} from 'react';
import {useState} from 'react';
import RegisterComponent from '../../components/Signup';
import {LOGIN} from '../../constants/routeNames';


const Register = () => {
  const [form, setForm] = useState({});
  const {navigate} = useNavigation();
  const [errors, setErrors] = useState({});







  return (
    <RegisterComponent
      form={form}
      errors={errors}
    />
  );
};

export default Register;
