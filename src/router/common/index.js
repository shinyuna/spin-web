/** Header */
import AccountHeader from '@/components/header/AccountHeader'
import SignInHeader from '@/components/header/SignInHeader'
/** Content */
import SignIn from '@/components/common/SignIn'
import SignUpPopUp from '@/components/common/SignUpPopUp'

/** Footer */
import Footer from '@/components/common/Footer'

export const common = [
  {
    path: '/common/signin',
    name: 'SignIn',
    components: {
      header: SignInHeader,
      default: SignIn,
      footer: Footer
    }
  },
  {
    path: '/common/signup_popup',
    name: 'signUpPopUp',
    components: {
      header: AccountHeader,
      default: SignUpPopUp
    }
  }
]
