import { Routes, Route } from 'react-router-dom'
import ExpButton from '../components/Basic/Button'
import ExpIcon from '../components/Basic/Icon'
import ExpImage from '../components/Basic/Image'
import ExpModal from '../components/Basic/Modal'
import ExpNotify from '../components/Feedback/Notify'
import ExpToast from '../components/Feedback/Toast'
import ExpBackTop from '../components/Navigation/BackTop'
import ExpFixed from '../components/Navigation/Fixed'
import ExpNavBar from '../components/Navigation/NavBar'
import ExpActivityIndicator from '../components/Show/ActivityIndicator'
import ExpCell from '../components/Show/Cell'
import ExpCircleProgress from '../components/Show/CircleProgress'
import ExpGroup from '../components/Show/Group'
import ExpLayout from '../components/Show/Layout'
import ExpNoticeBar from '../components/Show/NoticeBar'
import ExpTimeAgo from '../components/Show/TimeAgo'
import ExpHome from '../views/Home'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<ExpHome />} />
      <Route path="/Button" element={<ExpButton />} />
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
    </Routes>
  )
}

export default Router
