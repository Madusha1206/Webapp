import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout.jsx'
import { Home } from './pages/Home.jsx'
import { WeddingBouquets } from './pages/WeddingBouquets.jsx'
import { About } from './pages/About.jsx'
import { GiftCakes } from './pages/gift/GiftCakes.jsx'
import { GiftToys } from './pages/gift/GiftToys.jsx'
import { GiftFlowers } from './pages/gift/GiftFlowers.jsx'
import { GiftPhotoFrames } from './pages/gift/GiftPhotoFrames.jsx'
import { GiftMugs } from './pages/gift/GiftMugs.jsx'
import { GiftMoneyBunches } from './pages/gift/GiftMoneyBunches.jsx'
import { GiftPackages } from './pages/gift/GiftPackages.jsx'
import { OccasionBirthday } from './pages/occasions/OccasionBirthday.jsx'
import { OccasionAnniversary } from './pages/occasions/OccasionAnniversary.jsx'
import { OccasionGraduation } from './pages/occasions/OccasionGraduation.jsx'
import { OccasionLoveRomance } from './pages/occasions/OccasionLoveRomance.jsx'
import { EventBirthdayDecors } from './pages/events/EventBirthdayDecors.jsx'
import { EventCarSurprises } from './pages/events/EventCarSurprises.jsx'
import { EventMarryMe } from './pages/events/EventMarryMe.jsx'
import { EventCorporate } from './pages/events/EventCorporate.jsx'

export default function App() {
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
