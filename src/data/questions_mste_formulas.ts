import { CEQuestion } from '../types';

export const MSTE_FORMULA_QUESTIONS: CEQuestion[] = [
  // =========================================================================
  // TRIGONOMETRY & GEOMETRY (Q1 - Q9)
  // =========================================================================
  {
    id: 52001,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Easy',
    question: 'In a sinusoidal wave function y = A tan[B(x + C)] + D, what is the fundamental period of the tangent function?',
    latex: 'y = A\\tan[B(x + C)] + D',
    answer: 'π / B (half the period of sine and cosine functions)',
    choices: [
      'π / B (half the period of sine and cosine functions)',
      '2π / B (identical to sine and cosine periods)',
      '2π · B (scaled linearly by frequency B)',
      'π / (2B) (quarter-cycle tangent interval)'
    ],
    explanation: 'While y = A sin[B(x+C)]+D and A cos[B(x+C)]+D repeat every 2π/B, the tangent function repeats every π/B and has no finite amplitude.',
    isFormula: true
  },
  {
    id: 52002,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Easy',
    question: 'Which angle-unit conversion equivalence for one complete revolution is strictly accurate for military mil, grad, degree, and radian systems?',
    answer: '1 rev = 2π rad = 360° = 400 grads = 6400 mils',
    choices: [
      '1 rev = 2π rad = 360° = 400 grads = 640 mils',
      '1 rev = 2π rad = 360° = 400 grads = 6400 mils',
      '1 rev = π rad = 360° = 200 grads = 3200 mils',
      '1 rev = 2π rad = 360° = 640 grads = 4000 mils'
    ],
    explanation: 'One full turn equals 360 degrees, 2π radians, 400 gradians (gons), and 6400 NATO mils (note the common typographical omission of a zero as "640" in condensed review notes).',
    isFormula: true
  },
  {
    id: 52003,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Medium',
    question: 'Referring to the triangle center diagram, the intersection of the three medians is the Centroid, whereas the intersection of the three interior angle bisectors locates which point?',
    diagramSrc: '/assets/mste_formulas/m_p04_triangle_centers.png',
    diagramAlt: 'Medians intersecting at Centroid and Angle Bisectors intersecting at Incenter',
    answer: 'The Incenter (center of the inscribed circle with radius r = A / s)',
    choices: [
      'The Orthocenter (intersection of altitudes)',
      'The Circumcenter (center of the circumscribed circle)',
      'The Incenter (center of the inscribed circle with radius r = A / s)',
      'The Excenter (intersection of two exterior angle bisectors)'
    ],
    explanation: 'The three internal angle bisectors are equidistant from all three sides and meet at the Incenter, whose inscribed circle radius is r = Area / semiperimeter s.',
    isFormula: true
  },
  {
    id: 52004,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Medium',
    question: 'In a right spherical triangle C = 90° solved with Napier’s circular rule diagram, what do SIN-CO-OP and SIN-TA-AD compute?',
    diagramSrc: '/assets/mste_formulas/m_p05_spherical_triangle.png',
    diagramAlt: 'Right spherical triangle and Napier circular rule wheel',
    answer: 'sin(mid) = cos(opp 1)·cos(opp 2) = tan(adj 1)·tan(adj 2)',
    choices: [
      'sin(mid) = sin(adj 1)·sin(adj 2) = tan(opp 1)·tan(opp 2)',
      'cos(mid) = sin(opp 1)·sin(opp 2) = cot(adj 1)·cot(adj 2)',
      'tan(mid) = cos(adj 1)·cos(adj 2) = sin(opp 1)·sin(opp 2)',
      'sin(mid) = cos(opp 1)·cos(opp 2) = tan(adj 1)·tan(adj 2)'
    ],
    explanation: 'Using the five circular parts (a, b, co-B, co-c, co-A), sine of any middle part equals the product of cosines of its two opposite parts (SIN-CO-OP) or tangents of its two adjacent parts (SIN-TA-AD).',
    isFormula: true
  },
  {
    id: 52005,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Medium',
    question: 'In terrestrial navigation, 1 minute of arc along a great circle corresponds to 1 nautical mile. Which distance equivalence holds accurately?',
    answer: '1 nautical mile = 6080 ft ≈ 1.1516 statute miles (or 1852 m)',
    choices: [
      '1 nautical mile = 6080 ft ≈ 1.1516 statute miles (or 1852 m)',
      '1 nautical mile = 5280 ft = 1.609 statute miles',
      '1 nautical mile = 3280 ft ≈ 0.868 statute miles',
      '1 nautical mile = 6080 m ≈ 3.78 statute miles'
    ],
    explanation: 'A traditional sea/nautical mile of 1 arc-minute equals 6080 ft (British Admiralty standard) ≈ 1.1516 statute miles (where 1 statute mile = 5280 ft).',
    isFormula: true
  },
  {
    id: 52006,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Easy',
    question: 'How many total distinct diagonals d exist inside a convex polygon having n sides?',
    diagramSrc: '/assets/mste_formulas/m_p06_polygons_circles.png',
    diagramAlt: 'Similar polygons, interior/exterior angle geometry, and triangle circles',
    answer: 'd = n(n − 3) / 2',
    choices: [
      'd = n(n − 2) / 2',
      'd = n(n − 3) / 2',
      'd = 180°(n − 2)',
      'd = n(n − 1) / 2'
    ],
    explanation: 'Each of the n vertices connects to (n − 3) non-adjacent vertices, and dividing by 2 prevents double counting every diagonal: d = n(n − 3)/2.',
    isFormula: true
  },
  {
    id: 52007,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Medium',
    question: 'Using the Power-of-a-Point circle diagram (Chords, Secants, Secant-Tangent), if AB is tangent to the circle at B and secant ACD intersects the circle at C and D from external point A, which equation holds?',
    diagramSrc: '/assets/mste_formulas/m_p07_quads_chords.png',
    diagramAlt: 'Quadrilateral area, circle sector/segment, and Two Chords / Two Secants theorems',
    answer: 'AB² = AC · AD',
    choices: [
      'AB² = AC · CD',
      'AB = AC + AD',
      'AB² = AC · AD',
      'AC² = AB · AD'
    ],
    explanation: 'By similar triangles ΔABC ~ ΔADB, the external tangent squared equals the external secant segment times the entire secant length: AB² = AC · AD.',
    isFormula: true
  },
  {
    id: 52008,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Medium',
    question: 'For a cyclic quadrilateral with consecutive sides a, b, c, d and diagonals d₁, d₂, what does Ptolemy’s Theorem state?',
    diagramSrc: '/assets/mste_formulas/m_p08_cyclic_solids.png',
    diagramAlt: 'Cyclic quadrilateral, prisms, cylinders, and pyramids',
    answer: 'd₁ · d₂ = ac + bd',
    choices: [
      'd₁² + d₂² = a² + b² + c² + d²',
      'd₁ · d₂ = ab + cd',
      'd₁ / d₂ = (ab + cd) / (ac + bd)',
      'd₁ · d₂ = ac + bd'
    ],
    explanation: 'Ptolemy’s Theorem states that for any quadrilateral inscribed in a circle, the product of its two diagonals equals the sum of the products of its opposite side pairs: d₁d₂ = ac + bd.',
    isFormula: true
  },
  {
    id: 52009,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Medium',
    question: 'Referring to the solid geometry diagram, which expression gives the volume of a frustum of a pyramid or cone with parallel base areas A₁, A₂ and perpendicular altitude h?',
    diagramSrc: '/assets/mste_formulas/m_p09_spherical_frustum.png',
    diagramAlt: 'Sphere, spherical segments, and frustum of pyramid and cone',
    answer: 'V = (h / 3)[A₁ + A₂ + √(A₁ A₂)]',
    choices: [
      'V = (h / 3)[A₁ + A₂ + √(A₁ A₂)]',
      'V = (h / 2)(A₁ + A₂)',
      'V = (h / 6)(A₁ + A₂ + √(A₁ A₂))',
      'V = (h / 3)(A₁ + A₂)'
    ],
    explanation: 'Evaluating the prismatoid formula with mid-section radius equal to the arithmetic mean of base radii yields the frustum volume (h/3)[A₁ + A₂ + √(A₁A₂)].',
    isFormula: true
  },

  // =========================================================================
  // ANALYTIC GEOMETRY, ALGEBRA & PROBABILITY/STATS (Q10 - Q20)
  // =========================================================================
  {
    id: 52010,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Easy',
    question: 'Based on the analytic geometry line-angle diagram, what condition holds when two non-vertical lines with slopes m₁ and m₂ are mutually perpendicular?',
    diagramSrc: '/assets/mste_formulas/m_p10_analytic_lines.png',
    diagramAlt: 'Distance formula, point-to-line distance, and angle between two lines',
    answer: 'm₁ · m₂ = −1',
    choices: [
      'm₁ − m₂ = 0',
      'm₁ · m₂ = −1',
      'm₁ + m₂ = 0',
      'm₁ · m₂ = +1'
    ],
    explanation: 'In tan θ = (m₂ − m₁)/(1 + m₁m₂), tan 90° approaches infinity when the denominator 1 + m₁m₂ = 0, giving m₁m₂ = −1.',
    isFormula: true
  },
  {
    id: 52011,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Easy',
    question: 'Given the general equation of a circle x² + y² + Dx + Ey + F = 0, what are the coordinates (h, k) of its center?',
    answer: 'h = −D / 2, k = −E / 2',
    choices: [
      'h = −D, k = −E',
      'h = +D / 2, k = +E / 2',
      'h = −D / 2, k = −E / 2',
      'h = −E / 2, k = −D / 2'
    ],
    explanation: 'Completing the square (x + D/2)² + (y + E/2)² = r² identifies center coordinates h = −D/2 and k = −E/2.',
    isFormula: true
  },
  {
    id: 52012,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Medium',
    question: 'From the conic diagrams, how do the semi-axes and focal distance c relate in an ellipse versus a hyperbola?',
    diagramSrc: '/assets/mste_formulas/m_p12_hyperbola.png',
    diagramAlt: 'Hyperbola diagram with transverse axis 2a, conjugate axis 2b, and foci distance 2c',
    answer: 'Ellipse: a² = b² + c² (e < 1); Hyperbola: c² = a² + b² (e > 1)',
    choices: [
      'Ellipse: c² = a² + b² (e < 1); Hyperbola: a² = b² + c² (e > 1)',
      'Both satisfy c² = a² + b² with directrix distance d = a·e',
      'Both satisfy a² = b² + c² with latus rectum LR = b²/a',
      'Ellipse: a² = b² + c² (e < 1); Hyperbola: c² = a² + b² (e > 1)'
    ],
    explanation: 'In an ellipse the semi-major axis a exceeds focal distance c (a² = b² + c²); in a hyperbola foci lie outside the vertices so c > a (c² = a² + b²).',
    isFormula: true
  },
  {
    id: 52013,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Medium',
    question: 'To eliminate the xy cross-product term in Ax² + Bxy + Cy² + Dx + Ey + F = 0 via Rotation of Axes, which condition classifies the conic directly from B² − 4AC?',
    diagramSrc: '/assets/mste_formulas/m_p13_rotation_polar.png',
    diagramAlt: 'Rotation of axes and polar coordinates geometry',
    answer: 'B² − 4AC < 0 is an Ellipse, = 0 is a Parabola, and > 0 is a Hyperbola',
    choices: [
      'B² − 4AC < 0 is an Ellipse, = 0 is a Parabola, and > 0 is a Hyperbola',
      'B² − 4AC > 0 is an Ellipse, = 0 is a Circle, and < 0 is a Hyperbola',
      'B² − 4AC = 0 is always a Circle whenever B ≠ 0',
      'B² + 4AC < 0 is a Hyperbola and > 0 is an Ellipse'
    ],
    explanation: 'Because B² − 4AC is rotationally invariant, negative indicates an ellipse (or circle), zero indicates a parabola, and positive indicates a hyperbola.',
    isFormula: true
  },
  {
    id: 52014,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Medium',
    question: 'In the binomial expansion of (a^j + b^k)^n, what is the Sum of Exponents (SOE) of all terms combined?',
    answer: 'SOE = [n(n + 1) / 2] · (j + k)',
    choices: [
      'SOE = n(n − 1)(j + k)',
      'SOE = [n(n + 1) / 2] · (j + k)',
      'SOE = [n(n + 1) / 2] · (j · k)',
      'SOE = 2ⁿ · (j + k)'
    ],
    explanation: 'Summing the exponents across all (n+1) terms yields (j+k)(0 + 1 + 2 + … + n) = [n(n+1)/2]·(j + k).',
    isFormula: true
  },
  {
    id: 52015,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Medium',
    question: 'Using the clock-hand problem formula x = (60/11)H ± (2/11)θ, what fraction of an hour-space does the hour hand advance for every x minute-spaces traveled by the minute hand?',
    diagramSrc: '/assets/mste_formulas/m_p15_clock_diagrams.png',
    diagramAlt: 'Clock dial hand division diagrams',
    answer: 'x / 12 minute-spaces (making relative catch-up speed 11/12)',
    choices: [
      'x / 60 minute-spaces (making relative speed 59/60)',
      'x / 6 minute-spaces (making relative catch-up speed 5/6)',
      'x / 12 minute-spaces (making relative catch-up speed 11/12)',
      '12x minute-spaces around the dial'
    ],
    explanation: 'While the minute hand covers 60 minute-spaces in 1 hour, the hour hand covers 5 minute-spaces (a 12:1 speed ratio), so their relative separation changes at (1 − 1/12) = 11/12 space/min.',
    isFormula: true
  },
  {
    id: 52016,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Easy',
    question: 'For any set of positive real numbers, how are the Arithmetic Mean (AM), Geometric Mean (GM), and Harmonic Mean (HM) algebraically linked?',
    answer: 'AM · HM = GM² (and HM ≤ GM ≤ AM)',
    choices: [
      'AM + HM = 2 · GM',
      'AM · GM = HM²',
      'GM = (AM + HM) / 2 for any n data values',
      'AM · HM = GM² (and HM ≤ GM ≤ AM)'
    ],
    explanation: 'For two positive numbers a and b, AM·HM = [(a+b)/2]·[2ab/(a+b)] = ab = GM², establishing GM² = AM·HM.',
    isFormula: true
  },
  {
    id: 52017,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Medium',
    question: 'In statistics, using Interquartile Range IQR = Q₃ − Q₁, what thresholds identify lower and upper outliers under the standard 1.5·IQR fence rule?',
    answer: 'x ≤ Q₁ − 1.5(IQR) or x ≥ Q₃ + 1.5(IQR)',
    choices: [
      'x ≤ Q₁ − 1.5(IQR) or x ≥ Q₃ + 1.5(IQR)',
      'x ≤ Q₁ − 0.5(IQR) or x ≥ Q₃ + 0.5(IQR)',
      'x ≤ Q₂ − 1.5(IQR) or x ≥ Q₂ + 1.5(IQR)',
      'x ≤ Q₁ − 3.0(IQR) or x ≥ Q₃ + 3.0(IQR)'
    ],
    explanation: 'Tukey’s interquartile outlier criteria flag observations lying more than 1.5·IQR below Q₁ or more than 1.5·IQR above Q₃.',
    isFormula: true
  },
  {
    id: 52018,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Easy',
    question: 'In how many distinct ways can n unique items be arranged in a circle (Circular All Unique, CAU), and how many non-empty combinations can be formed from n distinct objects?',
    answer: 'Circular arrangements = (n − 1)!; non-empty combinations = 2ⁿ − 1',
    choices: [
      'Circular arrangements = n!; non-empty combinations = 2ⁿ',
      'Circular arrangements = (n − 1)!; non-empty combinations = 2ⁿ − 1',
      'Circular arrangements = (n − 1)! / 2; non-empty combinations = n! − 1',
      'Circular arrangements = n! / (n − 1); non-empty combinations = 2^(n−1)'
    ],
    explanation: 'Fixing one reference position around a ring leaves (n−1)! unique cyclic arrangements; summing nCr for r = 1..n yields 2ⁿ − 1 non-empty subsets.',
    isFormula: true
  },
  {
    id: 52019,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Hard',
    question: 'In discrete probability distributions, which distribution gives the probability that the k-th success occurs precisely on the n-th independent Bernoulli trial?',
    diagramSrc: '/assets/mste_formulas/m_p19_probability_venn.png',
    diagramAlt: 'Probability Venn diagrams for independent, addition rule, and complementary events',
    answer: 'Negative Binomial: P(n) = p^(k−1) · q^(n−k) · (n−1)C(k−1) · p',
    choices: [
      'Binomial: P(x) = nCx · p^x · q^(n−x)',
      'Hypergeometric: P(x) = (kCx · (N−k)C(n−x)) / NCn',
      'Negative Binomial: P(n) = p^(k−1) · q^(n−k) · (n−1)C(k−1) · p',
      'Poisson: P(x) = (μ^x · e^(−μ)) / x!'
    ],
    explanation: 'For the k-th success on trial n, the preceding (n−1) trials must contain (k−1) successes and (n−k) failures, multiplied by p for the final trial.',
    isFormula: true
  },
  {
    id: 52020,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Easy',
    question: 'Based on the Normal and Standard Normal distribution curves, how is an arbitrary observation x converted to a standard normal Z-score?',
    diagramSrc: '/assets/mste_formulas/m_p20_normal_curves.png',
    diagramAlt: 'Normal PDF and standard normal Z-score bell curves',
    answer: 'Z = (x − μ) / σ',
    choices: [
      'Z = (μ − x) / σ²',
      'Z = σ / (x − μ)',
      'Z = (x + μ) / σ',
      'Z = (x − μ) / σ'
    ],
    explanation: 'Subtracting population mean μ and dividing by standard deviation σ yields Z = (x − μ)/σ with standard normal mean 0 and variance 1.',
    isFormula: true
  },

  // =========================================================================
  // SURVEYING & EARTHWORKS (Q21 - Q26)
  // =========================================================================
  {
    id: 52021,
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Medium',
    question: 'In steel tape surveying corrections, how does tape sag correction C_s depend on unit weight w, unsupported span L, and applied pull P?',
    answer: 'C_s = − w² L³ / (24 P²), which is always subtracted from measured distance',
    choices: [
      'C_s = − w² L³ / (24 P²), which is always subtracted from measured distance',
      'C_s = w L² / (12 P), always added when laying out',
      'C_s = (P − P₀) L / (a E), added when pull exceeds standard tension',
      'C_s = − w² L² / (8 P²), proportional to span squared'
    ],
    explanation: 'Due to catenary sag between supports, the chord distance is shorter than tape graduation length by w²L³/(24P²), so C_s is always negative during measurement.',
    isFormula: true
  },
  {
    id: 52022,
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Medium',
    question: 'Looking at the closed traverse and DMD adjustment setup, how do the Compass Rule (Bowditch) and Transit Rule differ when distributing latitude/departure errors of closure?',
    diagramSrc: '/assets/mste_formulas/m_p21_traverse_cplx.png',
    diagramAlt: 'Closed traverse quadrant diagram, DMD table, and Caltech Mode 2 CMPLX setup',
    answer: 'Compass Rule weights by Course Length / Perimeter; Transit Rule weights by |Lat| / Σ|Lat| and |Dep| / Σ|Dep|',
    choices: [
      'Compass Rule adjusts angles only; Transit Rule adjusts tape sag only',
      'Compass Rule weights by Course Length / Perimeter; Transit Rule weights by |Lat| / Σ|Lat| and |Dep| / Σ|Dep|',
      'Transit Rule weights by Course Length / Perimeter; Compass Rule divides errors equally by number of sides',
      'Both methods yield identical corrections regardless of course bearings'
    ],
    explanation: 'Bowditch’s Compass Rule distributes e_lat and e_dep proportionally to course length over total perimeter, while Transit Rule scales by |Lat|/Σ|Lat| and |Dep|/Σ|Dep|.',
    isFormula: true
  },
  {
    id: 52023,
    area: 'MSTE',
    subtopic: 'Highway Geometric Design & Sight Distances',
    difficulty: 'Easy',
    question: 'For the Simple Circular Curve diagram (20-m full station basis), which pair gives the Arc-Basis vs Chord-Basis Degree of Curve D?',
    diagramSrc: '/assets/mste_formulas/m_p22_simple_compound_curve.png',
    diagramAlt: 'Simple circular curve and compound curve geometry',
    answer: 'Arc Basis: D = 1145.916 / R; Chord Basis: sin(D/2) = 10 / R',
    choices: [
      'Arc Basis: D = 5729.578 / R; Chord Basis: sin(D/2) = 50 / R',
      'Arc Basis: D = 100 / R; Chord Basis: tan(D/2) = 20 / R',
      'Arc Basis: D = 1145.916 / R; Chord Basis: sin(D/2) = 10 / R',
      'Arc Basis: D = 1145.916 · R; Chord Basis: cos(D/2) = 10 / R'
    ],
    explanation: 'For a 20 m metric station arc or chord: D = (20/R)(180°/π) = 1145.916°/R (arc basis) and sin(D/2) = (20/2)/R = 10/R (chord basis).',
    isFormula: true
  },
  {
    id: 52024,
    area: 'MSTE',
    subtopic: 'Highway Geometric Design & Sight Distances',
    difficulty: 'Hard',
    question: 'In the spiral transition curve diagram connecting tangent TS to circular curve SC of radius R over length L_s, what are the spiral throw offset p and spiral angle θ_s (radians)?',
    diagramSrc: '/assets/mste_formulas/m_p23_spiral_curve.png',
    diagramAlt: 'Spiral transition curve TS to SC showing throw p, X/Y offsets, and tangent T_s',
    answer: 'p = L_s² / (24R) and θ_s = L_s / (2R)',
    choices: [
      'p = L_s² / (6R) and θ_s = L_s / R',
      'p = L_s / (12R) and θ_s = L_s / (3R)',
      'p = L_s³ / (40R²) and θ_s = L_s² / (6R)',
      'p = L_s² / (24R) and θ_s = L_s / (2R)'
    ],
    explanation: 'Along a cubic spiral transition, curvature increases linearly from 0 to 1/R giving spiral angle θ_s = L_s/(2R), endpoint offset Y = L_s²/(6R), and radial shift/throw p = Y/4 = L_s²/(24R).',
    isFormula: true
  },
  {
    id: 52025,
    area: 'MSTE',
    subtopic: 'Highway Geometric Design & Sight Distances',
    difficulty: 'Medium',
    question: 'Referring to the Symmetrical vs Unsymmetrical Vertical Parabolic Curve diagrams, what is the midpoint vertical offset H at PVI when two curve legs have unequal lengths L₁ and L₂?',
    diagramSrc: '/assets/mste_formulas/m_p24_vertical_curves.png',
    diagramAlt: 'Symmetrical and unsymmetrical vertical parabolic curves',
    answer: 'H = [L₁ L₂ / (2(L₁ + L₂))] · |g₁ − g₂|',
    choices: [
      'H = [L₁ L₂ / (2(L₁ + L₂))] · |g₁ − g₂|',
      'H = [(L₁ + L₂) / 8] · |g₁ − g₂|',
      'H = [L₁ L₂ / (4(L₁ + L₂))] · (g₁ + g₂)',
      'H = (g₁ L₁ + g₂ L₂) / (L₁ + L₂)'
    ],
    explanation: 'Unsymmetrical vertical curves align tangent grade g₃ = (g₁L₁ + g₂L₂)/(L₁ + L₂) over the PVI, producing vertex offset H = L₁L₂|g₁ − g₂| / [2(L₁ + L₂)] (which reduces to L|g₁−g₂|/8 when L₁ = L₂ = L/2).',
    isFormula: true
  },
  {
    id: 52026,
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Medium',
    question: 'Using the earthworks cross-section diagram, when computing prismoidal volume V_P between two three-level sections separated by length L using Average End Area V_E and Prismoidal Correction C_P, which relation holds?',
    diagramSrc: '/assets/mste_formulas/m_p25_earthworks_sections.png',
    diagramAlt: 'Level, three-level, and five-level earthworks cross sections',
    answer: 'V_P = V_E − C_P, where C_P = (L / 12)(C₁ − C₂)(d₁ − d₂)',
    choices: [
      'V_P = V_E + C_P, where C_P = (L / 6)(C₁ − C₂)(d₁ − d₂)',
      'V_P = V_E − C_P, where C_P = (L / 12)(C₁ − C₂)(d₁ − d₂)',
      'V_P = (L / 2)(A₁ + A₂), which always underestimates earth volume',
      'V_P = (L / 3)(A₁ + 4A_m + A₂)'
    ],
    explanation: 'Average End-Area volume V_E overestimates frustum-like earthworks by the prismoidal correction C_P = (L/12)(C₁−C₂)(d₁−d₂), so true prismoidal volume is V_P = V_E − C_P.',
    isFormula: true
  },

  // =========================================================================
  // HIGHWAY, TRANSPORTATION & PORTS (Q27 - Q30)
  // =========================================================================
  {
    id: 52027,
    area: 'MSTE',
    subtopic: 'Traffic Engineering, Markings & Signs',
    difficulty: 'Medium',
    question: 'In traffic engineering kinematics, how does Space Mean Speed (u_s) compare mathematically with Time Mean Speed (u_t) for n vehicles traversing a known distance d in times tᵢ?',
    answer: 'u_s = nd / Σtᵢ = n / Σ(1/uᵢ) (Harmonic mean), whereas u_t = Σuᵢ / n (Arithmetic mean)',
    choices: [
      'u_s = Σuᵢ / n (Arithmetic mean) and u_t = n / Σ(1/uᵢ)',
      'Both u_s and u_t equal q / k whenever traffic flow is uncongested',
      'u_s = nd / Σtᵢ = n / Σ(1/uᵢ) (Harmonic mean), whereas u_t = Σuᵢ / n (Arithmetic mean)',
      'u_s always exceeds u_t regardless of vehicle speed variance'
    ],
    explanation: 'Space mean speed averages speeds over a roadway segment length using total travel time (harmonic mean of spot speeds), so u_s ≤ u_t.',
    isFormula: true
  },
  {
    id: 52028,
    area: 'MSTE',
    subtopic: 'Highway Geometric Design & Sight Distances',
    difficulty: 'Medium',
    question: 'In the horizontal curve force diagram and sight distance setup, what minimum curve radius R prevents outward skidding given speed v, superelevation e, and side friction factor f?',
    diagramSrc: '/assets/mste_formulas/m_p27_highway_pavement.png',
    diagramAlt: 'Banked horizontal curve forces, stopping sight distance, and flexible pavement cone',
    answer: 'R = v² / [g(e + f)]',
    choices: [
      'R = v² / [2g(e + f)]',
      'R = v / [g(e − f)]',
      'R = v² · (e + f) / g',
      'R = v² / [g(e + f)]'
    ],
    explanation: 'Balancing centrifugal force Wv²/(gR) against banking and tire side friction gives impact factor e + f = v²/(gR), or R = v²/[g(e + f)].',
    isFormula: true
  },
  {
    id: 52029,
    area: 'MSTE',
    subtopic: 'Pavement Distress, Asphalt & Concrete Paving',
    difficulty: 'Medium',
    question: 'For Goldbeck’s rigid concrete pavement thickness without load-transfer dowels vs flexible pavement cone dispersion shown in the diagrams, what is the un-doweled rigid corner slab thickness t?',
    answer: 't = √(3W / f_t), whereas flexible pavement uses t = 0.564 √(W / f_t) − r',
    choices: [
      't = √(3W / f_t), whereas flexible pavement uses t = 0.564 √(W / f_t) − r',
      't = √(W / (3 f_t)), whereas flexible pavement uses t = 0.564 √(W / f_t) + r',
      't = 3W / f_t for all rigid concrete highways regardless of dowels',
      't = √(3W / (4 f_t)) is the unprotected un-doweled corner thickness'
    ],
    explanation: 'Without dowels across joints, Goldbeck’s cantilevered corner wheel load W gives slab thickness t = √(3W/f_t); load-transfer dowels reduce the factor to √(3W/(4f_t)) at protected corners.',
    isFormula: true
  },
  {
    id: 52030,
    area: 'MSTE',
    subtopic: 'Traffic Engineering, Markings & Signs',
    difficulty: 'Hard',
    question: 'From the railroad turnout and deep-water coastal wave formulas, how are Frog Number (FN) and deep-water wavelength L related to frog angle φ and wave period T?',
    diagramSrc: '/assets/mste_formulas/m_p28_turnout_ports.png',
    diagramAlt: 'Tie bars, railroad turnout frog angle, and port quaywall elevations',
    answer: 'FN = ½ cot(φ / 2) and Deep-Water L = g T² / (2π) ≈ 1.56 T² (m)',
    choices: [
      'FN = cot(φ) and Deep-Water L = √(g d) · T',
      'FN = ½ cot(φ / 2) and Deep-Water L = g T² / (2π) ≈ 1.56 T² (m)',
      'FN = ½ tan(φ / 2) and Deep-Water L = g T / (2π)',
      'FN = 2 cot(φ / 2) and Deep-Water L = g T² / π'
    ],
    explanation: 'Turnout frog number is HL/HS = ½ cot(φ/2); when depth d > L/2, tanh(2πd/L) → 1 so deep-water wavelength reduces to gT²/(2π) ≈ 1.56 T² meters.',
    isFormula: true
  },

  // =========================================================================
  // ENGINEERING ECONOMY (Q31 - Q34)
  // =========================================================================
  {
    id: 52031,
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Easy',
    question: 'When nominal annual interest rate r is compounded m times per year, what is the Effective Annual Interest Rate (ER), and when is a century year like 1900 or 2000 a Leap Year?',
    answer: 'ER = (1 + r/m)^m − 1; century years are leap years only if divisible by 400',
    choices: [
      'ER = (1 + r·m)^(1/m) − 1; every year divisible by 4 is always a leap year',
      'ER = r / m; century years divisible by 100 are always leap years',
      'ER = (1 + r/m)^m − 1; century years are leap years only if divisible by 400',
      'ER = e^(r/m) − 1; only odd centuries are leap years'
    ],
    explanation: 'Effective annual rate accounts for intra-year compounding via (1 + r/m)^m − 1 (or e^r − 1 if continuous); years divisible by 100 require divisibility by 400 (2000 is leap, 1900 is normal).',
    isFormula: true
  },
  {
    id: 52032,
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Medium',
    question: 'Looking at the Cash Flow Diagrams (Ordinary Annuity, Annuity Due, Deferred Annuity, Perpetuity), where does Present Worth P₀ of an n-period Ordinary Annuity fall?',
    diagramSrc: '/assets/mste_formulas/m_p30_annuity_cfd.png',
    diagramAlt: 'Cash flow diagrams for ordinary annuity, annuity due, deferred annuity, and perpetuity',
    answer: 'Exactly one interest period BEFORE the first periodic payment A',
    choices: [
      'At the exact timestamp of the first periodic payment A',
      'Exactly one interest period AFTER the final periodic payment A',
      'At the midpoint n/2 of the payment stream',
      'Exactly one interest period BEFORE the first periodic payment A'
    ],
    explanation: 'P = A[1 − (1+i)^(−n)]/i discounts all end-of-period payments to t = 0, one full period ahead of the first payment at t = 1; Perpetuity simply takes n → ∞ to give P = A/i.',
    isFormula: true
  },
  {
    id: 52033,
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Medium',
    question: 'In equipment depreciation over life n from First Cost FC to Salvage Value SV, how does Matheson’s Declining Balance factor K compare to Double Declining Balance (DDB)?',
    answer: 'Matheson K = 1 − (SV / FC)^(1/n) (requires SV > 0); DDB K = 2 / n (independent of SV)',
    choices: [
      'Matheson K = 1 − (SV / FC)^(1/n) (requires SV > 0); DDB K = 2 / n (independent of SV)',
      'Matheson K = 2 / n; DDB K = 1 − (SV / FC)^(1/n)',
      'Both methods use annual depreciation (FC − SV)·(n − m + 1) / SYD',
      'Matheson K = 1 − (FC / SV)^(1/n) and allows BV_m < SV'
    ],
    explanation: 'Matheson constant-percentage method solves BV_n = FC(1 − K)^n = SV, so K = 1 − (SV/FC)^(1/n); DDB fixes K = 2/n with a floor of BV_m ≥ SV.',
    isFormula: true
  },
  {
    id: 52034,
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Medium',
    question: 'What is the Capitalized Cost (CC) of an infrastructure asset having First Cost FC, perpetual replacement cost RC every n years with salvage SV, and annual maintenance OM at interest i?',
    answer: 'CC = FC + (RC − SV) / [(1 + i)^n − 1] + OM / i',
    choices: [
      'CC = FC + (RC − SV) / (1 + i)^n + OM · i',
      'CC = FC + (RC − SV) / [(1 + i)^n − 1] + OM / i',
      'CC = FC · i + OM + (RC − SV)·i / [(1 + i)^n − 1]',
      'CC = (FC − SV) / [(1 + i)^n − 1]'
    ],
    explanation: 'Capitalized cost sums initial outlay FC, the perpetuity of infinite net renewal cycles (RC−SV)/[(1+i)^n − 1], and perpetual O&M endowment OM/i (multiplying CC by i gives Annual Cost AC).',
    isFormula: true
  },

  // =========================================================================
  // CALCULUS, DE & VECTOR ANALYSIS (Q35 - Q40)
  // =========================================================================
  {
    id: 52035,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Medium',
    question: 'When evaluating the definite integral ∫₀^(π/2) sin^m(θ) cos^n(θ) dθ via Wallis’ Formula, when does the trailing multiplier α equal π/2 instead of 1?',
    answer: 'Only when BOTH integers m and n are even',
    choices: [
      'Whenever either m or n is an odd positive integer',
      'When m + n is odd',
      'Only when BOTH integers m and n are even',
      'Always α = π/2 for any positive integers m and n'
    ],
    explanation: 'Wallis’ reduction hits ∫₀^(π/2) 1 dθ = π/2 only when both m and n are even non-negative integers; otherwise at least one odd factor reduces to 1, giving α = 1.',
    isFormula: true
  },
  {
    id: 52036,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Medium',
    question: 'Referring to the integration diagrams for Disk/Washer vs Cylindrical Shell volumes, which differential element orientation defines the Cylindrical Shell method?',
    diagramSrc: '/assets/mste_formulas/m_p37_solids_revolution.png',
    diagramAlt: 'Circular disk/washer vs cylindrical shell volume of revolution diagrams',
    answer: 'Differential strip oriented PARALLEL to the axis of revolution (V = 2π ∫ r · h dt)',
    choices: [
      'Differential strip oriented PERPENDICULAR to the axis of revolution (V = π ∫ r² dt)',
      'Any horizontal strip integrated over dy regardless of axis direction',
      'A polar wedge strip dθ revolved exclusively around the origin',
      'Differential strip oriented PARALLEL to the axis of revolution (V = 2π ∫ r · h dt)'
    ],
    explanation: 'Revolving a thin rectangle PARALLEL to the axis sweeps a thin cylindrical shell of circumference 2πr, height h, and thickness dt; perpendicular strips form disks/washers.',
    isFormula: true
  },
  {
    id: 52037,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Easy',
    question: 'By Pappus–Guldinus’s Second Theorem (as depicted in the centroid & surface revolution diagram), what volume is generated by revolving a plane area A about a coplanar non-intersecting axis at centroid distance R?',
    diagramSrc: '/assets/mste_formulas/m_p38_surface_centroids.png',
    diagramAlt: 'Surface area of revolution and centroid strip integration',
    answer: 'V = 2π R A',
    choices: [
      'V = 2π R A',
      'V = π R² A',
      'V = 2π R L',
      'V = A · d² + I_bar'
    ],
    explanation: 'Pappus’s 2nd Theorem states Volume equals plane area A multiplied by the circular path 2πR traced by its centroid (and Surface Area equals curve length L multiplied by 2πR).',
    isFormula: true
  },
  {
    id: 52038,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Hard',
    question: 'Using the Maxima/Minima CELE board-exam shortcut diagram for a beam/ladder passing over a wall of height h at distance x from a vertical building wall, what is the shortest ladder length L?',
    diagramSrc: '/assets/mste_formulas/m_p44_maxima_minima.png',
    diagramAlt: 'Board exam maxima minima shortest ladder and optimal geometry shortcuts',
    answer: 'L^(2/3) = x^(2/3) + h^(2/3), so L = [x^(2/3) + h^(2/3)]^(3/2)',
    choices: [
      'L² = x² + h²',
      'L^(2/3) = x^(2/3) + h^(2/3), so L = [x^(2/3) + h^(2/3)]^(3/2)',
      'L^(1/2) = x^(1/2) + h^(1/2)',
      'L = 2(x + h) / √2'
    ],
    explanation: 'Setting dL/dθ = 0 for L = h cscθ + x secθ yields tan³θ = h/x, substituting back gives the astroid relation L^(2/3) = x^(2/3) + h^(2/3).',
    isFormula: true
  },
  {
    id: 52039,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Medium',
    question: 'For a first-order Differential Equation M(x, y)dx + N(x, y)dy = 0, what test guarantees Exactness, and what is the Integrating Factor for a Linear DE dy/dx + P(x)y = Q(x)?',
    answer: 'Exactness: ∂M/∂y = ∂N/∂x; Linear DE Integrating Factor: e^(∫P(x)dx)',
    choices: [
      'Exactness: ∂M/∂x = ∂N/∂y; Linear DE Integrating Factor: e^(∫Q(x)dx)',
      'Exactness: M + N = 0; Linear DE Integrating Factor: ∫P(x)dx',
      'Exactness: ∂M/∂y = ∂N/∂x; Linear DE Integrating Factor: e^(∫P(x)dx)',
      'Exactness: ∂M/∂y = −∂N/∂x; Linear DE Integrating Factor: e^(−∫P(x)dx)'
    ],
    explanation: 'Equality of mixed partial derivatives ∂M/∂y = ∂N/∂x defines an exact differential dF = M dx + N dy = 0, while multiplying dy/dx + P(x)y = Q(x) by μ = e^(∫P(x)dx) collapses the LHS to d(μy)/dx.',
    isFormula: true
  },
  {
    id: 52040,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Medium',
    question: 'Given three 3D vectors u, v, and w sharing a common vertex, how does the volume of the Tetrahedron compare to the Parallelepiped spanned by those same three vectors?',
    answer: 'V_tetra = (1 / 6) · |(u × v) · w| = (1 / 6) V_parallelepiped',
    choices: [
      'V_tetra = (1 / 2) · |(u × v) · w|',
      'V_tetra = (1 / 3) · |(u × v) · w|',
      'V_tetra = |(u × v) × w|',
      'V_tetra = (1 / 6) · |(u × v) · w| = (1 / 6) V_parallelepiped'
    ],
    explanation: 'The scalar triple product |(u × v)·w| gives the full parallelepiped volume; taking half for a triangular base and 1/3 for a pyramid yields 1/6.',
    isFormula: true
  },

  // =========================================================================
  // CONSTRUCTION & ENGINEERING PHYSICS (Q41 - Q44)
  // =========================================================================
  {
    id: 52041,
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Medium',
    question: 'In earthmoving construction shown in the spoil-pile diagrams, if soil has Swell = S%, how are Bank Cubic Meters (V_bank), Loose Cubic Meters (V_loose), and Load Factor (LF) related?',
    diagramSrc: '/assets/mste_formulas/m_p45_spoil_piles.png',
    diagramAlt: 'Triangular spoil bank and conical spoil pile geometry',
    answer: 'V_loose = V_bank(1 + S%) and Load Factor LF = V_bank / V_loose = 1 / (1 + S%)',
    choices: [
      'V_loose = V_bank(1 + S%) and Load Factor LF = V_bank / V_loose = 1 / (1 + S%)',
      'V_loose = V_bank(1 − S%) and Load Factor LF = 1 + S%',
      'V_compact > V_bank > V_loose for all cohesive soils',
      'LF = V_compact / V_loose = Shrinkage %'
    ],
    explanation: 'Excavated soil loosens and expands (V_loose > V_bank > V_compact); Load Factor LF converts loose bucket volume back to undisturbed bank volume via LF = 1 / (1 + Swell%).',
    isFormula: true
  },
  {
    id: 52042,
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Medium',
    question: 'When computing off-road haul truck resistance in construction earthmoving, how much Rolling Resistance Factor (RRF) applies on a haul road with p inches of tire penetration, and what is Grade Resistance per 1% grade?',
    answer: 'RRF = 40 + 30p (lb/ton), plus GRF = 20 lb/ton per 1% upgrade',
    choices: [
      'RRF = 20 + 6p (lb/ton), plus GRF = 10 lb/ton per 1% upgrade',
      'RRF = 40 + 30p (lb/ton), plus GRF = 20 lb/ton per 1% upgrade',
      'RRF = 40 + 20p (lb/ton), plus GRF = 30 lb/ton per 1% upgrade',
      'RRF = 20 + 30p (kg/tonne), plus GRF = 20 kg/tonne per 1% upgrade'
    ],
    explanation: 'In US/English units, rolling resistance adds 30 lb/ton per inch of penetration above the 40 lb/ton base (RRF = 40 + 30p), and every 1% grade adds 20 lb/ton (Metric: 20 + 6·cm_pen kg/t and 10 kg/t per 1% grade).',
    isFormula: true
  },
  {
    id: 52043,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Easy',
    question: 'In physical optics (diagrammed below), when light travels from denser medium n₁ into less dense medium n₂ (n₁ > n₂), which equation gives the critical angle θ_c for Total Internal Reflection?',
    diagramSrc: '/assets/mste_formulas/m_p49_tir_ray.png',
    diagramAlt: 'Snell law and total internal reflection critical angle ray diagram',
    answer: 'n₁ sin(θ_c) = n₂ (setting refracted angle θ₂ = 90°)',
    choices: [
      'n₁ cos(θ_c) = n₂ (setting θ₂ = 0°)',
      'n₁ / n₂ = sin(θ_c) (meaning θ₂ = 45°)',
      'n₁ sin(θ_c) = n₂ (setting refracted angle θ₂ = 90°)',
      'n₁ tan(θ_c) = n₂'
    ],
    explanation: 'Applying Snell’s Law n₁ sinθ₁ = n₂ sinθ₂ at the grazing exit limit θ₂ = 90° gives sin(90°) = 1, hence n₁ sin(θ_c) = n₂.',
    isFormula: true
  },
  {
    id: 52044,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Easy',
    question: 'Which formulas give the oscillation periods T of a mass-spring Simple Harmonic Oscillator vs a simple pendulum of length L?',
    answer: 'Spring: T = 2π √(m / k); Pendulum: T = 2π √(L / g)',
    choices: [
      'Spring: T = 2π √(k / m); Pendulum: T = 2π √(g / L)',
      'Spring: T = 2π √(m · k); Pendulum: T = 2π √(L · g)',
      'Spring: T = π √(m / k); Pendulum: T = π √(L / g)',
      'Spring: T = 2π √(m / k); Pendulum: T = 2π √(L / g)'
    ],
    explanation: 'Spring period increases with mass m and decreases with stiffness k (2π√(m/k)); pendulum period depends only on length L and gravity g (2π√(L/g)).',
    isFormula: true
  },
  {
    id: 52045,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Easy',
    question: 'From the Laws of Exponents and Logarithms, which pair correctly states the Change-of-Base formula for log_b(x) and the power-of-a-power identity (a^m)^n?',
    latex: '\\log_b(x) = \\frac{\\ln x}{\\ln b}, \\qquad (a^m)^n = a^{m\\cdot n}',
    answer: 'log_b(x) = ln(x) / ln(b) and (a^m)^n = a^(mn)',
    choices: [
      'log_b(x) = ln(b) / ln(x) and (a^m)^n = a^(m + n)',
      'log_b(x) = ln(x) / ln(b) and (a^m)^n = a^(mn)',
      'log_b(x) = ln(x − b) and (a^m)^n = a^(m^n)',
      'log_b(x) = e^x / e^b and (a^m)^n = a^(m/n)'
    ],
    explanation: 'Parenthesized power-of-a-power multiplies exponents (a^m)^n = a^(mn) (distinct from unparenthesized tower a^(m^n)), and any base-b logarithm converts to natural or common logs via log_b(x) = ln(x)/ln(b).',
    isFormula: true
  },
  {
    id: 52046,
    area: 'MSTE',
    subtopic: 'Highway Geometric Design & Sight Distances',
    difficulty: 'Medium',
    question: 'In highway geometric & braking mechanics, how are Brake Efficiency (b_e) and Centrifugal Ratio / Impact Factor (CR / IF) defined?',
    latex: 'b_e = \\frac{f}{f_{\\text{ave}}} \\times 100\\%, \\qquad \\text{CR/IF} = \\frac{v^2}{gR} = \\frac{\\text{CF}}{W}',
    answer: 'b_e = (f / f_ave) × 100% and CR/IF = v² / (gR)',
    choices: [
      'b_e = (f_ave / f) × 100% and CR/IF = gR / v²',
      'b_e = (f / f_ave) × 100% and CR/IF = v² / (gR)',
      'b_e = (f − f_ave) × 100% and CR/IF = v² / (2gR)',
      'b_e = (f · f_ave) × 100% and CR/IF = e − f'
    ],
    explanation: 'Brake efficiency compares achieved deceleration friction factor f against reference average friction f_ave, while Centrifugal Ratio (Impact Factor) equals lateral centrifugal force divided by vehicle weight: CF/W = v²/(gR).',
    isFormula: true
  },
  {
    id: 52047,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Medium',
    question: 'Which pair gives the exact standard indefinite integrals for ∫ du / (a² + u²) and ∫ sec(u) du?',
    latex: '\\int \\frac{du}{a^2 + u^2}, \\qquad \\int \\sec u\\,du',
    answer: '(1/a) arctan(u/a) + C and ln|sec u + tan u| + C',
    choices: [
      'arctan(u/a) + C and ln|sec u − tan u| + C',
      '(1/a) arcsin(u/a) + C and sec u tan u + C',
      '(1/a) arctan(u/a) + C and ln|sec u + tan u| + C',
      '(1/(2a)) ln|(u − a)/(u + a)| + C and ln|csc u − cot u| + C'
    ],
    explanation: 'Integrating du/(a² + u²) produces the inverse tangent factor (1/a) arctan(u/a) + C, and integrating sec(u) by multiplying top and bottom by (sec u + tan u) yields ln|sec u + tan u| + C.',
    isFormula: true
  },
  {
    id: 52048,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Medium',
    question: 'Using the Maxima/Minima CELE board-exam shortcuts, what dimensions yield maximum cross-sectional area for (1) a symmetric trapezoidal open gutter/channel bent from flat sheet width, and (2) a Norman Window (rectangle topped by a semicircle of radius r)?',
    diagramSrc: '/assets/mste_formulas/m_p44_maxima_minima.png',
    diagramAlt: 'Maxima minima board exam shortcuts for trapezoid channel and Norman window',
    answer: 'Trapezoid: top width = 2 × bottom width at 60° side slope; Norman Window: rectangle height h = r (width = 2r)',
    choices: [
      'Trapezoid: top width = 3 × bottom width at 45° side slope; Norman Window: h = 2r',
      'Trapezoid: top width = 2 × bottom width at 60° side slope; Norman Window: rectangle height h = r (width = 2r)',
      'Trapezoid: top width = bottom width at 90° side slope; Norman Window: h = r/2',
      'Trapezoid: top width = 1.5 × bottom width at 30° side slope; Norman Window: h = πr'
    ],
    explanation: 'The most efficient trapezoidal open channel forms half a regular hexagon (b_top = 2 b_bot, side lengths = b_bot, wall inclination 60°); for a Norman window of fixed perimeter, maximum daylight occurs when rectangle height equals semicircle radius r (so total height equals total width 2r).',
    isFormula: true
  },
  {
    id: 52049,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Hard',
    question: 'When a first-order differential equation M(x, y)dx + N(x, y)dy = 0 fails the exactness test (∂M/∂y ≠ ∂N/∂x), under what condition does it admit an integrating factor μ(x) depending solely on x?',
    latex: '\\mu(x) = e^{\\int f(x)\\,dx}',
    answer: 'When (∂M/∂y − ∂N/∂x) / N equals a pure function f(x) of x alone',
    choices: [
      'When (∂M/∂y − ∂N/∂x) / M equals a pure function f(x) of x alone',
      'When (∂M/∂x − ∂N/∂y) / N equals a pure function f(x) of x alone',
      'When (∂M/∂y − ∂N/∂x) / N equals a pure function f(x) of x alone',
      'When M(x, y) and N(x, y) are homogeneous of different degrees'
    ],
    explanation: 'Dividing (M_y − N_x) by N tests for an x-only integrating factor μ(x) = e^(∫f(x)dx); dividing (N_x − M_y) by M tests for a y-only factor μ(y) = e^(∫g(y)dy).',
    isFormula: true
  }
];
