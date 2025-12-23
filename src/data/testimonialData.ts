// Master list of 5-star reviews from Coffey Agencies
// Sources: 
//   - coffeyagencies.com/reviews
//   - Experience.com (via Google Business Profile aggregation)
//   - Google Business Profile (Centre, AL & Rome, GA locations)

export interface Testimonial {
  name: string;
  text: string;
  location: string;
}

// Centre, AL Reviews (11)
const centreReviews: Testimonial[] = [
  {
    name: "Thomas K.",
    text: "Crystal and Kimberly set up our home and auto plan at a very respectable price. If I could give 10 stars I would. I think this agency will be great to work with in the future.",
    location: "Centre, AL"
  },
  {
    name: "Tyler M.",
    text: "Kimberly was so helpful and attentive. She answered all my questions and made the process stress-free.",
    location: "Centre, AL"
  },
  {
    name: "Kim S.",
    text: "I always talk with Crystal and she's so helpful and professional. She makes me feel like a valued policyholder. Highly recommend them.",
    location: "Centre, AL"
  },
  {
    name: "Teresa G.",
    text: "Lexi was patient and helpful when I stopped by to ask multiple questions. She's an asset to the office.",
    location: "Centre, AL"
  },
  {
    name: "Lloyd N.",
    text: "Professional and quick to respond. I've been with other agencies but this one is top notch. Kimberly Fletcher is so friendly. Highly recommend the agency.",
    location: "Centre, AL"
  },
  {
    name: "John B.",
    text: "Great experience. They cover my vehicles, RV, boat and home. Crystal makes sure I always leave satisfied.",
    location: "Centre, AL"
  },
  {
    name: "Tammy B.",
    text: "Crystal gives excellent customer service and tech support. She's very sweet. I definitely recommend this location.",
    location: "Centre, AL"
  },
  {
    name: "Cassie N.",
    text: "Best agency. Great customer service. Kimberly helps with all my insurance needs. Love being covered for car, home and life.",
    location: "Centre, AL"
  },
  {
    name: "Kerry G.",
    text: "Recently switched all my insurance with Cody. Customer service is impressive and rates are lower. Transition was painless.",
    location: "Centre, AL"
  },
  {
    name: "Gina W.",
    text: "Cody's associates are always ready to help with friendliness and efficiency. I always feel important. They are the best.",
    location: "Centre, AL"
  },
  // New review from Google Business Profile (Nov 2025)
  {
    name: "Robert S.",
    text: "Crystal provided excellent service and made switching to Allstate an easy decision. The Centre location is friendly and fast.",
    location: "Centre, AL"
  }
];

// Rome, GA Reviews (33)
const romeReviews: Testimonial[] = [
  {
    name: "Sarah R.",
    text: "I've worked with the Coffey agency for many years and always had high-level experiences with every agent. Crystal was patient, knowledgeable, honest and thorough in answering questions about policy coverages and hypotheticals. They treat people with exceptional knowledge, communication and kindness.",
    location: "Rome, GA"
  },
  {
    name: "Tracey D.",
    text: "Been with the Coffey Agency almost 10 years; they respond quickly and help get the best price for coverage. I usually work with Kathy; she is thorough, professional and friendly.",
    location: "Rome, GA"
  },
  {
    name: "Priscilla J.",
    text: "Crystal was very patient and polite with me as a new policy holder. I have had insurance for many years and I have learned more from Crystal in 2 months than over this long life time. She explains in details how insurance works. Again thank you Crystal.",
    location: "Rome, GA"
  },
  {
    name: "Sue H.",
    text: "I've been with the agency for years and always worked with Karen. When she left I wanted to find someone as caring and helpful as Karen had been. I started working with Kathy and she has been so helpful each time I call. She is courteous, caring, and always very pleasant.",
    location: "Rome, GA"
  },
  {
    name: "Chad L.",
    text: "Staff is always helpful and goes above and beyond to be sure I'm taken care of on top of offering the best rates on home and auto insurance.",
    location: "Rome, GA"
  },
  {
    name: "Patrick R.",
    text: "Crystal was extremely professional, courteous, and pleasant. We've been with Cody's team for many years as they continue to serve our insurance needs with excellent customer service and comprehensive coverage. Many thanks!",
    location: "Rome, GA"
  },
  {
    name: "Monica W.",
    text: "Special thank you to your representative Crystal Brozio. She is simply extraordinary, no effort in her professionalism and knowledge of the services offered and available.",
    location: "Rome, GA"
  },
  {
    name: "Phillip A.",
    text: "Crystal was very kind, patient, professional and very helpful as we changed vehicles receiving appropriate insurance coverage. Thank you so very much!",
    location: "Rome, GA"
  },
  {
    name: "Clyde B.",
    text: "Kathy at Cody Coffey helped to resolve a blunder involving my insurance renewal being submitted to the state DMV. In 2 days, it was corrected. Thanks Kathy.",
    location: "Rome, GA"
  },
  {
    name: "Barbara R.",
    text: "The office staff were very friendly and helpful. They made sure I received my policies for both home and auto. They also called to follow up to see if we had any questions. I would definitely recommend this office to anyone looking to renew or upgrade their policy. Also the discounts were great!",
    location: "Rome, GA"
  },
  {
    name: "Benita D.",
    text: "Excellent customer service. Even though Cody is not local to me, he and his agency are very hands on. They keep in touch by all the means available — email, website, monthly magazine, even the old fashioned phone call.",
    location: "Rome, GA"
  },
  {
    name: "Annette C.",
    text: "Wonderful insurance agent and staff. Always helpful when changing vehicles and/or coverage. Cody and all of his staff are knowledgeable, professional and understanding. Been with them for years and very happy with my agent!",
    location: "Rome, GA"
  },
  {
    name: "Karen P.",
    text: "I've been a customer since 1989. Every issue, question or claim has always been cared for quickly, friendly and professionally. Give Cody Coffey a call — you'll be glad you did.",
    location: "Rome, GA"
  },
  {
    name: "John G.",
    text: "Cody and the gang helped me understand insurance on a recent home purchase I made. They also got me a better deal.",
    location: "Rome, GA"
  },
  // New reviews from Experience.com (2025)
  {
    name: "Tony L.",
    text: "Crystal was helpful and personable, making it a great experience.",
    location: "Rome, GA"
  },
  {
    name: "Theresa S.",
    text: "The agency's customer service is excellent. Kathy Sewell consistently goes above and beyond.",
    location: "Rome, GA"
  },
  {
    name: "Casey J.",
    text: "Marie was very helpful and professional. She deserves a raise! Coffey Agencies is the best insurance company.",
    location: "Rome, GA"
  },
  {
    name: "Ricky S.",
    text: "I've been a long-time customer. Cody and the agents are great. Kathy made terminating my Georgia policy easy when I moved out of state.",
    location: "Rome, GA"
  },
  {
    name: "California S.",
    text: "A customer for 44 years! Allstate through Coffey Agencies always delivers excellent service and loyalty. Thank you Cody!",
    location: "Rome, GA"
  },
  {
    name: "Cynthia E.",
    text: "I've been with Allstate for over 15 years. Cody handles my auto and home insurance. The team is always there when needed.",
    location: "Rome, GA"
  },
  {
    name: "William M.",
    text: "Crystal went above and beyond to help me with questions about my phone and driving test.",
    location: "Rome, GA"
  },
  // New reviews from Experience.com (2024)
  {
    name: "Katy S.",
    text: "The staff is very helpful with auto and home insurance, always responsive and detailed.",
    location: "Rome, GA"
  },
  {
    name: "David C.",
    text: "Great customer service!!! I highly recommend the agency.",
    location: "Rome, GA"
  },
  {
    name: "Janice",
    text: "The agency's customer service helps with all of my needs. I would recommend them to anyone.",
    location: "Rome, GA"
  },
  {
    name: "BJ",
    text: "The team is always helpful and available to answer questions. I appreciate their attention to detail on home and car insurance.",
    location: "Rome, GA"
  },
  {
    name: "Ed L.",
    text: "All the employees at the agency are very helpful.",
    location: "Rome, GA"
  },
  // Older reviews from Experience.com (2019-2023)
  {
    name: "Rebecca W.",
    text: "The agency has always done right by me when I needed it.",
    location: "Rome, GA"
  },
  {
    name: "Kendra W.",
    text: "Coffey Agencies is the best insurance company I have ever had.",
    location: "Rome, GA"
  },
  {
    name: "Barry G.",
    text: "Love the guys at Allstate! They are the greatest!!",
    location: "Rome, GA"
  },
  {
    name: "Susan M.",
    text: "Allstate is quick to respond to any problems. I am totally satisfied.",
    location: "Rome, GA"
  },
  {
    name: "Sharon S.",
    text: "The office accepted my payment when my regular agent was closed. I value their availability and helpfulness.",
    location: "Rome, GA"
  },
  {
    name: "Leonard C.",
    text: "The Rome office has a friendly staff and a great local office.",
    location: "Rome, GA"
  },
  {
    name: "Lynda R. J.",
    text: "Maryann and Kimberly are nice, knowledgeable, and always willing to help and answer questions.",
    location: "Rome, GA"
  }
];

// Combined master list (44 total: 11 Centre + 33 Rome)
export const allTestimonials = [...centreReviews, ...romeReviews];

// Unique testimonial combinations for each city (3 per city)
// Alabama cities get 2 Centre + 1 Rome reviews
// Georgia cities get 2 Rome + 1 Centre reviews
// No two cities share the same combination

export const testimonialSets: Record<string, Testimonial[]> = {
  // ===== ALABAMA CITIES (13) =====
  "centre-al": [centreReviews[0], centreReviews[1], romeReviews[0]],      // Thomas K, Tyler M, Sarah R
  "auburn-al": [centreReviews[2], centreReviews[3], romeReviews[1]],      // Kim S, Teresa G, Tracey D
  "birmingham-al": [centreReviews[4], centreReviews[5], romeReviews[2]],  // Lloyd N, John B, Priscilla J
  "dothan-al": [centreReviews[6], centreReviews[7], romeReviews[3]],      // Tammy B, Cassie N, Sue H
  "enterprise-al": [centreReviews[8], centreReviews[9], romeReviews[4]],  // Kerry G, Gina W, Chad L
  "foley-al": [centreReviews[0], centreReviews[2], romeReviews[5]],       // Thomas K, Kim S, Patrick R
  "huntsville-al": [centreReviews[1], centreReviews[4], romeReviews[6]],  // Tyler M, Lloyd N, Monica W
  "mobile-al": [centreReviews[3], centreReviews[5], romeReviews[7]],      // Teresa G, John B, Phillip A
  "montgomery-al": [centreReviews[6], centreReviews[8], romeReviews[8]],  // Tammy B, Kerry G, Clyde B
  "phenix-city-al": [centreReviews[7], centreReviews[9], romeReviews[9]], // Cassie N, Gina W, Barbara R
  "troy-al": [centreReviews[0], centreReviews[3], romeReviews[10]],       // Thomas K, Teresa G, Benita D
  "trussville-al": [centreReviews[2], centreReviews[6], romeReviews[11]], // Kim S, Tammy B, Annette C
  "tuscaloosa-al": [centreReviews[4], centreReviews[8], romeReviews[12]], // Lloyd N, Kerry G, Karen P
  "decatur-al": [centreReviews[5], centreReviews[10], romeReviews[13]],   // John B, Robert S (new 2025), John G
  "florence-al": [centreReviews[0], centreReviews[7], romeReviews[19]],   // Thomas K, Cassie N, Cynthia E (15+ years)
  "helena-al": [centreReviews[1], centreReviews[9], romeReviews[0]],      // Tyler M, Gina W, Sarah R
  
  // ===== GEORGIA CITIES (16) =====
  "rome-ga": [romeReviews[0], romeReviews[1], centreReviews[0]],          // Sarah R, Tracey D, Thomas K
  "alpharetta-ga": [romeReviews[2], romeReviews[3], centreReviews[1]],    // Priscilla J, Sue H, Tyler M
  "atlanta-ga": [romeReviews[4], romeReviews[5], centreReviews[2]],       // Chad L, Patrick R, Kim S
  "calhoun-ga": [romeReviews[6], romeReviews[7], centreReviews[3]],       // Monica W, Phillip A, Teresa G
  "canton-ga": [romeReviews[8], romeReviews[9], centreReviews[4]],        // Clyde B, Barbara R, Lloyd N
  "cartersville-ga": [romeReviews[10], romeReviews[11], centreReviews[5]], // Benita D, Annette C, John B
  "cedartown-ga": [romeReviews[12], romeReviews[13], centreReviews[6]],   // Karen P, John G, Tammy B
  "cumming-ga": [romeReviews[0], romeReviews[2], centreReviews[7]],       // Sarah R, Priscilla J, Cassie N
  "dallas-ga": [romeReviews[1], romeReviews[4], centreReviews[8]],        // Tracey D, Chad L, Kerry G
  "duluth-ga": [romeReviews[3], romeReviews[6], centreReviews[9]],        // Sue H, Monica W, Gina W
  "forsyth-ga": [romeReviews[5], romeReviews[8], centreReviews[0]],       // Patrick R, Clyde B, Thomas K
  "lawrenceville-ga": [romeReviews[7], romeReviews[10], centreReviews[1]], // Phillip A, Benita D, Tyler M
  "powder-springs-ga": [romeReviews[9], romeReviews[12], centreReviews[2]], // Barbara R, Karen P, Kim S
  "rockmart-ga": [romeReviews[11], romeReviews[13], centreReviews[3]],    // Annette C, John G, Teresa G
  "summerville-ga": [romeReviews[0], romeReviews[6], centreReviews[4]],   // Sarah R, Monica W, Lloyd N
  "suwanee-ga": [romeReviews[2], romeReviews[8], centreReviews[5]]        // Priscilla J, Clyde B, John B
};

// Default testimonials (fallback if city slug not found)
export const defaultTestimonials: Testimonial[] = [
  centreReviews[0],  // Thomas K
  romeReviews[0],    // Sarah R
  centreReviews[1]   // Tyler M
];

// Unique testimonial combinations for each service page (updated with 2025 reviews)
// No two service pages share the same 3 testimonials
export const serviceTestimonialSets: Record<string, Testimonial[]> = {
  "auto-insurance": [centreReviews[0], romeReviews[21], romeReviews[19]],       // Thomas K, Katy S (auto/home 2024), Cynthia E (15+ years auto/home)
  "home-insurance": [romeReviews[0], romeReviews[24], romeReviews[21]],         // Sarah R, BJ (home/car 2024), Katy S (auto/home)
  "renters-insurance": [centreReviews[1], romeReviews[22], centreReviews[7]],   // Tyler M, David C (great service 2024), Cassie N
  "condo-insurance": [romeReviews[2], romeReviews[15], centreReviews[4]],       // Priscilla J, Theresa S (above & beyond 2025), Lloyd N
  "motorcycle-insurance": [centreReviews[3], romeReviews[16], centreReviews[8]], // Teresa G, Casey J (best company 2025), Kerry G
  "boat-insurance": [romeReviews[4], romeReviews[18], romeReviews[10]],         // Chad L, California S (44 years loyalty 2025), Benita D
  "atv-insurance": [centreReviews[9], romeReviews[14], romeReviews[11]],        // Gina W, Tony L (great experience 2025), Annette C
  "life-insurance": [centreReviews[10], centreReviews[0], romeReviews[19]]      // Robert S (new Centre 2025), Thomas K, Cynthia E (15+ years trust)
};
