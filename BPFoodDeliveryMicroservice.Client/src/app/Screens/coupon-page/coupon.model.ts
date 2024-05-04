export interface TGenericResponse<T> {
    result:    T;
    message:   null;
    isSuccess: boolean;
}

export interface TCouponResponseItem {
    id:        number;
    code:      string;
    discount:  number;
    minAmount: number;
}
