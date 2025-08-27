import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { WeddingBouquets } from './pages/WeddingBouquets'
import { About } from './pages/About'
import { GiftCakes } from './pages/gift/GiftCakes'
import { GiftToys } from './pages/gift/GiftToys'
import { GiftFlowers } from './pages/gift/GiftFlowers'
import { GiftPhotoFrames } from './pages/gift/GiftPhotoFrames'
import { GiftMugs } from './pages/gift/GiftMugs'
import { GiftMoneyBunches } from './pages/gift/GiftMoneyBunches'
import { GiftPackages } from './pages/gift/GiftPackages'
import { OccasionBirthday } from './pages/occasions/OccasionBirthday'
import { OccasionAnniversary } from './pages/occasions/OccasionAnniversary'
import { OccasionGraduation } from './pages/occasions/OccasionGraduation'
import { OccasionLoveRomance } from './pages/occasions/OccasionLoveRomance'
import { EventBirthdayDecors } from './pages/events/EventBirthdayDecors'
import { EventCarSurprises } from './pages/events/EventCarSurprises'
import { EventMarryMe } from './pages/events/EventMarryMe'
import { EventCorporate } from './pages/events/EventCorporate'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="wedding-bouquets" element={<WeddingBouquets />} />
        <Route path="about" element={<About />} />

        <Route path="gift">
          <Route index element={<Navigate to="cakes" replace />} />
          <Route path="cakes" element={<GiftCakes />} />
          <Route path="toys" element={<GiftToys />} />
          <Route path="flowers" element={<GiftFlowers />} />
          <Route path="photo-frames" element={<GiftPhotoFrames />} />
          <Route path="mugs" element={<GiftMugs />} />
          <Route path="money-bunches" element={<GiftMoneyBunches />} />
          <Route path="packages" element={<GiftPackages />} />
        </Route>

        <Route path="occasions">
          <Route index element={<Navigate to="birthday" replace />} />
          <Route path="birthday" element={<OccasionBirthday />} />
          <Route path="anniversary" element={<OccasionAnniversary />} />
          <Route path="graduation" element={<OccasionGraduation />} />
          <Route path="love-romance" element={<OccasionLoveRomance />} />
        </Route>

        <Route path="events">
          <Route index element={<Navigate to="birthday-decors" replace />} />
          <Route path="birthday-decors" element={<EventBirthdayDecors />} />
          <Route path="car-surprises" element={<EventCarSurprises />} />
          <Route path="marry-me" element={<EventMarryMe />} />
          <Route path="corporate" element={<EventCorporate />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
