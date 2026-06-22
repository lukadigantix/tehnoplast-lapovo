"use client";

import React, { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";

// Lapovo HQ — approximate coordinates of Kosovskih junaka 20 (easy to fine-tune).
const LAT = 44.1846;
const LON = 21.0976;

// Full-bleed dark map of the HQ. Built on Leaflet + CARTO "dark" OpenStreetMap
// tiles so the map style matches the site (swap the tile URL to restyle). Leaflet
// is imported dynamically inside the effect because it touches `window` on load
// and would otherwise break SSR.
const ContactMap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    let cancelled = false;

    import("leaflet").then((mod) => {
      const L = mod.default;
      if (cancelled || !containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, {
        center: [LAT, LON],
        zoom: 15,
        scrollWheelZoom: false, // don't hijack page scroll
        zoomControl: false,
        attributionControl: true,
      });
      mapRef.current = map;

      // No zoom buttons; drop the "Leaflet" attribution prefix (keep the
      // required OpenStreetMap / CARTO credit).
      map.attributionControl.setPrefix(false);

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 20,
        }
      ).addTo(map);

      // Custom orange marker (a glowing dot) — avoids Leaflet's default icon assets.
      const icon = L.divIcon({
        className: "",
        html: '<span style="display:block;width:18px;height:18px;border-radius:9999px;background:#e87722;border:2px solid #fff;box-shadow:0 0 0 6px rgba(232,119,34,0.28);"></span>',
        iconSize: [18, 18],
        iconAnchor: [9, 9],
      });
      L.marker([LAT, LON], { icon }).addTo(map);
    });

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <section className="relative bg-[#111]">
      {/* Floating address card */}
      <div className="pointer-events-none absolute left-[5%] top-8 z-[1100] max-w-[280px] border border-white/15 bg-[#111]/90 p-6 backdrop-blur-sm md:top-10">
        <div className="mb-3 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-[#e87722]">
          <span className="h-px w-6 bg-[#e87722]" />
          Sedište
        </div>
        <p className="text-[1rem] font-black uppercase leading-tight tracking-tight text-white">
          Tehnoplast Lapovo
        </p>
        <p className="mt-2 text-[0.88rem] leading-relaxed text-white/55">
          Kosovskih junaka 20, 34220 Lapovo, Srbija
        </p>
      </div>

      <div
        ref={containerRef}
        className="z-0 h-[440px] w-full bg-[#111] md:h-[560px]"
      />
    </section>
  );
};

export default ContactMap;
