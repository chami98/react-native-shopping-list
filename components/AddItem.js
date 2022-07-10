import React , {useState}from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = () => {

const [text, setText] = useState('')
    
  return (
    <View>
      <TextInput placeholder="Add Item" style={styles.input} onChangeText />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    margin: 5,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darklateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
