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
    title: "Alabama Insurance Requirements: Minimums, Penalties & What You Actually Need",
    metaTitle: "Alabama Insurance Requirements: Minimums, Penalties & Coverage Guide | Coffey Agencies",
    metaDescription: "Alabama requires 25/50/25 auto liability minimums, but that's rarely enough. Learn state requirements, penalties for non-compliance, and coverage levels that actually protect you.",
    excerpt: "Alabama law requires certain insurance coverages — but minimums rarely provide adequate protection. This guide covers what Alabama mandates, what penalties apply for non-compliance, and what coverage levels actually protect your finances.",
    category: "State Requirements",
    readTime: "7 min read",
    featured: false,
    content: [
      {
        type: "paragraph",
        content: "Alabama law requires certain insurance coverages — but minimums rarely provide adequate protection. This guide covers what Alabama mandates, what penalties apply for non-compliance, and what coverage levels actually protect your finances."
      },
      {
        type: "heading",
        level: 2,
        content: "Auto Insurance Requirements"
      },
      {
        type: "paragraph",
        content: "Alabama requires liability insurance for all registered vehicles."
      },
      {
        type: "heading",
        level: 3,
        content: "Minimum Liability Coverage (25/50/25)"
      },
      {
        type: "list",
        content: [
          "$25,000 bodily injury per person",
          "$50,000 bodily injury per accident",
          "$25,000 property damage per accident"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "What This Means"
      },
      {
        type: "paragraph",
        content: "If you cause an accident, your insurance pays up to these limits for the other party's injuries and vehicle damage. Beyond these limits, you're personally responsible."
      },
      {
        type: "heading",
        level: 3,
        content: "What's NOT Required"
      },
      {
        type: "list",
        content: [
          "Collision coverage",
          "Comprehensive coverage",
          "Uninsured/underinsured motorist coverage",
          "Medical payments coverage"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "The Problem with Minimums"
      },
      {
        type: "paragraph",
        content: "A serious accident easily exceeds $50,000 in medical bills alone. Property damage to newer vehicles routinely exceeds $25,000. If you cause a multi-car accident, $50,000 covers almost nothing. Alabama's minimums are among the lowest in the country — adequate for legal compliance, inadequate for financial protection."
      },
      {
        type: "heading",
        level: 3,
        content: "Our Recommendation"
      },
      {
        type: "paragraph",
        content: "At minimum, 50/100/50 liability. If you have assets to protect — home equity, savings, retirement accounts — consider 100/300/100. Add uninsured motorist coverage matching your liability limits."
      },
      {
        type: "heading",
        level: 2,
        content: "Penalties for Driving Uninsured"
      },
      {
        type: "paragraph",
        content: "Alabama enforces insurance requirements through its online verification system."
      },
      {
        type: "heading",
        level: 3,
        content: "First Offense"
      },
      {
        type: "list",
        content: [
          "$500 fine",
          "$200 reinstatement fee",
          "Vehicle registration suspension"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Second Offense"
      },
      {
        type: "list",
        content: [
          "$1,000 fine",
          "$400 reinstatement fee",
          "Four-month registration suspension"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Third and Subsequent Offenses"
      },
      {
        type: "list",
        content: [
          "$2,500 fine",
          "Four-month registration suspension",
          "Potential SR-22 requirement"
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "Beyond Legal Penalties"
      },
      {
        type: "paragraph",
        content: "If you cause an accident without insurance, you're personally liable for all damages. Injured parties can sue you directly. Wages can be garnished. Assets can be seized. A single uninsured accident can mean financial devastation."
      },
      {
        type: "heading",
        level: 2,
        content: "Home Insurance Requirements"
      },
      {
        type: "paragraph",
        content: "Alabama doesn't legally require homeowners insurance — but your mortgage lender almost certainly does."
      },
      {
        type: "heading",
        level: 3,
        content: "Lender Requirements"
      },
      {
        type: "paragraph",
        content: "Most mortgages require dwelling coverage at least equal to the loan amount. Lenders are named on policies as \"mortgagee\" so they're notified of changes or cancellations."
      },
      {
        type: "heading",
        level: 3,
        content: "Flood Insurance"
      },
      {
        type: "paragraph",
        content: "If your property is in a FEMA-designated Special Flood Hazard Area and you have a federally-backed mortgage, flood insurance is required. But flooding happens everywhere it rains. Voluntary flood coverage makes sense for many Alabama homes outside official flood zones."
      },
      {
        type: "heading",
        level: 3,
        content: "What Lenders Don't Require (But You Should Consider)"
      },
      {
        type: "list",
        content: [
          "Adequate personal property coverage",
          "Replacement cost vs. actual cash value",
          "Liability coverage beyond minimums",
          "Water backup/sewer coverage",
          "Adequate dwelling coverage (lenders care about loan balance, not full replacement cost)"
        ]
      },
      {
        type: "heading",
        level: 2,
        content: "Renters Insurance Requirements"
      },
      {
        type: "paragraph",
        content: "Alabama doesn't require renters insurance, but many landlords do."
      },
      {
        type: "heading",
        level: 3,
        content: "What Landlord Policies Don't Cover"
      },
      {
        type: "paragraph",
        content: "Your landlord's insurance protects the building — not your belongings, not your liability. If a fire destroys your apartment, your landlord's insurance rebuilds the unit. Your furniture, electronics, clothing? Unprotected without renters insurance."
      },
      {
        type: "heading",
        level: 3,
        content: "Why It Matters"
      },
      {
        type: "paragraph",
        content: "Renters insurance typically costs $15-25/month. For that, you get:"
      },
      {
        type: "list",
        content: [
          "Personal property protection",
          "Liability coverage (someone slips in your apartment)",
          "Additional living expenses if your unit becomes uninhabitable"
        ]
      },
      {
        type: "heading",
        level: 2,
        content: "Condo Insurance Requirements"
      },
      {
        type: "paragraph",
        content: "Condo insurance needs depend on your HOA's master policy."
      },
      {
        type: "heading",
        level: 3,
        content: "Master Policy Types"
      },
      {
        type: "list",
        content: [
          "Bare Walls: HOA covers structure only. You insure everything inside — walls, flooring, cabinets, fixtures, plus belongings and liability.",
          "All-In: HOA covers interior finishes as originally built. You insure your upgrades, belongings, and liability."
        ]
      },
      {
        type: "heading",
        level: 3,
        content: "What You Always Need"
      },
      {
        type: "list",
        content: [
          "Personal property coverage",
          "Liability coverage",
          "Loss assessment coverage (if HOA has a major claim and assesses owners)",
          "Improvements and betterments coverage"
        ]
      },
      {
        type: "heading",
        level: 2,
        content: "Alabama-Specific Considerations"
      },
      {
        type: "heading",
        level: 3,
        content: "Severe Weather"
      },
      {
        type: "paragraph",
        content: "Alabama ranks high nationally for tornado activity. Wind and hail damage claims are common. Understand your policy's wind/hail deductible — it may be a percentage (1-2% of dwelling coverage) rather than a flat dollar amount."
      },
      {
        type: "heading",
        level: 3,
        content: "Uninsured Drivers"
      },
      {
        type: "paragraph",
        content: "Alabama's uninsured motorist rate exceeds 18% — among the highest in the country. Uninsured/underinsured motorist coverage isn't required but is essential. When an uninsured driver hits you, UM coverage pays your medical bills and vehicle repairs."
      },
      {
        type: "heading",
        level: 3,
        content: "Flood Risk"
      },
      {
        type: "paragraph",
        content: "Alabama isn't just coastal. Inland flooding from heavy rain, poor drainage, and river overflow affects communities statewide. Standard policies exclude flood damage entirely."
      }
    ],
    faqs: [
      {
        question: "What's an SR-22 and when is it required?",
        answer: "An SR-22 is a certificate proving you carry required insurance. Alabama may require SR-22 after driving uninsured, DUI convictions, or multiple violations. Your insurer files it with the state. SR-22 requirements typically last three years and significantly increase premiums."
      },
      {
        question: "Can I register a vehicle without insurance in Alabama?",
        answer: "No. Alabama's online verification system checks insurance status during registration. Uninsured vehicles cannot be registered or renewed."
      },
      {
        question: "Does Alabama require uninsured motorist coverage?",
        answer: "No, but it should. With 18%+ of Alabama drivers uninsured, UM coverage is essential protection. It costs relatively little and protects you when irresponsible drivers don't."
      },
      {
        question: "What happens if my insurance lapses?",
        answer: "Alabama's verification system may flag the lapse. You could face fines and registration suspension. More importantly, you're driving without financial protection — one accident could mean personal bankruptcy."
      },
      {
        question: "Is umbrella insurance worth it?",
        answer: "If you have assets beyond your home — savings, investments, retirement accounts — umbrella insurance adds $1-2 million in liability protection for roughly $200-400/year. It's one of the best values in insurance."
      }
    ],
    relatedArticles: ["georgia-insurance-requirements", "auto-insurance-guide", "home-insurance-guide"],
    internalLinks: [
      { text: "Get an Auto Insurance Quote", href: "/contact" },
      { text: "Get a Home Insurance Quote", href: "/contact" },
      { text: "Georgia Insurance Requirements", href: "/learn/georgia-insurance-requirements" },
      { text: "Understanding Uninsured Motorist Coverage", href: "/learn/auto-insurance-guide" }
    ]
  },
  {
    slug: "georgia-insurance-requirements",
    title: "Georgia Insurance Requirements: Minimums, Penalties & What You Actually Need",
    metaTitle: "Georgia Insurance Requirements: Minimums, Penalties & Coverage Guide | Coffey Agencies",
    metaDescription: "Georgia requires 25/50/25 auto liability minimums with optional PIP. Learn state requirements, GEICS enforcement, penalties for non-compliance, and coverage that protects you.",
    excerpt: "Georgia requires specific insurance coverages — but state minimums leave significant gaps. This guide covers Georgia's requirements, penalties for non-compliance, and coverage levels that actually protect you and your family.",
    category: "State Requirements",
    readTime: "7 min read",
    featured: false,
    content: [
      {
        type: "paragraph",
        content: "Georgia requires specific insurance coverages — but state minimums leave significant gaps. This guide covers Georgia's requirements, penalties for non-compliance, and coverage levels that actually protect you and your family."
      },
      {
        type: "heading",
        content: "Auto Insurance Requirements"
      },
      {
        type: "paragraph",
        content: "Georgia requires liability insurance and offers optional PIP coverage."
      },
      {
        type: "paragraph",
        content: "Minimum Liability Coverage (25/50/25):"
      },
      {
        type: "list",
        content: [
          "$25,000 bodily injury per person",
          "$50,000 bodily injury per accident",
          "$25,000 property damage per accident"
        ]
      },
      {
        type: "paragraph",
        content: "**Optional Personal Injury Protection (PIP):** Georgia doesn't require PIP, but insurers must offer it. PIP covers medical expenses and lost wages regardless of fault — useful for faster claim resolution."
      },
      {
        type: "paragraph",
        content: "What's NOT Required:"
      },
      {
        type: "list",
        content: [
          "Collision coverage",
          "Comprehensive coverage",
          "Uninsured/underinsured motorist coverage (but insurers must offer it)",
          "Medical payments coverage"
        ]
      },
      {
        type: "paragraph",
        content: "**The Problem with Minimums:** $25,000 property damage barely covers a new sedan's value — and does nothing for higher-end vehicles. $50,000 per accident covers one serious injury. Medical costs in metro Atlanta routinely exceed these limits. Minimums satisfy the law, not your financial protection."
      },
      {
        type: "paragraph",
        content: "**Our Recommendation:** 50/100/50 minimum for most drivers. 100/300/100 if you have significant assets. Always add UM/UIM coverage matching your liability limits — Georgia's uninsured rate hovers around 12%."
      },
      {
        type: "heading",
        content: "Penalties for Driving Uninsured"
      },
      {
        type: "paragraph",
        content: "Georgia enforces insurance through its Electronic Insurance Compliance System (GEICS)."
      },
      {
        type: "paragraph",
        content: "First Offense:"
      },
      {
        type: "list",
        content: [
          "$200 fine",
          "$60 reinstatement fee",
          "Registration suspension",
          "License plate surrender"
        ]
      },
      {
        type: "paragraph",
        content: "Second Offense (within 5 years):"
      },
      {
        type: "list",
        content: [
          "$500 fine",
          "$60 reinstatement fee",
          "90-day registration suspension"
        ]
      },
      {
        type: "paragraph",
        content: "Third and Subsequent Offenses:"
      },
      {
        type: "list",
        content: [
          "$1,000 fine",
          "6-month registration suspension",
          "Possible SR-22 requirement"
        ]
      },
      {
        type: "paragraph",
        content: "**Super Speeder + No Insurance:** Georgia's \"Super Speeder\" law adds $200 to speeding fines for excessive speed. Combine that with no insurance, and penalties multiply quickly."
      },
      {
        type: "paragraph",
        content: "**Beyond Legal Penalties:** Without insurance, you're personally liable for all accident damages. Georgia allows injured parties to sue you directly. Judgments can follow you for years, affecting credit, wages, and assets."
      },
      {
        type: "heading",
        content: "Home Insurance Requirements"
      },
      {
        type: "paragraph",
        content: "Georgia doesn't legally require homeowners insurance — but mortgage lenders do."
      },
      {
        type: "paragraph",
        content: "**Lender Requirements:** Mortgages require dwelling coverage at minimum equal to the loan balance. Many lenders require replacement cost coverage."
      },
      {
        type: "paragraph",
        content: "**Flood Insurance:** Required for properties in FEMA flood zones with federally-backed mortgages. But Georgia sees significant flooding outside designated zones — Atlanta's flash flooding demonstrates this regularly. Consider flood insurance even if not required."
      },
      {
        type: "paragraph",
        content: "What Lenders Don't Require (But You Should Consider):"
      },
      {
        type: "list",
        content: [
          "Adequate personal liability coverage",
          "Replacement cost on personal property",
          "Water backup coverage",
          "Updated dwelling coverage reflecting current rebuild costs"
        ]
      },
      {
        type: "heading",
        content: "Renters Insurance Requirements"
      },
      {
        type: "paragraph",
        content: "Georgia doesn't require renters insurance, but many landlords mandate it in lease agreements."
      },
      {
        type: "paragraph",
        content: "**Why It Matters:** Your landlord's policy covers the building structure — not your belongings, not your liability. A break-in, fire, or water leak could destroy everything you own with no compensation."
      },
      {
        type: "paragraph",
        content: "What You Get:"
      },
      {
        type: "list",
        content: [
          "Personal property protection (theft, fire, water damage)",
          "Liability coverage",
          "Additional living expenses if displaced",
          "Typically $15-25/month — some of the cheapest protection available"
        ]
      },
      {
        type: "heading",
        content: "Condo Insurance Requirements"
      },
      {
        type: "paragraph",
        content: "Georgia condo owners need coverage beyond the HOA master policy."
      },
      {
        type: "paragraph",
        content: "Understanding Master Policies:"
      },
      {
        type: "list",
        content: [
          "All-In Coverage: HOA covers structure including interior finishes as originally built",
          "Bare Walls Coverage: HOA covers structure only; you insure interior finishes, fixtures, appliances"
        ]
      },
      {
        type: "paragraph",
        content: "What You Need Regardless:"
      },
      {
        type: "list",
        content: [
          "Personal property coverage",
          "Personal liability coverage",
          "Loss assessment coverage",
          "Improvements and upgrades coverage"
        ]
      },
      {
        type: "paragraph",
        content: "Review your HOA's master policy to understand where their coverage ends and yours begins."
      },
      {
        type: "heading",
        content: "Georgia-Specific Considerations"
      },
      {
        type: "paragraph",
        content: "**Metro Atlanta Traffic:** Gwinnett, Fulton, Cobb, and DeKalb counties see significantly higher accident rates than rural Georgia. Higher density means higher risk — and higher premiums. Adequate liability limits matter more in metro areas."
      },
      {
        type: "paragraph",
        content: "**Severe Weather:** Georgia experiences severe thunderstorms, tornadoes, and tropical storm impacts. Hail damage claims spike in spring. Coastal and southern Georgia face hurricane exposure. Understanding wind/hail deductibles is essential — they're often percentage-based, not flat amounts."
      },
      {
        type: "paragraph",
        content: "**Uninsured Drivers:** Georgia's uninsured rate is approximately 12% — lower than Alabama but still significant. UM/UIM coverage protects you when other drivers can't pay."
      },
      {
        type: "paragraph",
        content: "**Flooding:** Atlanta's aging infrastructure and rapid development create flash flood risk across the metro. Coastal Georgia faces storm surge. Standard policies exclude flood damage entirely — separate flood insurance is essential for many Georgia homes."
      }
    ],
    faqs: [
      {
        question: "What's a Georgia SR-22 and when do I need one?",
        answer: "An SR-22 is a certificate proving you maintain required insurance. Georgia may require SR-22 after DUI conviction, driving without insurance, or accumulating too many points. Your insurer files it with the Georgia DDS. Requirements typically last three years and come with higher premiums."
      },
      {
        question: "How does Georgia's GEICS system work?",
        answer: "Georgia's Electronic Insurance Compliance System automatically verifies insurance status for registered vehicles. If your insurer reports a policy cancellation or lapse, the state is notified immediately. You'll receive a notice to prove coverage or face registration suspension."
      },
      {
        question: "Does Georgia require uninsured motorist coverage?",
        answer: "No, but insurers must offer it, and you must sign a written rejection to decline. Given Georgia's 12% uninsured driver rate, declining UM coverage is penny-wise and pound-foolish. It costs little and protects significantly."
      },
      {
        question: "What if I let my Georgia insurance lapse?",
        answer: "GEICS flags the lapse automatically. You'll receive notice to prove coverage within 30 days or face fines and registration suspension. Even brief lapses create problems — and leave you unprotected."
      },
      {
        question: "Is PIP coverage worth it in Georgia?",
        answer: "PIP covers your medical expenses and lost wages regardless of fault. It's useful for faster access to funds after an accident without waiting for fault determination. Costs are modest. Worth considering, especially if your health insurance has high deductibles."
      }
    ],
    relatedArticles: ["alabama-insurance-requirements", "auto-insurance-guide", "home-insurance-guide"],
    internalLinks: [
      { text: "Get an Auto Insurance Quote", href: "/contact" },
      { text: "Get a Home Insurance Quote", href: "/contact" },
      { text: "Alabama Insurance Requirements", href: "/learn/alabama-insurance-requirements" },
      { text: "Understanding Uninsured Motorist Coverage", href: "/learn/auto-insurance-guide" }
    ]
  },
  {
    slug: "bundling-home-and-auto",
    title: "Bundling Home and Auto Insurance: How to Save Up to $600/Year",
    metaTitle: "Bundling Home and Auto Insurance: Save Up to $600/Year | Coffey Agencies",
    metaDescription: "Bundling home and auto insurance saves 15-25% on combined premiums — often $400-600 annually. Learn how bundling works and whether it's right for you.",
    excerpt: "Bundling home and auto insurance is the simplest way to save money without sacrificing coverage. Most families save 15-25% on combined premiums — often $400-600 annually.",
    category: "Tips & Advice",
    readTime: "6 min read",
    featured: false,
    content: [
      {
        type: "paragraph",
        content: "Bundling home and auto insurance is the simplest way to save money without sacrificing coverage. Most families save 15-25% on combined premiums — often $400-600 annually. But bundling offers more than just savings. Here's how it works and whether it's right for you."
      },
      {
        type: "heading",
        content: "What Is Bundling?"
      },
      {
        type: "paragraph",
        content: "Bundling means purchasing multiple insurance policies from the same company. The most common bundle combines homeowners and auto insurance, but you can also add:"
      },
      {
        type: "list",
        content: [
          "Renters insurance",
          "Condo insurance",
          "Life insurance",
          "Umbrella liability policies"
        ]
      },
      {
        type: "paragraph",
        content: "Each additional policy typically increases your multi-policy discount."
      },
      {
        type: "heading",
        content: "How Much Can You Save?"
      },
      {
        type: "paragraph",
        content: "Savings vary by insurer and location, but typical discounts include:"
      },
      {
        type: "paragraph",
        content: "**Home + Auto Bundle:** 15-25% combined discount — $400-600/year for average Alabama and Georgia families"
      },
      {
        type: "paragraph",
        content: "**Adding Renters or Condo Insurance:** 5-10% additional discount on auto"
      },
      {
        type: "paragraph",
        content: "**Adding Life Insurance:** 5-10% additional discount on package"
      },
      {
        type: "paragraph",
        content: "**Example:**"
      },
      {
        type: "list",
        content: [
          "Auto insurance: $1,400/year standalone",
          "Home insurance: $1,600/year standalone",
          "Total standalone: $3,000/year",
          "Bundled with 20% discount: $2,400/year",
          "Annual savings: $600"
        ]
      },
      {
        type: "heading",
        content: "Benefits Beyond Savings"
      },
      {
        type: "paragraph",
        content: "**Single Point of Contact:** One agency handles all your policies. One phone call answers any question. One team knows your entire insurance picture."
      },
      {
        type: "paragraph",
        content: "**Coordinated Coverage:** Bundled policies can work together. If a tree falls on your car in your driveway, claims coordination is smoother when one company handles both."
      },
      {
        type: "paragraph",
        content: "**One Renewal Date:** Many bundlers align renewal dates, making annual reviews simpler."
      },
      {
        type: "paragraph",
        content: "**Simplified Billing:** One bill, one payment, one date to remember."
      },
      {
        type: "paragraph",
        content: "**Loyalty Benefits:** Long-term bundled customers often receive additional discounts and forgiveness programs."
      },
      {
        type: "heading",
        content: "When Bundling Makes Sense"
      },
      {
        type: "paragraph",
        content: "Best Candidates for Bundling:"
      },
      {
        type: "list",
        content: [
          "Homeowners with vehicles",
          "Renters who want simple coverage",
          "Families with multiple cars and a home",
          "Anyone who values convenience and simplicity"
        ]
      },
      {
        type: "paragraph",
        content: "Bundling Works When:"
      },
      {
        type: "list",
        content: [
          "The bundled price beats shopping separately",
          "The insurer has strong claims service",
          "Coverage options meet your needs",
          "You're getting adequate coverage, not just cheap coverage"
        ]
      },
      {
        type: "heading",
        content: "When to Shop Separately"
      },
      {
        type: "paragraph",
        content: "Bundling isn't always the best deal. Consider separate policies when:"
      },
      {
        type: "paragraph",
        content: "**Significant Rate Differences Exist:** Sometimes one insurer offers dramatically better home rates while another beats their auto pricing. The spread may exceed bundle discounts."
      },
      {
        type: "paragraph",
        content: "**Specialty Needs Arise:** High-value homes, classic cars, or unusual risks may be better served by specialty insurers."
      },
      {
        type: "paragraph",
        content: "**Claims History Issues:** If you've filed claims with one policy type but not the other, bundling might increase the clean policy's rate."
      },
      {
        type: "paragraph",
        content: "**Always Run the Numbers:** Get bundled quotes AND separate quotes. The math tells the truth. But factor in convenience value — managing two companies has hidden costs too."
      },
      {
        type: "heading",
        content: "How to Bundle with Coffey Agencies"
      },
      {
        type: "paragraph",
        content: "**Request a Quote:** Tell us what you need — auto, home, condo, renters, life. We'll build options."
      },
      {
        type: "paragraph",
        content: "**Review Your Options:** We show you bundled pricing versus separate pricing. You see exactly what you save."
      },
      {
        type: "paragraph",
        content: "**Get Covered:** Choose your bundle and coverage activates — often the same day."
      }
    ],
    faqs: [
      {
        question: "Can I bundle if I have a condo or rent instead of own a home?",
        answer: "Absolutely. Renters insurance and condo insurance bundle with auto insurance just like homeowners policies. Discounts are similar."
      },
      {
        question: "Do I have to bundle all policies with one company?",
        answer: "No. You can bundle some and keep others separate. But maximum discounts come from consolidating."
      },
      {
        question: "What if I only need auto insurance right now?",
        answer: "Start with auto. When you buy a home or need renters coverage, add it to your existing policy for immediate bundle discounts."
      },
      {
        question: "Can I bundle life insurance too?",
        answer: "Yes. Many insurers offer additional discounts when you add life insurance to a home/auto bundle."
      },
      {
        question: "Will bundling lock me into lower coverage?",
        answer: "No. Bundling affects pricing, not coverage options. You still choose coverage levels for each policy. Never sacrifice adequate coverage for a bundle discount."
      }
    ],
    relatedArticles: ["auto-insurance-guide", "home-insurance-guide", "renters-insurance-guide"],
    internalLinks: [
      { text: "Get a Bundled Quote", href: "/contact" },
      { text: "Auto Insurance Guide", href: "/learn/auto-insurance-guide" },
      { text: "Home Insurance Guide", href: "/learn/home-insurance-guide" },
      { text: "Renters Insurance Guide", href: "/learn/renters-insurance-guide" }
    ]
  }
];
