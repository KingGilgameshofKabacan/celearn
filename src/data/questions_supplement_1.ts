import { CEQuestion } from '../types';

export const SUPPLEMENT_QUESTIONS_1: CEQuestion[] = [
  // PSAD questions
  {
    id: 301,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Easy',
    question: 'A beam supported by a pin at one end and a roller at the other end is classified as a:',
    answer: 'SIMPLY SUPPORTED BEAM',
    choices: ['CANTILEVER BEAM', 'SIMPLY SUPPORTED BEAM', 'OVERHANGING BEAM', 'FIXED-ENDED BEAM'],
    explanation: 'Simply supported beams are statically determinate with 3 equilibrium equations satisfying 3 reaction components.'
  },
  {
    id: 302,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Easy',
    question: 'A structural beam supported rigidly at only one end, with the other end completely free in space is a:',
    answer: 'CANTILEVER BEAM',
    choices: ['CANTILEVER BEAM', 'PROPPED BEAM', 'CONTINUOUS BEAM', 'TRUSSED BEAM'],
    explanation: 'A cantilever beam develops maximum negative moment and shear reaction at its fixed support.'
  },
  {
    id: 303,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Medium',
    question: 'The point along a bent beam where the internal bending moment changes algebraic sign (+ to -) is the:',
    answer: 'POINT OF INFLECTION (CONTRAFLEXURE)',
    choices: ['NEUTRAL AXIS', 'POINT OF INFLECTION (CONTRAFLEXURE)', 'MAXIMUM DEFLECTION POINT', 'SHEAR PINCH'],
    explanation: 'At the point of contraflexure, bending moment M = 0 and beam curvature changes from concave upward to downward.'
  },
  {
    id: 304,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Hard',
    question: 'In structural steel plate girders with thin webs stiffened by transverse stiffeners, the extra post-buckling shear strength developed through diagonal tensile web stresses is known as:',
    answer: 'TENSION FIELD ACTION (PRATT TRUSS ANALOGY)',
    choices: [
      'LATERAL-TORSIONAL YIELDING',
      'TENSION FIELD ACTION (PRATT TRUSS ANALOGY)',
      'COMPACT FLANGE RESISTANCE',
      'COUPLED SHEAR DEFORMATION'
    ],
    explanation: 'After thin web panels buckle elastically in shear, diagonal tension stresses form across panels anchored by transverse stiffeners and flanges.'
  },
  {
    id: 305,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Medium',
    question: 'In lightweight roof truss structural framing, sag rods are installed at midspan or third points of cold-formed purlins primarily to:',
    answer: 'PREVENT EXCESSIVE SAG AND LATERAL BENDING ABOUT THE PURLIN WEAK AXIS (Z-AXIS)',
    choices: [
      'CARRY MAIN GRAVITY DEAD LOAD OF ROOF TRUSS',
      'PREVENT EXCESSIVE SAG AND LATERAL BENDING ABOUT THE PURLIN WEAK AXIS (Z-AXIS)',
      'ACT AS PRIMARY UPLIFT ANCHORS FOR SHEETING',
      'REPLACE TRANSVERSE DIAPHRAGM BRACING'
    ],
    explanation: 'Purlins on sloping roofs carry loads inclined to their strong axes; sag rods support purlins against weak-axis bending down the slope.'
  },
  {
    id: 306,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Medium',
    question: 'The ratio of ultimate tensile strength to allowable working stress used in structural design is the:',
    answer: 'FACTOR OF SAFETY (FOS)',
    choices: ['LOAD FACTOR', 'FACTOR OF SAFETY (FOS)', 'STRESS CONCENTRATION FACTOR', 'SERVICEABILITY INDEX'],
    explanation: 'Factor of Safety accounts for uncertainties in loading, material imperfections, and analysis simplifications.'
  },
  {
    id: 307,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'Minimum standard nominal diameter of main deformed rebar used in structural concrete columns according to NSCP is:',
    answer: '16 mm',
    choices: ['10 mm', '12 mm', '16 mm', '20 mm'],
    explanation: 'NSCP mandates a minimum bar diameter of 16 mm for longitudinal reinforcement in tied or spiral columns.'
  },
  {
    id: 308,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'The minimum number of longitudinal bars required in a circular reinforced concrete column enclosed by continuous spiral ties is:',
    answer: '6 BARS',
    choices: ['4 BARS', '6 BARS', '8 BARS', '12 BARS'],
    explanation: 'Rectangular tied columns require minimum 4 bars; circular spiral columns require minimum 6 bars.'
  },
  {
    id: 309,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Hard',
    question: 'The maximum longitudinal steel reinforcement ratio ρ_max permitted in columns by NSCP to prevent congestion is:',
    answer: '0.08 (8%) OF GROSS AREA',
    choices: ['0.04 (4%)', '0.06 (6%)', '0.08 (8%) OF GROSS AREA', '0.10 (10%)'],
    explanation: 'The code limits column reinforcement between 1% (ρ_min = 0.01) and 8% (ρ_max = 0.08) of Ag.'
  },
  {
    id: 310,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Hard',
    question: 'In prestressed concrete, the technique where tendons are tensioned against abutments BEFORE pouring concrete is:',
    answer: 'PRE-TENSIONING',
    choices: ['POST-TENSIONING', 'PRE-TENSIONING', 'EXTERNAL TENDONING', 'BONDED RETENSIONING'],
    explanation: 'Pre-tensioning bonds tendons directly to cured concrete before releasing end anchors.'
  },
  {
    id: 311,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Hard',
    question: 'In prestressed concrete, the technique where tendons are tensioned AFTER concrete has gained required compressive strength is:',
    answer: 'POST-TENSIONING',
    choices: ['PRE-TENSIONING', 'POST-TENSIONING', 'INTERNAL CASTING', 'SHEATHING ANCHORAGE'],
    explanation: 'Post-tensioning pulls tendons through embedded ducts and anchors them at member ends.'
  },
  {
    id: 312,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Medium',
    question: 'A welded or bolted steel connection designed to transfer shear force only without transferring bending moment is a:',
    answer: 'SHEAR (SIMPLE) CONNECTION',
    choices: ['MOMENT CONNECTION', 'SHEAR (SIMPLE) CONNECTION', 'RIGID SPLICE', 'SEMI-RIGID JOINT'],
    explanation: 'Shear connections (e.g. web clip angles) allow minor beam end rotation without transferring moment.'
  },
  {
    id: 313,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Medium',
    question: 'A connection between steel beam and column capable of transferring both shear and full flexural bending moments is a:',
    answer: 'MOMENT CONNECTION (RIGID CONNECTION)',
    choices: ['SHEAR TAB', 'MOMENT CONNECTION (RIGID CONNECTION)', 'PINNED CLEAT', 'SLOTTED BEARING'],
    explanation: 'Moment connections require top and bottom flange plates or full penetration welds to column flanges.'
  },
  {
    id: 314,
    area: 'PSAD',
    subtopic: 'Seismic Engineering & NSCP Provisions',
    difficulty: 'Hard',
    question: 'Horizontal structural diaphragm irregularity where a diaphragm has open cutout holes exceeding 50% of gross floor area is:',
    answer: 'DIAPHRAGM DISCONTINUITY IRREGULARITY',
    choices: ['TORSIONAL IRREGULARITY', 'DIAPHRAGM DISCONTINUITY IRREGULARITY', 'REENTRANT CORNER', 'OUT-OF-PLANE OFFSET'],
    explanation: 'NSCP defines diaphragm discontinuity when openings exceed 50% or diaphragm stiffness varies > 50% between stories.'
  },
  {
    id: 315,
    area: 'PSAD',
    subtopic: 'Seismic Engineering & NSCP Provisions',
    difficulty: 'Medium',
    question: 'The fundamental natural period of vibration T of a building structure is mathematically defined as:',
    answer: 'TIME IN SECONDS REQUIRED TO COMPLETE ONE FULL VIBRATION CYCLE',
    choices: [
      'NUMBER OF CYCLES COMPLETED PER SECOND',
      'TIME IN SECONDS REQUIRED TO COMPLETE ONE FULL VIBRATION CYCLE',
      'DAMPING RATIO PER UNIT MASS',
      'MAXIMUM GROUND ACCELERATION DURATION'
    ],
    explanation: 'Period T = 2π / ω_n (seconds), whereas natural frequency f = 1/T (Hertz).'
  },
  {
    id: 316,
    area: 'PSAD',
    subtopic: 'Construction Materials & Testing',
    difficulty: 'Easy',
    question: 'Standard size of concrete test cylinders used for compressive strength testing according to ASTM C31 and C39 is:',
    answer: '150 mm DIAMETER BY 300 mm HEIGHT (6" × 12")',
    choices: [
      '100 mm × 100 mm CUBE',
      '150 mm DIAMETER BY 300 mm HEIGHT (6" × 12")',
      '200 mm × 200 mm CYLINDER',
      '150 mm × 150 mm × 150 mm CUBE'
    ],
    explanation: 'Standard ASTM cylinders have 2:1 height-to-diameter ratio (150 mm × 300 mm, or modern 100 mm × 200 mm).'
  },
  {
    id: 317,
    area: 'PSAD',
    subtopic: 'Construction Materials & Testing',
    difficulty: 'Medium',
    question: 'The age at which concrete design compressive strength f\'c is officially evaluated in standard structural specifications:',
    answer: '28 DAYS',
    choices: ['7 DAYS', '14 DAYS', '28 DAYS', '56 DAYS'],
    explanation: '28-day curing is universally recognized as the benchmark age when hydration produces majority of design strength.'
  },
  {
    id: 318,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Medium',
    question: 'Regarding the anisotropic mechanical properties of structural timber, allowable compressive stress parallel to grain (Fc||) compared to perpendicular to grain (Fc⊥) is approximately:',
    answer: '3 TO 5 TIMES GREATER',
    choices: [
      'EQUAL IN BOTH DIRECTIONS',
      '3 TO 5 TIMES GREATER',
      'HALF AS STRONG',
      '10 TIMES WEAKER'
    ],
    explanation: 'Wood fibers run longitudinally; crushing parallel to grain takes high axial stress (10-15 MPa) while cross-grain crushing occurs at much lower stress (2-3 MPa).'
  },
  {
    id: 319,
    area: 'PSAD',
    subtopic: 'Seismic Engineering & NSCP Provisions',
    difficulty: 'Hard',
    question: 'Seismic protective devices such as Lead-Rubber Bearings (LRB) installed between a building’s substructure and superstructure function primarily to:',
    answer: 'LENGTHEN THE NATURAL PERIOD T OF THE BUILDING TO REDUCE ACCELERATION DEMAND',
    choices: [
      'INCREASE LATERAL STRUCTURAL STIFFNESS TO ZERO PERIOD',
      'LENGTHEN THE NATURAL PERIOD T OF THE BUILDING TO REDUCE ACCELERATION DEMAND',
      'ELIMINATE OVERTURNING MOMENTS COMPLETELY',
      'PREVENT THERMAL EXPANSION OF CONCRETE'
    ],
    explanation: 'Shifting the structure’s fundamental period T from the high-acceleration range (0.2-0.6s) to 2.5-3.5s drastically reduces transmitted seismic shears.'
  },
  {
    id: 320,
    area: 'PSAD',
    subtopic: 'Construction Materials & Testing',
    difficulty: 'Hard',
    question: 'The non-destructive test method that measures the velocity of acoustic sound waves through hardened concrete to assess uniformity, voids, and crack depth is the:',
    answer: 'ULTRASONIC PULSE VELOCITY (UPV) TEST (ASTM C597)',
    choices: [
      'SCHMIDT REBOUND HAMMER TEST (ASTM C805)',
      'ULTRASONIC PULSE VELOCITY (UPV) TEST (ASTM C597)',
      'WINDSOR PROBE TEST (ASTM C803)',
      'SPLIT TENSILE CYLINDER TEST (ASTM C496)'
    ],
    explanation: 'Higher wave speeds (>4000 m/s) indicate dense, sound concrete; lower velocities indicate internal honeycomb voids, microcracking, or low density.'
  },

  // HPGE questions
  {
    id: 321,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Easy',
    question: 'Pressure exerted by a static liquid column of height h and unit weight γ on a horizontal surface is given by:',
    answer: 'P = γ · h',
    choices: ['P = γ / h', 'P = γ · h', 'P = 0.5 · γ · h²', 'P = ρ · v² / 2'],
    explanation: 'Hydrostatic pressure increases directly with fluid unit weight and depth below the free liquid surface.'
  },
  {
    id: 322,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Easy',
    question: 'Device consisting of a U-tube containing liquid used to measure pressure differences between two fluid points is a:',
    answer: 'MANOMETER',
    choices: ['BAROMETER', 'MANOMETER', 'PYCNOMETER', 'HYDROMETER'],
    explanation: 'Differential manometers measure pressure differences using differential column heights of a manometric fluid.'
  },
  {
    id: 323,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Easy',
    question: 'Instrument used to measure local atmospheric barometric air pressure invented by Evangelista Torricelli is a:',
    answer: 'BAROMETER',
    choices: ['MANOMETER', 'BAROMETER', 'ANEMOMETER', 'PIEZOMETER'],
    explanation: 'Mercury barometers measure atmospheric pressure against a vacuum head (760 mm Hg = 1 atm).'
  },
  {
    id: 324,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Easy',
    question: 'A simple vertical tube tapped into a pressurized conduit to measure static liquid pressure head is a:',
    answer: 'PIEZOMETER',
    choices: ['PITOT TUBE', 'VENTURI METER', 'PIEZOMETER', 'ORIFICE METER'],
    explanation: 'Liquid rises in a piezometer tube to an elevation equal to the piezometric head (z + P/γ).'
  },
  {
    id: 325,
    area: 'HPGE',
    subtopic: 'Fluid Dynamics & Energy/Continuity',
    difficulty: 'Medium',
    question: 'An L-shaped tube pointing upstream into fluid flow used to measure local dynamic stagnation velocity head is a:',
    answer: 'PITOT TUBE',
    choices: ['VENTURI TUBE', 'PITOT TUBE', 'WEIR TUBE', 'SIPHON'],
    explanation: 'Pitot tubes measure stagnation pressure, where velocity V is derived by V = √(2g · Δh).'
  },
  {
    id: 326,
    area: 'HPGE',
    subtopic: 'Fluid Dynamics & Energy/Continuity',
    difficulty: 'Medium',
    question: 'A converging-diverging pipe section calibrated to measure volumetric flow discharge based on pressure drop at the throat is a:',
    answer: 'VENTURI METER',
    choices: ['PITOT TUBE', 'VENTURI METER', 'ROTAMETER', 'ORIFICE WEIR'],
    explanation: 'Venturi meters convert static pressure into kinetic energy at the throat with minimal head loss.'
  },
  {
    id: 327,
    area: 'HPGE',
    subtopic: 'Fluid Dynamics & Energy/Continuity',
    difficulty: 'Hard',
    question: 'The theoretical velocity of liquid issuing through a small orifice under effective head h is given by Torricelli’s Law as:',
    answer: 'V = √(2 · g · h)',
    choices: ['V = 2 · g · h', 'V = √(2 · g · h)', 'V = g · h', 'V = √(g · h / 2)'],
    explanation: 'Torricelli’s equation derives directly from Bernoulli’s theorem assuming zero velocity at the large reservoir surface.'
  },
  {
    id: 328,
    area: 'HPGE',
    subtopic: 'Fluid Dynamics & Energy/Continuity',
    difficulty: 'Medium',
    question: 'The ratio of actual orifice discharge to theoretical discharge, taking into account velocity and contraction losses, is:',
    answer: 'COEFFICIENT OF DISCHARGE (Cd)',
    choices: ['COEFFICIENT OF VELOCITY (Cv)', 'COEFFICIENT OF CONTRACTION (Cc)', 'COEFFICIENT OF DISCHARGE (Cd)', 'FRICTION FACTOR (f)'],
    explanation: 'Cd = Cv · Cc. For a sharp-edged circular orifice, typical Cd is approximately 0.60 to 0.62.'
  },
  {
    id: 329,
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Medium',
    question: 'The point along an exiting fluid jet from an orifice where cross-sectional area reaches its minimum value is the:',
    answer: 'VENA CONTRACTA',
    choices: ['THROAT', 'VENA CONTRACTA', 'CREST', 'HYDRAULIC WAIST'],
    explanation: 'Vena contracta occurs at a distance of approximately half the orifice diameter downstream from the opening.'
  },
  {
    id: 330,
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Medium',
    question: 'An overflow structure built across an open channel to measure water discharge or control upstream water levels is a:',
    answer: 'WEIR',
    choices: ['FLUME', 'WEIR', 'CULVERT', 'DROP STRUCTURE'],
    explanation: 'Common weir types include sharp-crested rectangular weirs, Cipolletti trapezoidal weirs, and V-notch triangular weirs.'
  },
  {
    id: 331,
    area: 'HPGE',
    subtopic: 'Soil Physical Properties & Phase Relationships',
    difficulty: 'Medium',
    question: 'Laboratory test used to determine the specific gravity of fine soil grains by water displacement in a flask is the:',
    answer: 'PYCNOMETER TEST',
    choices: ['HYDROMETER TEST', 'PYCNOMETER TEST', 'PROCTOR TEST', 'CASAGRANDE TEST'],
    explanation: 'A calibrated pycnometer measures dry soil mass and displaced distilled water volume (ASTM D854).'
  },
  {
    id: 332,
    area: 'HPGE',
    subtopic: 'Soil Physical Properties & Phase Relationships',
    difficulty: 'Medium',
    question: 'Sedimentation analysis test based on Stokes’ Law used to determine grain-size distribution for soil particles passing the No. 200 sieve is:',
    answer: 'HYDROMETER TEST',
    choices: ['SIEVE SHAKER TEST', 'HYDROMETER TEST', 'ATTERBERG TEST', 'PERMEABILITY TEST'],
    explanation: 'Hydrometer testing calculates settlement velocities of silt and clay particles suspended in water.'
  },
  {
    id: 333,
    area: 'HPGE',
    subtopic: 'Soil Classification, Compaction & Permeability',
    difficulty: 'Medium',
    question: 'Standard dynamic laboratory compaction test utilizing a 2.5 kg (5.5 lb) hammer dropped from 305 mm (12 in) is the:',
    answer: 'STANDARD PROCTOR TEST (ASTM D698)',
    choices: ['MODIFIED PROCTOR TEST', 'STANDARD PROCTOR TEST (ASTM D698)', 'CBR TEST', 'VIBRO COMPACTION TEST'],
    explanation: 'The Standard Proctor test applies 600 kN-m/m³ of compactive energy to determine Maximum Dry Density (MDD) and Optimum Moisture Content (OMC).'
  },
  {
    id: 334,
    area: 'HPGE',
    subtopic: 'Soil Classification, Compaction & Permeability',
    difficulty: 'Medium',
    question: 'Heavier laboratory compaction test utilizing a 4.54 kg (10 lb) hammer dropped from 457 mm (18 in) for airfield subbases is the:',
    answer: 'MODIFIED PROCTOR TEST (ASTM D1557)',
    choices: ['STANDARD PROCTOR TEST', 'MODIFIED PROCTOR TEST (ASTM D1557)', 'DYNAMIC PROBE TEST', 'DIRECT CONE TEST'],
    explanation: 'The Modified Proctor test imparts approximately 4.5 times more energy (2700 kN-m/m³) than the standard test.'
  },
  {
    id: 335,
    area: 'HPGE',
    subtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    difficulty: 'Hard',
    question: 'In Terzaghi’s one-dimensional consolidation theory, the ratio of change in void ratio to change in effective stress (Δe / Δσ\') is:',
    answer: 'COEFFICIENT OF COMPRESSIBILITY (av)',
    choices: ['COMPRESSION INDEX (Cc)', 'COEFFICIENT OF COMPRESSIBILITY (av)', 'COEFFICIENT OF CONSOLIDATION (cv)', 'VOLUME CHANGE RATIO'],
    explanation: 'av = -de/dσ\'. Coefficient of volume compressibility mv = av / (1 + e0).'
  },

  // MSTE questions
  {
    id: 336,
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Easy',
    question: 'A permanent or semi-permanent survey mark of established known elevation above a reference vertical datum is a:',
    answer: 'BENCHMARK (BM)',
    choices: ['TURNING POINT', 'BENCHMARK (BM)', 'MONUMENT PIN', 'WITNESS CORNER'],
    explanation: 'Benchmarks provide reliable elevation control for engineering leveling surveys.'
  },
  {
    id: 337,
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Medium',
    question: 'A temporary stable physical point used in leveling to transfer instrument lines of sight between setups is a:',
    answer: 'TURNING POINT (TP)',
    choices: ['BENCHMARK', 'TURNING POINT (TP)', 'DATUM PEG', 'AZIMUTH HUB'],
    explanation: 'A turning point receives a foresight (FS) from the rear setup and a backsight (BS) from the forward setup.'
  },
  {
    id: 338,
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Medium',
    question: 'Rapid optical method for determining horizontal distances and elevation differences using a theodolite and stadia rod is:',
    answer: 'STADIA TACHEOMETRY',
    choices: ['TRIGONOMETRIC LEVELING', 'STADIA TACHEOMETRY', 'BAROMETRIC LEVELING', 'EDM SCANNING'],
    explanation: 'Distance D = K · S · cos²(α), where K is the stadia multiplier (usually 100) and S is stadia rod intercept.'
  },
  {
    id: 339,
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Hard',
    question: 'The most probable value (MPV) of a series of independent measurements of a quantity taken with equal precision is the:',
    answer: 'ARITHMETIC MEAN',
    choices: ['MEDIAN', 'ARITHMETIC MEAN', 'MODE', 'ROOT MEAN SQUARE'],
    explanation: 'According to least squares principles, the arithmetic mean minimizes the sum of squared residual errors.'
  },
  {
    id: 340,
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Hard',
    question: 'When observations have different weights W1, W2, ... Wn, the most probable value is given by the:',
    answer: 'WEIGHTED ARITHMETIC MEAN',
    choices: ['SIMPLE AVERAGE', 'WEIGHTED ARITHMETIC MEAN', 'HARMONIC MEAN', 'GEOMETRIC MEAN'],
    explanation: 'Weighted Mean = Σ(W_i · X_i) / ΣW_i, where weights are inversely proportional to squared standard errors.'
  },
  {
    id: 341,
    area: 'MSTE',
    subtopic: 'Highway Geometric Design & Sight Distances',
    difficulty: 'Medium',
    question: 'The formula for stopping sight distance (SSD) on a level highway grade consists of reaction distance plus braking distance:',
    answer: 'SSD = 0.278 · V · t + V² / (254 · f)',
    choices: [
      'SSD = V · t + V² / (2g)',
      'SSD = 0.278 · V · t + V² / (254 · f)',
      'SSD = V² / (127 · R)',
      'SSD = 0.278 · V · t + V / (127 · f)'
    ],
    explanation: 'V is speed in km/h, t is reaction time (2.5 s), and f is coefficient of longitudinal braking friction.'
  },
  {
    id: 342,
    area: 'MSTE',
    subtopic: 'Highway Geometric Design & Sight Distances',
    difficulty: 'Medium',
    question: 'A horizontal transition curve with continuously varying curvature used to connect a tangent to a circular highway curve is a:',
    answer: 'SPIRAL TRANSITION CURVE (CLOTHOID)',
    choices: ['PARABOLIC CURVE', 'SPIRAL TRANSITION CURVE (CLOTHOID)', 'REVERSE CURVE', 'COMPOUND CURVE'],
    explanation: 'Clothoid spirals introduce centrifugal force gradually and provide runoff length for superelevation.'
  },
  {
    id: 343,
    area: 'MSTE',
    subtopic: 'Traffic Engineering, Markings & Signs',
    difficulty: 'Medium',
    question: 'Greenshields’ linear model of traffic flow assumes that speed V decreases linearly with increasing density k according to:',
    answer: 'V = Vf · (1 - k / kj)',
    choices: ['V = Vf · (1 - k / kj)', 'V = Vf / (1 + k)', 'V = kj · k', 'V = Vf · e^(-k/kj)'],
    explanation: 'Vf is free-flow speed and kj is jam density. Maximum flow (capacity) occurs at V = Vf/2 and k = kj/2.'
  },
  {
    id: 344,
    area: 'MSTE',
    subtopic: 'Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)',
    difficulty: 'Easy',
    question: 'The fundamental principle of hierarchy of controls ranks workplace risk elimination methods in which descending order?',
    answer: 'ELIMINATION > SUBSTITUTION > ENGINEERING > ADMINISTRATIVE > PPE',
    choices: [
      'PPE > ADMINISTRATIVE > ENGINEERING > ELIMINATION',
      'ELIMINATION > SUBSTITUTION > ENGINEERING > ADMINISTRATIVE > PPE',
      'ENGINEERING > ELIMINATION > PPE > SUBSTITUTION',
      'ADMINISTRATIVE > PPE > ENGINEERING > ELIMINATION'
    ],
    explanation: 'Eliminating the hazard entirely is most effective; PPE is the last line of defense.'
  },
  {
    id: 345,
    area: 'MSTE',
    subtopic: 'Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)',
    difficulty: 'Medium',
    question: 'Under DOLE standards, a safety officer responsible for overseeing health programs on construction sites is classified based on training as:',
    answer: 'SAFETY OFFICER (SO1, SO2, SO3, OR SO4)',
    choices: ['SAFETY ENFORCER', 'SAFETY OFFICER (SO1, SO2, SO3, OR SO4)', 'FIRST AID CHIEF', 'SITE INSPECTOR'],
    explanation: 'RA 11058 classifies safety officers from SO1 (basic orientation) up to SO4 (highly advanced certified practitioner).'
  },
  {
    id: 346,
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Medium',
    question: 'In engineering economics, the reduction in value of a physical asset over its useful service life due to wear and tear is:',
    answer: 'DEPRECIATION',
    choices: ['AMORTIZATION', 'DEPRECIATION', 'DEPLETION', 'SALVAGE DISCOUNT'],
    explanation: 'Common methods include Straight-Line, Sum-of-the-Years-Digits (SOYD), and Declining Balance.'
  }
];
