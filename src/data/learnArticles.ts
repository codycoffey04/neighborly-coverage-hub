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
    title: "Home Insurance in Alabama & Georgia: Coverage That Matches Your Risks",
    metaTitle: "Home Insurance in Alabama & Georgia: Coverage Guide | Coffey Agencies",
    metaDescription: "Learn what home insurance covers in Alabama and Georgia, what standard policies exclude, regional risks like flooding and tornadoes, and how to save on premiums.",
    excerpt: "Your home is likely your largest investment. Home insurance protects that investment — but not all policies are equal, and not all risks are covered.",
    category: "Home Insurance",
    readTime: "8 min read",
    featured: false,
    content: [
      {
        type: 'paragraph',
        content: "Your home is likely your largest investment. Home insurance protects that investment — but not all policies are equal, and not all risks are covered. Alabama and Georgia homeowners face specific threats that generic policies may miss. This guide explains what home insurance covers, what it doesn't, and how to build a policy that actually protects you."
      },
      {
        type: 'heading',
        level: 2,
        content: "What Home Insurance Covers"
      },
      {
        type: 'paragraph',
        content: "Standard homeowners policies (HO-3) include several coverage types:"
      },
      {
        type: 'heading',
        level: 3,
        content: "Dwelling Coverage (Coverage A)"
      },
      {
        type: 'paragraph',
        content: "Covers the structure itself — walls, roof, foundation, built-in appliances. This is the core of your policy. Coverage should reflect replacement cost, not market value. A $200,000 home might cost $280,000 to rebuild after a total loss."
      },
      {
        type: 'heading',
        level: 3,
        content: "Other Structures (Coverage B)"
      },
      {
        type: 'paragraph',
        content: "Covers detached structures: garages, sheds, fences, pools. Typically set at 10% of dwelling coverage automatically."
      },
      {
        type: 'heading',
        level: 3,
        content: "Personal Property (Coverage C)"
      },
      {
        type: 'paragraph',
        content: "Covers your belongings — furniture, electronics, clothing, appliances. Standard policies cover around 50-70% of dwelling coverage. Actual cash value policies pay depreciated value; replacement cost policies pay to replace items with new equivalents. Replacement cost is worth the premium difference."
      },
      {
        type: 'heading',
        level: 3,
        content: "Loss of Use (Coverage D)"
      },
      {
        type: 'paragraph',
        content: "Pays additional living expenses if your home becomes uninhabitable. Hotel costs, restaurant meals, temporary housing — covered while repairs happen."
      },
      {
        type: 'heading',
        level: 3,
        content: "Liability (Coverage E)"
      },
      {
        type: 'paragraph',
        content: "Protects you if someone is injured on your property or you damage someone else's property. Also covers legal defense costs. Standard coverage is $100,000, but $300,000-$500,000 is often recommended."
      },
      {
        type: 'heading',
        level: 3,
        content: "Medical Payments (Coverage F)"
      },
      {
        type: 'paragraph',
        content: "Pays minor medical expenses for guests injured on your property, regardless of fault. Typically $1,000-$5,000. Helps avoid lawsuits over small injuries."
      },
      {
        type: 'heading',
        level: 2,
        content: "What Standard Policies Don't Cover"
      },
      {
        type: 'paragraph',
        content: "Here's where Alabama and Georgia homeowners get burned:"
      },
      {
        type: 'heading',
        level: 3,
        content: "Flood Damage"
      },
      {
        type: 'paragraph',
        content: "Standard policies exclude flooding entirely — from any source. Rising water, storm surge, flash floods, overflowing rivers — none covered. You need separate flood insurance through NFIP or private insurers. This matters across both states, not just coastal areas. Birmingham floods. Atlanta floods. Anywhere it rains hard, it can flood."
      },
      {
        type: 'heading',
        level: 3,
        content: "Earthquake Damage"
      },
      {
        type: 'paragraph',
        content: "Not covered under standard policies. Less relevant in our region but worth understanding."
      },
      {
        type: 'heading',
        level: 3,
        content: "Maintenance Issues"
      },
      {
        type: 'paragraph',
        content: "Gradual damage from neglected maintenance — roof leaks you ignored, slow plumbing leaks, pest damage — isn't covered. Insurance covers sudden, accidental events, not homeowner negligence."
      },
      {
        type: 'heading',
        level: 3,
        content: "Sewer Backup"
      },
      {
        type: 'paragraph',
        content: "Water damage from backed-up sewers or drains typically requires a separate endorsement. Worth adding — a sewer backup can cause $10,000+ in damage."
      },
      {
        type: 'heading',
        level: 3,
        content: "High-Value Items"
      },
      {
        type: 'paragraph',
        content: "Jewelry, art, collectibles, firearms — standard policies cap coverage, often at $1,500-$2,500. Scheduled personal property endorsements cover specific high-value items at appraised value."
      },
      {
        type: 'heading',
        level: 2,
        content: "Alabama & Georgia: Regional Risks"
      },
      {
        type: 'paragraph',
        content: "Our states face weather patterns that demand specific coverage attention:"
      },
      {
        type: 'heading',
        level: 3,
        content: "Severe Storms and Tornadoes"
      },
      {
        type: 'paragraph',
        content: "Alabama ranks among the highest states for tornado frequency. Georgia sees fewer but isn't immune. Wind and hail damage is covered under standard policies, but deductibles may differ. Some policies have separate wind/hail deductibles — often 1-2% of dwelling coverage rather than flat dollar amounts. Know your deductible before storm season."
      },
      {
        type: 'heading',
        level: 3,
        content: "Hurricane and Tropical Storm Exposure"
      },
      {
        type: 'paragraph',
        content: "Coastal Alabama (Mobile, Baldwin County) and southern Georgia face direct hurricane risk. Even inland areas experience tropical storm remnants. Wind deductibles may apply during named storms. Flood insurance becomes essential."
      },
      {
        type: 'heading',
        level: 3,
        content: "Hail"
      },
      {
        type: 'paragraph',
        content: "Both states see significant hail, especially in spring. A single hailstorm can require roof replacement across entire neighborhoods. Document your roof's age and condition — insurers may decline claims on older roofs or depreciate payouts."
      },
      {
        type: 'heading',
        level: 3,
        content: "Humidity and Water Damage"
      },
      {
        type: 'paragraph',
        content: "Our climate promotes mold growth. Water damage claims are covered if sudden (burst pipe), but mold remediation limits may apply. Slow leaks and humidity damage from poor ventilation? Not covered."
      },
      {
        type: 'heading',
        level: 2,
        content: "How Much Coverage Do You Need?"
      },
      {
        type: 'heading',
        level: 3,
        content: "Dwelling Coverage"
      },
      {
        type: 'paragraph',
        content: "Enough to completely rebuild your home — not what you paid or current market value. Rebuild costs often exceed purchase price. Get a replacement cost estimate, not a guess."
      },
      {
        type: 'heading',
        level: 3,
        content: "Personal Property"
      },
      {
        type: 'paragraph',
        content: "Inventory your belongings. Most people underestimate what they own. A typical household has $50,000-$100,000 in personal property. Home inventory apps make documentation easier."
      },
      {
        type: 'heading',
        level: 3,
        content: "Liability"
      },
      {
        type: 'paragraph',
        content: "Minimum $300,000 recommended. If you have significant assets, consider an umbrella policy for additional protection."
      },
      {
        type: 'heading',
        level: 3,
        content: "Deductibles"
      },
      {
        type: 'paragraph',
        content: "Higher deductibles lower premiums but increase out-of-pocket costs when you claim. Choose what you can actually afford to pay."
      },
      {
        type: 'heading',
        level: 2,
        content: "How to Save on Home Insurance"
      },
      {
        type: 'list',
        content: [
          "Bundle with Auto: 15-25% savings, often $400-600 annually.",
          "Improve Home Security: Deadbolts, alarm systems, fire/smoke detectors, and security cameras can qualify for discounts.",
          "Upgrade Your Roof: Impact-resistant shingles may qualify for significant discounts in hail-prone areas. When replacing your roof, ask about insurance-rated materials.",
          "Increase Deductibles: Moving from $1,000 to $2,500 deductible can lower premiums 10-15%.",
          "Review Coverage Annually: As home values change, coverage should adjust. Underinsured homes create problems at claim time. Overinsured homes waste money."
        ]
      }
    ],
    faqs: [
      {
        question: "Is flood insurance required in Alabama or Georgia?",
        answer: "Only if your mortgage lender requires it — typically for homes in FEMA-designated flood zones. But flooding happens outside those zones too. Over 20% of flood claims come from outside high-risk areas. If you're near water, low-lying, or in an area with drainage issues, consider flood insurance regardless of requirements."
      },
      {
        question: "What's the difference between actual cash value and replacement cost?",
        answer: "Actual cash value pays what your damaged property was worth at the time of loss — original value minus depreciation. A 10-year-old couch might be worth $100. Replacement cost pays to replace it with a similar new item — maybe $800. Replacement cost coverage costs more but pays significantly better claims."
      },
      {
        question: "How does my roof age affect coverage?",
        answer: "Insurers increasingly limit coverage on older roofs. Some won't insure homes with roofs over 15-20 years old. Others cover older roofs at actual cash value only, meaning depreciated payouts. A 20-year-old roof might only get 20-30% of replacement cost. Know your roof's age and your policy's terms."
      },
      {
        question: "What happens if I'm underinsured when I file a claim?",
        answer: "If your dwelling coverage is significantly below replacement cost, you may face coinsurance penalties. Policies often require you to insure at least 80% of replacement cost. Fall below that, and the insurer may only pay a proportional share of claims — even partial losses."
      },
      {
        question: "Should I file small claims?",
        answer: "Consider carefully. Multiple claims — even small ones — can increase premiums or lead to non-renewal. If damage is close to your deductible, paying out-of-pocket may be smarter long-term."
      },
      {
        question: "How do I document my belongings for insurance purposes?",
        answer: "Walk through your home with your phone, recording video of every room, closet, and cabinet. Open drawers. Note brands and models of electronics and appliances. Store the video in cloud storage or email it to yourself. Update annually or when you make major purchases."
      }
    ],
    relatedArticles: ["auto-insurance-guide", "bundling-home-and-auto", "condo-insurance-guide"],
    internalLinks: [
      { text: "Get a Home Insurance Quote", href: "/contact" },
      { text: "Bundle Home + Auto and Save", href: "/learn/bundling-home-and-auto" },
      { text: "Alabama Insurance Requirements", href: "/learn/alabama-insurance-requirements" },
      { text: "Georgia Insurance Requirements", href: "/learn/georgia-insurance-requirements" }
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
