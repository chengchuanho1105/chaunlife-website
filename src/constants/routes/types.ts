export type Brand = string

export type RouteMetaInfo = {
  path: string // route.name
  name: string // for use in nav UI
  title: {
    zh: string
    en?: string
  }
  showInNavbar?: boolean
  children?: RouteMetaInfo[]
}
