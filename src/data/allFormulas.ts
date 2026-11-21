import { CEArea, CEFormula, FormulaDomain } from '../types';
import {
  HPGE_FORMULAS,
  HPGE_FORMULA_DOMAINS,
  HPGE_FORMULA_TOPICS_BY_DOMAIN
} from './hpgeFormulas';
import {
  PSAD_FORMULAS,
  PSAD_FORMULA_DOMAINS,
  PSAD_FORMULA_TOPICS_BY_DOMAIN
} from './psadFormulas';
import {
  MSTE_FORMULAS,
  MSTE_FORMULA_DOMAINS,
  MSTE_FORMULA_TOPICS_BY_DOMAIN
} from './msteFormulas';

export type FormulaAreaFilter = 'ALL' | CEArea;

export const FORMULA_AREAS: CEArea[] = ['HPGE', 'PSAD', 'MSTE'];

export { MSTE_FORMULAS };

export const ALL_FORMULAS: CEFormula[] = [...HPGE_FORMULAS, ...PSAD_FORMULAS, ...MSTE_FORMULAS];

export const ALL_FORMULA_DOMAINS: FormulaDomain[] = [
  ...HPGE_FORMULA_DOMAINS,
  ...PSAD_FORMULA_DOMAINS,
  ...MSTE_FORMULA_DOMAINS
];

export const FORMULA_DOMAINS_BY_AREA: Record<FormulaAreaFilter, FormulaDomain[]> = {
  ALL: ALL_FORMULA_DOMAINS,
  HPGE: HPGE_FORMULA_DOMAINS,
  PSAD: PSAD_FORMULA_DOMAINS,
  MSTE: MSTE_FORMULA_DOMAINS
};

export const FORMULA_TOPICS_BY_DOMAIN: Record<FormulaDomain, string[]> = {
  ...HPGE_FORMULA_TOPICS_BY_DOMAIN,
  ...PSAD_FORMULA_TOPICS_BY_DOMAIN,
  ...MSTE_FORMULA_TOPICS_BY_DOMAIN
};

export const FORMULA_TOPICS_BY_AREA: Record<CEArea, { domain: FormulaDomain; topics: string[] }[]> = {
  HPGE: HPGE_FORMULA_DOMAINS.map(domain => ({
    domain,
    topics: HPGE_FORMULA_TOPICS_BY_DOMAIN[domain] || []
  })),
  PSAD: PSAD_FORMULA_DOMAINS.map(domain => ({
    domain,
    topics: PSAD_FORMULA_TOPICS_BY_DOMAIN[domain] || []
  })),
  MSTE: MSTE_FORMULA_DOMAINS.map(domain => ({
    domain,
    topics: MSTE_FORMULA_TOPICS_BY_DOMAIN[domain] || []
  }))
};
