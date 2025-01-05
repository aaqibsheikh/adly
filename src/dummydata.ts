export const rewardCardData = [
  {
    name: 'Dokyo #271',
    estimatedValue: '0,000',
    rarity: 'Common',
    image: '/assets/images/nft1.png',
  },
  {
    name: 'The Arena',
    estimatedValue: '0,000',
    rarity: 'Mythical',
    image: '/assets/images/arena-claim.png',
  },
  {
    name: 'Looty Points',
    estimatedValue: '0,000',
    rarity: 'Legendary',
    image: '/assets/images/looty-point.png',
  },
  {
    name: 'Lil Degens #957',
    estimatedValue: '0,000',
    rarity: 'Uncommon',
    image: '/assets/images/nft2.png',
  },
  {
    name: 'Dokyo #1723',
    estimatedValue: '0,000',
    rarity: 'Rare',
    image: '/assets/images/nft3.png',
  },
  {
    name: 'Steady #003',
    estimatedValue: '0,000',
    rarity: 'Epic',
    image: '/assets/images/nft4.png',
  },
  {
    name: 'Don #554',
    estimatedValue: '0,000',
    rarity: 'Legendary',
    image: '/assets/images/nft5.png',
  },
];

export const rewardArenaCardData = [
  {
    name: '168 ARENA',
    estimatedValue: '0,000',
    rarity: 'Common',
    poolId: 2, // Common pool
    image: '/assets/images/reward/arena-reward-1.png',
  },
  {
    name: '336 ARENA',
    estimatedValue: '0,000',
    rarity: 'Common',
    poolId: 2, // Common pool
    image: '/assets/images/reward/arena-reward-2.png',
  },
  {
    name: '673 ARENA',
    estimatedValue: '0,000',
    rarity: 'Common',
    poolId: 2, // Common pool
    image: '/assets/images/reward/arena-reward-2.png',
  },
  {
    name: '1 039 ARENA',
    estimatedValue: '0,000',
    rarity: 'Rare',
    poolId: 4, // Rare pool
    image: '/assets/images/reward/arena-reward-3.png',
  },
  {
    name: '2 079 ARENA',
    estimatedValue: '0,000',
    rarity: 'Rare',
    poolId: 4, // Rare pool
    image: '/assets/images/reward/arena-reward-3.png',
  },
  {
    name: '3 462 ARENA',
    estimatedValue: '0,000',
    rarity: 'Rare',
    poolId: 4, // Rare pool
    image: '/assets/images/reward/arena-reward-5.png',
  },
  {
    name: '4 158 ARENA',
    estimatedValue: '0,000',
    rarity: 'Rare',
    poolId: 4, // Rare pool
    image: '/assets/images/reward/arena-reward-4.png',
  },
  {
    name: '6 925 ARENA',
    estimatedValue: '0,000',
    rarity: 'Rare',
    poolId: 4, // Rare pool
    image: '/assets/images/reward/arena-reward-5.png',
  },
  {
    name: '13 850 ARENA',
    estimatedValue: '0,000',
    rarity: 'Legendary',
    poolId: 6, // Legendary pool
    image: '/assets/images/reward/arena-reward-6.png',
  },
];


export const rewardCardQiibeeData = [
  {
    name: 'Dokyo #271',
    estimatedValue: '0,000',
    rarity: 'Common',
    image: '/assets/images/credit.png',
  },
  {
    name: 'Lil Degens #957',
    estimatedValue: '0,000',
    rarity: 'Uncommon',
    image: '/assets/images/credit.png',
  },
  {
    name: 'Dokyo #1723',
    estimatedValue: '0,000',
    rarity: 'Rare',
    image: '/assets/images/credit.png',
  },
  {
    name: 'Steady #003',
    estimatedValue: '0,000',
    rarity: 'Epic',
    image: '/assets/images/credit.png',
  },
  {
    name: 'Don #554',
    estimatedValue: '0,000',
    rarity: 'Legendary',
    image: '/assets/images/credit.png',
  },
];

export const recentActivityData = [
  {
    projectName: 'Gommies #564',
    estimatedValue: '0,000',
    rewardOpened: '00h 00m ago',
    image: '/assets/images/nft6.png', // Replace with actual image paths
  },
  {
    projectName: 'Silver Key',
    estimatedValue: '0,000',
    rewardOpened: '00h 00m ago',
    image: '/assets/images/nft7.png',
  },
  {
    projectName: 'Bronze Key',
    estimatedValue: '8,000',
    rewardOpened: '00h 00m ago',
    image: '/assets/images/nft8.png',
  },
  {
    projectName: 'Enforcer Mac',
    estimatedValue: '0,000',
    rewardOpened: '00h 00m ago',
    image: '/assets/images/nft9.png',
  },
  {
    projectName: 'Gold Key',
    estimatedValue: '0,000',
    rewardOpened: '00h 00m ago',
    image: '/assets/images/nft10.png',
  },
  // {
  //   projectName: '5 tickets',
  //   estimatedValue: '0,000',
  //   rewardOpened: '00h 00m ago',
  //   image: '/assets/images/raffle-banner.png',
  // },
  {
    projectName: '400 Looty points',
    estimatedValue: '0,000',
    rewardOpened: '00h 00m ago',
    image: '/assets/images/looty-epic.png',
  },
];

export const openBoxCardsData = [
  {
    claimStatus: 'Claiming soon',
    claimTime: '00d 00h 00m 00s',
    rewardValue: '$2,118',
    buttonText: 'Mint',
    projectName: 'Phaver',
    token: 'ETH',
    progress: 10,
    totalProgress: 1000,
    image: '/assets/images/phaver.jpg',
    imageLogo: '/assets/images/project1_logo.png',
  },
  {
    claimStatus: 'Claiming live',
    claimTime: '00h 00m 00s',
    rewardValue: '$2,119',
    buttonText: 'Open box',
    projectName: 'AscendEX',
    token: 'AMX',
    progress: 20,
    totalProgress: 1000,
    image: '/assets/images/qbx-socials-cover-d.jpg',
    imageLogo: '/assets/images/project2_logo.png',
  },
];

export interface HomeBannerData {
  collectionImage: string;
  id: string;
  title: string;
  btnText: string;
  image: string;
  status: string;
  slug: string;
  website: string;
  twitter: string;
  projectType: string;
  stageId: string;
  showButtons?: boolean;
  imageMobile?: string;
}

export const homeBannerData: HomeBannerData[] = [
  {
    id: '',
    stageId: '',
    title: 'MultiversX',
    slug: 'multiversx',
    btnText: 'Earn',
    image: '/assets/images/multiversx-banner.png',
    imageMobile: '/assets/images/multiversx-banner-mobile.png',
    status: 'Live',
    collectionImage: '/assets/images/multiversx-logo.png',
    website: 'https://www.multiversx.com',
    twitter: 'https://x.com/MultiversX',
    projectType: 'EGLD',
    showButtons: true,
  },
  {
    id: '',
    stageId: '',
    title: 'The Arena',
    slug: 'arena',
    btnText: 'Claim',
    image: '/assets/images/arena-banner.png',
    imageMobile: '/assets/images/arena-banner-mobile.png',
    status: 'Live',
    collectionImage: '/assets/images/arena-logo.png',
    website: 'https://arena.social/',
    twitter: 'https://x.com/TheArenaApp',
    projectType: 'avax',
    showButtons: false,
  },
  {
    id: '',
    stageId: '',
    title: 'avax x inspect',
    slug: 'avax',
    btnText: 'Claim',
    image: '/assets/images/avax-banner.png',
    imageMobile: '/assets/images/avax-banner-mobile.png',
    status: 'Coming soon',
    collectionImage: '/assets/images/avax_logo.png',
    website: 'https://www.avax.network/',
    twitter: 'https://x.com/avax',
    projectType: 'avax',
    showButtons: false,
  },
];

export interface MultiversPointsCardData {
  phase: string;
  title: string;
  description: string;
  status: string;
  slug: string;
  bgImage: string;
  pointsToEarn: string;
  isClaimed?: boolean;
  videoId?: string;
}

export const multiversPointsCardData: MultiversPointsCardData[] = [
  // {
  //   phase: 'PHASE 1',
  //   title: 'Active Wallet',
  //   description:
  //     'Elevate your status in the MultiversX universe by actively swapping through the xPortal app! Each transaction boosts your tier, multiplying the points you earn. Higher tiers mean higher multipliers, propelling you upwards on the leaderboard! Being an active MultiversX user has its perks! Your progress will only be visible after 24 hours and updated daily. (Min. total swap value of $200 to be eligible)',
  //   status: 'To Do',
  //   slug: 'active-wallet',
  //   bgImage: '/assets/images/tasks/task-2.png',
  //   pointsToEarn: '370,000',
  // },
  {
    phase: 'PHASE 1',
    title: 'Follow @Looty_fi on X',
    description:
      "Follow @Looty_fi to always stay up to date with the on-going campaigns and challenges - there's always a loot box waiting to be opened!",
    status: 'To Do',
    slug: 'follow-looty-fi-on-x',
    bgImage: '/assets/images/tasks/task-4.png',
    pointsToEarn: '25',
  },
  {
    phase: 'PHASE 1',
    title: 'Follow @MultiversX on X',
    description:
      "Make sure you follow @MultiversX on X and never miss an update about what's happening in their vibrant ecosystem!",
    status: 'To Do',
    slug: 'follow-multiversx-on-x',
    bgImage: '/assets/images/tasks/task-3.png',
    pointsToEarn: '25',
  },
  // {
  //   phase: 'PHASE 1',
  //   title: 'Like & RT Twitter Posts',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  //   status: 'To Do',
  //   slug: 'like-and-rt-twitter-posts',
  //   bgImage: '/assets/images/tasks/task-6.png',
  //   pointsToEarn: '240,000',
  // },
  {
    phase: 'PHASE 1',
    title: 'Watch Content Video',
    description:
      'Enhance your understanding of the MultiversX ecosystem by watching a detailed content video. This engaging resource is designed to deepen your knowledge of our technology and community initiatives. Watching this video increases your points on the leaderboard!',
    status: 'To Do',
    slug: 'watch-content-video',
    bgImage: '/assets/images/tasks/task-10.png',
    pointsToEarn: '10',
    videoId: '-kavNl-8ABs',
  },
  {
    phase: 'PHASE 1',
    title: 'Follow @xPortalApp on X',
    description:
      'Stay in the loop with the latest updates and insights by following @xPortalApp on X! This task connects you directly to the pulse of MultiversX, ensuring you never miss out on new features, exclusive promotions, and important announcements.',
    status: 'To Do',
    slug: 'follow-xportalapp-on-x',
    bgImage: '/assets/images/tasks/task-11.png',
    pointsToEarn: '25',
  },
  {
    phase: 'PHASE 1',
    title: 'Watch YT Video 2: "The Only Crypto Wallet You\'ll Ever Need"',
    description:
      'Enhance your understanding of the MultiversX ecosystem by watching a detailed content video. This engaging resource is designed to deepen your knowledge of our technology and community initiatives. Watching this video increases your points on the leaderboard!',
    status: 'To Do',
    slug: 'watch-content-video2',
    bgImage: '/assets/images/tasks/task-12.png',
    pointsToEarn: '10',
    videoId: 'PVDKtIGHuEc',
  },
  {
    phase: 'PHASE 1',
    title: 'xPortal Wallet Activation',
    description:
      'Kickstart your journey in the MultiversX ecosystem by creating or importing your own xPortal Wallet! This first crucial step unlocks a world of possibilities, allowing you to manage assets effortlessly, interact with decentralized applications, and engage in the vibrant MultiversX community! The points for this action will only be visible on the leaderboard 24 hours after its completion. To complete, download and setup your own xPortal wallet or import your existing wallet in xPortal.',
    status: 'To Do',
    slug: 'xportal-wallet-creation',
    bgImage: '/assets/images/tasks/task-1.png',
    pointsToEarn: '35',
  },
  {
    phase: 'PHASE 1',
    title: 'Buy $EGLD',
    description:
      'Secure your position in the MultiversX ecosystem by purchasing and holding a minimum of 5 $EGLD. This fundamental action not only enriches your portfolio but also strengthens your standing on the leaderboard. The points for this action will only be visible on the leaderboard 24 hours after its completion. To complete, buy a minimum of 5 $EGLD through your xPortal app and hold for at least 72 hours. Updates daily.',
    status: 'To Do',
    slug: 'buy-egld',
    bgImage: '/assets/images/tasks/task-7.png',
    pointsToEarn: 'Min. 100',
  },
  {
    phase: 'PHASE 1',
    title: 'Watch YT Video 3: "What is Sharding?"',
    description:
      'Enhance your understanding of the MultiversX ecosystem by watching a detailed content video. This engaging resource is designed to deepen your knowledge of our technology and community initiatives. Watching this video increases your points on the leaderboard!',
    status: 'To Do',
    slug: 'watch-content-video3',
    bgImage: '/assets/images/tasks/task-13.png',
    pointsToEarn: '10',
    videoId: 'cHK8e2bN3YQ'
  },

  {
    phase: 'PHASE 1',
    title: 'xPortal Swap (Active Wallet)',
    description:
      'Elevate your status in the MultiversX universe by actively swapping through the xPortal app! Each transaction boosts your tier, multiplying the points you earn. Higher tiers mean higher multipliers, propelling you upwards on the leaderboard! Being an active MultiversX user has its perks! Your progress will only be visible after 24 hours and updated daily. (Min. total swap value of $200 to be eligible)',
    status: 'To Do',
    slug: 'xportal-swap',
    bgImage: '/assets/images/tasks/task-14.png',
    pointsToEarn: 'Min. 100',
  },
  {
    phase: 'PHASE 1',
    title: 'Follow @xAllianceDAO on X',
    description:
      "Keep track of everything that's happening in the vibrant MultiversX ecosystem by following @xAllianceDAO on X! Daily interactive content that will elevate your knowledge about what's up with MultiversX!",
    status: 'To Do',
    slug: 'follow-xalliancedao-on-x',
    bgImage: '/assets/images/tasks/task-15.png',
    pointsToEarn: '25',
  },
  {
    phase: 'PHASE 1',
    title: 'Watch YT Video 4: "How AI is Changing The World"',
    description:
      'Enhance your understanding of the MultiversX ecosystem by watching a detailed content video. This engaging resource is designed to deepen your knowledge of our technology and community initiatives. Watching this video increases your points on the leaderboard!',
    status: 'To Do',
    slug: 'watch-content-video4',
    bgImage: '/assets/images/tasks/task-17.png',
    pointsToEarn: '10',
    videoId: 'Eqzu5XrqHGw'
  },
  // {
  //   phase: 'PHASE 1',
  //   title: 'Subscribe to @xAlliance YouTube',
  //   description:
  //     "Hop into the MultiversX's community ecosystem by subscribing to the xAlliance YouTube channel. Weekly videos created by community members, engaging conversation and more!",
  //   status: 'To Do',
  //   slug: 'subscribe-to-xalliancedao-youtube',
  //   bgImage: '/assets/images/tasks/task-16.png',
  //   pointsToEarn: 'Min. 15',
  // },
  // {
  //   phase: 'PHASE 1',
  //   title: 'Subscribe Full Shard Podcast',
  //   description:
  //     'Dive deeper into the MultiversX ecosystem by subscribing to the Full Shard Podcast on YouTube. Stay ahead with insightful discussions, expert analyses, and exclusive updates directly from the heart of MultiversX. Tune in, learn, and grow with us!',
  //   status: 'To Do',
  //   slug: 'subscribe-full-shard-podcast',
  //   bgImage: '/assets/images/tasks/task-8.png',
  //   pointsToEarn: '15',
  // },
  //   {
  //   phase: 'PHASE 1',
  //   title: "Join MultiversX's Telegram",
  //   description:
  //     'Connect with like-minded enthusiasts by joining our MultiversX Telegram group! This vibrant community hub is your go-to for exchanging ideas, receiving real-time updates, and staying closely connected with the ecosystem. Dive into discussions, share insights, and climb the leaderboard while shaping the future of MultiversX.',
  //   status: 'To Do',
  //   slug: 'join-multiversxs-telegram',
  //   bgImage: '/assets/images/tasks/task-5.png',
  //   pointsToEarn: '15',
  // },
    {
    phase: 'PHASE 1',
    title: 'Stake $EGLD',
    description:
      'Elevate your involvement in the MultiversX ecosystem by staking at least 1 $EGLD. This action not only secures your investment but also amplifies your influence on the leaderboard. Staking your $EGLD contributes to network security and earns you rewards, enhancing your returns while you help strengthen the MultiversX community! The points for this action will only be visible on the leaderboard 24 hours after its completion. To complete, stake at least 1 $EGLD through your xPortal App.',
    status: 'To Do',
    slug: 'stake-egld',
    bgImage: '/assets/images/tasks/task-9.png',
    pointsToEarn: '15',
  },
  {
    phase: 'PHASE 1',
    title: 'Watch Video',
    description:
      'Enhance your understanding of the MultiversX ecosystem by watching a detailed content video. This engaging resource is designed to deepen your knowledge of our technology and community initiatives. Watching this video increases your points on the leaderboard!',
    status: 'To Do',
    slug: 'watch-content-video5',
    bgImage: '/assets/images/tasks/task-18.png',
    pointsToEarn: '10',
    videoId: 'fOjMJ7_SgwA',
  },
];

export const multiversMainPrizesData = [
  {
    name: '$EGLD',
    estimatedValue: '0,000',
    image: '/assets/images/rewards-egld/egld-image-1.png',
    rarity: 'Common',
  },
  {
    name: '$EGLD',
    estimatedValue: '0,000',
    image: '/assets/images/rewards-egld/egld-image-2.png',
    rarity: 'Rare',
  },
  {
    name: '$EGLD',
    estimatedValue: '0,000',
    image: '/assets/images/rewards-egld/egld-image-3.png',
    rarity: 'Rare',
  },
  {
    name: '$EGLD',
    estimatedValue: '0,000',
    image: '/assets/images/rewards-egld/egld-image-4.png',
    rarity: 'Legendary',
  },
  {
    name: '$EGLD',
    estimatedValue: '0,000',
    image: '/assets/images/rewards-egld/egld-image-5.png',
    rarity: 'Legendary',
  },
];
