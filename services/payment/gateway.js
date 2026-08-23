export function createPayment(plan){

return {
provider:"gateway-ready",
plan,
status:"PENDING"
}

}