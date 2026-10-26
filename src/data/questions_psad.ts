import { CEQuestion } from '../types';

export const PSAD_QUESTIONS: CEQuestion[] = [
  {
    id: 1,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Easy',
    question: 'Branch of mechanics that deals with bodies and forces at rest or in static equilibrium.',
    answer: 'STATICS',
    choices: ['DYNAMICS', 'KINEMATICS', 'STATICS', 'KINETICS'],
    explanation: 'Statics analyzes loads on physical systems in static equilibrium where acceleration is zero (ΣF=0, ΣM=0).'
  },
  {
    id: 2,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Easy',
    question: 'The ratio of lateral strain to longitudinal (axial) strain within the elastic limit.',
    answer: "POISSON'S RATIO",
    choices: ['MODULUS OF ELASTICITY', 'SHEAR MODULUS', "POISSON'S RATIO", 'BULK MODULUS'],
    explanation: "Poisson's ratio (ν) characterizes transverse contraction relative to longitudinal elongation under axial load."
  },
  {
    id: 3,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Easy',
    question: 'Principle stating that within the proportional limit, normal stress is directly proportional to normal strain.',
    answer: "HOOKE'S LAW",
    choices: ["DARCY'S LAW", "BERNOULLI'S PRINCIPLE", "HOOKE'S LAW", "ST. VENANT'S PRINCIPLE"],
    explanation: "Hooke's Law states σ = E · ε, defining linear elasticity up to the proportional limit."
  },
  {
    id: 4,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Medium',
    question: 'The reciprocal of structural deflection under a unit applied load.',
    answer: 'RIGIDITY / STIFFNESS',
    choices: ['FLEXIBILITY', 'RIGIDITY / STIFFNESS', 'SLENDERNESS', 'COMPLIANCE'],
    explanation: 'Rigidity or stiffness (k) represents the resistance of a member against deflection (k = 1/f).'
  },
  {
    id: 5,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Medium',
    question: 'The slope of the linear elastic region on a standard engineering stress-strain curve.',
    answer: "YOUNG'S MODULUS",
    choices: ['TANGENT MODULUS', 'SECANT MODULUS', "YOUNG'S MODULUS", 'BULK MODULUS'],
    explanation: "Young's modulus of elasticity (E) quantifies longitudinal stiffness as the ratio of tensile stress to tensile strain."
  },
  {
    id: 6,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Medium',
    question: 'Refers to the capacity of a material to absorb energy in the elastic range without permanent deformation.',
    answer: 'RESILIENCE',
    choices: ['TOUGHNESS', 'RESILIENCE', 'DUCTILITY', 'HARDNESS'],
    explanation: 'Modulus of resilience is the strain energy stored per unit volume when stressed to the elastic limit.'
  },
  {
    id: 7,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Medium',
    question: 'Refers to the ability of a material to absorb energy in both elastic and plastic ranges up to fracture.',
    answer: 'TOUGHNESS',
    choices: ['RESILIENCE', 'HARDNESS', 'TOUGHNESS', 'MALLEABILITY'],
    explanation: 'Toughness is represented by the entire area under the stress-strain curve up to the rupture point.'
  },
  {
    id: 8,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Hard',
    question: 'Time-dependent progressive deformation of a material under continuous sustained mechanical stress.',
    answer: 'CREEP',
    choices: ['FATIGUE', 'CREEP', 'RELAXATION', 'HYSTERESIS'],
    explanation: 'Creep is sustained long-term deformation occurring under constant stress, exacerbated by elevated temperatures.'
  },
  {
    id: 9,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Medium',
    question: 'The mechanical property of a material enabling it to undergo large plastic deformation before fracture.',
    answer: 'DUCTILITY',
    choices: ['BRITTLENESS', 'DUCTILITY', 'ELASTICITY', 'RESILIENCE'],
    explanation: 'Ductility allows rebar and structural steel to yield and warn occupants prior to catastrophic failure.'
  },
  {
    id: 10,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Medium',
    question: 'A material having the same composition throughout but distinct mechanical properties along orthogonal axes.',
    answer: 'ORTHOTROPIC MATERIAL',
    choices: ['ISOTROPIC MATERIAL', 'ANISOTROPIC MATERIAL', 'ORTHOTROPIC MATERIAL', 'HOMOGENEOUS MATERIAL'],
    explanation: 'Orthotropic materials (like wood or rolled plates) have mutually perpendicular planes of elastic symmetry.'
  },
  {
    id: 11,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Hard',
    question: 'The measure of a structural material to resist failure under cyclic or fluctuating dynamic loading.',
    answer: 'FATIGUE RESISTANCE',
    choices: ['CREEP RESISTANCE', 'ENDURANCE FACTOR', 'FATIGUE RESISTANCE', 'IMPACT STRENGTH'],
    explanation: 'Fatigue failure occurs at stresses lower than ultimate tensile strength when subjected to cyclic stress reversals.'
  },
  {
    id: 12,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Easy',
    question: 'The maximum nominal stress that a structural material can withstand before fracture occurs.',
    answer: 'ULTIMATE TENSILE STRENGTH',
    choices: ['YIELD STRENGTH', 'PROPORTIONAL LIMIT', 'ULTIMATE TENSILE STRENGTH', 'PROOF STRESS'],
    explanation: 'Ultimate strength (Fu) corresponds to the highest ordinate point on an engineering stress-strain curve.'
  },
  {
    id: 13,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Medium',
    question: 'Mathematical relationship defining structural flexibility in matrix structural analysis.',
    answer: 'RECIPROCAL OF STIFFNESS',
    choices: ['INVERSE OF COMPLIANCE', 'RECIPROCAL OF STIFFNESS', 'RATIO OF DRIFT', 'MOMENT OF INERTIA'],
    explanation: 'Flexibility matrix [F] is mathematically the inverse of stiffness matrix [K] ([F] = [K]⁻¹).'
  },
  {
    id: 14,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Medium',
    question: 'The resistance of a material against localized surface indentation, scratching, or abrasion.',
    answer: 'HARDNESS',
    choices: ['TOUGHNESS', 'HARDNESS', 'STIFFNESS', 'MALLEABILITY'],
    explanation: 'Hardness is evaluated using Brinell, Rockwell, or Vickers indentation tests.'
  },
  {
    id: 15,
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Medium',
    question: 'The actual stress value at which a test specimen undergoes physical rupture or separation.',
    answer: 'RUPTURE STRENGTH',
    choices: ['YIELD POINT', 'ULTIMATE STRENGTH', 'RUPTURE STRENGTH', 'ELASTIC LIMIT'],
    explanation: 'Rupture strength (fracture stress) is the stress at failure based on the original cross-sectional area.'
  },
  {
    id: 16,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'Manner of moving a straight-edge back and forth with a saw-like action across form tops to strike off concrete.',
    answer: 'SCREEDING',
    choices: ['TROWELING', 'FLOATING', 'SCREEDING', 'BROOMING'],
    explanation: 'Screeding strikes off fresh concrete to bring the top surface flush with the design formwork elevation.'
  },
  {
    id: 17,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'Concrete finishing operation performed on slabs intended for thin resilient flooring, tile, carpet, or paint.',
    answer: 'TROWELING',
    choices: ['FLOATING', 'SCREEDING', 'TROWELING', 'BULL FLOATING'],
    explanation: 'Steel troweling produces a dense, smooth, hard-wearing finish on interior concrete floor surfaces.'
  },
  {
    id: 18,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Easy',
    question: 'The process of measuring concrete ingredients by mass or volume and feeding them into the mixer.',
    answer: 'BATCHING',
    choices: ['MIXING', 'BATCHING', 'CURING', 'PLACING'],
    explanation: 'Weight batching is standard for structural concrete to ensure precise water-cement ratio and strength.'
  },
  {
    id: 19,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'Concrete finishing step done after water sheen disappears to embed aggregates and compact surface mortar.',
    answer: 'FLOATING',
    choices: ['SCREEDING', 'FLOATING', 'TROWELING', 'GROOVING'],
    explanation: 'Floating levels ridges, fills voids left by screeding, and prepares the slab for subsequent troweling.'
  },
  {
    id: 20,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Hard',
    question: 'Formation of fine irregular hairline spiderweb cracks on a hardened slab surface caused by rapid drying.',
    answer: 'CRAZING',
    choices: ['SCALING', 'CRAZING', 'SPALLING', 'EFFLORESCENCE'],
    explanation: 'Crazing is caused by surface shrinkage when high evaporation dries out the surface faster than bleed rate.'
  },
  {
    id: 21,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'The minimum number of days for continuous moist curing of standard Portland cement concrete pavement.',
    answer: '14 DAYS',
    choices: ['7 DAYS', '14 DAYS', '21 DAYS', '28 DAYS'],
    explanation: 'Standard DPWH Blue Book specifications require 14 days of moist curing for rigid concrete highway pavements.'
  },
  {
    id: 22,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'Minimum mixing duration for a batch of Portland cement concrete for pavement in a standard central plant mixer.',
    answer: '1.5 MINUTES (90 SECONDS)',
    choices: ['45 SECONDS', '1.0 MINUTE', '1.5 MINUTES (90 SECONDS)', '3.0 MINUTES'],
    explanation: 'Specifications require a minimum of 1.5 minutes (90 seconds) of active mixing for paving batch drums.'
  },
  {
    id: 23,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Easy',
    question: 'Standard field and laboratory slump test apparatus for testing concrete workability uses a mold shaped as:',
    answer: 'FRUSTUM OF A CONE',
    choices: ['CYLINDER', 'CUBE', 'FRUSTUM OF A CONE', 'HEXAGONAL PRISM'],
    explanation: 'The ASTM C143 slump cone has a 100mm top diameter, 200mm base diameter, and 300mm height.'
  },
  {
    id: 24,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Hard',
    question: 'The minimum compressive strength f\'c for reinforced concrete structural members according to NSCP 2015 is:',
    answer: '17 MPa (2500 psi)',
    choices: ['14 MPa', '17 MPa (2500 psi)', '21 MPa (3000 psi)', '28 MPa (4000 psi)'],
    explanation: 'NSCP Section 419.2 mandates a minimum compressive strength of 17 MPa for structural concrete applications.'
  },
  {
    id: 25,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'Minimum concrete cover specified in NSCP for concrete cast permanently against and exposed to earth.',
    answer: '75 mm',
    choices: ['40 mm', '50 mm', '75 mm', '100 mm'],
    explanation: 'Section 420.6.1.3 requires 75 mm (3 inches) clear cover for concrete cast against unformed earth.'
  },
  {
    id: 26,
    area: 'PSAD',
    subtopic: 'Seismic Engineering & NSCP Provisions',
    difficulty: 'Hard',
    question: 'Torsional shear stresses develop in a building during seismic excitation primarily when:',
    answer: 'CENTER OF MASS AND CENTER OF RIGIDITY DO NOT COINCIDE',
    choices: [
      'TOTAL BASE SHEAR EXCEEDS ULTIMATE CAPACITY',
      'CENTER OF MASS AND CENTER OF RIGIDITY DO NOT COINCIDE',
      'FLOOR SLABS ARE FULLY RIGID DIAPHRAGMS',
      'COLUMN STIFFNESS EQUALS BEAM STIFFNESS'
    ],
    explanation: 'Structural eccentricity (e = Xm - Xr) produces twisting torsional moments under lateral ground acceleration.'
  },
  {
    id: 27,
    area: 'PSAD',
    subtopic: 'Seismic Engineering & NSCP Provisions',
    difficulty: 'Medium',
    question: 'The relative lateral displacement between two consecutive floor levels in a multi-story building.',
    answer: 'STOREY DRIFT',
    choices: ['TOTAL DEFLECTION', 'STOREY DRIFT', 'CHORD ROTATION', 'TORSIONAL IRREGULARITY'],
    explanation: 'Story drift (Δ) is evaluated against NSCP allowable drift limits (0.020 to 0.025 times story height).'
  },
  {
    id: 28,
    area: 'PSAD',
    subtopic: 'Seismic Engineering & NSCP Provisions',
    difficulty: 'Hard',
    question: 'A vertical structural irregularity where a story has lateral stiffness less than 70% of the story above it.',
    answer: 'SOFT STOREY',
    choices: ['WEAK STOREY', 'SOFT STOREY', 'IN-PLANE DISCONTINUITY', 'OUT-OF-PLANE DISCONTINUITY'],
    explanation: 'A soft story irregularity occurs when story stiffness is < 70% of the adjacent story or < 80% of average of 3 stories above.'
  },
  {
    id: 29,
    area: 'PSAD',
    subtopic: 'Seismic Engineering & NSCP Provisions',
    difficulty: 'Medium',
    question: 'Point within a structure through which the resultant lateral inertial seismic force acts.',
    answer: 'CENTER OF MASS',
    choices: ['CENTER OF RIGIDITY', 'CENTER OF GRAVITY', 'CENTER OF MASS', 'SHEAR CENTER'],
    explanation: 'The center of mass represents the centroid of physical mass distribution where inertial forces originate.'
  },
  {
    id: 30,
    area: 'PSAD',
    subtopic: 'Seismic Engineering & NSCP Provisions',
    difficulty: 'Medium',
    question: 'Point on a floor diaphragm where applied lateral shear forces will produce translation without rotation.',
    answer: 'CENTER OF RIGIDITY',
    choices: ['CENTER OF MASS', 'SHEAR CENTER', 'CENTER OF RIGIDITY', 'CENTROID OF LOAD'],
    explanation: 'The center of rigidity is the stiffness centroid of the lateral force resisting elements.'
  },
  {
    id: 31,
    area: 'PSAD',
    subtopic: 'Construction Materials & Testing',
    difficulty: 'Medium',
    question: 'The deleterious chemical degradation of concrete resulting from reactions between active amorphous silica in aggregates and alkalis (Na2O, K2O) in cement paste is:',
    answer: 'ALKALI-SILICA REACTION (ASR)',
    choices: [
      'SULFATE ATTACK',
      'CARBONATION INDUCED CORROSION',
      'ALKALI-SILICA REACTION (ASR)',
      'CALCIUM LEACHING'
    ],
    explanation: 'ASR forms an expansive alkali-silicate gel that imbibes moisture, exerts high osmotic pressure, and causes map cracking.'
  },
  {
    id: 32,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Hard',
    question: 'According to NSCP 2015 and National Design Specification (NDS) provisions, the slenderness ratio (Le / d) of solid wood compression columns must not exceed:',
    answer: '50',
    choices: ['30', '50', '80', '120'],
    explanation: 'To prevent excessive geometric instability and lateral bending in structural timber columns, Le/d is limited to 50.'
  },
  {
    id: 33,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Hard',
    question: 'In structural steel member design, the Effective Length Factor K for a column with both ends fixed against rotation and translation is:',
    answer: '0.50 (THEORETICAL) / 0.65 (RECOMMENDED)',
    choices: ['1.0', '0.70', '0.50 (THEORETICAL) / 0.65 (RECOMMENDED)', '2.0'],
    explanation: 'A fixed-fixed compression column has theoretical inflection points at L/4 from each end, yielding K = 0.50.'
  },
  {
    id: 34,
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Medium',
    question: 'The point on a beam cross-section where transverse shear loads cause pure bending without twisting.',
    answer: 'SHEAR CENTER',
    choices: ['CENTROID', 'NEUTRAL AXIS', 'SHEAR CENTER', 'PLASTIC HINGE'],
    explanation: 'For asymmetrical sections (like channels), loads applied outside the shear center induce torsional twisting.'
  },
  {
    id: 35,
    area: 'PSAD',
    subtopic: 'Construction Materials & Testing',
    difficulty: 'Easy',
    question: 'The white powdery deposit that appears on concrete and masonry surfaces caused by soluble salts leaching through water.',
    answer: 'EFFLORESCENCE',
    choices: ['LAITANCE', 'EFFLORESCENCE', 'SCALING', 'SLUMP'],
    explanation: 'Efflorescence occurs when calcium hydroxide reacts with atmospheric CO2 at the surface to form calcium carbonate.'
  },
  {
    id: 36,
    area: 'PSAD',
    subtopic: 'Structural Mechanics & Statics',
    difficulty: 'Medium',
    question: 'Single force that produces the exact same translational and rotational effect as a concurrent coplanar force system.',
    answer: 'RESULTANT FORCE',
    choices: ['EQUILIBRANT', 'COUPLE', 'RESULTANT FORCE', 'MOMENT ARM'],
    explanation: 'The resultant vector R = ΣF determines whether a system remains in equilibrium or undergoes acceleration.'
  },
  {
    id: 37,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Hard',
    question: 'In prestressed concrete design, loss of prestress over time caused by the relaxation of tendon steel under high tension is:',
    answer: 'STRESS RELAXATION',
    choices: ['ELASTIC SHORTENING', 'CREEP OF CONCRETE', 'STRESS RELAXATION', 'FRICTION LOSS'],
    explanation: 'Steel relaxation is the gradual reduction of stress in high-strength strands held at constant strain.'
  },
  {
    id: 38,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'A thin layer of weak, powdery mortar that accumulates on the surface of over-vibrated or overly wet concrete.',
    answer: 'LAITANCE',
    choices: ['BLEEDING', 'LAITANCE', 'SEGREGATION', 'HONEYCOMB'],
    explanation: 'Laitance forms from excess water and fine cement particles rising to the top, creating a weak surface zone.'
  },
  {
    id: 39,
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    question: 'Voids left in concrete where mortar failed to completely fill spaces around coarse aggregate particles.',
    answer: 'HONEYCOMBING',
    choices: ['SPALLING', 'HONEYCOMBING', 'BLISTERING', 'CRAZING'],
    explanation: 'Honeycombing results from poor compaction, congested rebar cages, or segregation during concrete placement.'
  },
  {
    id: 40,
    area: 'PSAD',
    subtopic: 'Construction Materials & Testing',
    difficulty: 'Medium',
    question: 'Chemical degradation where external soluble sulfates in soils or groundwater react with hydrated calcium aluminate (C3A) in Portland cement to form expansive:',
    answer: 'ETTRINGITE AND THAUMASITE',
    choices: [
      'PORTLANDITE AND SILICA',
      'ETTRINGITE AND THAUMASITE',
      'CALCIUM SILICATE HYDRATE (C-S-H)',
      'CALCIUM CARBONATE PRECIPITATE'
    ],
    explanation: 'Expansion caused by secondary ettringite crystal growth leads to surface scaling, cracking, and loss of concrete cohesive strength (mitigated by Type V cement).'
  }
];
