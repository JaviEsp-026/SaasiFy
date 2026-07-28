import { ReactNode } from "react";

export interface KPICardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: ReactNode;
}
