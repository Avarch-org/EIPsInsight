import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const MayCharts = React.lazy(() => import('./views/charts/mayCharts'))
const AprilCharts = React.lazy(() => import('./views/charts/aprilCharts'))
const MarchCharts = React.lazy(() => import('./views/charts/marchCharts'))
const FebCharts = React.lazy(() => import('./views/charts/febCharts'))
const JanCharts = React.lazy(() => import('./views/charts/janCharts'))
const DecCharts = React.lazy(() => import('./views/charts/decCharts'))
const NovCharts = React.lazy(() => import('./views/charts/novCharts'))
const OctCharts = React.lazy(() => import('./views/charts/octCharts'))
const SepCharts = React.lazy(() => import('./views/charts/sepCharts'))
const AugCharts = React.lazy(() => import('./views/charts/augCharts'))

const draftStatusChart = React.lazy(() => import('./views/charts/draftStatus'))
const finalStatusChart = React.lazy(() => import('./views/charts/finalStatus'))
const reviewStatusChart = React.lazy(() => import('./views/charts/reviewStatus'))
const lastCallStatusChart = React.lazy(() => import('./views/charts/lastCallStatus'))
const stagnantStatusChart = React.lazy(() => import('./views/charts/stagnantStatus'))
const withdrawnStatusChart = React.lazy(() => import('./views/charts/withdrawnStatus'))
const livingStatusChart = React.lazy(() => import('./views/charts/livingStatus'))

// Tables
const MayDraftTable = React.lazy(() => import('./views/tables/may/may.draft'))
const MayFinalTable = React.lazy(() => import('./views/tables/may/may.final'))
const MayReviewTable = React.lazy(() => import('./views/tables/may/may.review'))
const MayLastCallTable = React.lazy(() => import('./views/tables/may/may.last-call'))
const MayStagnantTable = React.lazy(() => import('./views/tables/may/may.stagnant'))
const MayWithdrawnTable = React.lazy(() => import('./views/tables/may/may.withdrawn'))

const AprilDraftTable = React.lazy(() => import('./views/tables/april/april.draft'))
const AprilFinalTable = React.lazy(() => import('./views/tables/april/april.final'))
const AprilReviewTable = React.lazy(() => import('./views/tables/april/april.review'))
const AprilLastCallTable = React.lazy(() => import('./views/tables/april/april.last-call'))
const AprilStagnantTable = React.lazy(() => import('./views/tables/april/april.stagnant'))
const AprilWithdrawnTable = React.lazy(() => import('./views/tables/april/april.withdrawn'))

const MarchDraftTable = React.lazy(() => import('./views/tables/march/march.draft'))
const MarchFinalTable = React.lazy(() => import('./views/tables/march/march.final'))
const MarchReviewTable = React.lazy(() => import('./views/tables/march/march.review'))
const MarchLastCallTable = React.lazy(() => import('./views/tables/march/march.last-call'))
const MarchStagnantTable = React.lazy(() => import('./views/tables/march/march.stagnant'))
const MarchWithdrawnTable = React.lazy(() => import('./views/tables/march/march.withdrawn'))

const FebDraftTable = React.lazy(() => import('./views/tables/feb/feb.draft'))
const FebFinalTable = React.lazy(() => import('./views/tables/feb/feb.final'))
const FebReviewTable = React.lazy(() => import('./views/tables/feb/feb.review'))
const FebLastCallTable = React.lazy(() => import('./views/tables/feb/feb.last-call'))
const FebStagnantTable = React.lazy(() => import('./views/tables/feb/feb.stagnant'))
const FebWithdrawnTable = React.lazy(() => import('./views/tables/feb/feb.withdrawn'))

const JanDraftTable = React.lazy(() => import('./views/tables/jan/jan.draft'))
const JanFinalTable = React.lazy(() => import('./views/tables/jan/jan.final'))
const JanReviewTable = React.lazy(() => import('./views/tables/jan/jan.review'))
const JanLastCallTable = React.lazy(() => import('./views/tables/jan/jan.last-call'))
const JanStagnantTable = React.lazy(() => import('./views/tables/jan/jan.stagnant'))
const JanWithdrawnTable = React.lazy(() => import('./views/tables/jan/jan.withdrawn'))

const statusAll = React.lazy(() => import('./views/tables/status/status.all'))
const typeAll = React.lazy(() => import('./views/tables/type/type.all'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

//ContactUs
const contactUs = React.lazy(() => import('./views/pages/contactUs'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/mayCharts', name: 'Charts', element: MayCharts },
  { path: '/aprilCharts', name: 'Charts', element: AprilCharts },
  { path: '/marchCharts', name: 'Charts', element: MarchCharts },
  { path: '/febCharts', name: 'Charts', element: FebCharts },
  { path: '/janCharts', name: 'Charts', element: JanCharts },
  { path: '/decCharts', name: 'Charts', element: DecCharts },
  { path: '/novCharts', name: 'Charts', element: NovCharts },
  { path: '/octCharts', name: 'Charts', element: OctCharts },
  { path: '/sepCharts', name: 'Charts', element: SepCharts },
  { path: '/augCharts', name: 'Charts', element: AugCharts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },

  { path: '/mayDraftTable', name: 'May Draft Table', element: MayDraftTable },
  { path: '/mayFinalTable', name: 'May Final Table', element: MayFinalTable },
  { path: '/mayReviewTable', name: 'May Final Table', element: MayReviewTable },
  { path: '/mayLastCallTable', name: 'May Final Table', element: MayLastCallTable },
  { path: '/mayStagnantTable', name: 'May Final Table', element: MayStagnantTable },
  { path: '/mayWithdrawnTable', name: 'May Final Table', element: MayWithdrawnTable },

  { path: '/aprilDraftTable', name: 'April Draft Table', element: AprilDraftTable },
  { path: '/aprilFinalTable', name: 'April Final Table', element: AprilFinalTable },
  { path: '/aprilReviewTable', name: 'April Final Table', element: AprilReviewTable },
  { path: '/aprilLastCallTable', name: 'April Final Table', element: AprilLastCallTable },
  { path: '/aprilStagnantTable', name: 'April Final Table', element: AprilStagnantTable },
  { path: '/aprilWithdrawnTable', name: 'April Final Table', element: AprilWithdrawnTable },

  { path: '/marchDraftTable', name: 'March Draft Table', element: MarchDraftTable },
  { path: '/marchFinalTable', name: 'March Final Table', element: MarchFinalTable },
  { path: '/marchReviewTable', name: 'March Final Table', element: MarchReviewTable },
  { path: '/marchLastCallTable', name: 'March Final Table', element: MarchLastCallTable },
  { path: '/marchStagnantTable', name: 'March Final Table', element: MarchStagnantTable },
  { path: '/marchWithdrawnTable', name: 'March Final Table', element: MarchWithdrawnTable },

  { path: '/febDraftTable', name: 'Feb Draft Table', element: FebDraftTable },
  { path: '/febFinalTable', name: 'Feb Final Table', element: FebFinalTable },
  { path: '/febReviewTable', name: 'Feb Final Table', element: FebReviewTable },
  { path: '/febLastCallTable', name: 'Feb Final Table', element: FebLastCallTable },
  { path: '/febStagnantTable', name: 'Feb Final Table', element: FebStagnantTable },
  { path: '/febWithdrawnTable', name: 'Feb Final Table', element: FebWithdrawnTable },

  { path: '/janDraftTable', name: 'Jan Draft Table', element: JanDraftTable },
  { path: '/janFinalTable', name: 'Jan Final Table', element: JanFinalTable },
  { path: '/janReviewTable', name: 'Jan Final Table', element: JanReviewTable },
  { path: '/janLastCallTable', name: 'Jan Final Table', element: JanLastCallTable },
  { path: '/janStagnantTable', name: 'Jan Final Table', element: JanStagnantTable },
  { path: '/janWithdrawnTable', name: 'Jan Final Table', element: JanWithdrawnTable },

  { path: '/statusAll', name: 'Status', element: statusAll },
  { path: '/typeAll', name: 'Type', element: typeAll },

  { path: '/contactUs', name: 'Contact Us', element: contactUs },

  { path: '/draftStatusChart', name: 'Draft status', element: draftStatusChart },
  { path: '/finalStatusChart', name: 'Final status', element: finalStatusChart },
  { path: '/reviewStatusChart', name: 'Review status', element: reviewStatusChart },
  { path: '/lastCallStatusChart', name: 'Review status', element: lastCallStatusChart },
  { path: '/stagnantStatusChart', name: 'Stagnant status', element: stagnantStatusChart },
  { path: '/withdrawnStatusChart', name: 'Withdrawn status', element: withdrawnStatusChart },
  { path: '/livingStatusChart', name: 'Living status', element: draftStatusChart },
]

export default routes
