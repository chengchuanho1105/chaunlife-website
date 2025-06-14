export function isLoggedIn(): boolean {
  const token = localStorage.getItem('auth_token')
  return !!token && token.length > 0
}

export function login(token: string) {
  localStorage.setItem('auth_token', token)
}

export function logout() {
  localStorage.removeItem('auth_token')
}
