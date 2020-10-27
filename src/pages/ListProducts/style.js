import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282a36',
  },

  title: {
    color: '#f8f8f2',
    fontSize: 24,
    marginBottom: 1,
    marginTop: 30,
    paddingBottom: 18,
    marginLeft: 10,
    borderBottomWidth: 0.8,
    borderBottomColor: '#44475a'
  },

  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "#50fa7b",
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