import { differenceInDays, fromUnixTime } from "date-fns";

export const getDifferenceInDays = (date: number) => differenceInDays(new Date(), fromUnixTime(date));