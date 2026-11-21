import { CEQuestion } from '../types';

export const MSTE_TOS_QUESTIONS: CEQuestion[] = [
  {
    "id": 901,
    "area": "MSTE",
    "subtopic": "Engineering Mathematics & Geometry",
    "difficulty": "Easy",
    "question": "The derivative of y = ln(u) with respect to x using the chain rule is:",
    "answer": "dy/dx = (1 / u) · (du/dx)",
    "choices": [
      "dy/dx = u · (du/dx)",
      "dy/dx = (1 / u) · (du/dx)",
      "dy/dx = e^u · (du/dx)",
      "dy/dx = 1 / (u · ln 10)"
    ],
    "explanation": "Fundamental logarithmic differentiation rule: d/dx[ln u] = u' / u."
  },
  {
    "id": 902,
    "area": "MSTE",
    "subtopic": "Engineering Mathematics & Geometry",
    "difficulty": "Medium",
    "question": "The radius of curvature ρ of a plane curve y = f(x) at any point is given by:",
    "answer": "ρ = [ 1 + (y')² ]^(3/2) / |y\"|",
    "choices": [
      "ρ = [ 1 + y' ] / y\"",
      "ρ = [ 1 + (y')² ]^(3/2) / |y\"|",
      "ρ = |y\"| / [ 1 + (y')² ]^(3/2)",
      "ρ = (y')² / y\""
    ],
    "explanation": "Used in deriving transition spiral curves and highway parabolic vertical curves."
  },
  {
    "id": 903,
    "area": "MSTE",
    "subtopic": "Engineering Mathematics & Geometry",
    "difficulty": "Medium",
    "question": "In engineering statistics, the probability of obtaining exactly x successes in n independent Bernoulli trials with probability p is:",
    "answer": "P(x) = C(n, x) · p^x · (1 - p)^(n - x)",
    "choices": [
      "P(x) = p^x · (1 - p)^(n - x)",
      "P(x) = C(n, x) · p^x · (1 - p)^(n - x)",
      "P(x) = e^(-λ) · λ^x / x!",
      "P(x) = n! · p / x!"
    ],
    "explanation": "The standard Binomial Distribution formula frequently tested in CELE mathematics."
  },
  {
    "id": 904,
    "area": "MSTE",
    "subtopic": "Surveying, Leveling & Errors",
    "difficulty": "Medium",
    "question": "The Prismoidal formula for earthwork volume V between two end cross-sections A1 and A2 separated by distance L with middle area Am is:",
    "answer": "V = (L / 6) · (A1 + 4 · Am + A2)",
    "choices": [
      "V = (L / 2) · (A1 + A2)",
      "V = (L / 6) · (A1 + 4 · Am + A2)",
      "V = (L / 3) · (A1 + Am + A2)",
      "V = L · Am"
    ],
    "explanation": "Simpson’s rule integration: gives exact volume for solids with quadratic variation of cross-sectional area."
  },
  {
    "id": 905,
    "area": "MSTE",
    "subtopic": "Surveying, Leveling & Errors",
    "difficulty": "Easy",
    "question": "The End-Area method formula for earthwork volume V between two consecutive cross-sections A1 and A2 separated by length L is:",
    "answer": "V = (L / 2) · (A1 + A2)",
    "choices": [
      "V = (L / 6) · (A1 + 4Am + A2)",
      "V = (L / 2) · (A1 + A2)",
      "V = L · √(A1 · A2)",
      "V = L · (A1 - A2)"
    ],
    "explanation": "Average end area formula provides standard estimation in highway cut and fill computations."
  },
  {
    "id": 906,
    "area": "MSTE",
    "subtopic": "Surveying, Leveling & Errors",
    "difficulty": "Hard",
    "question": "The Prismoidal Correction Cp subtracted from end-area volume for earthwork between three-level sections with center cuts c1, c2 and widths w1, w2 is:",
    "answer": "Cp = (L / 12) · (c1 - c2) · (w1 - w2)",
    "choices": [
      "Cp = (L / 6) · (c1 - c2) · (w1 - w2)",
      "Cp = (L / 12) · (c1 - c2) · (w1 - w2)",
      "Cp = (L / 24) · (c1 + c2) · (w1 + w2)",
      "Cp = (L / 4) · (c1 - c2)²"
    ],
    "explanation": "Always subtracted from end-area volume: V_prismoidal = V_end_area - Cp."
  },
  {
    "id": 907,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Medium",
    "question": "In a simple circular highway curve, the degree of curve D based on standard 20-meter arc definition is given by:",
    "answer": "D = 1145.916 / R",
    "choices": [
      "D = 572.958 / R",
      "D = 1145.916 / R",
      "D = 20 / R",
      "D = 1800 / (π · R)"
    ],
    "explanation": "D / 20 = 360 / (2πR) => D = 20 × (180/π) / R = 1145.916 / R."
  },
  {
    "id": 908,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Medium",
    "question": "The length of curve L for a simple circular curve with radius R and central deflection angle I in radians is:",
    "answer": "L = R · I (for radian angle I)",
    "choices": [
      "L = 2R · sin(I / 2)",
      "L = R · I (for radian angle I)",
      "L = R · tan(I / 2)",
      "L = π · R · I / 360"
    ],
    "explanation": "Subtended circular arc length L = R · I (where I is in radians), or 20 · (I / D) in standard metric stationing. Or L = 20 · I / D for the 20-m definition."
  },
  {
    "id": 909,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Medium",
    "question": "The long chord (LC) distance connecting the Point of Curvature (PC) to the Point of Tangency (PT) of a simple curve is:",
    "answer": "LC = 2 · R · sin(I / 2)",
    "choices": [
      "LC = R · sin I",
      "LC = 2 · R · sin(I / 2)",
      "LC = 2 · R · tan(I / 2)",
      "LC = R · cos(I / 2)"
    ],
    "explanation": "Forms the base of an isosceles triangle with legs equal to radius R."
  },
  {
    "id": 910,
    "area": "MSTE",
    "subtopic": "Project Management, CPM/PERT & Equipment Economics",
    "difficulty": "Hard",
    "question": "In CPM network analysis, Total Float (TF) of an activity with Early Start ES, Early Finish EF, Late Start LS, and Late Finish LF is:",
    "answer": "TF = LS - ES = LF - EF",
    "choices": [
      "TF = LF - ES - Duration",
      "TF = LS - ES = LF - EF",
      "TF = EF - ES",
      "TF = LF - LS"
    ],
    "explanation": "Total float is the maximum delay an activity can tolerate without delaying overall project completion."
  },
  {
    "id": 911,
    "area": "MSTE",
    "subtopic": "Project Management, CPM/PERT & Equipment Economics",
    "difficulty": "Medium",
    "question": "In engineering economics, the Capitalized Cost of a permanent civil infrastructure asset with first cost FC and annual maintenance OM at interest rate i is:",
    "answer": "CC = FC + (OM / i)",
    "choices": [
      "CC = FC · (1 + i)",
      "CC = FC + (OM / i)",
      "CC = (FC + OM) / i",
      "CC = FC + OM · n"
    ],
    "explanation": "Capitalized cost is the present worth of an asset with an infinite operational service life."
  },
  {
    "id": 912,
    "area": "MSTE",
    "subtopic": "Project Management, CPM/PERT & Equipment Economics",
    "difficulty": "Medium",
    "question": "In equipment earthwork economics, a mass diagram plot displays cumulative volume of earthwork against:",
    "answer": "Highway Stations Along the Alignment",
    "choices": [
      "Elevation of Subgrade",
      "Highway Stations Along the Alignment",
      "Cycle Time in Minutes",
      "Project Calendar Months"
    ],
    "explanation": "Mass diagrams show balance points, haul distances, and limit lines of economical haul (free haul vs overhaul)."
  },
  {
    "id": 913,
    "area": "MSTE",
    "subtopic": "Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)",
    "difficulty": "Medium",
    "question": "Under DOLE Department Order 13, crane operators on construction sites in the Philippines must be certified by:",
    "answer": "TESDA",
    "choices": [
      "DPWH",
      "TESDA",
      "PRC",
      "LTO"
    ],
    "explanation": "Heavy equipment operators must hold a valid National Certificate (NC II) issued by TESDA. Technical Education and Skills Development Authority (TESDA) issues national trade certifications."
  },
  {
    "id": 914,
    "area": "MSTE",
    "subtopic": "Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)",
    "difficulty": "Easy",
    "question": "Under DOLE Rule 1080, eye and face protection (safety goggles or face shields) are mandatory during operations involving:",
    "answer": "Welding, Cutting, Chipping, or Grinding",
    "choices": [
      "Carpentry Measurements",
      "Welding, Cutting, Chipping, or Grinding",
      "Concrete Curing Inspection",
      "Paint Color Mixing"
    ],
    "explanation": "Guards against high-velocity flying sparks, metal chips, abrasive wheel fragments, and harmful UV radiation."
  },
  {
    "id": 915,
    "area": "MSTE",
    "subtopic": "Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)",
    "difficulty": "Medium",
    "question": "Under Philippine RA 11058, the maximum daily administrative penalty imposed on employers for refusing or failing to correct an imminent danger violation is:",
    "answer": "Php 100,000 Per Day",
    "choices": [
      "Php 10,000 Per Day",
      "Php 50,000 Per Day",
      "Php 100,000 Per Day",
      "Php 500,000 Per Day"
    ],
    "explanation": "Section 29 of RA 11058 establishes non-compliance fines up to ₱100,000 per calendar day until the hazard is fully corrected."
  },
  {
    "id": 916,
    "area": "MSTE",
    "subtopic": "Surveying, Leveling & Errors",
    "difficulty": "Medium",
    "question": "In plane surveying, a horizontal curve composed of two circular curves having different radii turning in the SAME direction on the same side of a common tangent is a:",
    "answer": "Compound Curve",
    "choices": [
      "Reverse Curve",
      "Compound Curve",
      "Spiral Curve",
      "Broken-back Curve"
    ],
    "explanation": "Compound curves join at the Point of Compound Curvature (PCC) where both curves share a common tangent."
  },
  {
    "id": 917,
    "area": "MSTE",
    "subtopic": "Surveying, Leveling & Errors",
    "difficulty": "Medium",
    "question": "A horizontal curve composed of two circular curves turning in OPPOSITE directions with a common tangent at their junction is a:",
    "answer": "Reverse Curve",
    "choices": [
      "Compound Curve",
      "Reverse Curve",
      "Broken-back Curve",
      "Transition Spiral"
    ],
    "explanation": "The Point of Reverse Curvature (PRC) connects two curves turning in opposite directions."
  },
  {
    "id": 918,
    "area": "MSTE",
    "subtopic": "Surveying, Leveling & Errors",
    "difficulty": "Hard",
    "question": "Simpson’s One-Third Rule for computing the area of an irregular boundary requires that the total number of strips must be:",
    "answer": "Even Number of Strips (Odd Number of Ordinates)",
    "choices": [
      "Odd Number of Strips (Even Number of Ordinates)",
      "Even Number of Strips (Odd Number of Ordinates)",
      "Any Number of Strips (Even or Odd Ordinates)",
      "Multiple of Three Strips (Divisible by Three)"
    ],
    "explanation": "Simpson’s rule fits parabolas across pairs of strips; hence the number of strips must be even (number of offsets n is odd)."
  },
  {
    "id": 919,
    "area": "MSTE",
    "subtopic": "Engineering Mathematics & Geometry",
    "difficulty": "Medium",
    "question": "In differential equations, an equation of the form dy/dx + P(x)·y = Q(x) is classified as a:",
    "answer": "First-order Linear Differential Equation",
    "choices": [
      "Homogeneous Second-Order Differential Equation",
      "First-order Linear Differential Equation",
      "Nonlinear Bernoulli Differential Equation",
      "Exact Partial Differential Equation"
    ],
    "explanation": "Solved using integrating factor IF = e^(∫ P(x) dx)."
  },
  {
    "id": 920,
    "area": "MSTE",
    "subtopic": "Engineering Mathematics & Geometry",
    "difficulty": "Medium",
    "question": "The volume of a sphere of radius R is mathematically given by:",
    "answer": "V = (4 / 3) · π · R³",
    "choices": [
      "V = 4 · π · R²",
      "V = (4 / 3) · π · R³",
      "V = (2 / 3) · π · R³",
      "V = π · R³"
    ],
    "explanation": "Derived from revolving semicircle y = √(R² - x²) about x-axis: V = ∫ π(R² - x²)dx = (4/3)πR³."
  },
  {
    "id": 921,
    "area": "MSTE",
    "subtopic": "Engineering Mathematics & Geometry",
    "difficulty": "Medium",
    "question": "The surface area A of a sphere of radius R is given by:",
    "answer": "A = 4 · π · R²",
    "choices": [
      "A = 2 · π · R²",
      "A = 4 · π · R²",
      "A = (4 / 3) · π · R²",
      "A = 8 · π · R²"
    ],
    "explanation": "The derivative of sphere volume with respect to radius: dA/dR = d/dR[(4/3)πR³] = 4πR²."
  },
  {
    "id": 922,
    "area": "MSTE",
    "subtopic": "Engineering Mathematics & Geometry",
    "difficulty": "Hard",
    "question": "The volume of a frustum of a right circular cone with lower base radius R, upper base radius r, and vertical height h is:",
    "answer": "V = (π · h / 3) · (R² + R · r + r²)",
    "choices": [
      "V = (π · h / 3) · (R² + r²)",
      "V = (π · h / 3) · (R² + R · r + r²)",
      "V = π · h · (R + r) / 2",
      "V = (π · h / 2) · (R² - r²)"
    ],
    "explanation": "Standard mensuration formula frequently tested in CE board earthwork and tank volume problems."
  },
  {
    "id": 923,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Hard",
    "question": "In highway vertical curves, the rate of vertical curvature K is defined as the length of curve L per percent change in grade A (K = L / A). On crest curves governed by stopping sight distance S < L:",
    "answer": "L = A · S² / [ 100 · (√(2·h1) + √(2·h2))² ]",
    "choices": [
      "L = A · S² / [ 100 · (√(2·h1) + √(2·h2))² ]",
      "L = A · S² / [ 200 · (√(h1) + √(h2))² ]",
      "L = 2S - [ 200 · (√(h1) + √(h2))² / A ]",
      "L = A · S² / [ 800 · (h1 + h2) ]"
    ],
    "explanation": "AASHTO standard with eye height h1 = 1.08 m and object height h2 = 0.60 m, yielding L = A·S² / 658."
  },
  {
    "id": 924,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Medium",
    "question": "On sag vertical highway curves, nighttime design sight distance is governed by headlight beam spreading distance with headlight height of:",
    "answer": "0.60 m Height and 1° Upward Divergence",
    "choices": [
      "1.08 m Height and 0° Divergence",
      "0.60 m Height and 1° Upward Divergence",
      "0.30 m Height and 2° Upward Divergence",
      "0.80 m Height and 1° Downward Divergence"
    ],
    "explanation": "Headlight beam trajectory illuminates roadway ahead, establishing standard sag K-values. 0.60 meters corresponds to 2.0 feet."
  },
  {
    "id": 925,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Medium",
    "question": "Annual Average Daily Traffic (AADT) in highway engineering traffic studies represents:",
    "answer": "Total Yearly Traffic Volume Divided by 365 Days",
    "choices": [
      "Average Traffic Recorded Over a 24-hour Peak Day",
      "Total Yearly Traffic Volume Divided by 365 Days",
      "Weekday Traffic Divided by 5",
      "Peak Hour Traffic Multiplied by 24"
    ],
    "explanation": "AADT accounts for seasonal, monthly, and day-of-week fluctuations to provide unbiased baseline traffic demand."
  },
  {
    "id": 926,
    "area": "MSTE",
    "subtopic": "Project Management, CPM/PERT & Equipment Economics",
    "difficulty": "Medium",
    "question": "The present sum P equivalent to a uniform gradient series G increasing by G each year starting at end of year 2 is:",
    "answer": "P = (G / i) · [ ((1 + i)^n - 1) / (i · (1 + i)^n) - n / (1 + i)^n ]",
    "choices": [
      "P = (G / i) · [ ((1 + i)^n - 1) / (i · (1 + i)^n) - n / (1 + i)^n ]",
      "P = (G / i) · [ ((1 + i)^n + 1) / (i · (1 + i)^n) + n / (1 + i)^n ]",
      "P = (G / i²) · [ 1 - (1 + i)^(-n) ] + n · G / (1 + i)^n",
      "P = G · [ ((1 + i)^n - 1) / (i · (1 + i)^n) ] - n · G"
    ],
    "explanation": "The Uniform Gradient Present Worth factor (P/G, i, n) models linearly escalating annual maintenance expenses."
  },
  {
    "id": 927,
    "area": "MSTE",
    "subtopic": "Project Management, CPM/PERT & Equipment Economics",
    "difficulty": "Easy",
    "question": "In PERT analysis, the variance (σ²) of an activity duration with optimistic time a and pessimistic time b is:",
    "answer": "σ² = [ (b - a) / 6 ]²",
    "choices": [
      "σ² = (b - a) / 6",
      "σ² = [ (b - a) / 6 ]²",
      "σ² = (b - a)² / 12",
      "σ² = (b + a) / 6"
    ],
    "explanation": "Assuming the beta distribution range spans roughly ±3 standard deviations (total 6σ = b - a)."
  },
  {
    "id": 928,
    "area": "MSTE",
    "subtopic": "Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)",
    "difficulty": "Medium",
    "question": "Under DOLE Department Order 13, all heavy equipment mobilized to a construction site must undergo testing and inspection by a:",
    "answer": "DOLE-Accredited Third-Party Testing Organization",
    "choices": [
      "Local Municipal Building Engineer",
      "DOLE-Accredited Third-Party Testing Organization",
      "Site Resident Supervising Architect",
      "Heavy Equipment Dealer Mechanic"
    ],
    "explanation": "Ensures structural integrity, hydraulic stability, and load limit safety before equipment operation."
  },
  {
    "id": 929,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Easy",
    "question": "A diamond-shaped road sign with yellow background and black border universally designates a:",
    "answer": "Warning Hazard Sign",
    "choices": [
      "Mandatory Regulatory Sign",
      "Warning Hazard Sign",
      "Directional Guide Sign",
      "Parking Restriction"
    ],
    "explanation": "Diamond road signs alert drivers to curves, intersections, pedestrian crossings, or lane drops ahead."
  },
  {
    "id": 930,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Easy",
    "question": "A rectangular road sign with green background and white lettering universally designates an:",
    "answer": "Informative Guide Sign",
    "choices": [
      "Regulatory Control Sign",
      "Hazard Warning Sign",
      "Informative Guide Sign",
      "Temporary Work Sign"
    ],
    "explanation": "Green guide signs communicate highway route numbers, destination cities, exits, and mileposts."
  }
];
