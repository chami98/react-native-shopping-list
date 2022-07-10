import React from 'react';
import {
  View,
  Text,
  Stylesheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = () => {
  return (
    <View>
      <TextInput placeholder="Add Item" style={styles.input} />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = Stylesheet.create({});

export default AddItem;
