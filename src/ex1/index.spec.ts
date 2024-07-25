import { isRangeAvailable } from './index';

describe('isRangeAvailable', () => {
  it('devrait retourner vrai si la plage demandée est incluse dans la plage disponible', () => {
    const debutDisponible = new Date('2023-01-01');
    const finDisponible = new Date('2023-12-31');
    const debutDemandee = new Date('2023-05-01');
    const finDemandee = new Date('2023-05-31');
    expect(isRangeAvailable(debutDemandee, finDemandee, debutDisponible, finDisponible)).toBe(true);
  });

  it('devrait retourner faux si la plage demandée commence avant la plage disponible', () => {
    const debutDisponible = new Date('2023-01-01');
    const finDisponible = new Date('2023-12-31');
    const debutDemandee = new Date('2022-12-01');
    const finDemandee = new Date('2023-05-31');
    expect(isRangeAvailable(debutDemandee, finDemandee, debutDisponible, finDisponible)).toBe(false);
  });

  it('devrait retourner faux si la plage demandée se termine après la plage disponible', () => {
    const debutDisponible = new Date('2023-01-01');
    const finDisponible = new Date('2023-12-31');
    const debutDemandee = new Date('2023-11-01');
    const finDemandee = new Date('2024-01-31');
    expect(isRangeAvailable(debutDemandee, finDemandee, debutDisponible, finDisponible)).toBe(false);
  });

  it('devrait retourner faux si la plage demandée est complètement en dehors de la plage disponible', () => {
    const debutDisponible = new Date('2023-01-01');
    const finDisponible = new Date('2023-12-31');
    const debutDemandee = new Date('2022-01-01');
    const finDemandee = new Date('2022-12-31');
    expect(isRangeAvailable(debutDemandee, finDemandee, debutDisponible, finDisponible)).toBe(false);
  });

  it('devrait retourner vrai si la plage demandée correspond exactement à la plage disponible', () => {
    const debutDisponible = new Date('2023-01-01');
    const finDisponible = new Date('2023-12-31');
    const debutDemandee = new Date('2023-01-01');
    const finDemandee = new Date('2023-12-31');
    expect(isRangeAvailable(debutDemandee, finDemandee, debutDisponible, finDisponible)).toBe(true);
  });
  
});


