let React = require('react');
let Text  = require('react-native').Text;
let AppRegistry = require('react-native').AppRegistry;
let View = require('react-native').View;
let Button = require('react-native').Button;

const gerarNumerosRandomicos = () =>{
  let num_ale = Math.random();
  num_ale = Math.floor(num_ale * 10);
  alert(num_ale);
}

const App = () => {
  return (
    <View>
      <Text>FELIZ 2018 MANOLO!!!!!</Text>
      <Button
        title="Gerar um número randômico"
        onPress={gerarNumerosRandomicos}
      />
    </View>
  );
};
AppRegistry.registerComponent('numrandom',() => App);