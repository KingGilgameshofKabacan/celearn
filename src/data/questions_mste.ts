import { CEQuestion } from '../types';

export const MSTE_QUESTIONS: CEQuestion[] = [
  {
    id: 201,
    area: 'MSTE',
    subtopic: 'Traffic Engineering, Markings & Signs',
    difficulty: 'Easy',
    question: 'Highway signs used to guide motorists through a sharp change in the horizontal alignment of the road.',
    answer: 'CHEVRON SIGNS',
    choices: ['DELINEATOR POSTS', 'CHEVRON SIGNS', 'OBJECT MARKERS', 'RUMBLE STRIPS'],
    explanation: 'Chevron alignment signs (W1-8) provide continuous lateral guidance through sharp curves or ramp transitions.'
  },
  {
    id: 202,
    area: 'MSTE',
    subtopic: 'Traffic Engineering, Markings & Signs',
    difficulty: 'Easy',
    question: 'Signs that warn or advise of temporary hazardous conditions that could endanger road users or workers engaged on maintenance.',
    answer: 'ROADWORK SIGNS',
    choices: ['REGULATORY SIGNS', 'GUIDE SIGNS', 'ROADWORK SIGNS', 'DIRECTION SIGNS'],
    explanation: 'Roadwork and temporary traffic management signs use high-visibility orange/yellow backgrounds to alert motorists.'
  },
  {
    id: 203,
    area: 'MSTE',
    subtopic: 'Traffic Engineering, Markings & Signs',
    difficulty: 'Easy',
    question: 'The standard geometric shape specified for regulatory warning signs and Give Way (Yield) signs is:',
    answer: 'EQUILATERAL TRIANGLE',
    choices: ['OCTAGON', 'CIRCLE', 'EQUILATERAL TRIANGLE', 'DIAMOND'],
    explanation: 'Warning signs are commonly equilateral triangles (or diamonds in AASHTO); Give Way is an inverted equilateral triangle.'
  },
  {
    id: 204,
    area: 'MSTE',
    subtopic: 'Traffic Engineering, Markings & Signs',
    difficulty: 'Easy',
    question: 'The standard geometric shape mandated for regulatory STOP signs.',
    answer: 'OCTAGON',
    choices: ['HEXAGON', 'OCTAGON', 'CIRCLE', 'DIAMOND'],
    explanation: 'The 8-sided red octagon is universally unique to STOP signs so drivers can identify it even from behind.'
  },
  {
    id: 205,
    area: 'MSTE',
    subtopic: 'Traffic Engineering, Markings & Signs',
    difficulty: 'Easy',
    question: 'The conventional geometric shape designated for mandatory regulatory road signs (e.g., speed limits, no entry).',
    answer: 'CIRCLE',
    choices: ['RECTANGLE', 'OCTAGON', 'CIRCLE', 'TRIANGLE'],
    explanation: 'Standard Vienna Convention and DPWH Highway Safety Design rules prescribe circular shapes for regulatory mandates.'
  },
  {
    id: 206,
    area: 'MSTE',
    subtopic: 'Traffic Engineering, Markings & Signs',
    difficulty: 'Medium',
    question: 'Under Philippine road standards, pavement markings on national roads may only be officially applied or removed by:',
    answer: 'DPWH (DEPARTMENT OF PUBLIC WORKS AND HIGHWAYS)',
    choices: ['MMDA', 'DPWH (DEPARTMENT OF PUBLIC WORKS AND HIGHWAYS)', 'LTO', 'LOCAL BARANGAY COUNCIL'],
    explanation: 'The Department of Public Works and Highways holds statutory jurisdiction over national road infrastructure markings.'
  },
  {
    id: 207,
    area: 'MSTE',
    subtopic: 'Traffic Engineering, Markings & Signs',
    difficulty: 'Easy',
    question: 'The standard curb and pavement marking color designated for strict NO LOADING AND UNLOADING zones.',
    answer: 'RED',
    choices: ['YELLOW', 'WHITE', 'RED', 'BLUE'],
    explanation: 'Red markings strictly prohibit vehicular stopping, loading, unloading, and parking.'
  },
  {
    id: 208,
    area: 'MSTE',
    subtopic: 'Traffic Engineering, Markings & Signs',
    difficulty: 'Easy',
    question: 'Thermoplastic transverse or longitudinal grooved markings that alert drivers through tactile vibration and audible warning.',
    answer: 'RUMBLE STRIPS',
    choices: ['TACTILE TILES', 'RUMBLE STRIPS', 'CHEVRON STRIPES', 'CAT EYES'],
    explanation: 'Rumble strips alert inattentive drivers approaching toll gates, sharp curves, or lane departures.'
  },
  {
    id: 209,
    area: 'MSTE',
    subtopic: 'Traffic Engineering, Markings & Signs',
    difficulty: 'Medium',
    question: 'Signs that inform road users of traffic laws and legal regulations which, if disregarded, constitute a punishable offense.',
    answer: 'REGULATORY SIGNS',
    choices: ['INFORMATIVE SIGNS', 'WARNING SIGNS', 'REGULATORY SIGNS', 'GUIDE SIGNS'],
    explanation: 'Regulatory signs give notice of legal traffic requirements, prohibitions, and movement restrictions.'
  },
  {
    id: 210,
    area: 'MSTE',
    subtopic: 'Traffic Engineering, Markings & Signs',
    difficulty: 'Medium',
    question: 'The timing of traffic signals in relationship to one another along a corridor so vehicles can travel through successive greens without stopping.',
    answer: 'SIGNAL COORDINATION',
    choices: ['FIXED CYCLE ALLOCATION', 'SIGNAL COORDINATION', 'VARIABLE SPEED ACTUATION', 'PHASE ISOLATION'],
    explanation: 'Signal coordination creates progressive "green waves", minimizing corridor delay and fuel consumption.'
  },
  {
    id: 211,
    area: 'MSTE',
    subtopic: 'Traffic Engineering, Markings & Signs',
    difficulty: 'Medium',
    question: 'The time difference between the start and end of a continuous through green band in a coordinated signal time-space diagram.',
    answer: 'BANDWIDTH (BAND)',
    choices: ['CYCLE OFFSET', 'BANDWIDTH (BAND)', 'CLEARANCE TIME', 'LOST TIME'],
    explanation: 'Bandwidth represents the proportion of signal cycle available for uninterrupted platoon progression.'
  },
  {
    id: 212,
    area: 'MSTE',
    subtopic: 'Traffic Engineering, Markings & Signs',
    difficulty: 'Medium',
    question: 'The total time required for a traffic signal to execute one complete rotation of all phase displays and intervals.',
    answer: 'CYCLE LENGTH',
    choices: ['SPLIT INTERVAL', 'CYCLE LENGTH', 'OFFSET PERIOD', 'ALL-RED TIME'],
    explanation: 'Cycle length (C) typically ranges from 45 seconds to 120+ seconds for complex multi-phase intersections.'
  },
  {
    id: 213,
    area: 'MSTE',
    subtopic: 'Traffic Engineering, Markings & Signs',
    difficulty: 'Medium',
    question: 'The number of vehicles occupying a given unit length of roadway lane at an instantaneous moment in time.',
    answer: 'TRAFFIC DENSITY',
    choices: ['TRAFFIC VOLUME', 'TRAFFIC FLOW RATE', 'TRAFFIC DENSITY', 'OCCUPANCY RATIO'],
    explanation: 'Traffic density (k) is expressed in vehicles per kilometer per lane (veh/km/lane).'
  },
  {
    id: 214,
    area: 'MSTE',
    subtopic: 'Traffic Engineering, Markings & Signs',
    difficulty: 'Hard',
    question: 'The theoretical ideal basic capacity of a multi-lane highway under standard uninterrupted conditions is typically taken as:',
    answer: '2000 PASSENGER CARS PER HOUR PER LANE (pcphpl)',
    choices: ['1200 pcphpl', '1500 pcphpl', '2000 PASSENGER CARS PER HOUR PER LANE (pcphpl)', '2800 pcphpl'],
    explanation: 'Under Highway Capacity Manual (HCM) conditions, ideal basic freeway capacity is 2000-2400 pcphpl.'
  },
  {
    id: 215,
    area: 'MSTE',
    subtopic: 'Highway Geometric Design & Sight Distances',
    difficulty: 'Medium',
    question: 'Recommended perception-reaction time (PRT) specified by AASHTO and DPWH for calculating stopping sight distance (SSD).',
    answer: '2.5 SECONDS',
    choices: ['1.0 SECOND', '1.5 SECONDS', '2.0 SECONDS', '2.5 SECONDS'],
    explanation: 'AASHTO adopts 2.5 seconds to cover 90% of drivers under unexpected roadway conditions.'
  },
  {
    id: 216,
    area: 'MSTE',
    subtopic: 'Highway Geometric Design & Sight Distances',
    difficulty: 'Medium',
    question: 'The standard minimum lane width specified by DPWH for primary national highways in the Philippines.',
    answer: '3.35 METERS (11 FEET)',
    choices: ['2.75 METERS', '3.00 METERS', '3.35 METERS (11 FEET)', '3.65 METERS (12 FEET)'],
    explanation: 'DPWH guidelines specify 3.35 m (minimum standard) and 3.65 m (for heavy expressways).'
  },
  {
    id: 217,
    area: 'MSTE',
    subtopic: 'Highway Geometric Design & Sight Distances',
    difficulty: 'Medium',
    question: 'The maximum longitudinal road grade permitted on horizontal curves for Philippine national highways.',
    answer: '6%',
    choices: ['4%', '5%', '6%', '8%'],
    explanation: 'DPWH highway design manual caps curve grades at 6% to prevent skidding and loss of traction.'
  },
  {
    id: 218,
    area: 'MSTE',
    subtopic: 'Highway Geometric Design & Sight Distances',
    difficulty: 'Easy',
    question: 'Transverse banking of the outer edge of a curved roadway above the inner edge to counteract outward centrifugal force.',
    answer: 'SUPERELEVATION (e)',
    choices: ['CAMBER', 'CROWN SLOPE', 'SUPERELEVATION (e)', 'GRADIENT'],
    explanation: 'Superelevation satisfies the dynamic equilibrium equation: e + f = V² / (127·R).'
  },
  {
    id: 219,
    area: 'MSTE',
    subtopic: 'Highway Geometric Design & Sight Distances',
    difficulty: 'Easy',
    question: 'Outward inertia force that tends to push a vehicle laterally off a curved roadway path.',
    answer: 'CENTRIFUGAL FORCE',
    choices: ['CENTRIPETAL FORCE', 'CENTRIFUGAL FORCE', 'ROLLING RESISTANCE', 'GRADE RESISTANCE'],
    explanation: 'Centrifugal force acts radially outward: Fc = m·V² / R.'
  },
  {
    id: 220,
    area: 'MSTE',
    subtopic: 'Highway Geometric Design & Sight Distances',
    difficulty: 'Medium',
    question: 'Component of vehicle weight acting parallel to an inclined highway surface resisting forward motion uphill.',
    answer: 'GRADE RESISTANCE',
    choices: ['TRACTIVE EFFORT', 'ROLLING RESISTANCE', 'GRADE RESISTANCE', 'AERODYNAMIC DRAG'],
    explanation: 'Grade resistance equals W · sin(θ) ≈ W · G, contributing approximately 10 kg per ton per percent grade.'
  },
  {
    id: 221,
    area: 'MSTE',
    subtopic: 'Highway Geometric Design & Sight Distances',
    difficulty: 'Easy',
    question: 'Basic unit of travel behavior defined as a one-way movement between a single origin and a single destination for a specific purpose.',
    answer: 'TRIP',
    choices: ['JOURNEY', 'ROUTE', 'TRIP', 'COMMUTE'],
    explanation: 'In transportation planning (Four-Step Model), a trip is the fundamental atomic travel unit.'
  },
  {
    id: 222,
    area: 'MSTE',
    subtopic: 'Pavement Distress, Asphalt & Concrete Paving',
    difficulty: 'Medium',
    question: 'Series of interconnecting polygon cracks resembling chicken wire caused by fatigue failure of asphalt pavement under heavy loads.',
    answer: 'ALLIGATOR CRACKING (FATIGUE CRACKING)',
    choices: ['BLOCK CRACKING', 'ALLIGATOR CRACKING (FATIGUE CRACKING)', 'TRANSVERSE CRACKING', 'LONGITUDINAL CRACKING'],
    explanation: 'Alligator cracking originates at the bottom of the asphalt layer where tensile flexural strains are highest.'
  },
  {
    id: 223,
    area: 'MSTE',
    subtopic: 'Pavement Distress, Asphalt & Concrete Paving',
    difficulty: 'Medium',
    question: 'Progressive dislodgement and loss of aggregate particles from an asphalt surface caused by loss of binder cohesion.',
    answer: 'RAVELING',
    choices: ['BLEEDING', 'RAVELING', 'RUTTING', 'SHOVING'],
    explanation: 'Raveling degrades surface texture, increases tire wear, and exposes underlying binder to moisture damage.'
  },
  {
    id: 224,
    area: 'MSTE',
    subtopic: 'Pavement Distress, Asphalt & Concrete Paving',
    difficulty: 'Medium',
    question: 'Migration of excess asphalt binder upward creating a shiny glass-like black film that severely reduces skid resistance.',
    answer: 'BLEEDING (FLUSHING)',
    choices: ['STRIPPING', 'BLEEDING (FLUSHING)', 'DELAMINATION', 'POLISHING'],
    explanation: 'Bleeding happens in hot weather when air voids in mix are too low (< 3%), forcing liquid asphalt to surface.'
  },
  {
    id: 225,
    area: 'MSTE',
    subtopic: 'Pavement Distress, Asphalt & Concrete Paving',
    difficulty: 'Medium',
    question: 'Localized upward buckling and shattering of concrete pavement slabs at transverse joints caused by excessive thermal expansion.',
    answer: 'BLOWUPS',
    choices: ['FAULTING', 'BLOWUPS', 'CORRUGATION', 'PUMPING'],
    explanation: 'Blowups occur in hot summer periods when joint filler fails and incompressibles lock the expansion gap.'
  },
  {
    id: 226,
    area: 'MSTE',
    subtopic: 'Pavement Distress, Asphalt & Concrete Paving',
    difficulty: 'Medium',
    question: 'Elevation step difference between adjacent concrete pavement slabs at transverse joints caused by subgrade pumping.',
    answer: 'FAULTING',
    choices: ['SCALING', 'FAULTING', 'CRAZING', 'BLOWUPS'],
    explanation: 'Faulting produces a bumpy ride when heavy wheel loads eject fine subbase slurry from beneath the approach slab.'
  },
  {
    id: 227,
    area: 'MSTE',
    subtopic: 'Pavement Distress, Asphalt & Concrete Paving',
    difficulty: 'Easy',
    question: 'Cracks extending approximately perpendicular (90 degrees) to the pavement centerline caused by thermal contraction.',
    answer: 'TRANSVERSE CRACKING',
    choices: ['LONGITUDINAL CRACKING', 'TRANSVERSE CRACKING', 'EDGE CRACKING', 'BLOCK CRACKING'],
    explanation: 'Transverse cracks develop when low temperatures induce tensile stresses exceeding the tensile strength of the asphalt.'
  },
  {
    id: 228,
    area: 'MSTE',
    subtopic: 'Pavement Distress, Asphalt & Concrete Paving',
    difficulty: 'Medium',
    question: 'Automated paving machine that continuously spreads, consolidates, screeds, and finishes rigid concrete slabs without fixed forms.',
    answer: 'SLIPFORM PAVER',
    choices: ['MOTOR GRADER', 'SLIPFORM PAVER', 'ASPHALT PAVER', 'BULLDOZER'],
    explanation: 'Slipform pavers extrude stiff low-slump concrete between side plates that advance with the machine.'
  },
  {
    id: 229,
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Medium',
    question: 'Surveying method involving measuring an angle twice with the telescope in direct and reversed positions to eliminate instrumental errors.',
    answer: 'DOUBLE CENTERING (DOUBLE SIGHTING)',
    choices: ['REPETITION METHOD', 'DOUBLE CENTERING (DOUBLE SIGHTING)', 'TRIGONOMETRIC LEVELING', 'STADIA TRAVERSE'],
    explanation: 'Double centering cancels out horizontal and vertical collimation errors, index errors, and trunnion axis tilt.'
  },
  {
    id: 230,
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Medium',
    question: 'The mathematical difference between the most probable value (MPV) of a measured quantity and its actual observed value.',
    answer: 'RESIDUAL ERROR',
    choices: ['TRUE ERROR', 'SYSTEMATIC ERROR', 'RESIDUAL ERROR', 'PROBABLE ERROR'],
    explanation: 'Residual v = x̄ - x_i represents the deviation of an individual observation from the sample mean.'
  },
  {
    id: 231,
    area: 'MSTE',
    subtopic: 'Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)',
    difficulty: 'Easy',
    question: 'Philippine Republic Act strengthening compliance with Occupational Safety and Health standards and providing penalties for violations.',
    answer: 'R.A. NO. 11058',
    choices: ['R.A. NO. 9266', 'R.A. NO. 11058', 'R.A. NO. 544', 'R.A. NO. 8495'],
    explanation: 'RA 11058 (enacted 2018) imposes administrative penalties up to ₱100,000/day for unsafe workplace conditions.'
  },
  {
    id: 232,
    area: 'MSTE',
    subtopic: 'Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)',
    difficulty: 'Medium',
    question: 'Under DOLE Department Order No. 13, every construction site must implement a project-specific program known as:',
    answer: 'CONSTRUCTION SAFETY AND HEALTH PROGRAM (CSHP)',
    choices: ['SITE HAZARD REGISTER', 'CONSTRUCTION SAFETY AND HEALTH PROGRAM (CSHP)', 'EMERGENCY ACTION PROTOCOL', 'SAFETY QUALITY PLAN'],
    explanation: 'A DOLE-approved CSHP is mandatory before any construction mobilization or building permit issuance.'
  },
  {
    id: 233,
    area: 'MSTE',
    subtopic: 'Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)',
    difficulty: 'Medium',
    question: 'Under DOLE OSH regulations, full-body safety harnesses with lifelines must be worn by workers exposed to fall hazards starting at what height?',
    answer: '6 METERS (OR 2 METERS UNGUARDED EDGE)',
    choices: ['1 METER', '3 METERS', '6 METERS (OR 2 METERS UNGUARDED EDGE)', '10 METERS'],
    explanation: 'DOLE Rule 1080 requires fall arrest harnesses at 6 meters, while standard scaffolding mandates edge protection at 2m.'
  },
  {
    id: 234,
    area: 'MSTE',
    subtopic: 'Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)',
    difficulty: 'Medium',
    question: 'What is the required structural load safety factor for all construction scaffolding platforms and supports?',
    answer: 'AT LEAST 4 TIMES MAXIMUM INTENDED LOAD',
    choices: ['AT LEAST 2 TIMES', 'AT LEAST 3 TIMES', 'AT LEAST 4 TIMES MAXIMUM INTENDED LOAD', 'AT LEAST 5 TIMES'],
    explanation: 'Scaffold structural frames must support without failure at least 4 times the maximum rated design live load.'
  },
  {
    id: 235,
    area: 'MSTE',
    subtopic: 'Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)',
    difficulty: 'Medium',
    question: 'A condition or practice in any place of employment that could reasonably be expected to cause death or serious physical harm immediately.',
    answer: 'IMMINENT DANGER',
    choices: ['POTENTIAL HAZARD', 'IMMINENT DANGER', 'WORK STOPPAGE LEVEL 1', 'UNACCEPTABLE DEFECT'],
    explanation: 'Under RA 11058, imminent danger warrants immediate work stoppage orders by safety officers or DOLE inspectors.'
  },
  {
    id: 236,
    area: 'MSTE',
    subtopic: 'Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)',
    difficulty: 'Easy',
    question: 'A human behavioral action that deviates from commonly accepted safe procedures, permitting the occurrence of an accident.',
    answer: 'UNSAFE ACT',
    choices: ['UNSAFE CONDITION', 'UNSAFE ACT', 'HAZARD REPORT', 'ENVIRONMENTAL FAILURE'],
    explanation: 'Unsafe acts (e.g., failure to wear PPE, bypassing safety interlocks) account for over 85% of industrial accidents.'
  },
  {
    id: 237,
    area: 'MSTE',
    subtopic: 'Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)',
    difficulty: 'Easy',
    question: 'A physical mechanical or environmental hazard existing in the work area that could directly permit an accident.',
    answer: 'UNSAFE CONDITION',
    choices: ['UNSAFE ACT', 'UNSAFE CONDITION', 'POOR SUPERVISION', 'ERRATIC PRACTICE'],
    explanation: 'Unsafe conditions include missing toe-boards, damaged ladders, unguarded trenches, and defective electrical cables.'
  },
  {
    id: 238,
    area: 'MSTE',
    subtopic: 'Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)',
    difficulty: 'Medium',
    question: 'Excavation trench protection method where sides are cut back to form a series of horizontal steps with vertical faces.',
    answer: 'BENCHING',
    choices: ['SHORING', 'BENCHING', 'SHIELDING', 'SLOPING'],
    explanation: 'Benching creates step levels (steps not higher than 4 feet in type B soil) to prevent catastrophic trench cave-in.'
  },
  {
    id: 239,
    area: 'MSTE',
    subtopic: 'Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)',
    difficulty: 'Medium',
    question: 'Trench protection system utilizing hydraulic, aluminum, or timber props to exert lateral pressure against trench walls.',
    answer: 'SHORING',
    choices: ['BENCHING', 'SHIELDING', 'SHORING', 'PILING'],
    explanation: 'Shoring prevents soil movement by exerting active resisting forces directly against trench side walls.'
  },
  {
    id: 240,
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Medium',
    question: 'In CPM/PERT project network scheduling, the Critical Path is uniquely defined as:',
    answer: 'THE SEQUENCE OF DEPENDENT ACTIVITIES WITH LONGEST TOTAL DURATION',
    choices: [
      'THE PATH WITH MAXIMUM TOTAL FLOAT',
      'THE PATH WITH THE MOST ACTIVITIES',
      'THE SEQUENCE OF DEPENDENT ACTIVITIES WITH LONGEST TOTAL DURATION',
      'THE PATH WITH LOWEST CRASH COST'
    ],
    explanation: 'The critical path determines the minimum possible project completion duration (Total Float = 0).'
  },
  {
    id: 241,
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Medium',
    question: 'In PERT probability models, the expected activity duration Te is computed from optimistic (a), most likely (m), and pessimistic (b) times by:',
    answer: 'Te = (a + 4m + b) / 6',
    choices: ['Te = (a + m + b) / 3', 'Te = (a + 4m + b) / 6', 'Te = (a + 2m + b) / 4', 'Te = (2a + 3m + b) / 6'],
    explanation: 'PERT assumes a Beta probability distribution for activity durations, giving 4 times weight to the modal value m.'
  },
  {
    id: 242,
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Medium',
    question: 'The rated volumetric capacity of an earthmoving loader or excavator bucket when material is struck off flush along the top rim.',
    answer: 'STRUCK CAPACITY',
    choices: ['HEAPED CAPACITY', 'STRUCK CAPACITY', 'PLATE LINE CAPACITY', 'WATER LINE CAPACITY'],
    explanation: 'Struck capacity measures level bucket volume without any heap surcharge above the lip.'
  },
  {
    id: 243,
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Medium',
    question: 'Earthmoving bucket capacity that accounts for mounded surcharge resting above the bucket rim at the material angle of repose.',
    answer: 'HEAPED CAPACITY',
    choices: ['STRUCK CAPACITY', 'HEAPED CAPACITY', 'WATER LINE CAPACITY', 'PAYLINE CAPACITY'],
    explanation: 'Heaped capacity standard (SAE/ISO) assumes material sits above the struck plane at a 1:1 or 2:1 slope.'
  },
  {
    id: 244,
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Medium',
    question: 'In equipment haul cycle analysis, fixed time consists of time spent on:',
    answer: 'LOADING, DUMPING, TURNING, AND GEAR SHIFTING',
    choices: [
      'HAULING AND RETURNING TRAVEL',
      'LOADING, DUMPING, TURNING, AND GEAR SHIFTING',
      'PREVENTIVE MAINTENANCE OVERHAUL',
      'REFUELING AND WARMING UP'
    ],
    explanation: 'Fixed cycle time remains constant for a machine regardless of the distance of the haul route.'
  },
  {
    id: 245,
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Easy',
    question: 'The incremental additional cost incurred by producing or constructing one more unit of an output.',
    answer: 'MARGINAL COST',
    choices: ['FIXED COST', 'MARGINAL COST', 'SUNK COST', 'OPPORTUNITY COST'],
    explanation: 'Marginal cost (MC = ΔTC / ΔQ) determines optimal economic scale in resource allocation.'
  },
  {
    id: 246,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Medium',
    question: 'A 16-sided regular geometric polygon is termed a:',
    answer: 'HEXADECAGON',
    choices: ['DODECAGON', 'TETRADECAGON', 'HEXADECAGON', 'ICOSAGON'],
    explanation: 'A hexadecagon has 16 sides, 16 interior angles (each 157.5°), and 104 diagonals: D = 16·(16-3)/2 = 104.'
  }
];
