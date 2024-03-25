export default function calculateDaysDiff(pickupDate: Date, dropoffDate: Date) {
  return Number((((dropoffDate as any) - (pickupDate as any)) / 86400000).toPrecision(1));
}
