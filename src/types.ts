export type Geo = {
  lat: string
  lng: string
}

export type Address = {
  street: string
  suite: string
  city: string
  zipCode: string
  geo: Geo
}

export type Company = {
  name: string
  catchPhrase: string
  bs: string
}

export type UserType = {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}