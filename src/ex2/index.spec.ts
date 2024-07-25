import { submitOrder, Order } from './index';
import * as emailModule from './lib/email';

jest.spyOn(emailModule, 'sendOrderEmail').mockImplementation(() => { });

describe('Tests de la fonction submitOrder', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('devrait soumettre la commande et définir isSubmitted à true', () => {
    const order: Order = { id: '123', isSubmitted: false };
    const result = submitOrder(order);

    expect(result.isSubmitted).toBe(true)
    expect(emailModule.sendOrderEmail).toHaveBeenCalledTimes(1);
    expect(emailModule.sendOrderEmail).toHaveBeenCalledWith('123');
  });

  it('devrait émettre une erreur si la commande est déjà soumise', () => {
    const order: Order = { id: '123', isSubmitted: true };

    expect(() => submitOrder(order)).toThrow('La commande a déjà été soumise');
    expect(emailModule.sendOrderEmail).not.toHaveBeenCalled();
  });

});
