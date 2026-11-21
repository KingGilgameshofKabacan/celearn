import { CEFormula, MSTEFormulaDomain } from '../types';

export const MSTE_FORMULA_DOMAINS: MSTEFormulaDomain[] = [
  'Trigonometry & Geometry',
  'Analytic Geometry & Algebra',
  'Probability & Statistics',
  'Surveying & Earthworks',
  'Highway, Transpo & Ports',
  'Engineering Economy',
  'Calculus, DE & Vector Analysis',
  'Construction & Engineering Physics'
];

export const MSTE_FORMULA_TOPICS_BY_DOMAIN: Record<MSTEFormulaDomain, string[]> = {
  'Trigonometry & Geometry': [
    'Right & Oblique Triangles, Identities & Inverse Functions',
    'Triangle Area, Medians, Bisectors & Altitudes',
    'Spherical Trigonometry & Navigation',
    'Polygons, Quadrilaterals & Circle Theorems',
    'Solid Geometry: Prisms, Cones, Spheres & Frustums'
  ],
  'Analytic Geometry & Algebra': [
    'Lines, Distance, Slope & Conic Sections',
    'Rotation of Axes & Polar Coordinates',
    'Exponents, Logs, Quadratics & Binomial Expansion',
    'Word Problems: Motion, Work, Clock, Mixtures & Variations',
    'Sequences & Series (AP, GP, HP & Means)'
  ],
  'Probability & Statistics': [
    'Measures of Central Tendency, Dispersion & Outliers',
    'Permutations, Combinations & Basic Probability',
    'Conditional Probability, Bayes Theorem & Discrete Distributions',
    'Normal Distribution & Z-Scores'
  ],
  'Surveying & Earthworks': [
    'Tape Corrections, Probable Error & Closed Traverse',
    'Simple, Compound, Reverse & Spiral Curves',
    'Symmetrical & Unsymmetrical Vertical Curves',
    'Earthworks Cross Sections, Volumes & Prismoidal Rules'
  ],
  'Highway, Transpo & Ports': [
    'Highway Safety, Accident Rates, Traffic Flow & PHF',
    'Horizontal Curves, Sight Distance & Pavement Design',
    'Railroad Turnouts, Dowel Bars & Ports/Waves'
  ],
  'Engineering Economy': [
    'Simple & Compound Interest, Effective Rates & Inflation',
    'Annuities, Perpetuity, Gradient Series & Capitalized Cost',
    'Depreciation Methods (SL, Sinking Fund, DB, SYD, MACRS)',
    'BCR, Rate of Return, Break-Even, Stock & Payback'
  ],
  'Calculus, DE & Vector Analysis': [
    'Integral Calculus Rules, Wallis Formula & Area/Arc Length',
    'Volumes, Surface Area, Centroids, Pappus & MOI',
    'Differential Calculus, Limits, Curvature & Asymptotes',
    'Tangents, Normals, Motion Rates & Maxima/Minima Shortcuts',
    'Differential Equations (1st Order, Linear, Exact & Growth/Cooling)',
    '3D Vector Analysis & Scalar/Vector Fields (Grad, Div, Curl)'
  ],
  'Construction & Engineering Physics': [
    'Earthmoving: Swell/Shrinkage, Spoil Piles & Excavators',
    'Construction Hauling Resistance & Grade/Rolling Factors',
    'Gravity, Waves, Sound, Optics & Energy'
  ]
};

export const MSTE_FORMULAS: CEFormula[] = [
  // =========================================================================
  // 1. TRIGONOMETRY & GEOMETRY (Pages 2 - 9)
  // =========================================================================
  {
    id: 'mste_p02_triangles_identities',
    area: 'MSTE',
    domain: 'Trigonometry & Geometry',
    topic: 'Right & Oblique Triangles, Identities & Inverse Functions',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Right & Oblique Triangles: 6 Trig Ratios, Sine/Cosine Laws & Fundamental Identities',
    pageRef: 2,
    latex: '\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C}, \\qquad c^2 = a^2 + b^2 - 2ab\\cos C',
    secondaryEquations: [
      { label: 'Right Triangle 6 Ratios & Pythagorean Theorem', latex: '\\sin\\theta = \\frac{y}{\\text{hyp}}, \\; \\cos\\theta = \\frac{x}{\\text{hyp}}, \\; \\tan\\theta = \\frac{y}{x}, \\; \\csc\\theta = \\frac{\\text{hyp}}{y}, \\; \\sec\\theta = \\frac{\\text{hyp}}{x}, \\; \\cot\\theta = \\frac{x}{y}; \\quad \\text{hyp}^2 = x^2 + y^2' },
      { label: 'Reciprocal & Quotient Relations', latex: '\\cot A = \\frac{1}{\\tan A}, \\; \\sec A = \\frac{1}{\\cos A}, \\; \\csc A = \\frac{1}{\\sin A}; \\qquad \\tan A = \\frac{\\sin A}{\\cos A}, \\; \\cot A = \\frac{\\cos A}{\\sin A}' },
      { label: 'Pythagorean Identities', latex: '\\sin^2 A + \\cos^2 A = 1, \\qquad 1 + \\tan^2 A = \\sec^2 A, \\qquad 1 + \\cot^2 A = \\csc^2 A' },
      { label: 'Sum & Difference of Two Angles', latex: '\\sin(A \\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B, \\quad \\cos(A \\pm B) = \\cos A\\cos B \\mp \\sin A\\sin B, \\quad \\tan(A \\pm B) = \\frac{\\tan A \\pm \\tan B}{1 \\mp \\tan A\\tan B}' },
      { label: 'Co-Function Identities', latex: '\\sin(90^\\circ - \\theta) = \\cos\\theta, \\qquad \\cos(90^\\circ - \\theta) = \\sin\\theta, \\qquad \\tan(90^\\circ - \\theta) = \\cot\\theta' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p02_triangles.png',
        caption: 'Right and oblique triangle vertex/side conventions (sides a, b, c opposite angles A, B, C).',
        alt: 'Right and oblique triangles geometry diagram'
      }
    ],
    flashcardPrompt: 'State all 6 Right-Triangle ratios, Sine & Cosine Laws, Reciprocal/Quotient/Pythagorean relations, Co-Functions, and Sum/Difference Identities.',
    flashcardHint: 'cos(A ± B) flips sign (∓) whereas sin(A ± B) preserves sign (±).',
    difficulty: 'Easy'
  },
  {
    id: 'mste_p03_double_half_unitcircle',
    area: 'MSTE',
    domain: 'Trigonometry & Geometry',
    topic: 'Right & Oblique Triangles, Identities & Inverse Functions',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Double-Angle, Half-Angle, Squared, Versine/Exsecant & Sinusoid Period/Amplitude',
    pageRef: 3,
    latex: '\\sin 2A = 2\\sin A\\cos A, \\quad \\cos 2A = \\cos^2 A - \\sin^2 A = 1 - 2\\sin^2 A = 2\\cos^2 A - 1, \\quad \\tan 2A = \\frac{2\\tan A}{1 - \\tan^2 A}',
    secondaryEquations: [
      { label: 'Half-Angle Identities', latex: '\\sin\\frac{A}{2} = \\pm\\sqrt{\\frac{1 - \\cos A}{2}}, \\qquad \\cos\\frac{A}{2} = \\pm\\sqrt{\\frac{1 + \\cos A}{2}}, \\qquad \\tan\\frac{A}{2} = \\pm\\sqrt{\\frac{1 - \\cos A}{1 + \\cos A}}' },
      { label: 'Squared (Power-Reduction) Identities', latex: '\\sin^2 A = \\frac{1 - \\cos 2A}{2}, \\qquad \\cos^2 A = \\frac{1 + \\cos 2A}{2}, \\qquad \\tan^2 A = \\frac{1 - \\cos 2A}{1 + \\cos 2A}' },
      { label: 'Versine, Coversine, Haversine & Exsecant', latex: '\\operatorname{versin}\\theta = 1 - \\cos\\theta, \\quad \\operatorname{coversin}\\theta = 1 - \\sin\\theta, \\quad \\operatorname{haversin}\\theta = \\frac{1 - \\cos\\theta}{2}, \\quad \\operatorname{exsec}\\theta = \\sec\\theta - 1' },
      { label: 'Angle Sums & Conversions', latex: '1\\text{ rev} = 2\\pi\\text{ rad} = 360^\\circ = 400\\text{ grads} = 6400\\text{ mils}; \\qquad \\text{Comp}=90^\\circ,\\;\\text{Supp}=180^\\circ,\\;\\text{Explem}=360^\\circ' }
    ],
    tables: [
      {
        title: 'Period & Amplitude of Sinusoids',
        headers: ['Function', 'Period', 'Amplitude'],
        rows: [
          ['y = A sin[B(x + C)] + D', '2π / B', 'A'],
          ['y = A cos[B(x + C)] + D', '2π / B', 'A'],
          ['y = A tan[B(x + C)] + D', 'π / B', 'Undefined (—)']
        ]
      }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p03_unit_circle_trig.png',
        caption: 'Unit circle geometric representation of sin, cos, tan, sec, csc, cot, versin, exsec, and chord.',
        alt: 'Unit circle trig functions diagram'
      }
    ],
    notes: [
      'Note: Full revolution angular conversion is 1 revolution = 6400 mils (360° = 400 grads).'
    ],
    flashcardPrompt: 'State Double-Angle, Half-Angle, Squared Power-Reduction, Versine/Coversine/Haversine/Exsecant, Period/Amplitude, and Angle Units.',
    flashcardHint: 'Tangent period is π/B (half of sine/cosine 2π/B); 1 rev = 6400 mils.',
    difficulty: 'Medium'
  },
  {
    id: 'mste_p04_triangle_areas_centers',
    area: 'MSTE',
    domain: 'Trigonometry & Geometry',
    topic: 'Triangle Area, Medians, Bisectors & Altitudes',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Triangle Area Formulas, All 3 Medians, Angle Bisectors & Altitudes',
    pageRef: 4,
    latex: 'A = \\frac{1}{2}bh = \\frac{1}{2}ab\\sin C = \\sqrt{s(s-a)(s-b)(s-c)}, \\qquad s = \\frac{a+b+c}{2}',
    secondaryEquations: [
      { label: 'Three Angles & One Side a', latex: 'A = \\frac{a^2 \\sin B \\sin C}{2 \\sin A}' },
      { label: 'All Three Medians (Centroid)', latex: 'm_a = \\frac{1}{2}\\sqrt{2b^2 + 2c^2 - a^2}, \\quad m_b = \\frac{1}{2}\\sqrt{2a^2 + 2c^2 - b^2}, \\quad m_c = \\frac{1}{2}\\sqrt{2a^2 + 2b^2 - c^2}' },
      { label: 'All Three Angle Bisectors (Incenter)', latex: 'b_a = \\frac{2}{b+c}\\sqrt{b c\\, s(s-a)}, \\quad b_b = \\frac{2}{a+c}\\sqrt{a c\\, s(s-b)}, \\quad b_c = \\frac{2}{a+b}\\sqrt{a b\\, s(s-c)}' },
      { label: 'All Three Altitudes (Orthocenter)', latex: 'h_a = \\frac{2 A_t}{a}, \\qquad h_b = \\frac{2 A_t}{b}, \\qquad h_c = \\frac{2 A_t}{c}' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p04_triangle_centers.png',
        caption: 'Medians intersecting at Centroid vs. Angle Bisectors intersecting at Incenter.',
        alt: 'Triangle centroid and incenter diagram'
      }
    ],
    notes: [
      'Note: Standard Stewart form for angle bisector b_b is shown above.',
      'Triangle Centers: Medians → Centroid; Angle Bisectors → Incenter; Altitudes → Orthocenter; Perpendicular Bisectors → Circumcenter.'
    ],
    flashcardPrompt: 'Give Heron’s formula, SAA area formula, all 3 Medians (m_a, m_b, m_c), all 3 Angle Bisectors (b_a, b_b, b_c), and 3 Altitudes.',
    flashcardHint: 'Medians → Centroid, Angle bisectors → Incenter, Altitudes → Orthocenter, ⊥ bisectors → Circumcenter.',
    difficulty: 'Medium'
  },
  {
    id: 'mste_p05_spherical_trigonometry',
    area: 'MSTE',
    domain: 'Trigonometry & Geometry',
    topic: 'Spherical Trigonometry & Navigation',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Spherical Trigonometry: Excess/Defect, Napier’s Rules, Cosine Laws & Terrestrial Sphere',
    pageRef: 5,
    latex: 'E = A + B + C - 180^\\circ, \\quad D = 360^\\circ - (a+b+c), \\quad A_{\\text{sph}} = \\frac{\\pi R^2 E}{180^\\circ}, \\quad V_{\\text{sph}} = \\frac{\\pi R^3 E}{540^\\circ}',
    secondaryEquations: [
      { label: 'Napier’s & Co-Function Rules (Right Spherical Triangle)', latex: '\\sin a = \\tan b\\tan(\\text{co-}B), \\quad \\sin(\\text{co-}c) = \\cos a\\cos b; \\qquad \\sin(\\text{co-}A) = \\cos A, \\; \\cos(\\text{co-}A) = \\sin A, \\; \\tan(\\text{co-}A) = \\cot A' },
      { label: 'Oblique Spherical Law of Sines', latex: '\\frac{\\sin a}{\\sin A} = \\frac{\\sin b}{\\sin B} = \\frac{\\sin c}{\\sin C}' },
      { label: 'All Three Cosine Laws for Sides', latex: '\\cos a = \\cos b\\cos c + \\sin b\\sin c\\cos A, \\quad \\cos b = \\cos a\\cos c + \\sin a\\sin c\\cos B, \\quad \\cos c = \\cos a\\cos b + \\sin a\\sin b\\cos C' },
      { label: 'All Three Cosine Laws for Angles', latex: '\\cos A = -\\cos B\\cos C + \\sin B\\sin C\\cos a, \\quad \\cos B = -\\cos A\\cos C + \\sin A\\sin C\\cos b, \\quad \\cos C = -\\cos A\\cos B + \\sin A\\sin B\\cos c' },
      { label: 'L’Huilier’s Formula for Spherical Excess E', latex: '\\tan\\frac{E}{4} = \\sqrt{\\tan\\frac{s}{2}\\tan\\frac{s-a}{2}\\tan\\frac{s-b}{2}\\tan\\frac{s-c}{2}}, \\qquad s = \\frac{a+b+c}{2}' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p05_spherical_triangle.png',
        caption: 'Right spherical triangle C = 90° and Napier circular arrangement (a, b, co-B, co-c, co-A).',
        alt: 'Right spherical triangle and Napier rule circle'
      }
    ],
    variables: [
      { symbol: '1′ of arc', meaning: '1 nautical mile = 6080 ft = 1.1516 statute mi = 1852 m (SI); 1 knot = 1 nm/hr' },
      { symbol: '1 stat mi', meaning: '5280 ft; Earth R ≈ 6400 km (or 3959 mi)' },
      { symbol: 'Spherical Bounds', meaning: '180° < A + B + C < 540° and a + b + c < 360°; any 2 sides > 3rd side' }
    ],
    flashcardPrompt: 'Write Spherical Excess E, Defect D, Area & Volume, all 3 Cosine Laws (sides & angles), Napier’s rules, L’Huilier’s E, and nautical conversions.',
    flashcardHint: 'Area = πR²E/180°; Volume = πR³E/540°; Notice the minus sign on −cos B cos C in Angle Cosine Law!',
    difficulty: 'Hard'
  },
  {
    id: 'mste_p06_polygons_inscribed_circles',
    area: 'MSTE',
    domain: 'Trigonometry & Geometry',
    topic: 'Polygons, Quadrilaterals & Circle Theorems',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Regular & Similar Polygons, Diagonals & Inscribed/Circumscribed Triangle Circles',
    pageRef: 6,
    latex: '\\Sigma\\theta = 180^\\circ(n-2), \\qquad \\Sigma\\beta = 360^\\circ, \\qquad \\Sigma\\alpha = 360^\\circ, \\qquad d = \\frac{n}{2}(n-3)',
    secondaryEquations: [
      { label: 'Regular Polygon Perimeter & Area (Side s, Apothem a)', latex: 'P = s n, \\qquad A = \\frac{s^2 n}{4\\tan(180^\\circ/n)} = \\frac{1}{2}Pa = \\frac{1}{2}n r^2\\sin\\left(\\frac{360^\\circ}{n}\\right) = n r_i^2\\tan\\left(\\frac{180^\\circ}{n}\\right)' },
      { label: 'Similar Polygons Ratios', latex: '\\frac{a}{x} = \\frac{b}{y} = \\frac{c}{z}, \\qquad \\frac{A_{\\text{small}}}{A_{\\text{big}}} = \\left(\\frac{a}{x}\\right)^2 = \\left(\\frac{b}{y}\\right)^2 = \\left(\\frac{c}{z}\\right)^2' },
      { label: 'Triangles: Circumcircle (R), Incircle (r) & Excircle (r_a)', latex: 'A = \\frac{abc}{4R} = r s = r_a(s-a)' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p06_polygons_circles.png',
        caption: 'Similar polygons, interior/exterior angle sums, and triangle circumcircle/incircle geometry.',
        alt: 'Polygons and triangle circles diagram'
      }
    ],
    flashcardPrompt: 'Give interior/exterior/central angle sums, diagonals d, regular polygon P & all 4 Area forms, similar ratio, and triangle circle areas.',
    flashcardHint: 'Interior sum = 180°(n−2); exterior & central sums both equal 360°; diagonals = n(n−3)/2.',
    difficulty: 'Medium'
  },
  {
    id: 'mste_p07_quadrilaterals_circle_rules',
    area: 'MSTE',
    domain: 'Trigonometry & Geometry',
    topic: 'Polygons, Quadrilaterals & Circle Theorems',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Quadrilaterals (Bretschneider), Circles, Sectors/Segments & Power-of-a-Point Theorems',
    pageRef: 7,
    latex: 'A_{\\text{gen quad}} = \\sqrt{(s-a)(s-b)(s-c)(s-d) - abcd\\cos^2\\theta}, \\quad s = \\frac{a+b+c+d}{2}, \\quad \\theta = \\frac{A+B}{2} = \\frac{C+D}{2}',
    secondaryEquations: [
      { label: 'Parallelogram, Trapezoid & Kite/Rhombus', latex: 'A_{\\text{para}} = bh = \\frac{1}{2}d_1 d_2\\sin\\beta, \\quad A_{\\text{trap}} = \\frac{b_1+b_2}{2}h = \\text{median}\\cdot h, \\quad A_{\\text{kite/rhom}} = \\frac{1}{2}d_1 d_2 = a h' },
      { label: 'Circle Area, Circumference & Arc Length', latex: 'A_{\\text{circle}} = \\pi r^2 = \\frac{\\pi}{4}d^2, \\qquad C = 2\\pi r = \\pi d, \\qquad S = r\\theta\\;(\\theta\\text{ in rad})' },
      { label: 'Circle Sector & Segment (θ in radians)', latex: 'A_{\\text{sector}} = \\frac{1}{2}r^2\\theta = \\frac{\\pi r^2\\theta^\\circ}{360^\\circ}, \\qquad A_{\\text{segment}} = \\frac{1}{2}r^2(\\theta - \\sin\\theta)' },
      { label: 'Power of a Point (Chords, Secants, Secant-Tangent)', latex: 'ab = cd, \\qquad AC\\cdot AB = AE\\cdot AD, \\qquad AB^2 = AD\\cdot AC' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p07_quads_chords.png',
        caption: 'Quadrilateral dimensions, circle sector/segment anatomy, and Two-Chords / Two-Secants / Secant-Tangent rules.',
        alt: 'Quadrilaterals and circle chord/secant theorems'
      }
    ],
    flashcardPrompt: 'Write General Quad (Bretschneider), Parallelogram/Trapezoid/Rhombus, Circle Area/Circumference/Sector/Segment, and Two Chords/Secants/Tangent rules.',
    flashcardHint: 'Segment area subtracts triangle ½r²sinθ from sector ½r²θ; trapezoid = median × h.',
    difficulty: 'Medium'
  },
  {
    id: 'mste_p08_cyclic_quad_circle_theorem',
    area: 'MSTE',
    domain: 'Trigonometry & Geometry',
    topic: 'Polygons, Quadrilaterals & Circle Theorems',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Cyclic Quadrilaterals (Brahmagupta & Ptolemy) & Inscribed Angle Circle Theorem',
    pageRef: 8,
    latex: 'A_{\\text{cyclic}} = \\sqrt{(s-a)(s-b)(s-c)(s-d)} = \\frac{\\sqrt{(ab+cd)(ac+bd)(ad+bc)}}{4R}, \\qquad d_1 d_2 = ac + bd',
    secondaryEquations: [
      { label: 'Circumscribed (Bicyclic) Quadrilateral', latex: 'A = \\sqrt{a b c d} = r s' },
      { label: 'Circle Inscribed vs Central Angle Theorem', latex: '\\theta_{\\text{inscribed}} = \\frac{\\alpha_{\\text{central}}}{2}' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p08_cyclic_solids.png',
        caption: 'Cyclic quadrilateral (Brahmagupta & Ptolemy), inscribed-angle α/2 theorem, and solid shapes.',
        alt: 'Cyclic quadrilateral and circle theorem diagram'
      }
    ],
    notes: [
      'Note: Exact cyclic quadrilateral area identity is √[(ab+cd)(ac+bd)(ad+bc)] / (4R).'
    ],
    flashcardPrompt: 'State Brahmagupta’s Cyclic Quad Area (and circumradius form), Ptolemy’s Diagonal Theorem, Circumscribed Quad A = √(abcd), and Central Angle = 2× Inscribed.',
    flashcardHint: 'Ptolemy: product of diagonals equals sum of products of opposite sides (d_1 d_2 = ac + bd).',
    difficulty: 'Medium'
  },
  {
    id: 'mste_p08_prisms_cylinders_cones',
    area: 'MSTE',
    domain: 'Trigonometry & Geometry',
    topic: 'Solid Geometry: Prisms, Cones, Spheres & Frustums',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Solid Geometry I: Prism, Truncated Prism, Cylinder, Pyramid, Cone & Prismatoid',
    pageRef: 8,
    latex: 'V_{\\text{prism}} = A_B h, \\qquad V_{\\text{cyl}} = \\pi r^2 h, \\qquad V_{\\text{pyr/cone}} = \\frac{1}{3}A_B h, \\qquad V_{\\text{prismatoid}} = \\frac{h}{6}(A_1 + A_2 + 4A_M)',
    secondaryEquations: [
      { label: 'Prism & Truncated Prism Total Surface Area', latex: '\\text{TSA}_{\\text{prism}} = 2 A_B + \\text{LSA}, \\qquad V_{\\text{trunc}} = A_B h_{\\text{ave}}, \\quad \\text{TSA}_{\\text{trunc}} = A_1 + A_2 + \\text{LSA}' },
      { label: 'Cylinder, Pyramid & Cone Surface Areas', latex: '\\text{TSA}_{\\text{cyl}} = 2\\pi r^2 + 2\\pi r h, \\quad \\text{TSA}_{\\text{pyr}} = A_B + \\text{LSA}, \\quad \\text{TSA}_{\\text{cone}} = \\pi r^2 + \\pi r l' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p08_cyclic_solids.png',
        caption: 'Prism, Truncated Prism (h₁, h₂, h₃, ...), Right Cylinder, Pyramid, and Right Circular Cone.',
        alt: 'Prism, truncated prism, cylinder, pyramid, and cone diagrams'
      }
    ],
    flashcardPrompt: 'Give Volume and TSA/LSA formulas for Prism, Truncated Prism, Cylinder, Pyramid, Cone, and the Prismatoid Formula.',
    flashcardHint: 'Prismatoid uses Simpson weighting h/6 · (A_1 + 4A_M + A_2); Cone LSA = π r l (slant height l).',
    difficulty: 'Easy'
  },
  {
    id: 'mste_p09_sphere_segments_frustum',
    area: 'MSTE',
    domain: 'Trigonometry & Geometry',
    topic: 'Solid Geometry: Prisms, Cones, Spheres & Frustums',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Solid Geometry II: Sphere, Spherical Segments, Zone/Cone/Lune/Wedge & Frustum',
    pageRef: 9,
    latex: 'V_{\\text{sphere}} = \\frac{4}{3}\\pi r^3, \\quad SA_{\\text{sphere}} = 4\\pi r^2, \\quad V_{\\text{frustum}} = \\frac{h}{3}\\left(A_1 + A_2 + \\sqrt{A_1 A_2}\\right), \\quad \\text{TSA}_{\\text{frustum}} = A_1 + A_2 + \\text{LSA}',
    secondaryEquations: [
      { label: 'Spherical Segment (One Base vs Two Bases)', latex: 'V_{1\\text{-base}} = \\frac{\\pi h^2}{3}(3R - h), \\qquad V_{2\\text{-base}} = \\frac{\\pi h}{6}(3a^2 + 3b^2 + h^2)' },
      { label: 'Spherical Zone & Spherical Sector (Cone)', latex: 'A_{\\text{zone}} = 2\\pi R h, \\qquad V_{\\text{sph. cone}} = \\frac{1}{3}A_{\\text{zone}} R = \\frac{2}{3}\\pi R^2 h' },
      { label: 'Spherical Lune (Area) & Wedge (Volume)', latex: 'A_{\\text{lune}} = \\frac{\\pi R^2 \\theta^\\circ}{90^\\circ}, \\qquad V_{\\text{wedge}} = \\frac{\\pi R^3 \\theta^\\circ}{270^\\circ}' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p09_spherical_frustum.png',
        caption: 'Sphere, one/two-base spherical segments, spherical zone, cone, lune/wedge, and frustum geometry.',
        alt: 'Spherical solids and frustum diagrams'
      }
    ],
    flashcardPrompt: 'Give Volume & Surface Area for Sphere, 1-Base & 2-Base Spherical Segments, Zone/Cone, Lune/Wedge, and Pyramid/Cone Frustum.',
    flashcardHint: '1-base = πh²(3R−h)/3; Frustum V = h/3 · (A_1 + A_2 + √(A_1 A_2)) and TSA = A_1 + A_2 + LSA.',
    difficulty: 'Medium'
  },

  // =========================================================================
  // 2. ANALYTIC GEOMETRY & ALGEBRA (Pages 10 - 17)
  // =========================================================================
  {
    id: 'mste_p10_lines_distance_angles',
    area: 'MSTE',
    domain: 'Analytic Geometry & Algebra',
    topic: 'Lines, Distance, Slope & Conic Sections',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Distance, Midpoint, Line Equations, Point-to-Line Distance & Line Angles',
    pageRef: 10,
    latex: 'd = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}}, \\qquad d_{\\parallel} = \\frac{|C_2 - C_1|}{\\sqrt{A^2 + B^2}}',
    secondaryEquations: [
      { label: '2D Distance, Taxicab Distance (PLX) & Midpoint', latex: 'd = \\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}, \\quad d_{\\text{PLX}} = |x_2-x_1| + |y_2-y_1|, \\quad \\bar{x} = \\frac{x_1+x_2}{2}, \\; \\bar{y} = \\frac{y_1+y_2}{2}' },
      { label: 'Slope & Angle Between Two Lines', latex: 'm = \\frac{\\text{rise}}{\\text{run}} = \\frac{y_2-y_1}{x_2-x_1}, \\quad \\theta = \\tan^{-1}\\left(\\frac{m_2 - m_1}{1 + m_1 m_2}\\right) = \\tan^{-1}(m_2) - \\tan^{-1}(m_1), \\quad \\parallel: m_1=m_2, \\; \\perp: m_1 m_2=-1' },
      { label: 'Five Standard Line Forms', latex: 'y-y_1 = m(x-x_1), \\quad y-y_1 = \\frac{y_2-y_1}{x_2-x_1}(x-x_1), \\quad y = mx+b, \\quad \\frac{x}{a}+\\frac{y}{b}=1, \\quad Ax+By+C=0' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p10_analytic_lines.png',
        caption: 'Coordinate distance/slope, perpendicular point-to-line distance, and angle between intersecting lines.',
        alt: 'Analytic geometry lines and distances'
      }
    ],
    flashcardPrompt: 'Write point-to-line & parallel-line distances, two-point & intercept line forms, slope m, and both angle-between-lines formulas.',
    flashcardHint: 'Normalize Ax + By + C = 0 before using |C_2 − C_1| / √(A² + B²).',
    difficulty: 'Easy'
  },
  {
    id: 'mste_p11_conics_circle_parabola_ellipse',
    area: 'MSTE',
    domain: 'Analytic Geometry & Algebra',
    topic: 'Lines, Distance, Slope & Conic Sections',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Conic Eccentricity, Circle, Parabola (4 Orientations) & Ellipse Standard Equations',
    pageRef: 11,
    latex: 'e = 0\\;(\\text{Circle}),\\quad e = 1\\;(\\text{Parabola}),\\quad e < 1\\;(\\text{Ellipse}),\\quad e > 1\\;(\\text{Hyperbola})',
    secondaryEquations: [
      { label: 'Circle Standard & General Forms', latex: 'x^2+y^2 = r^2, \\quad (x-h)^2+(y-k)^2 = r^2, \\quad x^2 + y^2 + Dx + Ey + F = 0 \\;\\left(h=-\\frac{D}{2},\\; k=-\\frac{E}{2}\\right)' },
      { label: 'Parabola (Upward, Downward, Right, Left; LR = 4a)', latex: '(x-h)^2 = 4a(y-k)\\;(\\uparrow), \\; (x-h)^2 = -4a(y-k)\\;(\\downarrow), \\; (y-k)^2 = 4a(x-h)\\;(\\to), \\; (y-k)^2 = -4a(x-h)\\;(\\leftarrow)' },
      { label: 'Ellipse Standard Forms (a > b; Origin & Shifted)', latex: '\\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2} = 1 \\;\\text{or}\\; \\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1\\;(\\text{horiz.}), \\qquad \\frac{(x-h)^2}{b^2} + \\frac{(y-k)^2}{a^2} = 1 \\;\\text{or}\\; \\frac{x^2}{b^2}+\\frac{y^2}{a^2}=1\\;(\\text{vert.})' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p11_parabola_ellipse.png',
        caption: 'Parabola vertex/focus/directrix/latus rectum (4a) and Ellipse major/minor axes geometry.',
        alt: 'Parabola and ellipse conic section diagrams'
      }
    ],
    notes: [
      'Note: From general form x² + y² + Dx + Ey + F = 0, center coordinates are h = −D/2 and k = −E/2.'
    ],
    flashcardPrompt: 'Identify conic types by e, write all 3 Circle equations, all 4 Parabola orientations, and Horizontal vs Vertical Ellipse forms.',
    flashcardHint: 'In an ellipse, a > b always sits beneath the major-axis variable; parabola d_1 = f_1.',
    difficulty: 'Easy'
  },
  {
    id: 'mste_p12_ellipse_orbits_hyperbola',
    area: 'MSTE',
    domain: 'Analytic Geometry & Algebra',
    topic: 'Lines, Distance, Slope & Conic Sections',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Ellipse Properties, Orbital Apogee/Perigee & Hyperbola Standard Equations',
    pageRef: 12,
    latex: '\\text{Ellipse: } a^2 = b^2 + c^2, \\quad e = \\frac{c}{a} < 1, \\quad A = \\pi ab, \\quad d = \\frac{a}{e}, \\quad LR = \\frac{2b^2}{a}',
    secondaryEquations: [
      { label: 'Ellipse Sum of Focal Radii, Lengths & Perimeter', latex: 'd_1+d_2 = d_3+d_4 = d_5+d_6 = 2a, \\quad L_{\\text{major}}=2a, \\; L_{\\text{minor}}=2b, \\quad P \\approx 2\\pi\\sqrt{\\frac{a^2+b^2}{2}}, \\quad e\' = \\frac{c}{b}' },
      { label: 'Hyperbola Properties & Asymptotes', latex: 'c^2 = a^2 + b^2, \\quad e = \\frac{c}{a} > 1, \\quad d = \\frac{a}{e}, \\quad LR = \\frac{2b^2}{a}, \\quad L_{\\text{trans}}=2a, \\; L_{\\text{conj}}=2b, \\quad m = \\pm\\frac{b}{a}' },
      { label: 'Hyperbola Standard Forms & Focal Difference', latex: '\\frac{(x-h)^2}{a^2} - \\frac{(y-k)^2}{b^2} = 1\\;(\\text{horiz.}), \\qquad \\frac{(y-k)^2}{a^2} - \\frac{(x-h)^2}{b^2} = 1\\;(\\text{vert.}), \\qquad |d_1 - d_2| = 2a' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p12_orbits.png',
        caption: 'Orbital mechanics ellipses: Apogee/Perigee (Moon-Earth) and Aphelion/Perihelion (Earth-Sun).',
        alt: 'Apogee perigee aphelion perihelion orbital diagrams'
      },
      {
        src: '/assets/mste_formulas/m_p12_hyperbola.png',
        caption: 'Hyperbola transverse/conjugate axes, foci, asymptotes (m = ±b/a), and directrices.',
        alt: 'Hyperbola conic section diagram'
      }
    ],
    flashcardPrompt: 'Contrast Ellipse vs Hyperbola relations for c², e, e′, LR, directrix d, axes lengths, focal sum/difference, and Ellipse perimeter.',
    flashcardHint: 'Ellipse: a² = b² + c² and d_1+d_2 = 2a; Hyperbola: c² = a² + b² and |d_1−d_2| = 2a.',
    difficulty: 'Medium'
  },
  {
    id: 'mste_p13_general_conic_rotation_polar',
    area: 'MSTE',
    domain: 'Analytic Geometry & Algebra',
    topic: 'Rotation of Axes & Polar Coordinates',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'General Conic Equation (Case 1 & Case 2), Rotation of Axes & Polar Coordinates',
    pageRef: 13,
    latex: 'Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0, \\qquad B^2 - 4AC < 0\\;(\\text{Ellipse}),\\; = 0\\;(\\text{Parabola}),\\; > 0\\;(\\text{Hyperbola})',
    secondaryEquations: [
      { label: 'Case 1 (B = 0): Axis-Aligned Identification', latex: 'A\\text{ or }C=0\\;(\\text{Parab.}), \\quad AC<0\\;(\\text{Hyper.}), \\quad A=C\\neq 0\\;(\\text{Circle}), \\quad A\\neq C,\\;AC>0\\;(\\text{Ellipse})' },
      { label: 'Rotation of Axes (x,y ↔ x′,y′ & Polar Angle α)', latex: 'x = x\'\\cos\\theta - y\'\\sin\\theta, \\quad y = x\'\\sin\\theta + y\'\\cos\\theta; \\qquad x = r\\cos\\alpha\\cos\\theta - r\\sin\\alpha\\sin\\theta, \\quad y = r\\sin\\alpha\\cos\\theta + r\\cos\\alpha\\sin\\theta' },
      { label: 'Eliminate xy-Term Angle', latex: '\\tan 2\\theta = \\frac{B}{A - C}' },
      { label: 'Polar ↔ Rectangular Coordinates', latex: 'r^2 = x^2 + y^2, \\quad r = \\sqrt{x^2+y^2}, \\quad x = r\\cos\\theta, \\quad y = r\\sin\\theta, \\quad \\tan\\theta = \\frac{y}{x} = m' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p13_rotation_polar.png',
        caption: 'Hyperbola difference property (|d_1 − d_2| = 2a), rotated axes (x′, y′), and polar coordinate triangle.',
        alt: 'Hyperbola difference, rotation of axes, and polar coordinates'
      }
    ],
    flashcardPrompt: 'Classify Ax² + Bxy + Cy² + Dx + Ey + F = 0 for B = 0 vs B ≠ 0, write Rotation of Axes (incl. polar α form), and Polar Conversions.',
    flashcardHint: 'Discriminant B² − 4AC: < 0 Ellipse, = 0 Parabola, > 0 Hyperbola.',
    difficulty: 'Medium'
  },
  {
    id: 'mste_p14_exponents_radicals_logs',
    area: 'MSTE',
    domain: 'Analytic Geometry & Algebra',
    topic: 'Exponents, Logs, Quadratics & Binomial Expansion',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'All 6 Laws of Exponents, 5 Laws of Radicals & 6 Properties of Logarithms',
    pageRef: 14,
    latex: '(a^m)^n = a^{mn}, \\qquad a^m \\cdot a^n = a^{m+n}, \\qquad \\frac{a^m}{a^n} = a^{m-n}, \\qquad a^{-n} = \\frac{1}{a^n}',
    secondaryEquations: [
      { label: 'Laws of Exponents (Power of Product & Quotient)', latex: '(a \\cdot b)^m = a^m \\cdot b^m, \\qquad \\left(\\frac{a}{b}\\right)^m = \\frac{a^m}{b^m}' },
      { label: 'All 5 Properties of Radicals', latex: 'a^{1/n} = \\sqrt[n]{a}, \\quad a^{m/n} = \\sqrt[n]{a^m}, \\quad (\\sqrt[n]{a})^n = a, \\quad \\sqrt[n]{a}\\cdot\\sqrt[n]{b} = \\sqrt[n]{ab}, \\quad \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}} = \\sqrt[n]{\\frac{a}{b}}' },
      { label: 'Logarithm Definition, Product, Quotient & Power Laws', latex: '\\log_b x = y \\iff x = b^y, \\quad \\log_b(xy) = \\log_b x + \\log_b y, \\quad \\log_b\\left(\\frac{x}{y}\\right) = \\log_b x - \\log_b y, \\quad \\log_b(x^y) = y\\log_b x' },
      { label: 'Unit/Zero Logarithms & Change of Base', latex: '\\log_b b = 1, \\qquad \\log_b 1 = 0, \\qquad \\log_b x = \\frac{\\ln x}{\\ln b}' }
    ],
    flashcardPrompt: 'Recite all 6 Laws of Exponents, all 5 Properties of Radicals, and all 6 Properties of Logarithms from Algebra.',
    flashcardHint: 'Convert log_b x = y directly into exponential form x = b^y.',
    difficulty: 'Easy'
  },
  {
    id: 'mste_p14_algebra_logs_binomial',
    area: 'MSTE',
    domain: 'Analytic Geometry & Algebra',
    topic: 'Exponents, Logs, Quadratics & Binomial Expansion',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Quadratic Equation, Root Sum/Product, Binomial r-th Term, SOC/SOE & Age Problems',
    pageRef: 14,
    latex: 'Ax^2 + Bx + C = 0 \\implies x = \\frac{-B \\pm \\sqrt{B^2 - 4AC}}{2A}, \\qquad x_1 + x_2 = -\\frac{B}{A}, \\qquad x_1 x_2 = \\frac{C}{A}',
    secondaryEquations: [
      { label: 'Binomial r-th Term of (a + b)ⁿ', latex: 'T_r = {}_nC_m\\, a^{n-m}\\, b^m, \\qquad m = r - 1, \\qquad {}_nC_m = \\frac{n!}{(n-m)!\\,m!}' },
      { label: 'Sum of Coefficients & Sum of Exponents', latex: '\\text{SOC} = f(1) - f(0), \\qquad \\text{SOE of }(a^j + b^k)^n = \\frac{n}{2}(n+1)(j+k)' },
      { label: 'Discriminant Root Nature', latex: 'B^2-4AC = 0\\;(\\text{Equal}),\\quad B^2-4AC > 0\\;(\\text{Unequal Real}),\\quad B^2-4AC < 0\\;(\\text{Imaginary})' },
      { label: 'Age-Related Setup', latex: '\\text{Present} = x, \\qquad a\\text{ yrs ago} = x - a, \\qquad b\\text{ yrs from now} = x + b' }
    ],
    notes: [
      'Sum of Coefficients rule: Evaluate variables at 1 (minus pure constant term F(0) when expanded with constants).'
    ],
    flashcardPrompt: 'Write the Quadratic formula, Vieta’s sum/product, discriminant tests, Binomial r-th term, SOC = F(1)−F(0), and SOE of (a^j + b^k)^n.',
    flashcardHint: 'Sum of exponents = n(n+1)/2 · (j + k); for binomial r-th term, m = r − 1.',
    difficulty: 'Easy'
  },
  {
    id: 'mste_p15_word_problems_clock_demoivre',
    area: 'MSTE',
    domain: 'Analytic Geometry & Algebra',
    topic: 'Word Problems: Motion, Work, Clock, Mixtures & Variations',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Motion, Work-Rate, De Moivre’s Theorem & Clock-Hand Problems',
    pageRef: 15,
    latex: 'x = \\frac{60}{11}H \\pm \\frac{2}{11}\\theta, \\qquad x = \\frac{60}{11}(H \\pm \\theta_H), \\qquad (r\\angle\\theta)^n = r^n\\angle n\\theta',
    secondaryEquations: [
      { label: 'Clock Dial Division Ratios', latex: '1\\text{ hr space} = 12\\text{ min spaces}; \\quad \\text{hour} = \\frac{x}{12}\\text{ min}; \\qquad 1\\text{ min} = 60\\text{ sec spaces}; \\quad \\text{min} = \\frac{x}{60}\\text{ sec}, \\; \\text{hour} = \\frac{x}{720}\\text{ sec}' },
      { label: 'Motion (Boat / Airplane Wind & Current)', latex: '\\text{distance} = v\\cdot t, \\qquad v_{\\text{downstream/with}} = x + y, \\qquad v_{\\text{upstream/against}} = x - y' },
      { label: 'Work-Rate Equation', latex: '\\text{Job Done} = \\text{Rate} \\times \\text{Time}, \\qquad \\text{Rate} = \\frac{1\\text{ job done}}{\\text{time}}' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p15_clock_diagrams.png',
        caption: 'Clock dial divisions (12 min/hr ratio, 60 sec/min) and angle separation θ between hour and minute hands.',
        alt: 'Clock word problem dial diagrams'
      }
    ],
    flashcardPrompt: 'State the Clock-Hand equations (minutes x, hour/min/sec hand ratios), De Moivre’s Theorem, Work-Rate, and Wind/Current motion.',
    flashcardHint: 'Minute hand travels 12× faster than hour hand → relative advance is 11/12 spaces per minute.',
    difficulty: 'Medium'
  },
  {
    id: 'mste_p16_mixtures_variations',
    area: 'MSTE',
    domain: 'Analytic Geometry & Algebra',
    topic: 'Word Problems: Motion, Work, Clock, Mixtures & Variations',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Mixture Equation & Direct, Inverse and Joint Variation Laws',
    pageRef: 16,
    latex: 'x(A\\%) + y(B\\%) = (x + y)(C\\%)',
    secondaryEquations: [
      { label: 'Direct, Inverse & Joint Variation', latex: '\\text{Direct: } x\\propto y \\Rightarrow x = k y; \\qquad \\text{Inverse: } x\\propto\\frac{1}{y} \\Rightarrow x = \\frac{k}{y}; \\qquad \\text{Joint: } x\\propto y z \\Rightarrow x = k y z' }
    ],
    notes: [
      'Note: Joint variation is x = kyz; in mixture problems, x and y denote initial and added volume/mass.'
    ],
    flashcardPrompt: 'Write the Mixture mass/volume concentration formula and the three Variation laws (Direct, Inverse, Joint).',
    flashcardHint: 'Sum of solute masses equals final mixture solute mass: x(A%) + y(B%) = (x+y)(C%).',
    difficulty: 'Easy'
  },
  {
    id: 'mste_p16_sequences_means_variation',
    area: 'MSTE',
    domain: 'Analytic Geometry & Algebra',
    topic: 'Sequences & Series (AP, GP, HP & Means)',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Arithmetic (AP), Geometric (GP), Infinite GP, Harmonic (HP) & AM-GM-HM Means',
    pageRef: 16,
    latex: 'a_n = a_1 + (n-1)d = a_m + (n-m)d, \\qquad a_n = a_1 r^{n-1} = a_m r^{n-m}, \\qquad S_\\infty = \\frac{a_1}{1-r}\\;(|r|<1)',
    secondaryEquations: [
      { label: 'Arithmetic Progression Sums', latex: 'S_n^{\\text{AP}} = \\frac{n}{2}(a_1 + a_n) = \\frac{n}{2}\\left[2a_1 + (n-1)d\\right]' },
      { label: 'Geometric Progression Sums', latex: 'S_n^{\\text{GP}} = \\frac{a_1(1 - r^n)}{1 - r} = \\frac{a_1(r^n - 1)}{r - 1}' },
      { label: 'AM, GM, HM & Connecting Identity', latex: 'AM = \\frac{\\sum x_i}{n}, \\quad GM = \\sqrt[n]{x_1 x_2\\cdots x_n}, \\quad HM = \\frac{n}{\\sum (1/x_i)}, \\quad AM \\cdot HM = GM^2' }
    ],
    notes: [
      'Harmonic Progression (HP): sequence formed by taking the reciprocals of an Arithmetic Progression.'
    ],
    flashcardPrompt: 'Give BOTH n-th term & Sum forms for AP and GP, Infinite GP sum, Harmonic Progression definition, and AM·HM = GM².',
    flashcardHint: 'Use a_n = a_m + (n − m)d or a_m r^(n−m) whenever the first term a_1 is not directly given.',
    difficulty: 'Easy'
  },

  // =========================================================================
  // 3. PROBABILITY & STATISTICS (Pages 17 - 20)
  // =========================================================================
  {
    id: 'mste_p17_statistics_dispersion',
    area: 'MSTE',
    domain: 'Probability & Statistics',
    topic: 'Measures of Central Tendency, Dispersion & Outliers',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Central Tendency (Ungrouped/Grouped), Range, SD, IQR, Semi-IQR & Outliers',
    pageRef: 17,
    latex: '\\bar{x} = \\frac{\\sum x}{n} = \\frac{\\sum x\\,\\text{freq}}{\\sum\\text{freq}}, \\qquad \\sigma = \\sqrt{\\frac{\\sum(x - \\bar{x})^2}{n}}, \\qquad s = \\sqrt{\\frac{\\sum(x - \\bar{x})^2}{n - 1}}',
    secondaryEquations: [
      { label: 'Ungrouped Median & Grouped Class Parameters', latex: '\\text{med} @ \\left(\\frac{n+1}{2}\\right)^{\\text{th}}, \\quad LCB = LB - 0.5, \\quad x_{\\text{mark}} = \\frac{UB + LB}{2}' },
      { label: 'Estimated Grouped Median & Mode', latex: 'me = LCB + \\frac{\\frac{n}{2} - cf_{\\text{before}}}{f}c, \\quad mo = LCB + \\frac{d_1}{d_1 + d_2}c \\;\\;(d_1=f_{\\text{mod}}-f_{\\text{before}},\\; d_2=f_{\\text{mod}}-f_{\\text{after}})' },
      { label: 'Range, IQR, Semi-IQR & Coefficients', latex: 'R = H - L, \\; \\text{Coeff}_R = \\frac{H-L}{H+L}, \\; IQR = Q_3 - Q_1, \\; \\text{semi-IQR} = \\frac{IQR}{2}, \\; \\text{Coeff}_{IQR} = \\frac{Q_3 - Q_1}{Q_3 + Q_1}' },
      { label: 'Outlier Fence Criteria (1.5 IQR Rule)', latex: 'x \\le Q_1 - 1.5\\,IQR \\quad \\text{or} \\quad x \\ge Q_3 + 1.5\\,IQR' }
    ],
    flashcardPrompt: 'Give Mean (ungrouped/grouped), Grouped Median & Mode (with d₁, d₂, LCB), Population vs Sample SD, Range/IQR/Semi-IQR, and Outlier fences.',
    flashcardHint: 'Calculator Mode 3-1: σx divides by n; sx divides by (n − 1). Semi-IQR = Quartile Deviation = IQR/2.',
    difficulty: 'Medium'
  },
  {
    id: 'mste_p18_permutation_combination_prob',
    area: 'MSTE',
    domain: 'Probability & Statistics',
    topic: 'Permutations, Combinations & Basic Probability',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Permutations (All 8 Linear/Circular Cases), Combinations & Probability Rules',
    pageRef: 18,
    latex: '{}_nP_r = \\frac{n!}{(n-r)!}, \\qquad {}_nC_r = \\frac{n!}{r!(n-r)!}, \\qquad 2^n - 1 = \\sum_{x=1}^n {}_nC_x',
    secondaryEquations: [
      { label: 'Cyclic Permutation (r at a time vs all n)', latex: '{}_{n-1}P_{r-1} = \\frac{{}_nP_r}{n}, \\qquad P_{\\text{circular}} = (n-1)!' },
      { label: 'Basic Probability, Complement & Odds', latex: 'P = \\frac{\\text{Favorable Outcomes}}{\\text{Possible Outcomes}}, \\qquad P + Q = 1, \\qquad \\text{Odds} = \\frac{p_{\\text{success}}}{p_{\\text{fail}}}' },
      { label: 'Multiplication Rule (Independent vs Dependent)', latex: 'P(A\\text{ and }B)_{\\text{indep}} = P(A)\\cdot P(B), \\qquad P(A\\text{ and }B)_{\\text{dep}} = P(A)\\cdot P(B|A)' }
    ],
    tables: [
      {
        title: '8 Permutation Cases (L=Linear, C=Circular, A=All, N=Not-all, U=Unique, I=Identical)',
        headers: ['Case', 'Meaning', 'Formula'],
        rows: [
          ['LAU', 'Linear, All, Unique', 'nPn = n!'],
          ['LAI', 'Linear, All, Identical', 'n! / (r₁! r₂! r₃! ...)'],
          ['LNU', 'Linear, Not All, Unique', 'nPr = n! / (n − r)!'],
          ['LNI', 'Linear, Not All, Identical', 'Sum subcases by repeated item count'],
          ['CAU', 'Circular, All, Unique', 'n! / n = (n − 1)!'],
          ['CAI', 'Circular, All, Identical', '(Case 2) / n'],
          ['CNU', 'Circular, Not All, Unique', '(Case 3) / r (or nPr / n fixed rot.)'],
          ['CNI', 'Circular, Not All, Identical', '(Case 4) / r']
        ]
      }
    ],
    notes: [
      'Identities: nPn = n!, nP0 = 1, nCn = 1, nC0 = 1, 0! = 1. Mutually exclusive events use OR (+); independent/dependent events use AND (×).'
    ],
    flashcardPrompt: 'List all 8 Permutation Cases (LAU/LAI/LNU/LNI/CAU/CAI/CNU/CNI), Combinations, Subset Sum (2ⁿ − 1), P+Q=1, Odds, and AND Rule.',
    flashcardHint: 'Linear Identical divides by r_i!; Circular divides linear count by n (all) or r (not all).',
    difficulty: 'Medium'
  },
  {
    id: 'mste_p19_bayes_distributions',
    area: 'MSTE',
    domain: 'Probability & Statistics',
    topic: 'Conditional Probability, Bayes Theorem & Discrete Distributions',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Bayes Theorem, Addition Rule & Binomial / Multinomial / Negative Binomial',
    pageRef: 19,
    latex: 'P(A)P(B|A) = P(B)P(A|B), \\qquad P(A\\cup B) = P(A) + P(B) - P(A\\cap B)',
    secondaryEquations: [
      { label: 'Binomial Probability Distribution', latex: 'P(x) = {}_nC_x\\, p^x\\, q^{n-x}' },
      { label: 'Multinomial Distribution', latex: 'P = P_1^{x_1} P_2^{x_2} \\cdots P_m^{x_m}\\cdot\\frac{n!}{x_1! x_2!\\cdots x_m!}' },
      { label: 'Negative Binomial (k-th success on n-th trial)', latex: 'P(n) = p^{k-1} q^{n-k} {}_{n-1}C_{k-1}\\cdot p' },
      { label: 'Complement & Mutually Exclusive Rules', latex: 'P(A^c) = 1 - P(A), \\qquad P(A\\cup B)_{\\text{mut. excl.}} = P(A) + P(B)' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p19_probability_venn.png',
        caption: 'Venn diagrams for Independent vs Disjoint events, Addition Rule (OR), and Complement A^c.',
        alt: 'Probability Venn diagrams'
      }
    ],
    notes: [
      'Note: Bayes’ Theorem identity is P(A) × P(B|A) = P(B) × P(A|B).'
    ],
    flashcardPrompt: 'State Bayes’ Theorem, General Addition Rule, Binomial Distribution, Multinomial Distribution, and Negative Binomial Distribution.',
    flashcardHint: 'Negative binomial places the k-th success firmly on the final n-th trial.',
    difficulty: 'Hard'
  },
  {
    id: 'mste_p20_discrete_normal_distributions',
    area: 'MSTE',
    domain: 'Probability & Statistics',
    topic: 'Normal Distribution & Z-Scores',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Geometric, Hypergeometric, Multivariate Hypergeometric, Poisson & Standard Normal',
    pageRef: 20,
    latex: 'Z = \\frac{x - \\mu}{\\sigma}, \\qquad f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}',
    secondaryEquations: [
      { label: 'Geometric & Poisson Distributions', latex: 'P(n)_{\\text{geom}} = q^{n-1} p, \\qquad P(x)_{\\text{Poisson}} = \\frac{\\mu^x e^{-\\mu}}{x!}' },
      { label: 'Hypergeometric & Multivariate Hypergeometric', latex: 'P(x) = \\frac{{}_kC_x\\cdot {}_{N-k}C_{n-x}}{{}_NC_n}, \\qquad P(x_1,\\dots,x_m) = \\frac{{}_{a_1}C_{x_1}\\cdot {}_{a_2}C_{x_2}\\cdots {}_{a_m}C_{x_m}}{{}_NC_n}' },
      { label: 'Continuous Normal Area Probabilities', latex: 'P(x \\le a) = P(x < a) = \\text{Area left of }a, \\quad P(x \\ge a) = \\text{Area right of }a, \\quad P(a \\le x \\le b) = \\text{Area between }a,b' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p20_normal_curves.png',
        caption: 'Normal PDF bell curve and Standard Normal z-score probability area P(z₁ ≤ z ≤ z₂).',
        alt: 'Normal and standard normal bell curves'
      }
    ],
    notes: [
      'Errata on PDF p.20: Handwritten Normal PDF coefficient writes "1/√(2x)" omitting σ and π; exact factor is 1/(σ√(2π)).'
    ],
    flashcardPrompt: 'Write Geometric, Hypergeometric, Multivariate Hypergeometric, Poisson, Standard Normal Z-score, Normal PDF, and Area rules.',
    flashcardHint: 'Multivariate hypergeometric extends hypergeometric to m distinct categories summing to N.',
    difficulty: 'Medium'
  },

  // =========================================================================
  // 4. SURVEYING & EARTHWORKS (Pages 20 - 25, 50)
  // =========================================================================
  {
    id: 'mste_p20_tape_corrections_errors',
    area: 'MSTE',
    domain: 'Surveying & Earthworks',
    topic: 'Tape Corrections, Probable Error & Closed Traverse',
    examSubtopic: 'Surveying, Leveling & Errors',
    title: 'Tape Corrections (Length, Temp, Pull, Sag), SLAMS, Probable Error & Error Propagation',
    pageRef: 20,
    latex: 'C_T = \\alpha L(T - T_0), \\qquad C_P = \\frac{(P - P_0)L}{aE}, \\qquad C_S = -\\frac{w^2 L^3}{24 P^2}',
    secondaryEquations: [
      { label: 'Nominal vs Correct Tape Length & Area Error', latex: 'L_{\\text{correct/actual}} = L_{\\text{initial}} \\pm e\\left(\\frac{L_{\\text{initial}}}{L_{\\text{tape}}}\\right), \\qquad \\text{Error}_{\\text{area}} = |A_{\\text{correct}} - A_{\\text{erroneous}}|' },
      { label: 'Standard Error & Probable Error of Mean', latex: 'SE = \\frac{s}{\\sqrt{n}} = \\frac{x_{\\sigma_{n-1}}}{\\sqrt{n}}, \\qquad E_P = \\pm 0.6745\\, SE' },
      { label: 'Error of Product & Sum', latex: 'E_{\\text{prod}} = \\sqrt{E_1^2(x_2)^2 + E_2^2(x_1)^2}, \\qquad E_{\\text{sum}} = \\sqrt{E_1^2 + E_2^2 + \\cdots + E_n^2} = E\\sqrt{n}\\;(\\text{same }E)' }
    ],
    tables: [
      {
        title: 'Tape Error Sign Rule (SLAMS Mnemonic)',
        headers: ['Operation', 'Tape Too Long', 'Tape Too Short'],
        rows: [
          ['Measure (Measured Subtract)', 'Add (+)', 'Subtract (−)'],
          ['Laying Out (Too Short Laying-Out Add)', 'Subtract (−)', 'Add (+)']
        ]
      }
    ],
    notes: [
      'Sag correction C_s always subtracts from measured tape length unless pull exceeds standard.'
    ],
    flashcardPrompt: 'Write the SLAMS tape rule, Temperature/Pull/Sag corrections (C_T, C_P, C_S), Standard/Probable Error, and Product/Sum Error Propagation.',
    flashcardHint: 'Probable error factor = ±0.6745; Product error = √(E_1² x_2² + E_2² x_1²); Sum error (equal E) = E√n.',
    difficulty: 'Medium'
  },
  {
    id: 'mste_p21_closed_traverse_dmd',
    area: 'MSTE',
    domain: 'Surveying & Earthworks',
    topic: 'Tape Corrections, Probable Error & Closed Traverse',
    examSubtopic: 'Surveying, Leveling & Errors',
    title: 'Closed Traverse, DMD Area, Compass & Transit Adjustment & Polar (CPLX)',
    pageRef: 21,
    latex: '\\Sigma\\text{Dep} = 0, \\quad \\Sigma\\text{Lat} = 0, \\quad \\text{Area} = \\frac{\\Sigma\\, DA}{2} = \\frac{\\Sigma(\\text{DMD}\\cdot\\text{Lat})}{2}, \\quad \\text{LEC} = \\sqrt{\\Sigma\\text{Lat}^2 + \\Sigma\\text{Dep}^2}',
    secondaryEquations: [
      { label: 'DMD Rules & Double Area', latex: '\\text{DMD}_{AB} = \\text{Dep}_{AB}, \\qquad \\text{DMD}_{BC} = \\text{DMD}_{AB} + \\text{Dep}_{AB} + \\text{Dep}_{BC}, \\qquad DA = \\text{DMD}\\times\\text{Lat}' },
      { label: 'Compass Rule Adjustment', latex: '\\frac{C_n}{\\text{Error}_{\\text{lat/dep}}} = \\frac{\\text{Length/Distance}}{\\text{Perimeter}}' },
      { label: 'Transit Rule & Relative Error', latex: '\\frac{C_n}{\\text{Error}_{\\text{lat/dep}}} = \\frac{\\text{Lat/Dep}}{\\Sigma|\\text{Lat}| \\text{ or } \\Sigma|\\text{Dep}|}, \\qquad \\text{Relative Error} = \\frac{\\text{Error of Closure}}{\\text{Perimeter}}' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p21_traverse_cplx.png',
        caption: 'Closed traverse compass quadrant setup, DMD table, and Caltech Mode 2 (CPLX) r∠θ ↔ x+yi guide.',
        alt: 'Closed traverse and CPLX calculator method'
      }
    ],
    notes: [
      'Azimuth Default: From South unless True Azimuth (from North) is stated. 1 station perimeter = 20 m.'
    ],
    flashcardPrompt: 'State Closed Traverse sums, DMD init & update rules, Area, Compass vs Transit Rule ratios, and Error/Relative Error of Closure.',
    flashcardHint: 'Double Area = Σ(DMD × Lat); Compass weights by Length/Perimeter, Transit weights by |Lat|/Σ|Lat|.',
    difficulty: 'Medium'
  },
  {
    id: 'mste_p22_simple_compound_curves',
    area: 'MSTE',
    domain: 'Surveying & Earthworks',
    topic: 'Simple, Compound, Reverse & Spiral Curves',
    examSubtopic: 'Highway Geometric Design & Sight Distances',
    title: 'Horizontal Simple Curve & Compound Curve Elements + Degree of Curve',
    pageRef: 22,
    latex: 'T = R\\tan\\frac{I}{2}, \\quad L = 2R\\sin\\frac{I}{2}, \\quad LC = \\frac{R\\pi I}{180^\\circ}, \\quad E = R\\left(\\sec\\frac{I}{2}-1\\right), \\quad M = R\\left(1-\\cos\\frac{I}{2}\\right)',
    secondaryEquations: [
      { label: 'Degree of Curve (20 m Standard Station)', latex: '\\text{Arc Basis: } D = \\frac{1145.916}{R}, \\qquad \\text{Chord Basis: } \\sin\\frac{D}{2} = \\frac{10}{R}' },
      { label: 'Compound Curve Deflection Angle & Tangents', latex: 'DA = \\frac{\\text{Central Angle}}{2} = \\frac{I}{2}, \\qquad I = I_1 + I_2' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p22_simple_compound_curve.png',
        caption: 'Simple Circular Curve (PC, PI, PT, T, E, M, LC) and Compound Curve (PCC, R₁, R₂, I₁, I₂).',
        alt: 'Simple and compound horizontal curves diagrams'
      }
    ],
    flashcardPrompt: 'Write the five Simple Curve elements (T, Long Chord L, Length LC, External E, Middle Ordinate M) and Arc vs Chord Degree of Curve (20 m).',
    flashcardHint: 'Arc basis: D = 1145.916/R; Chord basis: sin(D/2) = 10/R.',
    difficulty: 'Easy'
  },
  {
    id: 'mste_p23_reverse_spiral_curves',
    area: 'MSTE',
    domain: 'Surveying & Earthworks',
    topic: 'Simple, Compound, Reverse & Spiral Curves',
    examSubtopic: 'Highway Geometric Design & Sight Distances',
    title: 'Reverse Curves & Spiral Transition Curves (Clothoid / Cubic Parabola)',
    pageRef: 23,
    latex: '\\theta = \\frac{L^2}{2 R L_s}\\times\\frac{180^\\circ}{\\pi}, \\qquad i = \\frac{\\theta}{3}, \\qquad X = L_s - \\frac{L^5}{40 R^2 (L_s)^2}, \\qquad Y = \\frac{L^3}{6 R L_s}',
    secondaryEquations: [
      { label: 'Spiral Throw p, Tangent Distance T_s & External E_s', latex: 'p = \\frac{(L_s)^2}{24 R}, \\qquad T_s = \\frac{L_s}{2} + (R + p)\\tan\\frac{I}{2}, \\qquad E_s = (R + p)\\sec\\frac{I}{2} - R' },
      { label: 'Min Spiral Length (Speed k) & Superelevation e', latex: 'L_s = \\frac{0.036\\, k^3}{R}, \\qquad e = \\frac{0.0079\\, k^2}{R}, \\qquad \\frac{D}{D_c} = \\frac{L}{L_s}' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p23_reverse_curve.png',
        caption: 'Reverse curves with parallel tangents and non-parallel converging tangents (PC, PRC, PT).',
        alt: 'Reverse horizontal curves diagram'
      },
      {
        src: '/assets/mste_formulas/m_p23_spiral_curve.png',
        caption: 'Spiral transition curve showing TS, SC, CS, ST, spiral angle θ_s, throw p, X/Y offsets, and T_s.',
        alt: 'Spiral transition curve diagram'
      }
    ],
    notes: [
      'Note: Degree of curvature along a spiral transition varies linearly as D/D_c = L/L_s.',
      'At the SC junction where L = L_s: X_s = L_s − L_s³/(40R²) and Y_s = L_s²/(6R).'
    ],
    flashcardPrompt: 'State Spiral Curve formulas for angle θ, deflection i, throw p, X & Y offsets, T_s, E_s, minimum L_s (speed k), superelevation e, and D/D_c.',
    flashcardHint: 'Throw p = L_s²/(24R), offset at SC is Y_s = L_s²/(6R) = 4p, and deflection i = θ/3.',
    difficulty: 'Hard'
  },
  {
    id: 'mste_p24_vertical_parabolic_curves',
    area: 'MSTE',
    domain: 'Surveying & Earthworks',
    topic: 'Symmetrical & Unsymmetrical Vertical Curves',
    examSubtopic: 'Highway Geometric Design & Sight Distances',
    title: 'Symmetrical & Unsymmetrical Parabolic Vertical Curves (Varignon & Grade)',
    pageRef: 24,
    latex: 'H = \\frac{L}{8}(g_1 - g_2), \\qquad \\frac{x^2}{y} = \\frac{(L/2)^2}{H}, \\qquad S = \\frac{g_1 L}{|g_1 - g_2|}',
    secondaryEquations: [
      { label: 'Unsymmetrical Vertical Curve H & Common Grade g₃', latex: 'H = \\frac{L_1 L_2}{2(L_1 + L_2)}(g_1 - g_2), \\qquad g_3(L_1 + L_2) = g_1 L_1 + g_2 L_2 \\implies g_3 = \\frac{g_1 L_1 + g_2 L_2}{L_1 + L_2}' },
      { label: 'Grade Area & Elevation Equations', latex: 'e = \\frac{|g_1 - g_2|L}{8}, \\quad \\text{Sta }P = \\text{Sta }V - \\frac{L}{2} + S, \\quad \\text{Elev }P = \\text{Elev }V \\pm e \\pm A_{\\text{diagram}}' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p24_vertical_curves.png',
        caption: 'Symmetrical and unsymmetrical vertical parabolic curves showing H, summit distance S, and grade diagram.',
        alt: 'Symmetrical and unsymmetrical vertical curves'
      }
    ],
    notes: [
      'Note: Respect algebraic signs of g₁ and g₂ in vertical-curve grade change g₃, offset H, and summit/sag location.'
    ],
    flashcardPrompt: 'Give midpoint offset H, parabola x²/y, Station/Elevation of P, and Unsymmetrical Vertical Curve H & Varignon g₃ equations.',
    flashcardHint: 'Symmetrical H = L·Δg / 8; Unsymmetrical H = L₁L₂·Δg / [2(L₁ + L₂)].',
    difficulty: 'Medium'
  },
  {
    id: 'mste_p25_earthworks_volumes',
    area: 'MSTE',
    domain: 'Surveying & Earthworks',
    topic: 'Earthworks Cross Sections, Volumes & Prismoidal Rules',
    examSubtopic: 'Surveying, Leveling & Errors',
    title: 'Cross Sections (Level, 3-Level, 5-Level), End-Area, Prismoidal & Simpson’s 1/3',
    pageRef: 25,
    latex: 'V_E = \\frac{L}{2}(A_1 + A_2), \\qquad V_P = \\frac{L}{6}(A_1 + 4A_m + A_2), \\qquad C_P = \\frac{L}{12}(C_1 - C_2)(d_1 - d_2), \\qquad V_P = V_E - C_P',
    secondaryEquations: [
      { label: 'Level, 3-Level & 5-Level Cross Sections', latex: 'A_L = BC + SC^2, \\quad A_{3L} = \\frac{1}{2}\\left[C(d_L + d_R) + \\frac{B}{2}(h_L + h_R)\\right], \\quad A_{5L} = \\frac{1}{2}(BC + f_R d_R + f_L d_L)' },
      { label: 'Trapezoidal Rule & Simpson’s 1/3 Rule for AREA', latex: 'A_{\\text{trap}} = L\\left(\\frac{h_i + h_f}{2} + \\sum h\\right), \\qquad A_{\\text{Simp}} = \\frac{L}{3}\\left(h_i + h_f + 4\\sum h_{\\text{even-idx}} + 2\\sum h_{\\text{odd-idx}}\\right)' },
      { label: 'Simpson’s 1/3 Rule for VOLUME', latex: 'V_{\\text{Simp}} = \\frac{L}{3}\\left(A_1 + 2\\sum A_{\\text{odd}} + 4\\sum A_{\\text{even}} + A_n\\right)' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p25_earthworks_sections.png',
        caption: 'Level, Three-Level, and Five-Level earthwork cross sections showing roadbed B, side slope S, and stake heights.',
        alt: 'Earthworks cross section diagrams'
      }
    ],
    notes: [
      'Note index convention: When endpoints are indexed h_1 (or A_1) and h_n (or A_n), interior indices A_2, A_4... (2nd, 4th...) take weight 4 and interior A_3, A_5... take weight 2. Must have odd number of sections (even strips); add final end strip by Trapezoidal Rule if even count.'
    ],
    flashcardPrompt: 'Write Level/3-Level/5-Level Areas, End-Area V_E, Prismoidal V_P & C_P, Trapezoidal Area, and Simpson’s 1/3 Rules (both Area & Volume).',
    flashcardHint: 'V_P = V_E − C_P; Simpson’s 1/3 uses 1/3 × L × [ends + 4(interior evens) + 2(interior odds)].',
    difficulty: 'Medium'
  },

  // =========================================================================
  // 5. HIGHWAY, TRANSPORTATION & PORTS ENGINEERING (Pages 26 - 28)
  // =========================================================================
  {
    id: 'mste_p26_traffic_safety_speed',
    area: 'MSTE',
    domain: 'Highway, Transpo & Ports',
    topic: 'Highway Safety, Accident Rates, Traffic Flow & PHF',
    examSubtopic: 'Traffic Engineering, Markings & Signs',
    title: 'Crash Rates, Severity Ratio, Space/Time Mean Speed, Stream Flow & PHF',
    pageRef: 26,
    latex: 'R_{\\text{seg}} = \\frac{A(100{,}000{,}000)}{ADT\\times N\\times 365\\times L}, \\qquad R_{\\text{int}} = \\frac{A(1{,}000{,}000)}{ADT\\times N\\times 365}, \\qquad SR = \\frac{f + i}{f + i + p}',
    secondaryEquations: [
      { label: 'Space Mean Speed (u_s) vs Time/Spot Mean Speed (u_t)', latex: 'u_s = \\frac{\\sum d}{\\sum t} = \\frac{n}{\\sum(1/u_i)}, \\qquad u_t = \\frac{\\sum(d/t)}{n} = \\frac{\\sum u_i}{n}' },
      { label: 'Rate of Flow, Time Headway, Spacing & Density', latex: 'q = k u_s = \\frac{n}{t}, \\qquad T = \\frac{1}{q}\\;[\\text{hrs}], \\qquad S = \\frac{1}{k}, \\qquad k = \\frac{n}{L}' },
      { label: 'Peak Hour Factor (PHF), PHV & DHV', latex: 'PHF = \\frac{q}{q_{\\max}} = \\frac{PHV}{DHV}, \\qquad PHV = \\sum\\text{vol. of traffic}, \\qquad DHV = 4\\times(\\text{max 15-min count})' }
    ],
    flashcardPrompt: 'Write Segment vs Intersection Crash Rates, Severity Ratio SR, Space vs Time Mean Speed, q/k/T/S traffic stream equations, and PHF/PHV/DHV.',
    flashcardHint: 'Segment crash rate = 10⁸ (100 MVM); intersection = 10⁶ (MEV); u_s is harmonic mean!',
    difficulty: 'Medium'
  },
  {
    id: 'mste_p27_highway_sight_pavement',
    area: 'MSTE',
    domain: 'Highway, Transpo & Ports',
    topic: 'Horizontal Curves, Sight Distance & Pavement Design',
    examSubtopic: 'Highway Geometric Design & Sight Distances',
    title: 'Horizontal Curves, Centrifugal Ratio, Stopping Sight Distance & Pavement Thickness',
    pageRef: 27,
    latex: 'R = \\frac{v^2}{g(e + f)}, \\qquad CR\\text{ or }IF = \\frac{v^2}{gR} = e + f = \\frac{CF}{W}, \\qquad CF = \\frac{Wv^2}{gR}',
    secondaryEquations: [
      { label: 'Sight Distance, Braking Distance, Deceleration & Brake Efficiency', latex: 'S = vt + \\frac{v^2}{2g(f\\pm G)}, \\quad S_b = \\frac{v_0^2 - v_1^2}{2a} = \\frac{v_1^2 - v_2^2}{2g(e+f)}, \\quad a = g(f\\pm G), \\quad t_b = \\frac{v}{g(f\\pm G)}, \\quad b_e = \\frac{f}{f_{\\text{ave}}}\\times 100\\%' },
      { label: 'Rigid Pavement (Without Dowels vs With Dowels Edge & Corner)', latex: 't_{\\text{no dowel}} = \\sqrt{\\frac{3W}{f}}, \\qquad t_{\\text{edge (w/ dowel)}} = \\sqrt{\\frac{3W}{2f}}, \\qquad t_{\\text{corner (w/ dowel)}} = \\sqrt{\\frac{3W}{4f}}' },
      { label: 'Flexible Pavement & Expansion Pressure Thickness', latex: 't_{\\text{flex}} = 0.564\\sqrt{\\frac{W}{f_1}} - r, \\qquad t_{\\text{exp}} = \\frac{\\text{expansion pressure}}{\\text{pavement density}}' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p27_highway_pavement.png',
        caption: 'Vehicle forces on banked horizontal curve (e + f), Sight Distance, and Flexible Pavement load cone.',
        alt: 'Banked horizontal curve, sight distance, and pavement design'
      }
    ],
    notes: [
      'Skid & superelevation equivalence: a/g = e + f and G = e; note deceleration/grade sign uses (+) upgrade, (−) downgrade.'
    ],
    flashcardPrompt: 'Write Horizontal Curve R, Centrifugal Ratio (CR/IF), Centripetal Force CF, SSD, Braking Time, Brake Efficiency b_e, and Rigid/Flexible Pavement t.',
    flashcardHint: 'Rigid pavement denominators under 3W: f (no dowels), 2f (edge w/ dowels), 4f (corner w/ dowels).',
    difficulty: 'Hard'
  },
  {
    id: 'mste_p28_dowels_turnout_ports_waves',
    area: 'MSTE',
    domain: 'Highway, Transpo & Ports',
    topic: 'Railroad Turnouts, Dowel Bars & Ports/Waves',
    examSubtopic: 'Pavement Distress, Asphalt & Concrete Paving',
    title: 'Tie/Dowel Bar Spacing, Railroad Turnout (Frog Number) & Coastal/Harbor Waves',
    pageRef: 28,
    latex: 'N = W = m(L)(t)(s), \\qquad T = F_f = \\mu N, \\qquad FN = \\frac{HL}{HS} = \\frac{1}{2}\\cot\\frac{\\theta}{2}',
    secondaryEquations: [
      { label: 'Quaywall Foundation Depths', latex: '\\text{Gravity type quaywall} = \\frac{H}{3}, \\qquad \\text{Sheet pile type quaywall} = \\frac{2}{3}H' },
      { label: 'Deep-Water Waves (d > L/2)', latex: 'L = \\frac{g T^2}{2\\pi}, \\qquad L = \\frac{2\\pi v^2}{g} \\;(v = 1.2495\\, L^{1/2}), \\qquad T = \\frac{2\\pi v}{g} \\;(v = 1.56\\, T)' },
      { label: 'Shallow-Water Waves (d < L/2)', latex: 'L = \\frac{g T^2}{2\\pi}\\tanh\\left(\\frac{2\\pi d}{L}\\right), \\qquad v = \\frac{g T}{2\\pi}\\tanh\\left(\\frac{2\\pi d}{L}\\right)' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p28_turnout_ports.png',
        caption: 'Tie bar concrete slab force balance, Railroad Turnout (frog angle θ, lead/heel lengths), and Port MLLW/MHHW elevation.',
        alt: 'Dowel bars, railroad turnout, and ports harbor diagram'
      }
    ],
    flashcardPrompt: 'State Concrete Tie Bar N & T equations, Railroad Frog Number FN, Quaywall heights, and ALL Deep-Water vs Shallow-Water Wave formulas.',
    flashcardHint: 'Deep wave: v = 1.56 T = 1.2495 √L; FN = HL/HS = ½ cot(θ/2).',
    difficulty: 'Hard'
  },

  // =========================================================================
  // 6. ENGINEERING ECONOMY (Pages 29 - 34)
  // =========================================================================
  {
    id: 'mste_p29_simple_compound_interest',
    area: 'MSTE',
    domain: 'Engineering Economy',
    topic: 'Simple & Compound Interest, Effective Rates & Inflation',
    examSubtopic: 'Project Management, CPM/PERT & Equipment Economics',
    title: 'Simple Interest, Compound Interest, Continuous Compounding & Leap Year Rules',
    pageRef: 29,
    latex: 'I = Prn, \\quad F = P + I = P(1+rn), \\quad F_n = P(1+i)^n, \\quad F_{\\text{cont}} = P e^{rn}',
    secondaryEquations: [
      { label: 'General Cash Flow Compound Formula', latex: 'F_b = F_a(1+i)^{b-a}, \\qquad i = \\frac{r}{m}' },
      { label: 'Ordinary vs Exact Simple Interest Days', latex: '\\text{Ordinary: } 1\\text{ yr} = 360\\text{ days } (30/\\text{mo}); \\qquad \\text{Exact: } 365\\text{ (normal) or } 366\\text{ (leap yr)}' }
    ],
    tables: [
      {
        title: 'Compounding Period (m per year) & Leap Year Rules',
        headers: ['Compounding', 'm', 'Rule', 'Value / Test'],
        rows: [
          ['Annually / Semi', '1 / 2', 'Divisible by 4 (non-century)', 'Leap Year'],
          ['Quarterly / Bi-mo', '4 / 6', 'Century ÷ 100 & ÷ 400', 'Leap Year'],
          ['Monthly / Daily', '12 / 365', 'Century ÷ 100 only', 'Normal Year']
        ]
      }
    ],
    notes: [
      'Note: Simple interest future worth is F = P + I = P(1 + ni).'
    ],
    flashcardPrompt: 'Distinguish Simple Interest (I, F), Discrete Compound Interest, Continuous Compounding, General Shift F_b, Ordinary vs Exact Days, and Leap Years.',
    flashcardHint: 'Ordinary = 360 days; Continuous F = Pe^(rn); century years need ÷400 to be leap years.',
    difficulty: 'Easy'
  },
  {
    id: 'mste_p30_effective_rate_annuities',
    area: 'MSTE',
    domain: 'Engineering Economy',
    topic: 'Annuities, Perpetuity, Gradient Series & Capitalized Cost',
    examSubtopic: 'Project Management, CPM/PERT & Equipment Economics',
    title: 'Effective Interest Rate (ER), Ordinary Annuity, Annuity Due, Deferred & Perpetuity',
    pageRef: 30,
    latex: 'ER = \\left(1+\\frac{r}{m}\\right)^m - 1, \\qquad F = A\\left[\\frac{(1+i)^n - 1}{i}\\right], \\qquad P = \\frac{A}{i}\\;(\\text{Perpetuity})',
    secondaryEquations: [
      { label: 'Continuous Effective Rate & Rate Conversion', latex: 'ER_{\\text{cont}} = e^r - 1, \\qquad ER_1 = ER_2' },
      { label: 'Present Worth of Annuity via I = P(i)', latex: 'A = I = P(i) \\implies P = A\\left[\\frac{1 - (1+i)^{-n}}{i}\\right] = A\\left[\\frac{(1+i)^n - 1}{i(1+i)^n}\\right]' },
      { label: 'Annuity Due vs Deferred Annuity Shift', latex: 'P_{\\text{due}} = A + A(P/A, i, n-1), \\qquad P_{\\text{def}} = A(P/A, i, n)\\,(1+i)^{-k}' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p30_annuity_cfd.png',
        caption: 'Cash flow timelines comparing Perpetuity, Annuity Due, Deferred Annuity, and Ordinary Annuity.',
        alt: 'Annuity and perpetuity cash flow diagrams'
      }
    ],
    notes: [
      'Golden CFD Rule: F worth is always at the Last Payment; P worth of ordinary annuity lands 1 period before First Payment.'
    ],
    flashcardPrompt: 'Give Discrete & Continuous Effective Interest Rates, Ordinary Annuity F & P formulas, Perpetuity P = A/i, and Annuity Due/Deferred shifts.',
    flashcardHint: 'Ordinary Annuity P lands 1 period before first A; F lands at last A. Perpetuity P = A/i.',
    difficulty: 'Medium'
  },
  {
    id: 'mste_p31_gradient_inflation',
    area: 'MSTE',
    domain: 'Engineering Economy',
    topic: 'Annuities, Perpetuity, Gradient Series & Capitalized Cost',
    examSubtopic: 'Project Management, CPM/PERT & Equipment Economics',
    title: 'Arithmetic & Geometric Gradient Series & Fisher Inflation Formulas',
    pageRef: 31,
    latex: 'P = \\sum_{x_i}^{x_f} \\frac{f(x)}{(1+i)^x}, \\qquad f(x)_{\\text{arith}} = A + Bx, \\qquad f(x)_{\\text{geom}} = AB^x',
    secondaryEquations: [
      { label: 'Real vs Inflation-Adjusted (Fisher) Interest Rate', latex: 'i = \\frac{1 + i_f}{1 + f} - 1, \\qquad i_f = i + f + i\\cdot f' },
      { label: 'Future Inflated Price & Constant-Purchasing Worth', latex: 'F_{\\text{price}} = P_{\\text{price}}(1 + f)^n, \\qquad F_{\\text{constant}} = \\frac{P(1 + i_f)^n}{(1 + f)^n}' }
    ],
    flashcardPrompt: 'Write Arithmetic & Geometric Gradient Series summations, Real Rate i, Fisher Inflation Rate i_f, Future Inflated Price, and Constant Worth.',
    flashcardHint: 'i_f = i + f + i·f; Arithmetic fits a linear trend A + Bx while Geometric fits exponential AB^x.',
    difficulty: 'Medium'
  },
  {
    id: 'mste_p31_sl_sinking_fund_depreciation',
    area: 'MSTE',
    domain: 'Engineering Economy',
    topic: 'Depreciation Methods (SL, Sinking Fund, DB, SYD, MACRS)',
    examSubtopic: 'Project Management, CPM/PERT & Equipment Economics',
    title: 'Depreciation Basics, Straight-Line Method & Sinking Fund Method',
    pageRef: 31,
    latex: 'BV_m = FC - D_m, \\qquad d_{\\text{SL}} = \\frac{FC - SV}{n}, \\qquad FC - SV = d\\left[\\frac{(1+i)^n - 1}{i}\\right]',
    secondaryEquations: [
      { label: 'Straight-Line Cumulative Depreciation', latex: 'D_m = d(m), \\qquad BV_m = FC - D_m' },
      { label: 'Sinking Fund Accumulated Depreciation at Year m', latex: 'D_m = d\\left[\\frac{(1+i)^m - 1}{i}\\right], \\qquad d_{\\text{SF}} = \\frac{(FC - SV)\\,i}{(1+i)^n - 1}' }
    ],
    flashcardPrompt: 'Write Straight-Line depreciation (d, D_m, BV_m) and Sinking Fund depreciation formulas.',
    flashcardHint: 'Sinking Fund treats annual charge d as an ordinary annuity accumulating to total depreciable amount (FC − SV).',
    difficulty: 'Easy'
  },
  {
    id: 'mste_p32_depreciation_syd_db_macrs',
    area: 'MSTE',
    domain: 'Engineering Economy',
    topic: 'Depreciation Methods (SL, Sinking Fund, DB, SYD, MACRS)',
    examSubtopic: 'Project Management, CPM/PERT & Equipment Economics',
    title: 'Sum-of-Years-Digits (SYD), Declining Balance (DB / DDB), Service Output & MACRS',
    pageRef: 32,
    latex: 'BV_m = FC(1-K)^m, \\qquad K_{\\text{Matheson}} = 1 - \\sqrt[n]{\\frac{SV}{FC}}, \\qquad K_{\\text{DDB}} = \\frac{2}{n}',
    secondaryEquations: [
      { label: 'Declining Balance Annual Charge & SV Rule', latex: 'd_m = BV_{m-1} - BV_m, \\qquad D_m = FC - BV_m, \\qquad BV_{m,\\text{DDB}} = FC(1-K)^m \\ge SV' },
      { label: 'Sum of Years’ Digits (SYD) Method', latex: '\\text{SYD} = \\frac{n(n+1)}{2}, \\qquad d_m = \\frac{n - m + 1}{\\text{SYD}}(FC - SV), \\qquad BV_m = SV + \\frac{(n-m)(n-m+1)}{n(n+1)}(FC - SV)' },
      { label: 'Service Output Method', latex: 'd = \\frac{FC - SV}{Q_n}, \\qquad D_m = d(Q_m), \\qquad BV_m = FC - D_m' },
      { label: 'MACRS Method (Half-Year Convention)', latex: '\\% d_1 = \\frac{1}{n}, \\quad d_1 = \\%d_1\\cdot FC; \\quad \\%d_m = \\frac{2}{n}(1 - \\%d_{\\text{prev}}), \\quad d_m = \\%d_m\\cdot FC; \\quad D_m = \\sum_{i=1}^m d_i' }
    ],
    notes: [
      'Matheson DB cannot evaluate if SV = 0 (use DDB K = 2/n with BV_m ≥ SV). Calculator Mode-Stat: SYD → Quadratic (0,FC),(n,SV),(n+1,SV); DB → ab^x.'
    ],
    flashcardPrompt: 'State BV_m and K for Matheson DB & DDB, SYD d_m & BV_m, Service Output Method, and MACRS %d_1 / %d_m equations.',
    flashcardHint: 'Matheson K = 1 − (SV/FC)^(1/n); DDB K = 2/n; MACRS year 1 uses half-rate 1/n.',
    difficulty: 'Medium'
  },
  {
    id: 'mste_p33_p34_economy_indicators',
    area: 'MSTE',
    domain: 'Engineering Economy',
    topic: 'BCR, Rate of Return, Break-Even, Stock & Payback',
    examSubtopic: 'Project Management, CPM/PERT & Equipment Economics',
    title: 'Capitalized Cost, Break-Even, BCR, ROR, Stock Yield, Payback & Simple Discount',
    pageRef: 33,
    latex: 'C = FC + \\frac{RC - SV}{(1+i)^n - 1} + \\frac{OM}{i}, \\qquad BCR = \\frac{PW_{\\text{benefit}}}{PW_{\\text{cost}}} > 1, \\qquad ROR = \\frac{\\text{Annual Net Profit}}{\\text{Capital Invested}}',
    secondaryEquations: [
      { label: 'Capitalized Cost Forms & Annual Cost (AC = C·i)', latex: 'C = FC + (P_{\\text{RC}} - SV) + P_{\\text{OM}}, \\qquad AC = C\\cdot i = FC\\cdot i + OM + \\frac{(RC - SV)i}{(1+i)^n - 1}' },
      { label: 'Break-Even & Recovery Period', latex: '\\text{Cost} = \\text{Revenue}, \\quad \\text{Profit} = \\text{Income} - \\text{Expenses}, \\quad \\text{Recovery Period} = \\frac{\\text{Total Capital Invested}}{\\text{Annual Net Profit}} = \\frac{1}{ROR}' },
      { label: 'Stock Rate of Return (Constant vs Growth g)', latex: 'i = \\frac{d}{P_0}\\;(\\text{constant}), \\qquad i = \\frac{d_1}{P_0} + g\\;(\\text{constant growth } g)' },
      { label: 'Payout Period & Simple Discount Rate', latex: '\\text{Payout} = \\frac{\\text{Depreciable Fixed Capital}}{\\text{Annual Profit + Annual Dep}}, \\qquad i = \\frac{F-P}{P}, \\quad i_d = \\frac{F-P}{F} = \\frac{i}{1+i}' }
    ],
    notes: [
      'Total Capital = Fixed Capital + Working Capital (working capital finances day-to-day operations).'
    ],
    flashcardPrompt: 'Write Capitalized Cost, Annual Cost, BCR, ROR, Recovery Period, Stock Yield (constant & growth), Payout Period, and Simple Discount i_d.',
    flashcardHint: 'Simple discount i_d = (F − P)/F = i/(1 + i) for 1 year.',
    difficulty: 'Medium'
  },

  // =========================================================================
  // 7. CALCULUS, DIFFERENTIAL EQUATIONS & VECTOR ANALYSIS (Pages 34 - 44, 47 - 48)
  // =========================================================================
  {
    id: 'mste_p35_integrals_alg_trig',
    area: 'MSTE',
    domain: 'Calculus, DE & Vector Analysis',
    topic: 'Integral Calculus Rules, Wallis Formula & Area/Arc Length',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'All 16 Algebraic, Exponential, Logarithmic & Trigonometric Integrals',
    pageRef: 35,
    latex: '\\int u^n\\,du = \\frac{u^{n+1}}{n+1} + C\\;(n\\neq -1), \\quad \\int a^u\\,du = \\frac{a^u}{\\ln a} + C, \\quad \\int\\frac{du}{u} = \\ln|u| + C, \\quad \\int\\ln u\\,du = u\\ln u - u + C',
    secondaryEquations: [
      { label: 'Constant & Natural Exponential', latex: '\\int a\\,du = a\\int du = a u + C, \\qquad \\int e^u\\,du = e^u + C' },
      { label: 'Basic Trigonometric Integrals (4)', latex: '\\int\\sin u\\,du = -\\cos u + C, \\quad \\int\\cos u\\,du = \\sin u + C, \\quad \\int\\sec^2 u\\,du = \\tan u + C, \\quad \\int\\csc^2 u\\,du = -\\cot u + C' },
      { label: 'Sec/Csc Product Integrals (2)', latex: '\\int\\sec u\\tan u\\,du = \\sec u + C, \\qquad \\int\\csc u\\cot u\\,du = -\\csc u + C' },
      { label: 'Logarithmic Trig Integrals (4)', latex: '\\int\\tan u\\,du = \\ln|\\sec u|+C, \\; \\int\\cot u\\,du = \\ln|\\sin u|+C, \\; \\int\\sec u\\,du = \\ln|\\sec u + \\tan u|+C, \\; \\int\\csc u\\,du = \\ln|\\csc u - \\cot u|+C' }
    ],
    notes: [
      'Note: Basic integral ∫a du = au + C, and exponential integral ∫a^u du = a^u / ln(a) + C.'
    ],
    flashcardPrompt: 'Recite ALL 6 Algebraic/Exp/Log Integrals and ALL 10 Trigonometric Integrals (sin, cos, tan, cot, sec, csc, sec², csc², sec tan, csc cot).',
    flashcardHint: 'Note which trig integrals carry (−): ∫sin u, ∫csc² u, ∫csc u cot u, and notice ln|csc u − cot u|.',
    difficulty: 'Easy'
  },
  {
    id: 'mste_p34_p35_integral_calculus',
    area: 'MSTE',
    domain: 'Calculus, DE & Vector Analysis',
    topic: 'Integral Calculus Rules, Wallis Formula & Area/Arc Length',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Inverse Trig Integrals, Integration by Parts, Trig Substitution & Wallis Formula',
    pageRef: 35,
    latex: '\\int_0^{\\pi/2} \\sin^m\\theta\\cos^n\\theta\\,d\\theta = \\frac{[(m-1)(m-3)\\cdots(2\\text{ or }1)][(n-1)(n-3)\\cdots(2\\text{ or }1)]}{(m+n)(m+n-2)\\cdots(2\\text{ or }1)}\\cdot\\alpha',
    secondaryEquations: [
      { label: 'Inverse Trigonometric Form Integrals', latex: '\\int\\frac{du}{\\sqrt{a^2-u^2}} = \\arcsin\\frac{u}{a}+C, \\quad \\int\\frac{du}{a^2+u^2} = \\frac{1}{a}\\arctan\\frac{u}{a}+C, \\quad \\int\\frac{du}{u\\sqrt{u^2-a^2}} = \\frac{1}{a}\\operatorname{arcsec}\\frac{u}{a}+C' },
      { label: 'Integrals of arcsin(u) & arctan(u)', latex: '\\int\\arcsin u\\,du = u\\arcsin u + \\sqrt{1-u^2} + C, \\qquad \\int\\arctan u\\,du = u\\arctan u - \\ln\\sqrt{1+u^2} + C' },
      { label: 'Integration by Parts & Trig Substitution', latex: '\\int u\\,dv = uv - \\int v\\,du; \\qquad \\sqrt{a^2-u^2}\\Rightarrow u=a\\sin\\theta, \\; \\sqrt{a^2+u^2}\\Rightarrow u=a\\tan\\theta, \\; \\sqrt{u^2-a^2}\\Rightarrow u=a\\sec\\theta' },
      { label: 'Wallis Formula α Multiplier', latex: '\\alpha = \\frac{\\pi}{2}\\;(\\text{when both }m, n\\text{ are even}), \\qquad \\alpha = 1\\;(\\text{otherwise})' }
    ],
    notes: [
      'Note: ∫du/(a² + u²) = (1/a)arctan(u/a) + C, whereas ∫du/(a² − u²) = (1/2a)ln|(a+u)/(a−u)| + C.'
    ],
    flashcardPrompt: 'State all 5 Inverse-Trig Integrals, Integration by Parts, all 3 Trig Substitutions, and Wallis Formula (with α cases).',
    flashcardHint: 'Wallis α = π/2 ONLY when BOTH m and n are even non-negative integers; otherwise α = 1.',
    difficulty: 'Medium'
  },
  {
    id: 'mste_p36_area_arclength_polar',
    area: 'MSTE',
    domain: 'Calculus, DE & Vector Analysis',
    topic: 'Integral Calculus Rules, Wallis Formula & Area/Arc Length',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Area by Vertical/Horizontal Strips, Polar Area & Arc Length (ds² = dx² + dy²)',
    pageRef: 36,
    latex: 'A_{\\text{vert}} = \\int_{x_1}^{x_2}(y_U - y_L)\\,dx, \\quad A_{\\text{horiz}} = \\int_{y_1}^{y_2}(x_R - x_L)\\,dy, \\quad A_{\\text{polar}} = \\frac{1}{2}\\int_{\\theta_1}^{\\theta_2} r^2\\,d\\theta',
    secondaryEquations: [
      { label: 'Differential & Rectangular Arc Length', latex: 'ds^2 = dx^2 + dy^2, \\qquad S = \\int_{x_1}^{x_2}\\sqrt{1 + \\left(\\frac{dy}{dx}\\right)^2}\\,dx = \\int_{y_1}^{y_2}\\sqrt{1 + \\left(\\frac{dx}{dy}\\right)^2}\\,dy' },
      { label: 'Polar Arc Length', latex: 'S = \\int_{\\theta_1}^{\\theta_2}\\sqrt{r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2}\\,d\\theta' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p36_integration_areas.png',
        caption: 'Horizontal/vertical differential strips, polar sector differential ½r²dθ, and arc length ds = √(dx² + dy²).',
        alt: 'Integration area strips and arc length diagrams'
      }
    ],
    notes: [
      'Note: Vertical strip area integrals integrate (y_top − y_bot) with respect to dx.'
    ],
    flashcardPrompt: 'Write Vertical/Horizontal Strip area integrals, Polar Area ½∫r²dθ, ds² = dx² + dy², and Rectangular/Polar Arc Length formulas.',
    flashcardHint: 'Polar area = ½ ∫r² dθ; Polar arc length = ∫√(r² + (dr/dθ)²) dθ.',
    difficulty: 'Easy'
  },
  {
    id: 'mste_p37_volumes_revolution',
    area: 'MSTE',
    domain: 'Calculus, DE & Vector Analysis',
    topic: 'Volumes, Surface Area, Centroids, Pappus & MOI',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Volume of Solids of Revolution (Circular Disk/Washer vs Cylindrical Shell)',
    pageRef: 37,
    latex: 'V_{\\text{disk/washer}} = \\pi\\int_{y_1}^{y_2}(x_R^2 - x_L^2)\\,dy, \\qquad V_{\\text{shell}} = 2\\pi\\int_{x_1}^{x_2} x_c(y_U - y_L)\\,dx',
    secondaryEquations: [
      { label: 'Washer Method (Horizontal Axis)', latex: 'V = \\pi\\int_{x_1}^{x_2}(y_U^2 - y_L^2)\\,dx' },
      { label: 'Shell Method (Horizontal Axis)', latex: 'V = 2\\pi\\int_{y_1}^{y_2} y_c(x_R - x_L)\\,dy' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p37_solids_revolution.png',
        caption: 'Circular Disk/Washer (strip ⊥ axis) vs Cylindrical Shell Method (strip ∥ axis).',
        alt: 'Disk washer and cylindrical shell solid revolution diagrams'
      }
    ],
    flashcardPrompt: 'Distinguish Circular Disk/Washer vs Cylindrical Shell volume formulas when revolving strips about vertical vs horizontal axes.',
    flashcardHint: 'Disk/Washer uses strip PERPENDICULAR to rotation axis; Shell uses strip PARALLEL to rotation axis.',
    difficulty: 'Medium'
  },
  {
    id: 'mste_p38_surface_centroids_pappus_moi',
    area: 'MSTE',
    domain: 'Calculus, DE & Vector Analysis',
    topic: 'Volumes, Surface Area, Centroids, Pappus & MOI',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Surface Area of Revolution, Centroids (V/H Strips), Varignon & Pappus Theorem',
    pageRef: 38,
    latex: 'A_s = 2\\pi\\int_{a_1}^{a_2} r\\,ds, \\qquad V_{\\text{Pappus}} = 2\\pi R A, \\qquad R = \\frac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}}',
    secondaryEquations: [
      { label: 'Strip Centroid Coordinates & Vertical Strip Integration', latex: 'x_c = \\frac{x_R + x_L}{2}, \\; y_c = \\frac{y_U + y_L}{2}; \\quad Ax_G = \\int_{x_1}^{x_2} x(y_U - y_L)\\,dx, \\; Ay_G = \\frac{1}{2}\\int_{x_1}^{x_2}(y_U^2 - y_L^2)\\,dx' },
      { label: 'Horizontal Strip Centroids & Area', latex: 'Ax_G = \\frac{1}{2}\\int_{y_1}^{y_2}(x_R^2 - x_L^2)\\,dy, \\quad Ay_G = \\int_{y_1}^{y_2} y(x_R - x_L)\\,dy, \\quad A = \\int_{y_1}^{y_2}(x_R - x_L)\\,dy' },
      { label: 'Varignon’s Integral Moments & Rectangle MOI Shortcuts', latex: 'Vx_G = \\int dV\\,x_c, \\; Mx_G = \\int dM\\,x_c, \\; Wx_G = \\int dW\\,x_c; \\quad \\bar{I}_x = \\frac{bh^3}{12}, \\; I_{\\text{base}} = \\frac{bh^3}{3}, \\; I = \\frac{bh^3}{12} + Ad^2' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p38_surface_centroids.png',
        caption: 'Surface area of revolution, vertical/horizontal strip centroids, and Pappus axis-distance setup.',
        alt: 'Surface area, centroids, and Pappus theorem diagram'
      }
    ],
    notes: [
      'Note: Full surface area of revolution around an axis at distance r is A_s = 2π∫r ds.'
    ],
    flashcardPrompt: 'Write Surface Area of Revolution, Vertical & Horizontal Strip Centroid integrals, Varignon’s Theorem, Pappus V = 2πRA, and Rectangle bh³/12 vs bh³/3.',
    flashcardHint: 'Integrating orthogonal to strip length multiplies by midpoint (e.g., ½(y_U + y_L))!',
    difficulty: 'Medium'
  },
  {
    id: 'mste_p39_moi_kinematics_integration',
    area: 'MSTE',
    domain: 'Calculus, DE & Vector Analysis',
    topic: 'Volumes, Surface Area, Centroids, Pappus & MOI',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Moments of Inertia (All 4 Strip Integrals), Transfer Formula & 3D Time Motion',
    pageRef: 39,
    latex: 'J = I_x + I_y = \\int r^2\\,dA, \\quad I_{xy} = \\int xy\\,dA, \\quad k = \\sqrt{\\frac{I}{A}}, \\quad I = I_G + A d^2',
    secondaryEquations: [
      { label: 'I_x Using Horizontal vs Vertical Strip', latex: 'I_x = \\int_{y_1}^{y_2} y^2(x_R - x_L)\\,dy = \\frac{1}{3}\\int_{x_1}^{x_2}(y_U^3 - y_L^3)\\,dx' },
      { label: 'I_y Using Horizontal vs Vertical Strip', latex: 'I_y = \\frac{1}{3}\\int_{y_1}^{y_2}(x_R^3 - x_L^3)\\,dy = \\int_{x_1}^{x_2} x^2(y_U - y_L)\\,dx' },
      { label: 'Motion (Functions of Time — Integration)', latex: 's = \\int v\\,dt, \\quad v = \\int a\\,dt, \\quad \\text{Dist} = \\int_{t_1}^{t_2}\\sqrt{v_x^2 + v_y^2 + v_z^2}\\,dt, \\quad |S| = \\sqrt{S_x^2 + S_y^2 + S_z^2}' },
      { label: '3D Instantaneous Speed & Acceleration Magnitudes', latex: '|v| = \\sqrt{v_x^2 + v_y^2 + v_z^2}, \\qquad |a| = \\sqrt{a_x^2 + a_y^2 + a_z^2}' }
    ],
    flashcardPrompt: 'State all 4 MOI strip integrals (Ix & Iy for horiz vs vert strips), I_xy, k, Transfer I = I_G + Ad², and Distance vs Displacement in 3D motion.',
    flashcardHint: 'Parallel strip to axis uses y²dA; perpendicular strip uses ⅓(y_U³ − y_L³)dx.',
    difficulty: 'Hard'
  },
  {
    id: 'mste_p40_p41_differential_calculus',
    area: 'MSTE',
    domain: 'Calculus, DE & Vector Analysis',
    topic: 'Differential Calculus, Limits, Curvature & Asymptotes',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Basic Derivative Rules, L’Hôpital, Polar Slope, Curvature (κ, R) & Center (α, β)',
    pageRef: 40,
    latex: '\\kappa = \\frac{y\'\'}{\\left[1 + (y\')^2\\right]^{3/2}}, \\qquad R = \\frac{1}{|\\kappa|} = \\left|\\frac{\\left[1 + (y\')^2\\right]^{3/2}}{y\'\'}\\right|',
    secondaryEquations: [
      { label: 'Basic Differentiation Rules (Constant, Power, Product, Quotient, Chain)', latex: '(c)\'=0, \\; (x^n)\'=nx^{n-1}, \\; (uv)\'=uv\'+vu\', \\; \\left(\\frac{u}{v}\\right)\'=\\frac{vu\'-uv\'}{v^2}, \\; [f(g(x))]\'=f\'(g(x))g\'(x)' },
      { label: 'L’Hôpital’s Rule & Indeterminate Forms', latex: '\\lim_{x\\to a}\\frac{f(x)}{g(x)} = \\lim_{x\\to a}\\frac{f\'(x)}{g\'(x)} \\;\\left(\\frac{0}{0},\\;\\frac{\\infty}{\\infty},\\;0\\cdot\\infty,\\;\\infty-\\infty,\\;0^0,\\;\\infty^0,\\;1^\\infty\\right)' },
      { label: 'Slope of Rectangular & Polar Curves', latex: '\\text{Slope} = y\' = \\frac{dy}{dx}, \\qquad \\text{Polar Slope} = \\frac{dy}{dx} = \\frac{dy/d\\theta}{dx/d\\theta} \\;\\;(x=r\\cos\\theta,\\; y=r\\sin\\theta)' },
      { label: 'Center of Curvature (α, β)', latex: '\\alpha = x - \\frac{y\'\\left[1+(y\')^2\\right]}{y\'\'}, \\qquad \\beta = y + \\frac{1+(y\')^2}{y\'\'}' }
    ],
    notes: [
      'Numerical 2nd Derivative Approximation: Compute first-derivative slopes at x−h and x+h (or A, B), then y″ ≈ (B − A)/(B − A step).'
    ],
    flashcardPrompt: 'Write the 5 Basic Derivative rules, L’Hôpital’s Rule (7 indeterminate forms), Polar Slope dy/dx, Curvature κ, R, and Center (α, β).',
    flashcardHint: 'α subtracts y\'[1+(y\')²]/y″ while β adds [1+(y\')²]/y″.',
    difficulty: 'Medium'
  },
  {
    id: 'mste_p41_derivatives_exp_log_trig',
    area: 'MSTE',
    domain: 'Calculus, DE & Vector Analysis',
    topic: 'Differential Calculus, Limits, Curvature & Asymptotes',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'All 20 Exponential, Logarithmic, Trig & Inverse Trig Derivatives',
    pageRef: 41,
    latex: '\\frac{d}{dx}(e^x)=e^x, \\quad \\frac{d}{dx}(a^x)=a^x\\ln a, \\quad \\frac{d}{dx}(\\ln x)=\\frac{1}{x}, \\quad \\frac{d}{dx}(\\log_a x)=\\frac{1}{x\\ln a}',
    secondaryEquations: [
      { label: 'Composite Exponential & Logarithmic (4)', latex: '\\frac{d}{dx}(e^{g(x)})=e^{g(x)}g\'(x), \\; \\frac{d}{dx}(a^{g(x)})=\\ln(a)\\,a^{g(x)}g\'(x), \\; \\frac{d}{dx}(\\ln g(x))=\\frac{g\'(x)}{g(x)}, \\; \\frac{d}{dx}(\\log_a g(x))=\\frac{g\'(x)}{g(x)\\ln a}' },
      { label: 'All 6 Trigonometric Derivatives', latex: '(\\sin x)\'=\\cos x, \\; (\\cos x)\'=-\\sin x, \\; (\\tan x)\'=\\sec^2 x, \\; (\\cot x)\'=-\\csc^2 x, \\; (\\sec x)\'=\\sec x\\tan x, \\; (\\csc x)\'=-\\csc x\\cot x' },
      { label: 'Inverse Trig Derivatives (arcsin, arccos, arctan, arccot)', latex: '(\\sin^{-1}x)\'=\\frac{1}{\\sqrt{1-x^2}}, \\; (\\cos^{-1}x)\'=\\frac{-1}{\\sqrt{1-x^2}}, \\; (\\tan^{-1}x)\'=\\frac{1}{1+x^2}, \\; (\\cot^{-1}x)\'=\\frac{-1}{1+x^2}' },
      { label: 'Inverse Secant & Cosecant Derivatives', latex: '(\\sec^{-1}x)\'=\\frac{1}{|x|\\sqrt{x^2-1}}, \\qquad (\\csc^{-1}x)\'=\\frac{-1}{|x|\\sqrt{x^2-1}} \\quad (x \\neq \\pm 1, 0)' }
    ],
    notes: [
      'Note: d/dx[a^{g(x)}] = a^{g(x)} ln(a) g′(x), and principal-branch arcsec/arccsc derivatives include |x| in the denominator.'
    ],
    flashcardPrompt: 'Recite all 8 Exponential/Logarithmic, all 6 Trigonometric, and all 6 Inverse Trigonometric derivatives.',
    flashcardHint: 'Every "co-" trig & inverse-trig function (cos, cot, csc, arccos, arccot, arccsc) carries a negative (−) derivative!',
    difficulty: 'Medium'
  },
  {
    id: 'mste_p41_derivatives_hyperbolic',
    area: 'MSTE',
    domain: 'Calculus, DE & Vector Analysis',
    topic: 'Differential Calculus, Limits, Curvature & Asymptotes',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'All 12 Hyperbolic & Inverse Hyperbolic Derivatives',
    pageRef: 41,
    latex: '(\\sinh x)\'=\\cosh x, \\quad (\\cosh x)\'=\\sinh x, \\quad (\\tanh x)\'=\\operatorname{sech}^2 x, \\quad (\\coth x)\'=-\\operatorname{csch}^2 x',
    secondaryEquations: [
      { label: 'Hyperbolic Secant & Cosecant', latex: '(\\operatorname{sech} x)\' = -\\operatorname{sech} x\\tanh x, \\qquad (\\operatorname{csch} x)\' = -\\operatorname{csch} x\\coth x' },
      { label: 'Inverse sinh, cosh & tanh / coth', latex: '(\\sinh^{-1}x)\'=\\frac{1}{\\sqrt{1+x^2}}, \\; (\\cosh^{-1}x)\'=\\frac{1}{\\sqrt{x^2-1}}, \\; (\\tanh^{-1}x)\'=\\frac{1}{1-x^2}\\;(|x|<1), \\; (\\coth^{-1}x)\'=\\frac{1}{1-x^2}\\;(|x|>1)' },
      { label: 'Inverse sech & csch', latex: '(\\operatorname{sech}^{-1}x)\'=\\frac{-1}{x\\sqrt{1-x^2}}\\;\\;(0<x<1), \\qquad (\\operatorname{csch}^{-1}x)\'=\\frac{-1}{|x|\\sqrt{1+x^2}}\\;\\;(x\\neq 0)' }
    ],
    notes: [
      'Note: d/dx[csch⁻¹(x)] uses |x|√(1 + x²) in the denominator; (cosh x)\' = +sinh x (positive) and (sech x)\' = −sech x tanh x (negative).'
    ],
    flashcardPrompt: 'Write all 6 Hyperbolic derivatives and all 6 Inverse Hyperbolic derivatives (with their domain inequalities).',
    flashcardHint: 'Only coth, sech, csch carry (−) in hyperbolic; tanh⁻¹ and coth⁻¹ share 1/(1 − x²) on |x|<1 vs |x|>1.',
    difficulty: 'Hard'
  },
  {
    id: 'mste_p42_asymptotes_rates_tangents',
    area: 'MSTE',
    domain: 'Calculus, DE & Vector Analysis',
    topic: 'Tangents, Normals, Motion Rates & Maxima/Minima Shortcuts',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Asymptotes, Motion/Flow Rates, Second Derivative Test & Tangents / Normals',
    pageRef: 42,
    latex: 'ST = \\left|\\frac{y}{y\'}\\right|, \\qquad TL = \\sqrt{y^2 + ST^2}, \\qquad SN = \\left|y\\,y\'\\right|, \\qquad NL = \\sqrt{y^2 + SN^2}',
    secondaryEquations: [
      { label: 'Rational Asymptotes f(x) = P(x)/Q(x)', latex: '\\text{VA}: Q(c)=0\\;(P(c)\\neq 0); \\quad \\text{HA}: C = \\frac{A_p}{A_q}\\;(\\deg P = \\deg Q); \\quad \\text{Slant}: \\deg P > \\deg Q \\implies y = \\text{quotient of } \\frac{P(x)}{Q(x)}' },
      { label: 'Motion, Discharge & Angular Derivatives', latex: 's = f(t), \\quad v = \\frac{ds}{dt}, \\quad a = \\frac{dv}{dt} = \\frac{d^2 s}{dt^2}, \\quad Q = \\frac{dV}{dt}, \\quad \\omega = \\frac{d\\theta}{dt}, \\quad \\alpha = \\frac{d\\omega}{dt} = \\frac{d^2\\theta}{dt^2}' },
      { label: 'Tangent & Normal Line Equations', latex: 'y - y_1 = m_T(x - x_1)\\;\\;(m_T = y\' = \\tan\\theta), \\qquad y - y_1 = m_N(x - x_1)\\;\\;\\left(m_N = -\\frac{1}{m_T} = -\\frac{1}{y\'}\\right)' }
    ],
    tables: [
      {
        title: 'First & Second Derivative Critical Point Test + Time Rates',
        headers: ['Point', 'y′', 'y″', 'Concavity / Rate'],
        rows: [
          ['Local Maximum', '0', '− (negative)', 'Opens Downward'],
          ['Local Minimum', '0', '+ (positive)', 'Opens Upward'],
          ['Point of Inflection', '≠ 0 (or 0)', '0', 'Concavity Changes (+dx/dt inc, −dx/dt dec)']
        ]
      }
    ],
    flashcardPrompt: 'State Vertical/Horizontal/Slant Asymptote conditions, Motion/Flow/Angular derivative definitions, and Tangent/Normal/Subtangent/Subnormal equations.',
    flashcardHint: 'Subtangent = |y / y′| while Subnormal = |y · y′|; Tangents/Normals form right triangles of height y.',
    difficulty: 'Medium'
  },
  {
    id: 'mste_p42_p44_tangents_maxima_shortcuts',
    area: 'MSTE',
    domain: 'Calculus, DE & Vector Analysis',
    topic: 'Tangents, Normals, Motion Rates & Maxima/Minima Shortcuts',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'All 10 CELE Board-Exam Maxima & Minima Shortcuts',
    pageRef: 44,
    latex: 'L^{2/3} = x^{2/3} + h^{2/3}, \\qquad x = \\sqrt{a b}, \\qquad \\frac{x}{a} = \\frac{x + y}{a + b}',
    secondaryEquations: [
      { label: 'Inscribed Rectangles (Ellipse, Triangle, Circle)', latex: 'L_{\\text{ell}}=\\frac{2a}{\\sqrt{2}},\\; W_{\\text{ell}}=\\frac{2b}{\\sqrt{2}}; \\qquad L_{\\text{tri}}=\\frac{b}{2},\\; W_{\\text{tri}}=\\frac{h}{2},\\; A_{\\square}=\\frac{1}{2}A_{\\triangle}; \\qquad \\text{Circle: } L=W\\;(\\text{square})' },
      { label: 'Max Area / Min Perimeter & Optimal Boxes / Cylindrical Tanks', latex: '\\text{Area: } x=y\\;(\\text{closed}),\\; x=2y\\;(\\text{open}); \\quad \\text{Box: } x=y=z\\;(\\text{cube}),\\; x=y=2h\\;(\\text{open}); \\quad \\text{Tank: } D=H\\;(\\text{closed}),\\; D=2H\\;(\\text{open})' },
      { label: 'Trapezoid Gutter, Norman Window, Roof/House & Cone-Sphere', latex: '\\text{Trap: } b_T=2b_B,\\;\\theta=60^\\circ; \\quad \\text{Norman: } y=r,\\;x=2r; \\quad \\text{Isosc.Tri+Rect: } h=y; \\quad \\text{Cone in Sphere: } \\sin\\phi=\\frac{1}{3}=\\frac{r}{h-r}' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p44_maxima_minima.png',
        caption: 'Shortest ladder/beam over wall L^(2/3) = x^(2/3) + h^(2/3), viewing optimum x = √(ab), reflection x/a = (x+y)/(a+b), and Norman/Gutter shapes.',
        alt: 'Maxima and minima CELE board shortcuts diagram'
      }
    ],
    flashcardPrompt: 'Recall ALL CELE Maxima/Minima shortcuts: Ladder L^(2/3), √(ab), Reflection (x+y)/(a+b), Inscribed Rectangles, Open/Closed Boxes/Tanks, Trapezoid, Norman, Cone-Sphere.',
    flashcardHint: 'Open box/tank/rect doubles base-to-height ratio vs closed (x=2y, x=y=2h, D=2H); Max Trapezoid = half-hexagon (60°).',
    difficulty: 'Hard'
  },
  {
    id: 'mste_p43_differential_equations',
    area: 'MSTE',
    domain: 'Calculus, DE & Vector Analysis',
    topic: 'Differential Equations (1st Order, Linear, Exact & Growth/Cooling)',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: '1st-Order DE Methods: Separable, Homogeneous, Linear (y & x), Bernoulli, Exact & Inexact',
    pageRef: 43,
    latex: '\\text{Linear in }y: \\; \\frac{dy}{dx} + y P(x) = Q(x) \\implies y\\,e^{\\int P(x)dx} = \\int Q(x)\\,e^{\\int P(x)dx}dx + C',
    secondaryEquations: [
      { label: 'Linear in x & Separation of Variables', latex: '\\frac{dx}{dy} + x P(y) = Q(y) \\implies x\\,e^{\\int P(y)dy} = \\int Q(y)\\,e^{\\int P(y)dy}dy + C; \\qquad \\int\\frac{M(x)}{f(x)}dx + \\int\\frac{N(y)}{g(y)}dy = C' },
      { label: 'Homogeneous DE & Bernoulli’s Equation', latex: 'M_{\\text{deg}} = N_{\\text{deg}}: \\; y = vx\\;(\\text{or }x = vy); \\qquad y\' + y P(x) = y^n Q(x) \\implies v = y^{1-n}, \\;\\; IF = e^{\\int (1-n)P(x)dx}' },
      { label: 'Exact DE & Shortcut Method', latex: '\\frac{\\partial M}{\\partial y} = \\frac{\\partial N}{\\partial x} \\implies \\int M\\,dx\\;(@\\,y\\text{ const}) + \\int N\\,dy\\;(\\text{drop }x\\text{ terms}) = C' },
      { label: 'All Three Inexact DE Integrating Factors', latex: 'f(x)=\\frac{1}{N}\\left(\\frac{\\partial M}{\\partial y}-\\frac{\\partial N}{\\partial x}\\right) \\Rightarrow e^{\\int f(x)dx}; \\quad g(y)=\\frac{1}{M}\\left(\\frac{\\partial N}{\\partial x}-\\frac{\\partial M}{\\partial y}\\right) \\Rightarrow e^{\\int g(y)dy}; \\quad \\frac{\\partial M}{\\partial y}-\\frac{\\partial N}{\\partial x} = m\\frac{N}{x}-n\\frac{M}{y} \\Rightarrow x^m y^n' }
    ],
    notes: [
      'Note: Standard inexact DE integrating factor in y is g(y) = (1/M)(∂N/∂x − ∂M/∂y).'
    ],
    flashcardPrompt: 'Write Linear DE in y AND in x, Separable, Homogeneous, Bernoulli (IF & v), Exact DE test/shortcut, and all 3 Inexact DE Integrating Factors.',
    flashcardHint: 'Inexact DE tests (∂M/∂y − ∂N/∂x)/N for function of x alone, or opposite sign divided by M for function of y alone.',
    difficulty: 'Hard'
  },
  {
    id: 'mste_p43_de_applications',
    area: 'MSTE',
    domain: 'Calculus, DE & Vector Analysis',
    topic: 'Differential Equations (1st Order, Linear, Exact & Growth/Cooling)',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Order/Degree, Elimination of Constants, Growth/Decay, Newton Cooling, Half-Life & Mixing',
    pageRef: 43,
    latex: '\\frac{dT}{dt} = -k(T - T_s) \\implies T = T_s + (T_0 - T_s)e^{-kt}, \\qquad \\frac{dx}{dt} = kx \\implies x = x_0 e^{kt}',
    secondaryEquations: [
      { label: 'Half-Life & Linearized Mode 3-5 Exponential Fit', latex: '\\frac{1}{2} = e^{-k t_{1/2}}, \\qquad T = T_s + x_0 e^{kt}' },
      { label: 'Mixing / Flow with Concentration', latex: '\\frac{dQ}{dt} = r_{\\text{in}}(\\% C_{\\text{in}}) - r_{\\text{out}}(\\% C_{\\text{ex}}), \\qquad \\% C_{\\text{ex}} = \\frac{Q}{V(t)}' },
      { label: 'Order, Degree & Arbitrary Constants', latex: '\\text{Order} = \\text{highest derivative}, \\quad \\text{Degree} = \\text{power of highest deriv.}, \\quad \\#\\text{ Constants} = \\#\\text{ Differentiations}' }
    ],
    flashcardPrompt: 'State Newton’s Law of Cooling, Exponential Growth/Decay, Half-Life equation, Tank Mixing dQ/dt, and Order vs Degree definitions.',
    flashcardHint: 'Eliminating n arbitrary constants from a family of curves requires n differentiations.',
    difficulty: 'Medium'
  },
  {
    id: 'mste_p47_p48_vector_analysis',
    area: 'MSTE',
    domain: 'Calculus, DE & Vector Analysis',
    topic: '3D Vector Analysis & Scalar/Vector Fields (Grad, Div, Curl)',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: '3D Vectors, Projections, Areas/Volumes, Acceleration Components & Grad / Div / Curl',
    pageRef: 47,
    latex: '\\vec{u}\\cdot\\vec{v} = A_1 A_2 + B_1 B_2 + C_1 C_2 = |\\vec{u}||\\vec{v}|\\cos\\theta, \\qquad \\vec{u}\\times\\vec{v} = -(\\vec{v}\\times\\vec{u}) = \\begin{vmatrix}\\hat{i} & \\hat{j} & \\hat{k}\\\\ A_1 & B_1 & C_1\\\\ A_2 & B_2 & C_2\\end{vmatrix}',
    secondaryEquations: [
      { label: 'Unit Vector, Direction Cosines & Angle sinθ', latex: '\\vec{U}_v = \\frac{\\vec{v}}{|\\vec{v}|}\\;(|\\vec{U}_v|=1), \\quad \\cos\\theta_x = \\frac{A}{|\\vec{v}|},\\; \\cos^2\\theta_x+\\cos^2\\theta_y+\\cos^2\\theta_z=1, \\quad \\sin\\theta = \\frac{|\\vec{A}\\times\\vec{B}|}{|\\vec{A}||\\vec{B}|}' },
      { label: 'Parallel & Perpendicular Vector Projections of B onto A', latex: 'B_{\\parallel A} = |\\vec{B}|\\cos\\theta, \\; \\vec{V}_{B\\parallel A} = \\frac{\\vec{A}}{|\\vec{A}|}|\\vec{B}|\\cos\\theta, \\qquad B_{\\perp A} = |\\vec{B}|\\sin\\theta, \\; \\vec{V}_{B\\perp A} = \\vec{B} - \\vec{V}_{B\\parallel A}' },
      { label: 'Areas, Normal Vector & 3D Volumes', latex: 'A_{\\text{par}} = |\\vec{A}\\times\\vec{B}|, \\; A_{\\text{tri}} = \\frac{1}{2}|\\vec{A}\\times\\vec{B}|, \\; \\vec{V}_\\perp = \\vec{A}\\times\\vec{B}, \\; V_{\\text{para}} = |(\\vec{u}\\times\\vec{v})\\cdot\\vec{w}|, \\; V_{\\text{tetra}} = \\frac{1}{6}V_{\\text{para}}' },
      { label: 'Tangential/Normal Accel & Grad / Div / Curl', latex: 'a_T = \\frac{\\vec{v}\\cdot\\vec{a}}{|\\vec{v}|}, \\; a_N = \\frac{|\\vec{v}\\times\\vec{a}|}{|\\vec{v}|}; \\quad \\nabla F = \\left(\\frac{\\partial}{\\partial x}\\hat{i}+\\frac{\\partial}{\\partial y}\\hat{j}+\\frac{\\partial}{\\partial z}\\hat{k}\\right)F, \\; \\nabla\\cdot\\vec{A}, \\; \\nabla\\times\\vec{A} = \\begin{vmatrix}\\hat{i} & \\hat{j} & \\hat{k}\\\\ \\partial_x & \\partial_y & \\partial_z\\\\ P & Q & R\\end{vmatrix}' }
    ],
    flashcardPrompt: 'Write Unit Vector, Direction Cosines, Dot/Cross angles, Parallel & Perpendicular Vector Components, Parallelogram/Triangle Area, Volumes, a_T/a_N, and Grad/Div/Curl.',
    flashcardHint: 'Tetrahedron is 1/6 of parallelepiped (Triangle is ½ of parallelogram); Grad acts on scalar, Div & Curl act on vector.',
    difficulty: 'Medium'
  },

  // =========================================================================
  // 8. CONSTRUCTION & ENGINEERING PHYSICS (Pages 45 - 46, 48 - 50)
  // =========================================================================
  {
    id: 'mste_p45_earthmoving_equipment',
    area: 'MSTE',
    domain: 'Construction & Engineering Physics',
    topic: 'Earthmoving: Swell/Shrinkage, Spoil Piles & Excavators',
    examSubtopic: 'Project Management, CPM/PERT & Equipment Economics',
    title: 'Soil Swell/Shrinkage, Load/Shrinkage Factors, Spoil Piles, Pits & Excavator Output',
    pageRef: 45,
    latex: 'V_{\\text{loose}} = V_{\\text{bank}}(1 + \\text{Swell}\\%), \\qquad V_{\\text{compact}} = V_{\\text{bank}}(1 - \\text{Shrinkage}\\%), \\qquad \\gamma = \\frac{W}{V} \\Rightarrow V = \\frac{W}{\\gamma}',
    secondaryEquations: [
      { label: 'Load & Shrinkage Conversion Factors (< 1.0)', latex: 'W_L = W_B = W_C, \\qquad LF \\times V_{\\text{loose}} = V_{\\text{bank}}, \\qquad V_{\\text{compact}} = V_{\\text{bank}} \\times SF' },
      { label: 'Spoil Bank, Conical Pile & Pit Excavation', latex: 'V_{\\text{bank}} = \\frac{1}{2} B H L, \\qquad V_{\\text{cone}} = \\frac{1}{3} A_B h \\;\\;(\\theta = \\text{repose angle}), \\qquad V_{\\text{pit}} = A\\, h_{\\text{ave}}' },
      { label: 'Excavator, Hydraulic Excavator & Dragline Output (LCM/hr)', latex: '\\text{Prod} = \\text{Vol/cycle}\\times\\text{Cycles/hr}\\times\\text{Eff}, \\quad \\text{Hyd} = C\\cdot S\\cdot V\\cdot B\\cdot E, \\quad \\text{Drag} = \\text{Ideal}\\cdot S\\cdot E, \\; V_{\\text{act}} = V_{\\text{loose}}\\cdot B\\cdot LF' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p45_spoil_piles.png',
        caption: 'Triangular spoil bank and conical spoil pile geometry with angle of repose θ.',
        alt: 'Spoil bank and conical spoil pile diagrams'
      }
    ],
    variables: [
      { symbol: 'C, S, V, B, E', meaning: 'Cycles/hr, Swing-depth factor, Heaped bucket vol, Bucket fill factor, Job efficiency' }
    ],
    flashcardPrompt: 'Write V_loose > V_bank > V_compact relations, LF & SF, γ = W/V, Triangular/Conical spoil volumes, Pit Excavation, and Excavator/Dragline production.',
    flashcardHint: 'Soil weight stays constant across loose, bank, and compacted states; LF converts LCM → BCM.',
    difficulty: 'Medium'
  },
  {
    id: 'mste_p46_p50_hauling_resistance_econhaul',
    area: 'MSTE',
    domain: 'Construction & Engineering Physics',
    topic: 'Construction Hauling Resistance & Grade/Rolling Factors',
    examSubtopic: 'Project Management, CPM/PERT & Equipment Economics',
    title: 'Rolling & Grade Resistance Factors, Total Resistance, Effective Grade & Economic Haul',
    pageRef: 46,
    latex: '\\text{Total RF} = \\text{Grade RF} + \\text{Rolling RF}, \\qquad \\text{Total Resistance} = \\text{Total RF}\\times\\text{Weight}',
    secondaryEquations: [
      { label: 'Rolling Resistance Factor (Penetration Formula)', latex: '\\text{RRF (lb/ton)} = 40 + (30 \\times \\text{in. pen}), \\qquad \\text{RRF (kg/tonne)} = 20 + (6 \\times \\text{cm pen})' },
      { label: 'Grade Resistance Factor (GRF) & Effective Grade %', latex: '\\text{GRF}_{\\text{lb/t}} = 20\\times\\text{Grade}\\%, \\quad \\text{GRF}_{\\text{kg/t}} = 10\\times\\text{Grade}\\%, \\quad EG = \\text{Grade}\\% + \\frac{\\text{RRF}_{\\text{lb/t}}}{20} = \\text{Grade}\\% + \\frac{\\text{RRF}_{\\text{kg/t}}}{10}' },
      { label: 'Limit of Economic Haul & Stiffness Factor', latex: 'LEH = \\frac{C_{\\text{borrow}}}{C_{\\text{haul}}} + FHD, \\qquad SF = \\sqrt[3]{\\frac{\\text{Subgrade Modulus}}{\\text{Modulus of Elasticity}}}' }
    ],
    flashcardPrompt: 'State Rolling Resistance (English & Metric), Grade Resistance Factors, Total Resistance, Effective Grade %, LEH, and Stiffness Factor.',
    flashcardHint: 'Each 1% grade adds 20 lb/ton (English) or 10 kg/tonne (Metric) resistance!',
    difficulty: 'Medium'
  },
  {
    id: 'mste_p48_p49_waves_optics_gravity',
    area: 'MSTE',
    domain: 'Construction & Engineering Physics',
    topic: 'Gravity, Waves, Sound, Optics & Energy',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'Gravity, Kepler, Centripetal, Heat, Sound Intensity (dB & W/m²), Water Waves & Optics',
    pageRef: 49,
    latex: 'F = \\frac{G m_1 m_2}{r^2}, \\qquad F_e = \\frac{k_e q_1 q_2}{r^2}, \\qquad F_c = \\frac{m v_T^2}{r}, \\qquad n_1\\sin\\theta_1 = n_2\\sin\\theta_2',
    secondaryEquations: [
      { label: 'Kepler’s 3rd Law & Specific Heat Capacity', latex: '\\frac{T_1^2}{d_1^3} = \\frac{T_2^2}{d_2^3}, \\qquad \\Delta E = m C \\Delta T' },
      { label: 'Waves, Relative Sound (dB) & Absolute Sound Intensity', latex: 'v = \\lambda f, \\quad T = \\frac{1}{f}, \\quad \\text{dB} = 10\\log_{10}\\left(\\frac{I}{I_0}\\right), \\quad I = \\frac{P^2}{2 v \\rho_{\\text{air}}}' },
      { label: 'Reflection, Refraction Index, Wavelengths & TIR', latex: '\\theta_{\\text{inc}} = \\theta_{\\text{ref}}, \\quad n = \\frac{c}{v}, \\quad n_1\\lambda_1 = n_2\\lambda_2, \\quad n_1\\sin\\theta_c = n_2\\,(1)\\;(@\\theta_2=90^\\circ)' },
      { label: 'Water Depth Wave Speeds: Shallow, Deep & Intermediate', latex: 'V_s = \\sqrt{gd}, \\qquad V_d = \\frac{g T}{2\\pi}\\;(d = 0.5\\lambda), \\qquad V_i = \\frac{g T}{2\\pi}\\tanh\\left(\\frac{2\\pi d}{\\lambda}\\right)' }
    ],
    diagrams: [
      {
        src: '/assets/mste_formulas/m_p48_wave_diagram.png',
        caption: 'Transverse wave anatomy (amplitude, crest, trough, wavelength λ) and frequency equation v = λf.',
        alt: 'Wave diagram showing amplitude and wavelength'
      },
      {
        src: '/assets/mste_formulas/m_p49_tir_ray.png',
        caption: 'Snell’s Law and Total Internal Reflection critical angle condition (θ_2 = 90° → n₁ sinθ_c = n₂).',
        alt: 'Total internal reflection Snell law diagram'
      }
    ],
    notes: [
      'Physical Constants: G = 6.674×10⁻¹¹ N·m²/kg², k_e = 8.99×10⁹ N·m²/C², m_earth = 5.9742×10²⁴ kg, r_earth = 6400 km, I₀ = 1×10⁻¹⁶ W/cm² (= 1×10⁻¹² W/m²).'
    ],
    flashcardPrompt: 'Write Newton Gravity, Coulomb, Centripetal, Kepler, Heat, Relative/Absolute Sound Intensity, Reflection/Snell/TIR/n₁λ₁=n₂λ₂, and Shallow/Deep/Intermediate wave speeds.',
    flashcardHint: 'Total Internal Reflection sets θ_2 = 90° → sinθ_c = n₂/n₁; Shallow wave V_s = √(gd).',
    difficulty: 'Medium'
  },
  {
    id: 'mste_p50_shm_orbital_energy_refresher',
    area: 'MSTE',
    domain: 'Construction & Engineering Physics',
    topic: 'Gravity, Waves, Sound, Optics & Energy',
    examSubtopic: 'Engineering Mathematics & Geometry',
    title: 'SHM Spring/Pendulum, Circular Frequency, Solid Sound Celerity, Work Efficiency & Orbital',
    pageRef: 50,
    latex: 'T_{\\text{spring}} = 2\\pi\\sqrt{\\frac{m}{k}}, \\qquad T_{\\text{pend}} = 2\\pi\\sqrt{\\frac{L}{g}}, \\qquad V_{\\text{orb}} = \\sqrt{\\frac{G m_E}{R}}',
    secondaryEquations: [
      { label: 'Circular Frequency & Solid Sound Speed / Celerity', latex: 'f = \\frac{v}{2\\pi r} = \\frac{\\sqrt{g r}}{2\\pi r}\\;(\\therefore\\, v = \\sqrt{gr}), \\qquad v_{\\text{sound}} = \\sqrt{\\frac{E}{\\rho}} = \\lambda f' },
      { label: 'Conservation of Mechanical Energy & Work Efficiency', latex: 'E_i = E_f: \\; E = mgh + \\frac{1}{2}kx^2 + \\frac{1}{2}mv^2; \\qquad \\text{eff} = \\frac{W_{\\text{output}}}{W_{\\text{input}}} = \\frac{\\text{Actual}}{\\text{Ideal}}' }
    ],
    notes: [
      'Quick memory mnemonics: Spring ("Paypay mo ko": 2π√(m/k)), Pendulum ("Paypay Lagi": 2π√(L/g)), Orbital ("Vorbong Gamer": √(Gm_E/R)).'
    ],
    flashcardPrompt: 'Write SHM Spring & Pendulum Periods, Circular Frequency f = √(gr)/(2πr), Solid Sound Celerity √(E/ρ), Efficiency, Orbital Speed, and Energy Conservation.',
    flashcardHint: 'Remember: Mass-spring uses √(m/k); simple pendulum uses √(L/g); orbital velocity √(Gm_E/R).',
    difficulty: 'Easy'
  }
];
