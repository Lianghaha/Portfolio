export const objAllTrue = (obj) => {
   for (let item in obj) if (!obj[item]) return false
   return true
}
