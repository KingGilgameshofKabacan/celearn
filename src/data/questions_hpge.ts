import { CEQuestion } from '../types';

export const HPGE_QUESTIONS: CEQuestion[] = [
  {
    id: 101,
    area: 'HPGE',
    subtopic: 'Soil Physical Properties & Phase Relationships',
    difficulty: 'Easy',
    question: 'The ratio of the weight of water in a soil mass to the weight of solid soil particles.',
    answer: 'MOISTURE / WATER CONTENT',
    choices: ['DEGREE OF SATURATION', 'VOID RATIO', 'POROSITY', 'MOISTURE / WATER CONTENT'],
    explanation: 'Water content (w) is expressed as a percentage: w = (Ww / Ws) × 100%.'
  },
  {
    id: 102,
    area: 'HPGE',
    subtopic: 'Soil Physical Properties & Phase Relationships',
    difficulty: 'Easy',
    question: 'The ratio of the volume of water to the total volume of voids in a soil sample.',
    answer: 'DEGREE OF SATURATION',
    choices: ['POROSITY', 'VOID RATIO', 'DEGREE OF SATURATION', 'AIR CONTENT'],
    explanation: 'Degree of saturation (S) ranges from 0% (dry soil) to 100% (fully saturated soil): S = Vw / Vv.'
  },
  {
    id: 103,
    area: 'HPGE',
    subtopic: 'Soil Physical Properties & Phase Relationships',
    difficulty: 'Easy',
    question: 'The ratio of the volume of voids to the total volume of the soil mass.',
    answer: 'POROSITY',
    choices: ['VOID RATIO', 'POROSITY', 'SPECIFIC GRAVITY', 'VOLUMETRIC STRAIN'],
    explanation: 'Porosity (n) is defined as n = Vv / V, and is related to void ratio by n = e / (1 + e).'
  },
  {
    id: 104,
    area: 'HPGE',
    subtopic: 'Soil Physical Properties & Phase Relationships',
    difficulty: 'Easy',
    question: 'The ratio of the volume of voids to the volume of solid soil particles.',
    answer: 'VOID RATIO',
    choices: ['POROSITY', 'VOID RATIO', 'SPECIFIC DENSITY', 'SATURATION RATIO'],
    explanation: 'Void ratio (e) is defined as e = Vv / Vs. Granular soils typically have e between 0.35 and 0.90.'
  },
  {
    id: 105,
    area: 'HPGE',
    subtopic: 'Soil Physical Properties & Phase Relationships',
    difficulty: 'Medium',
    question: 'Soil particles retained on a 75 mm (3-inch) sieve but passing a 300 mm sieve are classified as:',
    answer: 'COBBLES',
    choices: ['BOULDERS', 'COBBLES', 'GRAVEL', 'COARSE SAND'],
    explanation: 'Under USCS and AASHTO systems, particles > 300 mm are boulders; 75 mm to 300 mm are cobbles.'
  },
  {
    id: 106,
    area: 'HPGE',
    subtopic: 'Soil Physical Properties & Phase Relationships',
    difficulty: 'Easy',
    question: 'In civil and geotechnical engineering, soil is defined as:',
    answer: 'UNCEMENTED AGGREGATE',
    choices: ['CONSOLIDATED ROCK', 'UNCEMENTED AGGREGATE', 'HARDENED MINERAL MATRIX', 'WEATHERED SHALE'],
    explanation: 'Soil is an uncemented aggregate of mineral grains and decayed organic matter with liquid and gas in voids.'
  },
  {
    id: 107,
    area: 'HPGE',
    subtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    difficulty: 'Medium',
    question: 'Gradual increase in density of saturated cohesive soil resulting from slow expulsion of pore water from voids.',
    answer: 'CONSOLIDATION',
    choices: ['COMPACTION', 'CONSOLIDATION', 'DESICCATION', 'LIQUEFACTION'],
    explanation: 'Consolidation is time-dependent settlement driven by excess pore water dissipation under sustained surcharge.'
  },
  {
    id: 108,
    area: 'HPGE',
    subtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    difficulty: 'Hard',
    question: 'Phenomenon where saturated granular soils suddenly lose shear strength and behave as a viscous fluid during seismic shaking.',
    answer: 'LIQUEFACTION',
    choices: ['QUICK CLAY EFFECT', 'LIQUEFACTION', 'CYCLIC CREEP', 'SHEAR FAILURE'],
    explanation: 'Cyclic shear stresses generate high excess pore water pressure until effective stress drops to zero (σ\' = 0).'
  },
  {
    id: 109,
    area: 'HPGE',
    subtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    difficulty: 'Medium',
    question: 'According to Mohr-Coulomb theory, the shear strength of a soil increases directly with an increase in:',
    answer: 'EFFECTIVE NORMAL STRESS',
    choices: ['PORE WATER PRESSURE', 'VOID RATIO', 'EFFECTIVE NORMAL STRESS', 'WATER CONTENT'],
    explanation: "Coulomb's shear strength equation τ = c' + σ' tan(φ') shows strength rises linearly with effective normal stress."
  },
  {
    id: 110,
    area: 'HPGE',
    subtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    difficulty: 'Hard',
    question: 'A cohesive clay deposit is classified as "Soft" if its unconfined compressive strength qu in kPa falls between:',
    answer: '24 TO 48 kPa',
    choices: ['12 TO 24 kPa', '24 TO 48 kPa', '48 TO 96 kPa', '96 TO 192 kPa'],
    explanation: 'Soil consistency: Very soft (<24 kPa), Soft (24-48 kPa), Medium (48-96 kPa), Stiff (96-192 kPa).'
  },
  {
    id: 111,
    area: 'HPGE',
    subtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    difficulty: 'Medium',
    question: 'What occurs to the ultimate bearing capacity of a shallow foundation if the ground water table rises to ground level?',
    answer: 'BEARING CAPACITY DECREASES BY APPROXIMATELY 50%',
    choices: [
      'BEARING CAPACITY REMAINS UNCHANGED',
      'BEARING CAPACITY INCREASES SLIGHTLY',
      'BEARING CAPACITY DECREASES BY APPROXIMATELY 50%',
      'BEARING CAPACITY DROPS TO ZERO'
    ],
    explanation: 'Submerged unit weight (γ_sub ≈ γ_sat - γ_w) is roughly half of moist unit weight, halving soil resistance terms.'
  },
  {
    id: 112,
    area: 'HPGE',
    subtopic: 'Consolidation, Shear Strength & Bearing Capacity',
    difficulty: 'Medium',
    question: 'In Terzaghi’s bearing capacity formula (q_ult = c·Nc + q·Nq + 0.5·γ·B·Nγ), the factors Nc, Nq, and Nγ depend exclusively on:',
    answer: 'SOIL ANGLE OF INTERNAL FRICTION (φ)',
    choices: ['SOIL COHESION (c)', 'SOIL UNIT WEIGHT (γ)', 'SOIL ANGLE OF INTERNAL FRICTION (φ)', 'FOUNDATION DEPTH (Df)'],
    explanation: 'Bearing capacity factors are dimensionless mathematical functions strictly of the friction angle φ.'
  },
  {
    id: 113,
    area: 'HPGE',
    subtopic: 'Soil Classification, Compaction & Permeability',
    difficulty: 'Medium',
    question: 'Which geotechnical shear strength test is performed directly in-situ in the field rather than inside the laboratory?',
    answer: 'FIELD VANE SHEAR TEST',
    choices: ['TRIAXIAL COMPRESSION TEST', 'DIRECT SHEAR BOX TEST', 'FIELD VANE SHEAR TEST', 'UNCONFINED COMPRESSION TEST'],
    explanation: 'The ASTM D2573 Field Vane Shear test measures undrained shear strength (su) of sensitive soft clay in-place.'
  },
  {
    id: 114,
    area: 'HPGE',
    subtopic: 'Foundations, Retaining Walls & Slope Stability',
    difficulty: 'Hard',
    question: 'Downward drag force exerted on deep piles caused by consolidating soft clay settling faster than the pile itself.',
    answer: 'NEGATIVE SKIN FRICTION',
    choices: ['POSITIVE END BEARING', 'NEGATIVE SKIN FRICTION', 'LATERAL UPLIFT', 'SOCKET ADHESION'],
    explanation: 'Negative skin friction (downdrag) transfers extra downward load to the pile, reducing net allowable pile capacity.'
  },
  {
    id: 115,
    area: 'HPGE',
    subtopic: 'Foundations, Retaining Walls & Slope Stability',
    difficulty: 'Medium',
    question: 'A structural column driven or drilled deeply into weak soils to transfer structural loads to competent dense strata or rock.',
    answer: 'PILE FOUNDATION',
    choices: ['SPREAD FOOTING', 'MAT FOUNDATION', 'PILE FOUNDATION', 'GRADE BEAM'],
    explanation: 'Piles transmit superstructure loads through skin friction and end-bearing resistance to deeper competent layers.'
  },
  {
    id: 116,
    area: 'HPGE',
    subtopic: 'Soil Classification, Compaction & Permeability',
    difficulty: 'Easy',
    question: 'Process of mechanically packing soil particles together by rollers or tampers to expel air voids from the mass.',
    answer: 'COMPACTION',
    choices: ['CONSOLIDATION', 'COMPACTION', 'SURCHARGING', 'DESICCATION'],
    explanation: 'Compaction rapidly densifies soil by expelling air using mechanical work at optimal moisture content.'
  },
  {
    id: 117,
    area: 'HPGE',
    subtopic: 'Soil Classification, Compaction & Permeability',
    difficulty: 'Medium',
    question: 'Process of injecting fluid cementitious or chemical suspensions into porous soil or rock fissures to reduce permeability and increase strength.',
    answer: 'GROUTING',
    choices: ['GROUTING', 'DYNAMIC COMPACTION', 'DRAINAGE', 'SURCHARGING'],
    explanation: 'Permeation, compaction, or jet grouting solidifies ground formations and seals groundwater infiltration.'
  },
  {
    id: 118,
    area: 'HPGE',
    subtopic: 'Soil Classification, Compaction & Permeability',
    difficulty: 'Medium',
    question: 'Soil improvement technique involving insertion of a vibrating cylindrical probe accompanied by water jetting into sand.',
    answer: 'VIBROFLOTATION',
    choices: ['VIBROFLOTATION', 'SURCHARGING', 'BENCHING', 'SHORING'],
    explanation: 'Vibroflotation rearranges loose granular cohesionless sands into dense states using radial vibratory forces.'
  },
  {
    id: 119,
    area: 'HPGE',
    subtopic: 'Soil Classification, Compaction & Permeability',
    difficulty: 'Medium',
    question: 'Placing temporary heavy earth embankment loads on a compressible clay site to accelerate pre-consolidation settlement prior to construction.',
    answer: 'SURCHARGING',
    choices: ['SURCHARGING', 'DYNAMIC COMPACTION', 'TRIMMING', 'GROUTING'],
    explanation: 'Preloading or surcharging expels pore water early so post-construction residual settlements remain within tolerance.'
  },
  {
    id: 120,
    area: 'HPGE',
    subtopic: 'Foundations, Retaining Walls & Slope Stability',
    difficulty: 'Medium',
    question: 'According to NSCP 2015 Section 302.2.2, the steepness of permanent cut slopes shall not exceed:',
    answer: '1 VERTICAL TO 2 HORIZONTAL (1:2)',
    choices: ['1:1', '1:1.5', '1 VERTICAL TO 2 HORIZONTAL (1:2)', '1:3'],
    explanation: 'NSCP provisions state that permanent cut slopes shall not exceed 1:2 (50% slope) unless geotechnical report justifies steeper.'
  },
  {
    id: 121,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Easy',
    question: 'The weight per unit volume of a fluid at standard temperature and pressure.',
    answer: 'SPECIFIC WEIGHT (UNIT WEIGHT)',
    choices: ['MASS DENSITY', 'SPECIFIC GRAVITY', 'SPECIFIC WEIGHT (UNIT WEIGHT)', 'DYNAMIC VISCOSITY'],
    explanation: 'Specific weight (γ) is the product of mass density and gravitational acceleration: γ = ρ · g (9.81 kN/m³ for water).'
  },
  {
    id: 122,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Easy',
    question: 'A standard physical quantity that remains constant regardless of the planet or gravitational field it is situated in.',
    answer: 'MASS',
    choices: ['SPECIFIC WEIGHT', 'HYDROSTATIC FORCE', 'MASS', 'BUOYANT FORCE'],
    explanation: 'Mass is an invariant intrinsic measure of the quantity of matter, unlike weight which depends on local g.'
  },
  {
    id: 123,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Medium',
    question: 'One standard atmosphere of barometric pressure supports a column of water equivalent to approximately:',
    answer: '10.33 METERS',
    choices: ['7.60 METERS', '10.33 METERS', '14.7 METERS', '21.4 METERS'],
    explanation: 'Height h = P / γ_water = 101.325 kPa / 9.81 kN/m³ ≈ 10.33 m of pure water.'
  },
  {
    id: 124,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Medium',
    question: 'Standard atmospheric pressure in mmHg and the typical specific gravity of elemental mercury:',
    answer: '760 mmHg AND 13.56',
    choices: ['760 mmHg AND 13.56', '750 mmHg AND 12.80', '740 mmHg AND 13.60', '770 mmHg AND 14.10'],
    explanation: '1 atm corresponds to 760 mm of mercury (Torr), where mercury has a specific gravity of 13.56 at 20°C.'
  },
  {
    id: 125,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Medium',
    question: 'For a floating vessel to remain in stable equilibrium, its metacenter (M) must be located:',
    answer: 'ABOVE THE CENTER OF GRAVITY (G)',
    choices: [
      'BELOW THE CENTER OF GRAVITY (G)',
      'COINCIDENT WITH THE CENTER OF BUOYANCY',
      'ABOVE THE CENTER OF GRAVITY (G)',
      'AT THE WATERLINE LEVEL'
    ],
    explanation: 'When M is above G (metacentric height GM > 0), a righting couple acts to restore the floating body to upright position.'
  },
  {
    id: 126,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Medium',
    question: 'The metacentric height (GM) of a floating body represents the distance between:',
    answer: 'CENTER OF GRAVITY AND METACENTER',
    choices: [
      'CENTER OF BUOYANCY AND KEEL',
      'CENTER OF GRAVITY AND METACENTER',
      'WATERLINE AND CENTER OF BUOYANCY',
      'DECK LINE AND METACENTER'
    ],
    explanation: 'GM = MB - GB = (I / V_displaced) - GB, where positive GM signifies positive static stability.'
  },
  {
    id: 127,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Medium',
    question: 'When the metacenter of a floating hull lies below its center of gravity (GM < 0), the floating body is in:',
    answer: 'UNSTABLE EQUILIBRIUM',
    choices: ['STABLE EQUILIBRIUM', 'NEUTRAL EQUILIBRIUM', 'UNSTABLE EQUILIBRIUM', 'DYNAMIC EQUILIBRIUM'],
    explanation: 'If M lies below G, tilting induces an overturning couple that capsizes the floating vessel.'
  },
  {
    id: 128,
    area: 'HPGE',
    subtopic: 'Fluid Statics & Buoyancy',
    difficulty: 'Easy',
    question: 'Attractive force between liquid molecules at the free surface allowing insects to skate on water without sinking.',
    answer: 'SURFACE TENSION',
    choices: ['VISCOSITY', 'SURFACE TENSION', 'CAPILLARITY', 'ADHESION'],
    explanation: 'Surface tension arises from unbalanced inward cohesive forces acting on surface liquid molecules.'
  },
  {
    id: 129,
    area: 'HPGE',
    subtopic: 'Fluid Dynamics & Energy/Continuity',
    difficulty: 'Medium',
    question: 'Condition where the volumetric discharge Q at every cross-section along a conduit remains constant with respect to time.',
    answer: 'STEADY CONTINUOUS FLOW',
    choices: ['UNSTEADY FLOW', 'STEADY CONTINUOUS FLOW', 'LAMINAR EDDY FLOW', 'UNIFORM FLOW'],
    explanation: 'Steady flow satisfies ∂Q/∂t = 0, meaning velocity and flow properties at any fixed spatial point do not change with time.'
  },
  {
    id: 130,
    area: 'HPGE',
    subtopic: 'Fluid Dynamics & Energy/Continuity',
    difficulty: 'Easy',
    question: 'The Continuity Equation in fluid mechanics (A₁V₁ = A₂V₂) is fundamentally derived from the principle of:',
    answer: 'CONSERVATION OF MASS',
    choices: ['CONSERVATION OF ENERGY', 'CONSERVATION OF MASS', 'CONSERVATION OF MOMENTUM', "NEWTON'S THIRD LAW"],
    explanation: 'For incompressible fluids, mass inflow equals mass outflow through a control volume: ρ·A₁·V₁ = ρ·A₂·V₂.'
  },
  {
    id: 131,
    area: 'HPGE',
    subtopic: 'Fluid Dynamics & Energy/Continuity',
    difficulty: 'Easy',
    question: "Bernoulli's Energy Theorem along a streamline (P/γ + V²/2g + z = constant) is based directly upon:",
    answer: 'CONSERVATION OF ENERGY',
    choices: ['CONSERVATION OF MASS', 'CONSERVATION OF MOMENTUM', 'CONSERVATION OF ENERGY', 'SECOND LAW OF THERMODYNAMICS'],
    explanation: "Bernoulli's equation expresses mechanical energy conservation (pressure head + velocity head + elevation head)."
  },
  {
    id: 132,
    area: 'HPGE',
    subtopic: 'Fluid Dynamics & Energy/Continuity',
    difficulty: 'Medium',
    question: 'Fluid flow regime where adjacent fluid layers slide smoothly past one another without mixing or intersecting streamlines.',
    answer: 'LAMINAR FLOW',
    choices: ['TURBULENT FLOW', 'LAMINAR FLOW', 'CRITICAL FLOW', 'SUPERCRITICAL FLOW'],
    explanation: 'In pipe flow, Reynolds numbers Re < 2000 correspond to laminar flow dominated by viscous shear forces.'
  },
  {
    id: 133,
    area: 'HPGE',
    subtopic: 'Fluid Dynamics & Energy/Continuity',
    difficulty: 'Medium',
    question: 'Fluid flow characterized by erratic, chaotic particle trajectories, vortex generation, and intense transverse mixing.',
    answer: 'TURBULENT FLOW',
    choices: ['LAMINAR FLOW', 'TURBULENT FLOW', 'STEADY UNIFORM FLOW', 'CREEPING FLOW'],
    explanation: 'Turbulent flow occurs at higher Reynolds numbers (Re > 4000) where inertial forces overwhelm viscous damping.'
  },
  {
    id: 134,
    area: 'HPGE',
    subtopic: 'Hydrology, Coastal & Harbor Engineering',
    difficulty: 'Easy',
    question: 'The horizontal distance measured between two consecutive wave crests or two consecutive wave troughs.',
    answer: 'WAVELENGTH',
    choices: ['WAVE HEIGHT', 'WAVE PERIOD', 'WAVELENGTH', 'WAVE AMPLITUDE'],
    explanation: 'Wavelength (L) is the spatial length of a wave cycle, related to wave speed and period by L = C · T.'
  },
  {
    id: 135,
    area: 'HPGE',
    subtopic: 'Hydrology, Coastal & Harbor Engineering',
    difficulty: 'Easy',
    question: 'The vertical elevation distance between the highest crest of a wave and the lowest adjacent trough.',
    answer: 'WAVE HEIGHT',
    choices: ['WAVELENGTH', 'WAVE HEIGHT', 'WAVE AMPLITUDE', 'STORM SURGE'],
    explanation: 'Wave height (H) equals twice the wave amplitude for sinusoidal linear wave profiles.'
  },
  {
    id: 136,
    area: 'HPGE',
    subtopic: 'Hydrology, Coastal & Harbor Engineering',
    difficulty: 'Easy',
    question: 'The lowest point on the surface profile of an ocean wave cycle.',
    answer: 'TROUGH',
    choices: ['CREST', 'TROUGH', 'NODE', 'ANTINODE'],
    explanation: 'The trough is the valley point exhibiting maximum negative displacement from still water level.'
  },
  {
    id: 137,
    area: 'HPGE',
    subtopic: 'Hydrology, Coastal & Harbor Engineering',
    difficulty: 'Easy',
    question: 'The highest elevation point on the surface profile of an ocean wave cycle.',
    answer: 'CREST',
    choices: ['TROUGH', 'CREST', 'SHOAL', 'CROWN'],
    explanation: 'The wave crest represents the peak positive excursion above the mean undisturbed water level.'
  },
  {
    id: 138,
    area: 'HPGE',
    subtopic: 'Hydrology, Coastal & Harbor Engineering',
    difficulty: 'Medium',
    question: 'Tides occurring when solar and lunar gravitational pulls align at new moon and full moon, producing maximum tidal range.',
    answer: 'SPRING TIDES',
    choices: ['NEAP TIDES', 'SPRING TIDES', 'DIURNAL TIDES', 'SEMIDIURNAL TIDES'],
    explanation: 'Spring tides produce the highest high tides and lowest low tides due to syzygy alignment.'
  },
  {
    id: 139,
    area: 'HPGE',
    subtopic: 'Hydrology, Coastal & Harbor Engineering',
    difficulty: 'Hard',
    question: 'Standard coastal engineering reference datum used by the Philippine Ports Authority (PPA) for harbor hydrographic depths.',
    answer: 'MLLW (MEAN LOWER LOW WATER)',
    choices: ['MSL (MEAN SEA LEVEL)', 'MHW (MEAN HIGH WATER)', 'MLLW (MEAN LOWER LOW WATER)', 'LAT (LOWEST ASTRONOMICAL TIDE)'],
    explanation: 'Philippine nautical charts and harbor designs reference Mean Lower Low Water (MLLW) to ensure safe navigation.'
  },
  {
    id: 140,
    area: 'HPGE',
    subtopic: 'Hydrology, Coastal & Harbor Engineering',
    difficulty: 'Medium',
    question: 'A marine berthing structure projecting out from the shoreline, usually perpendicular to the coast, used for passenger and cargo access.',
    answer: 'PIER',
    choices: ['QUAY', 'WHARF', 'PIER', 'BREAKWATER'],
    explanation: 'Piers project perpendicularly or obliquely out into open water, providing berths on both lateral sides.'
  },
  {
    id: 141,
    area: 'HPGE',
    subtopic: 'Hydrology, Coastal & Harbor Engineering',
    difficulty: 'Medium',
    question: 'A continuous marine structure constructed parallel along the shoreline or riverbank for mooring vessels and cargo handling.',
    answer: 'WHARF OR QUAY',
    choices: ['PIER', 'JETTY', 'WHARF OR QUAY', 'GROIN'],
    explanation: 'Wharves (or quays) run parallel with the shoreline and are backed directly by land or fill.'
  },
  {
    id: 142,
    area: 'HPGE',
    subtopic: 'Hydrology, Coastal & Harbor Engineering',
    difficulty: 'Easy',
    question: 'A sheltered coastal body of water providing safe anchorage and protection for ships from stormy open ocean waves.',
    answer: 'HARBOR',
    choices: ['PORT', 'HARBOR', 'ESTUARY', 'MARINA'],
    explanation: 'A harbor is primarily a water haven providing wave protection, while a port includes commercial terminal facilities.'
  },
  {
    id: 143,
    area: 'HPGE',
    subtopic: 'Hydrology, Coastal & Harbor Engineering',
    difficulty: 'Medium',
    question: 'Tidal reliability percentage guaranteed safe for deep-draft ships based on International Waterway Congress standards:',
    answer: '98%',
    choices: ['90%', '95%', '98%', '99.5%'],
    explanation: 'International navigation waterway standards specify 98% tidal availability as design guarantee for vessel draft.'
  }
];
