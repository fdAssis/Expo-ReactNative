import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#060930',
    marginTop: 60
  },

  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "#FFF",
    width: "80%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5
  },

  touchableOpacity:{
    height: 50, 
    width: 50, 
    justifyContent: "center", 
    alignItems: "center" 
  }
});

export default styles;