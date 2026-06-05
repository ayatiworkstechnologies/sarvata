import React from 'react';
import MainHero from '@/components/MainHero';
import EventContext from './components/EventContext';
import SummitOffers from './components/SummitOffers';
import WorkshopsList from './components/WorkshopsList';
import EventRegistration from './components/EventRegistration';
import EventHighlightBar from './components/EventHighlightBar';

export const metadata = {
  title: "The Sarvata Educators Collective 2026",
  description: "A premium, high-impact gathering designed for forward-thinking school leaders and educators, hosted by Sarvata Educational Consultancy.",
};

export default function SarvataCollective2026Page() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      <MainHero
        webImage="/banners/event-banner-web.png"
        mobileImage="/banners/event-banner-mob.png"
        eventLogo="/logo.png"
        title={
          <>
            The <span className="text-[#D9A63A]">Sarvata</span>{" "}
            <span className="text-[#6B4A8E]">Educators</span> <br />
            <span className="text-[#D9A63A]">Collective 2026</span>
          </>
        }
        subtitle="Hosted by Sarvata Educational Consultancy in Partnership with APL Global School."
        breadcrumbs={[
          { label: "Events" }
        ]}
      />
      <EventHighlightBar />
      <EventContext />
      <SummitOffers />
      <WorkshopsList />
      <EventRegistration />
    </main>
  );
}
