// 渡された数字の8%を返す, お金なので四捨五入、小数点はなし
export const TaxPrice = (totalprice: number) => {
  return Math.round(totalprice * 0.08);
};


export const TotalPriceWithTax = (totalprice: number) => {
  return totalprice + TaxPrice(totalprice);
}
