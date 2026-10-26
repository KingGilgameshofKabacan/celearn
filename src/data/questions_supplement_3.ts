import { CEQuestion } from '../types';

export const SUPPLEMENT_QUESTIONS_3: CEQuestion[] = [
  {
    id: 401,
    area: 'PSAD',
    subtopic: 'Seismic Engineering & NSCP Provisions',
    difficulty: 'Medium',
    question: 'According to NSCP 2015, the Near-Source Factors Na and Nv depend on which primary seismic parameters?',
    answer: 'SEISMIC SOURCE TYPE AND DISTANCE TO KNOWN ACTIVE FAULT',
    choices: [
      'SOIL PROFILE TYPE AND FOUNDATION EMBEDMENT',
      'SEISMIC SOURCE TYPE AND DISTANCE TO KNOWN ACTIVE FAULT',
      'BUILDING OCCUPANCY CATEGORY AND IMPORTANCE FACTOR',
      'STRUCTURAL DUCTILITY REDUCTION FACTOR R'
    ],
    explanation: 'Near-source factors account for intense ground velocity pulses within 15 km of active seismic faults.'
  },
  {
    id: 402,
    area: 'PSAD',
    subtopic: 'Seismic Engineering & NSCP Provisions',
    difficulty: 'Medium',
    question: 'The Seismic Zone factor Z for the majority of the Philippine archipelago in NSCP 2015 is:',
    answer: 'ZONE 4 (Z = 0.40)',
    choices: ['ZONE 2 (Z = 0.20)', 'ZONE 3 (Z = 0.30)', 'ZONE 4 (Z = 0.40)', 'ZONE 5 (Z = 0.50)'],
    explanation: 'Except for Palawan, Sulu, and Tawi-Tawi (Zone 2, Z=0.20), the rest of the Philippines is in high-seismic Zone 4 (Z=0.40).'
  },
  {
    id: 403,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'The maximum allowable deflection for flat roofs supporting non-structural elements likely to be damaged by large deflections is:',
    answer: 'L / 480',
    choices: ['L / 180', 'L / 240', 'L / 360', 'L / 480'],
    explanation: 'NSCP Table 424.2.2 limits immediate deflection of members supporting sensitive non-structural partitions to L/480.'
  },
  {
    id: 404,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'The minimum clear spacing between parallel longitudinal rebars in a horizontal layer in beams is:',
    answer: 'BAR DIAMETER db, 25 mm, OR 4/3 OF COARSE AGGREGATE SIZE',
    choices: [
      '20 mm',
      'BAR DIAMETER db, 25 mm, OR 4/3 OF COARSE AGGREGATE SIZE',
      '50 mm',
      '2 times db'
    ],
    explanation: 'This ensures coarse aggregate passes freely without creating voids or honeycombing around steel.'
  },
  {
    id: 405,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Medium',
    question: 'The reduction factor U applied to the net area An of a tension member to account for non-uniform shear stress transfer is:',
    answer: 'SHEAR LAG FACTOR',
    choices: ['RESISTANCE FACTOR', 'SHEAR LAG FACTOR', 'SLENDERNESS REDUCTION', 'PLASTIC RATIO'],
    explanation: 'Effective net area Ae = U · An, where shear lag factor U accounts for unconnected elements in bolted/welded connections.'
  },
  {
    id: 406,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Hard',
    question: 'Block shear rupture failure mode in structural steel bolted connections involves simultaneous:',
    answer: 'TENSION RUPTURE ON ONE PLANE AND SHEAR YIELD/RUPTURE ON PERPENDICULAR PLANE',
    choices: [
      'FLEXURAL CRIPPLING AND FLANGE BUCKLING',
      'TENSION RUPTURE ON ONE PLANE AND SHEAR YIELD/RUPTURE ON PERPENDICULAR PLANE',
      'BOLT BEARING AND WEB YIELDING',
      'TORSIONAL TWIST AND WELD TEARING'
    ],
    explanation: 'AISC Section J4.3 checks block shear capacity against combined shear path tear-out and tension rupture.'
  },
  {
    id: 407,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Medium',
    question: 'A structural support that prevents both horizontal and vertical translations as well as rotational movement is a:',
    answer: 'FIXED SUPPORT (BUILT-IN SUPPORT)',
    choices: ['ROLLER SUPPORT', 'PIN SUPPORT', 'FIXED SUPPORT (BUILT-IN SUPPORT)', 'ROCKER SUPPORT'],
    explanation: 'A 2D fixed support exerts three reaction components: horizontal force Rx, vertical force Ry, and resisting moment M.'
  },
  {
    id: 408,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Easy',
    question: 'A structural support that prevents horizontal and vertical translation but permits free rotation is a:',
    answer: 'PINNED (HINGED) SUPPORT',
    choices: ['ROLLER SUPPORT', 'PINNED (HINGED) SUPPORT', 'FIXED SUPPORT', 'SLIDING GUIDE'],
    explanation: 'A frictionless pin support develops two force reactions (Rx and Ry) and zero moment resistance (M = 0).'
  },
  {
    id: 409,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Easy',
    question: 'A structural support that resists translation in only one direction normal to the supporting surface while allowing translation and rotation is a:',
    answer: 'ROLLER SUPPORT',
    choices: ['FIXED SUPPORT', 'ROLLER SUPPORT', 'PINNED SUPPORT', 'INTERNAL HINGE'],
    explanation: 'A 2D roller support generates a single reaction perpendicular to its plane of rolling motion.'
  },
  {
    id: 410,
    area: 'PSAD',
    subtopic: 'Construction Materials & Testing',
    difficulty: 'Medium',
    question: 'ASTM standard test method used to measure the abrasion resistance and degradation of coarse mineral aggregates is the:',
    answer: 'LOS ANGELES ABRASION TEST (ASTM C131)',
    choices: ['MARSHALL STABILITY TEST', 'LOS ANGELES ABRASION TEST (ASTM C131)', 'PROCTOR DENSITY TEST', 'VICAT NEEDLE TEST'],
    explanation: 'Aggregates rotate inside a steel drum with steel charges; maximum allowable loss for concrete coarse aggregate is 40%.'
  },
  {
    id: 411,
    area: 'HPGE',
    subtopic: 'Fluid Dynamics & Energy/Continuity',
    difficulty: 'Medium',
    question: 'Dimensionless parameter representing the ratio of fluid inertial forces to viscous forces is the:',
    answer: 'REYNOLDS NUMBER (Re)',
    choices: ['FROUDE NUMBER (Fr)', 'REYNOLDS NUMBER (Re)', 'MACH NUMBER (Ma)', 'WEBER NUMBER (We)'],
    explanation: 'Re = ρ · V · D / μ = V · D / ν. It dictates whether flow is laminar, transitional, or turbulent.'
  },
  {
    id: 412,
    area: 'HPGE',
    subtopic: 'Fluid Dynamics & Energy/Continuity',
    difficulty: 'Medium',
    question: 'The ratio of dynamic absolute viscosity (μ) to fluid mass density (ρ) is termed:',
    answer: 'KINEMATIC VISCOSITY (ν)',
    choices: ['DYNAMIC VISCOSITY', 'KINEMATIC VISCOSITY (ν)', 'BULK MODULUS', 'RELATIVE FLUIDITY'],
    explanation: 'Kinematic viscosity ν = μ / ρ has SI units of m²/s (or Stokes in CGS system: 1 St = 10⁻⁴ m²/s).'
  },
  {
    id: 413,
    area: 'HPGE',
    subtopic: 'Soil Classification, Compaction & Permeability',
    difficulty: 'Medium',
    question: 'Field test measuring penetration resistance in borings by driving a split-barrel sampler with a 63.5 kg hammer dropped 760 mm is:',
    answer: 'STANDARD PENETRATION TEST (SPT)',
    choices: ['CONE PENETRATION TEST (CPT)', 'STANDARD PENETRATION TEST (SPT)', 'VANE SHEAR TEST', 'PLATE LOAD TEST'],
    explanation: 'The N-value is the number of blows needed for the final 300 mm (12 in) of penetration (ASTM D1586).'
  },
  {
    id: 414,
    area: 'HPGE',
    subtopic: 'Soil Classification, Compaction & Permeability',
    difficulty: 'Medium',
    question: 'In the Standard Penetration Test (SPT), blow counts recorded over which drive interval are summed to obtain N-value?',
    answer: 'THE LAST TWO 150 mm (6 in) INCREMENTS (TOTAL 300 mm)',
    choices: [
      'THE FIRST 150 mm INCREMENT',
      'THE LAST TWO 150 mm (6 in) INCREMENTS (TOTAL 300 mm)',
      'ALL THREE 150 mm INCREMENTS',
      'THE MIDDLE 150 mm INCREMENT'
    ],
    explanation: 'The first 150 mm is seated penetration; the sum of blows for the next two 150 mm intervals gives N.'
  },
  {
    id: 415,
    area: 'HPGE',
    subtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    difficulty: 'Hard',
    question: 'A soil deposit that has been subjected to historical effective overburden pressures greater than the current existing overburden is:',
    answer: 'OVERCONSOLIDATED SOIL (OCR > 1.0)',
    choices: ['NORMALLY CONSOLIDATED SOIL', 'OVERCONSOLIDATED SOIL (OCR > 1.0)', 'UNDERCONSOLIDATED SOIL', 'COLLAPSIBLE SOIL'],
    explanation: 'Overconsolidation Ratio OCR = σ\'c / σ\'0 > 1. Overconsolidated clays show stiffer initial response and lower settlement.'
  },
  {
    id: 416,
    area: 'HPGE',
    subtopic: 'Foundations, Retaining Walls & Slope Stability',
    difficulty: 'Medium',
    question: 'A continuous concrete wall with a stem, base slab, and perpendicular triangular bracing ribs on the backfill side is a:',
    answer: 'COUNTERFORT RETAINING WALL',
    choices: ['GRAVITY RETAINING WALL', 'CANTILEVER RETAINING WALL', 'COUNTERFORT RETAINING WALL', 'BUTTRESS RETAINING WALL'],
    explanation: 'Counterfort walls use internal tension ribs spaced along the back to economize stem bending for heights > 6 meters.'
  },
  {
    id: 417,
    area: 'HPGE',
    subtopic: 'Hydrology, Coastal & Harbor Engineering',
    difficulty: 'Medium',
    question: 'A massive coastal marine barrier constructed offshore to absorb and reflect ocean wave energy and shelter a harbor basin is a:',
    answer: 'BREAKWATER',
    choices: ['JETTY', 'GROIN', 'BREAKWATER', 'SEAWALL'],
    explanation: 'Breakwaters (rubble-mound or caisson type) create calm interior anchorage water for harbor navigation.'
  },
  {
    id: 418,
    area: 'HPGE',
    subtopic: 'Hydrology, Coastal & Harbor Engineering',
    difficulty: 'Medium',
    question: 'A coastal wall built perpendicular to the beach into the surf zone to trap littoral sand drift and prevent beach erosion is a:',
    answer: 'GROIN (GROYNE)',
    choices: ['BREAKWATER', 'REVETMENT', 'GROIN (GROYNE)', 'DOLPHIN'],
    explanation: 'Groins trap longshore sediment transport moving along the beach profile, stabilizing downdrift shorelines.'
  },
  {
    id: 419,
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Medium',
    question: 'The magnetic declination at a survey station is defined as the horizontal angle between:',
    answer: 'TRUE NORTH (GEOGRAPHIC MERIDIAN) AND MAGNETIC NORTH',
    choices: [
      'MAGNETIC NORTH AND GRID NORTH',
      'TRUE NORTH (GEOGRAPHIC MERIDIAN) AND MAGNETIC NORTH',
      'ASSUMED MERIDIAN AND POLAR AXIS',
      'HORIZON AND ZENITH MERIDIAN'
    ],
    explanation: 'Declination is East or West depending on whether the magnetic needle points east or west of astronomical true north.'
  },
  {
    id: 420,
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Medium',
    question: 'Distortion of a magnetic compass reading caused by nearby ferrous steel, electric power lines, or ore deposits is:',
    answer: 'LOCAL ATTRACTION',
    choices: ['MAGNETIC DIP', 'LOCAL ATTRACTION', 'SECULAR VARIATION', 'DIURNAL ABERRATION'],
    explanation: 'Local attraction causes forward and back bearings of a line to differ by an amount other than exactly 180°.'
  },
  {
    id: 421,
    area: 'MSTE',
    subtopic: 'Highway Geometric Design & Sight Distances',
    difficulty: 'Medium',
    question: 'The point where a straight horizontal tangent intersects the circular arc of a highway curve is the:',
    answer: 'POINT OF CURVATURE (PC)',
    choices: ['POINT OF TANGENCY (PT)', 'POINT OF CURVATURE (PC)', 'POINT OF INTERSECTION (PI)', 'EXTERNAL SECANT POINT'],
    explanation: 'PC marks the start station of circular curvature; PT marks the exit point where curve transitions back to tangent.'
  },
  {
    id: 422,
    area: 'MSTE',
    subtopic: 'Highway Geometric Design & Sight Distances',
    difficulty: 'Medium',
    question: 'The point where a circular curve ends and transitions back to a forward tangent line is the:',
    answer: 'POINT OF TANGENCY (PT)',
    choices: ['POINT OF CURVATURE (PC)', 'POINT OF TANGENCY (PT)', 'POINT OF INTERSECTION (PI)', 'MIDPOINT OF CURVE'],
    explanation: 'Station PT = Station PC + Length of Curve L.'
  },
  {
    id: 423,
    area: 'MSTE',
    subtopic: 'Traffic Engineering, Markings & Signs',
    difficulty: 'Medium',
    question: 'The maximum rate of flow of vehicles that can pass through an intersection approach during a continuous green signal is the:',
    answer: 'SATURATION FLOW RATE (s)',
    choices: ['SERVICE VOLUME', 'SATURATION FLOW RATE (s)', 'CRITICAL VOLUME', 'ARRIVAL HEADWAY'],
    explanation: 'Typical base saturation flow rate is approximately 1900 passenger cars per hour of green time per lane (pcphgpl).'
  },
  {
    id: 424,
    area: 'MSTE',
    subtopic: 'Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)',
    difficulty: 'Easy',
    question: 'Under Philippine OSH standards, the minimum safety distance of scaffolding or crane booms from live electrical overhead power lines up to 50 kV is:',
    answer: '3.0 METERS (10 FEET)',
    choices: ['1.0 METER', '2.0 METERS', '3.0 METERS (10 FEET)', '5.0 METERS'],
    explanation: 'Maintaining a minimum clearance of 3.0 m (10 ft) prevents dangerous electrical arc flashovers and electrocution.'
  },
  {
    id: 425,
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Medium',
    question: 'In construction contract law, a sum of money agreed upon in advance that the contractor must pay the owner for each day of unexcused project delay is:',
    answer: 'LIQUIDATED DAMAGES',
    choices: ['RETENTION MONEY', 'LIQUIDATED DAMAGES', 'PERFORMANCE BOND', 'PUNITIVE PENALTY'],
    explanation: 'Liquidated damages represent pre-estimated reasonable compensation for owner losses due to tardy completion.'
  },
  {
    id: 426,
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Medium',
    question: 'A percentage (typically 10%) withheld by the project owner from contractor monthly progress billings until final completion and acceptance is:',
    answer: 'RETENTION MONEY',
    choices: ['ADVANCE PAYMENT', 'RETENTION MONEY', 'SURETY DEPOSIT', 'ESCROW FEE'],
    explanation: 'Retention money serves as owner security to guarantee rectification of defects during the defect liability period.'
  }
];
