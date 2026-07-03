import React from 'react';
import MainHero from '@/components/MainHero';
import EventContext from './components/EventContext';
import SummitOffers from './components/SummitOffers';
import WorkshopsList from './components/WorkshopsList';
import EventRegistration from './components/EventRegistration';
import EventHighlightBar from './components/EventHighlightBar';
import EventDetails from './components/EventDetails';

export const metadata = {
  alternates: { canonical: '/event' },
  title: "The Sarvata Educators Collective 2026",
  description: "A premium, high-impact gathering designed for forward-thinking school leaders and educators, hosted by Sarvata Educational Consultancy.",
};

export default function SarvataCollective2026Page() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-clip selection:bg-primary/30 selection:text-primary-foreground">
      <MainHero
        webImage="/banners/event-banner-new.png"
        mobileImage="/banners/event-banner-new-mo.png"
        // eventLogo="/event-logo.png"
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
      <EventDetails />
      <EventRegistration />
    </main>
  );
}
