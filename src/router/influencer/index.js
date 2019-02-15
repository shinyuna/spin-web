/** Header */
import AccountHeader from '@/components/header/AccountHeader'
import Header from '@/components/header/Header'
/** Content */
import InfSignUp from '@/components/body/influencer/SignUp'
import InfManagement from '@/components/body/influencer/Management'
import InfMyInfo from '@/components/body/influencer/MyInfo'
import CampaignList from '@/components/body/influencer/CampaignList'
import CampaignDetail from '@/components/body/influencer/CampaignDetail'
import CampaignApply from '@/components/body/influencer/CampaignApply'
/** Nav */
import InfNav from '@/components/nav/InfNav'

export const influencer = [
  {
    path: '/influencer/Inf_signup',
    name: 'InfSignUp',
    components: {
      header: AccountHeader,
      default: InfSignUp
    }
  },
  {
    path: '/influencer/Inf_campaign_management',
    name: 'InfManagement',
    components: {
      header: Header,
      nav: InfNav,
      default: InfManagement
    }
  },
  {
    path: '/influencer/Inf_my_info',
    name: 'InfMyInfo',
    components: {
      header: Header,
      nav: InfNav,
      default: InfMyInfo
    }
  },
  {
    path: '/influencer/campaign_list',
    name: 'CampaignList',
    components: {
      header: Header,
      nav: InfNav,
      default: CampaignList
    }
  },
  {
    path: '/influencer/campaign_detail',
    name: 'CampaignDetail',
    components: {
      header: Header,
      default: CampaignDetail
    }
  },
  {
    path: '/influencer/campaign_apply',
    name: 'CampaignApply',
    components: {
      header: Header,
      default: CampaignApply
    }
  }
]
