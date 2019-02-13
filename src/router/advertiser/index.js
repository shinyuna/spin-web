/** Header */
import AccountHeader from '@/components/header/AccountHeader'
import Header from '@/components/header/Header'
/** Content */
import AdvSignUp from '@/components/advertiser/SignUp'
import AdvCampaignManagement from '@/components/advertiser/AdvCampaignManagement'
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
    name: 'AdvCampaignManagement',
    components: {
      header: Header,
      nav: AdvNav,
      default: AdvCampaignManagement
    }
  }

]
