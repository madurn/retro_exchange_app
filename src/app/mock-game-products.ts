import { Game } from './game-product';
import { GameConsole } from './game-product';

export const GENESISGAMES: Game[] = [
  {
    id: 99823,
    name: 'Sonic the Hedgehog 2',
    price: 19.99,
    console: 'Sega Genesis',
    year: 1992,
    condition: 'USED-GREAT',
    imageLocation: "assets/img/sonic_2.png"
  },
  {
    id: 65932,
    name: 'Phantasy Star IV',
    price: 99.99,
    console: 'Sega Genesis',
    year: 1995,
    condition: 'USED-GREAT',
    imageLocation: "assets/img/phantasy_star_iv.jpg"
  },
  {
    id: 10002,
    name: 'Streets of Rage 2',
    price: 64.99,
    console: 'Sega Genesis',
    year: 1994,
    condition: 'USED-EXCELLENT',
    imageLocation: "assets/img/streets_of_rage_2.jpg"
  },
  {
    id: 83920,
    name: 'Gunstar Heroes',
    price: 799.99,
    console: 'Sega Genesis',
    year: 1995,
    condition: 'NEW-SEALED',
    imageLocation: "assets/img/gunstar_heroes.jpg"
  }
]

export const SNESGAMES: Game[] = [
  {
    id: 27445,
    name: 'Super Mario World',
    price: 19.99,
    console: 'Super Nintendo',
    year: 1990,
    condition: 'USED-GOOD',
    imageLocation: "assets/img/super_mario_world.png"
  },
  {
    id: 35678,
    name: 'The Legend of Zelda: A Link to the Past',
    price: 44.99,
    console: 'Super Nintendo',
    year: 1992,
    condition: 'USED-GREAT',
    imageLocation: "assets/img/a_link_to_the_past.jpg"
  },
  {
    id: 65992,
    name: 'Super Metroid',
    price: 64.99,
    console: 'Super Nintendo',
    year: 1994,
    condition: 'USED-EXCELLENT',
    imageLocation: "assets/img/super_metroid.jpg"
  },
  {
    id: 34016,
    name: 'Chrono Trigger',
    price: 799.99,
    console: 'Super Nintendo',
    year: 1995,
    condition: 'NEW-SEALED',
    imageLocation: "assets/img/chrono_trigger.jpg"
  }
]

export const SNESCONSOLES: GameConsole[] = [
  {
    id: 12987,
    name: 'Super Nintendo',
    price: 179.99,
    condition: 'USED-GREAT',
    imageLocation: "assets/img/snes_console.jpg"
  },
  {
    id: 17333,
    name: 'Super Nintendo',
    price: 699.99,
    condition: 'NEW-SEALED',
    imageLocation: "assets/img/snes_console.jpg"
  },
  {
    id: 21034,
    name: 'Super Nintendo',
    price: 179.99,
    condition: 'USED-EXCELLENT',
    imageLocation: "assets/img/snes_console.jpg"
  },
  {
    id: 9872,
    name: 'Super Nintendo',
    price: 19.99,
    condition: 'USED-PARTS',
    imageLocation: "assets/img/snes_console.jpg"
  }
]


  export const GENESISCONSOLES: GameConsole[] = [
    {
      id: 44837,
      name: 'Sega Genesis',
      price: 39.99,
      condition: 'USED-GREAT',
      imageLocation: "assets/img/sega_genesis.jpg"
    },
    {
      id: 15633,
      name: 'Sega Genesis',
      price: 9.99,
      condition: 'USED-PARTS',
      imageLocation: "assets/img/sega_genesis.jpg"
    },
    {
      id: 78573,
      name: 'Sega Genesis',
      price: 99.99,
      condition: 'USED-EXCELLENT',
      imageLocation: "assets/img/sega_genesis.jpg"
    },
    {
      id: 5402,
      name: 'Sega Genesis',
      price: 29.99,
      condition: 'USED-GOOD',
      imageLocation: "assets/img/sega_genesis.jpg"
    }
]
