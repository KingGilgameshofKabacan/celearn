export interface JukeboxTrack {
  id: string;
  title: string;
  subtitle: string;
  mood: string;
  duration: string;
  src: string;
}

export const VAULT_JUKEBOX_TRACKS: JukeboxTrack[] = [
  {
    id: 'rush-song',
    title: 'Rush Protocol (Incident Alarm)',
    subtitle: 'Vault 101 Emergency Rush & Rapid Response Theme',
    mood: 'High Adrenaline & Timed Sprint',
    duration: '2:14',
    src: '/assets/aistudio/_HQ__Fallout_Shelter_songs-_1__Rush_Song__MP3_160K__2aacf91f.mp3'
  },
  {
    id: 'wasteland-patrol',
    title: 'Wasteland Exploration & Patrol',
    subtitle: 'Wasteland Reconnaissance & Surveying Expedition',
    mood: 'Atmospheric & Deep Focus',
    duration: '2:56',
    src: '/assets/aistudio/_HQ__Fallout_Shelter_songs-_2_MP3_160K__44f5dec6.mp3'
  },
  {
    id: 'overseer-strategy',
    title: 'Overseer Strategic Command',
    subtitle: 'Subterranean Construction & Engineering Planning',
    mood: 'Methodical Problem Solving',
    duration: '2:40',
    src: '/assets/aistudio/_HQ__Fallout_Shelter_songs-_3_MP3_160K__a706a5cf.mp3'
  },
  {
    id: 'living-quarters',
    title: 'Living Quarters Harmony',
    subtitle: 'Dweller Recreation & Sheltered Bunker Peace',
    mood: 'Mellow Study & Flashcard Routine',
    duration: '2:18',
    src: '/assets/aistudio/_HQ__Fallout_Shelter_songs-_4__Living_Quarters_Music__MP3_160K__c8a0a800.mp3'
  },
  {
    id: 'radio-lounge',
    title: 'Vault-Tec Radio Lounge',
    subtitle: 'Atomic Era Big Band & Brass Swing Rhythm',
    mood: 'Upbeat Review & Energy',
    duration: '2:38',
    src: '/assets/aistudio/_HQ__Fallout_Shelter_songs-_5_MP3_160K__bd4e0b70.mp3'
  },
  {
    id: 'settlement-swing',
    title: 'Settlement Broadcast Swing',
    subtitle: 'Wasteland Dial & Pip-Boy Radio Classics',
    mood: 'Classic 1950s Swing Bounce',
    duration: '2:44',
    src: '/assets/aistudio/_HQ__Fallout_Shelter_songs-_6_MP3_160K__3bcede52.mp3'
  },
  {
    id: 'enclave-america',
    title: 'America',
    subtitle: 'Enclave Radio · Fallout 3 Soundtrack',
    mood: 'Patriotic Brass & Ceremonial Focus',
    duration: '1:07',
    src: '/assets/aistudio/Fallout_3_Soundtrack_-_America_MP3_160K__45880cda.mp3'
  },
  {
    id: 'enclave-battle-hymn',
    title: 'Battle Hymn of the Republic',
    subtitle: 'Enclave Radio · Fallout 3 Soundtrack',
    mood: 'High-Morale Board Exam March',
    duration: '0:31',
    src: '/assets/aistudio/Fallout_3_Soundtrack_-_Battle_Hymn_of_the_Republic_MP3_160K__2f411496.mp3'
  },
  {
    id: 'enclave-dixie',
    title: 'Dixie',
    subtitle: 'Enclave Radio · Fallout 3 Soundtrack',
    mood: 'Vintage Fife & Drum Tempo',
    duration: '0:48',
    src: '/assets/aistudio/Fallout_3_Soundtrack_-_Dixie_MP3_160K__e4769944.mp3'
  },
  {
    id: 'enclave-halls-of-montezuma',
    title: 'Halls of Montezuma',
    subtitle: 'Enclave Radio · Fallout 3 Soundtrack',
    mood: 'Disciplined Drill Cadence',
    duration: '0:42',
    src: '/assets/aistudio/Fallout_3_Soundtrack_-_Halls_of_Montezuma_MP3_160K__28660e1c.mp3'
  },
  {
    id: 'enclave-hail-columbia',
    title: 'Hail, Columbia',
    subtitle: 'Enclave Radio · Fallout 3 Soundtrack',
    mood: 'Steady Presidential Broadcast',
    duration: '1:09',
    src: '/assets/aistudio/Fallout_3_Soundtrack_-_Hail_Columbia_MP3_160K__5f56ef1a.mp3'
  },
  {
    id: 'enclave-stars-and-stripes',
    title: 'Stars and Stripes Forever',
    subtitle: 'Enclave Radio · Fallout 3 Soundtrack',
    mood: 'Energetic Sprint March',
    duration: '1:21',
    src: '/assets/aistudio/Fallout_3_Soundtrack_-_Stars_and_Stripes_Forever_MP3_160K__a34306a8.mp3'
  },
  {
    id: 'enclave-washington-post',
    title: 'The Washington Post',
    subtitle: 'Enclave Radio · Fallout 3 Soundtrack',
    mood: 'Upbeat Review Cadence',
    duration: '0:56',
    src: '/assets/aistudio/Fallout_3_Soundtrack_-_The_Washington_Post_MP3_160K__1493670f.mp3'
  },
  {
    id: 'enclave-yankee-doodle',
    title: 'Yankee Doodle',
    subtitle: 'Enclave Radio · Fallout 3 Soundtrack',
    mood: 'Crisp Fife & Drum March',
    duration: '1:13',
    src: '/assets/aistudio/Fallout_3_Soundtrack_-_Yankee_Doodle_MP3_160K__f5a23cfe.mp3'
  },
  {
    id: 'gnr-wonderful-guy',
    title: 'A Wonderful Guy',
    subtitle: 'Galaxy News Radio · Fallout 3 Soundtrack',
    mood: 'Cheerful Golden Age Showtune',
    duration: '1:53',
    src: '/assets/aistudio/Fallout_3_Soundtrack_-_A_Wonderful_Guy_MP3_160K__536c7bec.mp3'
  },
  {
    id: 'gnr-anything-goes',
    title: 'Anything Goes',
    subtitle: 'Galaxy News Radio · Fallout 3 Soundtrack',
    mood: 'Upbeat Big Band Swing',
    duration: '3:07',
    src: '/assets/aistudio/Fallout_3_Soundtrack_-_Anything_Goes_MP3_160K__bf5601cc.mp3'
  },
  {
    id: 'gnr-boogie-man',
    title: 'Boogie Man',
    subtitle: 'Galaxy News Radio · Fallout 3 Soundtrack',
    mood: 'Fast Clarinet & Brass Groove',
    duration: '2:22',
    src: '/assets/aistudio/Fallout_3_Soundtrack_-_Boogie_Man_MP3_160K__be39dfc7.mp3'
  },
  {
    id: 'gnr-dear-hearts',
    title: 'Dear Hearts and Gentle People',
    subtitle: 'Galaxy News Radio · Fallout 3 Soundtrack',
    mood: 'Warm Nostalgic Chorus',
    duration: '2:10',
    src: '/assets/aistudio/Fallout_3_Soundtrack_-_Dear_Hearts_and_Gentle_People_MP3_160K__975025c0.mp3'
  },
  {
    id: 'gnr-easy-living',
    title: 'Easy Living',
    subtitle: 'Galaxy News Radio · Fallout 3 Soundtrack',
    mood: 'Late-Night Smooth Jazz Study',
    duration: '3:03',
    src: '/assets/aistudio/Fallout_3_Soundtrack_-_Easy_Living_MP3_160K__7ab90408.mp3'
  },
  {
    id: 'gnr-tickled-pink',
    title: "I'm Tickled Pink",
    subtitle: 'Galaxy News Radio · Fallout 3 Soundtrack',
    mood: 'Lighthearted Barbershop Harmony',
    duration: '1:50',
    src: '/assets/aistudio/Fallout_3_Soundtrack_-_Im_Tickled_Pink_MP3_160K__93e620d6.mp3'
  },
  {
    id: 'gnr-happy-times',
    title: 'Happy Times',
    subtitle: 'Galaxy News Radio · Fallout 3 Soundtrack',
    mood: 'Calm Retro Crooner Focus',
    duration: '2:42',
    src: '/assets/aistudio/Fallout_3_Soundtrack_-_Happy_Times_MP3_160K__40384c46.mp3'
  },
  {
    id: 'gnr-fox-boogie',
    title: 'Fox Boogie',
    subtitle: 'Galaxy News Radio · Fallout 3 Soundtrack',
    mood: 'Crisp Piano & Rhythm Groove',
    duration: '3:15',
    src: '/assets/aistudio/Fallout_3_Soundtrack_-_Fox_Boggie_MP3_160K__ecfb0e54.mp3'
  },
  {
    id: 'gnr-butcher-pete',
    title: 'Butcher Pete',
    subtitle: 'Galaxy News Radio · Fallout 3 Soundtrack',
    mood: 'High-Energy Jump Blues Sprint',
    duration: '5:08',
    src: '/assets/aistudio/Fallout_3_Soundtrack_-_Butcher_Pete_MP3_160K__08026a22.mp3'
  },
  {
    id: 'gnr-set-world-on-fire',
    title: "I Don't Want to Set the World on Fire",
    subtitle: 'Galaxy News Radio · Fallout 3 Soundtrack',
    mood: 'Iconic Wasteland Slow Ballad',
    duration: '3:05',
    src: '/assets/aistudio/Fallout_3_Soundtrack_-_I_dont_want_to_set_the_World_on_Fire_MP3_160K__def38cb8.mp3'
  },
  {
    id: 'gnr-into-each-life',
    title: 'Into Each Life Some Rain Must Fall',
    subtitle: 'Galaxy News Radio · Fallout 3 Soundtrack',
    mood: 'Warm Vocal & Steady Review',
    duration: '1:58',
    src: '/assets/aistudio/Fallout_3_Soundtrack_-_Into_Each_Life_Some_Rain_Must_Fall_MP3_160K__0ba5b20f.mp3'
  },
  {
    id: 'gnr-jolly-days',
    title: 'Jolly Days',
    subtitle: 'Galaxy News Radio · Fallout 3 Soundtrack',
    mood: 'Cheerful Instrumental Breeze',
    duration: '1:38',
    src: '/assets/aistudio/Fallout_3_Soundtrack_-_Jolly_Days_MP3_160K__a8d6d60c.mp3'
  },
  {
    id: 'gnr-way-back-home',
    title: 'Way Back Home',
    subtitle: 'Galaxy News Radio · Fallout 3 Soundtrack',
    mood: 'Nostalgic Big Band Chorus',
    duration: '2:51',
    src: '/assets/aistudio/Fallout_3_Soundtrack_-_Way_Back_Home_MP3_160K__b1006675.mp3'
  },
  {
    id: 'gnr-swing-doors',
    title: 'Swing Doors',
    subtitle: 'Galaxy News Radio · Fallout 3 Soundtrack',
    mood: 'Upbeat Lounge Rhythm',
    duration: '2:58',
    src: '/assets/aistudio/Fallout_3_Soundtrack_-_Swing_Doors_MP3_160K__4a33af37.mp3'
  },
  {
    id: 'gnr-rhythm-for-you',
    title: 'Rhythm for You',
    subtitle: 'Galaxy News Radio · Fallout 3 Soundtrack',
    mood: 'Smooth Jazz & Brush Drums',
    duration: '3:00',
    src: '/assets/aistudio/Fallout_3_Soundtrack_-_Rhythm_for_You_MP3_160K__d9e4959a.mp3'
  },
  {
    id: 'gnr-mighty-mighty-man',
    title: 'Mighty, Mighty Man',
    subtitle: 'Galaxy News Radio · Fallout 3 Soundtrack',
    mood: 'High-Energy Jump Blues Boost',
    duration: '2:34',
    src: '/assets/aistudio/Fallout_3_Soundtrack_-_Mighty_Mighty_Man_MP3_160K__c90b0bfc.mp3'
  },
  {
    id: 'gnr-maybe',
    title: 'Maybe',
    subtitle: 'Galaxy News Radio · Fallout 3 Soundtrack',
    mood: 'Classic Ink Spots Study Ballad',
    duration: '2:51',
    src: '/assets/aistudio/Fallout_3_Soundtrack_-_Maybe_MP3_160K__c2988554.mp3'
  },
  {
    id: 'gnr-jazzy-interlude',
    title: 'Jazzy Interlude',
    subtitle: 'Galaxy News Radio · Fallout 3 Soundtrack',
    mood: 'Crisp Brass & Vibraphone Focus',
    duration: '2:50',
    src: '/assets/aistudio/Fallout_3_Soundtrack_-_Jazzy_Interlude_MP3_160K__83cc1ea9.mp3'
  },
  {
    id: 'gnr-lets-go-sunning',
    title: "Let's Go Sunning",
    subtitle: 'Galaxy News Radio · Fallout 3 Soundtrack',
    mood: 'Bright Mid-Century Optimism',
    duration: '1:42',
    src: '/assets/aistudio/Fallout_3_Soundtrack_-_Lets_Go_Sunning_MP3_160K__7150638e.mp3'
  }
];
