import AccountHeader from '@/components/header/AccountHeader'

import AdvSignUp from '@/components/advertiser/SignUp'

export const advertiser = [{
  path: '/advertiser/adv_signup',
  name: 'AdvSignUp',
  components: {
    header: AccountHeader,
    default: AdvSignUp
  }
}]
