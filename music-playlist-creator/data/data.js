const playlists = [
  { id: 1,
    title: "Summer Vibes",
    author: "John Doe",
    art: `https://picsum.photos/200/200?id=237`,
    songs: [
      {
        title: "Happy Song",
        duration: "3:45",
        album: "Best Album Ever",
        artist: "Favorite Artist",
        coverArt: `https://picsum.photos/200/200?id=823`
      },
      {
        title: "Sad Song",
        duration: "4:20",
        album: "Another Great Album",
        artist: "New Artist",
        coverArt: `https://picsum.photos/200/200?id=456`
      },
      {
        title: "Rise and Shine",
        duration: "3:40",
        album: "Morning Motivation",
        artist: "The Wake-Up Call",
        coverArt: `https://picsum.photos/200/200?id=222`
      },
      {
        title: "Moonlight Sonata",
        duration: "5:30",
        album: "Classical Favorites",
        artist: "The Moonlight Orchestra",
        coverArt: `https://picsum.photos/200/200?id=333`
      },
      {
        title: "Golden Hour",
        duration: "4:05",
        album: "Summer Radiance",
        artist: "Chillwave Collective",
        coverArt: `https://picsum.photos/200/200?id=841`
      },
      {
        title: "Tropical Rain",
        duration: "3:50",
        album: "Island Dreams",
        artist: "Breeze",
        coverArt: `https://picsum.photos/200/200?id=812`
      }
    ]
  },
  { id: 2,
    title: "Workout Mix",
    author: "Jane Smith",
    art: `https://picsum.photos/200/200?id=100`,
    songs: [
      {
        title: "Energizing Track",
        duration: "5:00",
        album: "Fitness Frenzy",
        artist: "DJ Energy",
        coverArt: `https://picsum.photos/200/200?id=654`
      },
      {
        title: "Motivational Anthem",
        duration: "4:50",
        album: "Sweat and Tears",
        artist: "The Motivator",
        coverArt: `https://picsum.photos/200/200?id=219`
      },
      {
        title: "Whispers in the Dark",
        duration: "5:00",
        album: "Midnight Confessions",
        artist: "The Shadow Dancers",
        coverArt: `https://picsum.photos/200/200?id=987`
      },
      {
        title: "Sunset Serenade",
        duration: "4:20",
        album: "Romantic Ballads",
        artist: "The Sunset Serenaders",
        coverArt: `https://picsum.photos/200/200?id=111`
      },
      {
        title: "Push It",
        duration: "4:00",
        album: "Full Power",
        artist: "GymBeats",
        coverArt: `https://picsum.photos/200/200?id=888`
      },
      {
        title: "Limit Break",
        duration: "3:55",
        album: "Beast Mode",
        artist: "Crank Up",
        coverArt: `https://picsum.photos/200/200?id=777`
      }
    ]
  },
  { id: 3,
    title: "Relaxing Tunes",
    author: "Bob Johnson",
    art: `https://picsum.photos/200/200?id=500`,
    songs: [
      {
        title: "Calm Melody",
        duration: "6:10",
        album: "Peaceful Moments",
        artist: "Soothing Sounds",
        coverArt: `https://picsum.photos/200/200?id=982`
      },
      {
        title: "Nature's Lullaby",
        duration: "5:40",
        album: "Tranquil Tracks",
        artist: "Mother Nature",
        coverArt: `https://picsum.photos/200/200?id=117`
      },
      {
        title: "Starlight Serenade",
        duration: "4:30",
        album: "Starry Night",
        artist: "The Starlight Serenaders",
        coverArt: `https://picsum.photos/200/200?id=888`
      },
      {
        title: "Wildflower Soul",
        duration: "3:50",
        album: "Free Spirit",
        artist: "The Wildflowers",
        coverArt: `https://picsum.photos/200/200?id=999`
      },
      {
        title: "Ocean Breeze",
        duration: "4:45",
        album: "Deep Blue Calm",
        artist: "Sea Notes",
        coverArt: `https://picsum.photos/200/200?id=112`
      },
      {
        title: "Gentle Rain",
        duration: "5:05",
        album: "Raindrop Reflections",
        artist: "Drift",
        coverArt: `https://picsum.photos/200/200?id=113`
      }
    ]
  },
  { id: 4,
    title: "Electronic Dreams",
    author: "Emily Lee",
    art: `https://picsum.photos/200/200?id=620`,
    songs: [
      {
        title: "Synthetic Symphony",
        duration: "5:20",
        album: "Digital Odyssey",
        artist: "Electric Eclipse",
        coverArt: `https://picsum.photos/200/200?id=351`
      },
      {
        title: "Techno Trance",
        duration: "6:00",
        album: "Cybernetic Sounds",
        artist: "Neon Nexus",
        coverArt: `https://picsum.photos/200/200?id=270`
      },
      {
        title: "Binary Flow",
        duration: "4:45",
        album: "Data Dance",
        artist: "Circuit Breakers",
        coverArt: `https://picsum.photos/200/200?id=320`
      },
      {
        title: "Midnight Upload",
        duration: "5:10",
        album: "Night Drive",
        artist: "Codewave",
        coverArt: `https://picsum.photos/200/200?id=321`
      },
      {
        title: "Dream Circuit",
        duration: "4:30",
        album: "Dream Core",
        artist: "Sonic Pulse",
        coverArt: `https://picsum.photos/200/200?id=322`
      }
    ]
  },
  { id: 5,
    title: "Retro Revival",
    author: "Michael Brown",
    art: `https://picsum.photos/200/200?id=480`,
    songs: [
      {
        title: "Funky Town",
        duration: "4:10",
        album: "Vintage Vibes",
        artist: "The Groove Masters",
        coverArt: `https://picsum.photos/200/200?id=931`
      },
      {
        title: "Disco Inferno",
        duration: "5:50",
        album: "Stayin' Alive",
        artist: "Funky Fire",
        coverArt: `https://picsum.photos/200/200?id=118`
      },
      {
        title: "Neon Lights",
        duration: "4:00",
        album: "Electric 80s",
        artist: "Retro Runners",
        coverArt: `https://picsum.photos/200/200?id=420`
      },
      {
        title: "Boogie Nights",
        duration: "4:35",
        album: "Saturday Soul",
        artist: "Boogie Brothers",
        coverArt: `https://picsum.photos/200/200?id=421`
      },
      {
        title: "Cassette Love",
        duration: "3:55",
        album: "Analog Romance",
        artist: "Mixtape Memories",
        coverArt: `https://picsum.photos/200/200?id=422`
      }
    ]
  },
  { id: 6,
    title: "Acoustic Sessions",
    author: "Sarah Taylor",
    art: `https://picsum.photos/200/200?id=750`,
    songs: [
      {
        title: "Whiskey and Worn-Out Dreams",
        duration: "4:40",
        album: "Unplugged Emotions",
        artist: "The Acoustic Wanderer",
        coverArt: `https://picsum.photos/200/200?id=422`
      },
      {
        title: "Moonlight Serenade",
        duration: "5:30",
        album: "Lullabies and Laments",
        artist: "Midnight Melodies",
        coverArt: `https://picsum.photos/200/200?id=639`
      },
      {
        title: "Strum and Soul",
        duration: "4:15",
        album: "Bare Strings",
        artist: "Harmony Haze",
        coverArt: `https://picsum.photos/200/200?id=331`
      },
      {
        title: "Open Road",
        duration: "3:55",
        album: "Traveler’s Songbook",
        artist: "The Nomads",
        coverArt: `https://picsum.photos/200/200?id=332`
      }
    ]
  },
  { id: 7,
    title: "Indie Chillout",
    author: "Lily Harper",
    art: `https://picsum.photos/200/200?id=777`,
    songs: [
      {
        title: "Lazy Afternoon",
        duration: "4:05",
        album: "Weekend Vibes",
        artist: "The Soft Tones",
        coverArt: `https://picsum.photos/200/200?id=501`
      },
      {
        title: "Fading Lights",
        duration: "3:50",
        album: "City Dreams",
        artist: "Echo Harbor",
        coverArt: `https://picsum.photos/200/200?id=502`
      },
      {
        title: "Golden Days",
        duration: "4:30",
        album: "Sunset Songs",
        artist: "Summer Hearts",
        coverArt: `https://picsum.photos/200/200?id=503`
      },
      {
        title: "Breezy Roads",
        duration: "3:40",
        album: "Travel Tales",
        artist: "Wanderlust",
        coverArt: `https://picsum.photos/200/200?id=504`
      },
      {
        title: "Quiet Moments",
        duration: "5:10",
        album: "Peace Within",
        artist: "Soft Whispers",
        coverArt: `https://picsum.photos/200/200?id=505`
      }
    ]
  },
  { id: 8,
    title: "Soulful R&B",
    author: "Tina Martinez",
    art: `https://picsum.photos/200/200?id=999`,
    songs: [
      {
        title: "Midnight Whisper",
        duration: "4:45",
        album: "Heartbeats",
        artist: "Lush Grooves",
        coverArt: `https://picsum.photos/200/200?id=701`
      },
      {
        title: "Smooth Talk",
        duration: "5:10",
        album: "Late Night Vibes",
        artist: "Velvet Voices",
        coverArt: `https://picsum.photos/200/200?id=702`
      },
      {
        title: "Golden Touch",
        duration: "4:30",
        album: "Soul Sessions",
        artist: "The Rhythm Makers",
        coverArt: `https://picsum.photos/200/200?id=703`
      },
      {
        title: "Heart on Fire",
        duration: "5:00",
        album: "Passion Play",
        artist: "Soul Harmony",
        coverArt: `https://picsum.photos/200/200?id=704`
      },
      {
        title: "Echoes of Love",
        duration: "4:55",
        album: "Timeless",
        artist: "The Serenaders",
        coverArt: `https://picsum.photos/200/200?id=705`
      },
      {
        title: "Midnight Groove",
        duration: "5:25",
        album: "Smooth Nights",
        artist: "Soul Avenue",
        coverArt: `https://picsum.photos/200/200?id=706`
      }
    ]
  }
]
