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
    // className: ClassNames;
     className?: string;
}

export type { PieChartProps };
