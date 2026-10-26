import { CEQuestion } from '../types';

export const MSTE_TOS_QUESTIONS: CEQuestion[] = [
  {
    id: 901,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Easy',
    question: 'The derivative of y = ln(u) with respect to x using the chain rule is:',
    answer: 'dy/dx = (1 / u) · (du/dx)',
    choices: [
      'dy/dx = u · (du/dx)',
      'dy/dx = (1 / u) · (du/dx)',
      'dy/dx = e^u · (du/dx)',
      'dy/dx = 1 / (u · ln 10)'
    ],
    explanation: 'Fundamental calculus formula in board exams: d/dx[ln u] = u\' / u.'
  },
  {
    id: 902,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Medium',
    question: 'The radius of curvature ρ of a plane curve y = f(x) at any point is given by:',
    answer: 'ρ = [ 1 + (y\')² ]^(3/2) / |y"|',
    choices: [
      'ρ = [ 1 + y\' ] / y"',
      'ρ = [ 1 + (y\')² ]^(3/2) / |y"|',
      'ρ = |y"| / [ 1 + (y\')² ]^(3/2)',
      'ρ = (y\')² / y"'
    ],
    explanation: 'Used in deriving transition spiral curves and highway parabolic vertical curves.'
  },
  {
    id: 903,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Medium',
    question: 'In engineering statistics, the probability of obtaining exactly x successes in n independent Bernoulli trials with probability p is:',
    answer: 'P(x) = C(n, x) · p^x · (1 - p)^(n - x)',
    choices: [
      'P(x) = p^x · (1 - p)^(n - x)',
      'P(x) = C(n, x) · p^x · (1 - p)^(n - x)',
      'P(x) = e^(-λ) · λ^x / x!',
      'P(x) = n! · p / x!'
    ],
    explanation: 'The standard Binomial Distribution formula frequently tested in CELE mathematics.'
  },
  {
    id: 904,
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Medium',
    question: 'The Prismoidal formula for earthwork volume V between two end cross-sections A1 and A2 separated by distance L with middle area Am is:',
    answer: 'V = (L / 6) · (A1 + 4 · Am + A2)',
    choices: [
      'V = (L / 2) · (A1 + A2)',
      'V = (L / 6) · (A1 + 4 · Am + A2)',
      'V = (L / 3) · (A1 + Am + A2)',
      'V = L · Am'
    ],
    explanation: 'Simpson’s rule integration: gives exact volume for solids with quadratic variation of cross-sectional area.'
  },
  {
    id: 905,
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Easy',
    question: 'The End-Area method formula for earthwork volume V between two consecutive cross-sections A1 and A2 separated by length L is:',
    answer: 'V = (L / 2) · (A1 + A2)',
    choices: [
      'V = (L / 6) · (A1 + 4Am + A2)',
      'V = (L / 2) · (A1 + A2)',
      'V = L · √(A1 · A2)',
      'V = L · (A1 - A2)'
    ],
    explanation: 'Average end area formula provides standard estimation in highway cut and fill computations.'
  },
  {
    id: 906,
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Hard',
    question: 'The Prismoidal Correction Cp subtracted from end-area volume for earthwork between three-level sections with center cuts c1, c2 and widths w1, w2 is:',
    answer: 'Cp = (L / 12) · (c1 - c2) · (w1 - w2)',
    choices: [
      'Cp = (L / 6) · (c1 - c2) · (w1 - w2)',
      'Cp = (L / 12) · (c1 - c2) · (w1 - w2)',
      'Cp = (L / 24) · (c1 + c2) · (w1 + w2)',
      'Cp = (L / 4) · (c1 - c2)²'
    ],
    explanation: 'Always subtracted from end-area volume: V_prismoidal = V_end_area - Cp.'
  },
  {
    id: 907,
    area: 'MSTE',
    subtopic: 'Highway Geometric Design & Sight Distances',
    difficulty: 'Medium',
    question: 'In a simple circular highway curve, the degree of curve D based on standard 20-meter arc definition is given by:',
    answer: 'D = 1145.916 / R',
    choices: [
      'D = 572.958 / R',
      'D = 1145.916 / R',
      'D = 20 / R',
      'D = 1800 / (π · R)'
    ],
    explanation: 'D / 20 = 360 / (2πR) => D = 20 × (180/π) / R = 1145.916 / R.'
  },
  {
    id: 908,
    area: 'MSTE',
    subtopic: 'Highway Geometric Design & Sight Distances',
    difficulty: 'Medium',
    question: 'The length of curve L for a simple circular curve with radius R and central deflection angle I in radians is:',
    answer: 'L = R · I (OR L = 20 · I / D FOR 20-m DEFINITION)',
    choices: [
      'L = 2R · sin(I / 2)',
      'L = R · I (OR L = 20 · I / D FOR 20-m DEFINITION)',
      'L = R · tan(I / 2)',
      'L = π · R · I / 360'
    ],
    explanation: 'Subtended circular arc length L = R · I (where I is in radians), or 20 · (I / D) in standard metric stationing.'
  },
  {
    id: 909,
    area: 'MSTE',
    subtopic: 'Highway Geometric Design & Sight Distances',
    difficulty: 'Medium',
    question: 'The long chord (LC) distance connecting the Point of Curvature (PC) to the Point of Tangency (PT) of a simple curve is:',
    answer: 'LC = 2 · R · sin(I / 2)',
    choices: [
      'LC = R · sin I',
      'LC = 2 · R · sin(I / 2)',
      'LC = 2 · R · tan(I / 2)',
      'LC = R · cos(I / 2)'
    ],
    explanation: 'Forms the base of an isosceles triangle with legs equal to radius R.'
  },
  {
    id: 910,
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Hard',
    question: 'In CPM network analysis, Total Float (TF) of an activity with Early Start ES, Early Finish EF, Late Start LS, and Late Finish LF is:',
    answer: 'TF = LS - ES = LF - EF',
    choices: [
      'TF = LF - ES - Duration',
      'TF = LS - ES = LF - EF',
      'TF = EF - ES',
      'TF = LF - LS'
    ],
    explanation: 'Total float is the maximum delay an activity can tolerate without delaying overall project completion.'
  },
  {
    id: 911,
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Medium',
    question: 'In engineering economics, the Capitalized Cost of a permanent civil infrastructure asset with first cost FC and annual maintenance OM at interest rate i is:',
    answer: 'CC = FC + (OM / i)',
    choices: [
      'CC = FC · (1 + i)',
      'CC = FC + (OM / i)',
      'CC = (FC + OM) / i',
      'CC = FC + OM · n'
    ],
    explanation: 'Capitalized cost is the present worth of an asset with an infinite operational service life.'
  },
  {
    id: 912,
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Medium',
    question: 'In equipment earthwork economics, a mass diagram plot displays cumulative volume of earthwork against:',
    answer: 'HIGHWAY STATIONS ALONG THE ALIGNMENT',
    choices: [
      'ELEVATION OF SUBGRADE',
      'HIGHWAY STATIONS ALONG THE ALIGNMENT',
      'CYCLE TIME IN MINUTES',
      'PROJECT CALENDAR MONTHS'
    ],
    explanation: 'Mass diagrams show balance points, haul distances, and limit lines of economical haul (free haul vs overhaul).'
  },
  {
    id: 913,
    area: 'MSTE',
    subtopic: 'Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)',
    difficulty: 'Medium',
    question: 'Under DOLE Department Order 13, crane operators on construction sites in the Philippines must be certified by:',
    answer: 'TESDA (TECHNICAL EDUCATION AND SKILLS DEVELOPMENT AUTHORITY)',
    choices: [
      'DPWH',
      'TESDA (TECHNICAL EDUCATION AND SKILLS DEVELOPMENT AUTHORITY)',
      'PRC',
      'LTO'
    ],
    explanation: 'Heavy equipment operators must hold a valid National Certificate (NC II) issued by TESDA.'
  },
  {
    id: 914,
    area: 'MSTE',
    subtopic: 'Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)',
    difficulty: 'Easy',
    question: 'Under DOLE Rule 1080, eye and face protection (safety goggles or face shields) are mandatory during operations involving:',
    answer: 'WELDING, CUTTING, CHIPPING, OR GRINDING',
    choices: [
      'CARPENTRY MEASUREMENTS',
      'WELDING, CUTTING, CHIPPING, OR GRINDING',
      'CONCRETE CURING INSPECTION',
      'PAINT COLOR MIXING'
    ],
    explanation: 'Guards against high-velocity flying sparks, metal chips, abrasive wheel fragments, and harmful UV radiation.'
  },
  {
    id: 915,
    area: 'MSTE',
    subtopic: 'Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)',
    difficulty: 'Medium',
    question: 'Under Philippine RA 11058, the maximum daily administrative penalty imposed on employers for refusing or failing to correct an imminent danger violation is:',
    answer: 'PHP 100,000 PER DAY OF CONTINUED VIOLATION',
    choices: [
      'PHP 10,000 PER DAY',
      'PHP 50,000 PER DAY',
      'PHP 100,000 PER DAY OF CONTINUED VIOLATION',
      'PHP 500,000 PER DAY'
    ],
    explanation: 'Section 29 of RA 11058 establishes non-compliance fines up to ₱100,000 per calendar day until the hazard is fully corrected.'
  },
  {
    id: 916,
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Medium',
    question: 'In plane surveying, a horizontal curve composed of two circular curves having different radii turning in the SAME direction on the same side of a common tangent is a:',
    answer: 'COMPOUND CURVE',
    choices: ['REVERSE CURVE', 'COMPOUND CURVE', 'SPIRAL CURVE', 'BROKEN-BACK CURVE'],
    explanation: 'Compound curves join at the Point of Compound Curvature (PCC) where both curves share a common tangent.'
  },
  {
    id: 917,
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Medium',
    question: 'A horizontal curve composed of two circular curves turning in OPPOSITE directions with a common tangent at their junction is a:',
    answer: 'REVERSE CURVE',
    choices: ['COMPOUND CURVE', 'REVERSE CURVE', 'BROKEN-BACK CURVE', 'TRANSITION SPIRAL'],
    explanation: 'The Point of Reverse Curvature (PRC) connects two curves turning in opposite directions.'
  },
  {
    id: 918,
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Hard',
    question: 'Simpson’s One-Third Rule for computing the area of an irregular boundary requires that the total number of strips must be:',
    answer: 'EVEN NUMBER OF STRIPS (ODD NUMBER OF ORDINATES)',
    choices: [
      'ODD NUMBER OF STRIPS (EVEN NUMBER OF ORDINATES)',
      'EVEN NUMBER OF STRIPS (ODD NUMBER OF ORDINATES)',
      'ANY NUMBER OF STRIPS',
      'EXACTLY THREE STRIPS'
    ],
    explanation: 'Simpson’s rule fits parabolas across pairs of strips; hence the number of strips must be even (number of offsets n is odd).'
  },
  {
    id: 919,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Medium',
    question: 'In differential equations, an equation of the form dy/dx + P(x)·y = Q(x) is classified as a:',
    answer: 'FIRST-ORDER LINEAR DIFFERENTIAL EQUATION',
    choices: [
      'HOMOGENEOUS EQUATION',
      'FIRST-ORDER LINEAR DIFFERENTIAL EQUATION',
      'BERNOULLI EQUATION',
      'EXACT EQUATION'
    ],
    explanation: 'Solved using integrating factor IF = e^(∫ P(x) dx).'
  },
  {
    id: 920,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Medium',
    question: 'The volume of a sphere of radius R is mathematically given by:',
    answer: 'V = (4 / 3) · π · R³',
    choices: ['V = 4 · π · R²', 'V = (4 / 3) · π · R³', 'V = (2 / 3) · π · R³', 'V = π · R³'],
    explanation: 'Derived from revolving semicircle y = √(R² - x²) about x-axis: V = ∫ π(R² - x²)dx = (4/3)πR³.'
  },
  {
    id: 921,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Medium',
    question: 'The surface area A of a sphere of radius R is given by:',
    answer: 'A = 4 · π · R²',
    choices: ['A = 2 · π · R²', 'A = 4 · π · R²', 'A = (4 / 3) · π · R²', 'A = 8 · π · R²'],
    explanation: 'The derivative of sphere volume with respect to radius: dA/dR = d/dR[(4/3)πR³] = 4πR².'
  },
  {
    id: 922,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Hard',
    question: 'The volume of a frustum of a right circular cone with lower base radius R, upper base radius r, and vertical height h is:',
    answer: 'V = (π · h / 3) · (R² + R · r + r²)',
    choices: [
      'V = (π · h / 3) · (R² + r²)',
      'V = (π · h / 3) · (R² + R · r + r²)',
      'V = π · h · (R + r) / 2',
      'V = (π · h / 2) · (R² - r²)'
    ],
    explanation: 'Standard mensuration formula frequently tested in CE board earthwork and tank volume problems.'
  },
  {
    id: 923,
    area: 'MSTE',
    subtopic: 'Highway Geometric Design & Sight Distances',
    difficulty: 'Hard',
    question: 'In highway vertical curves, the rate of vertical curvature K is defined as the length of curve L per percent change in grade A (K = L / A). On crest curves governed by stopping sight distance S < L:',
    answer: 'L = A · S² / [ 100 · (√(2·h1) + √(2·h2))² ]',
    choices: [
      'L = A · S / 100',
      'L = A · S² / [ 100 · (√(2·h1) + √(2·h2))² ]',
      'L = 2S - 200 / A',
      'L = A · S² / 800'
    ],
    explanation: 'AASHTO standard with eye height h1 = 1.08 m and object height h2 = 0.60 m, yielding L = A·S² / 658.'
  },
  {
    id: 924,
    area: 'MSTE',
    subtopic: 'Highway Geometric Design & Sight Distances',
    difficulty: 'Medium',
    question: 'On sag vertical highway curves, nighttime design sight distance is governed by headlight beam spreading distance with headlight height of:',
    answer: '0.60 METERS (2.0 FEET) AND 1-DEGREE UPWARD DIVERGENCE ANGLE',
    choices: [
      '1.08 meters',
      '0.60 METERS (2.0 FEET) AND 1-DEGREE UPWARD DIVERGENCE ANGLE',
      '0.30 meters and 2-degree angle',
      '0.80 meters with zero divergence'
    ],
    explanation: 'Headlight beam trajectory illuminates roadway ahead, establishing standard sag K-values.'
  },
  {
    id: 925,
    area: 'MSTE',
    subtopic: 'Traffic Engineering, Markings & Signs',
    difficulty: 'Medium',
    question: 'Annual Average Daily Traffic (AADT) in highway engineering traffic studies represents:',
    answer: 'TOTAL YEARLY TRAFFIC VOLUME DIVIDED BY 365 DAYS',
    choices: [
      'AVERAGE TRAFFIC RECORDED OVER A 24-HOUR PEAK DAY',
      'TOTAL YEARLY TRAFFIC VOLUME DIVIDED BY 365 DAYS',
      'WEEKDAY TRAFFIC DIVIDED BY 5',
      'PEAK HOUR TRAFFIC MULTIPLIED BY 24'
    ],
    explanation: 'AADT accounts for seasonal, monthly, and day-of-week fluctuations to provide unbiased baseline traffic demand.'
  },
  {
    id: 926,
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Medium',
    question: 'The present sum P equivalent to a uniform gradient series G increasing by G each year starting at end of year 2 is:',
    answer: 'P = (G / i) · [ ((1 + i)^n - 1) / (i · (1 + i)^n) - n / (1 + i)^n ]',
    choices: [
      'P = G · n / i',
      'P = (G / i) · [ ((1 + i)^n - 1) / (i · (1 + i)^n) - n / (1 + i)^n ]',
      'P = G / (1 + i)^n',
      'P = G · (P/A, i, n)'
    ],
    explanation: 'The Uniform Gradient Present Worth factor (P/G, i, n) models linearly escalating annual maintenance expenses.'
  },
  {
    id: 927,
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Easy',
    question: 'In PERT analysis, the variance (σ²) of an activity duration with optimistic time a and pessimistic time b is:',
    answer: 'σ² = [ (b - a) / 6 ]²',
    choices: [
      'σ² = (b - a) / 6',
      'σ² = [ (b - a) / 6 ]²',
      'σ² = (b - a)² / 12',
      'σ² = (b + a) / 6'
    ],
    explanation: 'Assuming the beta distribution range spans roughly ±3 standard deviations (total 6σ = b - a).'
  },
  {
    id: 928,
    area: 'MSTE',
    subtopic: 'Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)',
    difficulty: 'Medium',
    question: 'Under DOLE Department Order 13, all heavy equipment mobilized to a construction site must undergo testing and inspection by a:',
    answer: 'DOLE-ACCREDITED THIRD-PARTY TESTING ORGANIZATION',
    choices: [
      'LOCAL MUNICIPAL ENGINEER',
      'DOLE-ACCREDITED THIRD-PARTY TESTING ORGANIZATION',
      'SITE RESIDENT ARCHITECT',
      'EQUIPMENT DEALER MECHANIC'
    ],
    explanation: 'Ensures structural integrity, hydraulic stability, and load limit safety before equipment operation.'
  },
  {
    id: 929,
    area: 'MSTE',
    subtopic: 'Traffic Engineering, Markings & Signs',
    difficulty: 'Easy',
    question: 'A diamond-shaped road sign with yellow background and black border universally designates a:',
    answer: 'WARNING HAZARD SIGN',
    choices: ['MANDATORY REGULATORY SIGN', 'WARNING HAZARD SIGN', 'DIRECTIONAL GUIDE SIGN', 'PARKING RESTRICTION'],
    explanation: 'Diamond road signs alert drivers to curves, intersections, pedestrian crossings, or lane drops ahead.'
  },
  {
    id: 930,
    area: 'MSTE',
    subtopic: 'Traffic Engineering, Markings & Signs',
    difficulty: 'Easy',
    question: 'A rectangular road sign with green background and white lettering universally designates an:',
    answer: 'INFORMATIVE GUIDE / DESTINATION SIGN',
    choices: ['REGULATORY SIGN', 'WARNING SIGN', 'INFORMATIVE GUIDE / DESTINATION SIGN', 'TEMPORARY HAZARD'],
    explanation: 'Green guide signs communicate highway route numbers, destination cities, exits, and mileposts.'
  }
];
