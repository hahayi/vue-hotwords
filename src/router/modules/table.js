/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/hotwords',
  component: Layout,
  redirect: '/hotwords/param',
  name: 'Table',
  meta: {
    title: '热词管理模块',
    icon: 'table'
  },
  children: [

    {
      path: 'words',
      component: () => import('@/views/hotwords/words'),
      name: 'InlineEditTable',
      meta: { title: 'inlineEditTable' }
    },
    {
      path: 'param',
      component: () => import('@/views/hotwords/param'),
      name: 'complexTable',
      meta: { title: 'complexTable' }
    }
  ]
}
export default tableRouter
