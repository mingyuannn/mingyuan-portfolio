# Mingyuan Pang Portfolio — Design Ideas

## Design Approach Options

<response>
<idea>
**Design Movement**: Editorial Minimalism meets Japanese Wabi-Sabi

**Core Principles**:
1. Typographic hierarchy as the primary visual structure — large, confident type carries the page
2. Generous negative space that lets content breathe and creates rhythm
3. Monochromatic base with a single warm accent (terracotta/rust) for intentional emphasis
4. Asymmetric layouts that feel curated, not templated

**Color Philosophy**:
- Background: Off-white (#F7F5F0) — warm, paper-like, not clinical
- Foreground: Deep charcoal (#1A1A18) — strong but not harsh black
- Accent: Terracotta (#C4603A) — warm, creative, distinctive
- Muted: Warm gray (#9B9590) — for secondary text and borders
- Emotional intent: warmth, craft, intellectual seriousness

**Layout Paradigm**:
- Horizontal scroll for project showcase section
- Left-anchored navigation with sticky position
- Full-bleed section headers with large display type
- Projects presented as editorial spreads, not cards

**Signature Elements**:
1. Thin horizontal rules (1px) as section dividers — elegant, editorial
2. Large numbered section markers (01, 02, 03...) in display type
3. Micro-animations: text reveals on scroll, subtle parallax on hero

**Interaction Philosophy**:
- Hover states reveal project details with smooth fade
- Cursor changes to custom crosshair on interactive elements
- Scroll-triggered text animations reinforce the editorial feel

**Animation**:
- Hero text: staggered letter/word reveal on load (0.8s duration)
- Section transitions: fade-up with 20px offset (0.5s ease-out)
- Project cards: subtle scale (1.02) on hover with shadow deepening
- Navigation: smooth underline slide on active state

**Typography System**:
- Display: Playfair Display (serif) — for hero name and section numbers
- Body: DM Sans — clean, modern, highly readable
- Accent: DM Mono — for labels, tags, and technical details
- Scale: 96px hero → 48px section → 24px subheading → 16px body

</idea>
<probability>0.08</probability>
</response>

<response>
<idea>
**Design Movement**: Swiss International Typographic Style with Digital Brutalism

**Core Principles**:
1. Grid-breaking layouts that challenge convention while maintaining readability
2. Raw, honest typography — no decorative flourishes, pure function
3. High contrast black-and-white base with electric blue (#0066FF) as the only color
4. Structural elements (lines, boxes, grids) as visible design components

**Color Philosophy**:
- Background: Pure white (#FFFFFF)
- Foreground: Pure black (#000000)
- Accent: Electric blue (#0066FF) — digital, technical, forward-looking
- Emotional intent: precision, confidence, technical mastery

**Layout Paradigm**:
- Strict 12-column grid with deliberate rule-breaking in hero
- Projects in a masonry-style layout with varying card heights
- Navigation as a fixed sidebar with vertical text labels
- Section numbers as large background watermarks

**Signature Elements**:
1. Thick 3px borders on key containers — structural, honest
2. Monospace type for all technical details and tool names
3. Diagonal cut sections using CSS clip-path

**Interaction Philosophy**:
- Bold hover states: background inversion (black → white, white → black)
- Project cards expand on click to full-screen detail view
- Keyboard navigation emphasized with visible focus states

**Animation**:
- Hero: typewriter effect for title (mechanical, precise)
- Hover: instant color inversion (no transition — brutalist)
- Section entry: slide from left with hard easing

**Typography System**:
- Display: Space Grotesk Bold — geometric, technical
- Body: Space Grotesk Regular
- Code: JetBrains Mono
- Scale: 120px hero → 56px section → 28px subheading → 16px body

</idea>
<probability>0.07</probability>
</response>

<response>
<idea>
**Design Movement**: Contemporary Portfolio with Kinetic Typography

**Core Principles**:
1. Motion as a design material — animations are not decoration but communication
2. Layered depth: foreground content, mid-layer accents, background texture
3. Warm neutral palette with sage green accent — calm, intellectual, creative
4. Content-first hierarchy: every design decision serves the work being shown

**Color Philosophy**:
- Background: Warm cream (#FAFAF7)
- Foreground: Dark slate (#1C2B3A)
- Accent: Sage green (#5C7A6B) — thoughtful, human-centered, calm
- Secondary accent: Dusty rose (#C4856A) — for AI/creative projects
- Emotional intent: intellectual warmth, creative confidence, human-centered design

**Layout Paradigm**:
- Vertical scroll with distinct section personalities
- Hero: full viewport with animated text and subtle particle background
- Projects: large feature cards with image, overlaid text, and expand behavior
- Skills: horizontal scrolling ticker with category grouping
- About: two-column with portrait placeholder and flowing text

**Signature Elements**:
1. Gradient text for key phrases (slate → sage green)
2. Floating tag pills for skills and tools
3. Project cards with image parallax on scroll

**Interaction Philosophy**:
- Smooth scroll with section snap points
- Project cards: image zoom on hover, detail panel slides in from right
- Contact section: interactive email copy with feedback animation

**Animation**:
- Hero: words animate in with stagger, subtle floating motion
- Scroll: elements fade-up with 30px offset, 0.6s ease
- Project hover: image scales 1.05, overlay fades in
- Skills ticker: continuous horizontal scroll animation

**Typography System**:
- Display: Cormorant Garamond — elegant, editorial, distinctive
- Body: Outfit — modern, clean, excellent readability
- Labels: Outfit Medium — consistent with body but weighted
- Scale: 88px hero → 44px section → 22px subheading → 16px body

</idea>
<probability>0.09</probability>
</response>

---

## Selected Design: Option 1 — Editorial Minimalism meets Japanese Wabi-Sabi

**Rationale**: This approach best serves Mingyuan's positioning as a thoughtful product designer and creative technologist. The editorial aesthetic communicates intellectual depth, while the warm palette differentiates from typical "tech portfolio" blue-and-white designs. The typographic hierarchy ensures the work speaks clearly.

**Key decisions**:
- Fonts: Playfair Display (display) + DM Sans (body) + DM Mono (labels)
- Colors: Off-white #F7F5F0, Charcoal #1A1A18, Terracotta #C4603A, Warm gray #9B9590
- Layout: Asymmetric, editorial, generous whitespace
- Animations: Scroll-triggered reveals, staggered text, subtle hover effects
