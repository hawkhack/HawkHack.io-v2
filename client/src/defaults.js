import React from 'react'
import Typography from '@material-ui/core/Typography'

export const defaults = {
  title: 'HawkHack',
  subTitle: "Montclair State University's Second Annual 24-hour Hackathon",
  dateText: 'Saturday, March 28th - Sunday, March 29th, 2020',
  locationText: 'Student Center Ballrooms A, B, C',
  universityText: 'Montclair State University',
  dayof: false,
  openApplications: true,
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

// SPONSORS ROW 1 //
export const sponsorsRowOne = [
  {
    image_url: 'https://msu-images.s3.amazonaws.com/cesac.jpg',
    sponsor_url: 'https://www.montclair.edu/clean-energy-sustainability-analytics/'
  }
];

// SPONSOR ROW 2 //
export const sponsorsRowTwo = [
  {
    image_url: 'https://msu-images.s3.amazonaws.com/logitech_logo-min.png',
    sponsor_url: 'https://logitech.com'
  },
  {
    image_url: 'https://msu-images.s3.amazonaws.com/lyft-logo-min.png',
    sponsor_url: 'https://lyft.com'
  },
  {
    image_url: 'https://msu-images.s3.amazonaws.com/gfuel-min.png',
    sponsor_url: 'http://gfuel.com'
  }
];


// SPONSOR ROW 3 //
export const sponsorsRowThree = [
  {
    image_url: 'https://msu-images.s3.amazonaws.com/google+(1)-min.png',
    sponsor_url: 'https://www.google.com'
  },
  {
    image_url: 'https://msu-images.s3.amazonaws.com/atalakit-min.png',
    sponsor_url: ''
  },
]

// SPONSOR ROW 4 //
export const sponsorRowFour = [
  {
    image_url: 'https://msu-images.s3.amazonaws.com/monsterlogo+(1)-min.png',
    sponsor_url: 'https://www.monsterenergy.com/'
  },
]

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


export const codeOfConduct = () => (
  <>
    <Typography align="center" variant="h4">
      Code of Conduct
    </Typography>

    <br />
    <Typography align="left" variant="body1">
      HawkHack aims to be a hackathon where all attendees and 
      volunteers feel welcome, included, respected and safe. 
      All attendees–including sponsors, students, speakers, judges, 
      volunteers, and organizers–are therefore required to abide by 
      the following code of conduct at all times.
    </Typography>

    <br />
    <Typography align="left" variant="h5"><b> Introduction </b></Typography>
    <Typography align="left" variant="body1">
      Our hackathon is dedicated to providing a harassment-free space for 
      everyone, regardless of gender, age, sexual orientation, ability, 
      physical appearance, race, or religion.
    </Typography>
    <Typography align="left" variant="body1">
      We value the participation of each member and 
      we want all attendees to have an enjoyable and 
      fulfilling experience. Accordingly, all attendees 
      are expected to show respect and courtesy to other 
      attendees throughout the event.
    </Typography>
    <Typography align="left" variant="body1">
      We do not tolerate harassment in any form from attendees. 
      Sexual language and inappropriate imagery is not appropriate 
      for submitted projects or at any time or place during the event, 
      including talks, workshops, receptions, and online media. 
      Attendees violating these rules may be sanctioned or expelled 
      from the event without travel reimbursement at the discretion
      of the event organizers. Any events that violate the HawkHack 
      Code of Conduct should be reported as specified in the procedures 
      at the end of the document.
    </Typography>
    
    <br />
    <Typography align="left" variant="h5"><b> Rules and Policies </b></Typography>
    <Typography align="left" variant="body1">
      Harassment includes, but is not limited to: offensive verbal 
      comments related to gender, age, sexual orientation, ability, 
      physical appearance, race, religion; sexual or graphic images 
      in public spaces; deliberate intimidation; stalking, following, 
      harassing; photography or video recording someone without their 
      consent; sustained disruption of talks or other events; 
      inappropriate physical contact; and unwelcome sexual attention.
    </Typography>
    <Typography align="left" variant="body1">
      Attendees exhibiting any of these harmful behaviours will 
      be asked to stop immediately. Sponsors, speakers, 
      volunteers and organizers are also expected to follow 
      the anti-harassment policy. In particular, sponsors 
      should not use sexualized images, activities, or other 
      graphic materials. Booth staff (including volunteers) 
      should not use sexualized clothing/uniforms/costumes, or 
      otherwise create a sexualized environment.
    </Typography>
    <Typography align="left" variant="body1">
      In addition, hacks or projects submitted by teams that 
      violate this code may be disqualified or denied the right 
      to demo at the discretion of the event organizers.
      Photography is encouraged, but attendees must be 
      given a reasonable chance to opt out from being photographed. 
      If they object to being photographed, please comply with their 
      request. It is inappropriate to take photographs in contexts 
      where people have a reasonable expectation of privacy, for 
      example in bathrooms or when attendees are sleeping.
    </Typography>
    <Typography align="left" variant="body1">
      If a attendees engages in harmful behaviour, the event 
      organisers may take any action they deem appropriate, 
      including warning the perpetrator or expelling them 
      from the event with no reimbursement.
    </Typography>
    <Typography align="left" variant="body1">
      If you are being harassed, notice that someone else 
      is being harassed, or have any other concerns, please 
      follow the reporting procedures at the bottom of this 
      document and report the incident immediately. Hackathon 
      staff will be clearly identified and the Co-Directors 
      can be reached at all times via the phone numbers below.
    </Typography>
    <Typography align="left" variant="body1">
      Hackathon staff will be happy to 
      help attendees contact venue security or local 
      law enforcement, provide escorts, or otherwise 
      assist those experiencing harassment to feel safe 
      for the duration of the event. We value your 
      attendance and expect attendees to follow these 
      rules at hackathon and workshop venues and all 
      related social events.
    </Typography>
    <Typography align="left" variant="body1">
      Hackathon staff will be happy to 
      help attendees contact venue security or local 
      law enforcement, provide escorts, or otherwise 
      assist those experiencing harassment to feel safe 
      for the duration of the event. We value your 
      attendance and expect attendees to follow these 
      rules at hackathon and workshop venues and all 
      related social events.
    </Typography>

    <br />
    <Typography align="left" variant="h5"><b> Reporting Policies </b></Typography>
    <Typography align="left" variant="body1">
      If you feel uncomfortable or think there may 
      be a potential violation of the code of conduct, 
      please report it through the following methods. 
      All reporters have the right to remain anonymous.
    </Typography>
    <Typography align="left" variant="body1">
      If a participant engages in harassing behavior, 
      the hackathon organisers may take any action they 
      deem appropriate. This includes warning the offender, 
      expulsion from the hackathon with no refund (if applicable), 
      or reporting their behaviour to local law enforcement. 
    </Typography>
    <Typography align="left" variant="body1">
      Please also don’t hesitate to contact any of the organizers or the security guard on duty at any time. You can get in direct touch with the Co-Leaders below:
      <ul>
        <li>Teresa Miller (201) 668-5451</li>
        <li>Matthew Mendero (201) 466-2891</li>
      </ul>
      You can also email us at <a href="mailto:team@hawkhack.io">team@hawkhack.io</a>.
    </Typography>
    
    <br /> 
  </>
)

export const termsOfService = () => (
  <>
    <Typography align="center" variant="h4">
      HACKATHON PARTICIPATION AGREEMENT
    </Typography>

    <br />
    <Typography align="left" variant="body1">
      HawkHack is pleased to present the annual HawkHack Hackathon 
      (“Hackathon”) hosted at Montclair State University. The Hackathon 
      is governed by this Hackathon Participation Agreement (“Agreement”). 
      By entering the Hackathon, you (“Participant”) agree to abide by the 
      Agreement which is a binding legal agreement between Participant and 
      HawkHack with respect to the Hackathon.
    </Typography>

    <br />
    <Typography align="left" variant="h5"><b> Participation in the Hackathon </b></Typography>
    <Typography align="left" variant="body1">
      Participants must be classified as a highschool or undergraduate student. 
      In addition to the Agreement, Participant agrees to abide by the 
      Terms and Conditions provided in connection with the Hackathon. HawkHack has 
      the right, at its sole discretion, to disqualify any Participant for breach 
      of the Agreement or Additional Documents. HawkHack has the right to cancel or 
      suspend the Hackathon with or without notice and for any reason. HawkHack is not 
      responsible for any damage or inconvenience caused by a cancellation or suspension 
      of the Hackathon.
    </Typography>

    <br />
    <Typography align="left" variant="h5"><b> Ownership of Applications </b></Typography>
    <Typography align="left" variant="body1">
      Participant represents and warrants that the Application was and will be 
      Participant’s own original work and does not and will not infringe the 
      intellectual property or proprietary rights of any third party, including, 
      without limitation, any third party patents, copyrights or trademarks. 
      Participant hereby agrees not to instigate, support, maintain or authorize 
      any action, claim or lawsuit against HawkHack, or any other person, on the grounds 
      that any use of a Participant’s Application infringes any of Participant’s rights 
      as creator of the Application, including, without limitation, trademark rights, 
      copyrights and moral rights or “droit moral.” Each participant acknowledges and 
      agree that HawkHack or other Participants or third parties may have developed or 
      commissioned works which are similar to the Application of Participant or Participant’s team, or 
      may develop something similar in the future, and each Participant waives any claims 
      that Participant may have resulting from any similarities to the Application of 
      Participant or Participant’s team.
    </Typography>

    <br />
    <Typography align="left" variant="h5"><b> Prizes and Awards </b></Typography>
    <Typography align="left" variant="body1">
      The prizes and awards to be awarded are as follows: 
      The Participant, or team of Participants whose Application 
      is awarded the highest score by the Judge in each Category 
      will each receive the presented prize (prizes vary by track). 
      No cash or other substitution of prizes is permitted, except at 
      the sole option of Sponsor for a prize of equal or greater value. 
      Sponsor will not replace any lost or stolen prizes. Winners are solely 
      responsible for any and all federal, state, provincial and local taxes, 
      if any, that apply to prizes.
    </Typography>
    
    <br /> 
    <Typography align="left" variant="h5"><b> Publicity </b></Typography>
    <Typography align="left" variant="body1">
      Except where prohibited, by participating in the Contest, Participant consent 
      to the use of his/her name, photo and/or likeness, biographical information, 
      entry and statements attributed to Participant (if true) for advertising and 
      promotional purposes,including without limitation, inclusion in Sponsor’ newsletters, 
      Sponsor’ websites, andany of the Sponsor’ social media accounts or outlets without 
      additional compensation. 
    </Typography>

    <br />
    <Typography align="left" variant="h5"><b> Indemnity </b></Typography>
    <Typography align="left" variant="body1">
      You agree to release, indemnify, defend and hold Sponsor and their parents, affiliates, 
      subsidiaries, directors, officers, employees, Sponsor and agents, including advertising 
      and promotion agencies, and assigns, and any other organizations related to the Contest, 
      harmless, from any and all claims, injuries, damages, expenses or losses to person or 
      property and/or liabilities of any nature that in any way arise from participation in 
      the Contest or acceptance or use of a prize or parts thereof, including without 
      limitation (i) any condition caused by events beyond Sponsor’ control that may 
      cause the Contest to be disrupted or corrupted; (ii) any claim than an Application 
      Infringes third party intellectual property or proprietary rights; (iii) any disputes 
      among team members, (iv) any injuries, losses, or damages (compensatory, direct, 
      incidental, consequential or otherwise) of any kind arising in connection with or 
      as a result of the prize, or acceptance, possession, or use of the prize, or from 
      participation in the Contest;(v) any printing or typographical errors in any materials 
      associated with the Contest;technical errors that may impair your ability to participate 
      in the Contest; or (vi) errors in the administration of the Contest.
    </Typography>

    <br />
    <Typography style={{ fontFamily: "Times New Roman" }} align="left" variant="body1">
      DISCLAIMER. IN NO EVENT WILL SPONSOR OR HAWKHACK BE LIABLE 
      TO YOU FOR ANY DIRECT, SPECIAL, INCIDENTAL, EXEMPLARY, 
      PUNITIVE OR CONSEQUENTIAL DAMAGES (INCLUDING LOSS OF USE, 
        DATA, BUSINESS OR PROFITS) ARISING OUT OF OR IN CONNECTION WITH YOUR 
      PARTICIPATION IN THE CONTEST, WHETHER SUCH LIABILITY ARISES FROM ANY CLAIM 
      BASED UPON CONTRACT, WARRANTY, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY 
      OR OTHERWISE, AND WHETHER OR NOT SPONSOR HAVE BEEN ADVISED OF THE POSSIBILITY OF 
      SUCH LOSS OR DAMAGE. 
    </Typography>
    <br />
    <Typography align="left" variant="body1">
      Some jurisdiction does not allow the limitation or exclusion of 
      liability for incidental or consequential damages,so the above limitation 
      or exclusion may not apply to you.
    </Typography>

    <br />
    <Typography align="left" variant="h5"><b> Acknowledgment of Understanding  </b></Typography>
    <Typography align="left" variant="body1">
      I have read both the rules & participation agreement with waiver of liability, 
      assumption of risk, and indemnity agreement, and permission to use myname, personal 
      information, and image, and fully understand the terms. I understand that I'm giving 
      up substantial rights, including my right to sue. I acknowledge that I am accepting 
      this agreement freely and voluntarily, and I intend by my acceptance to be a complete 
      and unconditional release of all liability to the greatest extent allowed by law. 
      Agreement to an electronic form of consent or verification to this document entails 
      complete agreement and acknowledgement to the document and the terms described within 
      it. By attending HawkHack Iunderstand that I have voluntarily agreed and read this 
      document. My guardian I have read and understand this agreement and I freely and 
      knowingly give my consent to HawkHack described herein.
    </Typography>
  </>
)
