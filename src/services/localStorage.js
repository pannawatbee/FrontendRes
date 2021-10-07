import jwtDecode from 'jwt-decode'
const TOKEN_NAME='token' // เหมือนเป็น key
console.log(jwtDecode)
const getToken = ()=>localStorage.getItem(TOKEN_NAME)
const setToken = (token)=>localStorage.setItem(TOKEN_NAME,token)
const removeToken = () => localStorage.removeItem(TOKEN_NAME)
const user=(getToken()? jwtDecode(getToken()):null)
console.log(user)

export{getToken,setToken,removeToken,user}