/**
 * ═══════════════════════════════════════════════════════════════
 *  SHARPSIGMA — ARTICLES DATA FILE
 *  
 *  HOW TO ADD A NEW ARTICLE:
 *  1. Copy the template block at the bottom of this file
 *  2. Fill in your content (title, excerpt, content blocks)
 *  3. Save the file
 *  4. Commit and push to GitHub — article appears automatically
 *
 *  CONTENT BLOCK TYPES:
 *  { type: "paragraph",   text: "Your text here" }
 *  { type: "heading",     text: "Section Title" }
 *  { type: "subheading",  text: "Smaller Section Title" }
 *  { type: "image",       src: "https://url-to-image.jpg", caption: "Optional caption" }
 *  { type: "video",       url: "https://www.youtube.com/embed/VIDEO_ID", caption: "Optional" }
 *  { type: "quote",       text: "A pullquote or highlight from the article" }
 *  { type: "callout",     text: "A tip, warning, or important note" }
 *  { type: "list",        style: "bullet",   items: ["Item one", "Item two"] }
 *  { type: "list",        style: "numbered", items: ["Step one", "Step two"] }
 *  { type: "table",       headers: ["Col 1","Col 2"], rows: [["A","B"],["C","D"]] }
 *  { type: "divider" }
 *
 *  IMAGE TIPS:
 *  - Paste any public image URL directly into "src"
 *  - Or upload to Cloudinary (free), Imgur, or your own hosting
 *  - Recommended width: 1200px or wider for best quality
 *
 *  VIDEO TIPS:
 *  - YouTube: replace youtu.be/ID or watch?v=ID with youtube.com/embed/ID
 *  - Vimeo: use player.vimeo.com/video/ID
 *
 *  CATEGORIES: "engineering" | "operations" | "supply-chain" | "cost"
 *
 * ═══════════════════════════════════════════════════════════════
 */

const SHARPSIGMA_ARTICLES = [

  // ─────────────────────────────────────────────────────────────
  //  ARTICLE 1
  // ─────────────────────────────────────────────────────────────
  {
    id: "why-cm-relationships-fail",
    title: "Why Most Contract Manufacturing Relationships Fail in the First Year",
    category: "supply-chain",
    categoryLabel: "Supply Chain",
    date: "January 2025",
    readTime: "8 min read",
    featured: true,
    excerpt: "Most CM relationships don't fail because of bad manufacturing. They fail because of bad structuring. Here's what goes wrong — and how to prevent it before the first order ships.",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    content: [
      {
        type: "paragraph",
        text: "In our experience, the majority of contract manufacturing relationships that end badly don't fail at the factory floor. They fail in the months before production even starts — in how the relationship is scoped, structured, and agreed."
      },
      {
        type: "paragraph",
        text: "The pattern is almost always the same: a procurement team under pressure to secure supply finds a manufacturer who can hit the price point, gets a sample approved, and ships a purchase order. Twelve months later, they're dealing with quality escapes, missed deliveries, and a supplier who doesn't answer calls on Fridays."
      },
      {
        type: "quote",
        text: "The majority of CM relationship failures are determined in the qualification phase — not the production phase."
      },
      {
        type: "heading",
        text: "The Six Most Common Failure Modes"
      },
      {
        type: "list",
        style: "numbered",
        items: [
          "Qualification based on samples, not process capability — a supplier can produce 10 perfect samples and still be unable to hold tolerance at volume",
          "No quality agreement — verbal commitments about inspection, traceability, and non-conformance handling are worthless the moment something goes wrong",
          "Price negotiated before understanding true cost structure — a supplier who wins on price but can't sustain margins will cut corners to recover them",
          "No defined escalation path — when a problem occurs, nobody knows who calls whom, how quickly, or what authority they have to stop the line",
          "First article treated as a formality — rushed FAI processes miss the process issues that become production issues at volume",
          "No ramp oversight — the transition from qualification samples to production volume is where most quality problems first appear, and most buyers aren't watching"
        ]
      },
      {
        type: "heading",
        text: "What Good Structuring Actually Looks Like"
      },
      {
        type: "paragraph",
        text: "A well-structured CM relationship is built on three documents that most buyers never produce: a technical quality agreement, a capacity and lead time commitment framework, and a defined improvement roadmap."
      },
      {
        type: "paragraph",
        text: "The quality agreement goes beyond ISO clause references. It specifies exactly what inspection happens, at what frequency, by whom, with what documentation, and what constitutes a hold-and-notify event versus a ship-and-document event. Vagueness here is expensive."
      },
      {
        type: "callout",
        text: "Practical tip: Before signing any CM agreement, ask the supplier to walk you through their last three non-conformance events and how they were handled. The answer tells you everything about how they'll handle yours."
      },
      {
        type: "table",
        headers: ["Failure Mode", "Root Cause", "Prevention"],
        rows: [
          ["Quality escapes at volume", "Process, not sample, was never qualified", "Capability study (Cpk) before production release"],
          ["Missed delivery commitments", "Capacity commitment was never documented", "Written capacity reservation with lead time SLA"],
          ["Price creep after 6 months", "Supplier margin was unsustainable from the start", "Should-cost analysis before price agreement"],
          ["No response to NCRs", "Escalation path was never defined", "Quality agreement with response time requirements"],
          ["Relationship breakdown", "No review cadence established", "Quarterly business review structure from day one"]
        ]
      },
      {
        type: "heading",
        text: "The Ramp-Up Phase Is Where Buyers Stop Watching"
      },
      {
        type: "paragraph",
        text: "First article approval is celebrated as a milestone. In reality, it's the beginning of the hardest phase — the transition to production volume. Process parameters that held for 50 pieces behave differently at 5,000. Tooling wears. Set-up time gets compressed. Operators take shortcuts that work until they don't."
      },
      {
        type: "paragraph",
        text: "The buyers who don't have quality escapes in production are the ones who maintained active oversight through the first three production runs. Not because they distrusted their supplier — but because problems found at run three are categorically less expensive than problems found at run thirty."
      },
      {
        type: "heading",
        text: "What To Do Before Your Next CM Engagement"
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Audit the process, not just the samples — visit the facility before releasing production",
          "Produce a written quality agreement before the first PO, not after the first problem",
          "Understand the supplier's cost structure — a margin-squeezed supplier is a reliability risk",
          "Define your escalation path in writing with time commitments on both sides",
          "Plan for ramp oversight — schedule your first three production run reviews before they happen",
          "Build a quarterly business review structure from day one, not when things start going wrong"
        ]
      },
      {
        type: "paragraph",
        text: "None of this is complicated. It's the work that most procurement timelines don't budget for — and that most production problems trace back to. The good news is that doing it properly at the start costs a fraction of what fixing it costs later."
      },
      {
        type: "callout",
        text: "SharpSigma manages the full CM lifecycle — from requirements definition and partner search through qualification, contract structuring, launch oversight, and serial production management. If you're establishing or rebuilding a CM relationship, talk to us first."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  //  ARTICLE 2
  // ─────────────────────────────────────────────────────────────
  {
    id: "should-cost-analysis-guide",
    title: "Should-Cost Analysis: How to Know If You're Overpaying for Manufactured Parts",
    category: "cost",
    categoryLabel: "Cost Engineering",
    date: "January 2025",
    readTime: "6 min read",
    featured: false,
    excerpt: "Should-costing is one of the most powerful and least-used tools in manufacturing procurement. Here's what it is, how it works, and why most buyers who skip it are paying 15–30% more than they should be.",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
    content: [
      {
        type: "paragraph",
        text: "Should-cost analysis is the discipline of modelling what a part or assembly should cost to manufacture — from the ground up, based on materials, processes, labour, overhead, and margin — independently of what any supplier quotes you."
      },
      {
        type: "paragraph",
        text: "It is one of the most consistently valuable tools in manufacturing procurement. And it is almost universally underused, because most procurement teams don't have the manufacturing knowledge to build the model."
      },
      {
        type: "quote",
        text: "If you don't know what a part should cost, you have no basis for negotiation. You're just comparing quotes from suppliers who all have the same incentive to charge as much as the market will bear."
      },
      {
        type: "heading",
        text: "What Goes Into a Should-Cost Model"
      },
      {
        type: "paragraph",
        text: "A rigorous should-cost model builds up the cost of a part from its fundamental components. For a machined component, this typically means:"
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Raw material cost — alloy, stock size, buy weight vs. finished weight, material utilisation",
          "Machining time — setup time, cycle time per operation, number of operations, machine hourly rate",
          "Tooling cost — amortised across expected production volume",
          "Quality and inspection — in-process and final inspection time, any CMM or specialised gauging",
          "Overhead allocation — facility, equipment depreciation, energy",
          "Labour burden — direct and indirect labour at regional rates",
          "Supplier margin — a reasonable commercial margin, not zero"
        ]
      },
      {
        type: "table",
        headers: ["Cost Element", "Typical % of Total", "Where Variance Hides"],
        rows: [
          ["Raw Material", "25–45%", "Stock utilisation, alloy grade, buy weight"],
          ["Machining", "30–50%", "Cycle time assumptions, setup amortisation"],
          ["Quality / Inspection", "5–15%", "Inspection frequency, CMM vs. manual gauging"],
          ["Overhead", "10–20%", "Facility allocation method"],
          ["Margin", "8–15%", "Competitive environment, relationship length"]
        ]
      },
      {
        type: "heading",
        text: "Where Overpayment Typically Hides"
      },
      {
        type: "paragraph",
        text: "In our experience, the most common source of overpayment in machined and fabricated parts is not margin — it's machining time assumptions. Suppliers build quotes on conservative cycle time estimates, often from initial programming that was never optimised. A part quoted at 45 minutes machining time that actually runs in 28 minutes is carrying 17 minutes of phantom cost in every unit you buy."
      },
      {
        type: "paragraph",
        text: "The second most common source is setup amortisation at low volumes. A supplier quoting at 500 units per year is amortising setup time and tooling across a small denominator. A should-cost model shows you exactly what the per-unit cost would be at 2,000 units — which becomes the basis for a volume commitment negotiation."
      },
      {
        type: "callout",
        text: "A should-cost model doesn't mean you pay zero margin. It means you know what a fair price is — and you can negotiate from knowledge rather than guesswork."
      },
      {
        type: "heading",
        text: "How to Use a Should-Cost Model in Practice"
      },
      {
        type: "list",
        style: "numbered",
        items: [
          "Build the model before you issue the RFQ — this gives you a baseline before any supplier influences your thinking",
          "Use it to set your target price band, not a single number — a range of ±10% around your model is realistic",
          "When quotes come in above your model, ask for a cost breakdown — a good supplier will provide one, and the conversation it starts is almost always valuable",
          "Use variance from your model to identify design changes — if material cost dominates, a design-for-cost review may reduce it significantly",
          "Re-run the model annually — material prices, labour rates, and process efficiency all change"
        ]
      },
      {
        type: "paragraph",
        text: "Should-cost modelling is not about squeezing suppliers unfairly. It's about having an informed, evidence-based view of cost that makes you a better buyer and enables better conversations with the manufacturers who supply you."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  //  ARTICLE 3
  // ─────────────────────────────────────────────────────────────
  {
    id: "greenfield-vs-brownfield",
    title: "Greenfield vs Brownfield Manufacturing: How to Choose and What Nobody Tells You",
    category: "operations",
    categoryLabel: "Operations",
    date: "February 2025",
    readTime: "7 min read",
    featured: false,
    excerpt: "The greenfield vs brownfield decision is one of the most consequential in manufacturing — and most frameworks for making it miss the factors that matter most in practice.",
    heroImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80",
    content: [
      {
        type: "paragraph",
        text: "Greenfield and brownfield are terms that get used loosely in manufacturing strategy discussions. Used precisely, greenfield means building and equipping a manufacturing operation from a blank site — no inherited infrastructure, no legacy equipment, no existing workforce to retrain. Brownfield means transforming an existing facility — with all the constraints, assets, and history that come with it."
      },
      {
        type: "paragraph",
        text: "Both have been presented as the obviously correct choice in various consulting frameworks. In practice, neither is universally better. The right choice depends on factors that most decision frameworks underweight."
      },
      {
        type: "quote",
        text: "Greenfield gives you control. Brownfield gives you a head start. Which matters more depends entirely on what you're trying to build and how fast you need it running."
      },
      {
        type: "heading",
        text: "What the Standard Frameworks Miss"
      },
      {
        type: "paragraph",
        text: "Most greenfield vs brownfield analysis focuses on capital cost, timeline, and flexibility. These are real factors. But two factors that matter just as much in practice are almost always underweighted:"
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Workforce availability and ramp time — a greenfield facility in a location without a manufacturing workforce base is a capital investment that cannot produce at capacity for 18–24 months, regardless of how good the equipment is",
          "Cultural reset value — a brownfield transformation requires changing how people work. The difficulty of that change is almost always underestimated in the business case"
        ]
      },
      {
        type: "table",
        headers: ["Factor", "Greenfield Advantage", "Brownfield Advantage"],
        rows: [
          ["Layout & flow", "Optimised from scratch", "Existing infrastructure reduces capital"],
          ["Equipment", "Latest technology, right-sized", "Existing equipment reduces upfront cost"],
          ["Workforce", "Hire to culture", "Existing skills and knowledge base"],
          ["Timeline to production", "Longer (12–24+ months)", "Shorter — production can continue during transformation"],
          ["Quality culture", "Build it right from day one", "Must overcome embedded habits"],
          ["Flexibility", "Design for future needs", "Constrained by existing structure"],
          ["Risk", "Execution risk on everything", "Known constraints, known risks"]
        ]
      },
      {
        type: "heading",
        text: "When Greenfield Is the Right Answer"
      },
      {
        type: "paragraph",
        text: "Greenfield makes sense when the strategic intent is a step-change in capability, quality culture, or technology — not an incremental improvement. If you're reshoring production that has been running offshore under different quality standards, inheriting an existing facility and its embedded practices may undermine the very objectives of the move."
      },
      {
        type: "paragraph",
        text: "Greenfield also makes sense when layout optimisation is a primary value driver. Facilities that were designed for different products, different volumes, or different processes carry material handling inefficiency that cannot be designed out of a brownfield site."
      },
      {
        type: "heading",
        text: "When Brownfield Is the Right Answer"
      },
      {
        type: "paragraph",
        text: "Brownfield makes sense when you need production continuity, when capital is constrained, or when the existing facility has assets — equipment, certifications, customer qualifications — whose replacement cost exceeds the efficiency gain of starting fresh."
      },
      {
        type: "callout",
        text: "The most important brownfield question: what are you actually keeping? A clear-eyed inventory of which existing assets create value vs. which create constraint changes the analysis fundamentally."
      },
      {
        type: "heading",
        text: "The Question Most Decisions Skip"
      },
      {
        type: "paragraph",
        text: "The most important question in the greenfield vs brownfield decision is rarely asked directly: what is the actual cost of the constraints you're inheriting? For brownfield, this means honestly quantifying the cost of legacy equipment inefficiency, cultural transformation difficulty, and layout compromise — not just the capital saving of not buying new equipment."
      },
      {
        type: "paragraph",
        text: "When that analysis is done properly, brownfield decisions that looked obviously cheaper sometimes flip. And greenfield decisions that looked obviously better sometimes reveal workforce and timeline risks that make brownfield the pragmatic choice."
      },
      {
        type: "paragraph",
        text: "The right answer is always specific to the operation, the location, the product, and the strategic intent. What doesn't work is applying a generic framework to a decision that deserves a specific one."
      }
    ]
  }

  // ─────────────────────────────────────────────────────────────
  //  ADD NEW ARTICLES BELOW THIS LINE
  //  Copy the template block below and fill in your content
  // ─────────────────────────────────────────────────────────────

  /*
  ════════════════════════════════════════
   NEW ARTICLE TEMPLATE — COPY FROM HERE
  ════════════════════════════════════════

  ,{
    id: "your-article-url-slug",              // URL-friendly, lowercase, hyphens only
    title: "Your Article Title Here",
    category: "engineering",                  // engineering | operations | supply-chain | cost
    categoryLabel: "Engineering",             // Display label for the category
    date: "March 2025",
    readTime: "5 min read",
    featured: false,                          // Set true to feature on hub page (only one at a time)
    excerpt: "A 1–2 sentence summary shown on the article card. Make it compelling.",
    heroImage: "https://your-image-url.jpg",  // Wide image, ideally 1200x600px
    content: [
      {
        type: "paragraph",
        text: "Your opening paragraph. Set the context and hook the reader."
      },
      {
        type: "heading",
        text: "First Section Heading"
      },
      {
        type: "paragraph",
        text: "Section content here."
      },
      {
        type: "image",
        src: "https://your-image-url.jpg",
        caption: "Optional image caption"
      },
      {
        type: "quote",
        text: "A compelling pullquote from the article."
      },
      {
        type: "callout",
        text: "A tip, warning, or important takeaway."
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "First point",
          "Second point",
          "Third point"
        ]
      },
      {
        type: "table",
        headers: ["Column 1", "Column 2", "Column 3"],
        rows: [
          ["Row 1 A", "Row 1 B", "Row 1 C"],
          ["Row 2 A", "Row 2 B", "Row 2 C"]
        ]
      },
      {
        type: "video",
        url: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
        caption: "Optional video caption"
      },
      {
        type: "paragraph",
        text: "Closing paragraph. End with a clear takeaway or call to action."
      }
    ]
  }

  ════════════════════════════════════════
   END TEMPLATE
  ════════════════════════════════════════
  */

];
