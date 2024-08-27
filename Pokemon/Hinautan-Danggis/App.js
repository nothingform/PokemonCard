import { StyleSheet, SafeAreaView, Platform, ScrollView } from 'react-native';
import PokemonCard from './components/PokemonCard';

export default function App() {

  const charmanderData = {
    name: 'Charmander',
    image: require('./assets/Charmander.png'),
    type: 'Fire',
    hp: 39,
    moves: ['Scratch', 'Ember', 'Gworl', 'Leer'],
    weaknesses: ['Water', 'Rock'],
  };
   const squirtleData = {
    name: 'Squirtle',
    image: require('./assets/Squirtle.png'),
    type: 'Water',
    hp: 44,
    moves: ['Tackle', 'Water Gun', 'Tail Whip', 'Withdraw'],
    weaknesses: ['Electric', 'Grass'],
  };
  const bulbasaurData = {
    name: 'Bulbasaur',
    image: require('./assets/Bulbasaur.png'),
    type: 'Grass',
    hp: 45,
    moves: ['Tackle', 'Vine Whip', 'Gworl', 'Leech Seed'],
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psythic'],
  };
   const pikachuData = {
    name: 'Pikachu',
    image: require('./assets/Pikachu.png'),
    type: 'Electric',
    hp: 35,
    moves: ['Quick Attack', 'Thunderbolt', 'Tail Whip', 'Growl'],
    weaknesses: ['Ground'],
  };
     const eeveeData = {
    name: 'Eevee',
    image: require('./assets/Eevee.png'),
    type: 'Electric',
    hp: 55,
    moves: ['Gnaw', 'Vee-Search', 'Tail Whip', 'Tackle'],
    weaknesses: ['Ground'],
  };
    const caterpieData = {
    name: 'Caterpie',
    image: require('./assets/Caterpie.png'),
    type: 'Grass',
    hp: 45,
    moves: ['Bug Bite', 'Adaptive Evolution', 'String Shot'],
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psythic'],
  };
    const blastoiseData = {
    name: 'Blastoise',
    image: require('./assets/Blastoise.png'),
    type: 'Water',
    hp: 40,
    moves: ['Waterlog', 'Water Gun', 'Hydro Pump'],
    weaknesses: ['Electric', 'Grass'],
  };
    const  sylveonData = {
    name: 'Sylveon',
    image: require('./assets/Sylveon.png'),
    type: 'Grass',
    hp: 40,
    moves: ['Magic Shot', 'Echoed Voice', 'Moonblast'],
    weaknesses: ['Ground'],
  };
    const psyductData = {
    name: 'Psyduct',
    image: require('./assets/Psyduct.png'),
    type: 'Water',
    hp: 30,
    moves: ['Headache', 'Confusion Wave', 'Rain Splash'],
    weaknesses: ['Electric', 'Grass'],
  };
    const piplupData = {
    name: 'Piplup',
    image: require('./assets/Piplup.png'),
    type: 'Water',
    hp: 60,
    moves: ['Splatter', 'Wave Splash', 'Bubble'],
    weaknesses: ['Electric', 'Grass'],
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmanderData}/>
        <PokemonCard {...squirtleData}/>
        <PokemonCard {...bulbasaurData}/>
        <PokemonCard {...pikachuData}/>
        <PokemonCard {...caterpieData}/>
        <PokemonCard {...piplupData}/>
        <PokemonCard {...eeveeData}/>
        <PokemonCard {...psyductData}/>
        <PokemonCard {...sylveonData}/>
        <PokemonCard {...blastoiseData}/>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: Platform.OS === 'android' ? 25 : 0
  },
});
