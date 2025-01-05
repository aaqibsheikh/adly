export interface CouponType {
  id: string;
  name: string;
  couponId:string;
  couponName:string;
  amount_off: number;
  percent_off: number;
  times_redeemed: number;
  max_redemptions: number;
  redeem_by: number;
  plans:{
  name:string
  }[]
}

export interface UpdateCouponType {
  id: string;
  name: string;
  stripeCoupon: {
    id: string;
    name: string;
    duration: string;
    amount_off: number;
    percent_off: number;
    times_redeemed: number;
    max_redemptions: number;
  };
}
