<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import RenderData from './components/RenderData.vue'
import PlaceholderMessage from './components/PlaceholderMessage.vue'

import normalizeString from './utils/normalize.ts'

let results = [
  {
    gender: 'female',
    name: {
      title: 'Mrs',
      first: 'Florence',
      last: 'Ambrose',
    },
    location: {
      street: {
        number: 8058,
        name: 'Victoria Ave',
      },
      city: 'Maitland',
      state: 'Alberta',
      country: 'Canada',
      postcode: 'N2H 1N4',
      coordinates: {
        latitude: '-67.5597',
        longitude: '54.3519',
      },
      timezone: {
        offset: '+10:00',
        description: 'Eastern Australia, Guam, Vladivostok',
      },
    },
    email: 'florence.ambrose@example.com',
    login: {
      uuid: '709fce90-5ea6-4c67-8e40-5f2fdd7aa011',
      username: 'angryfrog956',
      password: 'dance',
      salt: '3NyXzBG3',
      md5: '0fec5edb9891ec6c2409b7487212879a',
      sha1: 'a7581bd2762e41077165a553589ea56e5744847d',
      sha256: 'f5ca788bea1edda66a8abb1ebc58480858e818129148d40fd20934d64216b062',
    },
    dob: {
      date: '1952-10-28T05:13:09.360Z',
      age: 72,
    },
    registered: {
      date: '2022-03-19T07:15:46.389Z',
      age: 2,
    },
    phone: 'V46 Q01-1055',
    cell: 'F93 X23-4111',
    id: {
      name: 'SIN',
      value: '429565500',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/83.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/83.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/83.jpg',
    },
    nat: 'CA',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Filipe de Néri',
      last: 'Martins',
    },
    location: {
      street: {
        number: 4821,
        name: 'Rua São Paulo ',
      },
      city: 'Águas Lindas de Goiás',
      state: 'Acre',
      country: 'Brazil',
      postcode: 80015,
      coordinates: {
        latitude: '-82.0487',
        longitude: '20.3122',
      },
      timezone: {
        offset: '+1:00',
        description: 'Brussels, Copenhagen, Madrid, Paris',
      },
    },
    email: 'filipedeneri.martins@example.com',
    login: {
      uuid: '83f5e347-2226-4bc9-bb4c-174f9a891083',
      username: 'organicgoose420',
      password: 'torpedo',
      salt: 'GEHM2OWV',
      md5: 'a84e04d59bc4b956d7602b766661b77f',
      sha1: '1d81b737127ff603a12d0e4a1fe161f1e91d43ab',
      sha256: 'dab7c4ba2d24e06db15b6c72b51ed9a4d7df67644b96d8fabc37815bbc3fb6d5',
    },
    dob: {
      date: '1997-12-26T22:26:33.831Z',
      age: 27,
    },
    registered: {
      date: '2003-10-27T09:52:08.175Z',
      age: 21,
    },
    phone: '(10) 4962-0605',
    cell: '(79) 4625-2849',
    id: {
      name: 'CPF',
      value: '622.231.298-74',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/9.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/9.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/9.jpg',
    },
    nat: 'BR',
  },
  {
    gender: 'female',
    name: {
      title: 'Madame',
      first: 'Amelia',
      last: 'Rey',
    },
    location: {
      street: {
        number: 7260,
        name: 'Rue Victor-Hugo',
      },
      city: 'Schwende',
      state: 'Schaffhausen',
      country: 'Switzerland',
      postcode: 4372,
      coordinates: {
        latitude: '-38.2897',
        longitude: '-135.7334',
      },
      timezone: {
        offset: '-5:00',
        description: 'Eastern Time (US & Canada), Bogota, Lima',
      },
    },
    email: 'amelia.rey@example.com',
    login: {
      uuid: '86076977-cf0c-4878-9dac-ce965f11216e',
      username: 'yellowbutterfly619',
      password: 'maker',
      salt: 'OAokKknd',
      md5: 'b5e68e0758e64b6e9f06bfc0edaf8a85',
      sha1: 'e20a7f6837ecc68bfb432bb3b03d595e35539dff',
      sha256: '683fe3368ddef95453f5d91fdd457cba03491322004c03209ba6ca524b2b3b25',
    },
    dob: {
      date: '1993-10-06T06:58:24.157Z',
      age: 31,
    },
    registered: {
      date: '2005-03-14T12:34:01.465Z',
      age: 19,
    },
    phone: '079 013 54 60',
    cell: '079 383 51 04',
    id: {
      name: 'AVS',
      value: '756.4805.6532.12',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/18.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/18.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/18.jpg',
    },
    nat: 'CH',
  },
  {
    gender: 'female',
    name: {
      title: 'Mrs',
      first: 'Maja',
      last: 'Mortensen',
    },
    location: {
      street: {
        number: 161,
        name: 'Egevej',
      },
      city: 'Sundby/Erslev',
      state: 'Syddanmark',
      country: 'Denmark',
      postcode: 28797,
      coordinates: {
        latitude: '20.2710',
        longitude: '-82.3041',
      },
      timezone: {
        offset: '+7:00',
        description: 'Bangkok, Hanoi, Jakarta',
      },
    },
    email: 'maja.mortensen@example.com',
    login: {
      uuid: '0a19bf69-483c-46ea-b346-13fec6290d84',
      username: 'angrybutterfly599',
      password: 'antonia',
      salt: 'kuoSKnV2',
      md5: '948e2ebe27af6174ee4a1734372699fe',
      sha1: 'e7fe75165750cca6592931808ed5635798807568',
      sha256: '16c3964b55d3afb27154612e1e5812a7b17bc6bc63655ad457c63f7a294aad0d',
    },
    dob: {
      date: '1958-10-27T22:33:05.598Z',
      age: 66,
    },
    registered: {
      date: '2015-04-13T17:32:43.532Z',
      age: 9,
    },
    phone: '42461294',
    cell: '59097441',
    id: {
      name: 'CPR',
      value: '271058-2415',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/91.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/91.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/91.jpg',
    },
    nat: 'DK',
  },
  {
    gender: 'female',
    name: {
      title: 'Miss',
      first: 'Pamela',
      last: 'Linke',
    },
    location: {
      street: {
        number: 9380,
        name: 'Bachstraße',
      },
      city: 'Merseburg',
      state: 'Sachsen',
      country: 'Germany',
      postcode: 19187,
      coordinates: {
        latitude: '40.6756',
        longitude: '176.9118',
      },
      timezone: {
        offset: '-10:00',
        description: 'Hawaii',
      },
    },
    email: 'pamela.linke@example.com',
    login: {
      uuid: 'c91a6329-2309-4f19-923d-5d11586b0c5d',
      username: 'brownduck611',
      password: 'stumpy',
      salt: 'hqH7lrIl',
      md5: '8dae519e0903bc306ae054553648739b',
      sha1: '8ee98543a40316fe855e4d32102d20deb699fb8c',
      sha256: '9ab1ae0780883da28a1437a4d25bacc4b1b876bd39aaf5039cf6754dfe14acaf',
    },
    dob: {
      date: '1987-07-18T15:36:37.361Z',
      age: 37,
    },
    registered: {
      date: '2008-12-06T18:55:20.428Z',
      age: 16,
    },
    phone: '0590-1714342',
    cell: '0170-0449026',
    id: {
      name: 'SVNR',
      value: '72 180787 L 515',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/28.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/28.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/28.jpg',
    },
    nat: 'DE',
  },
  {
    gender: 'female',
    name: {
      title: 'Mrs',
      first: 'Dörte',
      last: 'Andres',
    },
    location: {
      street: {
        number: 5942,
        name: 'Danziger Straße',
      },
      city: 'Lorch',
      state: 'Mecklenburg-Vorpommern',
      country: 'Germany',
      postcode: 41044,
      coordinates: {
        latitude: '-26.4852',
        longitude: '32.0387',
      },
      timezone: {
        offset: '+9:30',
        description: 'Adelaide, Darwin',
      },
    },
    email: 'dorte.andres@example.com',
    login: {
      uuid: '3077d199-8532-444c-989d-02dd3253b93c',
      username: 'heavywolf557',
      password: 'wedding',
      salt: 'mXCiXgIf',
      md5: 'f24028e30f45996b460620528446a065',
      sha1: '0c3420801212f21c8458ed780fac74a922e148cc',
      sha256: '7cd863c0196de18cb1e6980580a42669f00b0a2336a4603886ac83f2705dbce1',
    },
    dob: {
      date: '1998-07-18T17:01:30.675Z',
      age: 26,
    },
    registered: {
      date: '2019-12-19T07:57:05.705Z',
      age: 5,
    },
    phone: '0057-3414879',
    cell: '0170-5470354',
    id: {
      name: 'SVNR',
      value: '21 180798 A 520',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/88.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/88.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/88.jpg',
    },
    nat: 'DE',
  },
  {
    gender: 'female',
    name: {
      title: 'Miss',
      first: 'Esma',
      last: 'Tazegül',
    },
    location: {
      street: {
        number: 3169,
        name: 'Necatibey Cd',
      },
      city: 'Ordu',
      state: 'Muğla',
      country: 'Turkey',
      postcode: 50732,
      coordinates: {
        latitude: '65.5253',
        longitude: '-147.1381',
      },
      timezone: {
        offset: '-3:00',
        description: 'Brazil, Buenos Aires, Georgetown',
      },
    },
    email: 'esma.tazegul@example.com',
    login: {
      uuid: '0183af74-7a33-4f79-b0eb-76346383ac82',
      username: 'orangepanda114',
      password: 'amsterdam',
      salt: 't7MdD45s',
      md5: 'e0262dcfc3df4ff1edb3f6aaa1db34e6',
      sha1: '04853e3cecc071cd73991f1ee94cd1593eff2438',
      sha256: '931a33578f79481cbbb29a157a3cfc0b9f49d373f58801187fc4382377cbaa17',
    },
    dob: {
      date: '1961-09-15T18:07:15.294Z',
      age: 63,
    },
    registered: {
      date: '2016-08-23T22:17:08.118Z',
      age: 8,
    },
    phone: '(854)-769-8810',
    cell: '(174)-841-3811',
    id: {
      name: '',
      value: null,
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/7.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/7.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/7.jpg',
    },
    nat: 'TR',
  },
  {
    gender: 'female',
    name: {
      title: 'Miss',
      first: 'Josefina',
      last: 'Villa',
    },
    location: {
      street: {
        number: 8411,
        name: 'Calzada Hidalgo',
      },
      city: 'Kaua',
      state: 'Coahuila',
      country: 'Mexico',
      postcode: 28809,
      coordinates: {
        latitude: '-75.9578',
        longitude: '157.7068',
      },
      timezone: {
        offset: '-6:00',
        description: 'Central Time (US & Canada), Mexico City',
      },
    },
    email: 'josefina.villa@example.com',
    login: {
      uuid: '08c1148f-2482-4d33-9c54-8f02c3657300',
      username: 'smallostrich933',
      password: 'jayjay',
      salt: 'viFlNfVb',
      md5: '76d0c019e7383f3a1e6993fc884e59ee',
      sha1: '1e5647cd0ee2b1db703ce82c6de52290af20920c',
      sha256: 'bf8e83f0a054895c5e9b1e0397b190858c3d84af63ff2c69aac16a81533c6d32',
    },
    dob: {
      date: '1988-08-09T04:07:03.628Z',
      age: 36,
    },
    registered: {
      date: '2002-07-17T20:20:40.326Z',
      age: 22,
    },
    phone: '(622) 913 6829',
    cell: '(628) 189 9277',
    id: {
      name: 'NSS',
      value: '74 30 50 4552 1',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/77.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/77.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/77.jpg',
    },
    nat: 'MX',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Charles',
      last: 'Andersen',
    },
    location: {
      street: {
        number: 9922,
        name: 'Frederick Ave',
      },
      city: 'Trout Lake',
      state: 'Prince Edward Island',
      country: 'Canada',
      postcode: 'V9T 7K0',
      coordinates: {
        latitude: '-17.5605',
        longitude: '-14.3271',
      },
      timezone: {
        offset: '+10:00',
        description: 'Eastern Australia, Guam, Vladivostok',
      },
    },
    email: 'charles.andersen@example.com',
    login: {
      uuid: 'e14ad083-8309-4e93-8753-c72c181f7e8f',
      username: 'silverlion518',
      password: 'jonas',
      salt: 'O82gj07C',
      md5: 'ac33f75ff1648f34e61591c6a0644930',
      sha1: '53272b981535564866e6c342211cd909ec668c6c',
      sha256: 'ca0de4a00edd6a0a3a2560acb9d8af03c08cf467f5bb6fe2b3ecb0925e44525c',
    },
    dob: {
      date: '2001-01-21T16:57:37.138Z',
      age: 24,
    },
    registered: {
      date: '2002-05-07T03:51:02.789Z',
      age: 22,
    },
    phone: 'K77 N92-0467',
    cell: 'E20 L93-0490',
    id: {
      name: 'SIN',
      value: '243474954',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/69.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/69.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/69.jpg',
    },
    nat: 'CA',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Velizar',
      last: 'Šijan',
    },
    location: {
      street: {
        number: 9735,
        name: 'Nebojše Markovića',
      },
      city: 'Bač',
      state: 'Kolubara',
      country: 'Serbia',
      postcode: 30609,
      coordinates: {
        latitude: '68.3426',
        longitude: '147.6820',
      },
      timezone: {
        offset: '+3:00',
        description: 'Baghdad, Riyadh, Moscow, St. Petersburg',
      },
    },
    email: 'velizar.sijan@example.com',
    login: {
      uuid: '08b5617c-cf09-47b1-a963-00df6c3558a9',
      username: 'blackladybug657',
      password: 'payton',
      salt: 'MhQHn1H5',
      md5: '519e88a4e58ae6613fa19644ed7b1218',
      sha1: '2f1aed80eaaf325de4e0cc4449cb1893e208bb6e',
      sha256: '58e5386e4cf875eeddcac9afcdf501ae2150985557a29740b6270f2fce23357e',
    },
    dob: {
      date: '1984-07-23T09:20:50.533Z',
      age: 40,
    },
    registered: {
      date: '2013-03-01T22:44:25.191Z',
      age: 12,
    },
    phone: '025-0501-156',
    cell: '064-4977-957',
    id: {
      name: 'SID',
      value: '642692418',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/52.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/52.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/52.jpg',
    },
    nat: 'RS',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Alberto',
      last: 'Kelley',
    },
    location: {
      street: {
        number: 9930,
        name: 'Rectory Lane',
      },
      city: 'Durham',
      state: 'Dorset',
      country: 'United Kingdom',
      postcode: 'F0 4DD',
      coordinates: {
        latitude: '-8.5358',
        longitude: '-67.4428',
      },
      timezone: {
        offset: '-3:00',
        description: 'Brazil, Buenos Aires, Georgetown',
      },
    },
    email: 'alberto.kelley@example.com',
    login: {
      uuid: 'f907ee41-8b04-4b1d-87ba-fde212b6c716',
      username: 'purplepeacock710',
      password: 'homepage',
      salt: '7kEvnAP4',
      md5: '5b5cb7d7cc82370745337c271a70e5f6',
      sha1: '5608ddee237f407b06300d04fa40f4f7b7c8713c',
      sha256: 'de72e0326fa3cbb724646f6e148187a51fae4f4990e2506c6cb77993b61185fe',
    },
    dob: {
      date: '1968-08-17T23:08:12.378Z',
      age: 56,
    },
    registered: {
      date: '2010-05-25T00:27:51.683Z',
      age: 14,
    },
    phone: '015242 96451',
    cell: '07301 626591',
    id: {
      name: 'NINO',
      value: 'NZ 29 48 18 J',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/38.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/38.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/38.jpg',
    },
    nat: 'GB',
  },
  {
    gender: 'female',
    name: {
      title: 'Miss',
      first: 'Nurgül',
      last: 'Van de Laak',
    },
    location: {
      street: {
        number: 870,
        name: 'Baelschot',
      },
      city: 'Kollum',
      state: 'Drenthe',
      country: 'Netherlands',
      postcode: '0811 AC',
      coordinates: {
        latitude: '57.5286',
        longitude: '-135.9285',
      },
      timezone: {
        offset: '-7:00',
        description: 'Mountain Time (US & Canada)',
      },
    },
    email: 'nurgul.vandelaak@example.com',
    login: {
      uuid: '2ae8f03d-4633-4528-aa1c-07caec0c33e3',
      username: 'smallrabbit851',
      password: 'cinema',
      salt: 'frdnUwCw',
      md5: 'd83019c2fe04a1377a32ea1bcf747ac7',
      sha1: '0a02180d98f4d9d6d2d30eb4b41b0447d8aa16e3',
      sha256: 'a00e671bfa50b79acfd0f1e85ca35eb8f8aa520d99ff0140b1d1f7c2e0e0e8f4',
    },
    dob: {
      date: '1944-10-06T13:04:22.549Z',
      age: 80,
    },
    registered: {
      date: '2006-04-10T19:07:32.873Z',
      age: 18,
    },
    phone: '(0933) 403120',
    cell: '(06) 05955664',
    id: {
      name: 'BSN',
      value: '70874452',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/31.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/31.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/31.jpg',
    },
    nat: 'NL',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Sander',
      last: 'Petersen',
    },
    location: {
      street: {
        number: 4886,
        name: 'Rødkløvervej',
      },
      city: 'Aarhus N',
      state: 'Nordjylland',
      country: 'Denmark',
      postcode: 62658,
      coordinates: {
        latitude: '-27.9305',
        longitude: '69.1110',
      },
      timezone: {
        offset: '0:00',
        description: 'Western Europe Time, London, Lisbon, Casablanca',
      },
    },
    email: 'sander.petersen@example.com',
    login: {
      uuid: 'c3f3e2df-e4bc-4b75-8917-89321630ff7e',
      username: 'happyladybug160',
      password: 'danielle',
      salt: 'R1fct34B',
      md5: 'db13e743e9e7782573f6f8c98583f557',
      sha1: '07e00667d7a6430d6c3de59cc303130f524c4c76',
      sha256: 'a8d27bc56b2abcd255ae80d7b5e88e79807eeb46e698a0ba8b9fec531e2dfd52',
    },
    dob: {
      date: '1968-12-12T11:56:26.352Z',
      age: 56,
    },
    registered: {
      date: '2009-06-22T17:11:17.417Z',
      age: 15,
    },
    phone: '47941138',
    cell: '92654010',
    id: {
      name: 'CPR',
      value: '121268-3815',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/39.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/39.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/39.jpg',
    },
    nat: 'DK',
  },
  {
    gender: 'female',
    name: {
      title: 'Mademoiselle',
      first: 'Anita',
      last: 'Deschamps',
    },
    location: {
      street: {
        number: 7533,
        name: 'Rue Bataille',
      },
      city: 'Châtillon (Ju)',
      state: 'Genève',
      country: 'Switzerland',
      postcode: 9051,
      coordinates: {
        latitude: '36.9391',
        longitude: '-119.1732',
      },
      timezone: {
        offset: '-4:00',
        description: 'Atlantic Time (Canada), Caracas, La Paz',
      },
    },
    email: 'anita.deschamps@example.com',
    login: {
      uuid: 'afd12ff7-7c97-4f0b-acc8-f416bb2307e5',
      username: 'goldenladybug386',
      password: 'trace',
      salt: 'TNFFLIQQ',
      md5: '3e05db95660b059aedb9c37360e8f88d',
      sha1: '0efebddb2284b6e3bc36462ba61021ed8c9d7312',
      sha256: '182f06eed018f83f7a380ed723605ef5d0edaeee2042dbba45e8479f6c2775f1',
    },
    dob: {
      date: '1988-01-13T22:06:41.836Z',
      age: 37,
    },
    registered: {
      date: '2008-01-26T10:53:30.461Z',
      age: 17,
    },
    phone: '076 759 36 77',
    cell: '078 693 02 77',
    id: {
      name: 'AVS',
      value: '756.1738.3836.99',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/69.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/69.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/69.jpg',
    },
    nat: 'CH',
  },
  {
    gender: 'female',
    name: {
      title: 'Mrs',
      first: 'Heather',
      last: 'Gray',
    },
    location: {
      street: {
        number: 4791,
        name: 'Mill Road',
      },
      city: 'Hereford',
      state: 'Gloucestershire',
      country: 'United Kingdom',
      postcode: 'Z24 0ZT',
      coordinates: {
        latitude: '-79.0225',
        longitude: '-2.5879',
      },
      timezone: {
        offset: '+5:45',
        description: 'Kathmandu',
      },
    },
    email: 'heather.gray@example.com',
    login: {
      uuid: 'e027374d-7a4c-4e44-b210-dea3d437dd5b',
      username: 'brownostrich180',
      password: 'philips',
      salt: 'robdz95v',
      md5: 'bec397fd8ad425f4e65b0bd967f47c6a',
      sha1: '100e8b9175050e100fa88a2da8930ff92ea95b9d',
      sha256: 'b0761f40706d111d46fa62856828a48733c64723f66b3ed51badb917207f57b0',
    },
    dob: {
      date: '1957-02-09T04:50:30.414Z',
      age: 68,
    },
    registered: {
      date: '2010-01-07T19:42:54.545Z',
      age: 15,
    },
    phone: '0117596 947 9596',
    cell: '07506 420252',
    id: {
      name: 'NINO',
      value: 'BN 16 99 63 F',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/78.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/78.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/78.jpg',
    },
    nat: 'GB',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Ryan',
      last: 'Park',
    },
    location: {
      street: {
        number: 5031,
        name: 'Simcoe St',
      },
      city: 'Hampton',
      state: 'Northwest Territories',
      country: 'Canada',
      postcode: 'G6Y 7Y3',
      coordinates: {
        latitude: '11.6741',
        longitude: '-85.8429',
      },
      timezone: {
        offset: '-2:00',
        description: 'Mid-Atlantic',
      },
    },
    email: 'ryan.park@example.com',
    login: {
      uuid: '23dbb1e6-e8f6-4fa0-ada8-a0b1a5a8ea19',
      username: 'yellowostrich777',
      password: 'byebye',
      salt: '1qRJvQHp',
      md5: '03f577331bd597c272e89edf8ddc0c4e',
      sha1: '5a613af6b3b0d190642a786435d74d3fc545194e',
      sha256: '969a3a0393ac33f58e38a31d5405697ec0cdb97dd6161fb6cd34aa0550b03fce',
    },
    dob: {
      date: '1987-01-03T09:05:28.000Z',
      age: 38,
    },
    registered: {
      date: '2018-07-05T01:50:14.364Z',
      age: 6,
    },
    phone: 'K72 N40-2724',
    cell: 'D20 L21-0988',
    id: {
      name: 'SIN',
      value: '094791977',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/19.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/19.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/19.jpg',
    },
    nat: 'CA',
  },
  {
    gender: 'female',
    name: {
      title: 'Miss',
      first: 'Diane',
      last: 'Sullivan',
    },
    location: {
      street: {
        number: 4715,
        name: 'Park Avenue',
      },
      city: 'Chichester',
      state: 'Kent',
      country: 'United Kingdom',
      postcode: 'GE3 6RH',
      coordinates: {
        latitude: '-88.0157',
        longitude: '-37.1026',
      },
      timezone: {
        offset: '+8:00',
        description: 'Beijing, Perth, Singapore, Hong Kong',
      },
    },
    email: 'diane.sullivan@example.com',
    login: {
      uuid: '3fdfa727-9120-4ca7-8709-4d4fd303756c',
      username: 'purplecat405',
      password: 'female',
      salt: 'AFOSs6PY',
      md5: '2edca9f0147c19e7c312b73304b44c75',
      sha1: '7f5a4c7186eaf6ec4afc43c8f8a27ae101b76012',
      sha256: '9f256a763f1d55e583168568c5f6733342df966f013bc810a3089e90c5a2a359',
    },
    dob: {
      date: '1967-05-07T20:08:06.472Z',
      age: 57,
    },
    registered: {
      date: '2020-12-26T04:33:56.611Z',
      age: 4,
    },
    phone: '016977 02877',
    cell: '07842 789776',
    id: {
      name: 'NINO',
      value: 'RM 00 57 03 D',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/45.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/45.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/45.jpg',
    },
    nat: 'GB',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Onur',
      last: 'Önür',
    },
    location: {
      street: {
        number: 3992,
        name: 'Doktorlar Cd',
      },
      city: 'Yozgat',
      state: 'Çanakkale',
      country: 'Turkey',
      postcode: 29893,
      coordinates: {
        latitude: '-3.8476',
        longitude: '163.1806',
      },
      timezone: {
        offset: '-1:00',
        description: 'Azores, Cape Verde Islands',
      },
    },
    email: 'onur.onur@example.com',
    login: {
      uuid: '87decb61-d6da-48f9-823a-1a83d8ea279b',
      username: 'happylion672',
      password: 'canyon',
      salt: 'fVrHAy1O',
      md5: 'df649c1595d9b33dbe03704bc8a5bd3b',
      sha1: 'd4e895288f158d05ee9b1959c8ed78a00b5912d2',
      sha256: 'c65290fc7decc90633abd086b6ff0d91b8580678115c9ad361826e79f29556fc',
    },
    dob: {
      date: '1996-12-15T19:20:57.877Z',
      age: 28,
    },
    registered: {
      date: '2018-02-09T09:49:11.864Z',
      age: 7,
    },
    phone: '(220)-705-3131',
    cell: '(555)-802-2906',
    id: {
      name: '',
      value: null,
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/55.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/55.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/55.jpg',
    },
    nat: 'TR',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Mirko',
      last: 'Welzel',
    },
    location: {
      street: {
        number: 2105,
        name: 'Fasanenweg',
      },
      city: 'Kreuztal',
      state: 'Berlin',
      country: 'Germany',
      postcode: 66217,
      coordinates: {
        latitude: '7.6793',
        longitude: '8.8803',
      },
      timezone: {
        offset: '+4:00',
        description: 'Abu Dhabi, Muscat, Baku, Tbilisi',
      },
    },
    email: 'mirko.welzel@example.com',
    login: {
      uuid: '69080219-b76e-4cce-9ba6-3af473d70075',
      username: 'whiteladybug501',
      password: 'favorite6',
      salt: 'qbM20Fng',
      md5: '6e49af1a9ef61523a3af8c42832091e7',
      sha1: '8d14d2dbd437347a98d294c6a676a429821e0000',
      sha256: '37f251840e2f58da8c3290427323f2fe3d436d59675debd53bb0ad9047b78974',
    },
    dob: {
      date: '1966-10-21T01:43:10.136Z',
      age: 58,
    },
    registered: {
      date: '2016-01-05T03:10:56.978Z',
      age: 9,
    },
    phone: '0476-7067451',
    cell: '0176-0271065',
    id: {
      name: 'SVNR',
      value: '18 201066 W 372',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/30.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/30.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/30.jpg',
    },
    nat: 'DE',
  },
  {
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Aiden',
      last: 'Ambrose',
    },
    location: {
      street: {
        number: 9001,
        name: 'Oak St',
      },
      city: 'Lumsden',
      state: 'Prince Edward Island',
      country: 'Canada',
      postcode: 'N2C 9A0',
      coordinates: {
        latitude: '88.7457',
        longitude: '75.0145',
      },
      timezone: {
        offset: '0:00',
        description: 'Western Europe Time, London, Lisbon, Casablanca',
      },
    },
    email: 'aiden.ambrose@example.com',
    login: {
      uuid: '440f2753-6ae7-4aba-a662-45c7170b46c6',
      username: 'redzebra450',
      password: 'drifter',
      salt: 'qIqjO99t',
      md5: 'f43cca6323a6d7d2cece2d29b1ec5d16',
      sha1: '2cee19433dc606ef93bbe15dd6351aab805f8359',
      sha256: 'd4970b96fb329f4ad46202b528c265264d06a65b662d498f491f6c11f09ed92c',
    },
    dob: {
      date: '1948-07-21T03:42:55.479Z',
      age: 76,
    },
    registered: {
      date: '2002-11-10T09:29:27.472Z',
      age: 22,
    },
    phone: 'X65 E44-7032',
    cell: 'K27 H32-9900',
    id: {
      name: 'SIN',
      value: '705239242',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/26.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/26.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/26.jpg',
    },
    nat: 'CA',
  },
]

// const results = ref([]);
const message = ref("Appuyez sur 'Fecth Users' pour avoir la liste des utilisateurs")
const searchValue = ref('')
const modifiedResults = ref([])

const displayColumns = {
  Photo: 'picture.thumbnail',
  Nom: ['name.first', 'name.last'],
  Email: 'email',
  Tel: 'phone',
  Age: 'dob.age',
  Genre: 'gender',
}

async function fetchUsers() {
  try {
    const response = await fetch('https://randomuser.me/api/?results=20')
    const data = await response.json()
    results.value = [...results.value, ...data.results]

    // renderUsers(modifiedUsers());

    message.value = ''

    // totalLength.innerText = results.length;
  } catch (error) {
    console.error('Error fetching users:', error)
  }
}

function filterUsers(data, gender) {
  return gender === 'all' ? data : data.filter((user) => user.gender === gender)
}

function sortUsers(data, ageOrder) {
  if (ageOrder === 'no') {
    return data
  }
  return data.toSorted((a, b) =>
    ageOrder === 'desc' ? a.dob.age - b.dob.age : b.dob.age - a.dob.age,
  )
}

// convert search input string into an array of regex
function getSearchFilterArray(searchInput) {
  let textArray = normalizeString(searchInput).split(' ')
  return textArray.map((text) => new RegExp(String.raw`^${text}`))
}


function searchUsers(data, searchInput) {
  searchValue.value = searchInput
  // console.log(searchInput)
      if (!searchInput || searchInput.trim() === "") {
        modifiedResults.value = data;
      }

      let searchFilterArray = getSearchFilterArray(searchInput);

      modifiedResults.value = data.filter(user => {
        return searchFilterArray.every(re => {
          const firstName = normalizeString(user.name.first);
          const lastName = normalizeString(user.name.last);
          return firstName.match(re) || lastName.match(re);
        });
      });
      // return data.filter(user => {
      //   return searchFilterArray.every(re => {
      //     const firstName = normalizeString(user.name.first);
      //     const lastName = normalizeString(user.name.last);
      //     return firstName.match(re) || lastName.match(re);
      //   });
      // });
    }
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div> -->
    <h1>Users list</h1>
    <div class="filter-bar">
      <button id="fetch-users" @click="fetchUsers">Fetch Users</button>
      <!-- <div>
        <label for="gender">Filtrer par genre</label>
        <select name="gender" id="gender" style="width: 200px" class="filter">
          <option value="all">Tout afficher</option>
          <option value="male">Hommes</option>
          <option value="female">Femmes</option>
        </select>
      </div>
      <div>
        <label for="age">Tri par âge</label>
        <select name="age" id="age" style="width: 200px" class="filter">
          <option value="no">Pas de tri</option>
          <option value="desc">Croisssant</option>
          <option value="asc">Décroisssant</option>
        </select>
      </div> -->
      <div>
        <label for="search">Rechercher</label>
        <input type="text" class="filter" :value="searchValue" @input="event => searchUsers(results, event.target.value)" />
      </div>
      <!-- <div>
        <p>
          <span id="current-length">0</span> sur <span id="total-length">0</span> utilisateurs
          affichés
        </p>
      </div> -->
    </div>
  </header>

  <main>
    <table id="tbl-users">
      <thead>
        <tr>
          <th v-for="(value, key) in displayColumns" :key="key">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <RenderData :data="modifiedResults" :displayColumn="displayColumns" />
      </tbody>
    </table>
    <PlaceholderMessage v-if="message" :msg="message" type="error" />
  </main>
</template>

<style scoped>
.filter-bar {
  display: flex;
  gap: 50px;
  align-items: center;
}

.filter {
  width: 200px;
}
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
