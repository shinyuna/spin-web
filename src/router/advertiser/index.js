/** Header */
import AccountHeader from '@/components/header/AccountHeader'
import Header from '@/components/header/Header'
/** Content */
import AdvSignUp from '@/components/body/advertiser/SignUp'
import AdvManagement from '@/components/body/advertiser/Management'
import AdvMyInfo from '@/components/body/advertiser/MyInfo'
import AdvRegistration from '@/components/body/advertiser/Registration'
/** Nav */
import AdvNav from '@/components/nav/AdvNav'

export const advertiser = [
  {
    path: '/advertiser/adv_signup',
    name: 'AdvSignUp',
    components: {
      header: AccountHeader,
      default: AdvSignUp
    }
  },
  {
    path: '/advertiser/adv_campaign_management',
    name: 'AdvManagement',
    components: {
      header: Header,
      nav: AdvNav,
      default: AdvManagement
    }
  },
  {
    path: '/advertiser/adv_my_info',
    name: 'AdvMyInfo',
    components: {
      header: AdvHeader,
      nav: AdvNav,
      default: AdvMyInfo
    }
  },
  {
    path: '/advertiser/adv_campaign_registration',
    name: 'AdvRegistration',
    components: {
      header: AdvHeader,
      nav: AdvNav,
      default: AdvRegistration
    }
  }
]
