import { CEFormula, CEArea } from '../types';

export const CE_FORMULAS_MASTER: CEFormula[] = [
  // ==========================================
  // PSAD: PRINCIPLES OF STRUCTURAL ANALYSIS & DESIGN
  // ==========================================
  {
    id: 'form_psad_01',
    name: 'Flexure Formula (Bending Stress)',
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Easy',
    formula: 'σ = (M · c) / I = M / S',
    latex: '\\sigma = \\frac{M \\cdot c}{I} = \\frac{M}{S}',
    variables: [
      { symbol: 'σ', name: 'Bending (flexural) stress', unit: 'MPa or N/mm²' },
      { symbol: 'M', name: 'Internal bending moment', unit: 'N·mm' },
      { symbol: 'c', name: 'Distance from neutral axis to extreme fiber', unit: 'mm' },
      { symbol: 'I', name: 'Moment of inertia about neutral axis', unit: 'mm⁴' },
      { symbol: 'S', name: 'Section modulus (S = I / c)', unit: 'mm³' }
    ],
    description: 'Calculates the normal stress induced at any fiber of a beam due to bending about its principal centroidal axis under pure flexure.',
    shortcutsAndTips: [
      'Shortcut for Rectangular section (b × h): S = (b · h²) / 6; σ_max = 6M / (b · h²). Memorize 6M/bd² directly!',
      'Watch out for unit consistency: Always convert M from kN·m to N·mm by multiplying by 10⁶.',
      'Symmetric sections: Top and bottom extreme fibers experience equal maximum stresses (+σ_t tension and -σ_c compression).'
    ],
    choices: [
      'σ = (M · c) / I',
      'σ = (V · Q) / (I · b)',
      'σ = (P / A) ± (M · c) / I',
      'σ = (T · r) / J'
    ],
    correctChoice: 'σ = (M · c) / I'
  },
  {
    id: 'form_psad_02',
    name: 'Transverse Beam Shear Stress',
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Medium',
    formula: 'τ = (V · Q) / (I · b)',
    latex: '\\tau = \\frac{V \\cdot Q}{I \\cdot b}',
    variables: [
      { symbol: 'τ', name: 'Shear stress at specified level', unit: 'MPa' },
      { symbol: 'V', name: 'Internal shear force', unit: 'N' },
      { symbol: 'Q', name: "First moment of area above the level about N.A. (Q = A' · ȳ')", unit: 'mm³' },
      { symbol: 'I', name: 'Total moment of inertia about neutral axis', unit: 'mm⁴' },
      { symbol: 'b', name: 'Width of cross-section at the cut level', unit: 'mm' }
    ],
    description: 'Calculates the longitudinal and vertical transverse shear stress distribution across a beam section subjected to transverse shear forces.',
    shortcutsAndTips: [
      'Board Shortcut for Rectangles: Maximum shear stress occurs at N.A.: τ_max = 1.5 · (V / A) = 3V / (2bd).',
      'Board Shortcut for Solid Circles: τ_max = (4/3) · (V / A) at neutral axis.',
      'For I-Beams / Wide Flanges (W-shapes): The web carries roughly 90-95% of total shear. Average web shear τ_avg ≈ V / (d · t_w).'
    ],
    choices: [
      'τ = (V · Q) / (I · b)',
      'τ = (M · y) / I',
      'τ = 2V / (3A)',
      'τ = (T · ρ) / J'
    ],
    correctChoice: 'τ = (V · Q) / (I · b)'
  },
  {
    id: 'form_psad_03',
    name: "Euler's Critical Buckling Load for Columns",
    area: 'PSAD',
    subtopic: 'Structural Steel & Timber Design',
    difficulty: 'Medium',
    formula: 'P_cr = (π² · E · I) / (k · L)²',
    latex: 'P_{cr} = \\frac{\\pi^2 E I}{(k L)^2}, \\quad \\sigma_{cr} = \\frac{\\pi^2 E}{\\left(\\frac{k L}{r}\\right)^2}',
    variables: [
      { symbol: 'P_cr', name: 'Critical buckling load', unit: 'N' },
      { symbol: 'E', name: 'Modulus of elasticity of material', unit: 'MPa' },
      { symbol: 'I', name: 'Minimum moment of inertia (weak axis)', unit: 'mm⁴' },
      { symbol: 'L', name: 'Actual unsupported length of column', unit: 'mm' },
      { symbol: 'k', name: 'Effective length factor based on end restraints', unit: 'dimensionless' }
    ],
    description: 'Calculates the maximum axial compressive force a slender elastic column can endure before buckling sideways.',
    shortcutsAndTips: [
      'Board Exam k-factor values: Pinned-Pinned = 1.0; Fixed-Fixed = 0.5; Fixed-Pinned = 0.7; Fixed-Free (Flagpole) = 2.0.',
      'Always calculate I about the WEAK axis (minimum radius of gyration r_min), because columns always buckle in the weakest direction unless braced.',
      'Critical Buckling Stress: σ_cr = P_cr / A = π²E / (kL / r)², where (kL/r) is the slenderness ratio.'
    ],
    choices: [
      'P_cr = (π² · E · I) / (k · L)²',
      'P_cr = (π · E · I) / (2 · k · L)',
      'P_cr = (4π² · E · I) / L²',
      'P_cr = (π² · G · J) / L²'
    ],
    correctChoice: 'P_cr = (π² · E · I) / (k · L)²'
  },
  {
    id: 'form_psad_04',
    name: 'NSCP 2015 Singly Reinforced Concrete Beam Nominal Moment',
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Hard',
    formula: "M_n = A_s · f_y · (d - a/2) = ρ · f_y · b · d² · (1 - 0.59 · ρ · f_y / f'_c)",
    latex: 'M_n = A_s f_y \\left(d - \\frac{a}{2}\\right) = \\rho f_y b d^2 \\left(1 - 0.59 \\frac{\\rho f_y}{f\'_c}\\right)',
    variables: [
      { symbol: 'M_n', name: 'Nominal moment capacity', unit: 'N·mm' },
      { symbol: 'A_s', name: 'Area of tension reinforcement', unit: 'mm²' },
      { symbol: 'f_y', name: 'Yield strength of steel', unit: 'MPa' },
      { symbol: 'd', name: 'Effective depth to centroid of tension steel', unit: 'mm' },
      { symbol: 'a', name: "Depth of Whitney stress block: a = (A_s · f_y) / (0.85 · f'_c · b)", unit: 'mm' },
      { symbol: 'b', name: 'Width of compression face', unit: 'mm' },
      { symbol: 'ρ', name: 'Tension reinforcement ratio: ρ = A_s / (b · d)', unit: 'dimensionless' }
    ],
    description: 'Calculates the ultimate flexural strength of a singly reinforced rectangular concrete section based on the equivalent rectangular Whitney stress block.',
    shortcutsAndTips: [
      "Relationship between depth of N.A. (c) and stress block (a): a = β₁ · c. For f'_c ≤ 28 MPa, β₁ = 0.85.",
      "Reduction factor for β₁: For f'_c > 28 MPa, subtract 0.05 for every 7 MPa excess, but β₁ cannot be less than 0.65.",
      'Design strength: M_u ≤ φ · M_n, where φ = 0.90 for tension-controlled sections (ε_t ≥ 0.005).'
    ],
    choices: [
      'M_n = A_s · f_y · (d - a/2)',
      "M_n = 0.85 · f'_c · b · d²",
      'M_n = A_s · f_y · d',
      "M_n = ρ · b · d² · f'_c"
    ],
    correctChoice: 'M_n = A_s · f_y · (d - a/2)'
  },
  {
    id: 'form_psad_05',
    name: 'NSCP 2015 Concrete Shear Capacity & Stirrup Spacing',
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    formula: "V_c = 0.17 · λ · √(f'_c) · b_w · d ; s = (A_v · f_yt · d) / V_s",
    latex: 'V_c = 0.17 \\lambda \\sqrt{f\'_c} \\, b_w d, \\quad s = \\frac{A_v f_{yt} d}{V_s}',
    variables: [
      { symbol: 'V_c', name: 'Nominal concrete shear strength', unit: 'N' },
      { symbol: 'V_s', name: 'Nominal shear carried by stirrups: V_s = (V_u / φ) - V_c', unit: 'N' },
      { symbol: 'λ', name: 'Lightweight concrete modification factor (1.0 for normal weight)', unit: 'dimensionless' },
      { symbol: 'b_w', name: 'Web width of member', unit: 'mm' },
      { symbol: 'd', name: 'Effective depth', unit: 'mm' },
      { symbol: 'A_v', name: 'Total area of shear reinforcement within spacing s (2 legs for U-stirrup)', unit: 'mm²' },
      { symbol: 's', name: 'Center-to-center spacing of stirrups', unit: 'mm' }
    ],
    description: 'Provisions for computing the shear resistance of concrete and sizing vertical stirrup spacing to prevent diagonal tension failures.',
    shortcutsAndTips: [
      'Board Shortcut: For a 2-legged 10mm stirrup, A_v = 2 × (π/4 × 10²) = 157.08 mm².',
      'Critical section for shear is taken at distance "d" from the face of the support.',
      "Maximum spacing rules: If V_s ≤ 0.33√(f'_c) b_w d, s_max = min(d/2, 600 mm). If V_s > 0.33√(f'_c) b_w d, s_max = min(d/4, 300 mm)."
    ],
    choices: [
      "V_c = 0.17 · λ · √(f'_c) · b_w · d ; s = (A_v · f_yt · d) / V_s",
      "V_c = 0.53 · √(f'_c) · b_w · d ; s = (A_v · f_yt) / (b_w · d)",
      "V_c = 0.33 · √(f'_c) · b_w · d ; s = (V_s · d) / (A_v · f_yt)",
      "V_c = 0.083 · √(f'_c) · b_w · d ; s = A_v / (0.35 · b_w)"
    ],
    correctChoice: "V_c = 0.17 · λ · √(f'_c) · b_w · d ; s = (A_v · f_yt · d) / V_s"
  },
  {
    id: 'form_psad_06',
    name: 'Torsion Formula (Shaft Shear & Angle of Twist)',
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Medium',
    formula: 'τ_max = (T · r) / J ; θ = (T · L) / (J · G)',
    latex: '\\tau_{\\max} = \\frac{T \\cdot r}{J} = \\frac{16T}{\\pi d^3}, \\quad \\theta = \\frac{T \\cdot L}{J \\cdot G}',
    variables: [
      { symbol: 'τ_max', name: 'Maximum torsional shear stress at surface', unit: 'MPa' },
      { symbol: 'T', name: 'Applied torque or twisting moment', unit: 'N·mm' },
      { symbol: 'r', name: 'Outer radius of shaft (d / 2)', unit: 'mm' },
      { symbol: 'J', name: 'Polar moment of inertia: J = (π · d⁴) / 32 for solid circular shaft', unit: 'mm⁴' },
      { symbol: 'θ', name: 'Angle of twist', unit: 'radians' },
      { symbol: 'G', name: 'Shear modulus (modulus of rigidity)', unit: 'MPa' },
      { symbol: 'L', name: 'Length of shaft', unit: 'mm' }
    ],
    description: 'Governs elastic stress and rotational displacement for circular solid and hollow shafts subjected to pure twisting moments.',
    shortcutsAndTips: [
      'Solid circular shaft shortcut: τ_max = 16T / (π · d³). Very frequently asked on CE board exams!',
      'Hollow circular shaft shortcut: J = π(D⁴ - d⁴)/32; τ_max = 16TD / [π(D⁴ - d⁴)].',
      'Always convert θ from radians to degrees by multiplying by (180 / π) if requested.'
    ],
    choices: [
      'τ_max = (T · r) / J ; θ = (T · L) / (J · G)',
      'τ_max = (T · J) / r ; θ = (T · G) / (J · L)',
      'τ_max = 32T / (π · d³) ; θ = (T · L) / (E · I)',
      'τ_max = (M · c) / I ; θ = M / (E · I)'
    ],
    correctChoice: 'τ_max = (T · r) / J ; θ = (T · L) / (J · G)'
  },
  {
    id: 'form_psad_07',
    name: 'NSCP 2015 Column Axial Load Capacity (Tied & Spiral)',
    area: 'PSAD',
    subtopic: 'Reinforced Concrete & Prestressed Design',
    difficulty: 'Medium',
    formula: "Tied: φP_n = 0.65 · 0.80 · [0.85 · f'_c · (A_g - A_st) + f_y · A_st] ; Spiral: φP_n = 0.75 · 0.85 · [0.85 · f'_c · (A_g - A_st) + f_y · A_st]",
    latex: '\\text{Tied: } \\phi P_n = 0.52 \\left[ 0.85 f\'_c(A_g - A_{st}) + f_y A_{st} \\right], \\quad \\text{Spiral: } \\phi P_n = 0.6375 \\left[ 0.85 f\'_c(A_g - A_{st}) + f_y A_{st} \\right]',
    variables: [
      { symbol: 'φP_n', name: 'Design axial load strength', unit: 'N' },
      { symbol: 'A_g', name: 'Gross area of column section', unit: 'mm²' },
      { symbol: 'A_st', name: 'Total longitudinal steel reinforcement area', unit: 'mm²' },
      { symbol: "f'_c", name: 'Specified compressive strength of concrete', unit: 'MPa' },
      { symbol: 'f_y', name: 'Yield strength of longitudinal steel', unit: 'MPa' }
    ],
    description: 'Equations for concentric compressive axial load capacity including unintended eccentricities factor (0.80 for tied, 0.85 for spiral) and reduction factor φ.',
    shortcutsAndTips: [
      'Tied Column: φ = 0.65, accidental eccentricity reduction = 0.80 -> Combined multiplier = 0.52.',
      'Spiral Column: φ = 0.75, accidental eccentricity reduction = 0.85 -> Combined multiplier = 0.6375.',
      "Spiral volumetric ratio: ρ_s ≥ 0.45 · (A_g / A_c - 1) · (f'_c / f_yt), where A_c is core diameter area."
    ],
    choices: [
      "Tied: φP_n = 0.65 · 0.80 · [0.85 · f'_c(A_g - A_st) + f_y · A_st]",
      "Tied: φP_n = 0.90 · [0.85 · f'_c · A_g + f_y · A_st]",
      "Tied: φP_n = 0.65 · [f'_c · A_g + 2 · f_y · A_st]",
      "Tied: φP_n = 0.85 · [0.85 · f'_c(A_g - A_st) + f_y · A_st]"
    ],
    correctChoice: "Tied: φP_n = 0.65 · 0.80 · [0.85 · f'_c(A_g - A_st) + f_y · A_st]"
  },
  {
    id: 'form_psad_08',
    name: 'Thin-Walled Pressure Vessels (Hoop & Longitudinal Stress)',
    area: 'PSAD',
    subtopic: 'Strength of Materials & Mechanics of Deformable Bodies',
    difficulty: 'Easy',
    formula: 'Cylinder: σ_t (hoop) = (p · D) / (2t) ; σ_L = (p · D) / (4t) ; Sphere: σ = (p · D) / (4t)',
    latex: '\\sigma_t = \\frac{p \\cdot D}{2t} \\quad (\\text{Hoop}), \\quad \\sigma_L = \\frac{p \\cdot D}{4t} \\quad (\\text{Longitudinal}), \\quad \\sigma_{\\text{sphere}} = \\frac{p \\cdot D}{4t}',
    variables: [
      { symbol: 'σ_t', name: 'Tangential / circumferential (hoop) stress', unit: 'MPa' },
      { symbol: 'σ_L', name: 'Longitudinal axial stress', unit: 'MPa' },
      { symbol: 'p', name: 'Internal gage pressure of fluid/gas', unit: 'MPa' },
      { symbol: 'D', name: 'Internal diameter (or 2r)', unit: 'mm' },
      { symbol: 't', name: 'Wall thickness (valid when t ≤ D / 20)', unit: 'mm' }
    ],
    description: 'Calculates the tensile bursting stresses along circumferential and longitudinal joints in thin-walled pipes, tanks, and pressure vessels.',
    shortcutsAndTips: [
      'Key ratio to remember: In cylindrical vessels, Hoop Stress is exactly TWICE the Longitudinal Stress: σ_hoop = 2 · σ_longitudinal.',
      'Cylinders always fail along a longitudinal seam first because hoop stress is double.',
      'For spherical vessels, stress in all directions is equal to (p · D) / (4t).'
    ],
    choices: [
      'σ_t = (p · D) / (2t) ; σ_L = (p · D) / (4t)',
      'σ_t = (p · D) / (4t) ; σ_L = (p · D) / (2t)',
      'σ_t = (2p · D) / t ; σ_L = (p · D) / t',
      'σ_t = (p · r) / (2t) ; σ_L = (p · r) / t'
    ],
    correctChoice: 'σ_t = (p · D) / (2t) ; σ_L = (p · D) / (4t)'
  },

  // ==========================================
  // HPGE: HYDRAULICS & GEOTECHNICAL ENGINEERING
  // ==========================================
  {
    id: 'form_hpge_01',
    name: "Manning's Equation for Open Channel Flow",
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Easy',
    formula: 'v = (1 / n) · R^(2/3) · S^(1/2) ; Q = (1 / n) · A · R^(2/3) · S^(1/2)',
    latex: 'v = \\frac{1}{n} R^{2/3} S^{1/2}, \\quad Q = \\frac{1}{n} A R^{2/3} S^{1/2}',
    variables: [
      { symbol: 'Q', name: 'Total volumetric discharge', unit: 'm³/s' },
      { symbol: 'v', name: 'Mean flow velocity', unit: 'm/s' },
      { symbol: 'n', name: "Manning's roughness coefficient", unit: 's/m^(1/3)' },
      { symbol: 'A', name: 'Cross-sectional flow area', unit: 'm²' },
      { symbol: 'R', name: 'Hydraulic radius: R = A / P', unit: 'm' },
      { symbol: 'P', name: 'Wetted perimeter', unit: 'm' },
      { symbol: 'S', name: 'Energy slope or bed channel slope', unit: 'm/m' }
    ],
    description: 'Empirical formula universally utilized for uniform steady flow in open channels, culverts, storm drains, and natural streams under gravity.',
    shortcutsAndTips: [
      'Most Economical Rectangular Section: b = 2y (width is twice the depth) and R = y / 2.',
      'Most Economical Trapezoidal Section: Half of a regular hexagon (side slope 60° to horizontal; z = 1/√3); R = y / 2.',
      'Calculator tip: Store (1/n) · S^(1/2) in memory [A] to quickly solve for depth y using Shift-Solve.'
    ],
    choices: [
      'v = (1 / n) · R^(2/3) · S^(1/2)',
      'v = (1 / n) · R^(1/2) · S^(2/3)',
      'v = C · √(R · S)',
      'v = (0.0826 · f · L · Q²) / D⁵'
    ],
    correctChoice: 'v = (1 / n) · R^(2/3) · S^(1/2)'
  },
  {
    id: 'form_hpge_02',
    name: 'Hydrostatic Force & Center of Pressure on Submerged Plane',
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Medium',
    formula: 'F = γ · h̄ · A ; y_p = ȳ + I_g / (A · ȳ)',
    latex: 'F = \\gamma \\bar{h} A, \\quad y_p = \\bar{y} + \\frac{I_g}{A \\bar{y}}',
    variables: [
      { symbol: 'F', name: 'Total hydrostatic force on surface', unit: 'kN' },
      { symbol: 'γ', name: 'Unit weight of liquid (9.81 kN/m³ for water)', unit: 'kN/m³' },
      { symbol: 'h̄', name: 'Vertical depth from liquid surface to centroid of area', unit: 'm' },
      { symbol: 'A', name: 'Area of submerged plane surface', unit: 'm²' },
      { symbol: 'y_p', name: 'Inclined distance along the plane to center of pressure', unit: 'm' },
      { symbol: 'ȳ', name: 'Inclined distance along the plane to centroid of area', unit: 'm' },
      { symbol: 'I_g', name: 'Moment of inertia of plane about centroidal axis', unit: 'm⁴' }
    ],
    description: 'Determines the total resultant liquid pressure force on gates, dams, and bulkheads, and the exact location of its line of action.',
    shortcutsAndTips: [
      'Vertical rectangular gate of height h with top edge at liquid surface: F = 0.5γh²b. The center of pressure is ALWAYS located at (2/3)h from surface!',
      'The center of pressure is ALWAYS below the centroid (eccentricity e = I_g / (A · ȳ)).',
      'For inclined plates at angle θ to horizontal: h̄ = ȳ · sin(θ).'
    ],
    choices: [
      'F = γ · h̄ · A ; y_p = ȳ + I_g / (A · ȳ)',
      'F = γ · ȳ · A ; y_p = ȳ - I_g / (A · ȳ)',
      'F = p · A ; y_p = ȳ / 2',
      'F = 0.5 · γ · h̄² · A ; y_p = 2/3 · h̄'
    ],
    correctChoice: 'F = γ · h̄ · A ; y_p = ȳ + I_g / (A · ȳ)'
  },
  {
    id: 'form_hpge_03',
    name: 'Darcy-Weisbach & Hazen-Williams Pipe Friction Loss',
    area: 'HPGE',
    subtopic: 'Open Channels, Weirs & Pipe Flow',
    difficulty: 'Medium',
    formula: 'Darcy: h_f = (f · L · v²) / (2 · g · D) = (0.0826 · f · L · Q²) / D⁵ ; Hazen: h_f = (10.67 · L · Q^1.852) / (C^1.852 · D^4.87)',
    latex: 'h_f = f \\frac{L}{D} \\frac{v^2}{2g} = \\frac{0.0826 f L Q^2}{D^5}, \\quad h_f = \\frac{10.67 L Q^{1.852}}{C^{1.852} D^{4.87}}',
    variables: [
      { symbol: 'h_f', name: 'Head loss due to pipe friction', unit: 'm' },
      { symbol: 'f', name: 'Darcy friction factor', unit: 'dimensionless' },
      { symbol: 'L', name: 'Length of pipe', unit: 'm' },
      { symbol: 'D', name: 'Internal pipe diameter', unit: 'm' },
      { symbol: 'v', name: 'Flow velocity', unit: 'm/s' },
      { symbol: 'Q', name: 'Discharge', unit: 'm³/s' },
      { symbol: 'C', name: 'Hazen-Williams roughness coefficient', unit: 'dimensionless' }
    ],
    description: 'Formulas for computing energy loss caused by fluid viscosity and boundary shear friction in pressurized circular closed conduits.',
    shortcutsAndTips: [
      'Direct SI Q-form for Darcy: h_f = 0.0826 · f · L · Q² / D⁵. Super fast for calculator entry!',
      'Direct SI Q-form for Hazen-Williams: h_f = 10.67 · L · Q^1.852 / (C^1.852 · D^4.87).',
      'Laminar Flow (Re < 2000): Friction factor f is independent of roughness: f = 64 / Re.'
    ],
    choices: [
      'h_f = (0.0826 · f · L · Q²) / D⁵',
      'h_f = (f · L · v) / (2 · g · D²)',
      'h_f = (10.67 · L · Q²) / (C² · D⁵)',
      'h_f = (v² / 2g) · (1 - D₁/D₂)'
    ],
    correctChoice: 'h_f = (0.0826 · f · L · Q²) / D⁵'
  },
  {
    id: 'form_hpge_04',
    name: 'Terzaghi Ultimate Bearing Capacity (Strip & Square Footings)',
    area: 'HPGE',
    subtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    difficulty: 'Hard',
    formula: 'Strip: q_ult = c · N_c + q · N_q + 0.5 · γ · B · N_γ ; Square: q_ult = 1.3 · c · N_c + q · N_q + 0.4 · γ · B · N_γ',
    latex: '\\text{Strip: } q_{ult} = c N_c + q N_q + 0.5 \\gamma B N_\\gamma, \\quad \\text{Square: } q_{ult} = 1.3 c N_c + q N_q + 0.4 \\gamma B N_\\gamma',
    variables: [
      { symbol: 'q_ult', name: 'Ultimate bearing capacity of soil', unit: 'kPa or kN/m²' },
      { symbol: 'c', name: 'Soil cohesion', unit: 'kPa' },
      { symbol: 'q', name: 'Effective surcharge pressure at footing base level (q = γ · D_f)', unit: 'kPa' },
      { symbol: 'γ', name: 'Unit weight of soil beneath footing base', unit: 'kN/m³' },
      { symbol: 'B', name: 'Width of footing', unit: 'm' },
      { symbol: 'N_c, N_q, N_γ', name: 'Terzaghi bearing capacity factors dependent on angle of shearing resistance φ', unit: 'dimensionless' }
    ],
    description: 'Predicts the ultimate compressive pressure that shallow foundations can transfer to subsoil before experiencing general shear failure.',
    shortcutsAndTips: [
      'Purely cohesive soil (clay under undrained conditions, φ = 0): N_c = 5.7, N_q = 1.0, N_γ = 0. Strip formula reduces to: q_ult = 5.7c + q.',
      'Circular footing factors: 1.3 · c · N_c + q · N_q + 0.3 · γ · B · N_γ.',
      'Allowable Bearing Capacity: q_allow = q_ult / FS (Standard Safety Factor FS is typically 3.0).'
    ],
    choices: [
      'Strip: q_ult = c · N_c + q · N_q + 0.5 · γ · B · N_γ',
      'Strip: q_ult = 1.3 · c · N_c + q · N_q + 0.4 · γ · B · N_γ',
      'Strip: q_ult = c · N_c + 0.5 · q · N_q + γ · B · N_γ',
      'Strip: q_ult = (c + q + γ · B) / FS'
    ],
    correctChoice: 'Strip: q_ult = c · N_c + q · N_q + 0.5 · γ · B · N_γ'
  },
  {
    id: 'form_hpge_05',
    name: 'Rankine Lateral Earth Pressure Coefficients (Active & Passive)',
    area: 'HPGE',
    subtopic: 'Foundations, Retaining Walls & Slope Stability',
    difficulty: 'Medium',
    formula: 'K_a = (1 - sin φ) / (1 + sin φ) = tan²(45° - φ/2) ; K_p = (1 + sin φ) / (1 - sin φ) = tan²(45° + φ/2)',
    latex: 'K_a = \\frac{1 - \\sin\\phi}{1 + \\sin\\phi} = \\tan^2(45^\\circ - \\phi/2), \\quad K_p = \\frac{1 + \\sin\\phi}{1 - \\sin\\phi} = \\tan^2(45^\\circ + \\phi/2)',
    variables: [
      { symbol: 'K_a', name: 'Active earth pressure coefficient', unit: 'dimensionless' },
      { symbol: 'K_p', name: 'Passive earth pressure coefficient', unit: 'dimensionless' },
      { symbol: 'φ', name: 'Angle of internal friction of backfill soil', unit: 'degrees' }
    ],
    description: 'Quantifies the horizontal pressure exerted on retaining walls when the wall moves away from (active) or pushes into (passive) the soil mass.',
    shortcutsAndTips: [
      'Golden Rule: Active and Passive coefficients are exact inverses of each other: K_p = 1 / K_a!',
      'Common Board angles: If φ = 30°, sin(30°) = 0.5 -> K_a = (1 - 0.5)/(1 + 0.5) = 1/3 = 0.333, and K_p = 3.0. Instantly solve without calculator!',
      'Total Active thrust on vertical wall of height H with horizontal backfill: P_a = 0.5 · K_a · γ · H² acting at H/3 from base.'
    ],
    choices: [
      'K_a = tan²(45° - φ/2) ; K_p = tan²(45° + φ/2)',
      'K_a = tan²(45° + φ/2) ; K_p = tan²(45° - φ/2)',
      'K_a = (1 + sin φ) / (1 - sin φ) ; K_p = 1 - sin φ',
      'K_a = cos²(φ) / (1 + sin φ)'
    ],
    correctChoice: 'K_a = tan²(45° - φ/2) ; K_p = tan²(45° + φ/2)'
  },
  {
    id: 'form_hpge_06',
    name: 'Soil Phase Relationship Essentials (Void Ratio, Porosity & Unit Weights)',
    area: 'HPGE',
    subtopic: 'Soil Physical Properties & Phase Relationships',
    difficulty: 'Easy',
    formula: 'G_s · w = S · e ; n = e / (1 + e) ; γ_sat = (G_s + e) · γ_w / (1 + e) ; γ_d = G_s · γ_w / (1 + e) = γ_t / (1 + w)',
    latex: 'G_s \\cdot w = S \\cdot e, \\quad n = \\frac{e}{1 + e}, \\quad \\gamma_{sat} = \\frac{(G_s + e)\\gamma_w}{1 + e}, \\quad \\gamma_d = \\frac{G_s \\gamma_w}{1 + e} = \\frac{\\gamma_t}{1 + w}',
    variables: [
      { symbol: 'G_s', name: 'Specific gravity of soil solids', unit: 'dimensionless' },
      { symbol: 'w', name: 'Moisture (water) content', unit: 'decimal or %' },
      { symbol: 'S', name: 'Degree of saturation (S = 1.0 or 100% when saturated)', unit: 'decimal or %' },
      { symbol: 'e', name: 'Void ratio: e = V_v / V_s', unit: 'dimensionless' },
      { symbol: 'n', name: 'Porosity: n = V_v / V_total', unit: 'dimensionless' },
      { symbol: 'γ_sat', name: 'Saturated unit weight', unit: 'kN/m³' },
      { symbol: 'γ_d', name: 'Dry unit weight', unit: 'kN/m³' },
      { symbol: 'γ_t', name: 'Total / moist unit weight', unit: 'kN/m³' }
    ],
    description: 'Fundamental volumetric and gravimetric equations relating the three phases of soil (solids, water, air).',
    shortcutsAndTips: [
      'Universal soil identity to memorize: "Gw = Se" (George Washington = Secret Service).',
      "Submerged (buoyant) unit weight: γ' = γ_sat - γ_w = (G_s - 1) · γ_w / (1 + e).",
      'Dry density shortcut: γ_d = γ_moist / (1 + w). Always divide by (1 + w), never multiply!'
    ],
    choices: [
      'G_s · w = S · e ; γ_sat = (G_s + e) · γ_w / (1 + e)',
      'G_s · S = w · e ; γ_sat = G_s · γ_w / (1 + w)',
      'e · n = G_s · w ; γ_d = γ_t · (1 + w)',
      'S · w = G_s · e ; n = e · (1 + e)'
    ],
    correctChoice: 'G_s · w = S · e ; γ_sat = (G_s + e) · γ_w / (1 + e)'
  },
  {
    id: 'form_hpge_07',
    name: '1-D Primary Consolidation Settlement',
    area: 'HPGE',
    subtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    difficulty: 'Hard',
    formula: "Normally Consolidated: S_c = [C_c · H / (1 + e_0)] · log₁₀[(σ'_0 + Δσ') / σ'_0]",
    latex: 'S_c = \\frac{C_c \\cdot H}{1 + e_0} \\log_{10}\\left( \\frac{\\sigma\'_0 + \\Delta\\sigma\'}{\\sigma\'_0} \\right)',
    variables: [
      { symbol: 'S_c', name: 'Primary consolidation settlement', unit: 'm or mm' },
      { symbol: 'C_c', name: 'Compression index: C_c = 0.009 · (LL - 10)', unit: 'dimensionless' },
      { symbol: 'H', name: 'Thickness of compressible clay layer', unit: 'm' },
      { symbol: 'e_0', name: 'Initial in-situ void ratio', unit: 'dimensionless' },
      { symbol: "σ'_0", name: 'Initial effective vertical overburden stress at mid-depth of clay layer', unit: 'kPa' },
      { symbol: "Δσ'", name: 'Increase in effective vertical stress at mid-depth due to foundation loading', unit: 'kPa' }
    ],
    description: 'Calculates the long-term vertical settlement of saturated fine-grained cohesive clay deposits under increased structural overburden.',
    shortcutsAndTips: [
      "Overconsolidated clay case (σ'_0 + Δσ' ≤ σ'_c): Use Swell Index C_s instead of C_c (C_s ≈ C_c / 5 to C_c / 10).",
      'Always evaluate stresses at the MID-DEPTH of the clay layer (H / 2).',
      'Terzaghi empirical formula for undisturbed clay: C_c = 0.009 · (LL - 10).'
    ],
    choices: [
      "S_c = [C_c · H / (1 + e_0)] · log₁₀[(σ'_0 + Δσ') / σ'_0]",
      "S_c = [C_c · H / e_0] · ln[(σ'_0 + Δσ') / σ'_0]",
      "S_c = (m_v · H · Δσ') / (1 + e_0)",
      "S_c = [C_s · H / (1 + e_0)] · log₁₀(σ'_0 / Δσ')"
    ],
    correctChoice: "S_c = [C_c · H / (1 + e_0)] · log₁₀[(σ'_0 + Δσ') / σ'_0]"
  },
  {
    id: 'form_hpge_08',
    name: "Darcy's Law for Seepage & Hydraulic Gradient",
    area: 'HPGE',
    subtopic: 'Soil Physical Properties & Phase Relationships',
    difficulty: 'Easy',
    formula: 'Q = k · i · A ; v = k · i ; v_s = v / n ; i = Δh / L',
    latex: 'Q = k \\cdot i \\cdot A, \\quad v = k \\cdot i, \\quad v_s = \\frac{v}{n}, \\quad i = \\frac{\\Delta h}{L}',
    variables: [
      { symbol: 'Q', name: 'Rate of flow / seepage discharge', unit: 'm³/s' },
      { symbol: 'k', name: 'Coefficient of permeability (hydraulic conductivity)', unit: 'm/s or cm/s' },
      { symbol: 'i', name: 'Hydraulic gradient (head loss per seepage length)', unit: 'm/m' },
      { symbol: 'A', name: 'Total cross-sectional area perpendicular to flow direction', unit: 'm²' },
      { symbol: 'v', name: 'Discharge velocity (apparent superficial velocity)', unit: 'm/s' },
      { symbol: 'v_s', name: 'Actual seepage velocity through pores', unit: 'm/s' },
      { symbol: 'n', name: 'Porosity of soil', unit: 'dimensionless' }
    ],
    description: 'Governs laminar groundwater flow and fluid seepage through saturated porous soil media.',
    shortcutsAndTips: [
      'Critical Hydraulic Gradient for Quick condition (boiling/liquefaction): i_cr = (G_s - 1) / (1 + e) = γ\' / γ_w ≈ 1.0.',
      'Seepage velocity is always higher than discharge velocity because flow only occurs through pore channels: v_s = v / n > v.',
      'Constant head permeability test: k = (Q · L) / (A · h · t).'
    ],
    choices: [
      'Q = k · i · A ; v_s = v / n',
      'Q = k · A / i ; v_s = v · n',
      'Q = k · i² · A ; v_s = v / (1 + e)',
      'Q = i · A / k ; v_s = v · e'
    ],
    correctChoice: 'Q = k · i · A ; v_s = v / n'
  },

  // ==========================================
  // MSTE: MATHEMATICS, SURVEYING & TRANSPORTATION
  // ==========================================
  {
    id: 'form_mste_01',
    name: 'Stopping Sight Distance (SSD)',
    area: 'MSTE',
    subtopic: 'Highway Geometric Design & Sight Distances',
    difficulty: 'Easy',
    formula: 'SSD = 0.278 · V · t + V² / [254 · (f ± G)]',
    latex: 'SSD = 0.278 V t + \\frac{V^2}{254 (f \\pm G)}',
    variables: [
      { symbol: 'SSD', name: 'Stopping sight distance', unit: 'm' },
      { symbol: 'V', name: 'Design vehicle speed', unit: 'km/h' },
      { symbol: 't', name: 'Brake reaction time (AASHTO standard: t = 2.5 seconds)', unit: 's' },
      { symbol: 'f', name: 'Coefficient of longitudinal friction (or deceleration a/g)', unit: 'dimensionless' },
      { symbol: 'G', name: 'Road longitudinal grade in decimal (e.g., +0.04 for +4% upgrade, -0.04 for downgrade)', unit: 'decimal' }
    ],
    description: 'AASHTO standard formula computing the minimum sight distance required along a roadway for a driver to come to a complete safe stop.',
    shortcutsAndTips: [
      'First term is perception-reaction distance: d_r = 0.278 · V · t. For t = 2.5s: d_r = 0.695 · V.',
      'Second term is braking distance: d_b = V² / [254 · (f ± G)].',
      'Sign rule: Use (+) for uphill grades (shorter stop) and (-) for downhill grades (longer stop).'
    ],
    choices: [
      'SSD = 0.278 · V · t + V² / [254 · (f ± G)]',
      'SSD = V · t + V² / (2 · g · f)',
      'SSD = 0.278 · V · t + V² / (127 · R)',
      'SSD = V · t / 3.6 + V² / (254 · f)'
    ],
    correctChoice: 'SSD = 0.278 · V · t + V² / [254 · (f ± G)]'
  },
  {
    id: 'form_mste_02',
    name: 'Simple Horizontal Curve Geometric Elements',
    area: 'MSTE',
    subtopic: 'Highway Geometric Design & Sight Distances',
    difficulty: 'Medium',
    formula: 'R = 1145.916 / D ; T = R · tan(I / 2) ; L_c = (π · R · I) / 180 ; E = R · [sec(I/2) - 1] ; M = R · [1 - cos(I/2)]',
    latex: 'R = \\frac{1145.916}{D}, \\quad T = R \\tan(I/2), \\quad L_c = \\frac{\\pi R I}{180^\\circ}, \\quad E = R\\left[\\sec(I/2) - 1\\right]',
    variables: [
      { symbol: 'R', name: 'Radius of curve', unit: 'm' },
      { symbol: 'D', name: 'Degree of curve (metric 20-meter arc definition)', unit: 'degrees' },
      { symbol: 'I', name: 'Intersection / deflection angle', unit: 'degrees' },
      { symbol: 'T', name: 'Tangent distance (PC to PI or PI to PT)', unit: 'm' },
      { symbol: 'L_c', name: 'Length of circular curve from PC to PT', unit: 'm' },
      { symbol: 'E', name: 'External distance from PI to midpoint of curve', unit: 'm' },
      { symbol: 'M', name: 'Middle ordinate from midpoint of long chord to midpoint of curve', unit: 'm' }
    ],
    description: 'Fundamental trigonometric relationships for laying out simple circular curves connecting two intersecting highway or railway tangents.',
    shortcutsAndTips: [
      'Philippine DPWH standard: 20-meter arc definition: R = 1145.916 / D (or 20 / [2 · sin(D/2)] for chord definition).',
      'Long Chord formula: C = 2 · R · sin(I / 2).',
      'Stationing: Station PC = Station PI - T ; Station PT = Station PC + L_c. NEVER add T to PI to get PT!'
    ],
    choices: [
      'R = 1145.916 / D ; T = R · tan(I / 2) ; L_c = (π · R · I) / 180',
      'R = 572.96 / D ; T = R · sin(I / 2) ; L_c = R · I',
      'R = 2000 / D ; T = R · cos(I / 2) ; L_c = 2 · π · R · I',
      'R = 1145.916 / D ; T = R · tan(I) ; L_c = (π · R · I) / 360'
    ],
    correctChoice: 'R = 1145.916 / D ; T = R · tan(I / 2) ; L_c = (π · R · I) / 180'
  },
  {
    id: 'form_mste_03',
    name: 'Earthwork Volumes (Prismoidal & End-Area Methods)',
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Medium',
    formula: 'End-Area: V_e = (L / 2) · (A₁ + A₂) ; Prismoidal: V_p = (L / 6) · (A₁ + 4 · A_m + A₂)',
    latex: 'V_e = \\frac{L}{2}(A_1 + A_2), \\quad V_p = \\frac{L}{6}(A_1 + 4A_m + A_2)',
    variables: [
      { symbol: 'V_e', name: 'Volume by Average End Area method', unit: 'm³' },
      { symbol: 'V_p', name: 'Volume by exact Prismoidal method', unit: 'm³' },
      { symbol: 'L', name: 'Perpendicular distance between end stations', unit: 'm' },
      { symbol: 'A₁, A₂', name: 'Cross-sectional cut/fill areas of adjacent cross sections', unit: 'm²' },
      { symbol: 'A_m', name: 'Area of middle cross section calculated from averaged linear dimensions (NOT (A₁+A₂)/2!)', unit: 'm²' }
    ],
    description: 'Standard methods for computing cut and fill excavation and embankment quantities along civil engineering route alignments.',
    shortcutsAndTips: [
      'Crucial Exam Trap: A_m is NOT the average of A₁ and A₂! A_m is calculated by averaging the dimensions (heights and widths) first, then computing area.',
      'Prismoidal Correction (C_p): V_p = V_e - C_p, where C_p = (L / 12) · (c₁ - c₂) · (w₁ - w₂).',
      'Average End Area V_e almost always overestimates volume compared to exact Prismoidal V_p.'
    ],
    choices: [
      'V_e = (L / 2) · (A₁ + A₂) ; V_p = (L / 6) · (A₁ + 4 · A_m + A₂)',
      'V_e = L · (A₁ + A₂) ; V_p = (L / 3) · (A₁ + A_m + A₂)',
      'V_e = (L / 4) · (A₁ + A₂) ; V_p = (L / 12) · (A₁ + 4 · A_m + A₂)',
      'V_e = (L / 2) · √(A₁ · A₂) ; V_p = (L / 3) · (A₁ + √(A₁ · A₂) + A₂)'
    ],
    correctChoice: 'V_e = (L / 2) · (A₁ + A₂) ; V_p = (L / 6) · (A₁ + 4 · A_m + A₂)'
  },
  {
    id: 'form_mste_04',
    name: 'Tape Distance Corrections (Temperature, Pull & Sag)',
    area: 'MSTE',
    subtopic: 'Surveying, Leveling & Errors',
    difficulty: 'Medium',
    formula: 'Temp: C_t = α · L · (T - T_0) ; Pull: C_p = [(P - P_0) · L] / (A · E) ; Sag: C_s = -(w² · L³) / (24 · P²) = -(W² · L) / (24 · P²)',
    latex: 'C_t = \\alpha L (T - T_0), \\quad C_p = \\frac{(P - P_0)L}{A E}, \\quad C_s = -\\frac{W^2 L}{24 P^2}',
    variables: [
      { symbol: 'C_t, C_p, C_s', name: 'Corrections per tape length', unit: 'm' },
      { symbol: 'α', name: 'Coefficient of thermal expansion of steel tape (1.16 × 10⁻⁵ / °C)', unit: '1/°C' },
      { symbol: 'T, T_0', name: 'Field temperature and standard calibration temperature (20°C)', unit: '°C' },
      { symbol: 'P, P_0', name: 'Applied pull tension and standard tension', unit: 'N or kg' },
      { symbol: 'w', name: 'Weight of tape per unit length', unit: 'N/m or kg/m' },
      { symbol: 'W', name: 'Total weight of unsupported tape between supports (W = w · L)', unit: 'N or kg' },
      { symbol: 'A, E', name: 'Cross-sectional area and elastic modulus of tape', unit: 'mm² and MPa' }
    ],
    description: 'Systematic error corrections applied to steel taping measurements to account for environmental variations and catenary sag.',
    shortcutsAndTips: [
      'SAG CORRECTION IS ALWAYS NEGATIVE! It makes the tape reading too long, so actual distance is shorter.',
      'Normal Tension P_n: The tension where pull correction exactly cancels sag correction: P_n = 0.204 · W · √(AE) / √(P_n - P_0).',
      'Rule of Thumb: Too long tape -> add correction; Too short tape -> subtract correction.'
    ],
    choices: [
      'C_t = α · L · (T - T_0) ; C_p = [(P - P_0) · L] / (A · E) ; C_s = -(W² · L) / (24 · P²)',
      'C_t = α · L · T ; C_p = (P · L) / (A · E) ; C_s = (W · L) / (12 · P)',
      'C_t = α · (T - T_0) / L ; C_p = [(P - P_0) · A · E] / L ; C_s = -(W² · L²) / (24 · P)',
      'C_t = α · L · (T_0 - T) ; C_p = [(P_0 - P) · L] / (A · E) ; C_s = (W² · L) / (24 · P²)'
    ],
    correctChoice: 'C_t = α · L · (T - T_0) ; C_p = [(P - P_0) · L] / (A · E) ; C_s = -(W² · L) / (24 · P²)'
  },
  {
    id: 'form_mste_05',
    name: 'Engineering Economy: Annuities & Capital Recovery Factor',
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Medium',
    formula: 'P = A · [1 - (1 + i)^(-n)] / i ; F = A · [(1 + i)^n - 1] / i ; A = P · [i · (1 + i)^n] / [(1 + i)^n - 1]',
    latex: 'P = A \\left[ \\frac{1 - (1 + i)^{-n}}{i} \\right], \\quad F = A \\left[ \\frac{(1 + i)^n - 1}{i} \\right], \\quad \\text{Perpetuity: } P = \\frac{A}{i}',
    variables: [
      { symbol: 'P', name: 'Present worth / value of ordinary uniform annuity', unit: 'PHP or USD' },
      { symbol: 'F', name: 'Future worth / compound amount of ordinary uniform annuity', unit: 'PHP or USD' },
      { symbol: 'A', name: 'Uniform periodic payment or annual equivalent cost (EUAC)', unit: 'PHP or USD' },
      { symbol: 'i', name: 'Interest rate per compounding period', unit: 'decimal' },
      { symbol: 'n', name: 'Total number of interest periods', unit: 'integer' }
    ],
    description: 'Fundamental compound interest formulas for project financing, loan amortization, cash flows, and equipment replacement evaluations.',
    shortcutsAndTips: [
      'Perpetuity (infinite annuity, n -> ∞): P = A / i. Exceptionally simple and frequently tested on the board!',
      'Capitalized Cost: CC = First Cost (FC) + Present Value of Perpetual Annual O&M (A / i) + Replacement Cost PV.',
      'Sinking Fund Factor is the inverse of the Uniform Series Compound Amount: A = F · [i / ((1+i)^n - 1)].'
    ],
    choices: [
      'P = A · [1 - (1 + i)^(-n)] / i ; F = A · [(1 + i)^n - 1] / i',
      'P = A / (1 + i)^n ; F = A · (1 + i)^n',
      'P = A · i / [1 - (1 + i)^n] ; F = A · [1 - (1 + i)^(-n)] / i',
      'P = A · n · (1 + i) ; F = A · n / (1 + i)'
    ],
    correctChoice: 'P = A · [1 - (1 + i)^(-n)] / i ; F = A · [(1 + i)^n - 1] / i'
  },
  {
    id: 'form_mste_06',
    name: 'Superelevation on Highway Curves',
    area: 'MSTE',
    subtopic: 'Highway Geometric Design & Sight Distances',
    difficulty: 'Easy',
    formula: 'e + f = V² / (127 · R)',
    latex: 'e + f = \\frac{V^2}{127 R}, \\quad R_{\\min} = \\frac{V^2}{127 (e_{\\max} + f_{\\max})}',
    variables: [
      { symbol: 'e', name: 'Superelevation rate (cross slope)', unit: 'm/m' },
      { symbol: 'f', name: 'Side friction factor', unit: 'dimensionless' },
      { symbol: 'V', name: 'Design speed', unit: 'km/h' },
      { symbol: 'R', name: 'Radius of horizontal curve', unit: 'm' }
    ],
    description: 'Balances centrifugal acceleration against gravitational component and tire side friction to prevent outward skidding or rollover on curves.',
    shortcutsAndTips: [
      '127 is the metric constant derived from g = 9.81 m/s² and (1 km/h = 1/3.6 m/s): 127 ≈ 3.6² × 9.81.',
      'Minimum curve radius for given e_max and f_max: R_min = V² / [127 · (e_max + f_max)].',
      'For zero side friction (f = 0, no passenger discomfort): e = V² / (127 · R).'
    ],
    choices: [
      'e + f = V² / (127 · R)',
      'e + f = V² / (254 · R)',
      'e + f = (127 · V²) / R',
      'e + f = V / (127 · R²)'
    ],
    correctChoice: 'e + f = V² / (127 · R)'
  },
  {
    id: 'form_mste_07',
    name: 'CPM / PERT Expected Activity Duration & Variance',
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Easy',
    formula: 't_e = (a + 4 · m + b) / 6 ; σ² = [(b - a) / 6]²',
    latex: 't_e = \\frac{a + 4m + b}{6}, \\quad \\sigma^2 = \\left( \\frac{b - a}{6} \\right)^2, \\quad \\sigma = \\frac{b - a}{6}',
    variables: [
      { symbol: 't_e', name: 'Expected activity duration (weighted average)', unit: 'days or weeks' },
      { symbol: 'a', name: 'Optimistic duration estimate (best case)', unit: 'days or weeks' },
      { symbol: 'm', name: 'Most likely duration estimate (modal value)', unit: 'days or weeks' },
      { symbol: 'b', name: 'Pessimistic duration estimate (worst case)', unit: 'days or weeks' },
      { symbol: 'σ²', name: 'Variance of activity duration', unit: 'days²' },
      { symbol: 'σ', name: 'Standard deviation: σ = (b - a) / 6', unit: 'days' }
    ],
    description: 'Beta distribution probability model used in PERT project network scheduling to evaluate probabilistic schedule completion dates.',
    shortcutsAndTips: [
      'Notice the weights: 1 for optimistic, 4 for most likely, 1 for pessimistic (total weight = 6).',
      'Project total variance along critical path is the SUM of variances of individual critical activities: σ_project² = Σ σ_critical².',
      'Z-score for target completion date T_d: Z = (T_d - T_e) / σ_project.'
    ],
    choices: [
      't_e = (a + 4 · m + b) / 6 ; σ = (b - a) / 6',
      't_e = (a + m + b) / 3 ; σ = (b - a) / 3',
      't_e = (a + 2 · m + b) / 4 ; σ = (b - a) / 4',
      't_e = (2 · a + 3 · m + b) / 6 ; σ = (b - a) / 2'
    ],
    correctChoice: 't_e = (a + 4 · m + b) / 6 ; σ = (b - a) / 6'
  },
  {
    id: 'form_mste_08',
    name: 'Depreciation Methods: Straight Line & Sum-of-the-Years-Digits (SYD)',
    area: 'MSTE',
    subtopic: 'Project Management, CPM/PERT & Equipment Economics',
    difficulty: 'Medium',
    formula: 'Straight Line: d = (C_0 - C_L) / n ; SYD: D_m = (C_0 - C_L) · [(n - m + 1) / Σ Y] ; Σ Y = n · (n + 1) / 2',
    latex: 'd = \\frac{C_0 - C_L}{n}, \\quad D_m = (C_0 - C_L) \\left[ \\frac{n - m + 1}{\\sum Y} \\right], \\quad \\sum Y = \\frac{n(n + 1)}{2}',
    variables: [
      { symbol: 'd', name: 'Annual straight line depreciation charge', unit: 'PHP or USD' },
      { symbol: 'D_m', name: 'Depreciation charge in specific year m under SYD', unit: 'PHP or USD' },
      { symbol: 'C_0', name: 'Initial original first cost of equipment', unit: 'PHP or USD' },
      { symbol: 'C_L', name: 'Salvage / scrap value at end of useful life', unit: 'PHP or USD' },
      { symbol: 'n', name: 'Total useful economic life in years', unit: 'years' },
      { symbol: 'm', name: 'Specific year number (1, 2, ..., n)', unit: 'years' },
      { symbol: 'Σ Y', name: 'Sum of the year digits: Σ Y = n(n + 1) / 2', unit: 'integer' }
    ],
    description: 'Accounting and asset valuation formulas for calculating the recovery of capital invested in construction equipment and physical assets.',
    shortcutsAndTips: [
      'Book Value at end of year m: BV_m = C_0 - Total Accumulated Depreciation up to year m.',
      'SYD is an accelerated depreciation method: higher deductions in earlier years, decreasing linearly.',
      'Straight Line assumption: Constant wear and tear; depreciation is identical each year.'
    ],
    choices: [
      'SL: d = (C_0 - C_L) / n ; SYD: D_m = (C_0 - C_L) · [(n - m + 1) / Σ Y]',
      'SL: d = C_0 / n ; SYD: D_m = C_0 · (n - m) / Σ Y',
      'SL: d = (C_0 + C_L) / n ; SYD: D_m = (C_0 - C_L) / m',
      'SL: d = (C_0 - C_L) · n ; SYD: D_m = (C_0 - C_L) · m / n'
    ],
    correctChoice: 'SL: d = (C_0 - C_L) / n ; SYD: D_m = (C_0 - C_L) · [(n - m + 1) / Σ Y]'
  }
];
