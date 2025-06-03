type PieChartProps = {
    data: {
        id: string, 
        value: number, 
        label: string
    }[];
    size: {
        width: number;
        height: number;
    };
     className?: string;
}

export type { PieChartProps };
