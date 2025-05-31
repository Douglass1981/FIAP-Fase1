import { PieChart as PieChartMui } from '@mui/x-charts/PieChart';
import type { PieChartProps } from './graphs.types';

export function PieChart({ data, ...props }: PieChartProps) {
    return (
        <PieChartMui series={[{ data, innerRadius: 80 }]} {...props} />
    )
}