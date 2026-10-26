import { CEQuestion } from '../types';

export const ADDITIONAL_QUESTIONS: CEQuestion[] = [
  // PSAD additions (IDs 41 to 100)
  {
    id: 41,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Easy',
    question: 'Two forces of equal magnitude acting in opposite directions along parallel lines of action form a:',
    answer: 'COUPLE',
    choices: ['RESULTANT', 'COUPLE', 'EQUILIBRANT', 'COLLINEAR FORCE'],
    explanation: 'A couple produces pure rotation (moment M = F · d) without any net translational acceleration.'
  },
  {
    id: 42,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Medium',
    question: 'A truss member carrying zero internal axial force under a specific load configuration is known as a:',
    answer: 'ZERO-FORCE MEMBER',
    choices: ['REDUNDANT MEMBER', 'ZERO-FORCE MEMBER', 'TIE ROD', 'BUCKLING STRUT'],
    explanation: 'Zero-force members provide stability during load variations and prevent long slender compression members from buckling.'
  },
  {
    id: 43,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Medium',
    question: 'The internal bending stress distribution across a homogeneous beam cross-section is zero at the:',
    answer: 'NEUTRAL AXIS',
    choices: ['CENTROID', 'EXTREME FIBER', 'NEUTRAL AXIS', 'SHEAR CENTER'],
    explanation: 'The neutral axis (NA) experiences zero longitudinal normal strain (ε = 0) and zero flexural bending stress (σ = 0).'
  },
  {
    id: 44,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Hard',
    question: 'The flexural formula for normal stress in symmetrical beam bending is expressed as:',
    answer: 'σ = M · y / I',
    choices: ['σ = V · Q / (I · b)', 'σ = M · y / I', 'σ = T · r / J', 'σ = P / A'],
    explanation: 'M is bending moment, y is distance from neutral axis, and I is the area moment of inertia about the NA.'
  },
  {
    id: 45,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Hard',
    question: 'The transverse shear stress formula for beams subject to vertical shear force V is given by:',
    answer: 'τ = V · Q / (I · b)',
    choices: ['τ = T · ρ / J', 'τ = V · Q / (I · b)', 'τ = 3V / (2A)', 'τ = P / A'],
    explanation: 'Q is the first moment of area of the section above the plane of interest about the neutral axis.'
  },
  {
    id: 46,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Hard',
    question: 'Under NSCP 2015, the strength reduction factor φ for tension-controlled reinforced concrete flexural members is:',
    answer: '0.90',
    choices: ['0.65', '0.75', '0.85', '0.90'],
    explanation: 'When net tensile strain εt ≥ 0.005, the section is ductile and tension-controlled with φ = 0.90.'
  },
  {
    id: 47,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Hard',
    question: 'The strength reduction factor φ for compression-controlled reinforced concrete members with tied stirrups is:',
    answer: '0.65',
    choices: ['0.65', '0.75', '0.80', '0.90'],
    explanation: 'Tied columns have less warning before brittle crushing compared to spirally reinforced columns (φ = 0.75).'
  },
  {
    id: 48,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'The modulus of rupture (fr) of concrete representing its tensile flexural cracking strength in NSCP is taken as:',
    answer: '0.62 · λ · √f\'c (MPa)',
    choices: ['0.33 · √f\'c', '0.62 · λ · √f\'c (MPa)', '0.70 · √f\'c', '0.85 · f\'c'],
    explanation: 'NSCP 2015 Section 419.2.3 defines the modulus of rupture for normal-weight concrete (λ = 1.0) as 0.62√f\'c.'
  },
  {
    id: 49,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'Modulus of elasticity Ec for normal weight concrete with unit weight wc = 2300 kg/m³ is approximated by NSCP as:',
    answer: '4700 · √f\'c (MPa)',
    choices: ['4200 · √f\'c', '4700 · √f\'c (MPa)', '5000 · √f\'c', '3500 · √f\'c'],
    explanation: 'NSCP Section 419.2.2.1 formula for normal-weight structural concrete specifies Ec = 4700√f\'c.'
  },
  {
    id: 50,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Hard',
    question: 'A critical two-way shear failure that occurs around columns supporting flat slab systems without drop panels is:',
    answer: 'PUNCHING SHEAR',
    choices: ['BEAM SHEAR', 'PUNCHING SHEAR', 'TORSIONAL CRACKING', 'WEB CRIPPLING'],
    explanation: 'Punching shear failure develops along a truncated pyramid or cone at distance d/2 from the column perimeter.'
  },
  {
    id: 51,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Medium',
    question: 'The slenderness ratio of a steel compression member is mathematically defined as:',
    answer: 'KL / r',
    choices: ['L / d', 'KL / r', 'b / 2t', 'h / tw'],
    explanation: 'K is effective length factor, L is unbraced length, and r is the minimum radius of gyration (r = √(I/A)).'
  },
  {
    id: 52,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Medium',
    question: 'Standard yield strength Fy of ASTM A36 structural carbon steel in metric units is approximately:',
    answer: '250 MPa (36 ksi)',
    choices: ['200 MPa', '250 MPa (36 ksi)', '345 MPa (50 ksi)', '400 MPa'],
    explanation: 'A36 carbon steel has minimum yield strength Fy = 36 ksi ≈ 248-250 MPa and tensile strength Fu = 400-550 MPa.'
  },
  {
    id: 53,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Medium',
    question: 'Standard yield strength Fy of ASTM A572 Grade 50 and ASTM A992 structural steel wide-flange beams is:',
    answer: '345 MPa (50 ksi)',
    choices: ['250 MPa', '300 MPa', '345 MPa (50 ksi)', '450 MPa'],
    explanation: 'A992/A572 Gr. 50 is the modern standard grade for structural steel I-beams and columns with Fy = 50 ksi (345 MPa).'
  },
  {
    id: 54,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Hard',
    question: 'The mode of failure where a thin-walled steel beam flange or web ripples locally before global yielding is:',
    answer: 'LOCAL BUCKLING',
    choices: ['FLEXURAL-TORSIONAL BUCKLING', 'LOCAL BUCKLING', 'SHEAR YIELDING', 'BEARING CRUSHING'],
    explanation: 'Width-to-thickness ratios (b/t and h/tw) are limited in AISC/NSCP to ensure sections qualify as compact.'
  },
  {
    id: 55,
    area: 'PSAD',
    subtopic: 'Seismic Engineering & NSCP Provisions',
    difficulty: 'Hard',
    question: 'In NSCP Section 208, the importance factor I for essential facilities (such as hospitals, emergency shelters, and fire stations) is:',
    answer: '1.50',
    choices: ['1.00', '1.15', '1.25', '1.50'],
    explanation: 'Occupancy Category I & II (Essential and Hazardous Facilities) have an importance factor I = 1.50.'
  },
  {
    id: 56,
    area: 'PSAD',
    subtopic: 'Seismic Engineering & NSCP Provisions',
    difficulty: 'Hard',
    question: 'Under NSCP 2015, the structural system consisting of an essentially complete frame with moment connections resisting 100% of lateral force is:',
    answer: 'MOMENT RESISTING FRAME SYSTEM (MRFS)',
    choices: ['BEARING WALL SYSTEM', 'BUILDING FRAME SYSTEM', 'MOMENT RESISTING FRAME SYSTEM (MRFS)', 'DUAL SYSTEM'],
    explanation: 'Special Moment Resisting Frames (SMRF) provide high inelastic energy dissipation with R = 8.5.'
  },
  {
    id: 57,
    area: 'PSAD',
    subtopic: 'Seismic Engineering & NSCP Provisions',
    difficulty: 'Medium',
    question: 'Structural phenomenon where second-order lateral deflections Δ interact with heavy axial column gravity loads P to produce extra moments:',
    answer: 'P-DELTA EFFECT',
    choices: ['RESONANCE', 'P-DELTA EFFECT', 'SHEAR LAG', 'TORSIONAL DRIFT'],
    explanation: 'The P-Δ effect amplifies primary internal bending moments, reducing overall building lateral stiffness.'
  },
  {
    id: 58,
    area: 'PSAD',
    subtopic: 'Construction Materials & Testing',
    difficulty: 'Easy',
    question: 'Chemical reaction between water and Portland cement compounds that causes concrete to harden and gain strength.',
    answer: 'HYDRATION',
    choices: ['CARBONATION', 'HYDRATION', 'POLYMERIZATION', 'CALCINATION'],
    explanation: 'Hydration is an exothermic reaction forming calcium silicate hydrate (C-S-H) gel that binds aggregates.'
  },
  {
    id: 59,
    area: 'PSAD',
    subtopic: 'Construction Materials & Testing',
    difficulty: 'Medium',
    question: 'An admixture added to concrete to increase workability, flowability, and slump without adding extra water.',
    answer: 'SUPERPLASTICIZER (HIGH-RANGE WATER REDUCER)',
    choices: ['RETARDER', 'SUPERPLASTICIZER (HIGH-RANGE WATER REDUCER)', 'AIR-ENTRAINING AGENT', 'ACCELERATOR'],
    explanation: 'Superplasticizers disperse cement particles through electrostatic and steric repulsion, reducing w/c ratio.'
  },
  {
    id: 60,
    area: 'PSAD',
    subtopic: 'Construction Materials & Testing',
    difficulty: 'Easy',
    question: 'Type of Portland cement designated for rapid early strength gain within 24 to 72 hours (ASTM Type III).',
    answer: 'HIGH EARLY STRENGTH CEMENT',
    choices: ['NORMAL CEMENT (TYPE I)', 'MODERATE HEAT CEMENT (TYPE II)', 'HIGH EARLY STRENGTH CEMENT', 'LOW HEAT CEMENT (TYPE IV)'],
    explanation: 'Type III cement is ground finer and contains higher tricalcium silicate (C3S) content for accelerated strength.'
  },

  // HPGE additions (IDs 144 to 200)
  {
    id: 144,
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Medium',
    question: 'Manning’s formula for open channel uniform flow velocity V in SI units is:',
    answer: 'V = (1/n) · R^(2/3) · S^(1/2)',
    choices: ['V = (1/n) · R^(1/2) · S^(2/3)', 'V = (1/n) · R^(2/3) · S^(1/2)', 'V = C · √(R·S)', 'V = Q / A'],
    explanation: 'n is Manning’s roughness coefficient, R is hydraulic radius (A/P), and S is channel bed energy slope.'
  },
  {
    id: 145,
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Medium',
    question: 'The hydraulic radius R of a fluid flow conduit is defined as the ratio of:',
    answer: 'FLOW CROSS-SECTIONAL AREA TO WETTED PERIMETER',
    choices: [
      'WETTED PERIMETER TO FLOW AREA',
      'FLOW CROSS-SECTIONAL AREA TO WETTED PERIMETER',
      'CHANNEL TOP WIDTH TO FLOW DEPTH',
      'PIPE DIAMETER TO HYDRAULIC DEPTH'
    ],
    explanation: 'R = A / P_wetted. For a full circular pipe of diameter D, R = (πD²/4) / (πD) = D/4.'
  },
  {
    id: 146,
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Hard',
    question: 'The Froude number (Fr) for open channel flow is defined as Fr = V / √(g · D_h). When Fr > 1.0, the flow is:',
    answer: 'SUPERCRITICAL FLOW (RAPID/SHOOTING)',
    choices: ['SUBCRITICAL FLOW (TRANQUIL)', 'CRITICAL FLOW', 'SUPERCRITICAL FLOW (RAPID/SHOOTING)', 'LAMINAR FILM FLOW'],
    explanation: 'When Fr > 1.0, flow velocity exceeds gravity wave propagation speed (c = √gy), meaning disturbances cannot travel upstream.'
  },
  {
    id: 147,
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Hard',
    question: 'An abrupt transition and turbulent energy dissipator in open channels from supercritical flow to subcritical flow is a:',
    answer: 'HYDRAULIC JUMP',
    choices: ['HYDRAULIC DROP', 'HYDRAULIC JUMP', 'SURGE WAVE', 'BACKWATER CURVE'],
    explanation: 'Hydraulic jumps convert high kinetic energy of supercritical flow into potential energy and heat turbulence.'
  },
  {
    id: 148,
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Medium',
    question: 'Darcy-Weisbach equation for head loss hf due to pipe friction is expressed as:',
    answer: 'hf = f · (L / D) · (V² / 2g)',
    choices: ['hf = f · (D / L) · (V / 2g)', 'hf = f · (L / D) · (V² / 2g)', 'hf = 8fLQ / (π²gD⁴)', 'hf = K · V² / 2g'],
    explanation: 'f is the dimensionless Darcy friction factor determined from Reynolds number and pipe relative roughness via Moody diagram.'
  },
  {
    id: 149,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Easy',
    question: 'Archimedes’ principle states that the upward buoyant force exerted on a submerged body is equal to the:',
    answer: 'WEIGHT OF THE FLUID DISPLACED BY THE BODY',
    choices: [
      'TOTAL WEIGHT OF THE SUBMERGED BODY',
      'VOLUME OF THE SURROUNDING FLUID',
      'WEIGHT OF THE FLUID DISPLACED BY THE BODY',
      'HYDROSTATIC PRESSURE AT THE BASE'
    ],
    explanation: 'Buoyant force Fb = γ_fluid · V_displaced acting through the centroid of the displaced volume (center of buoyancy).'
  },
  {
    id: 150,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Medium',
    question: 'The point on a submerged plane surface where the total resultant hydrostatic force acts is known as the:',
    answer: 'CENTER OF PRESSURE',
    choices: ['CENTROID', 'CENTER OF GRAVITY', 'CENTER OF PRESSURE', 'METACENTER'],
    explanation: 'Because hydrostatic pressure increases linearly with depth, the center of pressure always lies below the centroid of the area.'
  },
  {
    id: 151,
    area: 'HPGE',
    subtopic: 'Hydrology, Coastal & Harbor Engineering',
    difficulty: 'Medium',
    question: 'The Rational Formula used widely to estimate peak storm runoff discharge Q in small urban drainage basins is:',
    answer: 'Q = C · I · A',
    choices: ['Q = C · I · A', 'Q = 0.278 · C · I · A', 'Q = K · S · A', 'Q = n · A · R^(2/3)'],
    explanation: 'C is dimensionless runoff coefficient, I is rainfall intensity (in/hr or mm/hr), and A is drainage watershed area.'
  },
  {
    id: 152,
    area: 'HPGE',
    subtopic: 'Hydrology, Coastal & Harbor Engineering',
    difficulty: 'Medium',
    question: 'The uninterrupted open water surface distance over which wind blows in a constant direction to generate ocean waves is the:',
    answer: 'FETCH',
    choices: ['SHOAL', 'FETCH', 'SWELL', 'WAVE RUNUP'],
    explanation: 'Fetch length, wind duration, and wind velocity are the three primary variables governing ocean wave height and period.'
  },
  {
    id: 153,
    area: 'HPGE',
    subtopic: 'Soil Classification, Compaction & Permeability',
    difficulty: 'Medium',
    question: 'Darcy’s empirical law governing groundwater seepage discharge velocity v through saturated soil is:',
    answer: 'v = k · i',
    choices: ['v = k · i', 'v = k / i', 'v = Q / (k · A)', 'v = √(2gh)'],
    explanation: 'k is hydraulic conductivity (coefficient of permeability) and i is hydraulic gradient (head loss hL divided by length L).'
  },
  {
    id: 154,
    area: 'HPGE',
    subtopic: 'Soil Classification, Compaction & Permeability',
    difficulty: 'Medium',
    question: 'The critical hydraulic gradient (icr) where upward seepage pressure cancels the submerged soil weight, inducing quicksand is:',
    answer: 'icr = (Gs - 1) / (1 + e)',
    choices: ['icr = Gs / (1 + e)', 'icr = (Gs - 1) / (1 + e)', 'icr = (1 + e) / (Gs - 1)', 'icr = e / Gs'],
    explanation: 'At critical gradient (typically ≈ 1.0 for sands), effective stress drops to zero, causing boiling and zero shear capacity.'
  },
  {
    id: 155,
    area: 'HPGE',
    subtopic: 'Soil Physical Properties & Phase Relationships',
    difficulty: 'Medium',
    question: 'Atterberg limit defining the boundary moisture content between the liquid and plastic states of a fine-grained cohesive soil is:',
    answer: 'LIQUID LIMIT (LL)',
    choices: ['PLASTIC LIMIT (PL)', 'LIQUID LIMIT (LL)', 'SHRINKAGE LIMIT (SL)', 'PLASTICITY INDEX (PI)'],
    explanation: 'Standard Casagrande cup test defines LL as the moisture content at which a soil pat groove closes 12.7 mm after 25 drops.'
  },
  {
    id: 156,
    area: 'HPGE',
    subtopic: 'Soil Physical Properties & Phase Relationships',
    difficulty: 'Easy',
    question: 'The numerical difference between the Liquid Limit (LL) and Plastic Limit (PL) of a soil is termed the:',
    answer: 'PLASTICITY INDEX (PI)',
    choices: ['LIQUIDITY INDEX (LI)', 'PLASTICITY INDEX (PI)', 'CONSISTENCY INDEX (CI)', 'ACTIVITY'],
    explanation: 'Plasticity Index PI = LL - PL measures the range of water content over which the soil exhibits plastic behavior.'
  },
  {
    id: 157,
    area: 'HPGE',
    subtopic: 'Foundations, Retaining Walls & Slope Stability',
    difficulty: 'Hard',
    question: 'Rankine’s active earth pressure coefficient Ka for a level cohesionless backfill with internal friction angle φ is:',
    answer: 'Ka = (1 - sin φ) / (1 + sin φ)',
    choices: ['Ka = (1 + sin φ) / (1 - sin φ)', 'Ka = (1 - sin φ) / (1 + sin φ)', 'Ka = tan²(45° + φ/2)', 'Ka = cos φ'],
    explanation: 'Ka = tan²(45° - φ/2) = (1 - sin φ)/(1 + sin φ), yielding lateral thrust Pa = 0.5 · Ka · γ · H².'
  },
  {
    id: 158,
    area: 'HPGE',
    subtopic: 'Foundations, Retaining Walls & Slope Stability',
    difficulty: 'Hard',
    question: 'Rankine’s passive earth pressure coefficient Kp representing soil resisting lateral wall push is:',
    answer: 'Kp = (1 + sin φ) / (1 - sin φ)',
    choices: ['Kp = (1 - sin φ) / (1 + sin φ)', 'Kp = (1 + sin φ) / (1 - sin φ)', 'Kp = 1 / tan²(45° + φ/2)', 'Kp = sin φ'],
    explanation: 'Passive resistance Kp = 1 / Ka = tan²(45° + φ/2) is significantly larger than active pressure.'
  },
  {
    id: 159,
    area: 'HPGE',
    subtopic: 'Foundations, Retaining Walls & Slope Stability',
    difficulty: 'Medium',
    question: 'A heavy rigid box structure sunk deep into the earth or riverbed by excavating soil from inside is a:',
    answer: 'CAISSON (WELL FOUNDATION)',
    choices: ['COMBINED FOOTING', 'CAISSON (WELL FOUNDATION)', 'SOLDIER PILE', 'RETAINING CRIBBING'],
    explanation: 'Caissons provide foundation support for bridge piers, dock walls, and heavy structures in deep water.'
  },
  {
    id: 160,
    area: 'HPGE',
    subtopic: 'Foundations, Retaining Walls & Slope Stability',
    difficulty: 'Medium',
    question: 'A thick reinforced concrete slab supporting an entire building structure and distributing all column loads over a large footprint is a:',
    answer: 'MAT OR RAFT FOUNDATION',
    choices: ['STRAP FOOTING', 'ISOLATED PAD', 'MAT OR RAFT FOUNDATION', 'GRADE TIE'],
    explanation: 'Mat foundations prevent differential settlement on weak compressible soils by spanning local soft pockets.'
  },

  // MSTE additions (IDs 247 to 300)
  {
    id: 247,
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Easy',
    question: 'A horizontal angle measured clockwise from the reference meridian (usually North) to a given survey line is an:',
    answer: 'AZIMUTH',
    choices: ['BEARING', 'AZIMUTH', 'DEFLECTION ANGLE', 'ZENITH ANGLE'],
    explanation: 'Azimuths range from 0° to 360° measured strictly clockwise from the north (or south) baseline.'
  },
  {
    id: 248,
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Easy',
    question: 'An acute horizontal angle (< 90°) measured from either North or South toward East or West is a:',
    answer: 'BEARING',
    choices: ['AZIMUTH', 'BEARING', 'INCLINATION', 'DIP ANGLE'],
    explanation: 'Bearings are stated with quadrant notation, e.g., N 45° 30\' E, never exceeding 90°.'
  },
  {
    id: 249,
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Medium',
    question: 'In leveling, a rod reading taken on a point of known benchmark elevation is called a:',
    answer: 'BACKSIGHT (+SIGHT)',
    choices: ['FORESIGHT (-SIGHT)', 'BACKSIGHT (+SIGHT)', 'INTERMEDIATE SIGHT', 'DATUM SIGHT'],
    explanation: 'Backsight is added to benchmark elevation to establish the Height of Instrument: HI = BM + BS.'
  },
  {
    id: 250,
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Medium',
    question: 'In leveling, a rod reading taken on a new turning point or benchmark to determine its elevation is a:',
    answer: 'FORESIGHT (-SIGHT)',
    choices: ['BACKSIGHT (+SIGHT)', 'FORESIGHT (-SIGHT)', 'DATUM TIE', 'CROSS HAIR CHECK'],
    explanation: 'Foresight is subtracted from Height of Instrument to calculate ground elevation: Elev = HI - FS.'
  },
  {
    id: 251,
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Hard',
    question: 'Combined correction for earth curvature and atmospheric refraction hcr for sighting distance K (in km) is approximately:',
    answer: 'hcr = 0.0675 · K² (meters)',
    choices: ['hcr = 0.0785 · K²', 'hcr = 0.0675 · K² (meters)', 'hcr = 0.0112 · K²', 'hcr = 0.0450 · K²'],
    explanation: 'Curvature causes target to appear lower (+0.0785K²) while refraction bends sight ray down (-0.0110K²), net = 0.0675K².'
  },
  {
    id: 252,
    area: 'MSTE',
    subtopic: 'Highway Geometric Design & Sight Distances',
    difficulty: 'Medium',
    question: 'The minimum sight distance required on a two-lane highway to permit safe overtaking of a slower vehicle without conflict is:',
    answer: 'PASSING SIGHT DISTANCE (PSD)',
    choices: ['STOPPING SIGHT DISTANCE (SSD)', 'PASSING SIGHT DISTANCE (PSD)', 'DECISION SIGHT DISTANCE', 'INTERSECTION CLEARANCE'],
    explanation: 'PSD includes initial maneuver distance d1, time encroaching left lane d2, clearance distance d3, and opposing vehicle distance d4.'
  },
  {
    id: 253,
    area: 'MSTE',
    subtopic: 'Highway Geometric Design & Sight Distances',
    difficulty: 'Medium',
    question: 'Vertical curves connecting intersecting roadway grade tangents are designed standardly as parabolas because:',
    answer: 'THE RATE OF CHANGE OF GRADE IS CONSTANT',
    choices: [
      'THEY HAVE CONSTANT RADIUS OF CURVATURE',
      'THE RATE OF CHANGE OF GRADE IS CONSTANT',
      'THEY MINIMIZE PAVEMENT THICKNESS',
      'THEY ARE EASIER TO COMPACT'
    ],
    explanation: 'A quadratic parabola (y = ax² + bx + c) provides a constant rate of vertical curvature (d²y/dx² = constant).'
  },
  {
    id: 254,
    area: 'MSTE',
    subtopic: 'Traffic Engineering, Markings & Signs',
    difficulty: 'Medium',
    question: 'The qualitative measure describing traffic operational conditions and motorist perception of flow is termed:',
    answer: 'LEVEL OF SERVICE (LOS)',
    choices: ['DESIGN CAPACITY', 'LEVEL OF SERVICE (LOS)', 'VOLUME-TO-CAPACITY RATIO', 'SERVICE RATE'],
    explanation: 'LOS is categorized from A (free flow, high maneuverability) to F (forced breakdown, heavy congestion).'
  },
  {
    id: 255,
    area: 'MSTE',
    subtopic: 'Traffic Engineering, Markings & Signs',
    difficulty: 'Medium',
    question: 'The time elapsed between the arrival of consecutive vehicles passing a given point on a roadway lane is:',
    answer: 'TIME HEADWAY',
    choices: ['SPACE HEADWAY', 'TIME HEADWAY', 'TIME OCCUPANCY', 'CLEARANCE INTERVAL'],
    explanation: 'Time headway h_t = 3600 / q (seconds per vehicle), where q is flow rate in vehicles per hour.'
  },
  {
    id: 256,
    area: 'MSTE',
    subtopic: 'Traffic Engineering, Markings & Signs',
    difficulty: 'Medium',
    question: 'The distance measured from the front bumper of a lead vehicle to the front bumper of the following vehicle is:',
    answer: 'SPACE HEADWAY',
    choices: ['TIME HEADWAY', 'SPACE HEADWAY', 'BRAKING DISTANCE', 'CLEARANCE GAP'],
    explanation: 'Space headway h_s = 1000 / k (meters per vehicle), where k is density in vehicles per kilometer.'
  },
  {
    id: 257,
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Medium',
    question: 'The amount of time an activity can be delayed without delaying the early start date of any immediate successor activity is:',
    answer: 'FREE FLOAT',
    choices: ['TOTAL FLOAT', 'FREE FLOAT', 'INTERFERING FLOAT', 'INDEPENDENT FLOAT'],
    explanation: 'Free Float FF = min(ES_successors) - EF_activity. Total Float TF = LS - ES = LF - EF.'
  },
  {
    id: 258,
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Medium',
    question: 'The process of shortening the duration of critical network activities by committing extra resources at minimum cost is:',
    answer: 'CRASHING',
    choices: ['FAST-TRACKING', 'CRASHING', 'RESOURCE LEVELING', 'FLOAT EXHAUSTION'],
    explanation: 'Cost slope for crashing is Cost Slope = (Crash Cost - Normal Cost) / (Normal Time - Crash Time).'
  },
  {
    id: 259,
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Easy',
    question: 'A bar chart project scheduling tool invented by Henry Gantt that illustrates activity schedules and progress over a calendar scale is a:',
    answer: 'GANTT CHART',
    choices: ['MILESTONE HISTOGRAM', 'GANTT CHART', 'PARETO CHART', 'ARROW DIAGRAM'],
    explanation: 'Gantt charts display tasks as horizontal bars against a calendar timeline, highlighting start/finish milestones.'
  },
  {
    id: 260,
    area: 'MSTE',
    subtopic: 'Engineering Mathematics & Geometry',
    difficulty: 'Medium',
    question: 'The interest rate earned by an investor on the unpaid balance of an investment over its project life that equates NPV to zero is:',
    answer: 'INTERNAL RATE OF RETURN (IRR)',
    choices: ['EFFECTIVE ANNUAL RATE', 'INTERNAL RATE OF RETURN (IRR)', 'MINIMUM ATTRACTIVE RATE OF RETURN', 'DISCOUNT FACTOR'],
    explanation: 'IRR is the discount rate r at which the Present Worth of cash inflows equals the Present Worth of cash outflows (NPV = 0).'
  }
];
