import { CEFormula, HPGEFormulaDomain } from '../types';

export const HPGE_FORMULA_DOMAINS: HPGEFormulaDomain[] = [
  'Hydraulics & Fluid Mechanics',
  'Geotechnical Engineering'
];

export const HPGE_FORMULA_TOPICS_BY_DOMAIN: Record<HPGEFormulaDomain, string[]> = {
  'Hydraulics & Fluid Mechanics': [
    'Properties of Fluid',
    'Hydrostatic Pressure & Forces',
    'Curved Surfaces & Buoyancy',
    'Stability of Floating Bodies',
    'Gravity Dams & Hoop Tension',
    'Moving & Rotating Vessels',
    'Fluid Flow, Energy & Head Losses',
    'Pipe Networks, Water Hammer & Reynolds Number',
    'Orifices & Weirs',
    'Open Channel Flow & Hydraulic Jump',
    'Jet Impact & Pipe Bends'
  ],
  'Geotechnical Engineering': [
    'Soil Properties & Phase Relations',
    'Relative Density & Grain Size Distribution',
    'Permeability & Seepage Flow',
    'Vertical Stresses & Consolidation Settlement',
    'Consistency Limits & Soil Classification',
    'Mohr’s Circle & Shear Strength Tests',
    'Lateral Earth Pressure & Retaining Walls',
    'Driven Piles, Braced Cuts & Bearing Capacity',
    'Slope Stability & Critical Equilibrium',
    'Soil Stress Distribution & Compaction',
    'Flow Nets & Anisotropic Seepage'
  ]
};

export const HPGE_FORMULAS: CEFormula[] = [
  // =========================================================================
  // HYDRAULICS & FLUID MECHANICS (Pages 2 - 16)
  // =========================================================================

  // --- P.2: Properties of Fluid ---
  {
    id: 'hpge_p02_unit_weight_density',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Properties of Fluid',
    examSubtopic: 'Fluid Statics & Buoyancy',
    title: 'Unit Weight, Mass Density & Specific Volume',
    pageRef: 2,
    latex: '\\gamma = \\frac{W}{V} = \\rho g = \\frac{P g}{R T}',
    secondaryEquations: [
      { label: 'Mass Density', latex: '\\rho = \\frac{M}{V}' },
      { label: 'Specific Volume', latex: 'V_s = \\frac{V}{M} = \\frac{1}{\\rho}' }
    ],
    variables: [
      { symbol: 'γ_w', meaning: '9.81 kN/m³ = 62.4 lb/ft³ (standard water unit weight)' },
      { symbol: 'ρ_w', meaning: '1000 kg/m³ = 1 g/cc = 1.94 slugs/ft³ (water density)' },
      { symbol: 'P, R, T', meaning: 'Absolute pressure, gas constant, absolute temperature' }
    ],
    notes: [
      'Memorize both SI and English reference values for water (9.81 kN/m³ and 62.4 lb/ft³; 1000 kg/m³ and 1.94 slugs/ft³).'
    ],
    flashcardPrompt: 'State the three equivalent formulas for Unit Weight (γ), plus Mass Density (ρ), Specific Volume (V_s), and standard water constants.',
    flashcardHint: 'Relates weight/volume, ρg, and ideal gas state Pg/(RT).',
    difficulty: 'Easy'
  },
  {
    id: 'hpge_p02_specific_gravity',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Properties of Fluid',
    examSubtopic: 'Fluid Statics & Buoyancy',
    title: 'Specific Gravity (SG)',
    pageRef: 2,
    latex: 'SG = \\frac{\\rho}{\\rho_w} = \\frac{\\gamma}{\\gamma_w}',
    variables: [
      { symbol: 'Freshwater', meaning: 'SG = 1.0' },
      { symbol: 'Mercury (Hg)', meaning: 'SG = 13.6' },
      { symbol: 'Seawater', meaning: 'SG = 1.03' },
      { symbol: 'Oil (typical)', meaning: 'SG = 0.8' }
    ],
    notes: [
      'Note: Dimensionally and by definition, specific gravity is SG = γ/γ_w (or ρ/ρ_w).'
    ],
    flashcardPrompt: 'What is the Specific Gravity (SG) formula and standard CELE reference values for Freshwater, Seawater, Oil, and Mercury?',
    flashcardHint: 'Dimensionless ratio of fluid density (or unit weight) to water.',
    difficulty: 'Easy'
  },
  {
    id: 'hpge_p02_viscosity',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Properties of Fluid',
    examSubtopic: 'Fluid Statics & Buoyancy',
    title: 'Absolute (Dynamic) & Kinematic Viscosity',
    pageRef: 2,
    latex: '\\mu = \\frac{\\tau}{V / y}, \\qquad \\nu = \\frac{\\mu}{\\rho}',
    variables: [
      { symbol: 'μ', meaning: 'Absolute (dynamic) viscosity (Pa·s or poise)' },
      { symbol: 'ν', meaning: 'Kinematic viscosity (m²/s or stokes)' },
      { symbol: 'τ', meaning: 'Shear stress between fluid layers' },
      { symbol: 'V/y', meaning: 'Velocity gradient (du/dy)' }
    ],
    flashcardPrompt: 'Write the equations for Absolute Viscosity (μ) from shear stress and Kinematic Viscosity (ν).',
    flashcardHint: 'Kinematic viscosity divides dynamic viscosity μ by mass density ρ.',
    difficulty: 'Easy'
  },
  {
    id: 'hpge_p02_surface_tension_capillary',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Properties of Fluid',
    examSubtopic: 'Fluid Statics & Buoyancy',
    title: 'Surface Tension & Capillary Rise',
    pageRef: 2,
    latex: 'h = \\frac{4 \\sigma \\cos\\theta}{\\gamma d}',
    secondaryEquations: [
      { label: 'Droplet Internal Pressure Equilibrium', latex: '\\sigma = \\frac{P d}{4}' }
    ],
    variables: [
      { symbol: 'σ', meaning: 'Surface tension force per unit length (N/m)' },
      { symbol: 'θ', meaning: 'Contact / wetting angle (0° for clean glass–water, ≈130°–140° for mercury)' },
      { symbol: 'd', meaning: 'Tube or droplet diameter (m)' }
    ],
    flashcardPrompt: 'What are the formulas for Surface Tension in a liquid droplet (σ) and Capillary Rise/Depression (h) in a circular tube?',
    flashcardHint: 'Capillary height varies directly with 4σ cosθ and inversely with γd.',
    difficulty: 'Medium'
  },
  {
    id: 'hpge_p02_bulk_modulus_compressibility',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Properties of Fluid',
    examSubtopic: 'Fluid Statics & Buoyancy',
    title: 'Compressibility & Bulk Modulus of Elasticity',
    pageRef: 2,
    latex: 'E_B = -\\frac{\\Delta P}{\\Delta V / V} = \\frac{P_1 - P_2}{(V_1 - V_2)/V}',
    secondaryEquations: [
      { label: 'Coefficient of Compressibility', latex: '\\beta = \\frac{1}{E_B}' }
    ],
    variables: [
      { symbol: 'E_B', meaning: 'Bulk modulus of elasticity (kPa or Pa)' },
      { symbol: 'β', meaning: 'Compressibility (1/Pa)' }
    ],
    flashcardPrompt: 'Express Bulk Modulus of Elasticity (E_B) and Compressibility (β) in terms of pressure and volume change.',
    flashcardHint: 'Compressibility β is the reciprocal of bulk modulus E_B.',
    difficulty: 'Easy'
  },

  // --- P.3: Unit Pressure & Total Hydrostatic Pressure ---
  {
    id: 'hpge_p03_unit_pressure',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Hydrostatic Pressure & Forces',
    examSubtopic: 'Fluid Statics & Buoyancy',
    title: 'Unit Gage Pressure, Absolute Pressure & Liquid Head Conversion',
    pageRef: 3,
    latex: 'P = \\frac{F}{A} = \\gamma h = (sg)\\,\\gamma_w h',
    secondaryEquations: [
      { label: 'Absolute Pressure', latex: 'P_{\\text{abs}} = P_{\\text{gage}} + P_{\\text{atm}}' },
      { label: 'Conversion of Liquid Heads', latex: 'h_A\\, sg_A = h_B\\, sg_B' },
      { label: 'Pressure at Tank Bottom (Layered)', latex: 'P_{\\text{bottom}} = \\sum \\gamma h' }
    ],
    variables: [
      { symbol: 'P_atm', meaning: '101.325 kPa = 14.7 psi = 760 mmHg' },
      { symbol: 'h_A, sg_A', meaning: 'Pressure head and specific gravity of fluid A' }
    ],
    flashcardPrompt: 'State the formulas for Hydrostatic Gage Pressure, Absolute Pressure, Atmospheric constants, Liquid Head Conversion, and Layered Bottom Pressure.',
    flashcardHint: 'Equate pressure γh across fluids using h_A·sg_A = h_B·sg_B.',
    difficulty: 'Easy'
  },
  {
    id: 'hpge_p03_total_hydrostatic_force',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Hydrostatic Pressure & Forces',
    examSubtopic: 'Fluid Statics & Buoyancy',
    title: 'Total Hydrostatic Force on Inclined Plane Surface',
    pageRef: 3,
    latex: 'P = \\gamma \\bar{h} A, \\qquad e = \\frac{\\bar{I}}{A \\bar{y}}',
    secondaryEquations: [
      { label: 'Inclined Centroid Distance', latex: '\\bar{y} = \\frac{\\bar{h}}{\\sin\\theta}' },
      { label: 'Location of Center of Pressure', latex: 'y_p = \\bar{y} + e' }
    ],
    variables: [
      { symbol: 'h̄', meaning: 'Vertical depth from liquid surface to centroid (cg)' },
      { symbol: 'ȳ', meaning: 'Inclined distance along plane axis to centroid (cg)' },
      { symbol: 'e', meaning: 'Eccentricity (distance from cg downward to cp)' },
      { symbol: 'Ī', meaning: 'Centroidal moment of inertia of submerged area A about neutral axis' }
    ],
    diagrams: [
      {
        src: '/assets/hpge_formulas/p03_hydrostatic_inclined.png',
        caption: 'Total hydrostatic force P acting at center of pressure (cp) offset by e below centroid (cg).',
        alt: 'Diagram of inclined submerged plane area showing cg, cp, h-bar, y-bar, eccentricity e, and force P'
      }
    ],
    flashcardPrompt: 'For a submerged inclined plane area, give the Total Hydrostatic Force (P), Center of Pressure eccentricity (e), and inclined centroid relation (ȳ).',
    flashcardHint: 'Center of pressure always lies deeper than centroid by e = I/(A·ȳ).',
    difficulty: 'Medium'
  },

  // --- P.4: Curved Surfaces & Buoyancy ---
  {
    id: 'hpge_p04_curved_surfaces',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Curved Surfaces & Buoyancy',
    examSubtopic: 'Fluid Statics & Buoyancy',
    title: 'Hydrostatic Force on Curved Surfaces',
    pageRef: 4,
    latex: 'P_H = \\gamma \\bar{h} A, \\qquad P_V = \\gamma\\,\\text{Vol}, \\qquad P = \\sqrt{P_H^2 + P_V^2}',
    secondaryEquations: [
      { label: 'Location of Horizontal Component P_H', latex: 'e = \\frac{\\bar{I}}{A \\bar{y}}' },
      { label: 'Direction of Resultant Hydrostatic Force', latex: '\\tan\\theta = \\frac{P_V}{P_H}' }
    ],
    variables: [
      { symbol: 'P_H', meaning: 'Force on vertical projection area A (located via e = I/(A·ȳ))' },
      { symbol: 'P_V', meaning: 'Weight of real/imaginary liquid volume above curved surface, acting at volume c.g.' }
    ],
    diagrams: [
      {
        src: '/assets/hpge_formulas/p04_curved_above.png',
        caption: 'Liquid above the curved body: P_V acts downward.',
        alt: 'Hydrostatic pressure components on curved surface with liquid above body'
      },
      {
        src: '/assets/hpge_formulas/p04_curved_below.png',
        caption: 'Liquid below the curved body: imaginary volume above gives upward P_V.',
        alt: 'Hydrostatic pressure components on curved surface with liquid below body'
      }
    ],
    flashcardPrompt: 'How do you solve for Horizontal (P_H), Vertical (P_V), Resultant (P), and line of action of hydrostatic force on a curved surface?',
    flashcardHint: 'Project vertically for P_H; take weight of water column above to surface for P_V.',
    difficulty: 'Medium'
  },
  {
    id: 'hpge_p04_buoyancy_archimedes',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Curved Surfaces & Buoyancy',
    examSubtopic: 'Fluid Statics & Buoyancy',
    title: 'Buoyancy, Archimedes’ Principle & Two-Liquid Floating',
    pageRef: 4,
    latex: 'W = BF \\implies \\gamma_{\\text{obj}} V_{\\text{obj}} = \\gamma_{\\text{liq}} V_{\\text{displaced}}',
    secondaryEquations: [
      { label: 'Submerged Fraction Relation', latex: 'SG_{\\text{obj}} V = SG_L V_b' },
      { label: 'Object Submerged in Two Different Liquid Surfaces', latex: 'SG_1 (h - a) = SG_2 (h - b)' },
      { label: 'Apparent Weight in Liquid (Air Involved)', latex: 'W_L = W_{\\text{air}} - BF' }
    ],
    variables: [
      { symbol: 'V_b', meaning: 'Submerged / displaced liquid volume' },
      { symbol: 'a, b', meaning: 'Exposed heights above Liquid 1 and Liquid 2 respectively for prism of height h' }
    ],
    diagrams: [
      {
        src: '/assets/hpge_formulas/p04_buoyancy_two_liquids.png',
        caption: 'Floating prism of height h in two liquids with drafts (h − a) and (h − b).',
        alt: 'Prism floating in two liquids showing exposed heights a and b and drafts h-a and h-b'
      },
      {
        src: '/assets/hpge_formulas/p04_buoyancy_submerged.png',
        caption: 'Equilibrium between downward Weight (W) and upward Buoyant Force (BF).',
        alt: 'Buoyancy diagram showing W downward and BF upward on floating body'
      }
    ],
    flashcardPrompt: 'State Archimedes’ Principle, Fraction of Volume submerged, apparent submerged weight (W_L), and two-liquid floating draft relation.',
    flashcardHint: 'Weight of object equals weight of displaced fluid: SG_1(h-a) = SG_2(h-b).',
    difficulty: 'Easy'
  },

  // --- P.5: Stability of Floating Bodies ---
  {
    id: 'hpge_p05_floating_stability',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Stability of Floating Bodies',
    examSubtopic: 'Fluid Statics & Buoyancy',
    title: 'Metacentric Height, Righting Moment & Overturning Moment',
    pageRef: 5,
    latex: 'MB_o = \\frac{B^2}{12 D}\\left[1 + 0.5\\tan^2\\theta\\right]',
    secondaryEquations: [
      { label: 'General Section (Stable / Small Tilt)', latex: 'MB_o = \\frac{I}{V}' },
      { label: 'General Section (Tilted Angle θ)', latex: 'MB_o = \\frac{I}{V\\sin\\theta}' },
      { label: 'Metacentric Height', latex: 'MG = MB_o \\pm GB_o' },
      { label: 'Righting Moment (when MB_o > GB_o)', latex: 'RM = W(MG\\sin\\theta) = BF(MG\\sin\\theta)' }
    ],
    variables: [
      { symbol: 'B, D', meaning: 'Width of rectangular body and draft (depth of flotation), m' },
      { symbol: 'I', meaning: 'Moment of inertia of waterline section (Top View) about longitudinal axis' },
      { symbol: 'V', meaning: 'Total volume submerged (m³)' },
      { symbol: 'G, B_o, B′_o', meaning: 'Center of gravity, upright buoyancy, and tilted buoyancy center' }
    ],
    notes: [
      'Stable (Righting Moment, RM) occurs when M is above G (MB_o > GB_o).',
      'Unstable (Overturning Moment, OM) occurs when M is below G (MB_o < GB_o).'
    ],
    diagrams: [
      {
        src: '/assets/hpge_formulas/p05_righting_moment.png',
        caption: 'Righting Moment (MB_o > GB_o): M lies above G, restoring vessel upright.',
        alt: 'Righting moment stability diagram showing M above G'
      },
      {
        src: '/assets/hpge_formulas/p05_overturning_moment.png',
        caption: 'Overturning Moment (MB_o < GB_o): M lies below G, capsizing vessel.',
        alt: 'Overturning moment stability diagram showing M below G'
      }
    ],
    flashcardPrompt: 'Give the MB_o formulas for rectangular and general floating sections, Metacentric Height (MG), Righting Moment (RM), and stability criterion.',
    flashcardHint: 'Uses waterline width B, draft D, and top-view moment of inertia I.',
    difficulty: 'Hard'
  },

  // --- P.6: Gravity Dams ---
  {
    id: 'hpge_p06_gravity_dams',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Gravity Dams & Hoop Tension',
    examSubtopic: 'Fluid Statics & Buoyancy',
    title: 'Gravity Dams: Foundation Pressure, Resultant Location & Safety Factors',
    pageRef: 6,
    latex: 'q = \\frac{R_y}{B}\\left(1 \\pm \\frac{6e}{B}\\right) \\quad (e \\le B/6)',
    secondaryEquations: [
      { label: 'If e > B/6 (Middle-Third Exceeded)', latex: 'q_{\\max} = \\frac{2 R_y}{3 \\bar{x}}, \\qquad q_{\\min} = 0' },
      { label: 'Location of R_y from Toe & Eccentricity', latex: '\\bar{x} = \\frac{RM - OM}{R_y}, \\qquad e = \\left|\\frac{B}{2} - \\bar{x}\\right|' },
      { label: 'Factor of Safety vs Overturning', latex: 'FO = \\frac{RM}{OM}' },
      { label: 'Factor of Safety vs Sliding', latex: 'FS = \\frac{\\mu R_y}{R_x}' }
    ],
    variables: [
      { symbol: 'R_x, R_y', meaning: 'Resultant horizontal and vertical forces acting per 1 m length of dam' },
      { symbol: 'RM, OM', meaning: 'Righting moment and overturning moment taken about the toe' },
      { symbol: 'q_max / q_min', meaning: '+ sign gives maximum toe pressure; − sign gives minimum heel pressure' }
    ],
    notes: [
      '4-Step Solution: (1) Consider 1 m length; (2) Determine all horizontal & vertical forces including uplift U; (3) Solve R_x and R_y; (4) Sum moments about toe.'
    ],
    diagrams: [
      {
        src: '/assets/hpge_formulas/p06_gravity_dam.png',
        caption: 'Gravity dam free-body diagram with upstream P1, downstream P2, weight W, and uplift U.',
        alt: 'Gravity dam cross section showing P1, P2, W, and base uplift diagram U'
      }
    ],
    flashcardPrompt: 'State Gravity Dam soil bearing pressures for e ≤ B/6 and e > B/6, location x̄, eccentricity e, and Overturning & Sliding Factors of Safety.',
    flashcardHint: 'Check middle-third rule (e ≤ B/6) before choosing trapezoidal vs triangular base pressure.',
    difficulty: 'Hard'
  },

  // --- P.7: Hoop Tension & Moving Vessels ---
  {
    id: 'hpge_p07_hoop_tension',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Gravity Dams & Hoop Tension',
    examSubtopic: 'Fluid Statics & Buoyancy',
    title: 'Hoop Tension in Pipes & Wood-Stave Tanks',
    pageRef: 7,
    latex: 't = \\frac{p D}{2 S_t (\\text{eff})}, \\qquad S = \\frac{2 T}{p D}',
    variables: [
      { symbol: 't', meaning: 'Required pipe wall thickness when walls carry hoop stress' },
      { symbol: 'S_t', meaning: 'Allowable tensile stress of pipe wall (assume eff = 100% if not given)' },
      { symbol: 'S', meaning: 'Center-to-center spacing of external steel hoops/bands' },
      { symbol: 'T', meaning: 'Tensile force capacity in one hoop' }
    ],
    flashcardPrompt: 'Give the thin-wall cylinder thickness formula (t) and hoop center-to-center spacing formula (S).',
    flashcardHint: 'Notice t uses 2·S_t·eff in denominator while spacing S = 2T/(pD).',
    difficulty: 'Medium'
  },
  {
    id: 'hpge_p07_moving_vessels',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Moving & Rotating Vessels',
    examSubtopic: 'Fluid Statics & Buoyancy',
    title: 'Moving Vessels: Horizontal, Inclined & Vertical Acceleration',
    pageRef: 7,
    latex: '\\tan\\theta = \\frac{a}{g} \\quad (\\text{Horizontal}), \\qquad P = \\gamma h\\left(1 \\pm \\frac{a}{g}\\right) \\quad (\\text{Vertical})',
    secondaryEquations: [
      {
        label: 'Inclined Plane Motion (incline angle α)',
        latex: '\\tan\\theta = \\frac{a\\cos\\alpha}{g \\pm a\\sin\\alpha}'
      }
    ],
    variables: [
      { symbol: 'θ', meaning: 'Angle liquid free surface makes with the horizontal' },
      { symbol: '±', meaning: '+ for upward acceleration (or accelerating up incline); − for downward' }
    ],
    notes: [
      'Note: α in the inclined-plane diagram represents the road slope angle.',
      'If tank is full/pressurized (closed), an imaginary head of water rises above the lid at the same slope.'
    ],
    diagrams: [
      {
        src: '/assets/hpge_formulas/p07_moving_horizontal.png',
        caption: 'Horizontal acceleration: free surface tilts at tanθ = a/g.',
        alt: 'Truck tank accelerating horizontally with tilted liquid surface'
      },
      {
        src: '/assets/hpge_formulas/p07_moving_inclined.png',
        caption: 'Inclined acceleration along ramp angle α.',
        alt: 'Truck tank accelerating on inclined ramp angle alpha'
      },
      {
        src: '/assets/hpge_formulas/p07_moving_vertical.png',
        caption: 'Vertical acceleration tank showing pressure change P = γh(1 ± a/g).',
        alt: 'Vertically accelerating fluid tank diagram'
      }
    ],
    flashcardPrompt: 'State the free-surface tilt angle equations (tanθ) for horizontal & inclined accelerating vessels and pressure formula for vertical acceleration.',
    flashcardHint: 'Uses ratio of inertial acceleration components to g.',
    difficulty: 'Medium'
  },

  // --- P.8: Rotating Vessels & Bernoulli ---
  {
    id: 'hpge_p08_rotating_vessels',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Moving & Rotating Vessels',
    examSubtopic: 'Fluid Statics & Buoyancy',
    title: 'Rotating Vessels (Paraboloid of Revolution)',
    pageRef: 8,
    latex: 'y = \\frac{\\omega^2 r^2}{2 g}, \\qquad \\frac{r^2}{h} = \\frac{x^2}{y}',
    secondaryEquations: [
      { label: 'Slope of Paraboloid Surface at Distance x', latex: '\\tan\\theta = \\frac{\\omega^2 x}{g}' },
      { label: 'No-Spillage Open Tank Condition', latex: 'y = 2 D' },
      { label: 'Closed Tank (Not Full, No Imaginary Bottom)', latex: '2 y D = y_1^2' },
      { label: 'Closed Tank (With Imaginary Bottom Apex)', latex: '2 y D = y_1^2 - y_2^2' },
      { label: 'Angular Velocity Conversion', latex: '1\\,\\text{rpm} = \\frac{\\pi}{30}\\,\\text{rad/s}' }
    ],
    variables: [
      { symbol: 'y', meaning: 'Total paraboloid depth/height from apex to wall rim' },
      { symbol: 'D', meaning: 'Initial freeboard / ullage distance above original water level' },
      { symbol: 'SPP', meaning: 'Squared Property of Parabola relating radii r, x to heights h, y' }
    ],
    notes: [
      'Volume of a paraboloid of revolution = (1/2) π r² y (half the enclosing cylinder volume).'
    ],
    diagrams: [
      {
        src: '/assets/hpge_formulas/p08_rotating_vessel.png',
        caption: 'Rotating cylindrical tank showing paraboloid vertex, centrifugal force CF, and height y.',
        alt: 'Rotating vessel cross section with paraboloid surface'
      }
    ],
    flashcardPrompt: 'Write the Rotating Vessel paraboloid height (y), Squared Property of Parabola (SPP), open tank no-spillage condition, and closed-tank shortcut equations.',
    flashcardHint: 'Remember paraboloid height is ω²r²/(2g) and 1 rpm = π/30 rad/s.',
    difficulty: 'Hard'
  },
  {
    id: 'hpge_p08_bernoulli_continuity',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Fluid Flow, Energy & Head Losses',
    examSubtopic: 'Fluid Dynamics & Energy/Continuity',
    title: 'Continuity Equation, Total Energy Head & Bernoulli’s Theorem',
    pageRef: 8,
    latex: '\\frac{v_1^2}{2g} + \\frac{P_1}{\\gamma} + z_1 = \\frac{v_2^2}{2g} + \\frac{P_2}{\\gamma} + z_2 + HL',
    secondaryEquations: [
      { label: 'Discharge & Continuity', latex: 'Q = A v, \\qquad Q_1 = Q_2 = Q_3' },
      { label: 'Total Energy Head', latex: 'E = \\frac{v^2}{2g} + \\frac{P}{\\gamma} + z' },
      { label: 'Ideal Flow (No Head Loss)', latex: '\\frac{v_1^2}{2g} + \\frac{P_1}{\\gamma} + z_1 = \\frac{v_2^2}{2g} + \\frac{P_2}{\\gamma} + z_2' }
    ],
    diagrams: [
      {
        src: '/assets/hpge_formulas/p08_bernoulli_pipe.png',
        caption: 'Velocity head (v²/2g), pressure head (P/γ), and elevation head (z) above datum.',
        alt: 'Bernoulli energy heads on an inclined pipe above datum'
      }
    ],
    flashcardPrompt: 'State the Continuity Equation, Total Energy Head (E), and Bernoulli’s Energy Equation with and without head loss (HL).',
    flashcardHint: 'Three heads: Velocity head + Pressure head + Elevation head.',
    difficulty: 'Easy'
  },

  // --- P.9: EGL, Pump, Turbine, Power, Head Losses ---
  {
    id: 'hpge_p09_pump_turbine_power',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Fluid Flow, Energy & Head Losses',
    examSubtopic: 'Fluid Dynamics & Energy/Continuity',
    title: 'Slope of EGL, Pump/Turbine Energy Equations, Power & Efficiency',
    pageRef: 9,
    latex: 'P = \\gamma Q E, \\qquad \\text{eff}(\\%) = \\frac{\\text{Output}}{\\text{Input}}(100)',
    secondaryEquations: [
      { label: 'Pump Energy Equation (Adds Head H_A)', latex: '\\frac{v_1^2}{2g} + \\frac{P_1}{\\gamma} + z_1 + H_A = \\frac{v_2^2}{2g} + \\frac{P_2}{\\gamma} + z_2 + HL' },
      { label: 'Turbine Energy Equation (Extracts Head H_E)', latex: '\\frac{v_1^2}{2g} + \\frac{P_1}{\\gamma} + z_1 = \\frac{v_2^2}{2g} + \\frac{P_2}{\\gamma} + z_2 + HL + H_E' },
      { label: 'Slope of Energy Grade Line (EGL)', latex: 'S = \\frac{HL}{L}' },
      { label: 'Power Conversions (P in Watts)', latex: 'hp = \\frac{P}{746}, \\qquad kW = \\frac{P}{1000}' }
    ],
    notes: [
      'Pump: P = γ Q H_A is the water power OUTPUT (divide by efficiency for motor input).',
      'Turbine: P = γ Q H_E is the water power INPUT (multiply by efficiency for shaft output).'
    ],
    flashcardPrompt: 'Write the Pump & Turbine Bernoulli equations, EGL slope, Hydraulic Power (γQE), Watt-to-hp conversion, and Pump vs Turbine input/output rule.',
    flashcardHint: 'Pump adds H_A on left side (P is output); Turbine puts H_E on right side (P is input).',
    difficulty: 'Medium'
  },
  {
    id: 'hpge_p09_head_losses',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Fluid Flow, Energy & Head Losses',
    examSubtopic: 'Open Channels, Weirs & Pipe Flow',
    title: 'Pipe Friction Head Loss: Darcy-Weisbach, Manning’s & Hazen-Williams',
    pageRef: 9,
    latex: 'h_f = \\frac{f L v^2}{2 D g} = 0.0826\\, f L \\frac{Q^2}{D^5}',
    secondaryEquations: [
      { label: 'Manning’s Formula (All Sections)', latex: 'h_f = 6.35\\, n^2 L \\frac{v^2}{D^{4/3}}' },
      { label: 'Manning’s Formula (Circular Pipes Only)', latex: 'h_f = 10.29\\, n^2 L \\frac{Q^2}{D^{16/3}}' },
      { label: 'Hazen-Williams Formula (Circular Pipes Only)', latex: 'h_f = \\frac{10.67\\, L\\, Q^{1.85}}{C^{1.85}\\, D^{4.87}}' },
      { label: 'Hazen-Williams Velocity (All Sections) & Circular Discharge', latex: 'v = 0.8492\\, C\\, R^{0.63}\\, S^{0.54}, \\qquad Q = 0.2785\\, C\\, D^{2.63}\\, S^{0.54}' }
    ],
    notes: [
      'Check discharge forms carefully: Darcy uses Q²/D⁵ (0.0826), Manning uses Q²/D^(16/3) (10.29), and Hazen-Williams uses 10.67·L·Q^1.85 / (C^1.85·D^4.87).'
    ],
    flashcardPrompt: 'State the three major pipe friction head-loss formulas (Darcy-Weisbach, Manning’s, and Hazen-Williams) in SI Q-D form.',
    flashcardHint: 'Constants: 0.0826 (Darcy), 10.29 (Manning), 10.67 (Hazen-Williams).',
    difficulty: 'Hard'
  },

  // --- P.10: Non-circular, Minor loss, Series/Parallel, Water Hammer ---
  {
    id: 'hpge_p10_pipes_noncircular_minor',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Pipe Networks, Water Hammer & Reynolds Number',
    examSubtopic: 'Open Channels, Weirs & Pipe Flow',
    title: 'Equivalent Diameter, Minor Loss, Series & Parallel Pipes',
    pageRef: 10,
    latex: 'D = \\frac{4 A}{P}, \\qquad h_m = k_m \\frac{v^2}{2g}',
    secondaryEquations: [
      { label: 'Series Pipes', latex: 'Q_1 = Q_2 = Q_3, \\qquad HL = h_{f1} + h_{f2} + h_{f3}, \\qquad h_f = \\frac{\\Delta P}{\\gamma}' },
      { label: 'Parallel Pipes', latex: 'Q = Q_1 + Q_2 + Q_3, \\qquad h_{f1} = h_{f2} = h_{f3}' }
    ],
    variables: [
      { symbol: 'P', meaning: 'Wetted perimeter (so D = 4R where R = A/P is hydraulic radius)' },
      { symbol: 'k_m', meaning: 'Minor loss coefficient (valve, bend, entrance, sudden expansion)' }
    ],
    diagrams: [
      {
        src: '/assets/hpge_formulas/p10_series_pipes.png',
        caption: 'Series pipes: identical discharge Q, additive head losses.',
        alt: 'Schematic of three pipes connected in series'
      },
      {
        src: '/assets/hpge_formulas/p10_parallel_pipes.png',
        caption: 'Parallel pipes: discharges add (Q = Q1 + Q2 + Q3), head loss across branches is equal.',
        alt: 'Schematic of three parallel pipe branches between junctions A and B'
      }
    ],
    flashcardPrompt: 'Write the Non-Circular Equivalent Diameter (D), Minor Head Loss (h_m), Series Pipe rules, and Parallel Pipe rules.',
    flashcardHint: 'Analogous to electrical circuits: Series shares Q; Parallel shares head loss h_f.',
    difficulty: 'Easy'
  },
  {
    id: 'hpge_p10_water_hammer',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Pipe Networks, Water Hammer & Reynolds Number',
    examSubtopic: 'Open Channels, Weirs & Pipe Flow',
    title: 'Water Hammer Celerity & Valve Closure Surge Pressure',
    pageRef: 10,
    latex: 'c = \\sqrt{\\frac{E_c}{\\rho}} = \\sqrt{\\frac{E_B}{\\rho\\left(1 + \\frac{E_B d}{E t}\\right)}}',
    secondaryEquations: [
      { label: 'Rigid Pipes Celerity', latex: 'c = \\sqrt{\\frac{E_B}{\\rho}}' },
      { label: 'Composite Modulus Relation', latex: '\\frac{1}{E_c} = \\frac{1}{E_B} + \\frac{d}{E t}' },
      { label: 'Round-Trip Wave Travel Time (Valve to Reservoir & Back)', latex: 'T = \\frac{2 L}{c}' },
      { label: 'Rapid Closure (t_c < 2L/c)', latex: 'P_h = \\rho c v' },
      { label: 'Slow Closure (t_c > 2L/c)', latex: 'P_h = \\frac{2 L \\rho v}{t_c}' }
    ],
    variables: [
      { symbol: 'E_B, E, E_c', meaning: 'Fluid bulk modulus, pipe wall Young’s modulus, and composite modulus' },
      { symbol: 'd, t', meaning: 'Pipe diameter and wall thickness' },
      { symbol: 't_c, 2L/c', meaning: 'Valve closure time vs critical round-trip wave travel time' }
    ],
    flashcardPrompt: 'State the Water Hammer wave celerity (c) for rigid and non-rigid pipes, composite modulus E_c, and rapid vs slow closure pressure P_h.',
    flashcardHint: 'Critical closure threshold is t_c = 2L/c.',
    difficulty: 'Hard'
  },

  // --- P.11: Reynolds Number & Orifice ---
  {
    id: 'hpge_p11_reynolds_colebrook',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Pipe Networks, Water Hammer & Reynolds Number',
    examSubtopic: 'Open Channels, Weirs & Pipe Flow',
    title: 'Reynolds Number & Friction Factor (Laminar vs Turbulent)',
    pageRef: 11,
    latex: 'N_R = \\frac{v D}{\\nu} = \\frac{v D \\rho}{\\mu}, \\qquad \\nu = \\frac{\\mu}{\\rho}',
    secondaryEquations: [
      { label: 'Laminar Flow (N_R < 2,000)', latex: 'f = \\frac{64}{N_R}' },
      { label: 'Turbulent Flow (N_R > 2,000 — Colebrook-White)', latex: '\\frac{1}{\\sqrt{f}} = -2\\log\\left(\\frac{\\varepsilon}{3.7 D} + \\frac{2.51}{N_R \\sqrt{f}}\\right)' }
    ],
    variables: [
      { symbol: 'ν', meaning: 'Kinematic viscosity = μ/ρ (dynamic viscosity / density)' },
      { symbol: 'ε', meaning: 'Absolute pipe wall roughness height' }
    ],
    flashcardPrompt: 'Give Reynolds Number (N_R), Laminar friction factor (N_R < 2,000), and Colebrook-White equation for Turbulent flow (N_R > 2,000).',
    flashcardHint: 'Laminar friction factor depends only on Reynolds number: 64 / N_R.',
    difficulty: 'Medium'
  },
  {
    id: 'hpge_p11_orifice_equations',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Orifices & Weirs',
    examSubtopic: 'Fluid Dynamics & Energy/Continuity',
    title: 'Orifice Velocity, Discharge Coefficients & Head Loss',
    pageRef: 11,
    latex: 'V_{\\text{actual}} = C_v \\sqrt{2gh}, \\qquad Q = C A \\sqrt{2gh}, \\qquad C = C_c C_v',
    secondaryEquations: [
      { label: 'Theoretical Velocity & Contraction Ratio', latex: 'V_t = \\sqrt{2gh}, \\qquad C_c = \\frac{a}{A}' },
      { label: 'Orifice Head Loss', latex: 'HL = \\frac{v^2}{2g}\\left(\\frac{1}{C_v^2} - 1\\right)' },
      { label: 'Effective Head with Pressurized Surface', latex: 'H_{\\text{eff}} = h + \\frac{P}{\\gamma}' }
    ],
    variables: [
      { symbol: 'C_c, C_v, C', meaning: 'Coefficient of contraction (a/A), velocity, and discharge' },
      { symbol: 'v', meaning: 'Actual jet velocity at vena contracta' }
    ],
    flashcardPrompt: 'State the Orifice formulas for Theoretical/Actual velocity, Discharge (Q), C = C_c·C_v, Head Loss (HL), and pressurized surface head.',
    flashcardHint: 'Note v in HL = (v²/2g)(1/C_v² - 1) is the actual vena contracta velocity.',
    difficulty: 'Medium'
  },

  // --- P.12: Froude Number, Critical Depth, Most Efficient Sections ---
  {
    id: 'hpge_p12_froude_critical_depth',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Open Channel Flow & Hydraulic Jump',
    examSubtopic: 'Open Channels, Weirs & Pipe Flow',
    title: 'Froude’s Number, Flow Regimes, Critical Depth & Shear Stress',
    pageRef: 12,
    latex: 'N_F = \\frac{v}{\\sqrt{g\\, d_m}}, \\qquad \\frac{Q^2}{g} = \\frac{A_c^3}{B_c}',
    secondaryEquations: [
      { label: 'Rectangular Channel Critical Depth', latex: 'd_c = \\sqrt[3]{\\frac{q^2}{g}} = \\frac{2}{3} E_c' },
      { label: 'Channel Boundary Shearing Stress', latex: '\\tau = \\gamma R S' }
    ],
    variables: [
      { symbol: 'N_F < 1', meaning: 'Upper Stage / Tranquil / Subcritical flow' },
      { symbol: 'N_F > 1', meaning: 'Lower Stage / Rapid / Supercritical flow' },
      { symbol: 'd_m', meaning: 'Hydraulic depth A/T (for rectangular sections, d_m = d)' }
    ],
    flashcardPrompt: 'Give Froude’s Number, Subcritical vs Supercritical regimes, Critical Depth equations (general & rectangular), and Boundary Shear Stress τ.',
    flashcardHint: 'Unit discharge q = Q/b for rectangular sections; boundary shear τ = γRS.',
    difficulty: 'Medium'
  },
  {
    id: 'hpge_p12_most_efficient_sections',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Open Channel Flow & Hydraulic Jump',
    examSubtopic: 'Open Channels, Weirs & Pipe Flow',
    title: 'Most Efficient Open-Channel Cross Sections',
    pageRef: 12,
    latex: 'R = \\frac{d}{2} \\; (\\text{Rect / Semi-Circle / Trap}), \\qquad R = \\frac{D}{4} \\; (\\text{Full Circle})',
    secondaryEquations: [
      { label: 'Rectangular & 90° Triangular', latex: 'b = 2 d' },
      { label: 'Circular Conduit Max Discharge vs Max Velocity', latex: 'd_{\\max Q} = 0.94 D, \\qquad d_{\\max V} = 0.81 D' }
    ],
    notes: [
      'Most efficient Trapezoidal section: half-hexagon with 60° side slopes, top width = 2x, bottom = x, slant side = x.',
      'Full circle AND semi-circle flowing full have Hydraulic Radius R = D/4 (which equals d/2 for semi-circle).'
    ],
    diagrams: [
      {
        src: '/assets/hpge_formulas/p12_efficient_sections.png',
        caption: 'Most efficient rectangular, semi-circular, 90° triangular, circular max-Q/max-V, and half-hexagon trapezoidal channels.',
        alt: 'Diagrams of most hydraulically efficient open channel cross sections'
      }
    ],
    flashcardPrompt: 'What are the geometric proportions and hydraulic radii (R) for Most Efficient Rectangular, Triangular, Trapezoidal, Semi-Circular, and Circular channels (Max Q & Max V)?',
    flashcardHint: 'Max discharge occurs at d = 0.94D; Max velocity occurs at d = 0.81D.',
    difficulty: 'Medium'
  },

  // --- P.13: Falling Head & Chezy-Manning ---
  {
    id: 'hpge_p13_falling_head_orifice',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Orifices & Weirs',
    examSubtopic: 'Fluid Dynamics & Energy/Continuity',
    title: 'Unsteady Flow: Falling Head Tank Emptying Time',
    pageRef: 13,
    latex: 't = \\int_{h_2}^{h_1} \\frac{A_s\\, dh}{C A \\sqrt{2gh}}',
    secondaryEquations: [
      { label: 'Prismatic Tank (Constant A_s)', latex: 't = \\frac{2 A_s}{C A \\sqrt{2g}}\\left(\\sqrt{h_1} - \\sqrt{h_2}\\right)' }
    ],
    variables: [
      { symbol: 'A_s, A', meaning: 'Tank water surface area and orifice area respectively' },
      { symbol: 'h_1, h_2', meaning: 'Initial and final heads above orifice' }
    ],
    flashcardPrompt: 'State the general integral and constant-cross-section (A_s) formula for Falling Head tank emptying time (t).',
    flashcardHint: 'For constant A_s, factor 2 appears because time equals twice the steady-state time at initial head when emptying completely.',
    difficulty: 'Medium'
  },
  {
    id: 'hpge_p13_chezy_manning',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Open Channel Flow & Hydraulic Jump',
    examSubtopic: 'Open Channels, Weirs & Pipe Flow',
    title: 'Hydraulic Radius, Chezy-Manning Velocity & Bazin Coefficient',
    pageRef: 13,
    latex: 'v = \\frac{1}{n} R^{2/3} S^{1/2}, \\qquad R = \\frac{A}{P}, \\qquad S = \\frac{h_f}{L}',
    secondaryEquations: [
      { label: 'Chezy Coefficient (by Manning)', latex: 'C = \\frac{1}{n} R^{1/6}' },
      { label: 'Chezy Coefficient (by Bazin)', latex: 'C = \\frac{87}{1 + \\frac{m}{\\sqrt{R}}}' },
      { label: 'Specific Energy', latex: 'E = \\frac{v^2}{2g} + d' }
    ],
    flashcardPrompt: 'Write the Chezy-Manning velocity equation, Hydraulic Radius (R), Manning & Bazin Chezy Coefficients (C), and Specific Energy (E).',
    flashcardHint: 'Chezy formula v = C√(RS) with C = (1/n)R^(1/6) yields Manning’s equation.',
    difficulty: 'Easy'
  },

  // --- P.14 & P.15: Weirs ---
  {
    id: 'hpge_p14_weirs_rectangular_triangular',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Orifices & Weirs',
    examSubtopic: 'Open Channels, Weirs & Pipe Flow',
    title: 'Rectangular Weir (Francis Formula) & Triangular V-Notch Weir',
    pageRef: 14,
    latex: 'Q = \\frac{2}{3} C \\sqrt{2g}\\, L \\left[\\left(H + \\frac{V_a^2}{2g}\\right)^{1.5} - \\left(\\frac{V_a^2}{2g}\\right)^{1.5}\\right]',
    secondaryEquations: [
      { label: 'General Francis Form (Coefficient m)', latex: 'Q = m L\\left[\\left(H + \\frac{V_a^2}{2g}\\right)^{1.5} - \\left(\\frac{V_a^2}{2g}\\right)^{1.5}\\right]' },
      { label: 'Francis Standard Rectangular Formula (SI)', latex: 'Q = 1.84\\, L\\left[\\left(H + \\frac{V_a^2}{2g}\\right)^{1.5} - \\left(\\frac{V_a^2}{2g}\\right)^{1.5}\\right]' },
      { label: 'Contracted Weir Effective Crest Length', latex: 'L\' = L - 0.1\\, n\\, H \\quad (\\Delta L = 0.1H \\text{ singly},\\; 0.2H \\text{ doubly})' },
      { label: 'Triangular V-Notch Weir (θ = 90° shortcut: 1.4 H^2.5)', latex: 'Q = \\frac{8}{15} C \\sqrt{2g} \\tan\\left(\\frac{\\theta}{2}\\right) H^{2.5} = m H^{2.5}' },
      { label: 'Unsymmetrical Triangular Weir (Side Angles θ₁, θ₂ from Vertical)', latex: 'Q = \\frac{4}{15} C \\sqrt{2g}\\,(\\tan\\theta_1 + \\tan\\theta_2)\\, H^{2.5}' }
    ],
    notes: [
      'For contracted rectangular weirs, effective crest length deducts end contractions from nominal crest width L: L′ = L − 0.1nH (n = 1 singly, n = 2 doubly contracted).'
    ],
    diagrams: [
      {
        src: '/assets/hpge_formulas/p14_weirs_types.png',
        caption: 'Suppressed, Singly Contracted (1 end), and Doubly Contracted (2 ends) rectangular weirs.',
        alt: 'Comparison diagram of suppressed, singly contracted, and doubly contracted weirs'
      }
    ],
    flashcardPrompt: 'Write the Francis Rectangular Weir formula (with velocity of approach V_a), end contraction length adjustments, and Triangular Weir equations.',
    flashcardHint: 'Rectangular exponent is 1.5 (1.84); 90° Triangular V-notch uses Q = 1.4 H^2.5.',
    difficulty: 'Hard'
  },
  {
    id: 'hpge_p15_cipoletti_dam_weir',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Orifices & Weirs',
    examSubtopic: 'Open Channels, Weirs & Pipe Flow',
    title: 'Cipoletti Weir & Dam (Broad-Crested / Spillway) as Weir',
    pageRef: 15,
    latex: 'Q_{\\text{Cipoletti}} = 1.86\\, L H^{1.5}, \\qquad Q_{\\text{Dam}} = 1.71\\, L H^{1.5}',
    notes: [
      'A Cipoletti weir is a trapezoidal weir with 1H:4V side slopes so side discharge compensates for end contractions (no L′ deduction needed).'
    ],
    flashcardPrompt: 'What are the SI discharge constants for a Cipoletti Weir and a Dam Acting as a Weir?',
    flashcardHint: 'Cipoletti uses 1.86 while broad-crested dam weir uses 1.71 (versus Francis 1.84).',
    difficulty: 'Easy'
  },

  // --- P.15: Jet Impact & Pipe Bends ---
  {
    id: 'hpge_p15_jet_impact_pipe_bends',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Jet Impact & Pipe Bends',
    examSubtopic: 'Fluid Dynamics & Energy/Continuity',
    title: 'Impact of Water Jet, Curved Vane & Pipe Bend Forces',
    pageRef: 15,
    latex: '\\sum F_x = \\rho Q (v_{2x} - v_{1x}), \\qquad \\sum F_y = \\rho Q (v_{2y} - v_{1y})',
    secondaryEquations: [
      { label: 'Flat Plate at Right Angle (Stationary)', latex: 'F = \\rho Q v' },
      { label: 'Flat Plate at Right Angle (Moving)', latex: 'F = \\rho Q (v_1 \\pm v_2), \\qquad Q_{\\text{rel}} = A (v_1 \\pm v_2)' }
    ],
    notes: [
      'For moving plate/vane: use (+) if moving against the jet, (−) if moving away from the jet, and compute Q using relative velocity.'
    ],
    diagrams: [
      {
        src: '/assets/hpge_formulas/p15_pipe_bend_forces.png',
        caption: 'Free-body force diagram on an inclined reducing pipe bend.',
        alt: 'Pipe bend reducer free-body diagram showing F1x, F2x, F2y, Rx, and Ry'
      }
    ],
    flashcardPrompt: 'State the Impulse-Momentum force equations for Stationary/Moving flat plates, Curved Vanes, and Pipe Bends/Reducers.',
    flashcardHint: 'Remember ρQ(v_out − v_in) gives force exerted ON the fluid; reaction on bend is equal and opposite.',
    difficulty: 'Medium'
  },

  // --- P.16: Orifice Projectile & Hydraulic Jump ---
  {
    id: 'hpge_p16_orifice_trajectory',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Orifices & Weirs',
    examSubtopic: 'Fluid Dynamics & Energy/Continuity',
    title: 'Orifice Jet Projectile Trajectory Equations',
    pageRef: 16,
    latex: 'y = x\\tan\\theta - \\frac{g x^2}{2 v_1^2 \\cos^2\\theta}',
    secondaryEquations: [
      { label: 'Horizontal & Vertical Displacements', latex: 'x = v_{1x} t, \\qquad y = v_{1y} t - 0.5 g t^2' },
      { label: 'Vertical Velocity Relation', latex: 'v_{2y}^2 = v_{1y}^2 - 2 g y' }
    ],
    flashcardPrompt: 'Write the horizontal/vertical projectile displacement and combined trajectory path equation for an orifice jet.',
    flashcardHint: 'When the orifice discharges horizontally (θ = 0°), the path simplifies to y = −g x² / (2v₁²).',
    difficulty: 'Medium'
  },
  {
    id: 'hpge_p16_hydraulic_jump',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Open Channel Flow & Hydraulic Jump',
    examSubtopic: 'Open Channels, Weirs & Pipe Flow',
    title: 'Hydraulic Jump: Height, Sequent Depths, Head Loss & Power Lost',
    pageRef: 16,
    latex: '\\frac{q^2}{g} = d_1 d_2 \\left(\\frac{d_1 + d_2}{2}\\right) \\quad (\\text{Rectangular Channel})',
    secondaryEquations: [
      { label: 'General Sequent Force Equation', latex: 'P_2 - P_1 = \\frac{\\gamma Q}{g}(v_1 - v_2)' },
      { label: 'Height of Jump & Head Loss', latex: 'H_j = d_2 - d_1, \\qquad HL = E_1 - E_2' },
      { label: 'Power Lost in Jump', latex: 'P = Q \\gamma HL' }
    ],
    diagrams: [
      {
        src: '/assets/hpge_formulas/p16_hydraulic_jump.png',
        caption: 'Hydraulic jump transition from supercritical d_1 to subcritical d_2 showing EGL drop HL.',
        alt: 'Hydraulic jump profile showing d1, d2, v1, v2, EGL, and head loss HL'
      }
    ],
    flashcardPrompt: 'State the Rectangular Hydraulic Jump sequent-depth equation, General Force equation (P₂−P₁), Jump Height, Head Loss (HL), and Power Lost.',
    flashcardHint: 'Connects conjugate depths d₁ and d₂ via unit discharge q = Q/b.',
    difficulty: 'Medium'
  },

  // --- HGE Formula Cards (Engr. Aleah Pearl Javier Once) Additions: Hydraulics ---
  {
    id: 'hpge_hge_p23_mass_weight_flow_heads',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Fluid Flow, Energy & Head Losses',
    examSubtopic: 'Fluid Dynamics & Energy/Continuity',
    title: 'Weight Flow Rate, Mass Flow Rate, Mass Continuity & Energy Heads',
    pageRef: 23,
    latex: 'W = \\gamma Q \\;\\;(\\text{N/s}), \\qquad M = \\rho Q \\;\\;(\\text{kg/s}), \\qquad \\rho_1 Q_1 = \\rho_2 Q_2',
    secondaryEquations: [
      { label: 'Energy Head Equivalence (Per Unit Weight)', latex: '\\text{Velocity Head} = \\frac{v^2}{2g} = \\frac{KE}{W}, \\qquad \\text{Elevation Head} = z = \\frac{PE}{W}' }
    ],
    variables: [
      { symbol: 'W, M', meaning: 'Weight flow rate (N/s or kN/s) and mass flow rate (kg/s)' },
      { symbol: 'KE/W, PE/W', meaning: 'Kinetic energy and potential energy per unit weight of flowing fluid' }
    ],
    flashcardPrompt: 'State the Weight Flow Rate (W), Mass Flow Rate (M), compressible continuity (ρ₁Q₁ = ρ₂Q₂), and KE/PE energy-head definitions.',
    flashcardHint: 'Multiply discharge Q by γ for weight flow rate or by ρ for mass flow rate.',
    difficulty: 'Easy'
  },
  {
    id: 'hpge_hge_p25_kutter_theoretical_chezy',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Open Channel Flow & Hydraulic Jump',
    examSubtopic: 'Open Channels, Weirs & Pipe Flow',
    title: 'Chezy Coefficient: Kutter’s Formula & Theoretical Darcy Link',
    pageRef: 25,
    latex: 'C = \\frac{\\frac{1}{n} + 23 + \\frac{0.00155}{S}}{1 + \\frac{n}{\\sqrt{R}}\\left(23 + \\frac{0.00155}{S}\\right)}',
    secondaryEquations: [
      { label: 'Theoretical Chezy Coefficient (from Friction Factor f)', latex: 'C = \\sqrt{\\frac{8 g}{f}}' }
    ],
    variables: [
      { symbol: 'n, R, S', meaning: 'Kutter/Manning roughness coefficient, hydraulic radius (m), and EGL slope' },
      { symbol: 'f', meaning: 'Darcy-Weisbach friction factor' }
    ],
    notes: [
      'Both constants 23 and 0.00155/S appear identically in the numerator and inside the denominator factor multiplied by n/√R.'
    ],
    flashcardPrompt: 'Write Kutter’s Formula for Chezy Coefficient C (SI) and the Theoretical Chezy equation relating C to friction factor f.',
    flashcardHint: 'Remember (23 + 0.00155/S) repeats in both numerator and denominator; theoretical C = √(8g/f).',
    difficulty: 'Hard'
  },
  {
    id: 'hpge_hge_p17_min_seepage_trapezoid',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Open Channel Flow & Hydraulic Jump',
    examSubtopic: 'Open Channels, Weirs & Pipe Flow',
    title: 'Trapezoidal Canal for Minimum Seepage (Bed Width Relation)',
    pageRef: 17,
    latex: 'b = 4\\, d \\tan\\left(\\frac{\\theta}{2}\\right)',
    variables: [
      { symbol: 'b, d', meaning: 'Trapezoidal bottom width and flow depth' },
      { symbol: 'θ', meaning: 'Side-slope inclination angle measured from the horizontal' }
    ],
    notes: [
      'Applies to minimum-seepage trapezoidal earth canals (note: for minimum wetted perimeter / best hydraulic trapezoid, b = 2d tan(θ/2)).'
    ],
    diagrams: [
      {
        src: '/assets/hpge_formulas/hge_p17_min_seepage_trapezoid.png',
        caption: 'Trapezoidal canal cross section showing bed width b, water depth d, and side slope angle θ.',
        alt: 'Trapezoidal canal diagram with dimensions b, d, and angle theta'
      }
    ],
    flashcardPrompt: 'What is the HGE formula card bed-width relation b for a trapezoidal canal designed for minimum seepage?',
    flashcardHint: 'Expresses bottom width b in terms of depth d and tan(θ/2).',
    difficulty: 'Medium'
  },
  {
    id: 'hpge_hge_p26_alternate_accelerated_flow',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Open Channel Flow & Hydraulic Jump',
    examSubtopic: 'Open Channels, Weirs & Pipe Flow',
    title: 'Alternate Stages of Flow (d vs E & Q) & Accelerated Open-Channel Flow',
    pageRef: 26,
    latex: 'd_1 > d_2, \\qquad v_1 < v_2, \\qquad S \\ne S_o \\quad (\\text{Accelerated Non-Uniform Flow})',
    secondaryEquations: [
      { label: 'Level / Horizontal Channel Bed', latex: 'S_o = 0 \\;\\;(\\text{EGL slope } S > 0)' }
    ],
    notes: [
      'Alternate Depths (d₁ < d_c < d₂): For a given discharge Q, minimum specific energy E_min occurs at critical depth d_c; for a given E, maximum discharge Q_max occurs at d_c.',
      'Subcritical (d > d_c, N_F < 1) is slower/deeper; Supercritical (d < d_c, N_F > 1) is faster/shallower.',
      'For a regular half-hexagon trapezoid of bottom & sides = x and 60° slopes, exact area is (3√3/4)x² ≈ 1.30x² (general approximation for half-hexagon trapezoid).'
    ],
    diagrams: [
      {
        src: '/assets/hpge_formulas/hge_p26_alternate_stages.png',
        caption: 'Specific Energy (d vs E) and Discharge (d vs Q) curves separating Subcritical (d₂ > d_c) and Supercritical (d₁ < d_c) stages.',
        alt: 'Alternate stages of flow specific energy and discharge curves'
      },
      {
        src: '/assets/hpge_formulas/hge_p27_accelerated_flow.png',
        caption: 'Accelerated non-uniform open-channel flow profile showing d₁ > d₂, v₁ < v₂, EGL slope S, and bed slope S_o.',
        alt: 'Accelerated open channel flow diagram'
      }
    ],
    flashcardPrompt: 'Explain Alternate Depths (d₁, d₂) on d–E and d–Q curves (where E_min and Q_max occur) and how depth, velocity, and slopes behave in Accelerated Flow.',
    flashcardHint: 'Critical depth d_c marks both E_min (fixed Q) and Q_max (fixed E); in accelerated flow EGL is not parallel to channel bed.',
    difficulty: 'Medium'
  },
  {
    id: 'hpge_hge_p31_three_reservoir',
    area: 'HPGE',
    domain: 'Hydraulics & Fluid Mechanics',
    topic: 'Pipe Networks, Water Hammer & Reynolds Number',
    examSubtopic: 'Open Channels, Weirs & Pipe Flow',
    title: 'Three-Reservoir Problem: Case 1 vs Case 2 & Junction Piezometric Trial',
    pageRef: 31,
    latex: '\\text{Case 1 (}G > EL_B\\text{): } Q_A = Q_B + Q_C; \\qquad \\text{Case 2 (}G < EL_B\\text{): } Q_A + Q_B = Q_C',
    secondaryEquations: [
      { label: 'Case 1 Energy Relations (G above Reservoir B)', latex: 'EL_A - EL_B = h_{fA} + h_{fB}, \\qquad EL_B - EL_C = h_{fC} - h_{fB}' },
      { label: 'Case 2 Energy Relations (G below Reservoir B)', latex: 'EL_A - EL_B = h_{fA} - h_{fB}, \\qquad EL_B - EL_C = h_{fB} + h_{fC}' }
    ],
    variables: [
      { symbol: 'G = z_j + P/γ', meaning: 'Piezometric (hydraulic grade) elevation at junction J' },
      { symbol: 'h_fA, h_fB, h_fC', meaning: 'Friction head losses in branches connected to reservoirs A (highest), B (middle), and C (lowest)' }
    ],
    notes: [
      'Trial-and-Error Rule when flow direction in Branch B is unknown: First assume junction grade G equals EL_B (so Q_B = 0), compute Q_A from h_fA = EL_A − EL_B and Q_C from h_fC = EL_B − EL_C.',
      'If Q_A > Q_C, surplus flow enters Reservoir B (Case 1, G > EL_B). If Q_A < Q_C, Reservoir B also supplies C (Case 2, G < EL_B). Iterate G until Q_in = Q_out.'
    ],
    diagrams: [
      {
        src: '/assets/hpge_formulas/hge_p31_three_reservoir_c1.jpg',
        caption: 'Case 1: Piezometric grade G lies above Reservoir B (A feeds both B and C: Q_A = Q_B + Q_C).',
        alt: 'Three-reservoir Case 1 diagram with hydraulic grade G above reservoir B'
      },
      {
        src: '/assets/hpge_formulas/hge_p31_three_reservoir_c2.jpg',
        caption: 'Case 2: Piezometric grade G lies below Reservoir B (A and B both feed C: Q_A + Q_B = Q_C).',
        alt: 'Three-reservoir Case 2 diagram with hydraulic grade G below reservoir B'
      }
    ],
    flashcardPrompt: 'Distinguish Three-Reservoir Case 1 vs Case 2 (flow balance, head-loss equations, and how to test which case applies by assuming G = EL_B).',
    flashcardHint: 'Set G = EL_B initially: if Q_A > Q_C, excess water flows INTO B (Case 1); if Q_A < Q_C, B drains OUT to C (Case 2).',
    difficulty: 'Hard'
  },

  // =========================================================================
  // GEOTECHNICAL ENGINEERING (Pages 17 - 34)
  // =========================================================================

  // --- P.17: Soil Properties ---
  {
    id: 'hpge_p17_soil_phase_relations',
    area: 'HPGE',
    domain: 'Geotechnical Engineering',
    topic: 'Soil Properties & Phase Relations',
    examSubtopic: 'Soil Physical Properties & Phase Relationships',
    title: 'Soil Phase Definitions & Weight-Volume Relationships',
    pageRef: 17,
    latex: 'S e = G_s \\omega, \\qquad e = \\frac{n}{1 - n}, \\qquad n = \\frac{e}{1 + e}',
    secondaryEquations: [
      { label: 'Basic Ratios', latex: 'e = \\frac{V_v}{V_s}, \\quad n = \\frac{V_v}{V_T}, \\quad S = \\frac{V_w}{V_v}, \\quad \\omega = \\frac{W_w}{W_s} = \\frac{M_w}{M_s}' },
      { label: 'Weight–Volume & Specific Gravity Definitions', latex: '\\gamma_d = \\frac{W_s}{V_T}, \\quad \\gamma_m = \\frac{W_T}{V_T}, \\quad \\gamma_{\\text{sat}} = \\frac{W_{\\text{sat}}}{V_T}, \\quad \\gamma_s = \\frac{W_s}{V_s}, \\quad G = \\frac{\\gamma}{\\gamma_w}, \\quad G_s = \\frac{\\gamma_s}{\\gamma_w}' },
      { label: 'Dry, Moist & Saturated Unit Weights', latex: '\\gamma_d = \\frac{G_s \\gamma_w}{1 + e}, \\quad \\gamma_m = \\frac{G_s + e S}{1 + e}\\gamma_w, \\quad \\gamma_{\\text{sat}} = \\frac{G_s + e}{1 + e}\\gamma_w' },
      { label: 'Submerged Unit Weight & Moisture Link', latex: '\\gamma\' = \\gamma_{\\text{sat}} - \\gamma_w = \\frac{G_s - 1}{1 + e}\\gamma_w, \\qquad \\gamma_m = (1 + \\omega)\\gamma_d' },
      { label: 'Air Content & Critical Hydraulic Gradient', latex: 'a_c = \\frac{V_a}{V_T} = n(1 - S), \\qquad i_{cr} = \\frac{\\gamma\'}{\\gamma_w} = \\frac{G_s - 1}{1 + e}' }
    ],
    variables: [
      { symbol: 'γ_s, G_s, G', meaning: 'Unit weight of solids W_s/V_s, Specific gravity of solids γ_s/γ_w, Bulk sp. gr. γ/γ_w' },
      { symbol: 'i_cr', meaning: 'Critical hydraulic gradient causing quick condition / piping' }
    ],
    notes: [
      'Remember the two golden three-phase identities: Se = G_s ω and γ_d = γ_m / (1 + ω).',
      'Note: Bulk/mass specific gravity is G = γ/γ_w, whereas solid specific gravity is G_s = γ_s/γ_w.'
    ],
    flashcardPrompt: 'Recite the core Soil Phase Identities (Se = G_s ω, e↔n, γ_d, γ_m, γ_sat, γ′, air content a_c, and critical hydraulic gradient i_cr).',
    flashcardHint: 'Submerged unit weight γ′ replaces G_s with (G_s − 1) in numerator.',
    difficulty: 'Medium'
  },

  // --- P.18: Relative Density, Compaction & Grain Size Distribution ---
  {
    id: 'hpge_p18_relative_density_compaction',
    area: 'HPGE',
    domain: 'Geotechnical Engineering',
    topic: 'Relative Density & Grain Size Distribution',
    examSubtopic: 'Soil Classification, Compaction & Permeability',
    title: 'Relative Density (D_r) & Relative Compaction (R)',
    pageRef: 18,
    latex: 'D_r = \\frac{e_{\\max} - e}{e_{\\max} - e_{\\min}} \\times 100\\% = \\frac{\\frac{1}{\\gamma_{d,\\min}} - \\frac{1}{\\gamma_d}}{\\frac{1}{\\gamma_{d,\\min}} - \\frac{1}{\\gamma_{d,\\max}}} \\times 100\\%',
    secondaryEquations: [
      { label: 'Equivalent Dry Unit Weight Multiplier Form', latex: 'D_r = \\frac{\\gamma_d - \\gamma_{d,\\min}}{\\gamma_{d,\\max} - \\gamma_{d,\\min}}\\left(\\frac{\\gamma_{d,\\max}}{\\gamma_d}\\right)\\times 100\\%' },
      { label: 'Percent / Relative Compaction', latex: 'R = \\frac{\\gamma_d}{\\gamma_{d,\\max}} \\times 100\\%' }
    ],
    tables: [
      {
        title: 'Relative Density Soil Classification',
        headers: ['Dr (%)', 'Soil Description'],
        rows: [
          ['0 – 20', 'Very Loose'],
          ['20 – 40', 'Loose'],
          ['40 – 70', 'Medium Dense'],
          ['70 – 85', 'Dense'],
          ['85 – 100', 'Very Dense']
        ]
      }
    ],
    flashcardPrompt: 'Write both forms of Relative Density D_r (void ratio form & dry unit weight form), Relative Compaction R, and the 5 D_r density classes.',
    flashcardHint: 'Note the extra (γ_d,max / γ_d) multiplier inside the dry unit weight version of D_r!',
    difficulty: 'Medium'
  },
  {
    id: 'hpge_p18_gradation_suitability',
    area: 'HPGE',
    domain: 'Geotechnical Engineering',
    topic: 'Relative Density & Grain Size Distribution',
    examSubtopic: 'Soil Classification, Compaction & Permeability',
    title: 'Uniformity Coefficient (C_u), Curvature (C_c), Sorting (S_o) & Suitability (S_n)',
    pageRef: 18,
    latex: 'C_u = \\frac{D_{60}}{D_{10}}, \\qquad C_c = \\frac{D_{30}^2}{D_{60} D_{10}}',
    secondaryEquations: [
      { label: 'Sorting Coefficient', latex: 'S_o = \\sqrt{\\frac{D_{75}}{D_{25}}}' },
      { label: 'Brown’s Backfill Suitability Number', latex: 'S_n = 1.7 \\sqrt{\\frac{3}{D_{50}^2} + \\frac{1}{D_{20}^2} + \\frac{1}{D_{10}^2}}' }
    ],
    variables: [
      { symbol: 'D_10', meaning: 'Effective particle size (10% finer)' },
      { symbol: 'D_60', meaning: 'Average / 60%-finer particle diameter (mm)' }
    ],
    tables: [
      {
        title: 'Suitability Number (S_n) Vibroflotation Backfill Rating',
        headers: ['S_n Range', 'Rating'],
        rows: [
          ['0 – 10', 'Excellent'],
          ['10 – 20', 'Good'],
          ['20 – 30', 'Fair'],
          ['30 – 50', 'Poor']
        ]
      }
    ],
    flashcardPrompt: 'Give the formulas for C_u, C_c, Sorting Coefficient (S_o), Suitability Number (S_n), and the S_n backfill rating tiers.',
    flashcardHint: 'Suitability number numerator has 3 over D_50², then 1 over D_20² and D_10².',
    difficulty: 'Medium'
  },

  // --- P.19: Permeability & Seepage ---
  {
    id: 'hpge_p19_darcy_permeability',
    area: 'HPGE',
    domain: 'Geotechnical Engineering',
    topic: 'Permeability & Seepage Flow',
    examSubtopic: 'Soil Classification, Compaction & Permeability',
    title: 'Darcy’s Law, Seepage Velocity, Seepage Force & Transmissivity',
    pageRef: 19,
    latex: 'Q = A v = k i A, \\qquad v_s = \\frac{v}{n} = \\frac{k i}{n}',
    secondaryEquations: [
      { label: 'Seepage Force per Unit Volume & Hydraulic Gradient', latex: 'j = i\\,\\gamma_w, \\qquad i = \\frac{h}{L}' },
      { label: 'Aquifer Transmissivity (Horizontal & Confined Well)', latex: 'T = k\\, t = \\frac{Q \\ln(r_1 / r_2)}{2\\pi (h_1 - h_2)}' }
    ],
    variables: [
      { symbol: 'v', meaning: 'Superficial / discharge velocity (= ki)' },
      { symbol: 'v_s', meaning: 'Actual seepage (interstitial) velocity through voids (= v/n)' },
      { symbol: 't', meaning: 'Aquifer thickness (m)' }
    ],
    flashcardPrompt: 'Write Darcy’s Law discharge Q, Seepage Velocity (v_s), Seepage Force (j), Hydraulic Gradient (i), and Transmissivity (T).',
    flashcardHint: 'Seepage velocity divides discharge velocity by porosity n, making v_s > v.',
    difficulty: 'Easy'
  },
  {
    id: 'hpge_p19_lab_pumping_keq',
    area: 'HPGE',
    domain: 'Geotechnical Engineering',
    topic: 'Permeability & Seepage Flow',
    examSubtopic: 'Soil Classification, Compaction & Permeability',
    title: 'Permeability Tests (Lab & Field Pumping) & Layered Equivalent k_eq',
    pageRef: 19,
    latex: 'k_{\\text{const}} = \\frac{V_o L}{t A h}, \\qquad k_{\\text{falling}} = \\frac{a L}{A t} \\ln\\left(\\frac{h_1}{h_2}\\right)',
    secondaryEquations: [
      { label: 'Confined Aquifer Pumping Test (Thickness t)', latex: 'k = \\frac{Q \\ln(r_1 / r_2)}{2 \\pi t (h_1 - h_2)}' },
      { label: 'Unconfined Aquifer Pumping Test', latex: 'k = \\frac{Q \\ln(r_1 / r_2)}{\\pi (h_1^2 - h_2^2)}' },
      { label: 'Equivalent k — Parallel Flow (Horizontal)', latex: 'k_{\\text{eq}} = \\frac{\\sum h k}{H}' },
      { label: 'Equivalent k — Perpendicular Flow (Vertical)', latex: 'k_{\\text{eq}} = \\frac{H}{\\sum (h / k)}' }
    ],
    notes: [
      'Note: Confined aquifer flow uses 2πt(h₁−h₂) with aquifer thickness t, whereas unconfined aquifer flow uses π(h₁²−h₂²).'
    ],
    flashcardPrompt: 'State Constant Head & Falling Head permeability formulas, Confined vs Unconfined Pumping Test equations, and Parallel vs Perpendicular k_eq.',
    flashcardHint: 'Parallel averages thickness-weighted k; Perpendicular takes harmonic average H / Σ(h/k).',
    difficulty: 'Hard'
  },

  // --- P.20 & P.21: Vertical Stresses & Consolidation Settlement ---
  {
    id: 'hpge_p20_effective_stress_settlement',
    area: 'HPGE',
    domain: 'Geotechnical Engineering',
    topic: 'Vertical Stresses & Consolidation Settlement',
    examSubtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    title: 'Effective Stress, Capillary Height & Primary Consolidation Settlement',
    pageRef: 20,
    latex: 'P_E = P_T - P_w, \\qquad S_c = \\frac{C_c H}{1 + e_o}\\log\\left(\\frac{P_o + \\Delta P}{P_o}\\right) \\; (\\text{NC Clay})',
    secondaryEquations: [
      { label: 'Total Stress & Pore Water Pressure', latex: 'P_T = \\sum \\gamma h, \\qquad P_w = \\gamma_w h_w' },
      { label: 'Height of Capillary Rise in Soil', latex: 'h_c = \\frac{C}{e\\, D_{10}}' },
      { label: 'OC Clay Case 1 (P_o + ΔP ≤ P_c)', latex: 'S_c = \\frac{C_s H}{1 + e_o} \\log\\left(\\frac{P_o + \\Delta P}{P_o}\\right)' },
      { label: 'OC Clay Case 2 (P_o < P_c < P_o + ΔP)', latex: 'S_c = \\frac{C_s H}{1 + e_o}\\log\\left(\\frac{P_c}{P_o}\\right) + \\frac{C_c H}{1 + e_o}\\log\\left(\\frac{P_o + \\Delta P}{P_c}\\right)' }
    ],
    notes: [
      'Note: For overconsolidated Case 2 (P_o + ΔP > P_c), the second log ratio uses P_c as the reference denominator: log((P_o + ΔP)/P_c).'
    ],
    flashcardPrompt: 'Write Effective Stress (P_E), capillary rise (h_c = C/(eD₁₀)), Normally Consolidated settlement, and both Overconsolidated settlement cases.',
    flashcardHint: 'Use C_s below preconsolidation stress P_c and C_c beyond P_c.',
    difficulty: 'Hard'
  },
  {
    id: 'hpge_p21_consolidation_parameters',
    area: 'HPGE',
    domain: 'Geotechnical Engineering',
    topic: 'Vertical Stresses & Consolidation Settlement',
    examSubtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    title: 'Consolidation Parameters: C_c, C_s, OCR, a_v, m_v, C_v & ΔH',
    pageRef: 21,
    latex: 'C_c = 0.009(LL - 10) = \\frac{e_1 - e_2}{\\log(P_2 / P_1)}, \\qquad C_v = \\frac{H_{dr}^2\\, T}{t}',
    secondaryEquations: [
      { label: 'Remolded Clay Compression Index (Skempton)', latex: 'C_c = 0.007(LL - 7)' },
      { label: 'Swell Index & Overconsolidation Ratio', latex: 'C_s = \\frac{C_c}{5} \\; (\\text{if not given}), \\qquad OCR = \\frac{P_c}{P_o}' },
      { label: 'Compressibility & Volume Compressibility', latex: 'a_v = \\frac{e_1 - e_2}{P_2 - P_1}, \\qquad m_v = \\frac{a_v}{1 + e_{\\text{ave}}}' },
      { label: 'Permeability from Consolidation & Layer Compression', latex: 'k = C_v m_v \\gamma_w, \\qquad \\Delta H = \\frac{H\\, \\Delta e}{1 + e_o}' }
    ],
    variables: [
      { symbol: 'H_dr', meaning: 'Maximum drainage path (H/2 for double drainage, H for single drainage)' },
      { symbol: 'T', meaning: 'Dimensionless Time Factor (T_v = π/4·U² for U ≤ 60%)' }
    ],
    flashcardPrompt: 'State Skempton’s undisturbed C_c formula, default C_s, OCR, a_v, m_v, C_v, k from consolidation, and total layer compression ΔH.',
    flashcardHint: 'OCR = P_c / P_o; k = C_v · m_v · γ_w.',
    difficulty: 'Medium'
  },

  // --- P.22 & P.23: Consistency & Classification ---
  {
    id: 'hpge_p22_consistency_classification',
    area: 'HPGE',
    domain: 'Geotechnical Engineering',
    topic: 'Consistency Limits & Soil Classification',
    examSubtopic: 'Soil Classification, Compaction & Permeability',
    title: 'Shrinkage Limit, Atterberg Indices, Activity & AASHTO Group Index',
    pageRef: 22,
    latex: 'PI = LL - PL, \\qquad CI = \\frac{LL - \\omega}{LL - PL}, \\qquad LI = \\frac{\\omega - PL}{LL - PL}',
    secondaryEquations: [
      { label: 'Shrinkage Limit (Volume/Mass Test & Void Relation)', latex: 'SL = \\left[\\frac{M_1 - M_2}{M_2} - \\frac{(V_1 - V_2)\\rho_w}{M_2}\\right](100\\%) = \\frac{100 e}{G_s}' },
      { label: 'Shrinkage Ratio & Specific Gravity Link', latex: 'SR = \\frac{M_2}{V_2 \\rho_w}, \\qquad G_s = \\frac{1}{\\frac{1}{SR} - \\frac{SL}{100}}' },
      { label: 'Activity & AASHTO Group Index (GI)', latex: 'A_c = \\frac{PI}{\\%\\,\\text{Clay}}, \\qquad GI = (F_{200} - 35)(0.005\\,LL) + 0.01(F_{200} - 15)(PI - 10)' }
    ],
    notes: [
      'Plastic Limit (PL): water content wherein soil starts to crumble when rolled into a 1/8 in. (3.2 mm) diameter thread.',
      'Liquid Limit (LL): water content corresponding to 25 blows in Casagrande cup (or 20 mm penetration of fall cone).',
      'Notice CI + LI = 1 always holds!'
    ],
    flashcardPrompt: 'Write the equations for Shrinkage Limit (SL), Shrinkage Ratio (SR), G_s from SR & SL, PI, CI, LI, Activity (A_c), and Group Index (GI).',
    flashcardHint: 'Check: CI + LI = 1, and notice 0.2 + 0.005(LL−40) simplifies directly to 0.005·LL in GI!',
    difficulty: 'Hard'
  },
  {
    id: 'hpge_p23_atterberg_tables_diagram',
    area: 'HPGE',
    domain: 'Geotechnical Engineering',
    topic: 'Consistency Limits & Soil Classification',
    examSubtopic: 'Soil Classification, Compaction & Permeability',
    title: 'Atterberg Soil States, Activity, Consistency & Liquidity Tables',
    pageRef: 23,
    latex: 'w < SL \\;(\\text{Solid}) \\;\\to\\; PL \\;(\\text{Semi-solid}) \\;\\to\\; LL \\;(\\text{Plastic}) \\;\\to\\; \\text{Liquid}',
    diagrams: [
      {
        src: '/assets/hpge_formulas/p23_atterberg_limits.png',
        caption: 'Atterberg Limits transition scale from Solid through Semi-Solid, Plastic, to Liquid state.',
        alt: 'Atterberg limits vertical bar chart showing SL, PL, LL states'
      }
    ],
    tables: [
      {
        title: 'Activity Classification (A_c)',
        headers: ['Activity', 'Class'],
        rows: [
          ['A < 0.7', 'Inactive'],
          ['0.7 ≤ A ≤ 1.2', 'Normal'],
          ['A > 1.2', 'Active']
        ]
      },
      {
        title: 'Consistency & Liquidity Index Interpretation',
        headers: ['CI', 'LI', 'Soil State / Consistency'],
        rows: [
          ['CI > 1', 'LI < 0', 'Brittle Solid'],
          ['0 < CI < 1', '0 < LI < 1', 'Plastic'],
          ['CI < 0', 'LI > 1', 'Liquid']
        ]
      }
    ],
    flashcardPrompt: 'Classify soils by Activity (A < 0.7, 0.7–1.2, > 1.2) and map CI & LI values to Brittle Solid, Plastic, and Liquid states.',
    flashcardHint: 'LI > 1 means natural moisture exceeds Liquid Limit (liquid behavior upon remolding).',
    difficulty: 'Easy'
  },

  // --- P.24: Mohr's Circle & Triaxial Test ---
  {
    id: 'hpge_p24_mohrs_circle_triaxial',
    area: 'HPGE',
    domain: 'Geotechnical Engineering',
    topic: 'Mohr’s Circle & Shear Strength Tests',
    examSubtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    title: 'Mohr’s Circle Principal Stresses & Triaxial Shear Test',
    pageRef: 24,
    latex: '\\sigma_{1,3} = \\frac{\\sigma_x + \\sigma_y}{2} \\pm \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}, \\qquad \\theta_f = 45^\\circ + \\frac{\\phi}{2}',
    secondaryEquations: [
      { label: 'Caltech STAT-Linear Shortcut', latex: '\\sigma_{\\text{major/minor}} = \\bar{x} \\pm \\text{Pol}(\\sigma_x, \\sigma_y) \\quad (r,\\, 2\\theta)' },
      { label: 'Triaxial Principal Stress Relation & Friction Angle', latex: '\\sigma_1 = \\sigma_3 + \\Delta\\sigma, \\qquad \\sin\\phi = \\frac{r}{\\sigma_3 + r} \\;(\\text{NC}), \\qquad \\sin\\phi = \\frac{r}{x + \\sigma_3 + r} \\;(\\text{Cohesive},\\; \\tan\\phi = \\tfrac{c}{x})' },
      { label: 'Direct Shear Mohr-Coulomb Strength', latex: '\\tau = \\sigma_N \\tan\\phi \\;(\\text{NC}), \\qquad \\tau = c + \\sigma_N \\tan\\phi \\;(\\text{Cohesive})' }
    ],
    notes: [
      'Triaxial Drainage Rules: Consolidated/Drained = OPEN valve; Unconsolidated/Undrained = CLOSED valve. If test is DRAINED, subtract pore water pressure u for effective stresses.',
      'Confining pressure σ₃ equals ambient cell/chamber pressure if terminology omits σ₁/Δσ.'
    ],
    diagrams: [
      {
        src: '/assets/hpge_formulas/p24_mohrs_circle.png',
        caption: 'Mohr’s circle showing σ₁, σ₃, deviator stress Δσ, shear τ, and angle 2θ.',
        alt: 'Mohrs circle diagram for soil stresses'
      },
      {
        src: '/assets/hpge_formulas/p24_triaxial_cylinder.png',
        caption: 'Triaxial test soil specimen subjected to cell pressure σ₃ and deviator stress Δσ.',
        alt: 'Triaxial test cylindrical specimen'
      },
      {
        src: '/assets/hpge_formulas/p24_triaxial_envelopes.png',
        caption: 'Mohr-Coulomb failure envelopes for Normally Consolidated (c = 0) vs Cohesive (c > 0) soil.',
        alt: 'Failure envelopes for NC and cohesive soils'
      }
    ],
    flashcardPrompt: 'State the Major/Minor Principal Stress formula (and Caltech Pol shortcut), Triaxial σ₁ = σ₃ + Δσ, and Angle of Failure θ_f.',
    flashcardHint: 'Failure plane makes angle 45° + φ/2 with the major principal plane.',
    difficulty: 'Medium'
  },

  // --- P.25: Direct Shear & Lateral Earth Pressure ---
  {
    id: 'hpge_p25_direct_shear_earth_pressure',
    area: 'HPGE',
    domain: 'Geotechnical Engineering',
    topic: 'Lateral Earth Pressure & Retaining Walls',
    examSubtopic: 'Foundations, Retaining Walls & Slope Stability',
    title: 'Direct Shear & Rankine Active, Passive & At-Rest Earth Pressure',
    pageRef: 25,
    latex: 'K_a = \\cos\\beta \\frac{\\cos\\beta - \\sqrt{\\cos^2\\beta - \\cos^2\\phi}}{\\cos\\beta + \\sqrt{\\cos^2\\beta - \\cos^2\\phi}}, \\qquad K_p = \\cos\\beta \\frac{\\cos\\beta + \\sqrt{\\cos^2\\beta - \\cos^2\\phi}}{\\cos\\beta - \\sqrt{\\cos^2\\beta - \\cos^2\\phi}}',
    secondaryEquations: [
      { label: 'Level Backfill (β = 0)', latex: 'K_a = \\frac{1 - \\sin\\phi}{1 + \\sin\\phi}, \\qquad K_p = \\frac{1 + \\sin\\phi}{1 - \\sin\\phi}' },
      { label: 'At-Rest Coefficient (Jaky)', latex: 'K_o = 1 - \\sin\\phi' },
      { label: 'Lateral Stress Components (1 Layer)', latex: '\\sigma_{\\text{soil}} = K \\gamma\' h, \\quad \\sigma_{\\text{coh}} = \\pm 2c\\sqrt{K}, \\quad \\sigma_{\\text{sur}} = K q, \\quad u = \\gamma_w h_w' }
    ],
    notes: [
      'Cohesion stress 2c√K SUBTRACTS (−) in Active state (tension zone near surface) and ADDS (+) in Passive state.',
      'Direct shear plots: τ = σ tanφ (NC sand/clay), τ = c + σ tanφ (cohesive soil).'
    ],
    diagrams: [
      {
        src: '/assets/hpge_formulas/p25_pressure_diagram.png',
        caption: 'Superposition of soil (kγ′h), cohesion (2c√k), surcharge (kq), and water (γ_w h_w) diagrams.',
        alt: 'Lateral earth pressure diagrams for soil, cohesion, surcharge, and water'
      },
      {
        src: '/assets/hpge_formulas/p25_sloped_backfill.png',
        caption: 'Retaining wall height h with sloped backfill at angle β.',
        alt: 'Retaining wall with sloped backfill beta'
      },
      {
        src: '/assets/hpge_formulas/p25_direct_shear.png',
        caption: 'Direct shear box test and Mohr-Coulomb strength lines.',
        alt: 'Direct shear stress test setup and failure plots'
      }
    ],
    flashcardPrompt: 'Give Rankine Active (K_a), Passive (K_p) for sloped & level backfill, At-Rest (K_o), and the 4 pressure diagram terms on a retaining wall.',
    flashcardHint: 'For cohesion: Passive pushes (+2c√K_p), Active pulls (−2c√K_a).',
    difficulty: 'Hard'
  },

  // --- P.26: Capacity of Driven Piles & Braced Cuts ---
  {
    id: 'hpge_p26_driven_piles_braced_cut',
    area: 'HPGE',
    domain: 'Geotechnical Engineering',
    topic: 'Driven Piles, Braced Cuts & Bearing Capacity',
    examSubtopic: 'Foundations, Retaining Walls & Slope Stability',
    title: 'Driven Piles (Sand & Clay), Pile Efficiency & Peck Braced Cuts',
    pageRef: 26,
    latex: 'Q_{\\text{total}} = Q_f + Q_T, \\qquad Q_{\\text{all}} = \\frac{Q_f + Q_T}{FS}',
    secondaryEquations: [
      { label: 'Driven Pile in Sand Layer', latex: 'Q_f = A_{\\text{press. diag.}} (k)(\\tan\\delta)(P), \\qquad Q_T = q\\, N_q\\, A_{\\text{tip}}' },
      { label: 'Driven Pile in Clay Layer', latex: 'Q_f = c\\, P\\, \\alpha\\, L, \\qquad Q_T = c\\, N_c\\, A_{\\text{tip}}, \\qquad \\alpha = \\frac{f}{c}' },
      { label: 'Pile Group Efficiency', latex: 'Q_{\\text{eff}}(\\%) = \\frac{Q_{u,\\text{group}}}{N \\cdot Q_{u,\\text{indiv}}} \\times 100\\%' },
      { label: 'Braced Cut Apparent Pressure (Peck)', latex: 'p_{\\text{sand}} = 0.65\\, K_a \\gamma h, \\qquad p_{\\text{soft-med clay}} = \\gamma h - 4 c_u \\;(\\tfrac{\\gamma h}{c_u} > 4), \\qquad p_{\\text{stiff clay}} = (0.2\\text{ to }0.4)\\gamma h \\;(\\tfrac{\\gamma h}{c_u} \\le 4)' }
    ],
    notes: [
      'Critical depth D_c in Sand: Loose sand D_c = 10d (pile size); Dense sand D_c = 20d (overburden pressure becomes constant below D_c).',
      'Soft-Medium Clay braced cut rises linearly from 0 to (γh − 4c) over top 0.25h, then stays constant over bottom 0.75h. Stiff Clay uses avg 0.3γh (max 0.4γh) trapezoid over 0.25h–0.75h.'
    ],
    diagrams: [
      {
        src: '/assets/hpge_formulas/p26_piles_sand.png',
        caption: 'Sand layer pile skin friction trapezoidal/critical-depth D_c pressure diagram.',
        alt: 'Driven pile in sand layer showing critical depth Dc'
      },
      {
        src: '/assets/hpge_formulas/p26_piles_clay.png',
        caption: 'Clay layer pile skin friction Q_f and tip bearing Q_T.',
        alt: 'Driven pile in clay layer'
      },
      {
        src: '/assets/hpge_formulas/p26_braced_cut.png',
        caption: 'Peck apparent earth pressure envelopes for braced cuts in Sand and Clay.',
        alt: 'Braced cut pressure envelopes for sand and clay'
      }
    ],
    flashcardPrompt: 'State Driven Pile capacity formulas in Sand & Clay (including critical depth D_c), Pile Group Efficiency, and Peck’s Braced Cut pressures.',
    flashcardHint: 'Sand critical depth: 10d (Loose) vs 20d (Dense). Braced cut clay uses γh − 4c below 0.25h.',
    difficulty: 'Hard'
  },

  // --- P.27 & P.28: Slope Stability & Line Stress ---
  {
    id: 'hpge_p27_slope_stability',
    area: 'HPGE',
    domain: 'Geotechnical Engineering',
    topic: 'Slope Stability & Critical Equilibrium',
    examSubtopic: 'Foundations, Retaining Walls & Slope Stability',
    title: 'Slope Stability: Infinite Slope (Dry vs Seepage) & Fixed Planar Slope',
    pageRef: 27,
    latex: 'FS_{\\text{no seepage}} = \\frac{c}{\\gamma H \\sin\\beta\\cos\\beta} + \\frac{\\tan\\phi}{\\tan\\beta}',
    secondaryEquations: [
      { label: 'Infinite Slope (With Parallel Seepage)', latex: 'FS_{\\text{seepage}} = \\frac{c}{\\gamma_{\\text{sat}} H \\sin\\beta\\cos\\beta} + \\frac{\\gamma\'\\tan\\phi}{\\gamma_{\\text{sat}}\\tan\\beta}' },
      { label: 'Fixed Planar Failure Wedge', latex: 'FS = \\frac{F_f + F_c}{W\\sin\\theta}, \\quad F_f = W\\cos\\theta\\tan\\phi, \\quad F_c = c\\,(L_{\\text{trial}})(\\text{Width})' }
    ],
    notes: [
      'Note: Infinite-slope stability equations require tan(β) in the denominator, and seepage/submerged cases use effective unit weight γ′.'
    ],
    diagrams: [
      {
        src: '/assets/hpge_formulas/p27_slope_infinite.png',
        caption: 'Infinite slope soil stratum inclined at angle β.',
        alt: 'Infinite slope stability diagram'
      },
      {
        src: '/assets/hpge_formulas/p27_slope_fixed.png',
        caption: 'Fixed slope trial failure plane at angle θ below slope face β.',
        alt: 'Fixed slope trial failure wedge diagram'
      }
    ],
    flashcardPrompt: 'Write Factor of Safety equations for Infinite Slopes (without seepage & with seepage) and Fixed Planar Wedge Slopes.',
    flashcardHint: 'Parallel seepage multiplies frictional stability ratio by γ′ / γ_sat.',
    difficulty: 'Hard'
  },
  {
    id: 'hpge_p28_critical_slope_line_load',
    area: 'HPGE',
    domain: 'Geotechnical Engineering',
    topic: 'Slope Stability & Critical Equilibrium',
    examSubtopic: 'Foundations, Retaining Walls & Slope Stability',
    title: 'Critical Slope Height (H_cr), Taylor Stability Number & Line Load Stress',
    pageRef: 28,
    latex: 'H_{cr} = \\frac{4 c}{\\gamma_s}\\cdot\\frac{\\sin\\beta\\cos\\phi}{1 - \\cos(\\beta - \\phi)}, \\qquad m = \\frac{c}{\\gamma_s H}',
    secondaryEquations: [
      { label: 'Stability Factor', latex: '\\text{Stability Factor} = \\frac{1}{m}' },
      { label: 'Line Load Stress in Soil (Boussinesq)', latex: '\\Delta\\sigma_z = P = \\frac{0.637\\, q}{N}, \\qquad N = Z\\left[1 + \\left(\\frac{r}{Z}\\right)^2\\right]^2' }
    ],
    variables: [
      { symbol: 'Z, r', meaning: 'Vertical depth and horizontal distance from line load q (kN/m)' },
      { symbol: 'm', meaning: 'Taylor’s dimensionless Stability Number (reciprocal is Stability Factor)' }
    ],
    flashcardPrompt: 'Give Culmann’s Critical Slope Height (H_cr), Taylor’s Stability Number (m) & Factor (1/m), and Boussinesq Line Load Soil Stress P.',
    flashcardHint: 'Line load stress constant is 0.637 (= 2/π), whereas point load uses 0.477 (= 3/(2π)).',
    difficulty: 'Hard'
  },

  // --- P.29: Terzaghi's Bearing Capacity ---
  {
    id: 'hpge_p29_terzaghi_bearing_capacity',
    area: 'HPGE',
    domain: 'Geotechnical Engineering',
    topic: 'Driven Piles, Braced Cuts & Bearing Capacity',
    examSubtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    title: 'Terzaghi’s Ultimate Bearing Capacity (General & Local Shear)',
    pageRef: 29,
    latex: '\\begin{aligned} q_{\\text{ult,strip}} &= c N_c + q N_q + 0.5\\gamma B N_\\gamma \\\\ q_{\\text{ult,square}} &= 1.3\\, c N_c + q N_q + 0.4\\gamma B N_\\gamma \\\\ q_{\\text{ult,circular}} &= 1.3\\, c N_c + q N_q + 0.3\\gamma B N_\\gamma \\end{aligned}',
    secondaryEquations: [
      { label: 'Terzaghi Rectangular Footing', latex: 'q_{\\text{ult,rect}} = \\left(1 + \\frac{0.3 B}{L}\\right) c N_c + q N_q + \\left(0.5 - \\frac{0.1 B}{L}\\right)\\gamma B N_\\gamma' },
      { label: 'Terzaghi Bearing Factor Relations', latex: 'N_c = \\tan\\phi\\,(K_c + 1), \\quad N_q = K_q\\tan\\phi, \\quad N_\\gamma = 0.5\\tan\\phi\\,(K_\\gamma\\tan\\phi - 1)' },
      { label: 'Local Shear Failure Substitution', latex: 'c\' = \\frac{2}{3}c, \\qquad \\tan\\phi\' = \\frac{2}{3}\\tan\\phi \\;\\;(\\text{uses } N\'_c,\\, N\'_q,\\, N\'_\\gamma)' }
    ],
    variables: [
      { symbol: 'q', meaning: 'Effective overburden surcharge at foundation depth (= γ D_f)' },
      { symbol: 'B', meaning: 'Footing width (or diameter for circular footing)' }
    ],
    flashcardPrompt: 'State Terzaghi’s Ultimate Bearing Capacity equations for Strip, Square, and Circular footings under General and Local Shear Failure.',
    flashcardHint: 'First coefficient: 1.0 Strip, 1.3 Square/Circle. Last coefficient: 0.5 Strip, 0.4 Square, 0.3 Circle.',
    difficulty: 'Medium'
  },

  // --- P.30: Unconfined Compression, Degree of Consolidation & Air Voids ---
  {
    id: 'hpge_p30_unconfined_consolidation_air',
    area: 'HPGE',
    domain: 'Geotechnical Engineering',
    topic: 'Mohr’s Circle & Shear Strength Tests',
    examSubtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    title: 'Unconfined Compression Test, Piezometer Consolidation & Clay Consistency',
    pageRef: 30,
    latex: 'q_u = \\frac{P}{A}, \\qquad c = s_u = \\frac{q_u}{2} = r \\quad (\\sigma_3 = 0)',
    secondaryEquations: [
      { label: 'Degree of Consolidation from Piezometer', latex: 'D_c = \\frac{h_w - h}{h}(100)' },
      { label: 'Percent Air Voids vs Air Content', latex: 'A\\% = 1 - S, \\qquad A_c = n(1 - S)' }
    ],
    diagrams: [
      {
        src: '/assets/hpge_formulas/p30_unconfined_mohr.png',
        caption: 'Unconfined compression Mohr circle starting at origin (σ₃ = 0) with radius r = c = q_u/2.',
        alt: 'Unconfined compression Mohr circle'
      },
      {
        src: '/assets/hpge_formulas/p30_piezometer_consolidation.png',
        caption: 'Standpipe piezometer excess head h vs total piezometric rise h_w above water table.',
        alt: 'Piezometer water head diagram for consolidation'
      }
    ],
    tables: [
      {
        title: 'Undrained Soil Cohesion / Stiffness Reference (kPa)',
        headers: ['Consistency', 'Cohesion / Strength Range (kPa)'],
        rows: [
          ['Soft / Very Soft', '0 – 25 / 25 – 50'],
          ['Medium', '50 – 100'],
          ['Stiff', '100 – 200'],
          ['Very Stiff', '200 – 400'],
          ['Hard', '> 400']
        ]
      }
    ],
    flashcardPrompt: 'Write the Unconfined Compression cohesion formula (c = q_u/2), Piezometer Degree of Consolidation, Air Voids/Content, and Clay Consistency tiers.',
    flashcardHint: 'Because confining stress σ₃ = 0, Mohr circle diameter equals q_u and undrained cohesion c = radius.',
    difficulty: 'Easy'
  },

  // --- P.31: Point Load Stress Distribution ---
  {
    id: 'hpge_p31_point_load_boussinesq_westergaard',
    area: 'HPGE',
    domain: 'Geotechnical Engineering',
    topic: 'Soil Stress Distribution & Compaction',
    examSubtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    title: 'Point Load Stress Distribution: Boussinesq vs Westergaard',
    pageRef: 31,
    latex: 'P_{\\text{Boussinesq}} = \\frac{0.477\\, Q}{Z^2\\left[1 + \\left(\\frac{r}{Z}\\right)^2\\right]^{2.5}}, \\qquad P_{\\text{Westergaard}} = \\frac{0.318\\, Q}{Z^2\\left[1 + 2\\left(\\frac{r}{Z}\\right)^2\\right]^{1.5}}',
    notes: [
      'Note: Standard Boussinesq point-load influence factor uses [1 + (r/Z)²]^2.5, whereas Westergaard uses [1 + 2(r/Z)²]^1.5.',
      'Capillary Zone Rule: If the point considered lies within the capillary zone, pore water tension u_w = −γ_w h_c acts above the water table (located downward from CZ).'
    ],
    flashcardPrompt: 'Compare Boussinesq’s vs Westergaard’s vertical stress formulas for a concentrated point load Q at depth Z and radial offset r.',
    flashcardHint: 'Boussinesq: 0.477 (= 3/2π) and power 2.5. Westergaard: 0.318 (= 1/π) with factor 2 and power 1.5.',
    difficulty: 'Hard'
  },

  // --- P.32: Soft Clay 2:1 & Borrow Pit Compaction ---
  {
    id: 'hpge_p32_soft_clay_2to1_borrow_pit',
    area: 'HPGE',
    domain: 'Geotechnical Engineering',
    topic: 'Soil Stress Distribution & Compaction',
    examSubtopic: 'Soil Classification, Compaction & Permeability',
    title: 'Deep Foundation 2:1 Stress Distribution & Borrow Pit Volume Equation',
    pageRef: 32,
    latex: '\\frac{V_{\\text{req\'d}}}{1 + e_{\\text{req\'d}}} = \\frac{V_{BP}}{1 + e_{BP}}, \\qquad \\text{Cost} = V_{BP}\\times\\text{Unit Price}',
    secondaryEquations: [
      { label: '2:1 Foundation Stress Spread (Square, Rectangular & Circular)', latex: '\\Delta P_{\\text{sq}} = \\frac{F}{(B + z)^2}, \\qquad \\Delta P_{\\text{rect}} = \\frac{F}{(L + z)(W + z)}, \\qquad \\Delta P_{\\text{circ}} = \\frac{F}{\\frac{\\pi}{4}(D + z)^2}' },
      { label: '2:1 Stress under Friction Pile Group', latex: '\\Delta\\sigma_z = \\frac{Q}{(B + z\')(L + z\')} \\quad (\\text{measured from } \\tfrac{2}{3} L_p \\text{ below cap})' }
    ],
    diagrams: [
      {
        src: '/assets/hpge_formulas/p32_soft_clay_2to1.png',
        caption: 'Pile group stress transfer starting at 2/3 L depth and spreading at 1H:2V (2:1) into soft clay.',
        alt: '2:1 stress distribution from 2/3 L under pile foundation'
      }
    ],
    flashcardPrompt: 'How do you distribute pile-group stress into a deep soft clay layer (2:1 rule) and relate embankment volume to borrow-pit excavation volume?',
    flashcardHint: 'Solid volume V_s = V_T / (1 + e) stays conserved between borrow pit and compacted fill.',
    difficulty: 'Medium'
  },

  // --- P.33: Sieve Analysis & USDA Soil Classification ---
  {
    id: 'hpge_p33_sieve_usda_classification',
    area: 'HPGE',
    domain: 'Geotechnical Engineering',
    topic: 'Relative Density & Grain Size Distribution',
    examSubtopic: 'Soil Classification, Compaction & Permeability',
    title: 'Sieve Percent Passing & USDA Textural Classification',
    pageRef: 33,
    latex: '\\text{Modified }\\% = \\frac{\\%\\,(\\text{Sand, Silt, or Clay})}{\\%\\,\\text{Total Fines + Sand}} \\times 100\\%',
    secondaryEquations: [
      { label: 'Cumulative Percent Passing', latex: '\\%\\,\\text{Passing}_{(1)} = \\left(1 - \\frac{\\text{Mass Retained}}{\\text{Total Mass}}\\right)(100), \\qquad \\text{Next} = \\text{Ans} - \\frac{A}{\\text{Total Mass}}\\times 100' },
      { label: 'USDA Particle Size Boundaries', latex: '\\begin{aligned} \\%\,\\text{Gravel} &= 100\\% - \\%\,\\text{2 mm} \\\\ \\%\,\\text{Sand} &= \\%\,\\text{2 mm} - \\%\,\\text{0.05 mm} \\\\ \\%\,\\text{Silt} &= \\%\,\\text{0.05 mm} - \\%\,\\text{0.002 mm} \\\\ \\%\,\\text{Clay} &= \\%\,\\text{0.002 mm} \\end{aligned}' }
    ],
    notes: [
      'Always normalize % Sand, % Silt, and % Clay to 100% excluding gravel before entering the USDA textural triangle!'
    ],
    flashcardPrompt: 'Give the USDA Soil Classification sieve size boundaries (Gravel, Sand, Silt, Clay) and the Modified % normalization formula.',
    flashcardHint: 'Key USDA sieve boundaries: 2 mm, 0.05 mm, and 0.002 mm.',
    difficulty: 'Easy'
  },

  // --- P.34: Flow Net / Seepage ---
  {
    id: 'hpge_p34_flow_net_seepage',
    area: 'HPGE',
    domain: 'Geotechnical Engineering',
    topic: 'Flow Nets & Anisotropic Seepage',
    examSubtopic: 'Soil Classification, Compaction & Permeability',
    title: 'Flow Net Seepage Quantity (Isotropic vs Non-Isotropic) & Unit Head Drop',
    pageRef: 34,
    latex: 'Q_{\\text{iso}} = k H\\left(\\frac{N_f}{N_d}\\right), \\qquad Q_{\\text{aniso}} = \\sqrt{k_x k_z}\\, H\\left(\\frac{N_f}{N_d}\\right)',
    secondaryEquations: [
      { label: 'Head Drop per Equipotential Step', latex: 'd = \\Delta h = \\frac{H}{N_d}' }
    ],
    variables: [
      { symbol: 'H', meaning: 'Total net head difference between upstream and downstream water levels' },
      { symbol: 'N_f, N_d', meaning: 'Number of flow channels and number of equipotential drops' }
    ],
    diagrams: [
      {
        src: '/assets/hpge_formulas/p34_flow_net.png',
        caption: 'Dam seepage flow net illustrating flow channels N_f, equipotential drops N_d, and impermeable boundary.',
        alt: 'Flow net seepage diagram beneath concrete gravity dam'
      }
    ],
    flashcardPrompt: 'State the Flow Net seepage discharge formulas for Isotropic and Non-Isotropic soils plus Head Drop per equipotential step.',
    flashcardHint: 'Anisotropic permeability uses geometric mean √(k_x k_z).',
    difficulty: 'Easy'
  },

  // --- HGE Formula Cards (Engr. Aleah Pearl Javier Once) Additions: Geotechnical ---
  {
    id: 'hpge_hge_p02_bulk_sg_air_void_ratio',
    area: 'HPGE',
    domain: 'Geotechnical Engineering',
    topic: 'Soil Properties & Phase Relations',
    examSubtopic: 'Soil Physical Properties & Phase Relationships',
    title: 'Bulk Specific Gravity (Submerged Weighing) & Air Void Ratio (n_a)',
    pageRef: 2,
    latex: 'G_{s[\\text{bulk}]} = \\frac{W_{\\text{air}}}{W_{\\text{air}} - W_{\\text{water}}}, \\qquad n_a = \\frac{V_a}{V_v} = 1 - S',
    variables: [
      { symbol: 'W_air, W_water', meaning: 'Weight of specimen in air and apparent weight submerged in water' },
      { symbol: 'n_a', meaning: 'Air void ratio as a fraction of total void volume V_v (contrast with air content a_c = V_a/V_T = n(1 − S))' }
    ],
    flashcardPrompt: 'Give Bulk Specific Gravity by submerged weighing and distinguish Air Void Ratio (n_a = V_a/V_v) from Air Content (a_c = V_a/V_T).',
    flashcardHint: 'Air void ratio divides V_a by void volume V_v (= 1 − S), whereas air content divides by total volume V_T (= n(1 − S)).',
    difficulty: 'Easy'
  },
  {
    id: 'hpge_hge_p05_sand_cone_pycnometer',
    area: 'HPGE',
    domain: 'Geotechnical Engineering',
    topic: 'Soil Properties & Phase Relations',
    examSubtopic: 'Soil Classification, Compaction & Permeability',
    title: 'Field Unit Weight (Sand Cone Method) & Pycnometer Specific Gravity Test',
    pageRef: 5,
    latex: 'V_{\\text{soil}} = \\frac{m_{SH}}{\\rho_{d(\\text{sand})}}, \\qquad \\gamma_{m(\\text{soil})} = \\frac{m_{\\text{soil}}}{V_{\\text{soil}}}',
    secondaryEquations: [
      { label: 'Sand Cone Mass Balance', latex: 'm_{T_b} = m_{T_a} + m_{sc} + m_{SH}' },
      { label: 'Pycnometer Specific Gravity (G_s)', latex: 'G_s = \\frac{\\text{Dry} - \\text{Empty}}{(\\text{Water} - \\text{Empty}) - (\\text{Sat} - \\text{Dry})}' }
    ],
    variables: [
      { symbol: 'm_Tb, m_Ta', meaning: 'Initial and final mass of sand-cone bottle + sand assembly' },
      { symbol: 'm_sc, m_SH', meaning: 'Mass of sand filling cone/plate and mass of sand filling the excavated test hole' },
      { symbol: 'Empty, Dry, Water, Sat', meaning: 'Masses of empty pycnometer, pycnometer + dry soil, pycnometer + water, and pycnometer + soil + water' }
    ],
    flashcardPrompt: 'State the Sand Cone field density equations (mass balance, hole volume, wet soil unit weight) and the Pycnometer G_s formula.',
    flashcardHint: 'Subtract cone sand m_sc and remaining jar mass m_Ta from initial jar mass m_Tb to get m_SH in the hole.',
    difficulty: 'Medium'
  },
  {
    id: 'hpge_hge_p05_hydrometer_stokes',
    area: 'HPGE',
    domain: 'Geotechnical Engineering',
    topic: 'Relative Density & Grain Size Distribution',
    examSubtopic: 'Soil Classification, Compaction & Permeability',
    title: 'Hydrometer Analysis & Stokes’ Law (Fine-Grained Particle Sizing)',
    pageRef: 5,
    latex: 'v = \\frac{\\rho_s - \\rho_w}{18\\,\\eta} D^2, \\qquad D = K \\sqrt{\\frac{L}{t}}, \\qquad K = \\sqrt{\\frac{30\\,\\eta}{G_s - 1}}',
    variables: [
      { symbol: 'v', meaning: 'Terminal settling velocity of soil sphere in suspension' },
      { symbol: 'η', meaning: 'Absolute viscosity of water (g/(cm·s) or poise)' },
      { symbol: 'D, L, t', meaning: 'Particle diameter (mm), effective fall depth (cm), and elapsed time (min)' }
    ],
    flashcardPrompt: 'Write Stokes’ Law terminal velocity equation, Hydrometer grain diameter equation D = K√(L/t), and constant K.',
    flashcardHint: 'In standard hydrometer units (L in cm, t in min, D in mm), K uses 30η / (G_s − 1).',
    difficulty: 'Medium'
  },
  {
    id: 'hpge_hge_p05_flow_toughness_shrinkage',
    area: 'HPGE',
    domain: 'Geotechnical Engineering',
    topic: 'Consistency Limits & Soil Classification',
    examSubtopic: 'Soil Classification, Compaction & Permeability',
    title: 'Flow Index, Toughness Index, Shrinkage Measures, Fall Cone PL & USCS/AASHTO Rules',
    pageRef: 5,
    latex: 'FI = \\frac{w_1 - w_2}{\\log(N_2 / N_1)} = \\frac{w_1 - w_2}{\\log(d_2 / d_1)}, \\qquad TI = \\frac{PI}{FI}, \\qquad SI = PL - SL',
    secondaryEquations: [
      { label: 'Volumetric & Linear Shrinkage', latex: 'VS = SR\\,(w - SL) = \\frac{V - V_d}{V_d}, \\qquad LS = 1 - \\left(\\frac{1}{VS + 1}\\right)^{1/3}' },
      { label: 'Fall Cone Plastic Limit & Cup PL Trials', latex: 'PL = LL - \\frac{2\\,\\Delta w}{\\log(M_2 / M_1)}, \\qquad PL = \\frac{w_1 + w_2}{2}' },
      { label: 'Shrinkage Test Moisture Content & Change', latex: 'w_i = \\frac{M_1 - M_2}{M_2}(100\\%), \\qquad \\Delta w = \\frac{(V_1 - V_2)\\rho_w}{M_2}(100\\%)' },
      { label: 'USCS Coarse Fraction Ratio (No. 4 Sieve)', latex: '\\text{Coarse Fraction} = \\frac{100 - F_4}{100 - F_{200}}' }
    ],
    notes: [
      'AASHTO GI Special Rule: For subgroups A-2-6 and A-2-7, use ONLY the 2nd term of the Group Index formula: GI = 0.01(F₂₀₀ − 15)(PI − 10).',
      'Moisture content of each PL container trial: w = [(W_{w+c} − W_{d+c}) / (W_{d+c} − W_c)] × 100%.'
    ],
    tables: [
      {
        title: 'Plasticity Index (PI) Description (Burmister)',
        headers: ['PI Range', 'Plasticity Description'],
        rows: [
          ['0', 'Non-plastic'],
          ['1 – 5', 'Slightly plastic'],
          ['5 – 10', 'Low plasticity'],
          ['10 – 20', 'Medium plasticity'],
          ['20 – 40', 'High plasticity'],
          ['> 40', 'Very high plastic']
        ]
      }
    ],
    flashcardPrompt: 'State Flow Index (FI), Toughness Index (TI), Shrinkage Index (SI), Volumetric & Linear Shrinkage, Fall Cone PL, USCS coarse fraction ratio, AASHTO A-2-6/A-2-7 GI rule, and PI classes.',
    flashcardHint: 'TI = PI / FI; SI = PL − SL; for A-2-6 and A-2-7 drop the first term of GI.',
    difficulty: 'Hard'
  },
  {
    id: 'hpge_hge_p13_water_table_bearing',
    area: 'HPGE',
    domain: 'Geotechnical Engineering',
    topic: 'Driven Piles, Braced Cuts & Bearing Capacity',
    examSubtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    title: 'Bearing Capacity Water Table Modification (Cases I–IV)',
    pageRef: 13,
    latex: '\\text{Case I (GWT above base): } q = \\gamma(D_f - D_w) + \\gamma\' D_w,\\;\\; \\gamma_{\\text{eff}} = \\gamma\'',
    secondaryEquations: [
      { label: 'Case II (GWT exactly at Bottom of Footing)', latex: 'q = \\gamma D_f, \\qquad \\gamma_{\\text{eff}} = \\gamma\' = \\gamma_{\\text{sat}} - \\gamma_w' },
      { label: 'Case III (GWT at depth D ≤ B below Footing Base)', latex: 'q = \\gamma D_f, \\qquad \\gamma_{\\text{ave}} = \\frac{1}{B}\\left[\\gamma D + \\gamma\'(B - D)\\right]' },
      { label: 'Case IV (GWT below Footing Base outside B: D > B)', latex: 'q = \\gamma D_f, \\qquad \\gamma_{\\text{eff}} = \\gamma \\;\\;(\\text{no water correction})' }
    ],
    variables: [
      { symbol: 'D_w', meaning: 'Submerged height of water above bottom of footing (Case I, 0 ≤ D_w ≤ D_f)' },
      { symbol: 'D', meaning: 'Depth of water table measured downward below footing base (Cases III & IV)' }
    ],
    flashcardPrompt: 'Give the overburden q and effective unit weight γ used in Terzaghi’s bearing capacity for all 4 Water Table cases (above base, at base, within B, beyond B).',
    flashcardHint: 'Below base, GWT affects the γ B N_γ term linearly from γ′ (at D=0) to γ (at D ≥ B).',
    difficulty: 'Medium'
  },
  {
    id: 'hpge_hge_p13_mat_foundation',
    area: 'HPGE',
    domain: 'Geotechnical Engineering',
    topic: 'Driven Piles, Braced Cuts & Bearing Capacity',
    examSubtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    title: 'Bearing Capacity of Mat (Raft) Foundations (Clay & Granular SPT)',
    pageRef: 13,
    latex: 'q_{\\text{ult(net)}} = 5.14\\, c_u\\left(1 + \\frac{0.195\\, B}{L}\\right)\\left(1 + \\frac{0.4\\, D_f}{B}\\right) \\quad (\\text{Saturated Clay},\\; \\phi = 0^\\circ)',
    secondaryEquations: [
      { label: 'Granular Soils (SPT N₆₀ & Settlement s_e in mm)', latex: 'q_{\\text{net}} = \\frac{N_{60}}{0.08}\\left(1 + \\frac{0.33\\, D_f}{B}\\right)\\left(\\frac{s_e}{25}\\right) \\le 16.63\\, N_{60}\\left(\\frac{s_e}{25}\\right)' }
    ],
    variables: [
      { symbol: 'c_u', meaning: 'Undrained shear strength / cohesion of saturated clay (kPa)' },
      { symbol: 'N_60', meaning: 'Corrected Standard Penetration Test blow count' },
      { symbol: 's_e', meaning: 'Allowable / tolerable settlement (mm)' }
    ],
    notes: [
      'Note: In Meyerhof’s SPT correlation for mat foundations on sand, N_60/0.08 gives net allowable bearing capacity (kPa) capped at 16.63·N_60·(s_e/25) (net allowable pressure).'
    ],
    flashcardPrompt: 'State the Mat Foundation net bearing capacity equations for Saturated Clays (φ = 0°) and Granular Soils using SPT N_60 and settlement s_e.',
    flashcardHint: 'Clay formula starts with 5.14 c_u; Granular SPT divides N₆₀ by 0.08 and scales by (s_e/25).',
    difficulty: 'Hard'
  },
  {
    id: 'hpge_hge_p14_slope_fs_critical_angle',
    area: 'HPGE',
    domain: 'Geotechnical Engineering',
    topic: 'Slope Stability & Critical Equilibrium',
    examSubtopic: 'Foundations, Retaining Walls & Slope Stability',
    title: 'Slope Critical Failure Angle & Partial Factors of Safety (Strength, Cohesion, Friction, Height)',
    pageRef: 14,
    latex: '\\theta_{cr} = \\frac{\\beta + \\phi_d}{2}, \\qquad FS_S = \\frac{\\tau}{\\tau_d} = \\frac{c + \\sigma\\tan\\phi}{c_d + \\sigma\\tan\\phi_d}',
    secondaryEquations: [
      { label: 'Factor of Safety wrt Cohesion & Friction', latex: 'FS_c = \\frac{c}{c_d}, \\qquad FS_F = \\frac{\\tan\\phi}{\\tan\\phi_d}' },
      { label: 'Factor of Safety wrt Slope Height', latex: 'FS_H = \\frac{H_{cr}}{H_{\\text{act}}}' }
    ],
    variables: [
      { symbol: 'c_d, φ_d', meaning: 'Developed (mobilized) cohesion and developed friction angle along failure surface' },
      { symbol: 'H_cr, H_act', meaning: 'Critical vertical height for equilibrium vs actual slope height' }
    ],
    flashcardPrompt: 'Give Culmann’s critical failure plane angle θ_cr and the four slope Factor of Safety ratios (Strength FS_S, Cohesion FS_c, Friction FS_F, Height FS_H).',
    flashcardHint: 'Critical angle θ_cr averages slope inclination β and developed friction angle φ_d.',
    difficulty: 'Medium'
  }
];
