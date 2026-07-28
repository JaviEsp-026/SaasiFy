import { ReactNode } from "react";

export default interface KPICardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: ReactNode;
  delay?: number;
}


