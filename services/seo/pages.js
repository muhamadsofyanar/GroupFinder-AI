export function generatePages(groups){

return groups.map(group=>({
url:`/group/${group.slug}`,
title:group.name
}))

}