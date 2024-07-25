import { isRangeAvailable, DateRange } from './index';

describe('isRangeAvailable', () => {
  it('devrait retourner vrai si la plage demandée est incluse dans la plage disponible', () => {
    const availableRange: DateRange = {startDate : new Date('2023-01-01'), endDate: new Date('2023-12-31')};
    const requestedRange: DateRange = {startDate : new Date('2023-05-01'), endDate: new Date('2023-05-31')};
    expect(isRangeAvailable(requestedRange, availableRange)).toBe(true);
  });

  it('devrait retourner faux si la plage demandée commence avant la plage disponible', () => {
    const availableRange : DateRange = {startDate : new Date('2023-01-01'), endDate: new Date('2023-12-31')};
    const requestedRange : DateRange = {startDate : new Date('2022-12-01'), endDate: new Date('2023-05-31')};
    expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
  });

  it('devrait retourner faux si la plage demandée se termine après la plage disponible', () => {
    const availableRange : DateRange = {startDate : new Date('2023-01-01'), endDate: new Date('2023-12-31')};
    const requestedRange : DateRange = {startDate : new Date('2023-11-01'), endDate: new Date('2024-01-31')};

    expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
  });

  it('devrait retourner faux si la plage demandée est complètement en dehors de la plage disponible', () => {
    const availableRange : DateRange = {startDate : new Date('2023-01-01'), endDate: new Date('2023-12-31')};
    const requestedRange : DateRange = {startDate : new Date('2022-01-01'), endDate: new Date('2022-12-31')};
    expect(isRangeAvailable(requestedRange, availableRange)).toBe(false);
  });

  it('devrait retourner vrai si la plage demandée correspond exactement à la plage disponible', () => {
    const availableRange : DateRange = {startDate : new Date('2023-01-01'), endDate: new Date('2023-12-31')};
    const requestedRange : DateRange = {startDate : new Date('2023-01-01'), endDate: new Date('2023-12-31')};
    expect(isRangeAvailable(requestedRange, availableRange)).toBe(true);
  });

});


