import Cookies from 'js-cookie'

const Username = 'name'
const Userrole = 'role'

export function initToken () {
  Cookies.set(Username, '', { expires: 0.3 })
  Cookies.set(Userrole, '', { expires: 0.3 })
}

export function getName () {
  return Cookies.get(Username)
}
export function getRole () {
  return Cookies.get(Userrole)
}

export function setToken (name, role) {
  Cookies.set(Username, name, { expires: 0.3 })
  Cookies.set(Userrole, role, { expires: 0.3 })
}

export function removeToken () {
  Cookies.remove(Username)
  Cookies.remove(Userrole)
}
