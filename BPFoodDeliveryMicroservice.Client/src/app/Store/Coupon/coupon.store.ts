import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals"
import { TCouponResponseItem } from "../../Screens/coupon-page/coupon.model"
import { pipe, switchMap, tap } from "rxjs"
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { CouponService } from "../../Screens/coupon-page/coupon.service";
import { computed, inject } from "@angular/core";
import { tapResponse } from "@ngrx/operators";

type CouponStore = {
    data: TCouponResponseItem[],
    loading: boolean,
    filter: { query: string, order: 'asc' | 'desc' }
}

const initialState: CouponStore = {
    data: [],
    loading: false,
    filter: { query: '', order: 'asc' }
}


export const CouponStore = signalStore(
    withState(initialState),
    withComputed((store) => ({
        count: computed(() => store.data.length),
    })),
    withMethods(
        ((store, service = inject(CouponService)) => ({
            getAll: rxMethod(
                pipe(
                    tap(() => patchState(store, { loading: true })),
                    switchMap(
                        () => service.getCoupons().pipe(
                            tapResponse(
                                {
                                    next: (response) => patchState(store, { data: response.result, loading: false }),
                                    error: () => patchState(store, { loading: false }),
                                }
                            )
                        )
                    )
                )
            ),
            delete: rxMethod<number>(
                pipe(
                    tap((id) => patchState(store, { loading: true })),
                    switchMap(
                        (id: number) => service.deleteCoupon(id).pipe(
                            tapResponse(
                                {
                                    next: (response) => patchState(store, { data: store.data().filter(c => c.id !== id), loading: false }),
                                    error: () => patchState(store, { loading: false }),
                                }
                            )
                        )
                    )
                )
            ),
            createCoupon: rxMethod<{ Code: string; MinAmount: number; Discount: number; }>(
                pipe(
                    tap(() => patchState(store, { loading: true })),
                    switchMap(
                        ({ Discount, Code, MinAmount }) => service.createCoupon({ Discount, Code, MinAmount }).pipe(
                            tapResponse(
                                {
                                    next: (response) => patchState(store, { data: [ response.result,...store.data()], loading: false }),
                                    error: () => patchState(store, { loading: false }),
                                }
                            )
                        )
                    )
                )
            ),
            editCoupon: rxMethod<{ Id:number,Code: string; MinAmount: number; Discount: number; }>(
                pipe(
                    tap(() => patchState(store, { loading: true })),
                    switchMap(
                        ({ Id,Discount, Code, MinAmount }) => service.editCoupon({ Id,Discount, Code, MinAmount }).pipe(
                            tapResponse(
                                {
                                    next: (response) => patchState(store, { data: store.data().map(item=>(item.id === Id ? response.result : item)), loading: false }),
                                    error: () => patchState(store, { loading: false }),
                                }
                            )
                        )
                    )
                )
            ),

        }))
    )
)

