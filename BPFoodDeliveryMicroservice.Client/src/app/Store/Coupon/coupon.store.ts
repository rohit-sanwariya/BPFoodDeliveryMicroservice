import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals"
import { TCouponResponseItem } from "../../Screens/coupon-page/coupon.model"
import {  pipe, switchMap, tap } from "rxjs"
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import { CouponService } from "../../Screens/coupon-page/coupon.service";
import { computed, inject } from "@angular/core";
import { tapResponse } from "@ngrx/operators";

type CouponStore = {
    data: TCouponResponseItem[],
    loading:boolean,
    filter:{query:string,order:'asc'|'desc'}
}

const initialState:CouponStore = {
    data:[],
    loading:false,
    filter:{query:'',order:'asc'}
}


export const  CouponStore =  signalStore(
    withState(initialState),
    withComputed((store)=>({
        count:computed(()=>store.data.length),
    })),
    withMethods(
        ((store,service = inject(CouponService))=>({
           getAll: rxMethod(
            pipe(
                tap(()=>patchState(store,{loading:true})),
                switchMap(
                    () => service.getCoupons().pipe(
                        tapResponse(
                            {
                                next:(response) => patchState(store,{data:response.result,loading:false}),
                                error:()=>patchState(store,{loading:false}),
                            }
                        )
                    )
                )
            )
           )
        }))
    )
)

 