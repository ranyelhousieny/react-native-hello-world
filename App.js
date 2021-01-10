import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function App () {
  const [ value, setValue ] = React.useState( "" );
  const [ state, addTask ] = React.useState({ tasks: []});
  return (
    <View style={styles.container}>
      <Text>Rany ElHousieny To DO List</Text>
      <TextInput
        style={ { borderColor: 'black', borderWidth: 2 } }
        onChangeText={ text => setValue( text ) }
        placeholder="Add a task"
        value={value} />
      <Button
        title="Add Task"
        onPress={ () => {
          addTask( { ...state, tasks: [ ...state.tasks, value ] } );
          setValue("")
          console.log(state)
        } }
      />
      <hr/>
      <view>
        { state.tasks.map( ( task, index ) => {

          return (
            <span>
            <li key={ index }>{ task }
              <Button
                  title={ `Delete ` + task }
                  onPress={ () => {
                    console.log( "state", state );
                    const array = [ ...state.tasks ];
                    array.splice( index, 1 );
                    console.log( "array", array );
                    addTask( { tasks: array } )
                    console.log( "state", state );
                    
                  } }
              />
            </li>
              </span>
             );
        }) }
      </view>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
