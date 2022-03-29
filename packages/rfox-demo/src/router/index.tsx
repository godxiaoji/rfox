import { Routes, Route } from 'react-router-dom'
import ExpButton from '../components/Basic/Button'
import ExpDrawer from '../components/Basic/Drawer'
import ExpDropdown from '../components/Basic/Dropdown'
import ExpIcon from '../components/Basic/Icon'
import ExpImage from '../components/Basic/Image'
import ExpModal from '../components/Basic/Modal'
import ExpPopover from '../components/Basic/Popover'
import ExpScrollView from '../components/Basic/ScrollView'
import ExpActionSheet from '../components/Feedback/ActionSheet'
import ExpDialog from '../components/Feedback/Dialog'
import ExpNotify from '../components/Feedback/Notify'
import ExpPopDialog from '../components/Feedback/PopDialog'
import ExpSwipeCell from '../components/Feedback/SwipeCell'
import ExpToast from '../components/Feedback/Toast'
import ExpCalendar from '../components/Form/Calendar'
import ExpCalendarPopup from '../components/Form/CalendarPopup'
import ExpCalendarView from '../components/Form/CalendarView'
import ExpCascader from '../components/Form/Cascader'
import ExpCascaderPopup from '../components/Form/CascaderPopup'
import ExpCascaderView from '../components/Form/CascaderView'
import ExpCheckbox from '../components/Form/Checkbox'
import ExpDatePicker from '../components/Form/DatePicker'
import ExpDatePickerPopup from '../components/Form/DatePickerPopup'
import ExpDatePickerView from '../components/Form/DatePickerView'
import ExpForm from '../components/Form/Form'
import ExpImageUploader from '../components/Form/ImageUploader'
import ExpInput from '../components/Form/Input'
import ExpNumberKeyboard from '../components/Form/NumberKeyboard'
import ExpPicker from '../components/Form/Picker'
import ExpPickerPopup from '../components/Form/PickerPopup'
import ExpPickerView from '../components/Form/PickerView'
import ExpRadio from '../components/Form/Radio'
import ExpRange from '../components/Form/Range'
import ExpRate from '../components/Form/Rate'
import ExpSearchBar from '../components/Form/SearchBar'
import ExpSlider from '../components/Form/Slider'
import ExpStepper from '../components/Form/Stepper'
import ExpSwitch from '../components/Form/Switch'
import ExpBackTop from '../components/Navigation/BackTop'
import ExpFixed from '../components/Navigation/Fixed'
import ExpIndexView from '../components/Navigation/IndexView'
import ExpNavBar from '../components/Navigation/NavBar'
import ExpPagination from '../components/Navigation/Pagination'
import ExpPopMenu from '../components/Navigation/PopMenu'
import ExpScrollTab from '../components/Navigation/ScrollTab'
import ExpSideTab from '../components/Navigation/SideTab'
import ExpSticky from '../components/Navigation/Sticky'
import ExpTab from '../components/Navigation/Tab'
import ExpTabBar from '../components/Navigation/TabBar'
import ExpTabView from '../components/Navigation/TabView'
import ExpCopy from '../components/Other/Copy'
import ExpActivityIndicator from '../components/Show/ActivityIndicator'
import ExpAvatar from '../components/Show/Avatar'
import ExpBadge from '../components/Show/Badge'
import ExpCell from '../components/Show/Cell'
import ExpCircleProgress from '../components/Show/CircleProgress'
import ExpCollapse from '../components/Show/Collapse'
import ExpCountDown from '../components/Show/CountDown'
import ExpCountUp from '../components/Show/CountUp'
import ExpDivider from '../components/Show/Divider'
import ExpEmpty from '../components/Show/Empty'
import ExpFlatList from '../components/Show/FlatList'
import ExpGroup from '../components/Show/Group'
import ExpImagePreview from '../components/Show/ImagePreview'
import ExpLayout from '../components/Show/Layout'
import ExpLoadMore from '../components/Show/LoadMore'
import ExpNoticeBar from '../components/Show/NoticeBar'
import ExpOrder from '../components/Show/Order'
import ExpPrice from '../components/Show/Price'
import ExpProgress from '../components/Show/Progress'
import ExpResult from '../components/Show/Result'
import ExpSkeleton from '../components/Show/Skeleton'
import ExpSteps from '../components/Show/Steps'
import ExpStopwatch from '../components/Show/Stopwatch'
import ExpSwiper from '../components/Show/Swiper'
import ExpTag from '../components/Show/Tag'
import ExpTimeAgo from '../components/Show/TimeAgo'
import ExpTimeline from '../components/Show/Timeline'
import ExpVirtualList from '../components/Show/VirtualList'
import ExpHome from '../views/Home'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<ExpHome />} />
      <Route path="/Button" element={<ExpButton />} />
      <Route path="/Layout" element={<ExpLayout />} />
      <Route path="/Icon" element={<ExpIcon />} />
      <Route path="/Image" element={<ExpImage />} />
      <Route path="/CircleProgress" element={<ExpCircleProgress />} />
      <Route path="/ActivityIndicator" element={<ExpActivityIndicator />} />
      <Route path="/Cell" element={<ExpCell />} />
      <Route path="/BackTop" element={<ExpBackTop />} />
      <Route path="/TimeAgo" element={<ExpTimeAgo />} />
      <Route path="/Toast" element={<ExpToast />} />
      <Route path="/NoticeBar" element={<ExpNoticeBar />} />
      <Route path="/Notify" element={<ExpNotify />} />
      <Route path="/Modal" element={<ExpModal />} />
      <Route path="/Fixed" element={<ExpFixed />} />
      <Route path="/NavBar" element={<ExpNavBar />} />
      <Route path="/Group" element={<ExpGroup />} />
      <Route path="/Copy" element={<ExpCopy />} />
      <Route path="/Empty" element={<ExpEmpty />} />
      <Route path="/Price" element={<ExpPrice />} />
      <Route path="/Result" element={<ExpResult />} />
      <Route path="/Divider" element={<ExpDivider />} />
      <Route path="/Skeleton" element={<ExpSkeleton />} />
      <Route path="/Badge" element={<ExpBadge />} />
      <Route path="/Avatar" element={<ExpAvatar />} />
      <Route path="/Pagination" element={<ExpPagination />} />
      <Route path="/LoadMore" element={<ExpLoadMore />} />
      <Route path="/Progress" element={<ExpProgress />} />
      <Route path="/Tag" element={<ExpTag />} />
      <Route path="/Drawer" element={<ExpDrawer />} />
      <Route path="/ActionSheet" element={<ExpActionSheet />} />
      <Route path="/Dropdown" element={<ExpActionSheet />} />
      <Route path="/Dialog" element={<ExpDialog />} />
      <Route path="/Popover" element={<ExpPopover />} />
      <Route path="/PopDialog" element={<ExpPopDialog />} />
      <Route path="/PopMenu" element={<ExpPopMenu />} />
      <Route path="/Swiper" element={<ExpSwiper />} />
      <Route path="/ImagePreview" element={<ExpImagePreview />} />
      <Route path="/Dropdown" element={<ExpDropdown />} />
      <Route path="/Input" element={<ExpInput />} />
      <Route path="/Stepper" element={<ExpStepper />} />
      <Route path="/Switch" element={<ExpSwitch />} />
      <Route path="/CountDown" element={<ExpCountDown />} />
      <Route path="/Stopwatch" element={<ExpStopwatch />} />
      <Route path="/CountUp" element={<ExpCountUp />} />
      <Route path="/Tab" element={<ExpTab />} />
      <Route path="/TabBar" element={<ExpTabBar />} />
      <Route path="/SideTab" element={<ExpSideTab />} />
      <Route path="/Checkbox" element={<ExpCheckbox />} />
      <Route path="/Radio" element={<ExpRadio />} />
      <Route path="/ScrollView" element={<ExpScrollView />} />
      <Route path="/Rate" element={<ExpRate />} />
      <Route path="/Slider" element={<ExpSlider />} />
      <Route path="/Range" element={<ExpRange />} />
      <Route path="/SwipeCell" element={<ExpSwipeCell />} />
      <Route path="/Collapse" element={<ExpCollapse />} />
      <Route path="/Timeline" element={<ExpTimeline />} />
      <Route path="/Steps" element={<ExpSteps />} />
      <Route path="/NumberKeyboard" element={<ExpNumberKeyboard />} />
      <Route path="/VirtualList" element={<ExpVirtualList />} />
      <Route path="/FlatList" element={<ExpFlatList />} />
      <Route path="/Sticky" element={<ExpSticky />} />
      <Route path="/IndexView" element={<ExpIndexView />} />
      <Route path="/ScrollTab" element={<ExpScrollTab />} />
      <Route path="/TabView" element={<ExpTabView />} />
      <Route path="/PickerView" element={<ExpPickerView />} />
      <Route path="/PickerPopup" element={<ExpPickerPopup />} />
      <Route path="/Picker" element={<ExpPicker />} />
      <Route path="/CascaderView" element={<ExpCascaderView />} />
      <Route path="/CascaderPopup" element={<ExpCascaderPopup />} />
      <Route path="/Cascader" element={<ExpCascader />} />
      <Route path="/DatePickerView" element={<ExpDatePickerView />} />
      <Route path="/DatePickerPopup" element={<ExpDatePickerPopup />} />
      <Route path="/DatePicker" element={<ExpDatePicker />} />
      <Route path="/CalendarView" element={<ExpCalendarView />} />
      <Route path="/CalendarPopup" element={<ExpCalendarPopup />} />
      <Route path="/Calendar" element={<ExpCalendar />} />
      <Route path="/SearchBar" element={<ExpSearchBar />} />
      <Route path="/Order" element={<ExpOrder />} />
      <Route path="/ImageUploader" element={<ExpImageUploader />} />
      <Route path="/Form" element={<ExpForm />} />
    </Routes>
  )
}

export default Router
