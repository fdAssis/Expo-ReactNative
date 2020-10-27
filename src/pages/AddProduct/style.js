import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282a36',
  },

  title: {
    color: '#f8f8f2',
    fontSize: 24,
    marginBottom: 32,
    marginTop: 10,
    paddingBottom: 24,
    borderBottomWidth: 0.8,
    borderBottomColor: '#44475a'
  },

  label: {
    color: '#6272a4',
    fontSize: 16,
    marginBottom: 8,
  },


  input: {
    backgroundColor: '#44475a',
    borderWidth: 1.4,
    borderColor: '#44475a',
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
    color:'#f8f8f2', 
  },

  nextButton: {
    backgroundColor: '#50f76f',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 32,
  },

  listButton: {
    backgroundColor: '#6272a4',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 32,
  },

  nextButtonText: {
    fontSize: 16,
    color: '#FFF',
  }
});

export default styles;