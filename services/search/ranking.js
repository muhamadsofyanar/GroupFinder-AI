export function ranking(group){
 return (group.qualityScore||0)
 +(group.verified?20:0)
 +(group.featured?30:0);
}