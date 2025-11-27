export interface FAQ {
  question: string;
  answer: string;
}

export interface InternalLink {
  text: string;
  href: string;
}

export interface ContentSection {
  type: 'heading' | 'paragraph' | 'list' | 'table' | 'callout';
  content: string | string[] | { headers: string[]; rows: string[][] };
  level?: 2 | 3; // for headings
  variant?: 'info' | 'warning'; // for callouts
}

export interface LearnArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  readTime: string;
  featured: boolean;
  content: ContentSection[];
  faqs: FAQ[];
  relatedArticles: string[];
  internalLinks: InternalLink[];
}

export const learnArticles: LearnArticle[] = [
  {
    slug: "auto-insurance-guide",
    title: "Auto Insurance in Alabama & Georgia: What You Actually Need to Know",
    metaTitle: "Auto Insurance in Alabama & Georgia: Complete Guide | Coffey Agencies",
    metaDescription: "Understand auto insurance requirements, coverage types, and how to save on premiums in Alabama and Georgia. Expert guidance for choosing the right protection.",
    excerpt: "Auto insurance isn't optional in Alabama or Georgia — it's the law. But beyond legal minimums, the right coverage protects your finances when accidents happen.",
    category: "Auto Insurance",
    readTime: "8 min read",
    featured: true,
    content: [
      {
        type: 'paragraph',
        content: "Auto insurance isn't optional in Alabama or Georgia — it's the law. But beyond legal minimums, the right coverage protects your finances when accidents happen. This guide breaks down what you need, what's optional, and how to avoid paying for coverage you don't."
      },
      {
        type: 'heading',
        level: 2,
        content: "What Auto Insurance Actually Covers"
      },
      {
        type: 'paragraph',
        content: "Auto insurance isn't one policy — it's a bundle of different coverages, each protecting against specific risks."
      },
      {
        type: 'heading',
        level: 3,
        content: "Liability Coverage"
      },
      {
        type: 'paragraph',
        content: "Pays for damage you cause to others. If you rear-end someone at a red light, liability covers their medical bills and vehicle repairs. It does not cover your injuries or your car — only theirs. This is the coverage state law requires."
      },
      {
        type: 'heading',
        level: 3,
        content: "Collision Coverage"
      },
      {
        type: 'paragraph',
        content: "Pays to repair or replace your vehicle after an accident, regardless of fault. Hit a guardrail? Collision covers it. Get rear-ended by an uninsured driver? Collision covers your car (though uninsured motorist coverage handles it better)."
      },
      {
        type: 'heading',
        level: 3,
        content: "Comprehensive Coverage"
      },
      {
        type: 'paragraph',
        content: "Covers non-collision damage: theft, vandalism, hail, fallen trees, deer strikes, flooding. In Alabama and Georgia, comprehensive matters more than in states without severe weather. A single hailstorm can total vehicles across entire neighborhoods."
      },
      {
        type: 'heading',
        level: 3,
        content: "Uninsured/Underinsured Motorist (UM/UIM)"
      },
      {
        type: 'paragraph',
        content: "Covers you when the other driver can't. Alabama has an 18%+ uninsured driver rate. Georgia hovers around 12%. When an uninsured driver hits you, your own UM coverage pays your medical bills and vehicle repairs. This is arguably the most important coverage after liability."
      },
      {
        type: 'heading',
        level: 3,
        content: "Medical Payments (MedPay)"
      },
      {
        type: 'paragraph',
        content: "Pays medical expenses for you and passengers regardless of fault. Fills gaps while health insurance processes claims. Particularly valuable if you have a high-deductible health plan."
      },
      {
        type: 'heading',
        level: 3,
        content: "Personal Injury Protection (PIP)"
      },
      {
        type: 'paragraph',
        content: "Similar to MedPay but broader — covers medical expenses, lost wages, and other costs. Georgia offers PIP; Alabama doesn't require it."
      },
      {
        type: 'heading',
        level: 2,
        content: "Alabama vs. Georgia: Minimum Requirements"
      },
      {
        type: 'paragraph',
        content: "Both states require liability insurance, but minimums differ slightly in practice."
      },
      {
        type: 'callout',
        variant: 'info',
        content: "Alabama Minimums (25/50/25):\n• $25,000 bodily injury per person\n• $50,000 bodily injury per accident\n• $25,000 property damage per accident"
      },
      {
        type: 'callout',
        variant: 'info',
        content: "Georgia Minimums (25/50/25):\n• $25,000 bodily injury per person\n• $50,000 bodily injury per accident\n• $25,000 property damage per accident"
      },
      {
        type: 'paragraph',
        content: "These minimums are identical, but they're also dangerously low. A serious accident easily generates $100,000+ in medical bills and vehicle damage. If your liability maxes out at $50,000, you're personally responsible for the rest. We typically recommend 50/100/50 or 100/300/100 for anyone with assets to protect."
      },
      {
        type: 'heading',
        level: 2,
        content: "What Affects Your Rate"
      },
      {
        type: 'paragraph',
        content: "Insurance companies weigh dozens of factors. Here's what moves the needle most:"
      },
      {
        type: 'heading',
        level: 3,
        content: "Driving Record"
      },
      {
        type: 'paragraph',
        content: "Accidents and tickets increase rates for 3-5 years. A single at-fault accident can raise premiums 20-40%. DUIs are worse — expect rates to double or triple."
      },
      {
        type: 'heading',
        level: 3,
        content: "Age and Experience"
      },
      {
        type: 'paragraph',
        content: "Drivers under 25 pay more. Rates typically drop at 25, again at 30, and remain stable until around 65 when they may increase slightly."
      },
      {
        type: 'heading',
        level: 3,
        content: "Vehicle Type"
      },
      {
        type: 'paragraph',
        content: "Sports cars and luxury vehicles cost more to insure. So do vehicles with high theft rates. A Honda Accord costs less to insure than a BMW 3-Series, even at the same price point."
      },
      {
        type: 'heading',
        level: 3,
        content: "Location"
      },
      {
        type: 'paragraph',
        content: "Urban areas have more accidents, theft, and vandalism. Birmingham rates differ from rural Cherokee County. Your specific ZIP code matters."
      },
      {
        type: 'heading',
        level: 3,
        content: "Credit History"
      },
      {
        type: 'paragraph',
        content: "In Alabama and Georgia, insurers can use credit-based insurance scores. Better credit typically means lower rates."
      },
      {
        type: 'heading',
        level: 3,
        content: "Coverage Choices"
      },
      {
        type: 'paragraph',
        content: "Higher deductibles lower premiums. Dropping comprehensive on a 15-year-old car saves money. But cutting liability limits to save $50/year creates real financial risk."
      },
      {
        type: 'heading',
        level: 2,
        content: "How to Save on Auto Insurance"
      },
      {
        type: 'list',
        content: [
          "Bundle Policies — Combining auto and home insurance typically saves 15-25% — often $400-600 annually.",
          "Maintain Clean Record — Safe driver discounts reward accident-free years. Some insurers offer forgiveness programs for your first accident.",
          "Ask About Discounts — Good student, military, professional association, anti-theft devices, defensive driving courses — discounts vary by insurer, but most offer several you might qualify for.",
          "Review Coverage Annually — As cars age, comprehensive and collision become less valuable. A car worth $3,000 doesn't need $500 deductibles.",
          "Don't Just Price Shop — Cheapest isn't best. A $200/year savings means nothing if claims get denied or service disappears when you need it."
        ]
      }
    ],
    faqs: [
      {
        question: "What happens if I drive without insurance in Alabama or Georgia?",
        answer: "Both states penalize uninsured driving with fines, license suspension, and vehicle registration revocation. Alabama fines range from $500-$1,000 plus a $200 reinstatement fee. Georgia suspends your registration and requires SR-22 proof of insurance for three years. Beyond legal penalties, you're personally liable for any accident damages — potentially bankrupting."
      },
      {
        question: "Do I need uninsured motorist coverage if I have health insurance?",
        answer: "Yes. Health insurance covers medical bills (with deductibles and copays), but it doesn't cover lost wages, pain and suffering, or vehicle damage. UM coverage fills those gaps. With 12-18% of drivers uninsured in our region, this coverage is essential."
      },
      {
        question: "Should I drop collision coverage on an older car?",
        answer: "Consider it when annual collision premiums exceed 10% of your car's value. If your car is worth $4,000 and collision costs $500/year with a $500 deductible, you're paying to protect $3,500 in value. The math gets questionable. But keep comprehensive — hail and theft don't care how old your car is."
      },
      {
        question: "How does my deductible affect my premium?",
        answer: "Higher deductibles mean lower premiums. Moving from a $250 deductible to $1,000 might save $200-400 annually. But you need that $1,000 available if you file a claim. Choose a deductible you can actually afford."
      },
      {
        question: "Can I get auto insurance with a bad driving record?",
        answer: "Yes, though rates will be higher. After major violations, some insurers won't offer coverage, but others specialize in high-risk drivers. Rates typically improve after 3-5 years of clean driving."
      },
      {
        question: "What's the difference between comprehensive and collision?",
        answer: "Collision covers accidents — you hit something or something hits you. Comprehensive covers everything else — theft, vandalism, weather, animals, falling objects. Both are optional but often required if you have a car loan."
      }
    ],
    relatedArticles: ["home-insurance-guide", "bundling-home-and-auto", "alabama-insurance-requirements"],
    internalLinks: [
      { text: "Get Your Free Auto Insurance Quote", href: "/contact" },
      { text: "Alabama Insurance Requirements", href: "/learn/alabama-insurance-requirements" },
      { text: "Georgia Insurance Requirements", href: "/learn/georgia-insurance-requirements" },
      { text: "Bundle Auto + Home and Save", href: "/learn/bundling-home-and-auto" }
    ]
  },
  {
    slug: "home-insurance-guide",
    title: "Home Insurance in Alabama & Georgia: Complete Protection Guide",
    metaTitle: "Home Insurance in Alabama & Georgia: Complete Guide | Coffey Agencies",
    metaDescription: "Learn what homeowners insurance covers, how much you need, and ways to save on premiums in Alabama and Georgia.",
    excerpt: "Your home is likely your largest investment. Understanding what homeowners insurance covers — and what it doesn't — helps you protect that investment without overpaying.",
    category: "Home Insurance",
    readTime: "7 min read",
    featured: false,
    content: [
      {
        type: 'paragraph',
        content: "Detailed home insurance guide content coming soon. This will cover dwelling coverage, personal property, liability, additional living expenses, and regional considerations for Alabama and Georgia homeowners."
      }
    ],
    faqs: [],
    relatedArticles: ["auto-insurance-guide", "bundling-home-and-auto", "condo-insurance-guide"],
    internalLinks: [
      { text: "Get Your Free Home Insurance Quote", href: "/contact" },
      { text: "Bundle Auto + Home and Save", href: "/learn/bundling-home-and-auto" }
    ]
  },
  {
    slug: "renters-insurance-guide",
    title: "Renters Insurance: Why Tenants Need Coverage",
    metaTitle: "Renters Insurance Guide for Alabama & Georgia | Coffey Agencies",
    metaDescription: "Understand why renters insurance matters, what it covers, and how affordable protection can be for tenants in Alabama and Georgia.",
    excerpt: "Your landlord's insurance doesn't cover your belongings. Renters insurance protects your personal property and provides liability coverage for surprisingly little cost.",
    category: "Renters Insurance",
    readTime: "6 min read",
    featured: false,
    content: [
      {
        type: 'paragraph',
        content: "Detailed renters insurance guide content coming soon. This will cover personal property coverage, liability protection, additional living expenses, and why every tenant should have this affordable coverage."
      }
    ],
    faqs: [],
    relatedArticles: ["condo-insurance-guide", "home-insurance-guide"],
    internalLinks: [
      { text: "Get Your Free Renters Insurance Quote", href: "/contact" }
    ]
  },
  {
    slug: "condo-insurance-guide",
    title: "Condo Insurance (HO-6): Understanding Walls-In Coverage",
    metaTitle: "Condo Insurance Guide (HO-6) for Alabama & Georgia | Coffey Agencies",
    metaDescription: "Learn how condo insurance works with your HOA's master policy, what walls-in coverage means, and how to avoid coverage gaps.",
    excerpt: "Condo insurance fills the gaps your HOA's master policy doesn't cover. Understanding the difference between walls-in and walls-out coverage is crucial.",
    category: "Condo Insurance",
    readTime: "6 min read",
    featured: false,
    content: [
      {
        type: 'paragraph',
        content: "Detailed condo insurance guide content coming soon. This will cover HO-6 policies, master policy coordination, betterments and improvements, loss assessment coverage, and how to avoid coverage gaps."
      }
    ],
    faqs: [],
    relatedArticles: ["renters-insurance-guide", "home-insurance-guide"],
    internalLinks: [
      { text: "Get Your Free Condo Insurance Quote", href: "/contact" }
    ]
  },
  {
    slug: "life-insurance-guide",
    title: "Life Insurance for Families: Term vs. Whole Life Explained",
    metaTitle: "Life Insurance Guide: Term vs Whole Life | Coffey Agencies",
    metaDescription: "Understand the difference between term and whole life insurance, how much coverage you need, and how to protect your family's financial future.",
    excerpt: "Life insurance isn't about you — it's about protecting the people who depend on you financially. This guide helps you choose the right coverage for your family's needs.",
    category: "Life Insurance",
    readTime: "7 min read",
    featured: false,
    content: [
      {
        type: 'paragraph',
        content: "Detailed life insurance guide content coming soon. This will cover term vs. whole life, coverage amount calculations, beneficiary designations, and how to choose the right policy for your family situation."
      }
    ],
    faqs: [],
    relatedArticles: ["auto-insurance-guide", "home-insurance-guide"],
    internalLinks: [
      { text: "Get Your Free Life Insurance Quote", href: "/contact" }
    ]
  },
  {
    slug: "alabama-insurance-requirements",
    title: "Alabama Insurance Requirements: What the Law Requires",
    metaTitle: "Alabama Auto Insurance Requirements & Laws | Coffey Agencies",
    metaDescription: "Complete guide to Alabama insurance requirements, minimum coverage limits, penalties for driving uninsured, and recommended coverage levels.",
    excerpt: "Alabama law requires specific minimum insurance coverage. Understanding these requirements — and why you should carry more than the minimum — protects you financially and legally.",
    category: "State Requirements",
    readTime: "5 min read",
    featured: false,
    content: [
      {
        type: 'paragraph',
        content: "Detailed Alabama insurance requirements guide coming soon. This will cover minimum liability limits (25/50/25), proof of insurance requirements, penalties for violations, and recommended coverage levels for Alabama drivers."
      }
    ],
    faqs: [],
    relatedArticles: ["georgia-insurance-requirements", "auto-insurance-guide"],
    internalLinks: [
      { text: "Get Your Free Auto Insurance Quote", href: "/contact" }
    ]
  },
  {
    slug: "georgia-insurance-requirements",
    title: "Georgia Insurance Requirements: What the Law Requires",
    metaTitle: "Georgia Auto Insurance Requirements & Laws | Coffey Agencies",
    metaDescription: "Complete guide to Georgia insurance requirements, minimum coverage limits, penalties for driving uninsured, and recommended coverage levels.",
    excerpt: "Georgia law requires specific minimum insurance coverage. Understanding these requirements — and why you should carry more than the minimum — protects you financially and legally.",
    category: "State Requirements",
    readTime: "5 min read",
    featured: false,
    content: [
      {
        type: 'paragraph',
        content: "Detailed Georgia insurance requirements guide coming soon. This will cover minimum liability limits (25/50/25), proof of insurance requirements, penalties for violations, and recommended coverage levels for Georgia drivers."
      }
    ],
    faqs: [],
    relatedArticles: ["alabama-insurance-requirements", "auto-insurance-guide"],
    internalLinks: [
      { text: "Get Your Free Auto Insurance Quote", href: "/contact" }
    ]
  },
  {
    slug: "bundling-home-and-auto",
    title: "Bundle Auto + Home Insurance: Save Up to $600 Annually",
    metaTitle: "Bundle Home and Auto Insurance to Save | Coffey Agencies",
    metaDescription: "Learn how bundling auto and home insurance saves 15-25% on premiums, simplifies billing, and provides better coverage coordination.",
    excerpt: "Bundling auto and home insurance typically saves 15-25% on premiums — often $400-600 annually. But savings aren't the only benefit.",
    category: "Tips & Advice",
    readTime: "5 min read",
    featured: false,
    content: [
      {
        type: 'paragraph',
        content: "Detailed bundling guide content coming soon. This will cover multi-policy discounts, simplified billing, coverage coordination benefits, and how to calculate whether bundling saves you money."
      }
    ],
    faqs: [],
    relatedArticles: ["auto-insurance-guide", "home-insurance-guide"],
    internalLinks: [
      { text: "Get Your Free Bundle Quote", href: "/contact" }
    ]
  }
];
