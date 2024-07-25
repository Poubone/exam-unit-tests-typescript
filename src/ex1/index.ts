export type DateRange = {
  startDate: Date;
  endDate: Date;
};

export function isRangeAvailable( // comme j'ai eu des problèmes d'imports de DateRange, j'ai décidé de remplacer les objets par des paramètres simples afin de continuer 
  requestedStart: Date, requestedEnd: Date, availableStart: Date, availableEnd: Date
): boolean {
  return requestedStart >= availableStart && requestedEnd <= availableEnd;
}
