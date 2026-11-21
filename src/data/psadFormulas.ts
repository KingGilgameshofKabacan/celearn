import { CEFormula, PSADFormulaDomain } from '../types';

export const PSAD_FORMULA_DOMAINS: PSADFormulaDomain[] = [
  'Engineering Mechanics',
  'Reinforced Concrete Design',
  'Theory of Structures',
  'Strength of Materials',
  'Steel & Prestressed Concrete',
  'Earthquake Engineering'
];

export const PSAD_FORMULA_TOPICS_BY_DOMAIN: Record<PSADFormulaDomain, string[]> = {
  'Engineering Mechanics': [
    'Force Vectors, Moments & Parabolic Cables',
    'Support Reactions & Zero-Force Members',
    'Catenary Cables (Symmetrical & Unsymmetrical)',
    'Kinematics & Curvilinear Motion',
    'Friction, Belt Friction & Newton’s 2nd Law',
    'Work, Energy, Impulse & Momentum',
    'Rotational & Projectile Motion'
  ],
  'Reinforced Concrete Design': [
    'Concrete Properties, Cracking & WSD',
    'Flexural Stress Block & Singly Reinforced Beams',
    'Beam Investigation & φ Transition Zone',
    'Doubly Reinforced Beams (DRB)',
    'One-Way Shear & Web Reinforcement (Stirrups)',
    'Design for Torsion (NSCP / ACI)',
    'Columns & Slenderness Effects',
    'Slabs & ACI Shear/Moment Coefficients',
    'Footings (Axially Loaded, Eccentric & Combined)',
    'Pile Caps & Retaining Walls',
    'T-Beams Design & Investigation'
  ],
  'Theory of Structures': [
    'Degree of Indeterminacy & Conjugate Beam',
    'Moment-Area, Moment by Parts & Integral Deflections',
    'Moment Distribution Method',
    'Superposition Method (Simple & Cantilever Beams)',
    'Three-Moment Equation & Loading Factors',
    'Fixed-End Moments & Propped Cantilevers',
    'Influence Lines & Moving Loads',
    'Construction Scheduling (PERT-CPM)'
  ],
  'Strength of Materials': [
    'Axial Stress, Strain, Pressure Vessels & Thermal',
    'Rigidity, Virtual Work & Spring Systems',
    'Simple Shear, Torsion & Helical Springs',
    'Flexural Shear, Shear Flow & Combined Stress',
    'Precast Concrete Beam Pick-Up Points'
  ],
  'Steel & Prestressed Concrete': [
    'Steel Beam Basics, A36 Constants & Common Loadings',
    'ASD Steel Beams, Columns & Principal Axes',
    'Steel Columns, Bearing, Web Yielding & LRFD Tension',
    'Base Plates, Block Shear & LRFD Design',
    'Eccentric Bolted & Welded Connections',
    'Steel Purlins Biaxial Bending & Sagrods',
    'Plastic Analysis & Collapse Mechanisms',
    'Prestressed Concrete (Homogeneous Beam)'
  ],
  'Earthquake Engineering': [
    'NSCP Seismic Period & Design Base Shear',
    'Whipping Force & Vertical Story Distribution'
  ]
};

export const PSAD_FORMULAS: CEFormula[] = [
  // =========================================================================
  // ENGINEERING MECHANICS (Pages 2 - 7)
  // =========================================================================

  // --- P.2 & P.4: Force Components & 3D Force Vector / Moment ---
  {
    id: 'psad_p02_force_components_parabolic',
    area: 'PSAD',
    domain: 'Engineering Mechanics',
    topic: 'Force Vectors, Moments & Parabolic Cables',
    examSubtopic: 'Structural Mechanics & Statics',
    title: '2D Force Components & Parabolic Cable Tension Rules',
    pageRef: 2,
    latex: 'F_x = F\\cos\\alpha = F\\sin\\beta = \\frac{\\Delta x}{\\Delta r}F, \\qquad F_y = F\\sin\\alpha = F\\cos\\beta = \\frac{\\Delta y}{\\Delta r}F',
    secondaryEquations: [
      { label: 'Resultant Magnitude', latex: 'F = \\sqrt{F_x^2 + F_y^2}' },
      { label: 'Parabolic Cable Lowest-Point & Maximum Tension', latex: 'H = T_0 = \\frac{w L^2}{8 d}, \\qquad T_{\\max}^2 = \\left(\\frac{w L}{2}\\right)^2 + \\left(\\frac{w L^2}{8 d}\\right)^2' }
    ],
    diagrams: [
      {
        src: '/assets/psad_formulas/p02_force_components.png',
        caption: '2D force vector F decomposed using angles α, β and slope triangle (Δx, Δy, Δr).',
        alt: '2D force vector components diagram'
      },
      {
        src: '/assets/psad_formulas/p02_parabolic_cable.png',
        caption: 'Parabolic cable carrying uniform horizontal load w (kN/m) with lowest-point tension T_0.',
        alt: 'Parabolic cable under uniform distributed load'
      }
    ],
    notes: [
      'Parabolic Cable Rules: Tensile force at the lowest point (T_0 = wL²/8d) is the MINIMUM tension; tensile force at the steepest slope is the MAXIMUM tension.'
    ],
    flashcardPrompt: 'Write the 2D Force Component equations and the Parabolic Cable horizontal tension H and T_max equations.',
    flashcardHint: 'H = wL²/(8d) is constant throughout; combine H with vertical reaction wL/2 for T_max.',
    difficulty: 'Easy'
  },
  {
    id: 'psad_p04_3d_force_moment',
    area: 'PSAD',
    domain: 'Engineering Mechanics',
    topic: 'Force Vectors, Moments & Parabolic Cables',
    examSubtopic: 'Structural Mechanics & Statics',
    title: 'Forces in 3D Space (Vector Approach), Moment & Plane Intersection',
    pageRef: 4,
    latex: '\\vec{F} = F\\left[\\frac{x\\hat{i} + y\\hat{j} + z\\hat{k}}{\\sqrt{x^2 + y^2 + z^2}}\\right]',
    secondaryEquations: [
      { label: '3D Moment Vector', latex: '\\vec{M} = \\vec{r} \\times \\vec{F}' },
      { label: 'Resultant Line-of-Action Intersection (Symmetric Form)', latex: '\\frac{x}{R_x} = \\frac{y}{R_y} = \\frac{z}{R_z}' }
    ],
    variables: [
      { symbol: 'x, y, z', meaning: 'Directed coordinate distances along the line of action of F' },
      { symbol: 'r', meaning: 'Position vector from moment center to any point along F' }
    ],
    flashcardPrompt: 'Express a 3D Force Vector F, the 3D Moment vector equation r × F, and the Resultant intersection equation with a coordinate plane.',
    flashcardHint: 'Set the known plane coordinate (e.g. z = 0) in x/R_x = y/R_y = z/R_z from a known point on R.',
    difficulty: 'Easy'
  },
  {
    id: 'psad_once_p06_support_reactions_zeroforce',
    area: 'PSAD',
    domain: 'Engineering Mechanics',
    topic: 'Support Reactions & Zero-Force Members',
    examSubtopic: 'Structural Mechanics & Statics',
    title: 'Support Reactions (1, 2 & 3 Unknowns) & Zero-Force Member Rules',
    pageRef: 6,
    latex: '\\text{Roller/Cable/Link/Collar} = 1\\text{ unk.}, \\quad \\text{Pin/Hinge/Rough} = 2\\text{ unk.}, \\quad \\text{Fixed} = 3\\text{ unk.}',
    secondaryEquations: [
      { label: 'Joint Equilibrium Zero-Force Checks (Unloaded Joints)', latex: '\\text{Case 1 (2 non-collinear): } F_1 = F_2 = 0; \\qquad \\text{Case 2 (2 collinear + 1 angled): } F_{\\text{angled}} = 0' }
    ],
    diagrams: [
      {
        src: '/assets/psad_formulas/p06_support_reactions_table.jpg',
        caption: 'Classification of 2D support connections by reaction line of action and number of unknowns.',
        alt: 'Table of 2D support reactions and unknown forces'
      }
    ],
    notes: [
      'Note: For T_2 > T_1 on the verge of slipping, the capstan belt-friction equation is T_2/T_1 = e^{μβ}.'
    ],
    flashcardPrompt: 'Identify the number of unknowns for rollers/links/collars (1), pins/rough surfaces (2), and fixed supports (3), plus the 2 Zero-Force Member joint rules.',
    flashcardHint: 'If a truss joint has no external load/support and only two non-collinear members (or three members with two collinear), the non-collinear member(s) carry zero force.',
    difficulty: 'Easy'
  },

  // --- P.2 & P.3: Catenary Cables ---
  {
    id: 'psad_p02_catenary_general',
    area: 'PSAD',
    domain: 'Engineering Mechanics',
    topic: 'Catenary Cables (Symmetrical & Unsymmetrical)',
    examSubtopic: 'Structural Mechanics & Statics',
    title: 'General Catenary Cable: Arc Length, Tension & Elevation',
    pageRef: 2,
    latex: 's = \\frac{T_0}{w_0}\\sinh\\left(\\frac{w_0 x}{T_0}\\right), \\qquad T = T_0\\cosh\\left(\\frac{w_0 x}{T_0}\\right)',
    secondaryEquations: [
      {
        label: 'Vertical Rise from Lowest Point to Any Point',
        latex: 'y = \\frac{T_0}{w_0}\\left[\\cosh\\left(\\frac{w_0 x}{T_0}\\right) - 1\\right]'
      }
    ],
    diagrams: [
      {
        src: '/assets/psad_formulas/p02_catenary_cable.png',
        caption: 'Catenary cable hanging under self-weight w_0 per unit arc length.',
        alt: 'General catenary cable diagram'
      }
    ],
    variables: [
      { symbol: 'T_0', meaning: 'Horizontal tensile force at lowest point (N or kN)' },
      { symbol: 'w_0', meaning: 'Uniform weight per unit arc length of cable (N/m or kN/m)' },
      { symbol: 's, y', meaning: 'Arc length and vertical distance measured from lowest point' }
    ],
    flashcardPrompt: 'Give the three Catenary Cable equations for arc length s, tensile force T, and vertical height y from the lowest point in terms of T_0 and w_0.',
    flashcardHint: 's uses sinh, T uses cosh, and height from lowest point uses cosh(w_0 x / T_0) - 1.',
    difficulty: 'Medium'
  },
  {
    id: 'psad_p03_catenary_sym_unsym',
    area: 'PSAD',
    domain: 'Engineering Mechanics',
    topic: 'Catenary Cables (Symmetrical & Unsymmetrical)',
    examSubtopic: 'Structural Mechanics & Statics',
    title: 'Symmetrical & Unsymmetrical Catenary Cable (c-Parameter Form)',
    pageRef: 3,
    latex: 's = c\\sinh\\left(\\frac{x}{c}\\right), \\qquad y = c\\cosh\\left(\\frac{x}{c}\\right), \\qquad y^2 = c^2 + s^2',
    secondaryEquations: [
      { label: 'Weight & Tension via Parameter c', latex: 'W = w s, \\qquad T_0 = w c, \\qquad T = w y' },
      {
        label: 'Unsymmetrical Catenary Supports A & B',
        latex: 'T_A = w y_A, \\quad T_B = w y_B, \\quad H = w c, \\quad L = x_A + x_B, \\quad S_T = s_A + s_B'
      }
    ],
    diagrams: [
      {
        src: '/assets/psad_formulas/p03_symmetrical_catenary.png',
        caption: 'Catenary coordinate system measured from directrix at distance c below the lowest point.',
        alt: 'Symmetrical catenary cable diagram with directrix c'
      }
    ],
    variables: [
      { symbol: 'c', meaning: 'Catenary parameter = T_0 / w (vertical distance from directrix to sag vertex)' },
      { symbol: 'S_T, L', meaning: 'Total cable arc length and total horizontal span between unequal supports' }
    ],
    flashcardPrompt: 'Write the catenary c-parameter identities (s, y, y², T_0, T, W) and the 5 relations for an Unsymmetrical Catenary between supports A and B.',
    flashcardHint: 'Remember the hyperbolic Pythagorean identity y² = c² + s², and at supports T = w y.',
    difficulty: 'Medium'
  },

  // --- P.4: Kinematics & Curvilinear Motion ---
  {
    id: 'psad_p04_kinematics_uniform_diff',
    area: 'PSAD',
    domain: 'Engineering Mechanics',
    topic: 'Kinematics & Curvilinear Motion',
    examSubtopic: 'Structural Mechanics & Statics',
    title: 'Rectilinear Kinematics: Uniform, Differential & Constant Acceleration',
    pageRef: 4,
    latex: 's = v_0 t + \\frac{1}{2}a t^2, \\qquad v_f^2 = v_0^2 + 2 a s, \\qquad v_f = v_0 + a t',
    secondaryEquations: [
      { label: 'Uniform Motion (v = constant)', latex: 's = v t' },
      { label: 'Differential Equations of Motion', latex: 'v = \\frac{ds}{dt}, \\qquad a = \\frac{dv}{dt}, \\qquad j = \\frac{da}{dt} \\;(\\text{Jerk}), \\qquad a\\,ds = v\\,dv' },
      {
        label: 'Graphical Solution (a–t and v–t Diagrams)',
        latex: '\\Delta v = \\text{Area}_{a-t}, \\qquad \\Delta s = v_0 t + \\Delta(\\text{Moment of } a\\text{-}t \\text{ area}) = \\text{Area}_{v-t}'
      }
    ],
    flashcardPrompt: 'List the 3 Uniform Acceleration equations, 3 Differential Kinematics identities, and the Graphical Solution area-moment rules.',
    flashcardHint: 'Select the UAM formula missing the ungiven variable (v_f, t, or s).',
    difficulty: 'Easy'
  },
  {
    id: 'psad_p04_curvilinear_motion',
    area: 'PSAD',
    domain: 'Engineering Mechanics',
    topic: 'Kinematics & Curvilinear Motion',
    examSubtopic: 'Structural Mechanics & Statics',
    title: 'Curvilinear Motion: Normal, Tangential & Total Acceleration',
    pageRef: 4,
    latex: 'a_n = \\frac{v^2}{R}, \\qquad a = \\sqrt{a_n^2 + a_t^2}',
    diagrams: [
      {
        src: '/assets/psad_formulas/p04_curvilinear_motion.png',
        caption: 'Curved particle path showing tangential acceleration a_T and inward normal acceleration a_N toward radius R.',
        alt: 'Curvilinear motion normal and tangential acceleration diagram'
      }
    ],
    variables: [
      { symbol: 'a_n', meaning: 'Normal (centripetal) acceleration directed toward center of curvature' },
      { symbol: 'a_t', meaning: 'Tangential acceleration governed by rectilinear equations along path' },
      { symbol: 'R', meaning: 'Radius of curvature at the instantaneous point' }
    ],
    flashcardPrompt: 'How do you calculate Normal Acceleration (a_n) and Total Acceleration (a) in curvilinear motion?',
    flashcardHint: 'a_n depends on speed squared over radius of curvature R; combine perpendicularly with a_t.',
    difficulty: 'Easy'
  },

  // --- P.5 & P.7: Friction, Belt Friction & Newton's 2nd Law ---
  {
    id: 'psad_p05_friction_belt',
    area: 'PSAD',
    domain: 'Engineering Mechanics',
    topic: 'Friction, Belt Friction & Newton’s 2nd Law',
    examSubtopic: 'Structural Mechanics & Statics',
    title: 'Dry Friction (μ_s vs μ_k) & Flat Belt Friction',
    pageRef: 5,
    latex: '\\tan\\theta = \\mu, \\qquad \\frac{T_2}{T_1} = e^{\\beta\\mu_s}',
    secondaryEquations: [
      { label: 'Total Contact Angle for n Turns', latex: '\\beta = 2\\pi n \\quad (\\text{in radians})' },
      { label: 'Limiting Friction Force', latex: 'f = \\mu N' }
    ],
    variables: [
      { symbol: 'μ_s, μ_k', meaning: 'Static coefficient (at rest / impending) vs kinetic coefficient (moving body)' },
      { symbol: 'T_2, T_1', meaning: 'Tight-side tension (T_2 > T_1) and slack-side tension' },
      { symbol: 'β', meaning: 'Total angle of belt/rope contact in radians' }
    ],
    flashcardPrompt: 'State the Belt Friction tension ratio formula T_2/T_1, angle β in radians for n turns, and angle of friction relation.',
    flashcardHint: 'Tight tension exceeds slack tension exponentially with β·μ_s.',
    difficulty: 'Easy'
  },
  {
    id: 'psad_p07_newtons_second_law',
    area: 'PSAD',
    domain: 'Engineering Mechanics',
    topic: 'Friction, Belt Friction & Newton’s 2nd Law',
    examSubtopic: 'Structural Mechanics & Statics',
    title: 'Newton’s Second Law of Motion & Minimum Circular Speed',
    pageRef: 7,
    latex: 'F = m a, \\qquad v_{\\min} = \\sqrt{g R} \\;\\;(\\text{at } a_t = 0 \\text{ or top of loop})',
    notes: [
      'Equilibrium: ΣF = 0. Dynamic motion: ΣF = ma.',
      'At the crest of a vertical circular path where normal reaction drops to zero (N = 0), mv²/R = mg gives v = √(gR).'
    ],
    flashcardPrompt: 'Write Newton’s 2nd Law and the minimum speed formula at the crest of a vertical circular trajectory.',
    flashcardHint: 'Balance centripetal force mv²/R against weight mg.',
    difficulty: 'Easy'
  },

  // --- P.5, P.6, P.7: Work, Energy, Impulse & Momentum ---
  {
    id: 'psad_p05_p07_work_energy',
    area: 'PSAD',
    domain: 'Engineering Mechanics',
    topic: 'Work, Energy, Impulse & Momentum',
    examSubtopic: 'Structural Mechanics & Statics',
    title: 'Work–Energy Theorem, Potential Energy & Spring Energy Balance',
    pageRef: 5,
    latex: 'm g (h_2 - h_1) + \\frac{1}{2}k(x_2^2 - x_1^2) + \\frac{1}{2}m(v_2^2 - v_1^2) = (+W_{\\text{pos}}) + (-W_{\\text{neg}})',
    secondaryEquations: [
      { label: 'Compact Form', latex: '(KE_1 + PE_1) + \\text{Work}_{1\\to 2} = (KE_2 + PE_2)' },
      {
        label: 'Energy Components',
        latex: 'PE_g = m g h, \\qquad PE_e = \\frac{1}{2}k x^2, \\qquad KE = \\frac{1}{2}m v^2, \\qquad \\text{Work} = F\\cdot d'
      }
    ],
    notes: [
      'Always include spring elastic energy ½kx² whenever a spring changes deformation between states 1 and 2.'
    ],
    flashcardPrompt: 'State the complete Work–Energy conservation equation combining gravitational PE, elastic spring PE, kinetic energy KE, and external work.',
    flashcardHint: 'Three energy terms (mgh, ½kx², ½mv²) from state 1 to state 2 equal net external work done.',
    difficulty: 'Medium'
  },
  {
    id: 'psad_p05_p06_impulse_momentum_restitution',
    area: 'PSAD',
    domain: 'Engineering Mechanics',
    topic: 'Work, Energy, Impulse & Momentum',
    examSubtopic: 'Structural Mechanics & Statics',
    title: 'Impulse–Momentum, Two-Body Collision & Coefficient of Restitution',
    pageRef: 6,
    latex: 'm_1 v_1 + m_2 v_2 = m_1 v_1\' + m_2 v_2\', \\qquad e = -\\frac{v_2\' - v_1\'}{v_2 - v_1}',
    secondaryEquations: [
      { label: 'Linear Momentum & Impulse', latex: 'p = m v, \\qquad \\text{Impulse} = F\\,\\Delta t = \\Delta p, \\qquad F = \\frac{\\text{Impulse}}{t}' },
      { label: 'Impact Limits & Collision Kinetic Energy Loss', latex: 'e = 1 \\;(\\text{elastic}), \\quad e = 0 \\;(\\text{plastic}), \\quad \\% E_{\\text{loss}} = \\frac{|E_f - E_0|}{E_0}\\times 100\\%' }
    ],
    variables: [
      { symbol: 'v_1, v_2', meaning: 'Velocities of bodies 1 and 2 immediately BEFORE impact along line of impact' },
      { symbol: "v_1', v_2'", meaning: 'Velocities of bodies 1 and 2 immediately AFTER impact' },
      { symbol: 'e', meaning: 'Coefficient of restitution (ratio of relative separation speed to approach speed)' }
    ],
    flashcardPrompt: 'Write the Impulse-Momentum equations, Conservation of Linear Momentum for collisions, and the Coefficient of Restitution (e) formula.',
    flashcardHint: 'e = relative velocity of separation / relative velocity of approach.',
    difficulty: 'Easy'
  },

  // --- P.6: Rotational & Projectile Motion ---
  {
    id: 'psad_p06_rotational_projectile',
    area: 'PSAD',
    domain: 'Engineering Mechanics',
    topic: 'Rotational & Projectile Motion',
    examSubtopic: 'Structural Mechanics & Statics',
    title: 'Rotational Kinematics & Projectile Motion Equations',
    pageRef: 6,
    latex: 'y = x\\tan\\theta - \\frac{g x^2}{2 v_i^2 \\cos^2\\theta}',
    secondaryEquations: [
      { label: 'Rotational Constant α', latex: '\\omega_f = \\omega_i \\pm \\alpha t, \\qquad \\omega_f^2 = \\omega_i^2 \\pm 2\\alpha\\theta, \\qquad \\theta = \\omega_i t \\pm \\frac{1}{2}\\alpha t^2' },
      { label: 'Projectile @ Summit (v_fy = 0)', latex: 'y_{\\max} = \\frac{(v_i\\sin\\theta)^2}{2g}, \\qquad t_{\\text{summit}} = \\frac{v_{iy}}{g}' },
      { label: 'Projectile @ Level Ground (Δy = 0)', latex: 't_{\\text{total}} = \\frac{2 v_{iy}}{g}, \\qquad x_{\\max} = \\frac{v_i^2\\sin(2\\theta)}{g}' }
    ],
    flashcardPrompt: 'Give the Projectile Path Equation y(x), summit height/time, level-ground range, and the 3 Rotational Kinematics formulas.',
    flashcardHint: 'Rotational kinematics swaps (s, v, a) for (θ, ω, α); projectile trajectory eliminates time t.',
    difficulty: 'Medium'
  },

  // =========================================================================
  // REINFORCED CONCRETE DESIGN (Pages 8 - 23)
  // =========================================================================

  // --- P.8: Flexural Stress Block & Nominal Moment ---
  {
    id: 'psad_p08_rcd_stress_block_mn',
    area: 'PSAD',
    domain: 'Reinforced Concrete Design',
    topic: 'Flexural Stress Block & Singly Reinforced Beams',
    examSubtopic: 'Reinforced Concrete & Prestressed Design',
    title: 'Whitney Stress Block, β₁ Factor & Flexural Strength (M_n, M_u)',
    pageRef: 8,
    latex: 'M_n = C_c\\left(d - \\frac{a}{2}\\right) = T\\left(d - \\frac{a}{2}\\right), \\qquad M_u = \\phi M_n',
    secondaryEquations: [
      { label: 'Whitney Stress Block Factor β₁', latex: '\\beta_1 = 0.85 - 0.05\\left(\\frac{f_c\' - 28}{7}\\right) \\quad (0.65 \\le \\beta_1 \\le 0.85)' },
      { label: 'Concrete Compression & Steel Tension', latex: 'C_c = 0.85 f_c\' a b_w, \\qquad T = A_s f_s, \\qquad a = \\beta_1 c' },
      { label: 'Steel Stress Condition', latex: 'f_s = f_y \\;(\\text{if } \\varepsilon_s \\ge \\varepsilon_y), \\qquad f_s = \\varepsilon_s E_s \\;(\\text{if } \\varepsilon_s < \\varepsilon_y)' }
    ],
    diagrams: [
      {
        src: '/assets/psad_formulas/p08_rcd_stress_block.png',
        caption: 'Rectangular RC beam cross section, linear strain profile (ε_c = 0.003), and equivalent Whitney stress block.',
        alt: 'RC beam strain diagram and Whitney rectangular stress block'
      }
    ],
    flashcardPrompt: 'State M_n, M_u, Whitney factor β₁(f_c’), and the steel stress conditions f_s = f_y vs ε_s E_s.',
    flashcardHint: 'β₁ stays 0.85 for f_c’ ≤ 28 MPa and drops 0.05 per 7 MPa above 28 MPa down to 0.65.',
    difficulty: 'Easy'
  },

  // --- P.9: Basic General Relation, Steel Ratio ρ, R_n & Balanced Condition ---
  {
    id: 'psad_p09_rcd_rho_rn_balanced',
    area: 'PSAD',
    domain: 'Reinforced Concrete Design',
    topic: 'Flexural Stress Block & Singly Reinforced Beams',
    examSubtopic: 'Reinforced Concrete & Prestressed Design',
    title: 'General Strain Relation, Steel Ratio ρ, Resisting Coefficient R_n & ρ_b',
    pageRef: 9,
    latex: '\\rho = \\frac{0.85 f_c\'}{f_y}\\left[1 - \\sqrt{1 - \\frac{2 R_n}{0.85 f_c\'}}\\right], \\qquad R_n = \\rho f_y - \\rho^2\\frac{f_y^2}{1.7 f_c\'}',
    secondaryEquations: [
      { label: 'Basic General Neutral Axis Depth', latex: 'c = \\frac{600\\, d_t}{600 + f_s}' },
      { label: 'General Steel Ratio at Steel Stress f_s', latex: '\\rho = \\frac{0.85 f_c\'}{f_y}\\beta_1\\left(\\frac{600}{600 + f_s}\\right)\\left(\\frac{d_t}{d}\\right)' },
      { label: 'Balanced Condition (f_s = f_y)', latex: 'c_b = \\frac{600\\, d_t}{600 + f_y}, \\qquad \\rho_b = \\frac{0.85 f_c\'}{f_y}\\beta_1\\left(\\frac{600}{600 + f_y}\\right)\\left(\\frac{d_t}{d}\\right)' }
    ],
    notes: [
      'For single-layer tension steel, d = d_t so (d_t/d) = 1. R_n = M_u / (φ b d²).'
    ],
    flashcardPrompt: 'Write the design steel ratio ρ(R_n), resisting moment coefficient R_n(ρ), and balanced steel ratio ρ_b formulas.',
    flashcardHint: '600 comes from ε_c E_s = 0.003 × 200,000 MPa.',
    difficulty: 'Medium'
  },

  // --- P.10: Investigation of Rectangular Beam Sections ---
  {
    id: 'psad_p10_rcd_investigation_table',
    area: 'PSAD',
    domain: 'Reinforced Concrete Design',
    topic: 'Beam Investigation & φ Transition Zone',
    examSubtopic: 'Reinforced Concrete & Prestressed Design',
    title: 'Beam Section Limits: Tension-Controlled, Transition & Compression-Controlled',
    pageRef: 10,
    latex: '\\rho_{\\max,\\text{TC}} = \\frac{0.85 f_c\'}{f_y}\\beta_1\\left(\\frac{3}{8}\\right)\\left(\\frac{d_t}{d}\\right), \\qquad \\rho_b = \\frac{0.85 f_c\'}{f_y}\\beta_1\\left(\\frac{600}{600 + f_y}\\right)\\left(\\frac{d_t}{d}\\right)',
    tables: [
      {
        title: 'Investigation Criteria Across Strain, Stress, c, a, and Steel Ratio ρ',
        headers: ['Check Basis', 'Tension-Controlled (φ = 0.90)', 'Transition Zone', 'Compression-Controlled'],
        rows: [
          ['Net Strain ε_t', 'ε_t ≥ 0.005', '0.005 > ε_t > ε_ty', 'ε_t ≤ ε_ty'],
          ['Steel Stress f_s', 'f_s > 1000 MPa (if elastic)', '1000 > f_s > f_y', 'f_s ≤ f_y (use f_s = ε_s E_s)'],
          ['Neutral Axis c', 'c < 3/8 d_t', '3/8 d_t < c < c_b', 'c ≥ c_b'],
          ['Stress Block a', 'a < 3/8 β₁ d_t', '3/8 β₁ d_t < a < a_b', 'a ≥ a_b'],
          ['Steel Ratio ρ', 'ρ < ρ_max,TC', 'ρ_max,TC < ρ < ρ_b', 'ρ ≥ ρ_b']
        ]
      }
    ],
    notes: [
      'Tension-controlled limit c/d_t = 0.003/(0.003+0.005) = 3/8 = 0.375.'
    ],
    flashcardPrompt: 'What are the five threshold criteria (ε_t, f_s, c, a, ρ) separating Tension-Controlled, Transition, and Compression-Controlled sections?',
    flashcardHint: 'Tension-controlled limit occurs at ε_t = 0.005, giving c/d_t = 3/8.',
    difficulty: 'Medium'
  },

  // --- P.11 & P.13: Reduction Factor φ Transition Zone, φ Table & ρ_min ---
  {
    id: 'psad_p11_p13_phi_rhomin',
    area: 'PSAD',
    domain: 'Reinforced Concrete Design',
    topic: 'Beam Investigation & φ Transition Zone',
    examSubtopic: 'Reinforced Concrete & Prestressed Design',
    title: 'Strength Reduction Factor φ (Transition Zone) & Minimum Steel Ratio ρ_min',
    pageRef: 11,
    latex: '\\phi_{\\text{other}} = 0.65 + 0.25\\left(\\frac{\\varepsilon_t - \\varepsilon_{ty}}{0.005 - \\varepsilon_{ty}}\\right), \\qquad \\phi_{\\text{spiral}} = 0.75 + 0.15\\left(\\frac{\\varepsilon_t - \\varepsilon_{ty}}{0.005 - \\varepsilon_{ty}}\\right)',
    secondaryEquations: [
      { label: 'Minimum Flexural Steel Ratio (f_c’ ≥ 31.6 MPa)', latex: '\\rho_{\\min} = \\frac{0.25\\sqrt{f_c\'}}{f_y}' },
      { label: 'Minimum Flexural Steel Ratio (f_c’ < 31.6 MPa)', latex: '\\rho_{\\min} = \\frac{1.4}{f_y}' }
    ],
    diagrams: [
      {
        src: '/assets/psad_formulas/p11_phi_transition_chart.png',
        caption: 'NSCP/ACI strength reduction factor φ variation with net tensile strain ε_t for spiral vs other sections.',
        alt: 'Strength reduction factor phi transition zone graph'
      }
    ],
    tables: [
      {
        title: 'NSCP / ACI Strength Reduction Factors φ',
        headers: ['Structural Action / Condition', 'φ Factor'],
        rows: [
          ['Flexure (Tension-Controlled)', '0.90'],
          ['Compression-Controlled w/ Spiral', '0.75'],
          ['Compression-Controlled (Tied / Other)', '0.65'],
          ['Shear and Torsion', '0.75']
        ]
      }
    ],
    notes: [
      'Calculator Shortcut (MODE 3-2 Linear Regression): X = [1000, f_y], Y = [0.90, 0.65], evaluate ŷ at elastic f_s = 600(d_t - c)/c.'
    ],
    flashcardPrompt: 'State both φ Transition Zone equations (Other & Spiral), all standard φ factors, and both ρ_min formulas (threshold f_c’ = 31.6 MPa).',
    flashcardHint: 'Crossover f_c’ comes from 0.25√f_c’ = 1.4 → √f_c’ = 5.6 → f_c’ ≈ 31.36 (31.6 MPa threshold in notes).',
    difficulty: 'Easy'
  },

  // --- P.12 & P.13: Doubly Reinforced Beams ---
  {
    id: 'psad_p12_p13_doubly_reinforced_beam',
    area: 'PSAD',
    domain: 'Reinforced Concrete Design',
    topic: 'Doubly Reinforced Beams (DRB)',
    examSubtopic: 'Reinforced Concrete & Prestressed Design',
    title: 'Doubly Reinforced Beam: Design Couple, Compression Steel Stress & ρ_DRB',
    pageRef: 12,
    latex: 'M_1 = \\phi\\,0.85 f_c\' a b\\left(d - \\frac{a}{2}\\right), \\quad M_2 = \\frac{M_u}{\\phi} - M_{n1} = A_{s2} f_y(d - d\'), \\quad A_s = A_{s1} + A_{s2}',
    secondaryEquations: [
      { label: 'Compression Steel Strain Stress', latex: 'f_s\' = 600\\left(1 - \\frac{d\'}{c}\\right) \\le f_y' },
      { label: 'Compression Steel Force Balance', latex: 'C_s = T_2 \\implies A_s\'\\left(f_s\' - 0.85 f_c\'\\right) = A_{s2} f_y' },
      {
        label: 'Balanced & Maximum Steel Ratio for DRB',
        latex: '\\rho_{\\text{bal,DRB}} = \\rho_{\\text{bal,SRB}} + \\frac{A_{s2}}{b d} = \\rho_{\\text{bal,SRB}} + \\rho\'\\frac{f_s\'}{f_y}, \\qquad \\rho_{\\max,\\text{DRB}} = \\rho_{\\max,\\text{SRB}} + \\rho\'\\frac{f_s\'}{f_y}'
      }
    ],
    diagrams: [
      {
        src: '/assets/psad_formulas/p12_doubly_reinforced_beam.png',
        caption: 'Decomposition of doubly reinforced beam into singly reinforced couple M_n1 and compression-steel couple M_n2.',
        alt: 'Doubly reinforced concrete beam stress-couple diagram'
      }
    ],
    notes: [
      'Verify whether compression steel yields (f_s’ = f_y) before computing displaced concrete correction (f_s’ - 0.85 f_c’).',
      'Watch factor φ consistency: M_2 = M_u/φ − M_1 (where M_1 = M_n1 is the nominal moment from A_s1).'
    ],
    flashcardPrompt: 'Write the 4 DRB tension-steel design steps, compression steel stress f_s’, displaced-concrete equilibrium C_s = T_2, and ρ_bal,DRB / ρ_max,DRB.',
    flashcardHint: 'Subtract displaced concrete 0.85f_c’ from f_s’ when solving A_s’.',
    difficulty: 'Hard'
  },

  // --- P.14 & P.15: One-Way Shear & Web Reinforcement ---
  {
    id: 'psad_p14_rcd_shear_stirrups',
    area: 'PSAD',
    domain: 'Reinforced Concrete Design',
    topic: 'One-Way Shear & Web Reinforcement (Stirrups)',
    examSubtopic: 'Reinforced Concrete & Prestressed Design',
    title: 'One-Way Shear Strength, Stirrup Spacing & Axial Load Effects',
    pageRef: 14,
    latex: 'V_u \\le \\phi(V_c + V_s), \\qquad V_c = \\frac{1}{6}\\lambda\\sqrt{f_c\'}\\, b_w d, \\qquad s = \\frac{A_v f_{yt} d}{V_s}',
    secondaryEquations: [
      {
        label: 'Shear with Axial Compression N_u (+)',
        latex: 'V_c = 0.17\\left(1 + \\frac{N_u}{14 A_g}\\right)\\lambda\\sqrt{f_c\'}\\, b_w d'
      },
      {
        label: 'Shear with Axial Tension N_u (−)',
        latex: 'V_c = 0.17\\left(1 + \\frac{N_u}{3.5 A_g}\\right)\\lambda\\sqrt{f_c\'}\\, b_w d \\ge 0 \\;\\;(N_u \\text{ negative})'
      },
      {
        label: 'Inclined Stirrups & Theoretical Stirrup Cutoff Point',
        latex: 'V_s = \\frac{A_v f_{yt} d(\\sin\\alpha + \\cos\\alpha)}{s}, \\qquad R - w_u x = 0.5\\,\\phi V_c \\;(\\text{stirrup termination }x)'
      },
      {
        label: 'Max Spacing & Min Shear Reinforcement Limits',
        latex: '\\begin{aligned} V_s \\le \\frac{1}{3}\\sqrt{f_c\'}\\, b_w d &: \\quad s_{\\max} = \\min\\!\\left(\\frac{d}{2},\\; 600\\text{ mm}\\right) \\\\ V_s > \\frac{1}{3}\\sqrt{f_c\'}\\, b_w d &: \\quad s_{\\max} = \\min\\!\\left(\\frac{d}{4},\\; 300\\text{ mm}\\right) \\\\ A_{v,\\min} &= \\max\\!\\left(0.062\\sqrt{f_c\'}\\frac{b_w s}{f_{yt}},\\; 0.35\\frac{b_w s}{f_{yt}}\\right) \\end{aligned}'
      }
    ],
    tables: [
      {
        title: 'Concrete Lightweight Modification Factor λ (NSCP / ACI)',
        headers: ['Concrete Aggregate Type', 'λ Factor'],
        rows: [
          ['Normal-Weight Concrete', '1.0'],
          ['Sand-Lightweight Concrete', '0.85'],
          ['All-Lightweight Concrete', '0.75']
        ]
      }
    ],
    notes: [
      'Cross-section dimension limit: If V_s > (2/3)√f_c’ b_w d, increase beam dimensions.',
      'For circular beams, use effective depth d = 0.8 D.'
    ],
    flashcardPrompt: 'State concrete shear V_c, inclined stirrup V_s, theoretical cutoff R − w_u x = 0.5 φV_c, lightweight λ values, s_max thresholds, and A_v,min.',
    flashcardHint: 'Compression denominator is 14 A_g; tension denominator is 3.5 A_g; λ = 1.0 / 0.85 / 0.75.',
    difficulty: 'Medium'
  },
  {
    id: 'psad_p15_web_reinforcement_provisions',
    area: 'PSAD',
    domain: 'Reinforced Concrete Design',
    topic: 'One-Way Shear & Web Reinforcement (Stirrups)',
    examSubtopic: 'Reinforced Concrete & Prestressed Design',
    title: '5-Case Web Reinforcement (Stirrup Spacing) Design Provisions',
    pageRef: 15,
    latex: 'V_s = \\frac{V_u}{\\phi} - V_c, \\qquad s = \\frac{A_v f_{yt} d}{V_s}',
    tables: [
      {
        title: 'NSCP 5-Case Shear Reinforcement Tiers (φ = 0.75)',
        headers: ['Case & Factored Shear V_u Range', 'Stirrup Provision & Governing Spacing'],
        rows: [
          ['1. V_u ≤ φV_c / 2', 'Stirrups not required'],
          ['2. φV_c / 2 < V_u ≤ φV_c', 'Min stirrups: s = min( A_v f_yt / (0.062√f_c’ b_w), A_v f_yt / (0.35 b_w), d/2, 600 mm )'],
          ['3. φV_c < V_u ≤ 3φV_c (and V_s ≤ 0.33√f_c’ b_w d)', 's = min( A_v f_yt d / V_s, A_v f_yt / (0.062√f_c’ b_w), A_v f_yt / (0.35 b_w), d/2, 600 mm )'],
          ['4. 3φV_c < V_u ≤ 5φV_c (0.33√f_c’ b_w d < V_s ≤ 0.66√f_c’ b_w d)', 's = min( A_v f_yt d / V_s, d/4, 300 mm )'],
          ['5. V_u > 5φV_c (or V_s > 0.66√f_c’ b_w d)', 'Section inadequate — increase beam dimensions']
        ]
      }
    ],
    notes: [
      'For Circular Beams, take d = 0.8 D.'
    ],
    flashcardPrompt: 'Outline all 5 Web Reinforcement design cases based on V_u relative to φV_c and V_s relative to 1/3 and 2/3 √f_c’ b_w d.',
    flashcardHint: 'Minimum stirrups begin at ½ φV_c; section enlargement is mandatory beyond 2/3 √f_c’ b_w d.',
    difficulty: 'Hard'
  },

  // --- P.16 & P.17: Columns & Slenderness ---
  {
    id: 'psad_p16_columns_spiral_tied',
    area: 'PSAD',
    domain: 'Reinforced Concrete Design',
    topic: 'Columns & Slenderness Effects',
    examSubtopic: 'Reinforced Concrete & Prestressed Design',
    title: 'Short Columns: Pure Axial Capacity, Tied/Spiral Factors & Spiral Ratio ρ_s',
    pageRef: 16,
    latex: 'P_0 = 0.85 f_c\'(A_g - A_{st}) + A_{st} f_y, \\qquad \\rho_s \\ge 0.45\\left(\\frac{A_g}{A_{ch}} - 1\\right)\\frac{f_c\'}{f_{yt}}',
    secondaryEquations: [
      { label: 'Nominal & Ultimate Axial Capacity', latex: 'P_{n,\\text{tied}} = 0.80\\, P_0 \\;(\\phi = 0.65), \\qquad P_{n,\\text{spiral}} = 0.85\\, P_0 \\;(\\phi = 0.75), \\qquad P_u = \\phi P_n' },
      { label: 'Tie Spacing & Spiral Clear Spacing', latex: 's_{\\text{tie}} \\le \\min(16 d_b,\\; 48 d_s,\\; \\text{least col. dim.}), \\qquad 25\\text{ mm} \\le s_{\\text{spiral,clear}} \\le 75\\text{ mm}' },
      { label: 'Spiral Pitch & Steel Ratio Bounds', latex: 's_{\\text{pitch}} = \\frac{4 A_{\\text{spiral}}}{\\rho_s D_c}, \\quad s_{\\text{min,pitch}} = \\max\\!\\left(25,\\; \\frac{4}{3}d_{\\text{agg}}\\right) + d_t, \\quad 0.01 \\le \\rho_g \\le 0.08' }
    ],
    notes: [
      'Minimum longitudinal column bars: 4 (rectangular/square tied), 6 (circular spiral), 3 (triangular tied).'
    ],
    flashcardPrompt: 'Write column capacity P_0, P_n (tied vs spiral), tie spacing rules, spiral pitch s, min bar counts (4/6/3), and 1%–8% ρ_g limits.',
    flashcardHint: 'Tied = 0.80 P_0 (φ=0.65); Spiral = 0.85 P_0 (φ=0.75, pitch s = 4A_sp/(ρ_s D_c)).',
    difficulty: 'Easy'
  },
  {
    id: 'psad_p17_columns_slenderness_bresler',
    area: 'PSAD',
    domain: 'Reinforced Concrete Design',
    topic: 'Columns & Slenderness Effects',
    examSubtopic: 'Reinforced Concrete & Prestressed Design',
    title: 'Column Slenderness Limits, Buckling, C_m & Bresler Reciprocal Equation',
    pageRef: 17,
    latex: '\\frac{1}{P_n} = \\frac{1}{P_{nx}} + \\frac{1}{P_{ny}} - \\frac{1}{P_0}',
    secondaryEquations: [
      {
        label: 'Slenderness Neglect Criteria',
        latex: '\\text{Unbraced: } \\frac{k l_u}{r} \\le 22, \\qquad \\text{Braced: } \\frac{k l_u}{r} \\le 34 + 12\\left(\\frac{M_1}{M_2}\\right) \\le 40'
      },
      { label: 'Critical Buckling Load & C_m Factor', latex: 'P_c = \\frac{\\pi^2 E I}{(k l_u)^2}, \\qquad C_m = 0.6 - 0.4\\left(\\frac{M_1}{M_2}\\right) \\;(\\text{or } 1.0 \\text{ w/ transverse loads})' }
    ],
    notes: [
      'Note: Euler critical buckling load is P_c = π²EI/(k l_u)² (whereas π²E/(kL/r)² gives critical buckling stress F_c).',
      'NSCP Sign Convention for M_1/M_2: (+) for double curvature (inflection point between ends), (−) for single curvature. Note C_m = 0.6 − 0.4(M_1/M_2) vs braced slenderness limit 34 − 12(M_1/M_2) depending on sign convention.'
    ],
    flashcardPrompt: 'State the Slenderness Neglect limits (unbraced vs braced), Critical Buckling formula, C_m factor, and Bresler’s Reciprocal Equation.',
    flashcardHint: 'Unbraced threshold = 22; braced upper cap = 40; Bresler sums reciprocals minus 1/P_0.',
    difficulty: 'Hard'
  },

  // --- P.18 - P.21: Footings ---
  {
    id: 'psad_p18_footings_axial_biaxial_eccentric',
    area: 'PSAD',
    domain: 'Reinforced Concrete Design',
    topic: 'Footings (Axially Loaded, Eccentric & Combined)',
    examSubtopic: 'Reinforced Concrete & Prestressed Design',
    title: 'Footings: Axial, Bi-Axial Bending, Eccentric Pressure & Effective Depths',
    pageRef: 18,
    latex: 'q = \\frac{P}{B D}\\left(1 \\pm \\frac{6 e_x}{B} \\pm \\frac{6 e_y}{D}\\right)',
    secondaryEquations: [
      { label: 'Axially Loaded Sizing', latex: 'A = \\frac{P_{\\text{all}}}{q_{\\text{all}}} = \\frac{P_{\\text{net}}}{q_{\\text{net}}}, \\qquad q_{\\max} = \\frac{P}{A}' },
      { label: 'Uniaxial Eccentric (e ≤ D/6)', latex: 'q = \\frac{P}{B D}\\left(1 \\pm \\frac{6 e}{D}\\right)' },
      { label: 'Uniaxial Cracked Bearing (e > D/6)', latex: 'q_{\\max} = \\frac{P}{B(3x)} \\quad \\text{where } x = \\frac{D}{2} - e, \\;\\; q_{\\min} = 0' },
      { label: 'Default Footing Effective Depths', latex: 'd_{\\text{one-way}} = t - cc - 0.5 d_b, \\qquad d_{\\text{punching}} = t - cc - d_b' },
      { label: 'Rectangular Footing Center Band & Critical Moment Arm', latex: '\\gamma_s = \\frac{2}{\\beta + 1} \\;\\;\\left(\\beta = \\frac{L}{B}\\right), \\qquad L_{\\text{steel col.}} = \\frac{L_{\\text{BP}} + L_{\\text{SC}}}{2}' }
    ],
    diagrams: [
      {
        src: '/assets/psad_formulas/p18_biaxial_footing.png',
        caption: 'Biaxial footing plan corners 1–4 with eccentricities e_x and e_y.',
        alt: 'Biaxial footing eccentricity plan'
      },
      {
        src: '/assets/psad_formulas/p18_eccentric_footing_kern.png',
        caption: 'Trapezoidal soil bearing pressure when e ≤ D/6 (full compression).',
        alt: 'Eccentric footing e <= D/6 pressure distribution'
      },
      {
        src: '/assets/psad_formulas/p18_eccentric_footing_cracked.png',
        caption: 'Triangular soil bearing pressure when e > D/6 over active width 3x.',
        alt: 'Eccentric footing e > D/6 triangular pressure distribution'
      }
    ],
    notes: [
      'Service loads (P_all/q_all) size base area; factored loads (q_u, M_u) size thickness & rebar. Convert circular columns to equivalent square m² = A_col for flexure/one-way shear.'
    ],
    flashcardPrompt: 'Write footing soil pressures (Axial, Bi-axial, e ≤ D/6, e > D/6), short-direction center band γ_s, and One-Way vs Punching effective depths.',
    flashcardHint: 'Kern is D/6; fraction of short-direction bars placed in center band is γ_s = 2/(β + 1).',
    difficulty: 'Medium'
  },
  {
    id: 'psad_p19_footing_oneway_twoway_shear',
    area: 'PSAD',
    domain: 'Reinforced Concrete Design',
    topic: 'Footings (Axially Loaded, Eccentric & Combined)',
    examSubtopic: 'Reinforced Concrete & Prestressed Design',
    title: 'Footing One-Way (Beam) Shear & Two-Way (Punching) Shear',
    pageRef: 19,
    latex: 'V_u^{\\text{1-way}} = q_u\\, a\\, D, \\qquad b_o = 2(c_1 + d) + 2(c_2 + d), \\qquad v_p = \\frac{V_u}{\\phi\\, b_o d}',
    secondaryEquations: [
      { label: 'One-Way Concrete Shear Strength & Stress', latex: 'V_c = \\frac{1}{6}\\lambda\\sqrt{f_c\'}\\, b_w d, \\qquad v_w = \\frac{V_u}{\\phi\\, b_w d}' },
      { label: 'Two-Way Net Factored Punching Force', latex: 'V_u^{\\text{2-way}} = q_u\\left[B^2 - (c_1 + d)(c_2 + d)\\right]' },
      {
        label: 'Two-Way Punching V_c (Least of Three)',
        latex: 'V_c = \\min\\!\\left\\{ \\frac{1}{3}\\lambda\\sqrt{f_c\'}\\, b_o d,\\;\\; \\frac{1}{6}\\left(1 + \\frac{2}{\\beta}\\right)\\lambda\\sqrt{f_c\'}\\, b_o d,\\;\\; \\frac{1}{12}\\left(2 + \\frac{\\alpha_s d}{b_o}\\right)\\lambda\\sqrt{f_c\'}\\, b_o d \\right\\}'
      }
    ],
    diagrams: [
      {
        src: '/assets/psad_formulas/p19_footing_oneway_shear.png',
        caption: 'One-way shear critical section located at distance d from column face.',
        alt: 'Footing one-way shear critical section diagram'
      },
      {
        src: '/assets/psad_formulas/p19_footing_twoway_shear.png',
        caption: 'Two-way punching shear perimeter b_o at d/2 around column dimensions c_1 × c_2.',
        alt: 'Footing two-way punching shear perimeter diagram'
      },
      {
        src: '/assets/psad_formulas/p19_punching_vc_table.png',
        caption: 'ACI/NSCP governing 3-case concrete punching shear strength V_c equations.',
        alt: 'Two-way shear strength V_c 3-case table'
      }
    ],
    variables: [
      { symbol: 'β', meaning: 'Long side / short side of column (equation (b) governs whenever β > 2)' },
      { symbol: 'α_s', meaning: '40 for interior column, 30 for edge column, 20 for corner column' }
    ],
    notes: [
      'Note: Net upward two-way punching shear force subtracts the critical perimeter area: V_u = q_u[B² − (c_1+d)(c_2+d)].'
    ],
    flashcardPrompt: 'Write the One-Way Shear critical section force & stress, Two-Way Punching perimeter b_o, net punching shear V_u, and the 3 punching V_c equations.',
    flashcardHint: 'Remember α_s = 40/30/20 (interior/edge/corner) and subtract (c_1+d)(c_2+d) from total footing area.',
    difficulty: 'Hard'
  },
  {
    id: 'psad_p20_wall_footing_temp_bars',
    area: 'PSAD',
    domain: 'Reinforced Concrete Design',
    topic: 'Footings (Axially Loaded, Eccentric & Combined)',
    examSubtopic: 'Reinforced Concrete & Prestressed Design',
    title: 'Wall Footing Design & Shrinkage/Temperature Reinforcement Table',
    pageRef: 20,
    latex: 'V_u = q_u\\left[\\frac{B - a}{2} - d\\right], \\qquad M_u = \\frac{1}{2}q_u\\left(\\frac{B - a}{2}\\right)^2, \\qquad b_w = 1000\\text{ mm (per 1 m strip)}',
    secondaryEquations: [
      { label: 'One-Way Shear Strength & Applied Stress', latex: 'V_c = \\frac{1}{6}\\lambda\\sqrt{f_c\'}\\, b_w d, \\qquad v = \\frac{V_u}{\\phi\\, b_w d}' },
      { label: 'Main & Temperature Bar Spacing', latex: 's_{\\max,\\text{main}} = \\min\\!\\left(3t,\\; 450\\text{ mm},\\; \\frac{1000\\, A_b}{A_s}\\right), \\qquad s_{\\max,\\text{temp}} = \\min\\!\\left(5t,\\; 450\\text{ mm},\\; \\frac{B - 2cc - d_b}{n - 1}\\right)' }
    ],
    tables: [
      {
        title: 'Minimum Temperature & Shrinkage Steel Area A_s,min (NSCP/ACI)',
        headers: ['Reinforcement Type', 'f_y (MPa)', 'A_s,min'],
        rows: [
          ['Deformed Bars', '< 420', '0.0020 A_g'],
          ['Deformed Bars / Welded Wire', '≥ 420', 'max( 0.0018 × 420 / f_y, 0.0014 ) × A_g']
        ]
      }
    ],
    flashcardPrompt: 'Give Wall Footing V_u and M_u per meter strip, main vs temp bar max spacings, and the A_s,min temperature steel table.',
    flashcardHint: 'Main bars max spacing = min(3t, 450 mm); Temp bars max spacing = min(5t, 450 mm); threshold f_y = 420 MPa.',
    difficulty: 'Medium'
  },
  {
    id: 'psad_p21_uplift_combined_footing',
    area: 'PSAD',
    domain: 'Reinforced Concrete Design',
    topic: 'Footings (Axially Loaded, Eccentric & Combined)',
    examSubtopic: 'Reinforced Concrete & Prestressed Design',
    title: 'Uplift Prevention & Combined Rectangular Footings',
    pageRef: 21,
    latex: 'B_{\\min} = \\frac{6 M}{P} \\;\\;\\left(e \\le \\frac{B}{6}\\right), \\qquad L = 2\\bar{x}, \\qquad R\\bar{x} = P_{u1} x_1 + P_{u2} x_2',
    secondaryEquations: [
      { label: 'Retaining/Footing Uplift Check', latex: '\\bar{x} = \\frac{RM - OM}{R_y} \\ge \\frac{B}{3}, \\qquad q_{\\max} = \\frac{2 R_y}{3\\bar{x}} \\;\\;(\\text{if } \\bar{x} < B/3)' },
      { label: 'Combined Footing Uniform Soil Pressure', latex: 'q_u = \\frac{P_u}{B L}, \\qquad w_u = q_u B' }
    ],
    diagrams: [
      {
        src: '/assets/psad_formulas/p21_combined_footing.png',
        caption: 'Combined rectangular footing aligning resultant P centroid with L = 2x̄ and punching perimeters at d from column faces.',
        alt: 'Combined rectangular footing elevation diagram'
      }
    ],
    notes: [
      'For V_u and M_u analysis on a combined footing, select the heavily loaded column critical sections.'
    ],
    flashcardPrompt: 'State the Uplift Prevention conditions (B_min, x̄ ≥ B/3, q_max) and Combined Rectangular Footing equations (L = 2x̄, q_u, w_u).',
    flashcardHint: 'Centering the footing centroid over the resultant R requires L = 2x̄ measured from the property-line edge.',
    difficulty: 'Medium'
  },

  // --- P.22 & P.23: T-Beams ---
  {
    id: 'psad_p22_p23_tbeam_design_investigation',
    area: 'PSAD',
    domain: 'Reinforced Concrete Design',
    topic: 'T-Beams Design & Investigation',
    examSubtopic: 'Reinforced Concrete & Prestressed Design',
    title: 'T-Beam Effective Flange Width b_f & Analysis/Design (a ≤ t_f vs a > t_f)',
    pageRef: 22,
    latex: 'b_f = \\min\\!\\left\\{ b_w + \\frac{1}{2}(S_{c,\\text{web},L} + S_{c,\\text{web},R}),\\;\\; b_w + 16 h_{\\text{slab}},\\;\\; b_w + \\frac{L_{c,\\text{beam}}}{4} \\right\\}',
    secondaryEquations: [
      { label: 'Case 1: a ≤ t_f (Behaves as SRB of width b_f)', latex: 'M_n = 0.85 f_c\' a b_f\\left(d - \\frac{a}{2}\\right), \\qquad 0.85 f_c\' a b_f = A_s f_s' },
      {
        label: 'Case 2: a > t_f (Flange Outstands + Web Compression)',
        latex: '0.85 f_c\'\\left[t_f(b_f - b_w) + a b_w\\right] = A_s f_s, \\qquad M_n = 0.85 f_c\'\\left[t_f(b_f - b_w)\\left(d - \\frac{t_f}{2}\\right) + a b_w\\left(d - \\frac{a}{2}\\right)\\right]'
      },
      { label: 'Number of Tension Bars & Strain Check', latex: 'n = \\frac{A_s}{A_b}, \\qquad f_s = 600\\left(\\frac{d_t - c}{c}\\right) \\ge 1000\\text{ MPa (T.C.)}' }
    ],
    diagrams: [
      {
        src: '/assets/psad_formulas/p22_tbeam_section.png',
        caption: 'T-beam cross section showing flange outstands (b_f − b_w) and moment arms (d − t_f/2) and (d − a/2) when a > t_f.',
        alt: 'T-beam flange and web stress block lever arms'
      }
    ],
    notes: [
      'Investigation workflow: first assume a < t_f using 0.85 f_c’ a b_f = A_s f_y; if a > t_f, recompute C_c = T across flange outstands + web and verify f_s.'
    ],
    flashcardPrompt: 'Give the three T-beam effective flange width b_f limits and the equilibrium + nominal moment equations when a > t_f.',
    flashcardHint: 'Split concrete compression into overhanging flanges t_f(b_f − b_w) at arm (d − t_f/2) and full web rect a·b_w at arm (d − a/2).',
    difficulty: 'Hard'
  },

  // =========================================================================
  // THEORY OF STRUCTURES (Pages 24 - 29 & 40 - 45)
  // =========================================================================

  // --- P.24 (Also P.42): Degree of Indeterminacy & Conjugate Beam ---
  {
    id: 'psad_p24_indeterminacy_conjugate_beam',
    area: 'PSAD',
    domain: 'Theory of Structures',
    topic: 'Degree of Indeterminacy & Conjugate Beam',
    examSubtopic: 'Structural Mechanics & Statics',
    title: 'Degree of Indeterminacy (DI) & Conjugate Beam Support Mapping',
    pageRef: 24,
    latex: '\\text{Beams: } DI = R - 3 - C, \\qquad \\text{Frames: } DI = R + 3M - 3J - C, \\qquad \\text{Trusses: } DI = R + M - 2J',
    secondaryEquations: [
      { label: 'Alternate Beam/Frame & 2D Closed-Loop Formula', latex: 'DI = r - 3n, \\qquad DI_{\\text{2D frame}} = 3(\\text{no. of loops}) - \\text{releases}' },
      { label: 'Conjugate Beam Equivalence', latex: '\\theta_{\\text{real}} = \\frac{V_{\\text{conj}}}{EI}, \\qquad \\delta_{\\text{real}} = \\frac{M_{\\text{conj}}}{EI}' }
    ],
    diagrams: [
      {
        src: '/assets/psad_formulas/p24_2d_frame_loops.png',
        caption: 'Closed-loop counting method for 2D rigid frames (each fixed base ground segment forms a closed loop).',
        alt: '2D portal frame closed loops indeterminacy diagram'
      },
      {
        src: '/assets/psad_formulas/p24_conjugate_beam_supports.png',
        caption: 'Real beam support to Conjugate beam support transformation chart.',
        alt: 'Conjugate beam support conversion chart'
      }
    ],
    tables: [
      {
        title: 'Real Beam vs Conjugate Beam Support Mapping',
        headers: ['Real Beam Support / Condition', 'Conjugate Beam Equivalent'],
        rows: [
          ['Fixed Support', 'Free End'],
          ['End Roller / End Pin', 'End Roller / End Pin'],
          ['Interior Roller / Pin Support', 'Internal Hinge'],
          ['Internal Hinge', 'Interior Roller / Pin Support'],
          ['Free End', 'Fixed Support']
        ]
      }
    ],
    notes: [
      'Variables: R = reactions, M = members, J = joints, C = hinge/internal releases.'
    ],
    flashcardPrompt: 'State all Degree of Indeterminacy formulas (Beams, Frames, Trusses, 2D Loops) and the Real-to-Conjugate Beam support conversions.',
    flashcardHint: 'Fixed ↔ Free; Interior Support ↔ Internal Hinge; Real Slope/Deflection = Conjugate Shear/Moment divided by EI.',
    difficulty: 'Easy'
  },

  // --- P.25: Moment Distribution Method ---
  {
    id: 'psad_p25_moment_distribution',
    area: 'PSAD',
    domain: 'Theory of Structures',
    topic: 'Moment Distribution Method',
    examSubtopic: 'Structural Mechanics & Statics',
    title: 'Moment Distribution: Stiffness, Distribution Factors & Carry-Over Moment',
    pageRef: 25,
    latex: 'k = \\frac{4 E I}{L}, \\qquad DF = \\frac{k}{\\sum k}, \\qquad M_{\\text{CO}} = -\\frac{1}{2}M_{\\text{applied}}',
    secondaryEquations: [
      { label: 'Modified Stiffness for Pin/Roller Far End', latex: 'k_{\\text{mod}} = \\frac{3}{4} k = \\frac{3 E I}{L}' },
      { label: 'Boundary Distribution Factors', latex: 'DF_{\\text{fixed}} = 0, \\qquad DF_{\\text{hinged/roller/overhang}} = 1' }
    ],
    flashcardPrompt: 'Write the Moment Distribution formulas for member stiffness k, modified far-pin stiffness, distribution factor DF, boundary DFs, and Carry-Over moment.',
    flashcardHint: 'Far fixed = 4EI/L; far hinged/roller = 3/4 k; Fixed DF = 0, Free/Pin DF = 1.',
    difficulty: 'Easy'
  },

  // --- P.26 & P.27 & P.28: Superposition Method ---
  {
    id: 'psad_p26_superposition_simple_beams',
    area: 'PSAD',
    domain: 'Theory of Structures',
    topic: 'Superposition Method (Simple & Cantilever Beams)',
    examSubtopic: 'Structural Mechanics & Statics',
    title: 'Superposition Method: Simple Beam Slopes, Deflections & Elastic Curves (Cases 1–3)',
    pageRef: 26,
    latex: '\\delta_{\\text{Case 1}} = \\frac{P L^3}{48 E I}, \\qquad \\delta_{\\text{Case 3}} = \\frac{5 w_0 L^4}{384 E I}',
    secondaryEquations: [
      { label: 'Case 1: Midspan Point Load P', latex: 'M_{\\max} = \\frac{PL}{4}, \\quad \\theta_L = \\theta_R = \\frac{PL^2}{16EI}, \\quad EIy = \\frac{Px}{12}\\left(\\frac{3}{4}L^2 - x^2\\right) \\;(0<x<L/2)' },
      { label: 'Case 2: Off-Center Point Load P (Slopes & Deflections)', latex: 'M_{\\max} = \\frac{Pab}{L}\\;(@x=a), \\quad \\theta_L = \\frac{Pb(L^2-b^2)}{6EIL}, \\quad \\theta_R = \\frac{Pa(L^2-a^2)}{6EIL}, \\quad \\delta_{\\max} = \\frac{Pb(L^2-b^2)^{3/2}}{9\\sqrt{3}EIL}\\;\\text{at }x=\\sqrt{\\frac{L^2-b^2}{3}}' },
      { label: 'Case 2: Midspan Deflection & Elastic Curves (a > b)', latex: '\\delta_{\\text{mid}} = \\frac{Pb}{48EI}(3L^2-4b^2), \\quad EIy_{0<x<a} = \\frac{Pbx}{6L}(L^2-x^2-b^2), \\quad EIy_{a<x<L} = \\frac{Pb}{6L}\\left[\\frac{L}{b}(x-a)^3 + (L^2-b^2)x - x^3\\right]' },
      { label: 'Case 3: Full UDL w_0', latex: 'M_{\\max} = \\frac{w_0 L^2}{8}, \\quad \\theta_L = \\theta_R = \\frac{w_0 L^3}{24EI}, \\quad EIy = \\frac{w_0 x}{24}(L^3 - 2Lx^2 + x^3)' }
    ],
    diagrams: [
      {
        src: '/assets/psad_formulas/p26_superposition_case1.png',
        caption: 'Case 1: Simple beam with concentrated load P at midspan.',
        alt: 'Superposition Case 1 simple beam midspan load'
      },
      {
        src: '/assets/psad_formulas/p26_superposition_case2.png',
        caption: 'Case 2: Simple beam with concentrated load P at distances a and b.',
        alt: 'Superposition Case 2 simple beam eccentric load'
      },
      {
        src: '/assets/psad_formulas/p26_superposition_case3.png',
        caption: 'Case 3: Simple beam with uniform load w_0 over entire span.',
        alt: 'Superposition Case 3 simple beam UDL'
      }
    ],
    flashcardPrompt: 'Give M_max, end slopes θ_L/θ_R, and δ_max for Simple Beams under Midspan Load (Case 1), Off-Center Load (Case 2), and Full UDL (Case 3).',
    flashcardHint: 'Midspan P: PL/4, PL²/16EI, PL³/48EI. Full UDL: wL²/8, wL³/24EI, 5wL⁴/384EI.',
    difficulty: 'Medium'
  },
  {
    id: 'psad_p27_p28_superposition_cantilevers',
    area: 'PSAD',
    domain: 'Theory of Structures',
    topic: 'Superposition Method (Simple & Cantilever Beams)',
    examSubtopic: 'Structural Mechanics & Statics',
    title: 'Superposition Method: Cantilever Beam Deflections (Cases 7 & 8) & Compatibility',
    pageRef: 27,
    latex: '\\delta_{\\text{Case 7}} = \\frac{P L^3}{3 E I}, \\qquad \\delta_{\\text{Case 8}} = \\frac{P a^2}{6 E I}(3L - a)',
    secondaryEquations: [
      { label: 'Case 7: Tip Load on Cantilever', latex: 'M_{\\max} = -PL, \\quad \\theta = \\frac{PL^2}{2EI}, \\quad EIy = \\frac{Px^2}{6}(3L - x)' },
      { label: 'Case 8: Interior Load at Distance a', latex: 'M_{\\max} = -Pa, \\quad \\theta = \\frac{Pa^2}{2EI}, \\quad EIy = \\frac{Px^2}{6}(3a-x) \\;(x<a), \\quad \\frac{Pa^2}{6}(3x-a) \\;(x>a)' },
      { label: 'Beam-to-Cantilever Compatibility', latex: '\\delta_s = \\delta_c \\implies \\frac{R b x}{6L}(L^2 - x^2 - b^2) = \\frac{P L^3}{3} - \\frac{R L^3}{3}' }
    ],
    diagrams: [
      {
        src: '/assets/psad_formulas/p27_superposition_case7.png',
        caption: 'Case 7: Cantilever beam with concentrated load P at free end.',
        alt: 'Superposition Case 7 cantilever free-end load'
      },
      {
        src: '/assets/psad_formulas/p27_superposition_case8.png',
        caption: 'Case 8: Cantilever beam with concentrated load P at distance a from fixed wall.',
        alt: 'Superposition Case 8 cantilever interior load'
      },
      {
        src: '/assets/psad_formulas/p28_compatibility_cantilever.png',
        caption: 'Deflection compatibility example: cantilever BD resting on simply supported beam ABC.',
        alt: 'Compatibility crossed beam and cantilever diagram'
      }
    ],
    flashcardPrompt: 'State M_max, tip slope θ, tip deflection δ, and elastic curve EIy for Cantilever Cases 7 & 8 plus beam-to-cantilever deflection compatibility.',
    flashcardHint: 'Free-end load P: θ = PL²/(2EI), δ = PL³/(3EI). For crossed beams, equate upward vs downward contact deflections δ_s = δ_c.',
    difficulty: 'Medium'
  },

  // --- P.29: Three-Moment Equation ---
  {
    id: 'psad_p29_three_moment_equation',
    area: 'PSAD',
    domain: 'Theory of Structures',
    topic: 'Three-Moment Equation & Loading Factors',
    examSubtopic: 'Structural Mechanics & Statics',
    title: 'Three-Moment Equation & Span Loading Factors (6Aa/L, 6Ab/L)',
    pageRef: 29,
    latex: 'M_1 L_1 + 2 M_2(L_1 + L_2) + M_3 L_2 + \\frac{6 A_1 \\bar{a}_1}{L_1} + \\frac{6 A_2 \\bar{b}_2}{L_2} = 6 E I\\left[\\frac{h_1}{L_1} + \\frac{h_2}{L_2}\\right]',
    secondaryEquations: [
      { label: 'Point Load P at (a, b) / Midspan', latex: '\\frac{6A\\bar{a}}{L} = \\frac{Pa}{L}(L^2-a^2), \\quad \\frac{6A\\bar{b}}{L} = \\frac{Pb}{L}(L^2-b^2); \\qquad \\text{Midspan: } \\frac{3PL^2}{8}' },
      { label: 'UDL w_0 & Symmetrical Triangular w_0', latex: '\\text{UDL: } \\frac{w_0 L^3}{4}, \\qquad \\text{Sym. Triangular: } \\frac{5 w_0 L^3}{32}' },
      { label: 'Right Triangular w_0 (0 at L, w_0 at R)', latex: '\\frac{6A\\bar{a}}{L} = \\frac{8 w_0 L^3}{60}, \\qquad \\frac{6A\\bar{b}}{L} = \\frac{7 w_0 L^3}{60}' },
      { label: 'Applied Couple M at (a, b)', latex: '\\frac{6A\\bar{a}}{L} = -\\frac{M}{L}(3a^2 - L^2), \\qquad \\frac{6A\\bar{b}}{L} = \\frac{M}{L}(3b^2 - L^2)' }
    ],
    diagrams: [
      {
        src: '/assets/psad_formulas/p29_three_moment_loading_table.png',
        caption: 'Reference loading factors (6Aa/L and 6Ab/L) for point loads, UDL, triangular loads, and point moments.',
        alt: 'Three-Moment Equation 6Aa/L and 6Ab/L loading table'
      }
    ],
    notes: [
      'Rules: 1) Set points 1, 2, 3 left to right; 2) h_1 = h_2 = 0 if supports are unyielding; 3) Extend an imaginary zero-length span (L = 0) at any fixed support.'
    ],
    flashcardPrompt: 'Write the Three-Moment Equation and give the 6Aa/L & 6Ab/L loading factors for UDL, Midspan Load, Off-Center Load, Triangular Load, and Point Moment.',
    flashcardHint: 'Point load at midspan: 3PL²/8. Full UDL: w_0 L³/4. Triangle peaking right: 8/60 left, 7/60 right.',
    difficulty: 'Hard'
  },

  // --- P.40, P.44, P.45: Fixed-End Moments & Propped Cantilevers ---
  {
    id: 'psad_p40_fixed_end_moments_chart',
    area: 'PSAD',
    domain: 'Theory of Structures',
    topic: 'Fixed-End Moments & Propped Cantilevers',
    examSubtopic: 'Structural Mechanics & Statics',
    title: 'Fixed-End Moments (FEM): Point Loads, Moments & Distributed Loads',
    pageRef: 40,
    latex: 'FEM_{\\text{midspan }P} = \\frac{PL}{8}, \\qquad FEM_{\\text{ecc }P} = \\frac{Pab^2}{L^2},\\; \\frac{Pa^2 b}{L^2}, \\qquad FEM_{\\text{UDL}} = \\frac{wL^2}{12}',
    secondaryEquations: [
      { label: 'Point Moment M at Midspan & at (a, b)', latex: 'FEM_{\\text{mid }M} = \\frac{M}{4}, \\qquad FEM_{AB} = \\frac{Mb}{L^2}(b - 2a), \\quad FEM_{BA} = \\frac{Ma}{L^2}(2b - a)' },
      { label: 'Partial UDL (Length a from Left)', latex: 'FEM_{AB} = \\frac{wa^2}{12L^2}(6L^2 - 8aL + 3a^2), \\qquad FEM_{BA} = \\frac{wa^3}{12L^2}(4L - 3a)' },
      { label: 'Triangular (Left Peak) & Symmetrical Triangle', latex: 'FEM_{AB,\\text{tri}} = \\frac{wL^2}{20}, \\quad FEM_{BA,\\text{tri}} = \\frac{wL^2}{30}; \\qquad FEM_{\\text{sym tri}} = \\frac{5wL^2}{96}' }
    ],
    diagrams: [
      {
        src: '/assets/psad_formulas/p40_fem_point_distributed_table.png',
        caption: 'Fixed-End Moments visual reference chart covering Point Loads, Point Moments, Partial UDLs, and Triangular Loads.',
        alt: 'Fixed End Moments chart for point loads, moments, and distributed loads'
      }
    ],
    flashcardPrompt: 'Give the Fixed-End Moments for: (1) Midspan & Off-center P, (2) Midspan & Off-center Moment M, (3) Full UDL, and (4) Linear & Symmetrical Triangular Loads.',
    flashcardHint: 'Midspan P: PL/8; Full UDL: wL²/12; Linear triangle: wL²/20 (heavy end) & wL²/30 (zero end); Sym triangle: 5wL²/96.',
    difficulty: 'Medium'
  },
  {
    id: 'psad_p44_p45_fem_propped_cantilevers',
    area: 'PSAD',
    domain: 'Theory of Structures',
    topic: 'Fixed-End Moments & Propped Cantilevers',
    examSubtopic: 'Structural Mechanics & Statics',
    title: 'Fixed-End Moments & Propped Cantilever Moments / End Reactions',
    pageRef: 44,
    latex: 'FEM\'_{\\text{mid }P} = \\frac{3PL}{16}, \\qquad FEM\'_{\\text{UDL}} = \\frac{wL^2}{8}, \\qquad FEM\'_{\\text{tri}} = \\frac{wL^2}{15}',
    secondaryEquations: [
      { label: 'Double-Fixed Equal Third & Quarter Point Loads', latex: 'FEM_{\\text{third pts}} = \\frac{2PL}{9}, \\qquad FEM_{\\text{quarter pts}} = \\frac{5PL}{16}' },
      { label: 'Propped Cantilever Point Load FEM’ & Reactions', latex: 'FEM\'_{\\text{ecc }P} = \\frac{P}{L^2}\\left(b^2 a + \\frac{a^2 b}{2}\\right),\\; R_B = \\frac{Pa^2(3L-a)}{2L^3}; \\qquad FEM\'_{\\text{third}} = \\frac{PL}{3},\\; R_B = \\frac{2P}{3}; \\qquad FEM\'_{\\text{quarter}} = \\frac{45PL}{96}' },
      { label: 'Double-Fixed & Propped Half-Span UDL', latex: 'FEM_{\\text{half}} = \\frac{11wL^2}{192}\\;/\\;\\frac{5wL^2}{192}; \\qquad FEM\'_{\\text{half}} = \\frac{9wL^2}{128}, \\qquad R_{B,\\text{UDL}} = \\frac{3}{8}wL, \\qquad R_{B,\\text{tri}} = \\frac{wL}{10}' }
    ],
    diagrams: [
      {
        src: '/assets/psad_formulas/p44_fem_concentrated_table.png',
        caption: 'Fixed-fixed vs propped cantilever FEMs and roller reactions R for concentrated loads.',
        alt: 'Fixed-End Moments and propped cantilever table for point loads'
      },
      {
        src: '/assets/psad_formulas/p45_fem_distributed_table.png',
        caption: 'Fixed-fixed vs propped cantilever FEMs and roller reactions R for UDL, half-UDL, and triangular load.',
        alt: 'Fixed-End Moments and propped cantilever table for distributed loads'
      }
    ],
    flashcardPrompt: 'State the Propped Cantilever (FEM’) and Roller Reaction R_B for Midspan P, Third-Point P, Full UDL, Half-UDL, and Triangular Load.',
    flashcardHint: 'Propped UDL: wL²/8 and R_B = 3/8 wL. Propped triangle (heavy at fixed): wL²/15 and R_B = wL/10.',
    difficulty: 'Hard'
  },

  // --- P.41: Influence Lines, Moving Loads & Propped Triangular Deflection ---
  {
    id: 'psad_p41_influence_lines_moving_loads',
    area: 'PSAD',
    domain: 'Theory of Structures',
    topic: 'Influence Lines & Moving Loads',
    examSubtopic: 'Structural Mechanics & Statics',
    title: 'Influence Lines, Absolute Maximum Moment (2 Axles) & Propped Triangular δ_max',
    pageRef: 41,
    latex: 'M_{\\max,\\text{2 axles}} = \\frac{(R L - P_s d)^2}{4 R L}, \\qquad \\delta_{\\max,\\text{propped tri}} = \\frac{w L^4}{185 E I}',
    secondaryEquations: [
      { label: 'Influence Line Ordinates on Simple Span L', latex: 'IL_{R_A} = 1.0 \\;(@A), \\qquad IL_{V_C} = +\\frac{b}{L} \\;/\\; -\\frac{a}{L}, \\qquad IL_{M_C} = \\frac{a b}{L}' }
    ],
    diagrams: [
      {
        src: '/assets/psad_formulas/p41_influence_lines.png',
        caption: 'Standard simple-beam Influence Lines for support reaction at A, shear at point C, and moment at point C.',
        alt: 'Influence lines for reaction, shear, and moment'
      },
      {
        src: '/assets/psad_formulas/p41_propped_beam_triangular.png',
        caption: 'Propped cantilever carrying linearly varying triangular load w peaking at fixed end.',
        alt: 'Propped cantilever under triangular load deflection diagram'
      }
    ],
    variables: [
      { symbol: 'R, P_s, d', meaning: 'Resultant of the two axle loads, smaller axle load, and axle spacing' },
      { symbol: 'a, b', meaning: 'Left and right distances from section C to supports A and B (a + b = L)' }
    ],
    flashcardPrompt: 'Give the simple-beam Influence Line peaks for Reaction, Shear, and Moment, the 2-Axle Absolute Max Moment formula, and propped triangular δ_max.',
    flashcardHint: 'Moment IL peak is ab/L; 2-axle absolute max moment divides (RL − P_s d)² by 4RL.',
    difficulty: 'Medium'
  },

  // =========================================================================
  // STRENGTH OF MATERIALS (Pages 30 - 33)
  // =========================================================================

  // --- P.30: Axial Stress/Strain, Pressure Vessels & Thermal Deformation ---
  {
    id: 'psad_p30_axial_pressure_vessels_thermal',
    area: 'PSAD',
    domain: 'Strength of Materials',
    topic: 'Axial Stress, Strain, Pressure Vessels & Thermal',
    examSubtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    title: 'Axial Stress & Deformation, Thin-Walled Pressure Vessels & Thermal Strain',
    pageRef: 30,
    latex: '\\sigma = \\frac{P}{A}, \\quad \\delta = \\frac{P L}{A E} = \\frac{\\sigma L}{E}, \\quad \\sigma_T = \\frac{p D}{2 t}, \\quad \\sigma_L = \\frac{p D}{4 t}, \\quad \\delta_T = \\alpha L(T_f - T_i)',
    secondaryEquations: [
      { label: 'Bearing & Simple/Double/Punching Shear Stress', latex: '\\sigma_b = \\frac{P}{A_{\\text{contact}}}, \\quad \\tau = \\frac{V}{A_{\\parallel}}, \\quad \\tau_{\\text{double}} = \\frac{V}{2 A_{\\parallel}}, \\quad \\tau_{\\text{punch}} = \\frac{V}{\\text{Perim}\\cdot t}' },
      { label: 'Strain, Self-Weight Elongation & Relative Displacement', latex: '\\varepsilon = \\frac{\\delta}{L} = \\frac{\\sigma}{E}, \\qquad \\delta_{\\text{self}} = \\frac{W L}{2 A E}, \\qquad \\delta_{AB} = \\delta_B - \\delta_A' },
      { label: 'Poisson’s Ratio, Elastic Relation & Bulk Modulus', latex: '\\nu = -\\frac{\\varepsilon_{\\text{lat}}}{\\varepsilon_{\\text{long}}}, \\qquad G = \\frac{E}{2(1 + \\nu)}, \\qquad E_{\\text{bulk}} = \\frac{E}{3(1 - 2\\nu)} = \\frac{\\sigma}{\\Delta V / V_i}' },
      { label: 'Spherical Thin-Walled Pressure Vessel', latex: '\\sigma_{\\text{sphere}} = \\frac{p D}{4 t}' }
    ],
    notes: [
      'Cylindrical hoop stress pD/(2t) is twice longitudinal/spherical stress pD/(4t). Volume strain ΔV/V_i = (1 − 2ν)(ε_x + ε_y + ε_z) or 3σ(1−2ν)/E under hydrostatic pressure.'
    ],
    flashcardPrompt: 'Write Bearing Stress, Single/Double/Punching Shear, Self-Weight δ, Poisson’s ratio ν, E–G–ν identity, Bulk Modulus, and Pressure Vessel stresses.',
    flashcardHint: 'G = E / [2(1+ν)] and K_bulk = E / [3(1−2ν)]; self-weight acts at half-length giving WL/(2AE).',
    difficulty: 'Easy'
  },

  // --- P.30, P.31, P.32: Simple Shear, Torsion & Helical Springs ---
  {
    id: 'psad_p30_p31_p32_shear_torsion',
    area: 'PSAD',
    domain: 'Strength of Materials',
    topic: 'Simple Shear, Torsion & Helical Springs',
    examSubtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    title: 'Simple Shear, Modulus of Rigidity G, Angle of Twist & Torsion',
    pageRef: 31,
    latex: '\\tau = \\frac{V}{A_s}, \\qquad \\delta_s = \\frac{V L}{A_s G}, \\qquad \\phi = \\frac{T L}{J G}, \\qquad \\tau_{\\text{torsion}} = \\frac{T \\rho}{J}',
    secondaryEquations: [
      { label: 'Shear Strain, Polar Moment Identity & Torque Diagram Twist', latex: '\\gamma = \\frac{\\delta_s}{L} = \\frac{r\\theta}{L}, \\qquad J = I_x + I_y, \\qquad \\theta_{AB} = \\frac{\\text{Area}_{TD}}{J G}' },
      { label: 'Polar Moment of Inertia J', latex: 'J_{\\text{solid}} = \\frac{\\pi}{32} D^4, \\qquad J_{\\text{hollow}} = \\frac{\\pi}{32}(D^4 - d^4)' },
      { label: 'Max & Inner Hollow Torsional Shear Stress', latex: '\\tau_{\\max,\\text{solid}} = \\frac{16 T}{\\pi D^3}, \\qquad \\tau_{\\max,\\text{hollow}} = \\frac{16 T D}{\\pi(D^4 - d^4)}, \\qquad \\tau_{\\min,\\text{hollow}} = \\frac{16 T d}{\\pi(D^4 - d^4)}' }
    ],
    notes: [
      '1 revolution = 2π radians when checking angle of twist φ or torque-diagram area integration.'
    ],
    flashcardPrompt: 'State Shear Deformation δ_s, Angle of Twist φ = Area_TD/(JG), Polar Moment J = I_x + I_y, and Max/Min Torsional Shear Stress.',
    flashcardHint: 'Replace (P, A, E) in axial formulas with (T, J, G) for torsion; inner radius stress scales linearly as T r_i / J.',
    difficulty: 'Easy'
  },
  {
    id: 'psad_p31_helical_springs_wahl',
    area: 'PSAD',
    domain: 'Strength of Materials',
    topic: 'Simple Shear, Torsion & Helical Springs',
    examSubtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    title: 'Helical Springs: Max Shear Stress, A.M. Wahl’s Formula & Spring Deflection',
    pageRef: 31,
    latex: 'S_s^{\\text{Wahl}} = \\frac{16 P R}{\\pi d^3}\\left[\\frac{4m - 1}{4m - 4} + \\frac{0.615}{m}\\right], \\qquad \\delta = \\frac{64 P R^3 n}{G d^4}',
    secondaryEquations: [
      { label: 'Approximate Spring Stress & Spring Index m', latex: 'S_s = \\frac{16 P R}{\\pi d^3}\\left(1 + \\frac{d}{4R}\\right), \\qquad m = \\frac{2 R}{d}' }
    ],
    variables: [
      { symbol: 'P, R, d', meaning: 'Axial spring load, mean coil radius, and spring wire diameter' },
      { symbol: 'n, G', meaning: 'Number of active coils and shear modulus of rigidity' },
      { symbol: 'm', meaning: 'Spring index = D_mean / d_wire = 2R / d' }
    ],
    flashcardPrompt: 'Write the approximate Helical Spring shear stress S_s, A.M. Wahl’s exact stress formula, spring index m, and coil deflection δ.',
    flashcardHint: 'Wahl factor adds (4m−1)/(4m−4) + 0.615/m; deflection scales with R³ and n divided by Gd⁴.',
    difficulty: 'Medium'
  },

  // --- P.32: Flexural Stress, Shear Flow, Transformed Section & Combined Stress ---
  {
    id: 'psad_p32_flexural_shear_flow_combined',
    area: 'PSAD',
    domain: 'Strength of Materials',
    topic: 'Flexural Shear, Shear Flow & Combined Stress',
    examSubtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    title: 'Flexural Stress, Transformed Section, Shear Flow, Connectors & Combined Stress',
    pageRef: 32,
    latex: 'f_v = \\frac{V Q}{I b}, \\qquad q = \\frac{V Q}{I}, \\qquad s = \\frac{R I}{V Q}, \\qquad f_b = \\frac{M y}{I}, \\qquad \\sigma = \\pm\\frac{P}{A} \\pm \\frac{M c}{I}',
    secondaryEquations: [
      { label: 'Modular Ratio (Transformed Section)', latex: 'n = \\frac{E_{\\text{stiffer material}}}{E_{\\text{less stiff material}}}' }
    ],
    notes: [
      'For hollow box/pipe sections, use b = 2t across the web walls.',
      'Composite Conversion Rule: To convert less stiff to stiffer material, divide width by n; to convert stiffer to less stiff material, multiply width by n (with width parallel to the neutral axis).'
    ],
    flashcardPrompt: 'State Flexural Shear f_v, Shear Flow q, Connector Spacing s, Flexural Stress f_b, Modular Ratio n, and Combined Axial-Bending Stress.',
    flashcardHint: 'Shear connector resistance R divided by shear flow q gives spacing s = R / q = RI / (VQ).',
    difficulty: 'Medium'
  },

  // --- P.33: Precast Concrete Beam Pick-Up Points ---
  {
    id: 'psad_p33_precast_pickup_points',
    area: 'PSAD',
    domain: 'Strength of Materials',
    topic: 'Precast Concrete Beam Pick-Up Points',
    examSubtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    title: 'Optimal Precast Concrete Beam Pick-Up Points (M_min & V_min)',
    pageRef: 33,
    latex: '\\text{2-Pt Lift (}M_{\\min}\\text{)}: x = 0.2071 L, \\qquad \\text{2-Pt Lift (}V_{\\min}\\text{)}: x = 0.25 L',
    tables: [
      {
        title: 'Minimum Moment & Shear Pick-Up Locations (Equal Overhangs x from Ends)',
        headers: ['Lifting Configuration', 'Location x from End', 'Optimizing Criterion'],
        rows: [
          ['1-Point Lift', 'x = 0.2929 L', 'Minimum Bending Moment (+M = −M)'],
          ['2-Point Lift', 'x = 0.2071 L', 'Minimum Bending Moment (+M = −M)'],
          ['2-Point Lift', 'x = 0.25 L', 'Minimum Shear Force'],
          ['3-Point Lift', 'x = 0.145 L', 'Minimum Bending Moment (+M = −M)']
        ]
      }
    ],
    flashcardPrompt: 'List the optimal Precast Pick-Up overhang fractions x for 1-Point Lift (M_min), 2-Point Lift (M_min vs V_min), and 3-Point Lift (M_min).',
    flashcardHint: 'Equating cantilever hogging moment wx²/2 to midspan sagging moment gives 0.2929L (1-pt), 0.2071L (2-pt), and 0.145L (3-pt).',
    difficulty: 'Medium'
  },

  // =========================================================================
  // STEEL & PRESTRESSED CONCRETE (Pages 34 - 39 & 43)
  // =========================================================================

  // --- P.34: Steel Basics, A36 Properties & Common Loadings ---
  {
    id: 'psad_p34_steel_basics_a36_loadings',
    area: 'PSAD',
    domain: 'Steel & Prestressed Concrete',
    topic: 'Steel Beam Basics, A36 Constants & Common Loadings',
    examSubtopic: 'Structural Steel & Timber Design',
    title: 'Steel Shear, Bolt Resistance, Section Modulus, A36 Constants & Common Beam Loadings',
    pageRef: 34,
    latex: 'f_v = \\frac{V}{d\\, t_w}, \\qquad R = F_{vb}\\, A\\, (\\text{no. of bolts}), \\qquad S = \\frac{I}{c}',
    secondaryEquations: [
      { label: 'Default A36 Steel Properties & Unit Conversion', latex: 'F_y = 248\\text{ MPa}, \\quad F_u = 400\\text{ MPa}, \\quad E_s = 200\\,000\\text{ MPa}, \\quad \\text{MPa} = 6.9\\times \\text{ksi}' },
      { label: 'Common Simple Beam Maxima', latex: '1\\text{-pt}: \\frac{P}{2},\\frac{PL}{4},\\frac{PL^3}{48EI}; \\; 2\\text{-pt (}L/3\\text{)}: P,\\frac{PL}{3},\\frac{23PL^3}{648EI}; \\; \\text{UDL}: \\frac{wL}{2},\\frac{wL^2}{8},\\frac{5wL^4}{384EI}; \\; 3\\text{-pt (}L/4\\text{)}: 1.5P,\\frac{PL}{2},\\frac{19PL^3}{384EI}' }
    ],
    diagrams: [
      {
        src: '/assets/psad_formulas/p34_common_beam_loadings.png',
        caption: 'Common steel beam loadings & supports: 1-pt, 2-pt at third points, UDL, and 3-pt at quarter points.',
        alt: 'Common steel beam loadings V_max, M_max, y_max reference'
      }
    ],
    notes: [
      'Note: Average web shear stress in a steel I-beam is f_v = V / (d t_w).'
    ],
    flashcardPrompt: 'State A36 steel properties (F_y, F_u, E_s), bolt shear resistance R, Section Modulus S, and V_max/M_max/y_max for 2-pt third-point & 3-pt quarter-point loads.',
    flashcardHint: 'A36: 248 / 400 / 200,000 MPa; Third-point y_max = 23PL³/(648EI); Quarter-point y_max = 19PL³/(384EI).',
    difficulty: 'Easy'
  },

  // --- P.35 & P.36: Steel Columns, Bearing, Web Yielding & LRFD ---
  {
    id: 'psad_p35_p36_steel_columns_bearing_lrfd',
    area: 'PSAD',
    domain: 'Steel & Prestressed Concrete',
    topic: 'Steel Columns, Bearing, Web Yielding & LRFD Tension',
    examSubtopic: 'Structural Steel & Timber Design',
    title: 'Steel Interaction Equations, Buckling F_e, Web Yielding, Pedestal Bearing & LRFD',
    pageRef: 35,
    latex: '\\frac{f_a}{F_a} + \\frac{C_{mx} f_{bx}}{\\left(1 - \\frac{f_a}{F_{ex}\'}\\right)F_{bx}} + \\frac{C_{my} f_{by}}{\\left(1 - \\frac{f_a}{F_{ey}\'}\\right)F_{by}} \\le 1.0',
    secondaryEquations: [
      { label: 'Low Axial Compression (f_a/F_a ≤ 0.15) & Tension + Bending', latex: '\\frac{f_a}{F_a} + \\frac{f_{bx}}{F_{bx}} + \\frac{f_{by}}{F_{by}} \\le 1.0, \\qquad \\frac{f_a}{F_t} + \\frac{f_{bx}}{F_{bx}} + \\frac{f_{by}}{F_{by}} \\le 1.0' },
      { label: 'ASD vs Elastic Critical Buckling Stress', latex: 'F_e\' = \\frac{12\\pi^2 E}{23\\left(\\frac{k L_b}{r_b}\\right)^2}, \\qquad F_{e,\\text{elastic}} = \\frac{\\pi^2 E}{\\left(\\frac{k L}{r}\\right)^2}' },
      { label: 'Web Yielding (Interior vs End Load)', latex: '\\frac{P}{t_w(N + 5k)} \\le 0.66 F_y \\;(\\text{interior > }d), \\qquad \\frac{R}{t_w(N + 2.5k)} \\le 0.66 F_y \\;(\\text{end})' },
      { label: 'Allowable Concrete Pedestal Bearing', latex: 'F_p = 0.35 f_c\'\\sqrt{\\frac{A_2}{A_1}} \\le 0.70 f_c\'' },
      { label: 'LRFD Tension Member Design', latex: '\\phi P_n = \\phi F_y A_g \\;(\\phi=0.90\\text{ yielding}), \\qquad \\phi P_n = \\phi F_u U A_n \\;(\\phi=0.75\\text{ rupture})' }
    ],
    notes: [
      'Note: Elastic allowable buckling stress is F_e′ = 12π²E / [23(kL_b/r_b)²], and pedestal bearing amplification is √(A_2/A_1) ≥ 1 capped at 0.70 f_c’ (A_1 = base plate area, A_2 = pedestal area).'
    ],
    flashcardPrompt: 'State the ASD Axial+Bending interaction formulas (f_a/F_a > 0.15 vs ≤ 0.15), Web Yielding (interior N+5k vs end N+2.5k), Pedestal Bearing F_p, and LRFD Tension equations.',
    flashcardHint: '5k for interior concentrated loads, 2.5k at member ends; LRFD tension checks 0.90 F_y A_g vs 0.75 F_u U A_n.',
    difficulty: 'Hard'
  },

  // --- P.36: Eccentric Bolted & Welded Connections ---
  {
    id: 'psad_p36_eccentric_bolts_welds',
    area: 'PSAD',
    domain: 'Steel & Prestressed Concrete',
    topic: 'Eccentric Bolted & Welded Connections',
    examSubtopic: 'Structural Steel & Timber Design',
    title: 'Eccentric Bolted Connections (In-Plane & Out-of-Plane) & Welded Connections',
    pageRef: 36,
    latex: 'f_{vx} = \\frac{P_x}{n A} \\pm \\frac{M y}{J}, \\quad f_{vy} = \\frac{P_y}{n A} \\pm \\frac{M x}{J}, \\quad J_{\\text{bolts}} = \\sum(x^2 + y^2)',
    secondaryEquations: [
      { label: 'Out-of-Plane Bolted Connection', latex: 'f_v = \\frac{P}{A}, \\qquad f_t = \\frac{M c}{I}' },
      { label: 'Bolt Shear & Bearing Contact Areas', latex: 'A_v = 0.25\\pi d^2 N_b N_v, \\qquad A_b = t\\, d_{\\text{bolt}} N_b' },
      { label: 'Fillet Weld Throat, Bending Shear & Polar Moment J', latex: 'A_w = 0.707\\, t_w L, \\quad F_{v,\\text{weld}} = 0.30 F_u, \\quad P_m = \\frac{M c}{\\sum (L^3/12)}, \\quad J_{\\text{weld}} = \\sum L\\left[(x^2 + y^2) + \\frac{L^2}{12}\\right]' }
    ],
    notes: [
      'Weld Instantaneous Center of Rotation offset: e_0 = J / (A_T e_cg). Unit electrode note: F_u = 6.9 × (E-number, e.g. E70 → 70 ksi × 6.9 = 483 MPa).'
    ],
    flashcardPrompt: 'Write In-Plane & Out-of-Plane Bolted stresses, Bolt shear/bearing areas A_v & A_b, Fillet Weld throat A_w, allowable F_v = 0.30 F_u, and Polar Moment J.',
    flashcardHint: 'Fillet throat = 0.707 t_w L; weld allowable shear = 0.30 F_u; multiply single-bolt area by shear planes N_v.',
    difficulty: 'Medium'
  },

  // --- P.38 & P.39: Steel Purlins ---
  {
    id: 'psad_p38_p39_steel_purlins',
    area: 'PSAD',
    domain: 'Steel & Prestressed Concrete',
    topic: 'Steel Purlins Biaxial Bending & Sagrods',
    examSubtopic: 'Structural Steel & Timber Design',
    title: 'Steel Purlins: Sloped Roof Load Decomposition, Biaxial Bending & Sagrods',
    pageRef: 38,
    latex: 'W_y = W_{D+L}\\cos\\theta + W_L, \\qquad W_x = W_{D+L}\\sin\\theta, \\qquad \\frac{f_{bx}}{F_{bx}} + \\frac{f_{by}}{F_{by}} \\le 1.0',
    secondaryEquations: [
      { label: 'Without Sagrods (Simple Span L in Both Axes)', latex: 'M_x = \\frac{W_y L^2}{8}, \\qquad M_y = \\frac{W_x L^2}{8}, \\qquad f_{bx} = \\frac{M_x}{S_x}, \\quad f_{by} = \\frac{M_y}{S_y}' },
      { label: 'With 1 Midspan Sagrod vs 2 Third-Point Sagrods', latex: 'M_{y,\\text{1 mid}} = \\frac{W_x L^2}{32}, \\qquad M_{y,\\text{2 third}} = \\frac{W_x L^2}{90} \\;\\;\\left(\\frac{W_x (L/3)^2}{10}\\right)' }
    ],
    diagrams: [
      {
        src: '/assets/psad_formulas/p38_steel_purlins.png',
        caption: 'Roof purlin channel inclined at angle θ carrying gravity dead/live load and normal wind pressure/suction.',
        alt: 'Sloped steel roof purlin loading diagram'
      }
    ],
    notes: [
      'Note: Under two third-point sagrods, weak-axis bending uses sub-span L/3 (M_y = W_x L²/90 via w l²/10), while unbraced strong-axis simple-span bending remains W_y L²/8.'
    ],
    flashcardPrompt: 'Decompose roof purlin loads W_y and W_x and compute M_y with no sagrods, 1 midspan sagrod, and 2 third-point sagrods.',
    flashcardHint: '1 midspan sagrod gives W_x L²/32; 2 third-point sagrods act as 3 continuous spans (L/3) with factor 1/10 → W_x L²/90.',
    difficulty: 'Medium'
  },

  // --- P.37 (Also P.43): Prestressed Concrete ---
  {
    id: 'psad_p37_prestressed_homogeneous_beam',
    area: 'PSAD',
    domain: 'Steel & Prestressed Concrete',
    topic: 'Prestressed Concrete (Homogeneous Beam)',
    examSubtopic: 'Reinforced Concrete & Prestressed Design',
    title: 'Prestressed Concrete Beams: Homogeneous Beam Sign Convention',
    pageRef: 37,
    latex: 'f = -\\frac{P}{A} \\pm \\frac{P e c}{I} \\pm \\frac{M c}{I}',
    secondaryEquations: [
      { label: 'Tendons BELOW Neutral Axis (Downward Loads)', latex: 'f_{\\text{top}} = -\\frac{P}{A} + \\frac{P e c_t}{I} - \\frac{M c_t}{I}, \\qquad f_{\\text{bot}} = -\\frac{P}{A} - \\frac{P e c_b}{I} + \\frac{M c_b}{I}' },
      { label: 'Tendons ABOVE Neutral Axis (Downward Loads)', latex: 'f_{\\text{bot}} = -\\frac{P}{A} + \\frac{P e c_b}{I} + \\frac{M c_b}{I}, \\qquad f_{\\text{top}} = -\\frac{P}{A} - \\frac{P e c_t}{I} - \\frac{M c_t}{I}' }
    ],
    diagrams: [
      {
        src: '/assets/psad_formulas/p37_prestressed_tendons.png',
        caption: 'Extreme fiber stress sign convention for tendons below vs above the neutral axis under downward gravity loads.',
        alt: 'Prestressed concrete tendon eccentricity stress signs diagram'
      }
    ],
    notes: [
      'Sign Convention: (+) = Tensile Stress, (−) = Compressive Stress.',
      'Note: External downward moment M compresses the top fiber (−Mc/I) and tensions the bottom fiber (+Mc/I), while tendon eccentricity above N.A. compresses top (−Pec/I) and tensions bottom (+Pec/I).'
    ],
    flashcardPrompt: 'Write the Prestressed Homogeneous Beam stress formula and the top/bottom fiber signs (+ tension, − compression) when tendons sit below N.A.',
    flashcardHint: 'Downward moment M causes −Mc/I at top and +Mc/I at bottom; eccentric tendon below N.A. causes +Pec/I at top and −Pec/I at bottom.',
    difficulty: 'Medium'
  },

  // =========================================================================
  // EARTHQUAKE ENGINEERING — NSCP 2015 (Pages 46 - 47)
  // =========================================================================

  // --- P.46 & P.47: NSCP Seismic Base Shear, Period & Force Distribution ---
  {
    id: 'psad_p46_seismic_period_base_shear',
    area: 'PSAD',
    domain: 'Earthquake Engineering',
    topic: 'NSCP Seismic Period & Design Base Shear',
    examSubtopic: 'Seismic Engineering & NSCP Provisions',
    title: 'NSCP 2015 Fundamental Period T, Ground Factors C_a / C_v & Design Base Shear V',
    pageRef: 46,
    latex: 'T = C_t (h_n)^{3/4}, \\qquad V = \\frac{C_v I W}{R T} \\le V_{\\max} = \\frac{2.5 C_a I W}{R}',
    secondaryEquations: [
      { label: 'Zone 4 Near-Source Coefficients (Z = 0.4)', latex: 'C_a = 0.44 N_a, \\qquad C_v = 0.64 N_v' },
      { label: 'NSCP Minimum Base Shear Bounds', latex: 'V_{\\min} = 0.11\\, I\\, C_a W, \\qquad V_{\\min,Z4} = \\frac{0.8\\, Z\\, N_v I\\, W}{R}' }
    ],
    diagrams: [
      {
        src: '/assets/psad_formulas/p46_seismic_building.png',
        caption: '6-storey Special Moment Frame elevation (h_n = 21 m) with tributary floor seismic weights W_1 to W_6.',
        alt: '6-storey building elevation for NSCP seismic analysis'
      }
    ],
    variables: [
      { symbol: 'C_t', meaning: '0.0731 (RC SMRF / EBF), 0.0853 (Steel SMRF), 0.0488 (other systems, h_n in m)' },
      { symbol: 'I, R, W', meaning: 'Importance factor, response modification R, total seismic dead load W' },
      { symbol: 'N_a, N_v', meaning: 'Near-source seismic factors determined from fault distance' }
    ],
    notes: [
      'Note: Standard building-frame thumb rule is T ≈ 0.1 N_storey; always use T = C_t h_n^{3/4} for NSCP Method A.'
    ],
    flashcardPrompt: 'Write NSCP Method A Period T, Zone 4 C_a & C_v, Design Base Shear V, upper cap V_max, and both lower bounds V_min & V_min,Z4.',
    flashcardHint: 'Upper limit: 2.5 C_a I W / R. Lower limits: 0.11 I C_a W and (Zone 4) 0.8 Z N_v I W / R.',
    difficulty: 'Medium'
  },
  {
    id: 'psad_p47_seismic_whipping_distribution',
    area: 'PSAD',
    domain: 'Earthquake Engineering',
    topic: 'Whipping Force & Vertical Story Distribution',
    examSubtopic: 'Seismic Engineering & NSCP Provisions',
    title: 'Roof Whipping Force F_t, Vertical Story Distribution F_x & Overturning Moment',
    pageRef: 47,
    latex: 'F_t = 0.07\\, T\\, V \\le 0.25\\, V \\;\\;\\left(F_t = 0 \\text{ if } T \\le 0.7\\text{ s}\\right), \\qquad F_x = \\frac{(V - F_t)\\, W_x h_x}{\\sum_{i=1}^{n} W_i h_i}',
    secondaryEquations: [
      { label: 'Total Base Shear, Per-Frame Distribution & Overturning Moment', latex: 'V = F_t + \\sum_{x=1}^{n} F_x, \\qquad V_{\\text{frame}} = \\frac{F}{N_{\\text{frames}}}, \\qquad \\sum M_{\\text{OT}} = \\sum F_x h_x + F_t h_T' }
    ],
    variables: [
      { symbol: 'F_t', meaning: 'Concentrated lateral whipping force applied at the top (roof) level' },
      { symbol: 'W_x, h_x', meaning: 'Seismic weight at level x and height h_x above base' }
    ],
    flashcardPrompt: 'State NSCP Whipping Force F_t, Vertical Story Distribution F_x, Per-Frame Base Shear V/N, and Overturning Moment ΣM_x.',
    flashcardHint: 'Distribute remaining (V − F_t) linearly via W_x h_x; sum F_x h_x plus F_t h_T about base for overturning moment.',
    difficulty: 'Easy'
  },

  // =========================================================================
  // NEW ADDITIONS FROM ONCE (2024) FORMULA CARDS — PAGES 2 TO 53
  // =========================================================================

  // --- Strength of Materials Additions (Pages 3, 4, 5) ---
  {
    id: 'psad_once_p03_rigidity_virtual_work_springs',
    area: 'PSAD',
    domain: 'Strength of Materials',
    topic: 'Rigidity, Virtual Work & Spring Systems',
    examSubtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    title: 'Structural Rigidity vs Stiffness, Virtual Work & Spring Combinations',
    pageRef: 3,
    latex: '1\\cdot\\delta = \\sum \\frac{S\\, u\\, L}{A\\, E}, \\qquad R_{\\text{spring}} = \\frac{3\\,\\delta_{\\text{free}}\\, E I k}{k L^3 + 3 E I}',
    secondaryEquations: [
      { label: 'Rigidity vs Stiffness', latex: '\\text{Rigidity: } AE,\\; AG,\\; EI,\\; JG; \\qquad \\text{Stiffness: } \\frac{AE}{L},\\; \\frac{AG}{L},\\; \\frac{F}{x},\\; \\frac{JG}{L}' },
      { label: 'Springs in Parallel & Series', latex: 'k_{\\text{parallel}} = k_1 + k_2, \\qquad k_{\\text{series}} = \\left(\\frac{1}{k_1} + \\frac{1}{k_2}\\right)^{-1}' },
      { label: 'Rigid Bar Cable Compatibility Angle', latex: '\\beta = 90^\\circ - \\theta \\;\\;(\\text{small-angle deformed cable geometry})' }
    ],
    notes: [
      'In R_spring, δ_free is the unpropped cantilever tip deflection without the spring: δ_free = R(L³/3EI + 1/k).'
    ],
    flashcardPrompt: 'Distinguish Axial/Shear/Flexural/Torsional Rigidity vs Stiffness, write Truss Virtual Work 1·δ, Spring Reaction R, and Parallel/Series spring k.',
    flashcardHint: 'Rigidity is cross-section×material (AE, EI); Stiffness divides by L; Parallel adds k directly, Series adds reciprocals.',
    difficulty: 'Medium'
  },
  {
    id: 'psad_once_p05_shear_shapes_closed_tube_spandrel',
    area: 'PSAD',
    domain: 'Strength of Materials',
    topic: 'Flexural Shear, Shear Flow & Combined Stress',
    examSubtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    title: 'Cross-Section Shear Factors, Closed-Tube Torsion (Bredt) & Spandrel Properties',
    pageRef: 5,
    latex: 'f_{v,\\text{rect}} = \\frac{3 V}{2 A}, \\qquad f_{v,\\text{circ}} = \\frac{4 V}{3 A}, \\qquad f_{v,\\text{hollow tube}} = \\frac{2 V}{A}',
    secondaryEquations: [
      { label: 'Thin-Walled Closed Tube Torsion (Bredt Formula)', latex: '\\tau = \\frac{T}{2\\, t\\, A_m}, \\qquad q = \\frac{T}{2\\, A_m}' },
      { label: 'Projected Cylinder Pressure Force & Zero Shear Point', latex: 'F = P_{\\text{net}}\\, D_{\\text{in}} L, \\qquad x_{\\text{PZS}} = \\frac{V}{w}' },
      { label: 'n-th Degree Parabolic Spandrel Area & Centroid', latex: 'A = \\frac{b\\, h}{n + 1}, \\qquad \\bar{x} = \\frac{b}{n + 2} \\;(\\text{from vertical peak edge})' }
    ],
    variables: [
      { symbol: 'A_m', meaning: 'Mean area enclosed by the centerline of the thin closed tube wall' },
      { symbol: 't', meaning: 'Wall thickness at the point of shear evaluation' }
    ],
    flashcardPrompt: 'Give max flexural shear multipliers for rectangle (3/2), solid circle (4/3), and hollow circle (2), plus Closed-Tube Torsion τ & q and Spandrel A/x̄.',
    flashcardHint: 'Bredt torsion divides T by (2 t A_m); spandrel area is bh/(n+1) with centroid at b/(n+2) from the deep side.',
    difficulty: 'Medium'
  },

  // --- Theory of Structures Additions (Pages 10 - 19, 53) ---
  {
    id: 'psad_once_p10_3d_indeterminacy_impact_moment_area',
    area: 'PSAD',
    domain: 'Theory of Structures',
    topic: 'Degree of Indeterminacy & Conjugate Beam',
    examSubtopic: 'Structural Mechanics & Statics',
    title: '3D Structural Indeterminacy, Impact Load Factor, Double Integration & Moment-Area',
    pageRef: 10,
    latex: 'DI_{\\text{3D beam}} = R - 6 - S, \\quad DI_{\\text{3D truss}} = M + R - 3J, \\quad DI_{\\text{3D frame}} = 6M + R - (6J + S)',
    secondaryEquations: [
      { label: 'Dynamic Impact Deflection & Load Amplification Factor', latex: '\\delta_i = \\delta_{st}\\left(1 + \\sqrt{1 + \\frac{2 h}{\\delta_{st}}}\\right), \\qquad IF = 1 + \\sqrt{1 + \\frac{2 h}{\\delta_{st}}}' },
      { label: 'Double Integration & Moment-Area Theorems 1 & 2', latex: 'E I y\'\' = M(x), \\qquad \\theta_{B/A} = \\int_A^B \\frac{M}{EI}\\,dx, \\qquad t_{A/B} = \\int_A^B x\\,\\frac{M}{EI}\\,dx' }
    ],
    notes: [
      '3D Release counts S: Hinge = 1, Roller = 2, Slider = 1, Fixed = 0. Sudden drop h = 0 doubles static deflection (IF = 2).'
    ],
    flashcardPrompt: 'State the 3D Degree of Indeterminacy formulas (beams, trusses, frames), Impact Deflection δ_i for drop height h, and Moment-Area Theorems 1 & 2.',
    flashcardHint: '3D space has 6 equilibrium equations per joint/body (except 3 per truss ball-joint); θ_B/A = M/EI area and t_A/B = M/EI first moment about A.',
    difficulty: 'Hard'
  },
  {
    id: 'psad_once_p11_p15_moment_parts_integral_cantilever',
    area: 'PSAD',
    domain: 'Theory of Structures',
    topic: 'Moment-Area, Moment by Parts & Integral Deflections',
    examSubtopic: 'Structural Mechanics & Statics',
    title: 'Moment Diagram by Parts, Cantilever & Integral Deflection / 6Ax/L Equations',
    pageRef: 13,
    latex: '\\delta_{\\text{cant,UDL}} = \\frac{w L^4}{8 E I}, \\quad \\delta_{\\text{cant,tri}} = \\frac{w L^4}{30 E I}, \\quad \\delta_{\\text{simple,tri}} = \\frac{0.00652\\, w L^4}{E I}',
    secondaryEquations: [
      { label: 'Moment by Parts: n-th Degree Segment (0°, 1°, 2°, 3°)', latex: 'A = \\frac{L\\, h}{n + 1}, \\qquad \\bar{x}_{\\text{from peak}} = \\frac{L}{n + 2} \\;\\;\\left(h: M_0,\\; PL,\\; \\frac{wL^2}{2},\\; \\frac{wL^2}{6}\\right)' },
      { label: 'Integral 6Ax/L, Fixed-End Moments & Distributed Point-Load Deflection', latex: '\\frac{6 A\\bar{a}}{L} = \\int_{x_1}^{x_2} \\frac{w(x)\\, x(L^2 - x^2)}{L}\\,dx, \\quad FEM_{AB} = \\int_{x_1}^{x_2} \\frac{w(x)\\, x(L - x)^2}{L^2}\\,dx, \\quad \\delta = \\int \\frac{w(x)\\, a^2(3L - a)}{6 E I}\\,dx' }
    ],
    tables: [
      {
        title: 'Cantilever Free-End Rotation EIθ and Deflection EIδ',
        headers: ['Cantilever Load at Fixed L', 'Peak Moment', 'EI θ (Tip Slope)', 'EI δ (Tip Deflection)'],
        rows: [
          ['End Moment M', 'M', 'M L', 'M L² / 2'],
          ['Tip Point Load P', 'P L', 'P L² / 2', 'P L³ / 3'],
          ['Full UDL w', 'w L² / 2', 'w L³ / 6', 'w L⁴ / 8'],
          ['Triangular (Peak w at Fixed End)', 'w L² / 6', 'w L³ / 24', 'w L⁴ / 30']
        ]
      }
    ],
    flashcardPrompt: 'Give cantilever tip EIθ and EIδ for M, P, UDL, and Triangular loads, Moment-by-Parts area/centroid, plus Integral 6Aa/L and FEM_AB.',
    flashcardHint: 'For cantilever tip deflection: M→L²/2, P→L³/3, UDL→L⁴/8, Tri→L⁴/30.',
    difficulty: 'Hard'
  },
  {
    id: 'psad_once_p14_p19_deflection_mf_propped_midspan',
    area: 'PSAD',
    domain: 'Theory of Structures',
    topic: 'Fixed-End Moments & Propped Cantilevers',
    examSubtopic: 'Structural Mechanics & Statics',
    title: 'Midspan Deflection Multipliers (MF), Propped Reactions & Added Midspan Support Beams',
    pageRef: 14,
    latex: '\\delta_{\\text{mid}} = \\frac{5 w L^4}{384 E I}\\times MF, \\qquad \\delta_{\\text{any }x} = \\frac{P a b}{6 E I L}(L^2 - a^2 - b^2)',
    secondaryEquations: [
      { label: 'Added Center Support: Fixed-Fixed (2 Spans l = L/2)', latex: 'M_{\\text{supp}} = -\\frac{w l^2}{12}, \\qquad M_{\\max(+)} = \\frac{w l^2}{24}' },
      { label: 'Added Center Support: Simple Ends (2 Spans l = L/2)', latex: 'M_{\\text{mid}} = -\\frac{w l^2}{8}, \\qquad M_{\\max(+)} = \\frac{9 w l^2}{128}, \\qquad R_{\\text{end}} = \\frac{3}{8} w l, \\quad R_{\\text{mid}} = \\frac{5}{4} w l' }
    ],
    tables: [
      {
        title: 'Midspan Deflection Multiplier MF (vs 5wL⁴/384EI or PL³/48EI) & Propped Reactions',
        headers: ['Loading Case (Span L)', 'Simply Supported MF', 'Fixed-End MF', 'Propped Roller R'],
        rows: [
          ['Full UDL w', '1.00', '0.20', '3wL / 8'],
          ['Half-Span UDL (Left Half)', '0.50', '0.10', '11wL / 64 (loaded half at fixed)'],
          ['Full Triangular (0 to w)', '0.50', '0.10', 'wL / 10 (apex at roller) or 11wL / 40'],
          ['Symmetrical Triangular (Apex @ Mid)', '0.64', '0.14', '—'],
          ['Midspan Point Load P (vs PL³/48EI)', '1.00', '0.25', '5P / 16 (and R = 2P/3 @ third-pt)']
        ]
      }
    ],
    flashcardPrompt: 'State the Midspan Deflection Multipliers (MF) for Fixed-Ended vs Simply Supported beams, plus moments & reactions when a center support is added (l = L/2).',
    flashcardHint: 'Fixing both ends reduces UDL midspan deflection by 5× (MF = 0.20) and midspan point-load deflection by 4× (MF = 0.25).',
    difficulty: 'Hard'
  },
  {
    id: 'psad_once_p16_p18_il_trusses_cantilever_pattern',
    area: 'PSAD',
    domain: 'Theory of Structures',
    topic: 'Influence Lines & Moving Loads',
    examSubtopic: 'Structural Mechanics & Statics',
    title: 'Cantilever & Truss Influence Lines, 2-Axle Max Shear & Pattern Loadings (2–4 Spans)',
    pageRef: 17,
    latex: 'V_{\\max,\\text{2 axles}} = \\frac{P L - P_s d}{L} \\;\\;\\left(P = P_1 + P_2\\right), \\qquad M_{\\text{neg, 2-span}} = \\frac{w L^2}{8}\\;\\text{vs}\\;\\frac{w L^2}{16}',
    secondaryEquations: [
      { label: 'Cantilever & Girder-Floor Beam Panel Moment Influence', latex: 'IL_{R_A,\\text{cant}} = 1, \\quad IL_{M_A,\\text{cant}} = -x, \\qquad IL_{M_{\\text{panel}}} = \\frac{a b}{L}' }
    ],
    diagrams: [
      {
        src: '/assets/psad_formulas/p17_truss_influence_lines.jpg',
        caption: 'Influence lines for top chord, bottom chord, and diagonal truss members.',
        alt: 'Influence lines for truss chord and diagonal members'
      },
      {
        src: '/assets/psad_formulas/p18_pattern_3spans.jpg',
        caption: 'Continuous three-equal-span beam reactions, shears, and moments under live load patterns.',
        alt: 'Three equal span continuous beam pattern loadings'
      },
      {
        src: '/assets/psad_formulas/p18_pattern_4spans.jpg',
        caption: 'Continuous four-equal-span beam reactions, shears, and moments under live load patterns.',
        alt: 'Four equal span continuous beam pattern loadings'
      }
    ],
    flashcardPrompt: 'Write the 2-Axle Moving Load max shear V_max formula, cantilever reaction/moment ILs, truss chord IL peaks, and 2-span pattern loading M_neg.',
    flashcardHint: 'Place the heavier axle over the support so R_max = (RL − P_s d)/L; loading both adjacent spans maximizes interior negative moment (wL²/8).',
    difficulty: 'Medium'
  },
  {
    id: 'psad_once_p53_pert_cpm_scheduling',
    area: 'PSAD',
    domain: 'Theory of Structures',
    topic: 'Construction Scheduling (PERT-CPM)',
    examSubtopic: 'Structural Mechanics & Statics',
    title: 'Construction Network Scheduling: PERT-CPM Pass & Float Formulas',
    pageRef: 53,
    latex: 'TF = LS - ES = LF - EF, \\qquad FF = ES_{\\text{succ}} - EF_{\\text{act}}, \\qquad IF = TF - FF',
    secondaryEquations: [
      { label: 'Forward Pass, Backward Pass & Project Duration', latex: 'EF = ES + d, \\qquad LS = LF - d, \\qquad D_{\\text{project}} = \\sum d_{\\text{critical path}} \\;\\;(TF = 0)' }
    ],
    variables: [
      { symbol: 'ES, EF', meaning: 'Early Start & Early Finish (forward pass takes MAX of predecessors)' },
      { symbol: 'LS, LF', meaning: 'Late Start & Late Finish (backward pass takes MIN of successors)' },
      { symbol: 'TF, FF, IF', meaning: 'Total Float, Free Float, and Interfering Float' }
    ],
    flashcardPrompt: 'Write the PERT-CPM forward/backward pass formulas plus Total Float (TF), Free Float (FF), and Interfering Float (IF).',
    flashcardHint: 'Critical path activities have TF = 0; FF checks gap until earliest successor can start.',
    difficulty: 'Easy'
  },

  // --- Steel Design Additions (Pages 20 - 29) ---
  {
    id: 'psad_once_p20_p22_asd_steel_beams_columns',
    area: 'PSAD',
    domain: 'Steel & Prestressed Concrete',
    topic: 'ASD Steel Beams, Columns & Principal Axes',
    examSubtopic: 'Structural Steel & Timber Design',
    title: 'ASD Steel Beams (F_b Compactness & L/r_t) & Columns (C_c & F_a)',
    pageRef: 21,
    latex: 'C_c = \\sqrt{\\frac{2\\pi^2 E}{F_y}}, \\qquad F_{a,\\text{short}} = \\frac{\\left[1 - \\frac{(KL/r)^2}{2 C_c^2}\\right]F_y}{FS}, \\qquad F_{a,\\text{long}} = \\frac{12\\pi^2 E}{23(KL/r)^2}',
    secondaryEquations: [
      { label: 'ASD Column Factor of Safety & End Restraint k', latex: 'FS = \\frac{5}{3} + \\frac{3}{8}\\left(\\frac{KL/r}{C_c}\\right) - \\frac{1}{8}\\left(\\frac{KL/r}{C_c}\\right)^3, \\qquad k_{\\text{ideal}} = 0.5\\text{ (FF)},\\; 0.7\\text{ (FP)},\\; 1.0\\text{ (PP)},\\; 2.0\\text{ (Cant.)}' },
      { label: 'ASD Compact Bracing Limit L_c & Bending Coefficient C_b', latex: 'L_c = \\min\\!\\left(\\frac{200\\, b_f}{\\sqrt{F_y}},\\; \\frac{137\\,900}{F_y (d/A_f)}\\right), \\qquad C_b = 1.75 + 1.05\\left(\\frac{M_1}{M_2}\\right) + 0.3\\left(\\frac{M_1}{M_2}\\right)^2 \\le 2.3' },
      { label: 'Compactness Flange Thresholds & Partially Compact F_b', latex: 'F_b = 0.66 F_y\\;\\left(\\frac{b_f}{2t_f}\\sqrt{F_y} \\le 170\\right), \\quad F_b = \\left(0.79 - 0.000762\\frac{b_f}{2t_f}\\sqrt{F_y}\\right)F_y\\;\\left(170\\text{–}250\\right), \\quad 0.60 F_y\\;(>250)' },
      { label: 'Curvature, Radius of Gyration, Parallel Axis & Grade 350', latex: 'f_b = \\frac{E c}{\\rho}, \\quad r = \\sqrt{\\frac{I}{A}}, \\quad I_{NA} = I_{CG} + A d^2, \\quad \\text{Gr. 350: } F_y = 345\\text{–}350,\\; F_u = 414\\text{–}450\\text{ MPa}' }
    ],
    notes: [
      'Note: ASD NSCP/AISC column Factor of Safety starts at 5/3 (1.67) and rises to 23/12 (1.92) at KL/r = C_c.',
      'For laterally unsupported beams with L > L_c, evaluate L/r_t against √(703270 C_b/F_y) and √(3516330 C_b/F_y).'
    ],
    flashcardPrompt: 'State ASD column slenderness boundary C_c, short & long F_a formulas, Factor of Safety FS, ideal k values, and compact beam limits L_c & F_b.',
    flashcardHint: 'Use F_y(1 − (KL/r)²/2C_c²)/FS when KL/r < C_c; switch to 12π²E / [23(KL/r)²] for elastic buckling above C_c.',
    difficulty: 'Hard'
  },
  {
    id: 'psad_once_p23_principal_moi_mohr_cm',
    area: 'PSAD',
    domain: 'Steel & Prestressed Concrete',
    topic: 'ASD Steel Beams, Columns & Principal Axes',
    examSubtopic: 'Structural Steel & Timber Design',
    title: 'Unsymmetrical Section Principal MOI (Mohr’s Circle) & Column C_m Factor',
    pageRef: 23,
    latex: 'I_{\\max,\\min} = \\frac{I_x + I_y}{2} \\pm \\sqrt{\\left(\\frac{I_x - I_y}{2}\\right)^2 + I_{xy}^2}, \\qquad \\tan 2\\theta_p = -\\frac{2 I_{xy}}{I_x - I_y}',
    secondaryEquations: [
      { label: 'Product of Inertia & Mohr Radius', latex: 'I_{xy} = I_{xy,\\text{cg}} + \\sum A\\, \\bar{x}\\,\\bar{y}, \\qquad I_{xy,\\max} = \\sqrt{\\left(\\frac{I_x - I_y}{2}\\right)^2 + I_{xy}^2}' },
      { label: 'NSCP Interaction Moment Factor C_m', latex: 'C_m = 0.85\\;(\\text{unbraced sway}), \\quad C_m = 0.6 - 0.4\\frac{M_1}{M_2}\\;(\\text{braced, no trans. load}), \\quad C_m = 1.0\\;(\\text{trans. load})' }
    ],
    flashcardPrompt: 'Write the Principal Moments of Inertia I_max / I_min, principal angle tan 2θ_p, product of inertia I_xy, and the three C_m cases.',
    flashcardHint: 'Double-angle Mohr’s Circle rotation for principal axes satisfies tan 2θ_p = −2 I_xy / (I_x − I_y).',
    difficulty: 'Medium'
  },
  {
    id: 'psad_once_p25_p26_steel_baseplates_lrfd',
    area: 'PSAD',
    domain: 'Steel & Prestressed Concrete',
    topic: 'Base Plates, Block Shear & LRFD Design',
    examSubtopic: 'Structural Steel & Timber Design',
    title: 'Column Base Plates (Thornton λ, q), Net Area, Block Shear & LRFD Compression/Flexure',
    pageRef: 26,
    latex: 't_p = \\sqrt{\\frac{3 f_p L_b^2}{F_b}} \\;\\;(F_b = 0.75 F_y), \\qquad L_b = \\max\\!\\left(\\frac{N - 0.95d}{2},\\; \\frac{B - 0.80 b_f}{2},\\; \\lambda\\frac{\\sqrt{d b_f}}{4}\\right)',
    secondaryEquations: [
      { label: 'Thornton Base Plate Factor λ & q', latex: 'q = \\frac{4 d b_f}{(d + b_f)^2}\\frac{f_p}{F_p}, \\qquad \\lambda = 1.0\\;(q\\ge 0.64), \\quad \\lambda = \\frac{2(1 - \\sqrt{1 - q})}{\\sqrt{q}}\\;\\;(q < 0.64)' },
      { label: 'Staggered Net Area & Block Shear Rupture (φ = 0.75)', latex: 'A_n = A_g - A_{\\text{holes}} + \\sum \\frac{s^2 t}{4 g}, \\qquad R_n = 0.6 F_u A_{nv} + U_{bs} F_u A_{nt} \\le 0.6 F_y A_{gv} + U_{bs} F_u A_{nt}' },
      { label: 'LRFD Column Buckling F_cr & Slenderness Limits', latex: 'C_c = 4.71\\sqrt{\\frac{E}{F_y}}, \\quad F_{cr} = 0.658^{F_y/F_e} F_y\\;\\left(\\frac{KL}{r} \\le C_c\\right), \\quad F_{cr} = 0.877 F_e\\;\\left(\\frac{KL}{r} > C_c\\right)' },
      { label: 'LRFD Flexural & Shear Nominal Strengths', latex: '\\phi M_n = 0.90 F_y Z_x, \\qquad \\phi V_n = \\phi(0.6 F_y d t_w), \\qquad KL/r_{\\max} = 300\\text{ (tens.)} \\;/\\; 200\\text{ (comp.)}' }
    ],
    notes: [
      'Block shear tension factor U_bs = 1.0 for uniform tension stress (standard copes/angles) and 0.5 for non-uniform tension. A_gv / A_nv = gross/net shear areas; A_nt = net tension area.'
    ],
    flashcardPrompt: 'Write the Base Plate thickness t_p & Thornton λ/q formulas, Staggered Net Area s²t/(4g), Block Shear R_n, and LRFD Column F_cr equations.',
    flashcardHint: 'LRFD column transition occurs at KL/r = 4.71√(E/F_y) using 0.658^(F_y/F_e) F_y below and 0.877 F_e above.',
    difficulty: 'Hard'
  },
  {
    id: 'psad_once_p29_steel_plastic_analysis',
    area: 'PSAD',
    domain: 'Steel & Prestressed Concrete',
    topic: 'Plastic Analysis & Collapse Mechanisms',
    examSubtopic: 'Structural Steel & Timber Design',
    title: 'Steel Plastic Analysis: Plastic Modulus Z, M_p, Shape Factor & Virtual Collapse Work',
    pageRef: 29,
    latex: 'A_{\\text{top}} = A_{\\text{bot}} \\;(\\text{PNA}), \\qquad Z = \\sum |A_i\\, \\bar{y}_i|, \\qquad M_p = F_y Z, \\qquad SF = \\frac{Z}{S} = \\frac{M_p}{M_y}',
    secondaryEquations: [
      { label: 'Virtual Work Collapse Mechanism & Number of Plastic Hinges', latex: 'M_p \\sum \\theta_{PH} = \\sum P\\, y_i + w\\left(\\frac{1}{2} L\\, y_{\\max}\\right), \\qquad N_{\\text{hinges}} = DI + 1' },
      { label: 'Propped Cantilever Under UDL Critical Hinge Location', latex: 'x_{\\text{hinge}} = (2 - \\sqrt{2})L = 0.586\\, L \\;\\text{from fixed support}, \\qquad w_{\\text{collapse}} = \\frac{11.656\\, M_p}{L^2}' }
    ],
    flashcardPrompt: 'Explain how to locate the Plastic Neutral Axis (PNA), calculate Plastic Section Modulus Z, M_p, Shape Factor SF, N_hinges, and virtual collapse work.',
    flashcardHint: 'Equal-area axis locates PNA; Z sums |A·y| about PNA; N_hinges needed for mechanism collapse equals DI + 1.',
    difficulty: 'Medium'
  },

  // --- Reinforced Concrete Design Additions (Pages 30, 31, 39, 42-45, 50-51) ---
  {
    id: 'psad_once_p30_p31_concrete_props_cracking_wsd',
    area: 'PSAD',
    domain: 'Reinforced Concrete Design',
    topic: 'Concrete Properties, Cracking & WSD',
    examSubtopic: 'Reinforced Concrete & Prestressed Design',
    title: 'Concrete Modulus E_c, Modulus of Rupture f_r, Cracking M_cr & Working Stress Design (WSD)',
    pageRef: 31,
    latex: 'E_c = 4700\\sqrt{f_c\'}, \\quad f_r = 0.62\\lambda\\sqrt{f_c\'}, \\quad M_{cr} = \\frac{f_r I_g}{y_t}, \\quad f_c = \\frac{M y}{I}, \\quad \\frac{f_s}{n} = \\frac{M y}{I}',
    secondaryEquations: [
      { label: 'Lightweight E_c, Gergely-Lutz Crack Width Index & Curvature', latex: 'E_c = w_c^{1.5}(0.043)\\sqrt{f_c\'}, \\qquad C = f_s\\sqrt[3]{d_c A}, \\qquad \\theta_{cr} = \\frac{M_{cr}}{E_c I_g}' },
      { label: 'WSD Allowable Stresses & Compression Steel Transform', latex: 'f_{c,\\text{all}} = 0.45 f_c\', \\qquad f_{s,\\text{all}} = 0.50 f_y, \\qquad \\frac{f_s\'}{2n} = \\frac{M y}{I} \\;\\;\\left(A_{s,\\text{trans}}\' = (2n - 1)A_s\'\\right)' }
    ],
    diagrams: [
      {
        src: '/assets/psad_formulas/p31_wsd_beam_analysis.jpg',
        caption: 'Working Stress Design (WSD) transformed sections and linear stress blocks for uncracked and cracked SRB/DRB.',
        alt: 'Working Stress Design singly and doubly reinforced transformed section analysis'
      }
    ],
    notes: [
      'Note: Standard NSCP/ACI modulus of rupture is f_r = 0.62 λ√f_c’.',
      'Rebar yields: Grade 40 = 275 MPa (nominal 280), Grade 60 = 415 MPa (nominal 420). WSD compression steel uses (2n − 1)A_s’ (or 2nA_s’ if neglecting displaced concrete) to model creep.'
    ],
    flashcardPrompt: 'Write E_c, f_r, M_cr, and WSD transformed section rules (uncracked (n−1)A_s, cracked nA_s, compression steel (2n−1)A_s’) with allowable stresses 0.45 f_c’ & 0.5 f_y.',
    flashcardHint: 'Below N.A. concrete carries tension only if M < M_cr (uncracked); once cracked, concrete tension drops out leaving only n A_s.',
    difficulty: 'Medium'
  },
  {
    id: 'psad_once_p39_rcd_torsion',
    area: 'PSAD',
    domain: 'Reinforced Concrete Design',
    topic: 'Design for Torsion (NSCP / ACI)',
    examSubtopic: 'Reinforced Concrete & Prestressed Design',
    title: 'NSCP Reinforced Concrete Torsion: T_TH, T_CR, Combined Shear-Torsion & Longitudinal Steel',
    pageRef: 39,
    latex: 'T_{TH} = \\frac{\\lambda\\sqrt{f_c\'}}{12}\\left(\\frac{A_{cp}^2}{P_{cp}}\\right), \\quad T_{CR} = 4\\, T_{TH}, \\quad \\sqrt{\\left(\\frac{V_u}{b_w d}\\right)^2 + \\left(\\frac{T_u P_h}{1.7 A_{oh}^2}\\right)^2} \\le \\phi\\left(\\frac{V_c}{b_w d} + \\frac{2\\sqrt{f_c\'}}{3}\\right)',
    secondaryEquations: [
      { label: 'Closed Stirrup Torsion Requirement & Combined Transverse Steel', latex: 'A_o = 0.85\\, A_{oh}, \\qquad \\frac{A_t}{s} = \\frac{T_u}{2\\,\\phi A_o f_{yt}\\cot\\theta}, \\qquad \\frac{A_T}{s} = \\frac{A_v}{s} + \\frac{2 A_t}{s}, \\qquad s_{\\max} = \\min\\!\\left(\\frac{P_h}{8},\\; 300\\text{ mm}\\right)' },
      { label: 'Additional Longitudinal Torsion Steel A_L & A_L,min', latex: 'A_L = P_h\\left(\\frac{A_t}{s}\\right)\\left(\\frac{f_{yt}}{f_y}\\right)\\cot^2\\theta, \\qquad A_{L,\\min} = \\frac{5\\sqrt{f_c\'}\\, A_{cp}}{12 f_y} - \\left(\\frac{A_t}{s}\\right)P_h\\frac{f_{yt}}{f_y} \\;\\;\\left(\\text{w/ }\\frac{A_t}{s}\\ge 0.175\\frac{b_w}{f_{yt}}\\right)' }
    ],
    diagrams: [
      {
        src: '/assets/psad_formulas/p39_rcd_torsion_acp_ach.png',
        caption: 'Gross area A_cp / perimeter P_cp vs centerline closed-stirrup area A_oh / perimeter P_h.',
        alt: 'Concrete beam torsion geometry Acp Pcp Aoh Ph diagram'
      }
    ],
    notes: [
      'Neglect torsion whenever T_u < φ T_TH (φ = 0.75). Distribute A_L around the perimeter with at least 4 longitudinal bars (1 in each corner of closed stirrups).'
    ],
    flashcardPrompt: 'State Threshold Torsion T_TH, Cracking Torsion T_CR, combined Shear+Torsion adequacy check, A_t/s, combined A_T/s = A_v/s + 2A_t/s, s_max, and A_L.',
    flashcardHint: 'Double A_t/s when summing with shear A_v/s because torsion uses two closed stirrup legs; A_o = 0.85 A_oh and s_max ≤ min(P_h/8, 300 mm).',
    difficulty: 'Hard'
  },
  {
    id: 'psad_once_p42_p43_column_interaction_magnification',
    area: 'PSAD',
    domain: 'Reinforced Concrete Design',
    topic: 'Columns & Slenderness Effects',
    examSubtopic: 'Reinforced Concrete & Prestressed Design',
    title: 'Plastic Centroid, Column Interaction (K_n, R_n), Moment Magnification & Alignment Chart',
    pageRef: 42,
    latex: '\\delta_{ns} = \\frac{C_m}{1 - \\frac{P_u}{0.75\\, P_c}} \\ge 1.0, \\qquad M_c = \\delta_{ns} M_2, \\qquad M_{2,\\min} = P_u(15 + 0.03 h)\\;(\\text{mm})',
    secondaryEquations: [
      { label: 'Interaction Diagram Parameters & Plastic Centroid', latex: 'K_n = \\frac{P_n}{f_c\' A_g}, \\quad R_n = \\frac{P_n e}{f_c\' A_g h}, \\quad \\gamma = \\frac{h - 2 d\'}{h}, \\qquad \\bar{x}_{pc} = \\frac{\\sum F_i x_i}{\\sum F_i}' },
      { label: 'Slender Column Stiffness & Joint Factor ψ', latex: 'EI = \\frac{0.4\\, E_c I_g}{1 + \\beta_{dns}}, \\qquad \\psi = \\frac{\\sum (I / L)_{\\text{cols}}}{\\sum (I / L)_{\\text{beams}}}, \\qquad I_{\\text{col}} = 0.70 I_g,\\; I_{\\text{beam}} = 0.35 I_g,\\; I_{\\text{slab}} = 0.25 I_g' }
    ],
    diagrams: [
      {
        src: '/assets/psad_formulas/p17_effective_length_nomogram.jpg',
        caption: 'Jackson & Moreland Alignment Nomograms for Effective Length Factor k (Nonsway & Sway frames).',
        alt: 'Nonsway and sway frame effective length k alignment chart'
      }
    ],
    notes: [
      'For RC joint stiffness ψ: idealized fixed column base uses ψ = 1.0, hinged base uses ψ = 10. Radius of gyration r = 0.289h (rectangular, ≈ 0.30h in NSCP) and r = 0.25D (circular).'
    ],
    flashcardPrompt: 'Write non-sway moment magnifier δ_ns, minimum moment M_2,min, interaction parameters K_n / R_n / γ, and NSCP cracked stiffness reductions for cols/beams/slabs.',
    flashcardHint: 'Use 0.70 I_g for columns (and uncracked walls), 0.35 I_g for beams (and cracked walls), 0.25 I_g for slabs.',
    difficulty: 'Hard'
  },
  {
    id: 'psad_once_p44_p45_slabs_aci_coefficients',
    area: 'PSAD',
    domain: 'Reinforced Concrete Design',
    topic: 'Slabs & ACI Shear/Moment Coefficients',
    examSubtopic: 'Reinforced Concrete & Prestressed Design',
    title: 'One-Way / Two-Way Slabs & ACI Shear/Moment Coefficients',
    pageRef: 45,
    latex: 'M = C\\, w\\, l_n^2, \\qquad V = C\\, w\\, l_n, \\qquad l_{n,\\text{neg}} = \\frac{l_{n1} + l_{n2}}{2}',
    secondaryEquations: [
      { label: 'Minimum Beam/Slab Depth Limits (Grade 420 MPa)', latex: 'h_{\\min} = \\frac{L}{20}\\;(\\text{SS}),\\; \\frac{L}{24}\\;(\\text{1-end}),\\; \\frac{L}{28}\\;(\\text{2-ends}),\\; \\frac{L}{10}\\;(\\text{Cant.}) \\;\\;\\left(\\times\\left[0.4 + \\frac{f_y}{700}\\right]\\right)' },
      { label: 'Slab Load Path & Equivalent Uniform Trapezoid/Triangle Loads', latex: '\\text{One-Way if } \\frac{S}{L} < 0.5; \\qquad w_{\\text{tri}} = \\frac{q S}{3}, \\qquad w_{\\text{trap}} = \\frac{q S}{3}\\left(\\frac{3 - m^2}{2}\\right) \\;\\;\\left(m = \\frac{S}{L}\\right)' }
    ],
    diagrams: [
      {
        src: '/assets/psad_formulas/p45_aci_shear_moment_coeffs.jpg',
        caption: 'ACI/NSCP continuous beam & one-way slab Shear and Moment Coefficients for 2, 3, and 4 spans.',
        alt: 'ACI Shear and Moment Coefficients chart for 2, 3, and 4 spans'
      }
    ],
    notes: [
      'For lightweight concrete (unit weight 1440–1840 kg/m³), multiply minimum thickness by max(1.65 − 0.0003 w_c, 1.09). At exterior unrestrained support, positive end-span moment coeff becomes 1/11 and exterior face negative coeff = 1/24 (beam) or 1/16 (column).'
    ],
    flashcardPrompt: 'Give ACI moment & shear equations M = C w l_n², V = C w l_n, negative-moment l_n rule, slab min thickness divisors (20/24/28/10), and 1-way vs 2-way threshold.',
    flashcardHint: '1-way slab acts in short direction S/L < 0.5 (L/S ≥ 2); for 2-span interior negative moment coeff is 1/9, dropping to 1/10 (exterior) and 1/11 (interior) for 3+ spans.',
    difficulty: 'Medium'
  },
  {
    id: 'psad_once_p50_p51_pile_caps_retaining_wall',
    area: 'PSAD',
    domain: 'Reinforced Concrete Design',
    topic: 'Pile Caps & Retaining Walls',
    examSubtopic: 'Reinforced Concrete & Prestressed Design',
    title: 'Pile Cap Reaction Distribution, Critical Sections & Cantilever Retaining Wall Stem',
    pageRef: 50,
    latex: 'R_{\\text{pile}} = \\frac{P}{n} \\pm \\frac{M_x\\, y}{\\sum y^2} \\pm \\frac{M_y\\, x}{\\sum x^2}, \\qquad M_{u,\\text{wall stem}} = 1.6\\, F_s\\left(\\frac{H}{3}\\right)',
    secondaryEquations: [
      { label: 'Wide-Beam Shear & Nominal Flexure on Pile Caps', latex: 'V_u = R_{u,\\text{net}} \\times N_p, \\qquad v_n = \\frac{V_u}{\\phi\\, b_w d}, \\qquad M_u = R_{u,\\text{net}}(d - x)\\cdot N_p' },
      { label: 'Half-Pile Critical Section Interpolation & Punching Perimeter b_o', latex: 'R\'_{\\text{net}} = R\\left(\\frac{d/2 + x}{d}\\right) \\;\\;(\\text{pile dia. } d), \\qquad b_{o,\\text{circle}} = \\pi(D + d), \\qquad b_{o,\\text{rect}} = 2[(L+d)+(w+d)]' }
    ],
    diagrams: [
      {
        src: '/assets/psad_formulas/p50_pile_cap_critical_sections.jpg',
        caption: 'Critical sections for wide-beam shear, flexure, and punching shear (square, circular, rectangular) on pile caps.',
        alt: 'Pile cap critical sections for wide beam shear, flexure, and punching shear'
      }
    ],
    notes: [
      'A pile falling completely outside a critical shear plane contributes 100% R_u,net; completely inside contributes 0%; intersected within ±d/2 scales linearly between 0% and 100%.'
    ],
    flashcardPrompt: 'Write the eccentric pile group reaction R_pile, partial-pile shear interpolation factor, circular/rectangular punching perimeters b_o, and retaining wall stem moment M_u.',
    flashcardHint: 'Pile reaction follows eccentric footing P/n ± M_x y/Σy² ± M_y x/Σx²; circular column punching perimeter is π(D + d).',
    difficulty: 'Medium'
  }
];
