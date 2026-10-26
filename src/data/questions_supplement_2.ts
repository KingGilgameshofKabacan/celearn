import { CEQuestion } from '../types';

export const SUPPLEMENT_QUESTIONS_2: CEQuestion[] = [
  // Authentic Table of Specifications (TOS) Board Exam PSAD Questions (IDs 347-360)
  {
    id: 347,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Hard',
    question: 'The qualitative principle stating that the influence line for any internal stress function or reaction is proportional to the deflected shape obtained by releasing that restraint and introducing a corresponding unit displacement is the:',
    answer: 'MÜLLER-BRESLAU PRINCIPLE',
    choices: ["BETTI'S RECIPROCAL THEOREM", 'MÜLLER-BRESLAU PRINCIPLE', "CLAPEYRON'S THEOREM", "MAXWELL'S RECIPROCAL THEOREM"],
    explanation: 'The Müller-Breslau principle is the foundation for constructing influence lines in both determinate and indeterminate structures.'
  },
  {
    id: 348,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Medium',
    question: 'In the classical Conjugate Beam Method for beam deflections, the internal bending moment at any cross-section of the fictional conjugate beam corresponds directly to which parameter of the real beam?',
    answer: 'DEFLECTION OF THE REAL BEAM',
    choices: ['SLOPE OF THE REAL BEAM', 'DEFLECTION OF THE REAL BEAM', 'SHEAR FORCE OF THE REAL BEAM', 'RADIUS OF CURVATURE'],
    explanation: 'By the conjugate beam theorem: conjugate load = M/EI; conjugate shear = real beam slope (θ); conjugate moment = real beam deflection (y).'
  },
  {
    id: 349,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Medium',
    question: "According to Mohr's First Moment-Area Theorem, the change in slope (θB/A) between tangents drawn to the elastic curve at points A and B equals the:",
    answer: 'AREA UNDER THE M / (E · I) DIAGRAM BETWEEN A AND B',
    choices: [
      'AREA UNDER THE M / (E · I) DIAGRAM BETWEEN A AND B',
      'MOMENT OF THE SHEAR DIAGRAM ABOUT POINT B',
      'MAXIMUM DEFLECTION DIVIDED BY SPAN LENGTH',
      'CENTROIDAL DISTANCE OF THE LOAD'
    ],
    explanation: 'Mohr I states θB/A = ∫ (M / EI) dx from point A to point B.'
  },
  {
    id: 350,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Hard',
    question: "Mohr's Second Moment-Area Theorem states that the vertical tangential deviation (tB/A) of point B from the tangent drawn at point A equals the:",
    answer: 'FIRST MOMENT OF THE AREA OF THE M / (E · I) DIAGRAM BETWEEN A AND B ABOUT POINT B',
    choices: [
      'FIRST MOMENT OF THE AREA OF THE M / (E · I) DIAGRAM BETWEEN A AND B ABOUT POINT B',
      'TOTAL AREA OF THE SHEAR DIAGRAM DIVIDED BY E · I',
      'MAXIMUM SLOPE MULTIPLIED BY SPAN SQUARED',
      'SECOND MOMENT OF INERTIA OF THE BENDING DIAGRAM'
    ],
    explanation: 'Mohr II states tB/A = (Area of M/EI diagram between A and B) · x_bar_B.'
  },
  {
    id: 351,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Hard',
    question: 'In the classical Slope-Deflection formulation for prismatic frame members, the near-end moment M_AB is expressed in terms of near joint rotation θA, far joint rotation θB, and chord drift ψ as:',
    answer: 'M_AB = (2 · E · I / L) · [ 2·θA + θB - 3·ψ ] + FEM_AB',
    choices: [
      'M_AB = (2 · E · I / L) · [ 2·θA + θB - 3·ψ ] + FEM_AB',
      'M_AB = (4 · E · I / L) · [ θA + θB - ψ ] - FEM_AB',
      'M_AB = (E · I / L) · [ θA + 2·θB ] + FEM_AB',
      'M_AB = (3 · E · I / L) · [ θA - ψ ]'
    ],
    explanation: 'Standard Maney slope-deflection relationship accounting for flexural stiffness, joint rotations, sway, and fixed-end moments.'
  },
  {
    id: 352,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Medium',
    question: 'In the approximate Portal Method for analyzing multi-story building frames under lateral wind or earthquake shears, column shears are assumed to be distributed such that:',
    answer: 'INTERIOR COLUMNS CARRY TWICE THE SHEAR OF EXTERIOR COLUMNS',
    choices: [
      'ALL COLUMNS IN A STORY CARRY IDENTICAL SHEAR',
      'INTERIOR COLUMNS CARRY TWICE THE SHEAR OF EXTERIOR COLUMNS',
      'EXTERIOR COLUMNS CARRY ALL LATERAL FORCES',
      'COLUMN SHEARS ARE PROPORTIONAL TO STORY HEIGHT SQUARED'
    ],
    explanation: 'Portal method treats each portal frame as carrying equal shear, making interior columns (shared between two portals) resist 2V while exterior columns resist 1V.'
  },
  {
    id: 353,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Hard',
    question: 'In the approximate Cantilever Method for lateral load analysis of tall building frames, column axial stresses are assumed to be:',
    answer: 'DIRECTLY PROPORTIONAL TO DISTANCE FROM THE CENTROID OF THE FRAME COLUMN GROUP',
    choices: [
      'UNIFORMLY DISTRIBUTED ACROSS ALL COLUMNS',
      'DIRECTLY PROPORTIONAL TO DISTANCE FROM THE CENTROID OF THE FRAME COLUMN GROUP',
      'ZERO AT EXTERIOR COLUMNS AND MAXIMUM AT CENTER',
      'EQUAL TO COLUMN SHEAR DIVIDED BY STORY HEIGHT'
    ],
    explanation: "The frame is assumed to act as a vertical cantilever beam where Navier's flexure formula (σ = M·y/I) applies to column axial stresses."
  },
  {
    id: 354,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'According to NSCP 2015 Section 409.9, structural flexural members are classified and designed as Deep Beams when the clear span ln does not exceed:',
    answer: '4 TIMES THE OVERALL MEMBER DEPTH h (ln ≤ 4 · h)',
    choices: [
      '2 TIMES THE OVERALL DEPTH h (ln ≤ 2 · h)',
      '4 TIMES THE OVERALL MEMBER DEPTH h (ln ≤ 4 · h)',
      '8 TIMES THE OVERALL DEPTH h (ln ≤ 8 · h)',
      '1.5 TIMES EFFECTIVE DEPTH d'
    ],
    explanation: 'Deep beams exhibit non-linear strain distributions across their cross-section where plane sections do not remain plane (Bernoulli hypothesis invalid).'
  },
  {
    id: 355,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'Under NSCP 2015 Section 408.10, the Direct Design Method for two-way reinforced concrete slabs requires a minimum of how many continuous spans in each direction?',
    answer: '3 CONTINUOUS SPANS',
    choices: ['2 SPANS', '3 CONTINUOUS SPANS', '4 SPANS', '5 SPANS'],
    explanation: 'Limitations: minimum 3 continuous spans, panel length/width ratio ≤ 2.0, successive spans differing by ≤ 33%, column offset ≤ 10% of span.'
  },
  {
    id: 356,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Hard',
    question: 'In prestressed concrete design, the critical stage occurring immediately upon release of pretensioning tendons to concrete when concrete strength is lowest and tendon stress is highest is the:',
    answer: 'TRANSFER STAGE (INITIAL STAGE)',
    choices: ['SERVICE STAGE', 'CRACKING STAGE', 'TRANSFER STAGE (INITIAL STAGE)', 'ULTIMATE COLLAPSE STAGE'],
    explanation: 'At transfer, initial prestress Pi and girder self-weight act alone before time-dependent losses (creep, shrinkage, relaxation) occur.'
  },
  {
    id: 357,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Hard',
    question: 'To prevent tensile stresses from developing across the base of an unreinforced concrete or masonry pier under axial compression P and moment M, the eccentricity e must not exceed:',
    answer: 'h / 6 (RESULTANT REMAINS WITHIN THE MIDDLE THIRD)',
    choices: [
      'h / 2',
      'h / 3',
      'h / 6 (RESULTANT REMAINS WITHIN THE MIDDLE THIRD)',
      'h / 12'
    ],
    explanation: 'Middle-third rule: for rectangular section of depth h, kern boundary is at e = h/6 (σ_min = P/A - 6M/bh² ≥ 0).'
  },
  {
    id: 358,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Hard',
    question: 'In reinforced concrete columns subjected to biaxial bending about both principal axes, Bresler’s Reciprocal Load Method computes nominal axial capacity Pn through:',
    answer: '1 / Pn = 1 / Pnx + 1 / Pny - 1 / Pno',
    choices: [
      'Pn = Pnx + Pny - Pno',
      '1 / Pn = 1 / Pnx + 1 / Pny - 1 / Pno',
      'Pn = √(Pnx² + Pny²)',
      '1 / Pn² = 1 / Pnx² + 1 / Pny²'
    ],
    explanation: "Bresler's formula accounts for biaxial interaction using uniaxial capacities Pnx and Pny along with pure axial capacity Pno."
  },
  {
    id: 359,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Hard',
    question: 'Under NSCP 2015, shear transfer across an intentional concrete construction joint (cold joint) with roughened surface is evaluated using the Shear Friction concept with nominal strength:',
    answer: 'Vn = Avf · fy · μ',
    choices: [
      'Vn = 0.17 · √f\'c · bw · d',
      'Vn = Avf · fy · μ',
      'Vn = Av · fy · (d / s)',
      'Vn = 0.85 · f\'c · Ac'
    ],
    explanation: 'Tensile stress developed in clamping reinforcement across the crack plane generates frictional resistance Vn = Avf · fy · μ.'
  },
  {
    id: 360,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Hard',
    question: 'In the plastic limit analysis of structural steel frames, the Lower Bound (Static) Theorem states that any load computed from a statically admissible equilibrium stress distribution is:',
    answer: 'LESS THAN OR EQUAL TO THE TRUE PLASTIC COLLAPSE LOAD (P ≤ P_collapse)',
    choices: [
      'GREATER THAN THE TRUE PLASTIC COLLAPSE LOAD',
      'LESS THAN OR EQUAL TO THE TRUE PLASTIC COLLAPSE LOAD (P ≤ P_collapse)',
      'EXACTLY EQUAL TO TWICE THE WORKING LOAD',
      'GOVERNED BY ELASTIC PROPORTIONAL LIMIT'
    ],
    explanation: 'Lower bound theorem provides safe, conservative estimates of structural capacity: P_static ≤ P_true ≤ P_kinematic.'
  },


  // HPGE questions (IDs 361-390)
  {
    id: 361,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Easy',
    question: 'Pascal’s principle states that an external pressure applied to an enclosed, incompressible fluid is:',
    answer: 'TRANSMITTED EQUALLY AND UNDIMINISHED IN ALL DIRECTIONS',
    choices: [
      'CONCENTRATED AT THE LOWEST POINT',
      'TRANSMITTED EQUALLY AND UNDIMINISHED IN ALL DIRECTIONS',
      'DISSIPATED BY VISCOUS SHEAR',
      'CONVERTED INTO DYNAMIC VELOCITY HEAD'
    ],
    explanation: 'Pascal’s Law is the operating principle behind hydraulic jacks, car brakes, and hydraulic presses.'
  },
  {
    id: 362,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Medium',
    question: 'Absolute pressure is mathematically related to gage pressure and local atmospheric pressure by:',
    answer: 'P_abs = P_gage + P_atm',
    choices: ['P_abs = P_gage - P_atm', 'P_abs = P_gage + P_atm', 'P_abs = P_atm - P_gage', 'P_abs = P_gage · P_atm'],
    explanation: 'Gage pressure measures pressure relative to local barometric atmospheric pressure (P_gage = 0 at 1 atm).'
  },
  {
    id: 363,
    area: 'HPGE',
    subtopic: 'Fluid Dynamics & Energy/Continuity',
    difficulty: 'Easy',
    question: 'The volume of fluid flowing across a conduit cross-section per unit time is known as:',
    answer: 'DISCHARGE (FLOW RATE Q)',
    choices: ['STREAM VELOCITY', 'DISCHARGE (FLOW RATE Q)', 'HYDRAULIC GRADIENT', 'FLUID VISCOSITY'],
    explanation: 'Discharge Q = A · V (m³/s or liters/second).'
  },
  {
    id: 364,
    area: 'HPGE',
    subtopic: 'Fluid Dynamics & Energy/Continuity',
    difficulty: 'Medium',
    question: 'Energy grade line (EGL) in fluid hydraulics represents the sum of:',
    answer: 'ELEVATION HEAD, PRESSURE HEAD, AND VELOCITY HEAD (z + P/γ + V²/2g)',
    choices: [
      'ELEVATION HEAD AND PRESSURE HEAD ONLY',
      'ELEVATION HEAD, PRESSURE HEAD, AND VELOCITY HEAD (z + P/γ + V²/2g)',
      'PRESSURE HEAD AND FRICTION HEAD ONLY',
      'VELOCITY HEAD ALONE'
    ],
    explanation: 'The Hydraulic Grade Line (HGL) lies below EGL by the velocity head V²/(2g).'
  },
  {
    id: 365,
    area: 'HPGE',
    subtopic: 'Fluid Dynamics & Energy/Continuity',
    difficulty: 'Medium',
    question: 'Hydraulic grade line (HGL) represents the piezometric head level, which is the sum of:',
    answer: 'ELEVATION HEAD AND PRESSURE HEAD (z + P/γ)',
    choices: [
      'TOTAL ENERGY HEAD',
      'ELEVATION HEAD AND PRESSURE HEAD (z + P/γ)',
      'VELOCITY HEAD AND PRESSURE HEAD',
      'BED SLOPE ELEVATION'
    ],
    explanation: 'Water in a piezometer column rises exactly to the height of the Hydraulic Grade Line (HGL).'
  },
  {
    id: 366,
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Hard',
    question: 'The water hammer phenomenon in long pressurized pipelines is caused by:',
    answer: 'SUDDEN STOPPAGE OF FLOW BY RAPID VALVE CLOSURE',
    choices: [
      'CAVITATION IN PUMP IMPELLERS',
      'SUDDEN STOPPAGE OF FLOW BY RAPID VALVE CLOSURE',
      'EXCESSIVE PIPE FRICTION LOSS',
      'LAMINAR REVERSAL IN EXPANSIONS'
    ],
    explanation: 'Rapid valve closure converts kinetic flow energy into high transient acoustic pressure shock waves.'
  },
  {
    id: 367,
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Hard',
    question: 'Formation and violent collapse of vapor bubbles in low-pressure fluid regions where static pressure falls below vapor pressure is:',
    answer: 'CAVITATION',
    choices: ['WATER HAMMER', 'CAVITATION', 'CHOKED FLOW', 'SLUG FLOW'],
    explanation: 'Cavitation causes severe pitting erosion, noise, vibration, and loss of pump or turbine efficiency.'
  },
  {
    id: 368,
    area: 'HPGE',
    subtopic: 'Soil Physical Properties & Phase Relationships',
    difficulty: 'Easy',
    question: 'The density of pure liquid water at 4°C in SI units is:',
    answer: '1000 kg/m³ (OR 9.81 kN/m³ UNIT WEIGHT)',
    choices: ['800 kg/m³', '1000 kg/m³ (OR 9.81 kN/m³ UNIT WEIGHT)', '1200 kg/m³', '1500 kg/m³'],
    explanation: 'Unit weight of water γw = ρ · g = 1000 kg/m³ × 9.81 m/s² = 9810 N/m³ ≈ 9.81 kN/m³.'
  },
  {
    id: 369,
    area: 'HPGE',
    subtopic: 'Soil Physical Properties & Phase Relationships',
    difficulty: 'Medium',
    question: 'The ratio of the mass of a given volume of solid soil particles to the mass of an equal volume of distilled water is:',
    answer: 'SPECIFIC GRAVITY OF SOIL SOLIDS (Gs)',
    choices: ['MASS DENSITY', 'SPECIFIC GRAVITY OF SOIL SOLIDS (Gs)', 'BUOYANT RATIO', 'UNIT DENSITY'],
    explanation: 'Most inorganic soil minerals have specific gravity Gs between 2.60 and 2.80 (quartz ≈ 2.65).'
  },
  {
    id: 370,
    area: 'HPGE',
    subtopic: 'Soil Classification, Compaction & Permeability',
    difficulty: 'Medium',
    question: 'In the Unified Soil Classification System (USCS), coarse-grained soils have more than 50% retained on which sieve?',
    answer: 'NO. 200 SIEVE (0.075 mm)',
    choices: ['NO. 4 SIEVE (4.75 mm)', 'NO. 40 SIEVE (0.425 mm)', 'NO. 200 SIEVE (0.075 mm)', 'NO. 10 SIEVE (2.0 mm)'],
    explanation: 'Soils with > 50% passing No. 200 are fine-grained (silts and clays); otherwise coarse-grained (sands and gravels).'
  },
  {
    id: 371,
    area: 'HPGE',
    subtopic: 'Soil Classification, Compaction & Permeability',
    difficulty: 'Medium',
    question: 'The uniformity coefficient (Cu) of a soil grain size distribution curve is defined as:',
    answer: 'Cu = D60 / D10',
    choices: ['Cu = D10 / D60', 'Cu = D60 / D10', 'Cu = (D30)² / (D10 · D60)', 'Cu = D50 / D10'],
    explanation: 'D10 is the effective size. Cu > 4 indicates well-graded gravel; Cu > 6 indicates well-graded sand.'
  },
  {
    id: 372,
    area: 'HPGE',
    subtopic: 'Soil Classification, Compaction & Permeability',
    difficulty: 'Hard',
    question: 'The coefficient of curvature (Cc or Cz) of a soil grading curve is defined as:',
    answer: 'Cc = (D30)² / (D10 · D60)',
    choices: ['Cc = D60 / D10', 'Cc = (D30)² / (D10 · D60)', 'Cc = D30 / (D10 + D60)', 'Cc = D50 / D30'],
    explanation: 'For a soil to be classified as well-graded, Cc must fall between 1.0 and 3.0.'
  },
  {
    id: 373,
    area: 'HPGE',
    subtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    difficulty: 'Hard',
    question: 'The ratio of horizontal effective stress to vertical effective stress in a soil deposit at rest (zero lateral strain) is:',
    answer: 'COEFFICIENT OF EARTH PRESSURE AT REST (K0)',
    choices: ['ACTIVE PRESSURE COEFFICIENT (Ka)', 'PASSIVE PRESSURE COEFFICIENT (Kp)', 'COEFFICIENT OF EARTH PRESSURE AT REST (K0)', 'POISSON\'S SOIL COEFFICIENT'],
    explanation: "For normally consolidated soils, Jaky’s empirical formula gives K0 ≈ 1 - sin(φ')."
  },
  {
    id: 374,
    area: 'HPGE',
    subtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    difficulty: 'Hard',
    question: 'The compression index (Cc) used in calculating primary consolidation settlement of normally consolidated clay is the slope of:',
    answer: 'e vs. log σ\' CURVE',
    choices: ['e vs. σ\' LINEAR PLOT', 'e vs. log σ\' CURVE', 't vs. settlement CURVE', 'σ vs. ε DIAGRAM'],
    explanation: 'Cc = (e1 - e2) / log(σ\'2 / σ\'1). Primary settlement S = [Cc · H / (1 + e0)] · log(σ\'f / σ\'0).'
  },
  {
    id: 375,
    area: 'HPGE',
    subtopic: 'Foundations, Retaining Walls & Slope Stability',
    difficulty: 'Hard',
    question: 'The failure surface of a rotational slope failure in homogeneous cohesive clay slopes is typically assumed to be an arc of a:',
    answer: 'CIRCULAR CYLINDER',
    choices: ['PARABOLA', 'CIRCULAR CYLINDER', 'LOGARITHMIC SPIRAL', 'PLANE WEDGE'],
    explanation: 'The Swedish circle (Bishop’s method) assumes slip occurs along a cylindrical surface with moment equilibrium.'
  },

  // MSTE questions (IDs 376-400)
  {
    id: 376,
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Easy',
    question: 'The standard length of a surveyor\'s steel tape in metric engineering work is:',
    answer: '30 METERS (OR 50 METERS)',
    choices: ['10 METERS', '20 METERS', '30 METERS (OR 50 METERS)', '100 METERS'],
    explanation: 'Standard metric surveying tapes are 30 m or 50 m calibrated at 20°C and 50 N pull tension.'
  },
  {
    id: 377,
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Medium',
    question: 'Correction applied to a steel tape measurement when it hangs unsupported between two points under its own weight is:',
    answer: 'SAG CORRECTION',
    choices: ['PULL CORRECTION', 'SAG CORRECTION', 'TEMPERATURE CORRECTION', 'SLOPE CORRECTION'],
    explanation: 'Sag correction is always negative: Cs = - (w² · L³) / (24 · P²).'
  },
  {
    id: 378,
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Medium',
    question: 'Correction for thermal expansion of a steel tape with coefficient of thermal expansion α = 0.0000116 / °C is:',
    answer: 'Ct = α · L · (T - Ts)',
    choices: ['Ct = α · (T - Ts) / L', 'Ct = α · L · (T - Ts)', 'Ct = (P - Ps) · L / (A · E)', 'Ct = L · cos(θ)'],
    explanation: 'Ts is standard calibration temperature (20°C). If T > Ts, tape expands and measured recorded length must be increased.'
  },
  {
    id: 379,
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Medium',
    question: 'Correction for tension pull P different from standardized calibration pull Ps on a tape of area A and modulus E is:',
    answer: 'Cp = (P - Ps) · L / (A · E)',
    choices: ['Cp = (P + Ps) · L / (A · E)', 'Cp = (P - Ps) · L / (A · E)', 'Cp = P · L / A', 'Cp = E · (P - Ps) / L'],
    explanation: 'Elastic elongation follows Hooke’s law: when applied tension exceeds calibration pull, tape stretches longer.'
  },
  {
    id: 380,
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Hard',
    question: 'The angular error of closure in a closed traverse with n interior angles should not exceed:',
    answer: 'c = k · √n',
    choices: ['c = k · n', 'c = k · √n', 'c = k / n', 'c = k · n²'],
    explanation: 'Random errors in surveying propagate in proportion to the square root of the number of measured setups (√n).'
  },
  {
    id: 381,
    area: 'MSTE',
    subtopic: 'Highway Geometric Design & Sight Distances',
    difficulty: 'Easy',
    question: 'The central crowning slope provided on roadway pavements to facilitate rapid lateral drainage of storm runoff is the:',
    answer: 'CAMBER (CROSS SLOPE)',
    choices: ['SUPERELEVATION', 'CAMBER (CROSS SLOPE)', 'LONGITUDINAL GRADE', 'KERB SLOPE'],
    explanation: 'Standard pavement cross slope is 1.5% to 2.0% for asphalt and concrete pavements.'
  },
  {
    id: 382,
    area: 'MSTE',
    subtopic: 'Highway Geometric Design & Sight Distances',
    difficulty: 'Medium',
    question: 'Minimum radius R of a horizontal highway circular curve is determined by vehicle design speed V, superelevation e, and side friction f by:',
    answer: 'R_min = V² / [127 · (e_max + f_max)]',
    choices: ['R_min = V² / (254 · e)', 'R_min = V² / [127 · (e_max + f_max)]', 'R_min = 127 · V / (e + f)', 'R_min = V / (127 · e)'],
    explanation: 'Standard metric highway formula with speed in km/h and maximum allowable superelevation e_max (typically 8% to 10%).'
  },
  {
    id: 383,
    area: 'MSTE',
    subtopic: 'Traffic Engineering, Markings & Signs',
    difficulty: 'Medium',
    question: 'The color of longitudinal centerline markings separating opposing lanes of traffic on two-way undivided roads in DPWH standards is:',
    answer: 'YELLOW',
    choices: ['WHITE', 'YELLOW', 'RED', 'GREEN'],
    explanation: 'Yellow pavement lines separate opposing traffic flows; white lines separate traffic traveling in the same direction.'
  },
  {
    id: 384,
    area: 'MSTE',
    subtopic: 'Traffic Engineering, Markings & Signs',
    difficulty: 'Easy',
    question: 'A solid double yellow centerline painted along the middle of a two-lane two-way rural highway indicates:',
    answer: 'NO PASSING / OVERTAKING PROHIBITED IN BOTH DIRECTIONS',
    choices: [
      'PASSING PERMITTED WITH CAUTION',
      'NO PASSING / OVERTAKING PROHIBITED IN BOTH DIRECTIONS',
      'ONE-WAY TRAFFIC FLOW ONLY',
      'PEDESTRIAN PRIORITY ZONE'
    ],
    explanation: 'Solid barrier lines legally forbid crossing the highway centerline to overtake.'
  },
  {
    id: 385,
    area: 'MSTE',
    subtopic: 'Traffic Engineering, Markings & Signs',
    difficulty: 'Easy',
    question: 'White broken (dashed) longitudinal line pavement markings signify:',
    answer: 'LANE CHANGING OR OVERTAKING IS PERMITTED WHEN SAFE',
    choices: [
      'LANE CHANGING STRICTLY PROHIBITED',
      'LANE CHANGING OR OVERTAKING IS PERMITTED WHEN SAFE',
      'APPROACHING A RAILROAD CROSSING',
      'SHOULDER EDGE DELINEATION'
    ],
    explanation: 'Broken skip lines delineate multi-lane traffic streams moving in the same direction.'
  },
  {
    id: 386,
    area: 'MSTE',
    subtopic: 'Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)',
    difficulty: 'Easy',
    question: 'The required protective helmet (hard hat) worn on Philippine construction sites must comply with standard specifications set by:',
    answer: 'PNS / OSHS / ANSI Z89.1',
    choices: ['LTO STANDARDS', 'PNS / OSHS / ANSI Z89.1', 'DENR DAO 20', 'DPWH VOLUME 1'],
    explanation: 'Industrial safety helmets protect workers from falling tools, materials, and overhead electrical contact hazards.'
  },
  {
    id: 387,
    area: 'MSTE',
    subtopic: 'Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)',
    difficulty: 'Medium',
    question: 'Under DOLE safety rules, excavations deeper than what depth must have protective cave-in shoring, sloping, or shield systems?',
    answer: '1.5 METERS (5 FEET)',
    choices: ['0.5 METER', '1.0 METER', '1.5 METERS (5 FEET)', '3.0 METERS'],
    explanation: 'OSHA and DOLE mandate cave-in protection systems for any trench excavation exceeding 1.5 meters (5 feet).'
  },
  {
    id: 388,
    area: 'MSTE',
    subtopic: 'Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)',
    difficulty: 'Medium',
    question: 'Under DOLE trench safety standards, safe egress ladders must be placed inside trenches deeper than 1.2 m so that lateral travel distance does not exceed:',
    answer: '7.5 METERS (25 FEET)',
    choices: ['3.0 METERS', '5.0 METERS', '7.5 METERS (25 FEET)', '15.0 METERS'],
    explanation: 'Workers inside an excavation must never have to travel more than 7.5 meters (25 feet) laterally to reach an exit ladder.'
  },
  {
    id: 389,
    area: 'MSTE',
    subtopic: 'Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)',
    difficulty: 'Easy',
    question: 'Short daily safety briefings conducted on construction sites with workers prior to commencing morning shift work are called:',
    answer: 'TOOLBOX MEETINGS (TAILGATE TALKS)',
    choices: ['DOLE ARBITRATION', 'TOOLBOX MEETINGS (TAILGATE TALKS)', 'OSHS AUDITS', 'MANAGEMENT REVIEWS'],
    explanation: 'Toolbox meetings reinforce daily task-specific hazards, PPE verification, and safe operating protocols.'
  },
  {
    id: 390,
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Medium',
    question: 'The point in financial analysis where total project revenues equal total project costs (Zero Profit / Zero Loss) is the:',
    answer: 'BREAK-EVEN POINT (BEP)',
    choices: ['PAYBACK POINT', 'BREAK-EVEN POINT (BEP)', 'SHUTDOWN THRESHOLD', 'OPTIMAL RECOVERY'],
    explanation: 'At break-even point, Contribution Margin (Revenue - Variable Cost) equals total Fixed Costs.'
  },
  {
    id: 391,
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Easy',
    question: 'Estimated resale or scrap value of a construction equipment machine at the end of its designated useful service life is its:',
    answer: 'SALVAGE VALUE (SCRAP VALUE)',
    choices: ['BOOK VALUE', 'SALVAGE VALUE (SCRAP VALUE)', 'FIRST COST', 'REPLACEMENT VALUE'],
    explanation: 'Salvage value (S or SV) is subtracted from initial purchase price to determine total depreciable asset value.'
  },
  {
    id: 392,
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Medium',
    question: 'Straight-line depreciation annual depreciation charge D for an asset with initial cost C, salvage value S, and service life n years is:',
    answer: 'D = (C - S) / n',
    choices: ['D = C / n', 'D = (C - S) / n', 'D = (C + S) / 2n', 'D = 2 · (C - S) / n'],
    explanation: 'Straight-line method charges uniform annual depreciation across the entire estimated service lifespan.'
  },
  {
    id: 393,
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Medium',
    question: 'The book value (BV) of a piece of equipment after m years of service using straight-line depreciation is:',
    answer: 'BV_m = C - m · D',
    choices: ['BV_m = C - D', 'BV_m = C - m · D', 'BV_m = S + m · D', 'BV_m = C · (1 - d)^m'],
    explanation: 'Book value represents the current accounting valuation on company books (Original Cost minus cumulative depreciation).'
  },
  {
    id: 394,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Easy',
    question: 'The perimeter of an equilateral triangle with side length s is simply:',
    answer: 'P = 3 · s',
    choices: ['P = 2 · s', 'P = 3 · s', 'P = s²', 'P = s · √3'],
    explanation: 'All three sides of an equilateral triangle have identical length s.'
  },
  {
    id: 395,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Medium',
    question: 'The area A of an equilateral triangle with side s is given by the formula:',
    answer: 'A = (√3 / 4) · s²',
    choices: ['A = (1 / 2) · s²', 'A = (√3 / 4) · s²', 'A = (√3 / 2) · s²', 'A = 3 · s²'],
    explanation: 'A = (1/2) · s · h = (1/2) · s · (s · √3 / 2) = (√3 / 4) · s².'
  },
  {
    id: 396,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Medium',
    question: 'The sum of the interior angles of an n-sided polygon in Euclidean plane geometry is given by:',
    answer: 'S = (n - 2) · 180°',
    choices: ['S = n · 180°', 'S = (n - 2) · 180°', 'S = (n + 2) · 180°', 'S = (2n - 4) · 360°'],
    explanation: 'Dividing the n-sided polygon into (n-2) triangles gives total interior angles of (n-2) × 180 degrees.'
  },
  {
    id: 397,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Easy',
    question: 'The sum of the exterior angles of any convex polygon regardless of the number of sides is always:',
    answer: '360° (2π RADIANS)',
    choices: ['180°', '360° (2π RADIANS)', '540°', '(n - 2) · 180°'],
    explanation: 'Traveling around the perimeter of any closed polygon completes one full 360-degree rotation.'
  },
  {
    id: 398,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Medium',
    question: 'The number of diagonals D that can be drawn inside an n-sided polygon is given by:',
    answer: 'D = n · (n - 3) / 2',
    choices: ['D = n · (n - 1) / 2', 'D = n · (n - 3) / 2', 'D = n · (n - 2)', 'D = (n - 3)!'],
    explanation: 'Each vertex connects to (n-3) non-adjacent vertices; dividing by 2 accounts for double counting.'
  },
  {
    id: 399,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Easy',
    question: 'A 12-sided polygon in geometry is named a:',
    answer: 'DODECAGON',
    choices: ['DECAGON', 'UNDECAGON', 'DODECAGON', 'ICOSAGON'],
    explanation: 'A dodecagon has 12 sides, interior angle sum of 1800°, and 54 diagonals.'
  },
  {
    id: 400,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Easy',
    question: 'A 20-sided polygon in geometry is designated as an:',
    answer: 'ICOSAGON',
    choices: ['HEXADECAGON', 'OCTADECAGON', 'ICOSAGON', 'CHILIAGON'],
    explanation: 'An icosagon has 20 sides, 20 vertices, and 170 diagonals: D = 20 · (17) / 2 = 170.'
  }
];
