import { CEQuestion } from '../types';

/**
 * Authentic Board Examination Questions & Terminologies
 * Extracted and compiled from the official PRC Civil Engineering Licensure Examination
 * Table of Specifications (TOS), syllabi, and board review modules for PSAD, HPGE, and MSTE.
 * 
 * Total terms: 171 comprehensive, authentic, non-repeated terminologies.
 */
export const PDF_TOS_QUESTIONS: CEQuestion[] = [
  {
    "id": 501,
    "area": "PSAD",
    "subtopic": "Reinforced Concrete & Prestressed Design",
    "difficulty": "Medium",
    "question": "The minimum embedment length of a reinforcing bar required to develop its design yield strength without pullout failure in concrete.",
    "answer": "DEVELOPMENT LENGTH",
    "choices": [
      "DEVELOPMENT LENGTH",
      "SPLICE OVERLAP",
      "ANCHORAGE RADIUS",
      "BOND GAP"
    ],
    "explanation": "Development length (ld) provides sufficient mechanical bond and interlock to transfer the full yield stress fy from the rebar into surrounding concrete (NSCP 2015 Sec. 425).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 502,
    "area": "PSAD",
    "subtopic": "Structural Mechanics & Statics",
    "difficulty": "Hard",
    "question": "A localized yielding zone in a structural flexural member where large inelastic rotations take place under a constant or near-constant plastic moment.",
    "answer": "PLASTIC HINGE",
    "choices": [
      "ELASTIC KNEE",
      "PLASTIC HINGE",
      "SHEAR PIN",
      "YIELD SEAM"
    ],
    "explanation": "A plastic hinge develops when the cross-section reaches its fully plastic moment capacity (Mp), allowing redistribution of moments in statically indeterminate structures.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 503,
    "area": "PSAD",
    "subtopic": "Structural Steel & Timber Design",
    "difficulty": "Hard",
    "question": "An out-of-plane instability failure mode of unbraced beams in bending where the compression flange buckles sideways while the section twists.",
    "answer": "LATERAL-TORSIONAL BUCKLING",
    "choices": [
      "LOCAL FLANGE CRIPPLING",
      "LATERAL-TORSIONAL BUCKLING",
      "WEB SHEAR YIELDING",
      "FLEXURAL RUPTURE"
    ],
    "explanation": "Lateral-torsional buckling (LTB) occurs in flexural members when unsupported compressive flange length Lb exceeds the limiting unbraced length Lp (AISC 360 / NSCP 2015).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 504,
    "area": "PSAD",
    "subtopic": "Seismic Engineering & NSCP Provisions",
    "difficulty": "Hard",
    "question": "An earthquake engineering technique that decouples a superstructure from horizontal ground vibrations using flexible elastomeric or sliding bearings.",
    "answer": "BASE ISOLATION",
    "choices": [
      "TUNED MASS DAMPING",
      "MOMENT RESISTANCE",
      "BASE ISOLATION",
      "SHEAR WALL COUPLING"
    ],
    "explanation": "Base isolation drastically lengthens the fundamental natural period of the building, shifting it away from the dominant high-frequency destructive seismic ground energy.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 505,
    "area": "PSAD",
    "subtopic": "Structural Mechanics & Statics",
    "difficulty": "Medium",
    "question": "The classical moment distribution method invented in 1930 for analyzing continuous beams and rigid frames by successively relaxing joints.",
    "answer": "HARDY CROSS METHOD",
    "choices": [
      "CASTIGLIANO METHOD",
      "HARDY CROSS METHOD",
      "NEWMARK METHOD",
      "SOUTHWELL METHOD"
    ],
    "explanation": "The Hardy Cross moment distribution method distributes fixed-end unbalanced moments according to member relative stiffnesses until joint equilibrium is satisfied.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 506,
    "area": "PSAD",
    "subtopic": "Structural Mechanics & Statics",
    "difficulty": "Medium",
    "question": "In moment distribution analysis of prismatic flexural members with far end fixed, the fraction of applied moment transmitted to the opposite support.",
    "answer": "CARRY-OVER FACTOR",
    "choices": [
      "DISTRIBUTION FACTOR",
      "CARRY-OVER FACTOR",
      "ROTATIONAL RATIO",
      "STIFFNESS MODIFIER"
    ],
    "explanation": "For a uniform prismatic beam with a far fixed end, the carry-over factor (COF) is exactly +1/2 (+0.50).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 507,
    "area": "PSAD",
    "subtopic": "Strength of Materials & Mechanics of Deformable Bodies",
    "difficulty": "Hard",
    "question": "Energy theorem stating that the partial derivative of total strain energy with respect to an applied concentrated force gives the deflection at that point in the direction of the force.",
    "answer": "CASTIGLIANO'S FIRST THEOREM",
    "choices": [
      "CASTIGLIANO'S FIRST THEOREM",
      "CASTIGLIANO'S SECOND THEOREM",
      "ENGESSER THEOREM",
      "CROTTI THEOREM"
    ],
    "explanation": "Castigliano's theorems apply energy methods to compute deflections, rotations, and redundant reactions in elastic linear structural frameworks.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 508,
    "area": "PSAD",
    "subtopic": "Reinforced Concrete & Prestressed Design",
    "difficulty": "Medium",
    "question": "The equivalent rectangular concrete compressive stress distribution model replacing parabolic stress curves, with uniform intensity 0.85 fc and depth a = beta1 * c.",
    "answer": "WHITNEY STRESS BLOCK",
    "choices": [
      "RANKINE STRESS PRISM",
      "WHITNEY STRESS BLOCK",
      "HOGNESTAD CURVE",
      "PARABOLIC-RECTANGULAR PRISM"
    ],
    "explanation": "Proposed by Charles S. Whitney and codified in ACI 318 / NSCP 2015, the equivalent rectangular stress block simplifies flexural capacity calculations.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 509,
    "area": "PSAD",
    "subtopic": "Reinforced Concrete & Prestressed Design",
    "difficulty": "Medium",
    "question": "In ultimate strength design of reinforced concrete beams, the theoretical tension reinforcement ratio at which concrete reaches crushing strain 0.003 simultaneously as steel yields.",
    "answer": "BALANCED STEEL RATIO",
    "choices": [
      "MODULAR REBAR RATIO",
      "BALANCED STEEL RATIO",
      "CRITICAL YIELD RATIO",
      "MAXIMUM CODE PERCENTAGE"
    ],
    "explanation": "The balanced reinforcement ratio (ρb) marks the transition boundary between ductile tension failure and brittle sudden compression concrete crushing.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 510,
    "area": "PSAD",
    "subtopic": "Reinforced Concrete & Prestressed Design",
    "difficulty": "Medium",
    "question": "A reinforced concrete flexural member design condition where net tensile strain in extreme tension rebar is at least 0.005 at nominal strength, ensuring ductile warning.",
    "answer": "TENSION-CONTROLLED SECTION",
    "choices": [
      "COMPRESSION-CONTROLLED SECTION",
      "TENSION-CONTROLLED SECTION",
      "BALANCED CROSS-SECTION",
      "TRANSITION FLEXURAL SECTION"
    ],
    "explanation": "Under NSCP 2015 Section 421, tension-controlled members have εt ≥ 0.005, permitting the maximum strength reduction factor φ = 0.90.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 511,
    "area": "PSAD",
    "subtopic": "Structural Steel & Timber Design",
    "difficulty": "Hard",
    "question": "A limit state in bolted steel connections where a chunk of the material tears out along both a tension plane and an intersecting shear plane.",
    "answer": "BLOCK SHEAR RUPTURE",
    "choices": [
      "BEARING YIELDING",
      "BLOCK SHEAR RUPTURE",
      "GROSS SECTION TEAR",
      "PULL-THROUGH SHEAR"
    ],
    "explanation": "Block shear rupture strength Rn = 0.60*Fu*Anv + Ubs*Fu*Ant ≤ 0.60*Fy*Agv + Ubs*Fu*Ant governs gusset plates, coped beam webs, and angle tension members (AISC 360 / NSCP 2015).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 512,
    "area": "PSAD",
    "subtopic": "Strength of Materials & Mechanics of Deformable Bodies",
    "difficulty": "Medium",
    "question": "The elastic modulus relating shear stress to shear strain in a material, also known as the modulus of rigidity.",
    "answer": "SHEAR MODULUS",
    "choices": [
      "BULK MODULUS",
      "SHEAR MODULUS",
      "YOUNG'S MODULUS",
      "SECANT MODULUS"
    ],
    "explanation": "Shear modulus G = E / [2*(1 + ν)] measures the material stiffness against torsional deformation and angular shear distortion.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 513,
    "area": "PSAD",
    "subtopic": "Strength of Materials & Mechanics of Deformable Bodies",
    "difficulty": "Medium",
    "question": "A graphical two-dimensional circle representation of normal and shear stresses acting on any inclined plane through a stressed point.",
    "answer": "MOHR'S CIRCLE",
    "choices": [
      "MOHR'S CIRCLE",
      "CREMONA DIAGRAM",
      "WILLIOT-HERSCHEL DIAGRAM",
      "YIELD ELLIPSOID"
    ],
    "explanation": "Developed by Christian Otto Mohr, Mohr's circle displays normal stress σ on the abscissa and shear stress τ on the ordinate, identifying principal planes.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 514,
    "area": "PSAD",
    "subtopic": "Strength of Materials & Mechanics of Deformable Bodies",
    "difficulty": "Medium",
    "question": "Planes within a stressed structural element on which shear stresses are identically zero and normal stresses reach maximum and minimum values.",
    "answer": "PRINCIPAL PLANES",
    "choices": [
      "OCTAHEDRAL PLANES",
      "PRINCIPAL PLANES",
      "SLIP BANDS",
      "NEUTRAL SURFACES"
    ],
    "explanation": "Principal planes are mutually perpendicular; the normal stresses acting on them are termed principal stresses (σ1, σ2).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 515,
    "area": "PSAD",
    "subtopic": "Strength of Materials & Mechanics of Deformable Bodies",
    "difficulty": "Hard",
    "question": "The theoretical flexural tensile stress at which an unreinforced concrete beam experiences first cracking in a standard rupture test.",
    "answer": "MODULUS OF RUPTURE",
    "choices": [
      "MODULUS OF ELASTICITY",
      "MODULUS OF RUPTURE",
      "COMPRESSIVE PEAK",
      "TENSILE TOUGHNESS"
    ],
    "explanation": "Under NSCP 2015 Section 419.2.3, the modulus of rupture for normal-weight concrete is fr = 0.62 * λ * √f'c (in MPa).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 516,
    "area": "PSAD",
    "subtopic": "Structural Steel & Timber Design",
    "difficulty": "Medium",
    "question": "In slender column stability analysis, the geometric distance from the cross-sectional centroidal axis to a point where all area could theoretically be concentrated with identical moment of inertia.",
    "answer": "RADIUS OF GYRATION",
    "choices": [
      "ECCENTRICITY RADIUS",
      "RADIUS OF GYRATION",
      "SECTIONAL RADIAN",
      "EQUIVALENT DIAMETER"
    ],
    "explanation": "Radius of gyration r = √(I / A) is used directly in calculating column slenderness ratio KL/r.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 517,
    "area": "PSAD",
    "subtopic": "Structural Steel & Timber Design",
    "difficulty": "Hard",
    "question": "In timber mechanics, the specific moisture content (typically 25% to 30%) at which all free water in cell cavities has evaporated while cell walls remain completely saturated.",
    "answer": "FIBER SATURATION POINT",
    "choices": [
      "EQUILIBRIUM MOISTURE POINT",
      "FIBER SATURATION POINT",
      "SWELLING LIMIT",
      "HYGROSCOPIC BOUNDARY"
    ],
    "explanation": "Above the fiber saturation point (FSP), timber strength and dimensions remain constant; below FSP, drying causes shrinkage and increased structural strength.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 518,
    "area": "PSAD",
    "subtopic": "Seismic Engineering & NSCP Provisions",
    "difficulty": "Medium",
    "question": "A building structural irregularity defined by NSCP 2015 when the lateral stiffness of a story is less than 70% of that in the story immediately above.",
    "answer": "SOFT STORY IRREGULARITY",
    "choices": [
      "WEAK STORY IRREGULARITY",
      "SOFT STORY IRREGULARITY",
      "TORSIONAL IRREGULARITY",
      "RE-ENTRANT CORNER"
    ],
    "explanation": "Soft stories (Type 1 vertical irregularity) concentrate seismic lateral drift and collapse risk, requiring dynamic lateral response analysis.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 519,
    "area": "PSAD",
    "subtopic": "Seismic Engineering & NSCP Provisions",
    "difficulty": "Medium",
    "question": "A vertical structural irregularity where the story lateral strength is less than 80% of that of the story immediately above.",
    "answer": "WEAK STORY IRREGULARITY",
    "choices": [
      "SOFT STORY IRREGULARITY",
      "WEAK STORY IRREGULARITY",
      "DISCONTINUOUS SHEAR IRREGULARITY",
      "IN-PLANE OFFSET"
    ],
    "explanation": "Weak stories (Type 5 vertical irregularity) under NSCP Section 208.4.5 are prohibited in structures over 2 stories or 9 meters in height in Zone 4.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 520,
    "area": "PSAD",
    "subtopic": "Seismic Engineering & NSCP Provisions",
    "difficulty": "Medium",
    "question": "The structural system performance factor (R) that reduces elastic seismic base shear forces to account for inherent framing ductility, damping, and overstrength.",
    "answer": "RESPONSE MODIFICATION FACTOR",
    "choices": [
      "IMPORTANCE COEFFICIENT",
      "RESPONSE MODIFICATION FACTOR",
      "SEISMIC INTENSITY FACTOR",
      "NEAR-SOURCE AMPLIFIER"
    ],
    "explanation": "Special Moment Resisting Frames (SMRF) have R = 8.5 under NSCP 2015, whereas ordinary moment frames have lower R values due to limited ductility.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 521,
    "area": "PSAD",
    "subtopic": "Reinforced Concrete & Prestressed Design",
    "difficulty": "Hard",
    "question": "In prestressed concrete design, a tendon trajectory profile that produces zero secondary parasitic hyperstatic moments in continuous prestressed beams.",
    "answer": "CONCORDANT TENDON PROFILE",
    "choices": [
      "CONCORDANT TENDON PROFILE",
      "PARABOLIC CATENARY",
      "TRANSFORMATION PROFILE",
      "EQUILIBRIUM TRAJECTORY"
    ],
    "explanation": "A concordant tendon profile creates line of pressure (C-line) that coincides exactly with the tendon center of gravity without secondary hyperstatic support reactions.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 522,
    "area": "PSAD",
    "subtopic": "Reinforced Concrete & Prestressed Design",
    "difficulty": "Hard",
    "question": "The central geometric region of a structural cross-section within which an applied compressive load produces only compressive stresses across the entire cross-section without tension.",
    "answer": "KERN OF A SECTION",
    "choices": [
      "CENTROIDAL ELLIPSE",
      "KERN OF A SECTION",
      "SHEAR CORE",
      "MOMENT ENVELOPE"
    ],
    "explanation": "For a rectangular cross-section of width b and depth h, the kern is a diamond region with dimensions b/3 and h/3 (the middle-third rule).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 523,
    "area": "PSAD",
    "subtopic": "Construction Materials & Testing",
    "difficulty": "Easy",
    "question": "Standard ASTM C143 test measuring the consistency and workability of freshly mixed Portland cement concrete using a truncated conical mold.",
    "answer": "SLUMP TEST",
    "choices": [
      "SLUMP TEST",
      "VEBE TEST",
      "FLOW TABLE TEST",
      "PENETRATION TEST"
    ],
    "explanation": "The slump cone (300 mm high, 200 mm base diameter, 100 mm top diameter) measures true, zero, shear, or collapse slump to ensure concrete placement workability.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 524,
    "area": "PSAD",
    "subtopic": "Construction Materials & Testing",
    "difficulty": "Easy",
    "question": "ASTM standard test procedure for evaluating the resistance of coarse aggregate to abrasion, degradation, and impact using a rotating steel drum and steel balls.",
    "answer": "LOS ANGELES ABRASION TEST",
    "choices": [
      "LOS ANGELES ABRASION TEST",
      "DEVAL TEST",
      "DORRY ABRASION TEST",
      "MICRO-DEVAL TEST"
    ],
    "explanation": "ASTM C131 (Los Angeles Machine) assesses aggregate durability for highway concrete and asphalt wearing surfaces (typically max 40% loss).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 525,
    "area": "PSAD",
    "subtopic": "Strength of Materials & Mechanics of Deformable Bodies",
    "difficulty": "Medium",
    "question": "The circumferential tensile stress induced in the cylindrical shell of a thin-walled pressure vessel subjected to internal fluid pressure.",
    "answer": "HOOP STRESS",
    "choices": [
      "LONGITUDINAL STRESS",
      "HOOP STRESS",
      "RADIAL STRESS",
      "TORSIONAL SHEAR"
    ],
    "explanation": "Hoop stress (circumferential stress) is given by σh = p * D / (2 * t), which is exactly twice the longitudinal stress σL = p * D / (4 * t).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 526,
    "area": "PSAD",
    "subtopic": "Strength of Materials & Mechanics of Deformable Bodies",
    "difficulty": "Hard",
    "question": "The product of modulus of elasticity (E) and moment of inertia (I), representing a structural flexural member resistance to bending deformation.",
    "answer": "FLEXURAL RIGIDITY",
    "choices": [
      "TORSIONAL RIGIDITY",
      "AXIAL STIFFNESS",
      "FLEXURAL RIGIDITY",
      "PLASTIC MODULUS"
    ],
    "explanation": "Flexural rigidity (EI) appears in the Euler-Bernoulli beam differential equation d²y/dx² = M / (EI).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 527,
    "area": "PSAD",
    "subtopic": "Strength of Materials & Mechanics of Deformable Bodies",
    "difficulty": "Medium",
    "question": "The highest stress on a material stress-strain curve up to which deformation remains strictly linear and Hooke’s law applies: sigma = E * epsilon.",
    "answer": "PROPORTIONAL LIMIT",
    "choices": [
      "ELASTIC LIMIT",
      "PROPORTIONAL LIMIT",
      "YIELD POINT",
      "ULTIMATE STRENGTH"
    ],
    "explanation": "The proportional limit marks the upper boundary of linear elastic behavior where stress is directly proportional to strain (Hooke's Law).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 528,
    "area": "PSAD",
    "subtopic": "Strength of Materials & Mechanics of Deformable Bodies",
    "difficulty": "Medium",
    "question": "The maximum stress that a structural material can withstand without undergoing any permanent residual plastic deformation upon complete unloading.",
    "answer": "ELASTIC LIMIT",
    "choices": [
      "PROPORTIONAL LIMIT",
      "ELASTIC LIMIT",
      "YIELD POINT",
      "RUPTURE STRENGTH"
    ],
    "explanation": "Beyond the elastic limit, a material sustains permanent irreversible set or plastic strain.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 529,
    "area": "PSAD",
    "subtopic": "Strength of Materials & Mechanics of Deformable Bodies",
    "difficulty": "Medium",
    "question": "The point on a stress-strain curve where a material exhibits a noticeable increase in strain without any corresponding increase in applied stress.",
    "answer": "YIELD POINT",
    "choices": [
      "PROPORTIONAL LIMIT",
      "YIELD POINT",
      "BREAKING POINT",
      "NECKING THRESHOLD"
    ],
    "explanation": "Mild structural carbon steel displays a distinct upper and lower yield point, beyond which plastic yielding occurs.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 530,
    "area": "PSAD",
    "subtopic": "Strength of Materials & Mechanics of Deformable Bodies",
    "difficulty": "Hard",
    "question": "Thermal stress developed in a homogeneous structural member when temperature changes by delta_T while longitudinal expansion or contraction is completely restrained: sigma = E * alpha * delta_T.",
    "answer": "THERMAL STRESS",
    "choices": [
      "RESIDUAL STRESS",
      "THERMAL STRESS",
      "CONFINEMENT PRESSURE",
      "CREEP RELAXATION"
    ],
    "explanation": "When thermal expansion or contraction is prevented, temperature change induces axial thermal stress equal to E * α * ΔT.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 531,
    "area": "PSAD",
    "subtopic": "Strength of Materials & Mechanics of Deformable Bodies",
    "difficulty": "Medium",
    "question": "The ratio of the moment of inertia (I) of a beam cross-section about its neutral axis to the distance (c) from the neutral axis to the extreme fiber: S = I / c.",
    "answer": "SECTION MODULUS",
    "choices": [
      "PLASTIC MODULUS",
      "SECTION MODULUS",
      "RADIUS OF GYRATION",
      "TORSIONAL CONSTANT"
    ],
    "explanation": "Elastic section modulus S relates maximum bending moment M to maximum flexural stress fb = M / S (Navier’s flexural formula).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 532,
    "area": "PSAD",
    "subtopic": "Strength of Materials & Mechanics of Deformable Bodies",
    "difficulty": "Medium",
    "question": "The geometric property of a shaft cross-section measuring its resistance to torsional twist about its longitudinal axis: J = integral of rho^2 dA.",
    "answer": "POLAR MOMENT OF INERTIA",
    "choices": [
      "FIRST MOMENT OF AREA",
      "POLAR MOMENT OF INERTIA",
      "PRODUCT OF INERTIA",
      "WARPING CONSTANT"
    ],
    "explanation": "For a solid circular shaft of diameter D, polar moment of inertia J = π * D⁴ / 32, which appears in torsion formula τ = T * r / J.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 533,
    "area": "PSAD",
    "subtopic": "Structural Mechanics & Statics",
    "difficulty": "Medium",
    "question": "The ratio of the number of unknown reaction and internal member forces to the available equations of static equilibrium, indicating degree of redundant forces.",
    "answer": "DEGREE OF STATIC INDETERMINACY",
    "choices": [
      "KINEMATIC DEGREES OF FREEDOM",
      "DEGREE OF STATIC INDETERMINACY",
      "STABILITY FACTOR",
      "REDUNDANCY COEFFICIENT"
    ],
    "explanation": "For a planar frame, degree of indeterminacy is 3m + r - 3j; if positive, member forces cannot be determined by static equilibrium equations alone.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 534,
    "area": "PSAD",
    "subtopic": "Structural Mechanics & Statics",
    "difficulty": "Hard",
    "question": "In structural analysis of indeterminate beams, an imaginary beam of the same span whose load is the M/(EI) diagram of the real beam, where shear gives real slope and moment gives real deflection.",
    "answer": "CONJUGATE BEAM METHOD",
    "choices": [
      "VIRTUAL WORK METHOD",
      "CONJUGATE BEAM METHOD",
      "SLOPE-DEFLECTION METHOD",
      "COLUMN ANALOGY METHOD"
    ],
    "explanation": "Developed by Heinrich Müller-Breslau and Christian Otto Mohr, conjugate beam boundaries transform pinned supports to pinned and fixed supports to free.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 535,
    "area": "PSAD",
    "subtopic": "Reinforced Concrete & Prestressed Design",
    "difficulty": "Medium",
    "question": "The dimensionless ratio of the modulus of elasticity of reinforcing steel to the modulus of elasticity of concrete: n = Es / Ec.",
    "answer": "MODULAR RATIO",
    "choices": [
      "STIFFNESS RATIO",
      "MODULAR RATIO",
      "EQUIVALENT REBAR RATIO",
      "HOMOGENIZING FACTOR"
    ],
    "explanation": "Under Working Stress Design (WSD), modular ratio n transforms concrete cross-sectional areas into equivalent steel areas.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 536,
    "area": "PSAD",
    "subtopic": "Reinforced Concrete & Prestressed Design",
    "difficulty": "Hard",
    "question": "The theoretical ratio of the plastic section modulus (Z) to the elastic section modulus (S) of a structural beam cross-section, which equals 1.5 for a solid rectangle.",
    "answer": "SHAPE FACTOR",
    "choices": [
      "PLASTIC EFFICIENCY FACTOR",
      "SHAPE FACTOR",
      "DUCTILITY RATIO",
      "MODULUS RATIO"
    ],
    "explanation": "Shape factor (Mp / My = Z / S) reflects the reserve flexural capacity of a section between initial yielding and full plastic hinge formation (typically 1.10 to 1.15 for I-beams).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 537,
    "area": "PSAD",
    "subtopic": "Reinforced Concrete & Prestressed Design",
    "difficulty": "Medium",
    "question": "In prestressed concrete, the gradual loss of prestressing tendon tension over time resulting from the long-term time-dependent sustained compressive deformation of concrete under stress.",
    "answer": "CREEP LOSS",
    "choices": [
      "SHRINKAGE LOSS",
      "CREEP LOSS",
      "RELAXATION LOSS",
      "ELASTIC SHORTENING"
    ],
    "explanation": "Concrete creep under sustained prestress continues for years, causing prestress force losses calculated under PCI and AASHTO design guidelines.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 538,
    "area": "PSAD",
    "subtopic": "Reinforced Concrete & Prestressed Design",
    "difficulty": "Hard",
    "question": "The time-dependent loss of tensile stress in a prestressing steel strand held at a constant elongation strain over an extended duration.",
    "answer": "RELAXATION LOSS",
    "choices": [
      "WOBBLE LOSS",
      "RELAXATION LOSS",
      "ANCHORAGE DRAW",
      "FRICTIONAL DRAG"
    ],
    "explanation": "Steel relaxation occurs at high stress levels (above 0.50 fpu); low-relaxation strands (ASTM A416) are specified to minimize this loss.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 539,
    "area": "PSAD",
    "subtopic": "Structural Steel & Timber Design",
    "difficulty": "Hard",
    "question": "In post-tensioned prestressed concrete, unintentional accidental horizontal or vertical wobble/deviation of tendon duct alignment along the span.",
    "answer": "WOBBLE EFFECT",
    "choices": [
      "CURVATURE DRAG",
      "WOBBLE EFFECT",
      "CREEP EXCURSION",
      "TOLERANCE DRIFT"
    ],
    "explanation": "Tendon friction loss includes both intentional curvature friction (μ * α) and unintentional duct wobble friction (K * L).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 540,
    "area": "PSAD",
    "subtopic": "Structural Steel & Timber Design",
    "difficulty": "Medium",
    "question": "The theoretical effective throat thickness (te) of an equal-leg fillet weld of leg size w with a 45-degree face: te = 0.707 * w.",
    "answer": "EFFECTIVE THROAT",
    "choices": [
      "ROOT PENETRATION",
      "EFFECTIVE THROAT",
      "FUSION PROFILE",
      "SHEAR LEG DEPTH"
    ],
    "explanation": "Fillet weld design is governed by shear along the minimum theoretical throat dimension equal to w * sin(45°) = 0.707 * w (AISC 360 / NSCP 2015).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 541,
    "area": "PSAD",
    "subtopic": "Structural Steel & Timber Design",
    "difficulty": "Medium",
    "question": "A structural timber design adjustment factor (CD) that increases allowable timber stresses for short-duration loadings such as wind or seismic loads (CD = 1.60).",
    "answer": "LOAD DURATION FACTOR",
    "choices": [
      "REPETITIVE MEMBER FACTOR",
      "LOAD DURATION FACTOR",
      "WET SERVICE FACTOR",
      "TEMPERATURE COEFFICIENT"
    ],
    "explanation": "Wood can withstand significantly higher stresses under rapid short-duration loads than under permanent sustained dead loads (National Design Specification / NSCP).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 542,
    "area": "PSAD",
    "subtopic": "Seismic Engineering & NSCP Provisions",
    "difficulty": "Hard",
    "question": "A building seismic framing system incorporating diagonal steel braces that contain a steel core yielding in both tension and compression without buckling, surrounded by a concrete-filled steel casing.",
    "answer": "BUCKLING-RESTRAINED BRACED FRAME",
    "choices": [
      "ECCENTRICALLY BRACED FRAME",
      "BUCKLING-RESTRAINED BRACED FRAME",
      "MOMENT RESISTING TRUSS",
      "OUTRIGGER SPIDER FRAME"
    ],
    "explanation": "Buckling-Restrained Braced Frames (BRBF) exhibit stable, symmetric, hysteretic energy dissipation during major earthquakes without brace buckling degradation.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 543,
    "area": "PSAD",
    "subtopic": "Seismic Engineering & NSCP Provisions",
    "difficulty": "Hard",
    "question": "A dynamic vibration absorber mounted at the upper stories of tall buildings consisting of a large suspended mass connected via springs and dampers tuned to match the building natural frequency.",
    "answer": "TUNED MASS DAMPER",
    "choices": [
      "VISCOUS DAMPER BRACE",
      "TUNED MASS DAMPER",
      "SHEAR FRICTION WALL",
      "SLOSHING BAFFLE"
    ],
    "explanation": "Tuned Mass Dampers (TMD), such as the 660-tonne pendulum in Taipei 101, counteract wind oscillations and seismic swaying.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 544,
    "area": "PSAD",
    "subtopic": "Construction Materials & Testing",
    "difficulty": "Medium",
    "question": "ASTM standard apparatus using a weighted needle with a 1.0 mm diameter tip to determine the initial and final setting times of hydraulic cement paste.",
    "answer": "VICAT APPARATUS",
    "choices": [
      "GILMORE NEEDLES",
      "VICAT APPARATUS",
      "LE CHATELIER FLASK",
      "BLAINE AIR PERMEABILITY"
    ],
    "explanation": "The Vicat needle test (ASTM C191) measures the penetration depth into cement paste to establish when setting begins and completes.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 545,
    "area": "PSAD",
    "subtopic": "Construction Materials & Testing",
    "difficulty": "Medium",
    "question": "ASTM standard fineness testing apparatus that measures the specific surface area of dry Portland cement powder in square centimeters per gram using air airflow resistance.",
    "answer": "BLAINE AIR PERMEABILITY APPARATUS",
    "choices": [
      "WAGNER TURBIDIMETER",
      "BLAINE AIR PERMEABILITY APPARATUS",
      "SIEVE NO 200",
      "SEDIMENTATION HYDROMETER"
    ],
    "explanation": "ASTM C204 uses the Blaine air permeability apparatus to evaluate cement fineness (minimum 2800 cm²/g for Type I Portland cement).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 546,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Medium",
    "question": "The theoretical point of intersection of the vertical line of action of the buoyant force through the tilted center of buoyancy with the original vertical center line of a floating vessel.",
    "answer": "METACENTER",
    "choices": [
      "HYDROCENTROID",
      "METACENTER",
      "KEEL REFERENCE",
      "FLOTATION APEX"
    ],
    "explanation": "A floating vessel is in stable equilibrium when the metacenter M is located above its center of gravity G (positive metacentric height GM > 0).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 547,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Medium",
    "question": "The distance between the center of gravity (G) and metacenter (M) of a floating vessel, which serves as the primary index of initial static stability.",
    "answer": "METACENTRIC HEIGHT",
    "choices": [
      "BUOYANCY LEVER",
      "METACENTRIC HEIGHT",
      "DRAFT DEPTH",
      "FREEBOARD CLEARANCE"
    ],
    "explanation": "Metacentric height GM = MB ± GB, where MB is the metacentric radius (I / V_displaced) and GB is distance between centers of gravity and buoyancy.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 548,
    "area": "HPGE",
    "subtopic": "Fluid Dynamics & Energy/Continuity",
    "difficulty": "Medium",
    "question": "In fluid mechanics, a graphical line representing the sum of piezometric head and velocity head (p/gamma + z + v^2/2g) along a pipeline or conduit.",
    "answer": "ENERGY GRADE LINE",
    "choices": [
      "HYDRAULIC GRADE LINE",
      "ENERGY GRADE LINE",
      "PIEZOMETRIC DATUM",
      "POTENTIAL ENERGY PROFILE"
    ],
    "explanation": "The Energy Grade Line (EGL) is always higher than the Hydraulic Grade Line (HGL) by the velocity head quantity v² / (2g).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 549,
    "area": "HPGE",
    "subtopic": "Fluid Dynamics & Energy/Continuity",
    "difficulty": "Medium",
    "question": "A graphical profile representing total piezometric head (elevation head plus pressure head, z + p/gamma) along a flowing fluid system.",
    "answer": "HYDRAULIC GRADE LINE",
    "choices": [
      "ENERGY GRADE LINE",
      "HYDRAULIC GRADE LINE",
      "TOTAL ENERGY PROFILE",
      "SURFACE SLOPE LINE"
    ],
    "explanation": "The Hydraulic Grade Line (HGL) represents the height to which liquid would rise in an open vertical piezometer tube.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 550,
    "area": "HPGE",
    "subtopic": "Fluid Dynamics & Energy/Continuity",
    "difficulty": "Easy",
    "question": "A classic fluid flow theorem stating that velocity of efflux of an ideal liquid through a small orifice under head h equals the velocity of a body falling freely from height h: v = sqrt(2gh).",
    "answer": "TORRICELLI'S LAW",
    "choices": [
      "BERNOULLI'S PRINCIPLE",
      "TORRICELLI'S LAW",
      "PASCAL'S LAW",
      "STOKES' LAW"
    ],
    "explanation": "Torricelli's theorem (1643) derives directly from Bernoulli's equation by neglecting viscous head loss and assuming atmosphere pressure at liquid surface and orifice jet.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 551,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Medium",
    "question": "Dimensionless parameter in open channel hydraulics defined as the ratio of flow velocity to the speed of a shallow gravity wave: Fr = v / sqrt(g * D).",
    "answer": "FROUDE NUMBER",
    "choices": [
      "REYNOLDS NUMBER",
      "FROUDE NUMBER",
      "MACH NUMBER",
      "WEBER NUMBER"
    ],
    "explanation": "Flow is subcritical when Fr < 1, critical when Fr = 1, and supercritical (shooting flow) when Fr > 1.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 552,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Hard",
    "question": "The water depth in an open channel cross-section at which total specific energy (E = y + v^2/2g) reaches an absolute minimum for a given volumetric discharge.",
    "answer": "CRITICAL DEPTH",
    "choices": [
      "NORMAL DEPTH",
      "CRITICAL DEPTH",
      "SEQUENT DEPTH",
      "ALTERNATE DEPTH"
    ],
    "explanation": "At critical depth yc = (q² / g)^(1/3) for rectangular channels, the Froude number equals exactly 1.0 and specific energy is minimized.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 553,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Medium",
    "question": "A sharp-crested trapezoidal weir whose side slopes are inclined 1 horizontal to 4 vertical to automatically compensate for side contractions.",
    "answer": "CIPOLLETTI WEIR",
    "choices": [
      "SUTRO WEIR",
      "CIPOLLETTI WEIR",
      "FRANCIS WEIR",
      "THOMSON WEIR"
    ],
    "explanation": "Designed by Cesare Cipolletti, the 1:4 side slope creates triangular end adjustments that balance the end contractions of a rectangular weir, yielding Q = 1.86 * L * H^(3/2).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 554,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Hard",
    "question": "A destructive hydraulic surge phenomenon occurring in closed conduits when a valve is suddenly closed, converting fluid kinetic energy into severe elastic pressure shock waves.",
    "answer": "WATER HAMMER",
    "choices": [
      "HYDRAULIC COUPLING",
      "WATER HAMMER",
      "CAVITATION BURST",
      "SLOSHING RESONANCE"
    ],
    "explanation": "Water hammer pressure surge ΔP = ρ * c * Δv (Joukowsky equation) can burst pipelines unless mitigated by surge tanks, air chambers, or slow closure.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 555,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Medium",
    "question": "A vertical open surge reservoir or standpipe installed along a high-pressure penstock or pipeline to absorb pressure shock waves and supply water during sudden valve operations.",
    "answer": "SURGE TANK",
    "choices": [
      "AIR RELEASE VALVE",
      "SURGE TANK",
      "EXPANSION BELLOWS",
      "CHECK BASIN"
    ],
    "explanation": "Surge tanks relieve water hammer pressures by converting rapid acoustic kinetic surges into gentle water level oscillations.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 556,
    "area": "HPGE",
    "subtopic": "Hydrology, Coastal & Harbor Engineering",
    "difficulty": "Easy",
    "question": "The classic empirical hydrology formula estimating peak surface runoff discharge from small urban or rural catchments: Q = C * I * A.",
    "answer": "RATIONAL METHOD",
    "choices": [
      "SCS CURVE METHOD",
      "RATIONAL METHOD",
      "SNYDER METHOD",
      "MUSKINGUM EQUATION"
    ],
    "explanation": "The Rational Formula Q = C*I*A (or Q = 0.278*C*I*A in SI) calculates peak flow using runoff coefficient C, rainfall intensity I, and catchment area A.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 557,
    "area": "HPGE",
    "subtopic": "Hydrology, Coastal & Harbor Engineering",
    "difficulty": "Medium",
    "question": "The time required for stormwater surface runoff to travel from the most hydrologically remote point of a watershed to the catchment outlet or design point.",
    "answer": "TIME OF CONCENTRATION",
    "choices": [
      "LAG INTERVAL",
      "TIME OF CONCENTRATION",
      "PEAK RUNOFF TIME",
      "RECESSION DURATION"
    ],
    "explanation": "Time of concentration (tc) governs the design rainfall duration; at t = tc, the entire catchment area is contributing runoff to the outlet.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 558,
    "area": "HPGE",
    "subtopic": "Hydrology, Coastal & Harbor Engineering",
    "difficulty": "Hard",
    "question": "A direct surface runoff hydrograph resulting from one unit (e.g., 1 mm or 1 inch) of excess rainfall generated uniformly over a watershed at a constant rate for a specified duration.",
    "answer": "UNIT HYDROGRAPH",
    "choices": [
      "SYNTHETIC FLOODGRAM",
      "UNIT HYDROGRAPH",
      "BASEFLOW RATING",
      "ISOHYETAL GRAPH"
    ],
    "explanation": "Developed by LeRoy Sherman in 1932, the Unit Hydrograph is the cornerstone of rainfall-to-runoff flood estimation for ungauged and gauged basins.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 559,
    "area": "HPGE",
    "subtopic": "Soil Classification, Compaction & Permeability",
    "difficulty": "Medium",
    "question": "The numerical difference between the Liquid Limit (LL) and Plastic Limit (PL) of a fine-grained cohesive soil: PI = LL - PL.",
    "answer": "PLASTICITY INDEX",
    "choices": [
      "LIQUIDITY INDEX",
      "PLASTICITY INDEX",
      "CONSISTENCY INDEX",
      "ACTIVITY COEFFICIENT"
    ],
    "explanation": "Plasticity Index (PI) measures the range of water content over which the soil exhibits plastic behavioral traits (Atterberg limits).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 560,
    "area": "HPGE",
    "subtopic": "Soil Classification, Compaction & Permeability",
    "difficulty": "Medium",
    "question": "Ratio of the plasticity index to the percentage of clay-sized particles (finer than 0.002 mm) by weight, indicating the mineral swelling potential of clay.",
    "answer": "ACTIVITY OF CLAY",
    "choices": [
      "SWELL RATIO",
      "ACTIVITY OF CLAY",
      "EXPANSIVE INDEX",
      "THIXOTROPY INDEX"
    ],
    "explanation": "Defined by Skempton, Activity A = PI / (% < 2 μm); clays with A > 1.25 (such as sodium montmorillonite) are highly active and expansive.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 561,
    "area": "HPGE",
    "subtopic": "Soil Classification, Compaction & Permeability",
    "difficulty": "Medium",
    "question": "In grain size analysis of granular soils, the ratio of D60 to D10 representing the spread of grain sizes across the gradation curve.",
    "answer": "COEFFICIENT OF UNIFORMITY",
    "choices": [
      "COEFFICIENT OF CURVATURE",
      "COEFFICIENT OF UNIFORMITY",
      "SORTING COEFFICIENT",
      "FINENESS MODULUS"
    ],
    "explanation": "Coefficient of uniformity Cu = D60 / D10; a sand is well-graded (SW) if Cu ≥ 6 and a gravel is well-graded (GW) if Cu ≥ 4.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 562,
    "area": "HPGE",
    "subtopic": "Soil Classification, Compaction & Permeability",
    "difficulty": "Medium",
    "question": "The moisture content at which a compacted soil achieves its maximum dry unit weight under a standardized compaction energy.",
    "answer": "OPTIMUM MOISTURE CONTENT",
    "choices": [
      "SATURATION LIMIT",
      "OPTIMUM MOISTURE CONTENT",
      "PLASTIC THRESHOLD",
      "HYGROSCOPIC CONTENT"
    ],
    "explanation": "In Standard or Modified Proctor testing (ASTM D698 / D1557), dry density peaks at the Optimum Moisture Content (OMC).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 563,
    "area": "HPGE",
    "subtopic": "Soil Classification, Compaction & Permeability",
    "difficulty": "Hard",
    "question": "A severe boiling or quick condition in cohesionless saturated soils where upward seepage drag forces equal the submerged unit weight of soil, reducing effective stress to zero.",
    "answer": "QUICK CONDITION",
    "choices": [
      "SOIL SLAKING",
      "QUICK CONDITION",
      "DESICCATION",
      "CREEP CONVERGENCE"
    ],
    "explanation": "Quick condition (quicksand) occurs at the critical hydraulic gradient icr = (Gs - 1) / (1 + e), causing total loss of shear strength.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 564,
    "area": "HPGE",
    "subtopic": "Soil Classification, Compaction & Permeability",
    "difficulty": "Medium",
    "question": "A graphical grid composed of intersecting flow lines and equipotential lines used to calculate seepage discharge and pore water pressure distributions under hydraulic structures.",
    "answer": "FLOW NET",
    "choices": [
      "MOLLIER DIAGRAM",
      "FLOW NET",
      "CONTOUR GRID",
      "STREAMLINE WEB"
    ],
    "explanation": "Flow nets satisfy Laplace equation for 2D steady seepage; total seepage discharge is q = k * H * (Nf / Nd).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 565,
    "area": "HPGE",
    "subtopic": "Consolidation, Shear Strength & Bearing Capacity",
    "difficulty": "Hard",
    "question": "Fundamental principle of soil mechanics formulated by Karl Terzaghi stating that all measurable effects of loading on soil are caused by changes in effective stress: sigma_eff = sigma_total - u.",
    "answer": "EFFECTIVE STRESS PRINCIPLE",
    "choices": [
      "TOTAL STRESS LAW",
      "EFFECTIVE STRESS PRINCIPLE",
      "COULOMB'S LAW",
      "DARCY'S POSTULATE"
    ],
    "explanation": "Terzaghi's effective stress principle (1925) explains that soil compression, distortion, and shear strength depend solely on intergranular skeletal effective stress σ'.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 566,
    "area": "HPGE",
    "subtopic": "Consolidation, Shear Strength & Bearing Capacity",
    "difficulty": "Hard",
    "question": "The maximum past effective overburden pressure to which a geological soil layer has ever been subjected in its geological history.",
    "answer": "PRECONSOLIDATION PRESSURE",
    "choices": [
      "COLLAPSE PRESSURE",
      "PRECONSOLIDATION PRESSURE",
      "CRITICAL GEOSTATIC STRESS",
      "AT-REST EQUILIBRIUM"
    ],
    "explanation": "Preconsolidation pressure (σc') is determined from an e-log σ' consolidation curve using Casagrande's graphical construction method.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 567,
    "area": "HPGE",
    "subtopic": "Consolidation, Shear Strength & Bearing Capacity",
    "difficulty": "Medium",
    "question": "The ratio of the preconsolidation pressure to the current existing in-situ effective overburden pressure: OCR = sigma_c / sigma_0.",
    "answer": "OVERCONSOLIDATION RATIO",
    "choices": [
      "CONSOLIDATION INDEX",
      "OVERCONSOLIDATION RATIO",
      "STIFFNESS RATIO",
      "SWELLING COEFFICIENT"
    ],
    "explanation": "Soil is normally consolidated if OCR = 1.0, and overconsolidated if OCR > 1.0 (indicating greater strength and lower settlement).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 568,
    "area": "HPGE",
    "subtopic": "Consolidation, Shear Strength & Bearing Capacity",
    "difficulty": "Hard",
    "question": "In one-dimensional consolidation theory, the slope of the virgin loading portion of the void ratio versus logarithm of effective stress curve: Cc = delta_e / delta_log(sigma).",
    "answer": "COMPRESSION INDEX",
    "choices": [
      "SWELLING INDEX",
      "COMPRESSION INDEX",
      "RECOMPRESSION FACTOR",
      "COEFFICIENT OF VOLUME CHANGE"
    ],
    "explanation": "Compression index (Cc) directly controls primary consolidation settlement calculations: Sc = [Cc * H / (1 + e0)] * log[(σ0 + Δσ)/σ0].",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 569,
    "area": "HPGE",
    "subtopic": "Consolidation, Shear Strength & Bearing Capacity",
    "difficulty": "Hard",
    "question": "A triaxial laboratory shear test where the soil specimen is completely consolidated under all-around confining pressure, followed by shearing under undrained conditions with pore pressure measurement.",
    "answer": "CONSOLIDATED-UNDRAINED TEST",
    "choices": [
      "UNCONSOLIDATED-UNDRAINED TEST",
      "CONSOLIDATED-UNDRAINED TEST",
      "CONSOLIDATED-DRAINED TEST",
      "VANE ROTATION TEST"
    ],
    "explanation": "The CU triaxial test (ASTM D4767) provides both total stress parameters and effective stress parameters (c', φ') along with Skempton pore pressure parameters.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 570,
    "area": "HPGE",
    "subtopic": "Consolidation, Shear Strength & Bearing Capacity",
    "difficulty": "Medium",
    "question": "In-situ geotechnical field shear test using a four-bladed vane rotated in soft saturated cohesive soil to measure undisturbed and remolded undrained shear strength.",
    "answer": "VANE SHEAR TEST",
    "choices": [
      "STANDARD PENETRATION TEST",
      "VANE SHEAR TEST",
      "CONE PENETROMETER",
      "PRESSUREMETER TEST"
    ],
    "explanation": "The field vane shear test (ASTM D2573) is particularly reliable for soft clays where extracting undisturbed laboratory samples causes disturbance.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 571,
    "area": "HPGE",
    "subtopic": "Foundations, Retaining Walls & Slope Stability",
    "difficulty": "Medium",
    "question": "The minimum coefficient of lateral earth pressure occurring when a retaining wall yields or moves outward away from the backfill soil mass.",
    "answer": "ACTIVE EARTH PRESSURE COEFFICIENT",
    "choices": [
      "PASSIVE PRESSURE COEFFICIENT",
      "ACTIVE EARTH PRESSURE COEFFICIENT",
      "AT-REST EARTH COEFFICIENT",
      "SURCHARGE PRESSURE FACTOR"
    ],
    "explanation": "Rankine active coefficient Ka = (1 - sin φ) / (1 + sin φ) = tan²(45° - φ/2).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 572,
    "area": "HPGE",
    "subtopic": "Foundations, Retaining Walls & Slope Stability",
    "difficulty": "Medium",
    "question": "The maximum lateral earth resistance developed when a retaining structure is pushed inward horizontally against a soil mass.",
    "answer": "PASSIVE EARTH PRESSURE COEFFICIENT",
    "choices": [
      "ACTIVE EARTH COEFFICIENT",
      "PASSIVE EARTH PRESSURE COEFFICIENT",
      "HYDROSTATIC COEFFICIENT",
      "ANCHOR FORCE MULTIPLIER"
    ],
    "explanation": "Rankine passive earth pressure coefficient Kp = (1 + sin φ) / (1 - sin φ) = tan²(45° + φ/2).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 573,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Easy",
    "question": "Fundamental law of fluid statics stating that pressure applied to an enclosed static fluid is transmitted undiminished in all directions throughout the fluid.",
    "answer": "PASCAL'S PRINCIPLE",
    "choices": [
      "ARCHIMEDES' PRINCIPLE",
      "PASCAL'S PRINCIPLE",
      "BERNOULLI'S THEOREM",
      "HOOKE'S LAW"
    ],
    "explanation": "Discovered by Blaise Pascal in 1653, Pascal's principle governs hydraulic jacks, vehicle brakes, and hydrostatic presses.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 574,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Easy",
    "question": "Fundamental hydrostatic principle stating that a body immersed wholly or partly in a fluid is buoyed up by a force equal to the weight of the fluid displaced by the body.",
    "answer": "ARCHIMEDES' PRINCIPLE",
    "choices": [
      "PASCAL'S LAW",
      "ARCHIMEDES' PRINCIPLE",
      "EULER'S BUOYANCY THEOREM",
      "NEWTON'S THIRD LAW"
    ],
    "explanation": "Archimedes' principle establishes that buoyant force Fb = γ_fluid * V_displaced acting through the center of buoyancy.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 575,
    "area": "HPGE",
    "subtopic": "Fluid Statics & Buoyancy",
    "difficulty": "Medium",
    "question": "The geometric centroid of the submerged volume of a floating or submerged body, through which the resultant upward buoyant force acts.",
    "answer": "CENTER OF BUOYANCY",
    "choices": [
      "CENTER OF MASS",
      "CENTER OF BUOYANCY",
      "METACENTER",
      "CENTER OF FLOTATION"
    ],
    "explanation": "When a vessel lists or tilts, the center of buoyancy shifts toward the immersed side, creating a righting moment.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 576,
    "area": "HPGE",
    "subtopic": "Fluid Dynamics & Energy/Continuity",
    "difficulty": "Easy",
    "question": "Fundamental fluid principle expressing conservation of mass in steady fluid flow through a conduit: Q = A1 * v1 = A2 * v2 = constant.",
    "answer": "CONTINUITY EQUATION",
    "choices": [
      "MOMENTUM EQUATION",
      "CONTINUITY EQUATION",
      "BERNOULLI EQUATION",
      "ENERGY CONSERVATION"
    ],
    "explanation": "For incompressible fluids, continuity states that volumetric discharge Q remains identical at every cross-section of a stream tube.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 577,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Medium",
    "question": "Dimensionless ratio of fluid inertial forces to viscous forces used to determine whether pipe flow is laminar, transitional, or turbulent: Re = rho * v * D / mu.",
    "answer": "REYNOLDS NUMBER",
    "choices": [
      "FROUDE NUMBER",
      "REYNOLDS NUMBER",
      "PRANDTL NUMBER",
      "WEBER NUMBER"
    ],
    "explanation": "Introduced by Osborne Reynolds (1883), flow in circular pipes is laminar when Re < 2000 and fully turbulent when Re > 4000.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 578,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Medium",
    "question": "The fundamental theoretical pipe friction head loss equation expressing head loss as a function of friction factor f, length L, diameter D, and velocity v: hf = f * (L / D) * (v^2 / 2g).",
    "answer": "DARCY-WEISBACH EQUATION",
    "choices": [
      "HAZEN-WILLIAMS FORMULA",
      "DARCY-WEISBACH EQUATION",
      "MANNING EQUATION",
      "CHEZY FORMULA"
    ],
    "explanation": "The Darcy-Weisbach equation applies universally to all fluids and flow regimes in pipes when friction factor f is determined from the Moody diagram.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 579,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Hard",
    "question": "Theoretical laminar pipe flow equation relating volumetric flow rate directly to the fourth power of pipe radius and inversely to dynamic viscosity: Q = pi * delta_P * r^4 / (8 * mu * L).",
    "answer": "HAGEN-POISEUILLE EQUATION",
    "choices": [
      "STOKES EQUATION",
      "HAGEN-POISEUILLE EQUATION",
      "COLEBROOK FORMULA",
      "NAVIER EQUATION"
    ],
    "explanation": "Derived independently by Gotthilf Hagen and Jean Poiseuille, it describes laminar viscous flow where friction factor f = 64 / Re.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 580,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Medium",
    "question": "An empirical formula widely used in water supply network engineering for calculating pipe head loss due to friction, utilizing roughness coefficient C: v = 0.849 * C * R^0.63 * S^0.54.",
    "answer": "HAZEN-WILLIAMS FORMULA",
    "choices": [
      "DARCY-WEISBACH FORMULA",
      "HAZEN-WILLIAMS FORMULA",
      "MANNING FORMULA",
      "PRANDTL-KARMAN FORMULA"
    ],
    "explanation": "The Hazen-Williams formula is designed specifically for water flow at ordinary temperatures in pipes larger than 50 mm diameter.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 581,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Easy",
    "question": "The ratio of cross-sectional flow area (A) to wetted perimeter (P) of an open channel or non-full conduit: R = A / P.",
    "answer": "HYDRAULIC RADIUS",
    "choices": [
      "HYDRAULIC DEPTH",
      "HYDRAULIC RADIUS",
      "WETTED DIAMETER",
      "EQUIVALENT DIAMETER"
    ],
    "explanation": "Hydraulic radius R measures the efficiency of a channel cross-section in resisting frictional drag against boundary surfaces.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 582,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Easy",
    "question": "The length of the line of contact between the flowing fluid and the solid boundary of an open channel or closed conduit cross-section.",
    "answer": "WETTED PERIMETER",
    "choices": [
      "HYDRAULIC RADIUS",
      "WETTED PERIMETER",
      "CHANNEL SPREAD",
      "TOP BOUNDARY"
    ],
    "explanation": "Wetted perimeter P represents the surface boundary generating shear resistance against the flowing fluid.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 583,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Medium",
    "question": "A 90-degree triangular sharp-crested weir particularly suitable for measuring very low discharge rates accurately: Q = 1.4 * H^(5/2).",
    "answer": "V-NOTCH WEIR",
    "choices": [
      "RECTANGULAR FRANCIS WEIR",
      "V-NOTCH WEIR",
      "CIPOLLETTI WEIR",
      "BROAD-CRESTED WEIR"
    ],
    "explanation": "The V-notch (triangular Thomson) weir maintains a geometric shape proportional to depth, ensuring high measurement precision across small discharge ranges.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 584,
    "area": "HPGE",
    "subtopic": "Open Channels, Weirs & Pipe Flow",
    "difficulty": "Hard",
    "question": "In hydraulic machinery, the total suction head margin available above liquid vapor pressure to prevent boiling and bubble collapse inside a centrifugal pump.",
    "answer": "NET POSITIVE SUCTION HEAD",
    "choices": [
      "STATIC SUCTION LIFT",
      "NET POSITIVE SUCTION HEAD",
      "PRIMING MARGIN",
      "CAVITATION INDEX"
    ],
    "explanation": "To prevent cavitation damage in centrifugal pumps, available Net Positive Suction Head (NPSHa) must exceed the pump manufacturer required NPSHr.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 585,
    "area": "HPGE",
    "subtopic": "Hydrology, Coastal & Harbor Engineering",
    "difficulty": "Medium",
    "question": "A graphical hydrological weighting method that computes mean basin rainfall by constructing perpendicular bisectors between adjacent rain gauge stations.",
    "answer": "THIESSEN POLYGON METHOD",
    "choices": [
      "ISOHYETAL METHOD",
      "THIESSEN POLYGON METHOD",
      "ARITHMETIC MEAN METHOD",
      "HYPSOMETRIC METHOD"
    ],
    "explanation": "Developed by Alfred Thiessen, polygons define areas of influence around each gauge station to compute weighted average watershed precipitation.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 586,
    "area": "HPGE",
    "subtopic": "Hydrology, Coastal & Harbor Engineering",
    "difficulty": "Medium",
    "question": "An advanced hydrological method for computing mean areal basin precipitation using contour lines of equal rainfall depth.",
    "answer": "ISOHYETAL METHOD",
    "choices": [
      "THIESSEN METHOD",
      "ISOHYETAL METHOD",
      "CHOROPLETH METHOD",
      "RECIPROCAL DISTANCE METHOD"
    ],
    "explanation": "Isohyets are lines connecting points of equal rainfall; this method is the most accurate as it accounts for topographic and orographic effects.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 587,
    "area": "HPGE",
    "subtopic": "Soil Physical Properties & Phase Relationships",
    "difficulty": "Easy",
    "question": "The ratio of the weight of water contained in a soil specimen to the oven-dried weight of the solid soil particles: w = Ww / Ws.",
    "answer": "MOISTURE CONTENT",
    "choices": [
      "DEGREE OF SATURATION",
      "MOISTURE CONTENT",
      "VOID RATIO",
      "SPECIFIC RETENTION"
    ],
    "explanation": "Moisture content (water content w) is determined in the laboratory by oven drying soil at 105°C - 110°C (ASTM D2216).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 588,
    "area": "HPGE",
    "subtopic": "Soil Physical Properties & Phase Relationships",
    "difficulty": "Easy",
    "question": "The weight of solid soil mineral matter per unit of total bulk soil volume: gamma_d = Ws / V.",
    "answer": "DRY UNIT WEIGHT",
    "choices": [
      "TOTAL BULK DENSITY",
      "DRY UNIT WEIGHT",
      "SATURATED DENSITY",
      "BUOYANT UNIT WEIGHT"
    ],
    "explanation": "Dry unit weight γd = γ / (1 + w) is the primary density metric used to verify field compaction quality control.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 589,
    "area": "HPGE",
    "subtopic": "Soil Physical Properties & Phase Relationships",
    "difficulty": "Medium",
    "question": "The effective submerged unit weight of soil when completely immersed below the groundwater table: gamma_sub = gamma_sat - gamma_water.",
    "answer": "BUOYANT UNIT WEIGHT",
    "choices": [
      "DRY DENSITY",
      "BUOYANT UNIT WEIGHT",
      "TOTAL BULK WEIGHT",
      "SWELLING DENSITY"
    ],
    "explanation": "Buoyant unit weight γ' (submerged unit weight) accounts for the upward Archimedean buoyant force reducing intergranular contact pressures.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 590,
    "area": "HPGE",
    "subtopic": "Soil Physical Properties & Phase Relationships",
    "difficulty": "Medium",
    "question": "A dimensionless index evaluating the compaction state of a cohesionless granular soil relative to its loosest (emax) and densest (emin) states: Dr = (emax - e) / (emax - emin).",
    "answer": "RELATIVE DENSITY",
    "choices": [
      "DEGREE OF COMPACTION",
      "RELATIVE DENSITY",
      "SPECIFIC GRAVITY",
      "PACKING FACTOR"
    ],
    "explanation": "Relative density (Dr) characterizes sand deposits: very loose (<15%), loose (15-35%), medium (35-65%), dense (65-85%), and very dense (>85%).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 591,
    "area": "HPGE",
    "subtopic": "Soil Classification, Compaction & Permeability",
    "difficulty": "Easy",
    "question": "The moisture content threshold defining the boundary between the liquid state and plastic state of a fine-grained cohesive soil (measured with Casagrande cup).",
    "answer": "LIQUID LIMIT",
    "choices": [
      "PLASTIC LIMIT",
      "LIQUID LIMIT",
      "SHRINKAGE LIMIT",
      "FLOW THRESHOLD"
    ],
    "explanation": "The Liquid Limit (LL) corresponds to the water content at which a trapezoidal groove cut in soil closes along 12.7 mm after 25 standard blows.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 592,
    "area": "HPGE",
    "subtopic": "Soil Classification, Compaction & Permeability",
    "difficulty": "Easy",
    "question": "The moisture content threshold below which soil crumbles when rolled into threads 3.2 mm (1/8 inch) in diameter.",
    "answer": "PLASTIC LIMIT",
    "choices": [
      "LIQUID LIMIT",
      "PLASTIC LIMIT",
      "SHRINKAGE LIMIT",
      "CRUMBLING LIMIT"
    ],
    "explanation": "The Plastic Limit (PL) marks the lower moisture limit of plastic consistency (ASTM D4318).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 593,
    "area": "HPGE",
    "subtopic": "Soil Classification, Compaction & Permeability",
    "difficulty": "Medium",
    "question": "The moisture content below which any further loss of water does not cause any decrease in the volume of the soil mass.",
    "answer": "SHRINKAGE LIMIT",
    "choices": [
      "PLASTIC LIMIT",
      "SHRINKAGE LIMIT",
      "HYGROSCOPIC LIMIT",
      "MINIMUM POROSITY"
    ],
    "explanation": "Below the Shrinkage Limit (SL), water is replaced by air in the voids without further soil shrinkage.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 594,
    "area": "HPGE",
    "subtopic": "Soil Classification, Compaction & Permeability",
    "difficulty": "Medium",
    "question": "The ratio of the difference between natural water content and plastic limit to the plasticity index: LI = (w - PL) / PI.",
    "answer": "LIQUIDITY INDEX",
    "choices": [
      "CONSISTENCY INDEX",
      "LIQUIDITY INDEX",
      "ACTIVITY COEFFICIENT",
      "PLASTIC FRACTION"
    ],
    "explanation": "Liquidity Index LI < 0 indicates hard, brittle soil; 0 < LI < 1 indicates plastic state; and LI > 1 indicates sensitive soil susceptible to liquefaction upon shear.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 595,
    "area": "HPGE",
    "subtopic": "Soil Classification, Compaction & Permeability",
    "difficulty": "Medium",
    "question": "Standard ASTM field sand displacement method used to determine the in-situ dry density and degree of compaction of compacted earth fills.",
    "answer": "SAND CONE METHOD",
    "choices": [
      "RUBBER BALLOON TEST",
      "SAND CONE METHOD",
      "NUCLEAR GAUGE",
      "CORE CUTTER TEST"
    ],
    "explanation": "ASTM D1556 (Sand Cone Method) uses calibrated Ottawa sand to determine test hole volume and field compaction percentage.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 596,
    "area": "HPGE",
    "subtopic": "Soil Classification, Compaction & Permeability",
    "difficulty": "Hard",
    "question": "Fundamental soil permeability law stating that apparent discharge velocity of water through porous soil is directly proportional to the hydraulic gradient: v = k * i.",
    "answer": "DARCY'S LAW",
    "choices": [
      "POISEUILLE'S LAW",
      "DARCY'S LAW",
      "BERNOULLI'S PRINCIPLE",
      "TERZAGHI'S LAW"
    ],
    "explanation": "Formulated by Henry Darcy (1856), Darcy's Law v = k * i governs 1D laminar flow through porous media, where k is hydraulic conductivity.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 597,
    "area": "HPGE",
    "subtopic": "Consolidation, Shear Strength & Bearing Capacity",
    "difficulty": "Medium",
    "question": "Classical soil failure envelope equation stating that the shear strength of a soil consists of cohesive bond strength plus frictional sliding resistance: tau_f = c + sigma * tan(phi).",
    "answer": "MOHR-COULOMB FAILURE CRITERION",
    "choices": [
      "TRESCA CRITERION",
      "MOHR-COULOMB FAILURE CRITERION",
      "VON MISES CRITERION",
      "DRUCKER-PRAGER CRITERION"
    ],
    "explanation": "The Mohr-Coulomb failure criterion describes soil shear strength as a function of cohesion (c) and angle of internal friction (φ).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 598,
    "area": "HPGE",
    "subtopic": "Consolidation, Shear Strength & Bearing Capacity",
    "difficulty": "Medium",
    "question": "The laboratory test measuring the unconfined compressive strength (qu) of a cylindrical cohesive soil specimen subjected to axial loading without lateral confinement.",
    "answer": "UNCONFINED COMPRESSION TEST",
    "choices": [
      "DIRECT SHEAR TEST",
      "UNCONFINED COMPRESSION TEST",
      "BRAZILIAN SPLIT TEST",
      "TRIAXIAL DRAINED TEST"
    ],
    "explanation": "For saturated clays under undrained conditions, unconfined compressive strength qu = 2 * cu, where cu is undrained shear strength (ASTM D2166).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 599,
    "area": "HPGE",
    "subtopic": "Consolidation, Shear Strength & Bearing Capacity",
    "difficulty": "Hard",
    "question": "The property of certain fine-grained cohesive soils of losing shear strength upon remolding or disturbance and gradually regaining strength over time when left undisturbed at constant water content.",
    "answer": "THIXOTROPY",
    "choices": [
      "DILATANCY",
      "THIXOTROPY",
      "ELASTIC REBOUND",
      "LIQUEFACTION"
    ],
    "explanation": "Thixotropic regain of strength is caused by the gradual realignment and physicochemical re-attraction of clay platelets after disturbance.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 600,
    "area": "HPGE",
    "subtopic": "Foundations, Retaining Walls & Slope Stability",
    "difficulty": "Hard",
    "question": "The foundational ultimate bearing capacity equation for shallow strip footings formulated by Karl Terzaghi: qu = c * Nc + q * Nq + 0.5 * gamma * B * Ngamma.",
    "answer": "TERZAGHI'S BEARING CAPACITY EQUATION",
    "choices": [
      "MEYERHOF'S EQUATION",
      "TERZAGHI'S BEARING CAPACITY EQUATION",
      "VESIC'S FORMULA",
      "HANSEN'S THEOREM"
    ],
    "explanation": "Terzaghi’s bearing capacity equation (1943) calculates ultimate bearing capacity using non-dimensional factors Nc, Nq, and Nγ as functions of soil friction angle.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 601,
    "area": "HPGE",
    "subtopic": "Foundations, Retaining Walls & Slope Stability",
    "difficulty": "Hard",
    "question": "In geotechnical slope stability analysis of circular slip surfaces, a widely used limit equilibrium slice method that satisfies vertical force equilibrium and overall moment equilibrium.",
    "answer": "BISHOP'S SIMPLIFIED METHOD",
    "choices": [
      "ORDINARY SLICES METHOD",
      "BISHOP'S SIMPLIFIED METHOD",
      "JANBU RIGOROUS METHOD",
      "MORGENSTERN-PRICE METHOD"
    ],
    "explanation": "Bishop's simplified method provides accurate factors of safety for circular failure surfaces by considering interslice normal forces.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 602,
    "area": "MSTE",
    "subtopic": "Engineering Mathematics & Geometry",
    "difficulty": "Medium",
    "question": "A sequence of numbers whose reciprocals form an arithmetic progression (e.g., 1/2, 1/4, 1/6, 1/8).",
    "answer": "HARMONIC PROGRESSION",
    "choices": [
      "GEOMETRIC PROGRESSION",
      "HARMONIC PROGRESSION",
      "FIBONACCI SEQUENCE",
      "ARITHMETIC SERIES"
    ],
    "explanation": "If a, b, c are in harmonic progression, then 1/a, 1/b, 1/c are in arithmetic progression and b = 2ac / (a + c).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 603,
    "area": "MSTE",
    "subtopic": "Engineering Mathematics & Geometry",
    "difficulty": "Medium",
    "question": "Calculus rule for evaluating indeterminate limits of the form 0/0 or infinity/infinity by differentiating the numerator and denominator independently.",
    "answer": "L'HÔPITAL'S RULE",
    "choices": [
      "TAYLOR'S THEOREM",
      "L'HÔPITAL'S RULE",
      "MACLAURIN'S EXPANSION",
      "EULER'S IDENTITY"
    ],
    "explanation": "Named after Guillaume de l'Hôpital, the rule states that lim[f(x)/g(x)] = lim[f'(x)/g'(x)] provided the limit exists.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 604,
    "area": "MSTE",
    "subtopic": "Engineering Mathematics & Geometry",
    "difficulty": "Medium",
    "question": "A point on a smooth curve where the concavity changes from concave upward to concave downward (or vice versa), where d^2y/dx^2 = 0.",
    "answer": "POINT OF INFLECTION",
    "choices": [
      "SADDLE POINT",
      "POINT OF INFLECTION",
      "CRITICAL VERTEX",
      "CUSP SINGULARITY"
    ],
    "explanation": "At an inflection point, the second derivative of the function changes sign and the tangent line crosses through the curve.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 605,
    "area": "MSTE",
    "subtopic": "Engineering Mathematics & Geometry",
    "difficulty": "Hard",
    "question": "Geometric theorem stating that the volume of a solid of revolution generated by revolving a plane area about an external axis equals the area multiplied by the distance traveled by its centroid.",
    "answer": "PAPPUS-GULDURINUS THEOREM",
    "choices": [
      "CAUCHY'S RESIDUE THEOREM",
      "PAPPUS-GULDURINUS THEOREM",
      "GREEN'S THEOREM",
      "STOKES' THEOREM"
    ],
    "explanation": "The First Theorem of Pappus gives surface area A * (2π * y_bar) and the Second Theorem gives volume V = Area * (2π * y_bar).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 606,
    "area": "MSTE",
    "subtopic": "Project Management, CPM/PERT & Equipment Economics",
    "difficulty": "Medium",
    "question": "In engineering economics, the constant rate of interest which, when compounded once per year, yields the exact same annual total return as a nominal rate compounded m times per year.",
    "answer": "EFFECTIVE ANNUAL RATE",
    "choices": [
      "NOMINAL DISCOUNT RATE",
      "EFFECTIVE ANNUAL RATE",
      "INTERNAL RETURN RATE",
      "CONTINUOUS BASE RATE"
    ],
    "explanation": "Effective annual interest rate is given by ieff = (1 + r/m)^m - 1.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 607,
    "area": "MSTE",
    "subtopic": "Project Management, CPM/PERT & Equipment Economics",
    "difficulty": "Medium",
    "question": "A uniform series of equal payments made at the end of each consecutive compounding period for a specified duration.",
    "answer": "ORDINARY ANNUITY",
    "choices": [
      "ANNUITY DUE",
      "ORDINARY ANNUITY",
      "DEFERRED ANNUITY",
      "PERPETUITY"
    ],
    "explanation": "In an ordinary annuity, payments occur at the end of periods; in an annuity due, payments occur at the beginning of each period.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 608,
    "area": "MSTE",
    "subtopic": "Project Management, CPM/PERT & Equipment Economics",
    "difficulty": "Medium",
    "question": "An annuity whose periodic cash flows continue indefinitely forever into the future without an ending date.",
    "answer": "PERPETUITY",
    "choices": [
      "AMORTIZED LOAN",
      "PERPETUITY",
      "SINKING BOND",
      "BALLOON CONTRACT"
    ],
    "explanation": "The present value of a uniform perpetuity is simply P = A / i, where A is the periodic payment and i is the interest rate.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 609,
    "area": "MSTE",
    "subtopic": "Project Management, CPM/PERT & Equipment Economics",
    "difficulty": "Medium",
    "question": "The present worth of a long-term engineering asset or public works project that is assumed to provide service perpetually, including initial cost and perpetual renewals.",
    "answer": "CAPITALIZED COST",
    "choices": [
      "NET SALVAGE VALUE",
      "CAPITALIZED COST",
      "BOOK VALUE PROFILE",
      "EQUIVALENT UNIFORM COST"
    ],
    "explanation": "Capitalized Cost CC = First Cost + (Annual O&M) / i + Replacement Cost / [(1+i)^k - 1].",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 610,
    "area": "MSTE",
    "subtopic": "Project Management, CPM/PERT & Equipment Economics",
    "difficulty": "Medium",
    "question": "A fund formed by periodically setting aside equal cash sums at compound interest to accumulate a predetermined amount to replace an asset at the end of its useful life.",
    "answer": "SINKING FUND",
    "choices": [
      "ESCROW RESERVE",
      "SINKING FUND",
      "REVOLVING CREDIT",
      "DEPRECIATION SURPLUS"
    ],
    "explanation": "The sinking fund factor [i / ((1+i)^n - 1)] calculates the periodic uniform deposit required to yield a future target sum F.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 611,
    "area": "MSTE",
    "subtopic": "Project Management, CPM/PERT & Equipment Economics",
    "difficulty": "Medium",
    "question": "An accelerated depreciation method where the depreciation fraction in year m has denominator equal to the sum of the digits from 1 to useful life n.",
    "answer": "SUM-OF-THE-YEARS-DIGITS METHOD",
    "choices": [
      "STRAIGHT LINE METHOD",
      "SUM-OF-THE-YEARS-DIGITS METHOD",
      "DECLINING BALANCE METHOD",
      "SERVICE OUTPUT METHOD"
    ],
    "explanation": "SOYD depreciation charges higher depreciation during earlier asset years, with denominator sum S = n*(n + 1)/2.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 612,
    "area": "MSTE",
    "subtopic": "Project Management, CPM/PERT & Equipment Economics",
    "difficulty": "Medium",
    "question": "The discount interest rate at which the present value of all cash inflows equals exactly the present value of all cash outflows (Net Present Value = 0).",
    "answer": "INTERNAL RATE OF RETURN",
    "choices": [
      "MINIMUM ATTRACTIVE RATE",
      "INTERNAL RATE OF RETURN",
      "BENEFIT-COST QUOTIENT",
      "RETURN ON EQUITY"
    ],
    "explanation": "Internal Rate of Return (IRR) evaluates project financial feasibility; an investment is acceptable if IRR ≥ MARR (Minimum Attractive Rate of Return).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 613,
    "area": "MSTE",
    "subtopic": "Project Management, CPM/PERT & Equipment Economics",
    "difficulty": "Easy",
    "question": "The production sales volume or operational capacity at which total project revenues exactly equal total combined fixed and variable costs.",
    "answer": "BREAKEVEN POINT",
    "choices": [
      "PAYBACK THRESHOLD",
      "BREAKEVEN POINT",
      "MARGIN OF SAFETY",
      "PROFIT RATIO LIMIT"
    ],
    "explanation": "At the breakeven point Q = Fixed Costs / (Price per Unit - Variable Cost per Unit), net operational profit is zero.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 614,
    "area": "MSTE",
    "subtopic": "Surveying, Leveling & Errors",
    "difficulty": "Easy",
    "question": "In pacing and reconnaissance field surveying, the ratio of a known measured distance to the number of paces taken by an individual surveyor.",
    "answer": "PACE FACTOR",
    "choices": [
      "STRIDE COEFFICIENT",
      "PACE FACTOR",
      "STEP INDEX",
      "WALKING CONSTANT"
    ],
    "explanation": "Pace factor (meters per pace) calibrated over a measured course of 50-100 meters allows rapid distance estimation in civil reconnaissance.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 615,
    "area": "MSTE",
    "subtopic": "Surveying, Leveling & Errors",
    "difficulty": "Medium",
    "question": "A surveying rod reading taken on a benchmark or turning point of known elevation to determine the height of the instrument line of sight: HI = Elev + BS.",
    "answer": "BACKSIGHT",
    "choices": [
      "FORESIGHT",
      "BACKSIGHT",
      "INTERMEDIATE SHOT",
      "BENCHMARK SHOT"
    ],
    "explanation": "Backsight (plus sight) added to point elevation establishes Height of Instrument (HI); Foresight (minus sight) is subtracted from HI to find unknown elevations.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 616,
    "area": "MSTE",
    "subtopic": "Surveying, Leveling & Errors",
    "difficulty": "Medium",
    "question": "A rod reading taken on a point of unknown elevation to determine its elevation prior to moving the leveling instrument: Elev = HI - FS.",
    "answer": "FORESIGHT",
    "choices": [
      "BACKSIGHT",
      "FORESIGHT",
      "DATUM INDEX",
      "CONTROL SIGHT"
    ],
    "explanation": "Foresight (minus sight) closes the leveling observation at a station or turning point before instrument relocation.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 617,
    "area": "MSTE",
    "subtopic": "Surveying, Leveling & Errors",
    "difficulty": "Hard",
    "question": "The classical mathematical rule for balancing a closed traverse which distributes errors in latitude and departure in proportion to the lengths of the individual traverse courses.",
    "answer": "COMPASS RULE",
    "choices": [
      "TRANSIT RULE",
      "COMPASS RULE",
      "CRANDALL METHOD",
      "LEAST SQUARES ADJUSTMENT"
    ],
    "explanation": "Also known as the Bowditch Rule, the Compass Rule assumes angular and linear errors are of equal precision and proportional to √L.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 618,
    "area": "MSTE",
    "subtopic": "Surveying, Leveling & Errors",
    "difficulty": "Hard",
    "question": "A traverse adjustment method that distributes errors in latitude and departure in proportion to the latitudes and departures of the individual courses, favored when angular measurements are more precise than linear measurements.",
    "answer": "TRANSIT RULE",
    "choices": [
      "COMPASS RULE",
      "TRANSIT RULE",
      "GRAPHICAL BOWDITCH",
      "COLLIMATION ADJUSTMENT"
    ],
    "explanation": "The Transit Rule prevents changes in course bearings for north-south or east-west lines by weighting corrections according to coordinate components.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 619,
    "area": "MSTE",
    "subtopic": "Surveying, Leveling & Errors",
    "difficulty": "Medium",
    "question": "The projection of a traverse course onto the reference true north-south meridian line, calculated as course length multiplied by the cosine of its bearing: Lat = L * cos(theta).",
    "answer": "LATITUDE",
    "choices": [
      "DEPARTURE",
      "LATITUDE",
      "AZIMUTH",
      "PARALLEL OFFSET"
    ],
    "explanation": "Latitudes are positive (northing) for courses heading north and negative (southing) for courses heading south.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 620,
    "area": "MSTE",
    "subtopic": "Surveying, Leveling & Errors",
    "difficulty": "Medium",
    "question": "The projection of a traverse line onto the reference east-west parallel axis, calculated as course length multiplied by the sine of its bearing: Dep = L * sin(theta).",
    "answer": "DEPARTURE",
    "choices": [
      "LATITUDE",
      "DEPARTURE",
      "MERIDIAN DISTANCE",
      "EASTING DEFLECTION"
    ],
    "explanation": "Departures are positive (easting) for courses heading east and negative (westing) for courses heading west.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 621,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Medium",
    "question": "A transitional curve of continuously varying radius (such as a clothoid or Euler spiral) introduced between a straight highway tangent and a circular curve to ensure gradual introduction of centrifugal acceleration.",
    "answer": "SPIRAL TRANSITION CURVE",
    "choices": [
      "COMPOUND REVERSE CURVE",
      "SPIRAL TRANSITION CURVE",
      "PARABOLIC VERTICAL SPLINE",
      "BROKEN-BACK CURVE"
    ],
    "explanation": "Spiral transition curves provide a comfortable, gradual transition of centrifugal force and allow uniform runoff development of road superelevation.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 622,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Easy",
    "question": "The minimum roadway distance required by a motor vehicle driver traveling at design speed to perceive an unexpected stationary road hazard and bring the vehicle to a complete safe stop.",
    "answer": "STOPPING SIGHT DISTANCE",
    "choices": [
      "PASSING SIGHT DISTANCE",
      "STOPPING SIGHT DISTANCE",
      "DECISION SIGHT DISTANCE",
      "INTERSECTION CLEARANCE DISTANCE"
    ],
    "explanation": "Stopping Sight Distance SSD = 0.278 * V * t + V² / [254 * (f ± G)], accounting for driver perception-reaction time (2.5 seconds) and braking friction.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 623,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Medium",
    "question": "The banking or lateral cross-slope provided along circular highway curves to counterbalance centripetal acceleration and prevent vehicle skidding: e + f = v^2 / (127 * R).",
    "answer": "SUPERELEVATION",
    "choices": [
      "CROWN SLOPE",
      "SUPERELEVATION",
      "CAMBER PROFILE",
      "SIDE FRICTION TILT"
    ],
    "explanation": "Superelevation (e) combined with side friction coefficient (f) counteracts lateral centrifugal overturning forces on curved roads.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 624,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Medium",
    "question": "In earthwork computations, the exact volumetric prismoidal formula for calculating volume between two cross-sections of areas A1 and A2 with mid-section area Am: V = (L / 6) * (A1 + 4Am + A2).",
    "answer": "PRISMOIDAL FORMULA",
    "choices": [
      "END-AREA FORMULA",
      "PRISMOIDAL FORMULA",
      "TRAPEZOIDAL VOLUME RULE",
      "SIMPSON SOLID RULE"
    ],
    "explanation": "The Prismoidal formula calculates exact earthwork volume for geometric solids whose cross-sectional areas vary linearly or quadratically along length L.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 625,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Medium",
    "question": "The total haul distance at which the total financial cost of hauling excavated earth equals the cost of wasting the excavated cut and borrowing new fill material from a nearby pit.",
    "answer": "ECONOMIC LIMIT OF HAUL",
    "choices": [
      "FREE HAUL RANGE",
      "ECONOMIC LIMIT OF HAUL",
      "BALANCE HAUL REACH",
      "OPTIMAL BORROW RADIUS"
    ],
    "explanation": "Economic Limit of Haul ELH = Free Haul Distance + (Cost of Borrow / Cost of Overhaul); beyond ELH, borrowing is more economical than hauling.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 626,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Medium",
    "question": "In AASHTO flexible pavement design, an empirical index number expressing the required structural strength of a pavement pavement structure as a combination of layer thicknesses and layer coefficients: SN = a1*D1 + a2*D2*m2 + a3*D3*m3.",
    "answer": "STRUCTURAL NUMBER",
    "choices": [
      "MODULUS OF SUBGRADE",
      "STRUCTURAL NUMBER",
      "SERVICEABILITY INDEX",
      "RESILIENT CAPACITY"
    ],
    "explanation": "The Structural Number (SN) accounts for cumulative 18-kip (80 kN) Equivalent Single Axle Loads (ESALs), subgrade resilient modulus, and reliability.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 627,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Easy",
    "question": "A severe fatigue pavement distress pattern in flexible asphalt pavements characterized by interconnected polygonal cracks resembling the skin of a reptile.",
    "answer": "ALLIGATOR CRACKING",
    "choices": [
      "TRANSVERSE THERMAL CRACKING",
      "ALLIGATOR CRACKING",
      "BLOCK CRACKING",
      "EDGE RAVELING"
    ],
    "explanation": "Alligator cracking (fatigue cracking) results from repeated heavy traffic wheel loadings over weakened, poorly drained, or inadequate subgrade layers.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 628,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Medium",
    "question": "Smooth round steel dowels placed across transverse contraction joints in Portland Cement Concrete Pavement (PCCP) to transfer wheel shear loads while allowing longitudinal thermal expansion.",
    "answer": "DOWEL BARS",
    "choices": [
      "TIE BARS",
      "DOWEL BARS",
      "KEYWAY KEYS",
      "REINFORCING STIRRUPS"
    ],
    "explanation": "Dowel bars prevent joint faulting by transferring vehicle axle shear loads between adjacent concrete slab panels without restricting joint opening/closing.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 629,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Medium",
    "question": "The ratio of total traffic volume during the peak hour to four times the volume during the peak 15-minute interval within that hour: PHF = PHV / (4 * V15).",
    "answer": "PEAK HOUR FACTOR",
    "choices": [
      "CAPACITY FACTOR",
      "PEAK HOUR FACTOR",
      "TRAFFIC CONGESTION INDEX",
      "EXPANSION FACTOR"
    ],
    "explanation": "Peak Hour Factor (PHF) measures traffic flow uniformity during the peak hour; typical values range from 0.80 to 0.98.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 630,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Hard",
    "question": "The classic macroscopic traffic flow model postulating a linear relationship between vehicle speed and traffic density from free-flow speed to jam density.",
    "answer": "GREENSHIELDS MODEL",
    "choices": [
      "GREENBERG MODEL",
      "GREENSHIELDS MODEL",
      "UNDERWOOD MODEL",
      "PIPES MODEL"
    ],
    "explanation": "Proposed by Bruce Greenshields in 1935: v = vf * (1 - k/kj); maximum flow capacity occurs at exactly half free-flow speed and half jam density.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 631,
    "area": "MSTE",
    "subtopic": "Project Management, CPM/PERT & Equipment Economics",
    "difficulty": "Medium",
    "question": "In PERT project management, the weighted average statistical duration calculated from optimistic (a), most likely (m), and pessimistic (b) estimates: te = (a + 4m + b) / 6.",
    "answer": "EXPECTED DURATION",
    "choices": [
      "MEDIAN INTERVAL",
      "EXPECTED DURATION",
      "STANDARD TIME",
      "PROBABLE SLACK"
    ],
    "explanation": "The beta distribution approximation te = (a + 4m + b)/6 assigns 4x weighting to the most likely time estimate.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 632,
    "area": "MSTE",
    "subtopic": "Project Management, CPM/PERT & Equipment Economics",
    "difficulty": "Hard",
    "question": "In project schedule compression, the additional financial cost incurred per unit of time saved by crashing an activity on the critical path: (Crash Cost - Normal Cost) / (Normal Time - Crash Time).",
    "answer": "CRASH COST SLOPE",
    "choices": [
      "ACCELERATION PREMIUM",
      "CRASH COST SLOPE",
      "TIME VARIANCE MULTIPLIER",
      "EXPEDITE COEFFICIENT"
    ],
    "explanation": "Crash cost slope identifies the most cost-effective critical activities to shorten in order to reduce overall project duration at minimum extra cost.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 633,
    "area": "MSTE",
    "subtopic": "Project Management, CPM/PERT & Equipment Economics",
    "difficulty": "Hard",
    "question": "In Earned Value Management (EVM), the schedule performance metric defined as the ratio of Earned Value to Planned Value: SPI = EV / PV.",
    "answer": "SCHEDULE PERFORMANCE INDEX",
    "choices": [
      "COST PERFORMANCE INDEX",
      "SCHEDULE PERFORMANCE INDEX",
      "SCHEDULE VARIANCE INDEX",
      "TIMELINE METRIC"
    ],
    "explanation": "SPI > 1.0 indicates project progress is ahead of schedule; SPI < 1.0 indicates schedule slippage and project delays.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 634,
    "area": "MSTE",
    "subtopic": "Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)",
    "difficulty": "Easy",
    "question": "Philippine Department of Labor and Employment (DOLE) Department Order No. 13 which promulgates mandatory Guidelines Governing Occupational Safety and Health in the Construction Industry.",
    "answer": "DOLE DO 13",
    "choices": [
      "DOLE DO 13",
      "DPWH BLUE BOOK",
      "PD 1096",
      "RA 9184"
    ],
    "explanation": "DO 13 s. 1998 requires all construction projects to formulate an approved Construction Safety and Health Program (CSHP) with qualified safety officers and first aiders.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 635,
    "area": "MSTE",
    "subtopic": "Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)",
    "difficulty": "Medium",
    "question": "Under Philippine Republic Act No. 9184 (Government Procurement Reform Act), the statutory body within a government agency responsible for public advertising, bidding, and contract award evaluation.",
    "answer": "BIDS AND AWARDS COMMITTEE",
    "choices": [
      "PROJECT MONITORING TEAM",
      "BIDS AND AWARDS COMMITTEE",
      "INFRASTRUCTURE TENDER BOARD",
      "PROCUREMENT OVERSIGHT COMMISSION"
    ],
    "explanation": "The BAC consists of at least 5 but not more than 7 members and oversees competitive public bidding, post-qualification, and contract recommendations.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 636,
    "area": "MSTE",
    "subtopic": "Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)",
    "difficulty": "Medium",
    "question": "Under RA 9184, the ceiling price established by a procuring government agency beyond which no bid price shall be accepted during competitive bidding.",
    "answer": "APPROVED BUDGET FOR THE CONTRACT",
    "choices": [
      "ESTIMATED DIRECT COST",
      "APPROVED BUDGET FOR THE CONTRACT",
      "ALLOWABLE TENDER LIMIT",
      "BENCHMARK CONTRACT SUM"
    ],
    "explanation": "Bids exceeding the Approved Budget for the Contract (ABC) are automatically disqualified under Philippine government procurement rules.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 637,
    "area": "MSTE",
    "subtopic": "Engineering Mathematics & Geometry",
    "difficulty": "Easy",
    "question": "A mathematical sequence in which the ratio of any term to its preceding term is a constant non-zero value called the common ratio (e.g., 2, 6, 18, 54).",
    "answer": "GEOMETRIC PROGRESSION",
    "choices": [
      "ARITHMETIC PROGRESSION",
      "GEOMETRIC PROGRESSION",
      "HARMONIC SEQUENCE",
      "POWER SERIES"
    ],
    "explanation": "In a geometric progression with first term a and ratio r, the nth term is an = a * r^(n-1) and sum Sn = a * (1 - r^n) / (1 - r).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 638,
    "area": "MSTE",
    "subtopic": "Engineering Mathematics & Geometry",
    "difficulty": "Easy",
    "question": "The mathematical theorem that provides the algebraic expansion of powers of a binomial expression (x + y)^n using combination coefficients.",
    "answer": "BINOMIAL THEOREM",
    "choices": [
      "TAYLOR EXPANSION",
      "BINOMIAL THEOREM",
      "POLYNOMIAL FACTOR THEOREM",
      "DE MOIVRE THEOREM"
    ],
    "explanation": "The Binomial Theorem expands (x + y)^n = Σ [n! / (k! * (n-k)!)] * x^(n-k) * y^k.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 639,
    "area": "MSTE",
    "subtopic": "Engineering Mathematics & Geometry",
    "difficulty": "Medium",
    "question": "In differential calculus of curves, the radius (R) of the osculating circle that best approximates the curve at a given point: R = [1 + (dy/dx)^2]^(3/2) / |d^2y/dx^2|.",
    "answer": "RADIUS OF CURVATURE",
    "choices": [
      "CENTROIDAL RADIUS",
      "RADIUS OF CURVATURE",
      "CHORD RADIUS",
      "EVOLUTE SPAN"
    ],
    "explanation": "The reciprocal of the radius of curvature is curvature κ = 1 / R, measuring the instantaneous rate of direction change of the tangent line.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 640,
    "area": "MSTE",
    "subtopic": "Engineering Mathematics & Geometry",
    "difficulty": "Medium",
    "question": "In differential equations, an algebraic function mu(x) by which a non-exact first-order linear differential equation is multiplied to make its left-hand side an exact derivative.",
    "answer": "INTEGRATING FACTOR",
    "choices": [
      "AUXILIARY MULTIPLIER",
      "INTEGRATING FACTOR",
      "WRONSKIAN",
      "HOMOGENIZING SCALAR"
    ],
    "explanation": "For dy/dx + P(x)y = Q(x), the integrating factor is μ(x) = e^(∫ P(x) dx).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 641,
    "area": "MSTE",
    "subtopic": "Engineering Mathematics & Geometry",
    "difficulty": "Easy",
    "question": "In probability and statistics, a dimensionless relative dispersion metric defined as the ratio of standard deviation to sample mean: CV = s / x_bar.",
    "answer": "COEFFICIENT OF VARIATION",
    "choices": [
      "STANDARD ERROR",
      "COEFFICIENT OF VARIATION",
      "VARIANCE SPREAD",
      "CONFIDENCE INTERVAL"
    ],
    "explanation": "The Coefficient of Variation (CV) allows direct comparison of variability between datasets measured in different units.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 642,
    "area": "MSTE",
    "subtopic": "Engineering Mathematics & Geometry",
    "difficulty": "Medium",
    "question": "In standard normal Gaussian probability distribution, the number of standard deviations a given raw data point x lies above or below the population mean: z = (x - mu) / sigma.",
    "answer": "STANDARD NORMAL Z-SCORE",
    "choices": [
      "STUDENT T-VALUE",
      "STANDARD NORMAL Z-SCORE",
      "F-RATIO STATISTIC",
      "CHI-SQUARE INDEX"
    ],
    "explanation": "The Z-score standardizes normal random variables to a standard normal distribution with mean 0 and standard deviation 1.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 643,
    "area": "MSTE",
    "subtopic": "Project Management, CPM/PERT & Equipment Economics",
    "difficulty": "Easy",
    "question": "In financial arithmetic, interest earned solely on the initial principal amount over a given time duration without compounding: I = P * i * n.",
    "answer": "SIMPLE INTEREST",
    "choices": [
      "COMPOUND INTEREST",
      "SIMPLE INTEREST",
      "EFFECTIVE ANNUAL YIELD",
      "CONTINUOUS INTEREST"
    ],
    "explanation": "Simple interest accrues linearly without interest reinvestment, whereas compound interest generates interest upon accumulated interest.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 644,
    "area": "MSTE",
    "subtopic": "Project Management, CPM/PERT & Equipment Economics",
    "difficulty": "Easy",
    "question": "In financial mathematics, interest calculated on both the initial principal deposit and the accumulated interest from prior compounding periods: F = P * (1 + i)^n.",
    "answer": "COMPOUND INTEREST",
    "choices": [
      "SIMPLE INTEREST",
      "COMPOUND INTEREST",
      "NOMINAL DISCOUNT",
      "ADD-ON CHARGE"
    ],
    "explanation": "Compound interest generates exponential financial growth over multi-period engineering investment horizons.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 645,
    "area": "MSTE",
    "subtopic": "Project Management, CPM/PERT & Equipment Economics",
    "difficulty": "Medium",
    "question": "A uniform series of equal periodic payments where each payment is made at the beginning of each payment period (such as advance lease or insurance payments).",
    "answer": "ANNUITY DUE",
    "choices": [
      "ORDINARY ANNUITY",
      "ANNUITY DUE",
      "DEFERRED ANNUITY",
      "PERPETUITY"
    ],
    "explanation": "Because payments in an annuity due occur at the start of each period, its present value is (1 + i) times greater than that of an ordinary annuity.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 646,
    "area": "MSTE",
    "subtopic": "Project Management, CPM/PERT & Equipment Economics",
    "difficulty": "Medium",
    "question": "The simplest depreciation method where equal annual depreciation amounts are charged throughout an asset useful life: D = (First Cost - Salvage Value) / n.",
    "answer": "STRAIGHT-LINE DEPRECIATION",
    "choices": [
      "DECLINING BALANCE",
      "STRAIGHT-LINE DEPRECIATION",
      "SUM-OF-THE-YEARS-DIGITS",
      "SINKING FUND DEPRECIATION"
    ],
    "explanation": "Straight-line depreciation assumes an asset loses value uniformly and linearly across each year of service life.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 647,
    "area": "MSTE",
    "subtopic": "Project Management, CPM/PERT & Equipment Economics",
    "difficulty": "Medium",
    "question": "An accelerated depreciation method in which a constant annual percentage rate (equal to 2/n for double-declining) is multiplied by the undepreciated book value at the start of each year.",
    "answer": "DOUBLE DECLINING BALANCE METHOD",
    "choices": [
      "STRAIGHT LINE METHOD",
      "DOUBLE DECLINING BALANCE METHOD",
      "SOYD METHOD",
      "UNIT-OF-PRODUCTION METHOD"
    ],
    "explanation": "Double Declining Balance (DDB) does not subtract salvage value in initial depreciation calculations, but book value cannot drop below salvage value.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 648,
    "area": "MSTE",
    "subtopic": "Project Management, CPM/PERT & Equipment Economics",
    "difficulty": "Medium",
    "question": "The ratio of present worth of net project benefits to present worth of project costs, used extensively to evaluate public works civil infrastructure: B/C = PW(Benefits) / PW(Costs).",
    "answer": "BENEFIT-COST RATIO",
    "choices": [
      "INTERNAL RATE OF RETURN",
      "BENEFIT-COST RATIO",
      "RETURN ON INVESTMENT",
      "PAYBACK QUOTIENT"
    ],
    "explanation": "A public infrastructure project is economically justifiable if Benefit-Cost Ratio B/C ≥ 1.0.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 649,
    "area": "MSTE",
    "subtopic": "Project Management, CPM/PERT & Equipment Economics",
    "difficulty": "Easy",
    "question": "The time required for cumulative net cash inflows from an engineering project to equal the initial capital investment cost.",
    "answer": "PAYBACK PERIOD",
    "choices": [
      "INTERNAL HORIZON",
      "PAYBACK PERIOD",
      "AMORTIZATION TIME",
      "BREAKEVEN INTERVAL"
    ],
    "explanation": "Payback period measures liquidity risk, though simple payback ignores cash flows occurring after the payback horizon and time value of money.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 650,
    "area": "MSTE",
    "subtopic": "Surveying, Leveling & Errors",
    "difficulty": "Medium",
    "question": "A surveying leveling error caused by combined effects of earth curvature and atmospheric light refraction over long horizontal sights: h_cr = 0.0675 * K^2 (in meters for K in km).",
    "answer": "CURVATURE AND REFRACTION CORRECTION",
    "choices": [
      "COLLIMATION BIAS",
      "CURVATURE AND REFRACTION CORRECTION",
      "INDEX PARALLAX",
      "ROD INCLINATION ERROR"
    ],
    "explanation": "Curvature causes the true level surface to drop below line of sight, while atmospheric refraction bends sight lines downward (net effect: hcr = 0.0675 * K²).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 651,
    "area": "MSTE",
    "subtopic": "Surveying, Leveling & Errors",
    "difficulty": "Medium",
    "question": "Tape correction applied to steel surveying tapes when field measurement temperature differs from standardized tape calibration temperature: Ct = alpha * L * (T - T0).",
    "answer": "TEMPERATURE CORRECTION",
    "choices": [
      "PULL CORRECTION",
      "TEMPERATURE CORRECTION",
      "SAG CORRECTION",
      "SLOPE CORRECTION"
    ],
    "explanation": "Steel tape thermal expansion coefficient α is 0.0000116 / °C; tapes expand in hot weather, reading short and requiring a positive correction.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 652,
    "area": "MSTE",
    "subtopic": "Surveying, Leveling & Errors",
    "difficulty": "Medium",
    "question": "Tension correction applied when pulling tension (P) on a steel tape differs from standard calibration tension (P0): Cp = (P - P0) * L / (A * E).",
    "answer": "PULL CORRECTION",
    "choices": [
      "SAG CORRECTION",
      "PULL CORRECTION",
      "TEMPERATURE CORRECTION",
      "CATENARY FACTOR"
    ],
    "explanation": "Derived directly from Hooke’s elastic deformation formula ΔL = P*L / (A*E).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 653,
    "area": "MSTE",
    "subtopic": "Surveying, Leveling & Errors",
    "difficulty": "Medium",
    "question": "In closed traverse surveying, the linear distance between the true initial starting station point and the unclosed final closing point: Ec = sqrt((sum_Lat)^2 + (sum_Dep)^2).",
    "answer": "LINEAR ERROR OF CLOSURE",
    "choices": [
      "RELATIVE PRECISION",
      "LINEAR ERROR OF CLOSURE",
      "ANGULAR MISCLOSE",
      "MERIDIAN RESIDUAL"
    ],
    "explanation": "Linear error of closure (LEC) measures cumulative traverse field error; dividing LEC by traverse perimeter gives the relative precision ratio (e.g., 1:10,000).",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 654,
    "area": "MSTE",
    "subtopic": "Surveying, Leveling & Errors",
    "difficulty": "Medium",
    "question": "A classic coordinate geometry method (also known as Gauss area formula or shoelace algorithm) for calculating the interior area of a closed traverse polygon.",
    "answer": "COORDINATE METHOD",
    "choices": [
      "DOUBLE MERIDIAN METHOD",
      "COORDINATE METHOD",
      "STADIA CROSS METHOD",
      "SIMPSON RULE"
    ],
    "explanation": "Area equals half the absolute sum of cross-products of coordinate vertices: Area = 0.5 * |Σ (X_i * Y_{i+1} - X_{i+1} * Y_i)|.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 655,
    "area": "MSTE",
    "subtopic": "Surveying, Leveling & Errors",
    "difficulty": "Hard",
    "question": "In traverse area calculations, the distance from the midpoint of a course to the reference meridian, where Double Meridian Distance (DMD) of course n equals DMD(n-1) + Dep(n-1) + Dep(n).",
    "answer": "DOUBLE MERIDIAN DISTANCE",
    "choices": [
      "DOUBLE PARALLEL DISTANCE",
      "DOUBLE MERIDIAN DISTANCE",
      "LATITUDE PRODUCT",
      "COORDINATE OFFSET"
    ],
    "explanation": "Total traverse area equals half the algebraic sum of products of each course DMD multiplied by its adjusted latitude.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 656,
    "area": "MSTE",
    "subtopic": "Surveying, Leveling & Errors",
    "difficulty": "Medium",
    "question": "An electronic surveying instrument combining an electronic theodolite, an electronic distance measurement (EDM) unit, and an onboard microprocessor for recording coordinates.",
    "answer": "TOTAL STATION",
    "choices": [
      "OPTICAL TRANSIT",
      "TOTAL STATION",
      "DUMPY LEVEL",
      "AUTO-COLLIMATOR"
    ],
    "explanation": "Total stations measure horizontal angles, zenith angles, and slope distances to prisms, automatically calculating 3D northing, easting, and elevation coordinates.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 657,
    "area": "MSTE",
    "subtopic": "Surveying, Leveling & Errors",
    "difficulty": "Hard",
    "question": "An advanced satellite positioning technique where carrier-phase differential corrections transmitted from a stationary GNSS base station allow mobile rovers to achieve centimeter-level positioning accuracy.",
    "answer": "REAL-TIME KINEMATIC GNSS",
    "choices": [
      "PSEUDORANGE DGPS",
      "REAL-TIME KINEMATIC GNSS",
      "TRILATERATION RADAR",
      "DILUTION OF PRECISION"
    ],
    "explanation": "Real-Time Kinematic (RTK) GNSS resolves carrier phase ambiguities in real time, delivering sub-2cm horizontal and vertical survey coordinates.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 658,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Medium",
    "question": "The angle subtended at the center of a circular curve by an arc of 20 meters (arc basis) or chord of 20 meters (chord basis): D = 1145.916 / R.",
    "answer": "DEGREE OF CURVE",
    "choices": [
      "CENTRAL DEFLECTION ANGLE",
      "DEGREE OF CURVE",
      "RADIUS OF CURVATURE",
      "CHORD INCLINATION"
    ],
    "explanation": "Degree of curve (D) expresses curve sharpness; sharper circular curves have larger degrees of curve and smaller radii.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 659,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Easy",
    "question": "The straight-line distance along a circular horizontal highway curve connecting the Point of Curvature (PC) to the Point of Tangency (PT): C = 2 * R * sin(I / 2).",
    "answer": "LONG CHORD",
    "choices": [
      "TANGENT DISTANCE",
      "LONG CHORD",
      "EXTERNAL DISTANCE",
      "MIDDLE ORDINATE"
    ],
    "explanation": "The long chord (C) forms the base of the isosceles triangle formed by the two radii meeting the deflection angle I.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 660,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Medium",
    "question": "The distance from the Point of Intersection (PI) to the midpoint of a horizontal circular curve along the external radial line: E = R * [sec(I / 2) - 1].",
    "answer": "EXTERNAL DISTANCE",
    "choices": [
      "MIDDLE ORDINATE",
      "EXTERNAL DISTANCE",
      "TANGENT OFFSET",
      "LONG CHORD"
    ],
    "explanation": "External distance (E) indicates clearance between PI and curve apex, vital when designing roads in tight mountainous switchbacks.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 661,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Medium",
    "question": "The radial distance from the midpoint of the long chord to the midpoint of the circular curve arc: M = R * [1 - cos(I / 2)].",
    "answer": "MIDDLE ORDINATE",
    "choices": [
      "EXTERNAL DISTANCE",
      "MIDDLE ORDINATE",
      "SUBCHORD DEFLECTION",
      "CENTRAL TANGENT"
    ],
    "explanation": "Middle ordinate (M) is used to check required lateral sight distance clearance around horizontal curve obstructions like trees or rock cuts.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 662,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Medium",
    "question": "The minimum sight distance required on a two-lane two-way highway to allow a driver to safely pass a slower-moving vehicle without interfering with oncoming traffic.",
    "answer": "PASSING SIGHT DISTANCE",
    "choices": [
      "STOPPING SIGHT DISTANCE",
      "PASSING SIGHT DISTANCE",
      "DECISION SIGHT DISTANCE",
      "INTERSECTION SIGHT DISTANCE"
    ],
    "explanation": "Passing Sight Distance (PSD) is significantly longer than Stopping Sight Distance and governs no-passing zone solid pavement markings.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 663,
    "area": "MSTE",
    "subtopic": "Highway Geometric Design & Sight Distances",
    "difficulty": "Medium",
    "question": "In earthwork computations, the standard formula approximating volume between two adjacent cross-sectional areas A1 and A2 spaced distance L apart: V = (A1 + A2) / 2 * L.",
    "answer": "AVERAGE END-AREA METHOD",
    "choices": [
      "PRISMOIDAL METHOD",
      "AVERAGE END-AREA METHOD",
      "SIMPSON METHOD",
      "TRAPEZOIDAL SOLID METHOD"
    ],
    "explanation": "The average end-area method is the standard earthwork estimation method used by highway departments, giving slightly larger volumes than prismoidal.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 664,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Medium",
    "question": "Deformed longitudinal depressions or ruts formed in the wheelpaths of flexible asphalt pavements resulting from permanent shear displacement of asphalt under heavy axle loads.",
    "answer": "RUTTING",
    "choices": [
      "CORRUGATION",
      "RUTTING",
      "RAVELING",
      "POTHOLE DISRUPTION"
    ],
    "explanation": "Rutting creates hazardous hydroplaning conditions during rainstorms; it is mitigated using polymer-modified asphalt binders and high-stability aggregate.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 665,
    "area": "MSTE",
    "subtopic": "Pavement Distress, Asphalt & Concrete Paving",
    "difficulty": "Medium",
    "question": "The ejection of water and fine subgrade or subbase soil particles through joints and cracks in concrete pavements under repetitive heavy wheel axle loads.",
    "answer": "PUMPING OF PAVEMENT",
    "choices": [
      "BLOWUP",
      "PUMPING OF PAVEMENT",
      "FAULTING",
      "SPALLING"
    ],
    "explanation": "Pumping removes subgrade support under concrete slab edges and corners, leading to slab faulting and structural cracking.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 666,
    "area": "MSTE",
    "subtopic": "Traffic Engineering, Markings & Signs",
    "difficulty": "Easy",
    "question": "The total volume of traffic passing a given road section in both directions over a full calendar year divided by 365 days: AADT = Annual Volume / 365.",
    "answer": "ANNUAL AVERAGE DAILY TRAFFIC",
    "choices": [
      "AVERAGE DAILY TRAFFIC",
      "ANNUAL AVERAGE DAILY TRAFFIC",
      "DESIGN HOURLY VOLUME",
      "PEAK DAY VOLUME"
    ],
    "explanation": "Annual Average Daily Traffic (AADT) is the primary traffic metric used to plan highway classifications, design lanes, and justify funding.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 667,
    "area": "MSTE",
    "subtopic": "Project Management, CPM/PERT & Equipment Economics",
    "difficulty": "Medium",
    "question": "In CPM project scheduling, a network diagramming format where activities are represented on nodes and precedence logic dependencies are represented by connecting arrows.",
    "answer": "ACTIVITY-ON-NODE DIAGRAM",
    "choices": [
      "ACTIVITY-ON-ARROW DIAGRAM",
      "ACTIVITY-ON-NODE DIAGRAM",
      "GANTT BAR CHART",
      "LINE OF BALANCE"
    ],
    "explanation": "Activity-on-Node (AON / Precedence Diagramming Method PDM) eliminates the need for dummy activities required by older Activity-on-Arrow systems.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 668,
    "area": "MSTE",
    "subtopic": "Project Management, CPM/PERT & Equipment Economics",
    "difficulty": "Hard",
    "question": "In Earned Value Management (EVM), the cost variance metric expressing the difference between Earned Value and Actual Cost: CV = EV - AC.",
    "answer": "COST VARIANCE",
    "choices": [
      "SCHEDULE VARIANCE",
      "COST VARIANCE",
      "BUDGET VARIANCE",
      "EXPENDITURE VARIATION"
    ],
    "explanation": "Positive CV indicates project cost savings (under budget); negative CV indicates cost overruns.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 669,
    "area": "MSTE",
    "subtopic": "Project Management, CPM/PERT & Equipment Economics",
    "difficulty": "Hard",
    "question": "In Earned Value Management, the difference between Earned Value and Planned Value: SV = EV - PV.",
    "answer": "SCHEDULE VARIANCE",
    "choices": [
      "COST VARIANCE",
      "SCHEDULE VARIANCE",
      "FLOAT DELAY",
      "CRITICAL DIFFERENTIAL"
    ],
    "explanation": "Positive SV indicates project schedule progress is ahead of plan; negative SV indicates schedule slippage.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 670,
    "area": "MSTE",
    "subtopic": "Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)",
    "difficulty": "Easy",
    "question": "Philippine Republic Act No. 11058 which strengthens compliance with Occupational Safety and Health (OSH) standards and provides strict penalties for violations.",
    "answer": "RA 11058",
    "choices": [
      "RA 9184",
      "RA 11058",
      "PD 1096",
      "RA 544"
    ],
    "explanation": "RA 11058 mandates safe workplaces, protective equipment, safety officers, workers’ right to refuse unsafe work, and administrative fines of up to ₱100,000/day for non-compliance.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  },
  {
    "id": 671,
    "area": "MSTE",
    "subtopic": "Construction Safety, OSH Standards (RA 11058 / DOLE DO 13)",
    "difficulty": "Medium",
    "question": "Under Philippine civil engineering law (RA 544 as amended), the state law that governs and regulates the practice of civil engineering in the Philippines.",
    "answer": "RA 544",
    "choices": [
      "RA 544",
      "RA 9184",
      "PD 1594",
      "PD 223"
    ],
    "explanation": "Republic Act 544 (The Civil Engineering Law of 1950) defines the scope, examination requirements, and registration of civil engineers in the Philippines.",
    "reference": "Official PRC CELE Table of Specifications (TOS) & Reviewer"
  }
];
