/** Header */
import AccountHeader from '@/components/header/AccountHeader'
/** Content */
import SignIn from '@/components/body/common/SignIn'
/** footer */
import Footer from '@/components/footer/Footer'

export const common = [
  {
    path: '/common/signin',
    name: 'SignIn',
    components: {
      header: AccountHeader,
      default: SignIn,
      footer: Footer
    }
  }
]
