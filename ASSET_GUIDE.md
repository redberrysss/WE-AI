# Asset Structure Guide

## Create the following directory structure:

```
src/assets/
├── hero-ai-woman.png
├── about-research.png
├── dashboard-preview.png
│
├── icons/
│   ├── awareness.svg
│   ├── barriers.svg
│   ├── trust.svg
│   ├── ecosystem.svg
│   ├── desk-review.svg
│   ├── survey.svg
│   ├── fgd.svg
│   ├── dashboard.svg
│   ├── women.svg
│   ├── growth.svg
│   ├── ai.svg
│   └── policy.svg
```

## Image Details by Section

### SECTION A - Hero Section
**File:** `src/assets/hero-ai-woman.png`
**Dimensions:** 800x800px (square)
**Description:** AI Woman Illustration - A professional illustration showing a woman entrepreneur using AI technology
**Component:** `Hero.jsx`
**Import:** `import heroImage from "../assets/hero-ai-woman.png";`
**Usage:** Replace the placeholder div with:
```jsx
<img src={heroImage} alt="AI Woman Illustration" className="w-full h-full object-contain" />
```

### SECTION B - About Research
**File:** `src/assets/about-research.png`
**Dimensions:** 1200x900px (4:3 aspect ratio)
**Description:** Women Entrepreneur Using AI - A photo or illustration showing a woman entrepreneur working with AI tools
**Component:** `AboutResearch.jsx`
**Import:** `import aboutImage from "../assets/about-research.png";`
**Usage:** Replace the placeholder div with:
```jsx
<img src={aboutImage} alt="Women Entrepreneur Using AI" className="w-full h-auto rounded-2xl shadow-2xl" />
```

### SECTION C - Research Objectives Icons

**File:** `src/assets/icons/awareness.svg`
**Dimensions:** 64x64px
**Description:** Awareness icon (eye, lightbulb, or magnifying glass)
**Component:** `ResearchObjectives.jsx`
**Import:** `import awarenessIcon from "../assets/icons/awareness.svg";`
**Usage:** Replace emoji with:
```jsx
<img src={awarenessIcon} alt="Awareness" className="w-12 h-12" />
```

**File:** `src/assets/icons/barriers.svg`
**Dimensions:** 64x64px
**Description:** Barriers icon (shield, lock, or barrier gate)
**Component:** `ResearchObjectives.jsx`
**Import:** `import barriersIcon from "../assets/icons/barriers.svg";`
**Usage:** Replace emoji with:
```jsx
<img src={barriersIcon} alt="Barriers" className="w-12 h-12" />
```

**File:** `src/assets/icons/trust.svg`
**Dimensions:** 64x64px
**Description:** Trust icon (shield, checkmark, or handshake)
**Component:** `ResearchObjectives.jsx`
**Import:** `import trustIcon from "../assets/icons/trust.svg";`
**Usage:** Replace emoji with:
```jsx
<img src={trustIcon} alt="Trust" className="w-12 h-12" />
```

**File:** `src/assets/icons/ecosystem.svg`
**Dimensions:** 64x64px
**Description:** Ecosystem icon (network, nodes, or connecting dots)
**Component:** `ResearchObjectives.jsx`
**Import:** `import ecosystemIcon from "../assets/icons/ecosystem.svg";`
**Usage:** Replace emoji with:
```jsx
<img src={ecosystemIcon} alt="Ecosystem" className="w-12 h-12" />
```

### SECTION D - Methodology Icons

**File:** `src/assets/icons/desk-review.svg`
**Dimensions:** 64x64px
**Description:** Desk review icon (books, document, or library)
**Component:** `Methodology.jsx`
**Import:** `import deskReviewIcon from "../assets/icons/desk-review.svg";`
**Usage:** Replace emoji with:
```jsx
<img src={deskReviewIcon} alt="Desk Review" className="w-12 h-12" />
```

**File:** `src/assets/icons/survey.svg`
**Dimensions:** 64x64px
**Description:** Survey icon (clipboard, form, or questionnaire)
**Component:** `Methodology.jsx`
**Import:** `import surveyIcon from "../assets/icons/survey.svg";`
**Usage:** Replace emoji with:
```jsx
<img src={surveyIcon} alt="Survey" className="w-12 h-12" />
```

**File:** `src/assets/icons/fgd.svg`
**Dimensions:** 64x64px
**Description:** FGD icon (people, group discussion, or chat)
**Component:** `Methodology.jsx`
**Import:** `import fgdIcon from "../assets/icons/fgd.svg";`
**Usage:** Replace emoji with:
```jsx
<img src={fgdIcon} alt="FGD" className="w-12 h-12" />
```

**File:** `src/assets/icons/dashboard.svg`
**Dimensions:** 64x64px
**Description:** Dashboard icon (chart, graph, or analytics)
**Component:** `Methodology.jsx`
**Import:** `import dashboardIcon from "../assets/icons/dashboard.svg";`
**Usage:** Replace emoji with:
```jsx
<img src={dashboardIcon} alt="Dashboard" className="w-12 h-12" />
```

### SECTION E - Impact Icons

**File:** `src/assets/icons/women.svg`
**Dimensions:** 64x64px
**Description:** Women icon (person, user, or woman silhouette)
**Component:** `Impact.jsx`
**Import:** `import womenIcon from "../assets/icons/women.svg";`
**Usage:** Replace emoji with:
```jsx
<img src={womenIcon} alt="Women" className="w-12 h-12" />
```

**File:** `src/assets/icons/growth.svg`
**Dimensions:** 64x64px
**Description:** Growth icon (arrow up, chart, or trend)
**Component:** `Impact.jsx`
**Import:** `import growthIcon from "../assets/icons/growth.svg";`
**Usage:** Replace emoji with:
```jsx
<img src={growthIcon} alt="Growth" className="w-12 h-12" />
```

**File:** `src/assets/icons/ai.svg`
**Dimensions:** 64x64px
**Description:** AI icon (robot, brain, or neural network)
**Component:** `Impact.jsx`
**Import:** `import aiIcon from "../assets/icons/ai.svg";`
**Usage:** Replace emoji with:
```jsx
<img src={aiIcon} alt="AI" className="w-12 h-12" />
```

**File:** `src/assets/icons/policy.svg`
**Dimensions:** 64x64px
**Description:** Policy icon (document, gavel, or building)
**Component:** `Impact.jsx`
**Import:** `import policyIcon from "../assets/icons/policy.svg";`
**Usage:** Replace emoji with:
```jsx
<img src={policyIcon} alt="Policy" className="w-12 h-12" />
```

## Design Recommendations

### Color Scheme
- Primary: Purple (#42146f, #7b3fc7)
- Secondary: Blue (#3b82f6, #2563eb)
- Accent: Gold (#facc15, #fbbf24)
- Background: Dark navy (#0a1628, #1e1b4b)

### Icon Style
- Use consistent line weight (2px stroke)
- Modern, minimalist design
- Purple or blue stroke colors
- White fill for dark backgrounds
- Rounded corners on shapes

### Image Style
- Professional, high-quality illustrations
- Consistent lighting and color palette
- Modern, clean aesthetic
- Include women entrepreneurs in business settings
- AI/technology elements integrated naturally

## Implementation Steps

1. Create the `src/assets/` directory
2. Create the `src/assets/icons/` subdirectory
3. Add all image files according to the specifications above
4. Uncomment the import statements in each component
5. Replace the emoji placeholders with the actual image tags
6. Remove the placeholder divs once images are added

## Notes

- All SVG icons should be optimized for web use
- PNG images should be compressed for faster loading
- Maintain aspect ratios to prevent distortion
- Use alt text for accessibility
- Test images on both light and dark backgrounds
