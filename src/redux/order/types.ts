export type Order = {
    id: number;
    submittedAt: string;
    variantIds: number[];
    customerName: string;
    total: number;
};
