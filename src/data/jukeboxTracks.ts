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
  }
];
