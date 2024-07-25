export type DateRange = {
  startDate: Date;
  endDate: Date;
};

export function isRangeAvailable(
  requestedStart: Date, requestedEnd: Date, availableStart: Date, availableEnd: Date
): boolean {
  return requestedStart >= availableStart && requestedEnd <= availableEnd;
}
