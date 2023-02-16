import { atom } from 'recoil'

export const securityState = atom({
    key: 'securityState',
    default: false, // true = password check done right, false = wrong password
})
