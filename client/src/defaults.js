export const defaults = {
  title: 'HawkHack',
  subTitle: "Montclair State University's Second Annual 24-hour Hackathon",
  dateText: 'Saturday, March 28th - Sunday, March 29th, 2020',
  locationText: 'Student Center Ballrooms A, B, C',
  universityText: 'Montclair State University',
  dayof: false,
  openApplications: false,
  openCheckIn: false,
};

export const dayOne = 'Saturday, March 30';
export const dayOneSchedule = [
  ['Check in', '9:00 AM'],
  ['Opening Ceremony', '10:00 AM'],
  ['Hacking Begins', '11:00 AM'],
  ['Team Building Activity', '11:00 AM'],
  ['Lunch', '11:30 AM'],
  ['Google Talk: Telling Your Technology Story', '12:30 PM'],
  ['Google Workshop: How \n To Use GCP Credits', '2:00 PM'],
  ['Netflix & Lifion Talk: Hackathon Tactics', '3:30 PM'],
  ['UPS Workshop: NLP and Virtual Assistants', '5:00 PM'],
  ['Dinner', '6:30 AM'],
  ['Cup Stacking', '7:30 PM'],
  ['Gaming Area Opens', '8:00 PM'],
  ['Nerf Gun Battle Royale', '8:40 PM'],
  ['Party Games', '11:00 PM'],
];

export const dayTwo = 'Sunday, March 31';
export const dayTwoSchedule = [
  ['Gaming Area Closes', '12:00 AM'],
  ['Midnight Snack', '12:00 AM'],
  ['Party Games End', '1:00 AM'],
  ['HawkHack T-Shirt Handout', '1:00 AM'],
  ['Breakfast', '6:30 AM'],
  ['Hacking Ends', '11:00 AM'],
  ['Lunch', '11:00 PM'],
  ['Judging and Demos', '12:00 PM'],
  ['Closing Ceremony', '2:15 PM'],
];

export const sponsorsRowOne = [
  'https://msu-images.s3.amazonaws.com/cesac.jpg',
];

export const sponsorsRowTwo = [
  'https://msu-images.s3.amazonaws.com/logitech_logo-min.png',
  'https://msu-images.s3.amazonaws.com/lyft-logo-min.png',
  'https://msu-images.s3.amazonaws.com/gfuel-min.png',
  'https://msu-images.s3.amazonaws.com/monsterlogo+(1)-min.png',
];

export const FAQs = [
  {
    question: 'What is a hackathon?',
    answer: 'Hackathons are an intense event that bring together software developers, graphic designers and user interface specialists along with industry process experts and professionals to identify issues and create software solutions, usually within a weekend.',
  },
  {
    question: 'What is the goal of the hackathon?',
    answer: 'We want to create an environment that embraces new ideas and technology solutions. A place where people passionate in technology can come innovate the industry',
  },
  {
    question: "I'm new, what should I do?",
    answer: 'We would love to have you at HawkHack! Throughout the event we will be hosting workshops where you can try new things, start a project for that idea you always had in mind, and receive help from industry experts.',
  },
  {
    question: 'How much coding experience do I need?',
    answer: 'Absolutely none. Hackathons are a great place to learn and get advice from experienced hackers. We\'ll also host plenty of workshops and have plenty of mentors so by the end of the 24 hours you\'ll have a working project even if you haven\'t coded a day in your life before. We also have prizes for the best high school hacking track!',
  },
  {
    question: 'Who can come?',
    answer: 'If you\'re at a current college/university student, a recent graduate (up to 1 year), or a high school student, you\'re more than welcome to attend! We are open to students of all academic backgrounds and skill levels, so whether you’re an aspiring artist or an expert engineer, there’s a place for you at HawkHack!',
  },
  {
    question: 'Do I need a team?',
    answer: 'You are welcome to come solo or in a group no more than 4. We will provide means for you to find a team if you don’t have one',
  },
  {
    question: "What if I can't stay for the full 24 hours?",
    answer: 'That is fine! Although we encourage you to do so and make the best of the event, you are free to leave whenever you want and come back later',
  },
  {
    question: 'How much does it cost to attend?',
    answer: 'FREE, that’s how much. The event is completely FREE to attend. FREE food, FREE games, FREE fun. Sounds good, doesn’t it?',
  },
  {
    question: 'What’s the overall process like before I can eventually participate in the hackathon?',
    answer: ['1. You first “Register” for an account;',
      '2. Stay tuned for our follow-up email, and then, “Apply” for participation using your account;',
      '3. We will review your application, and your application will likely be “Approved;” there is the possibility that your application will be rejected though due to various reasons. \n',
      '4. One week before the event, you “Confirm” whether you are coming or not. Confirmations will be accepted on a first-come-first-serve basis. When the number of confirmations exceeds our capacity; you will not be able to confirm successfully.',
      '5. If your confirmation is “Successful,” come to the venue on March 28th!'],
  },
];

export const UserStatus = {
  Incomplete: "Applications are open! Fill out the application below to register.", 
  Pending: "Great! You're registered. Hang tight, we'll send out an email for confirmations soon.", 
  Waitlisted: "Hold on for now, we'll update you if something changes.", 
  Accepted: "You've been accepted! We'll send out an email for confirmation and then you'll be good to go.", 
  Confirmed: "You're all set, we'll see you there", 
  Denied: "Stars didn't align themselves this year, but we're open to suggestions at support@hawkhack.io"
}
