import { useState } from "react";

const PHOTOGRAPHERS = {
  jeju: [
    {
      id: "jeju-1", number: "#1", name: "Eui.me Snap", instagram: "@eui.me",
      packages: [
        {
          name: "Package A",
          subtitle: "Eui.me Snap (2-Hr Casual Snap)",
          partners: {
            photographer: { name: "Eui.me Snap", instagram: "@eui.me" },
          },
          inclusiveItems: ["Photography Session"],
          shootingTime: "2 Hours",
          shootingNote: "ONLY available for morning sessions (Option 1: 9AM-11AM / Option 2: 10AM-12PM). Sunset shoot is NOT available.",
          locations: "2 sites",
          originalPhotos: "500+",
          retouched: 15,
          retouchedDetail: "Customer Selected Photos",
          priceSNS: 390,
          priceNoSNS: 485,
          notes: ["Interpreter is not included.", "Transportation is not included. Please arrange your own transportation, such as a rental car or taxi, to the shooting locations."],
          addons: [
            { name: "Hair & Makeup for Couple", price: 280, desc: "OVE Makeup (Instagram: @ove.makeup) or K Salon (Instagram: @k__salon)" },
            { name: "Videography", price: 185, desc: "Highlight video (approx. 1 minute). Complimentary drone footage clip (approx. 15 seconds). *Please note drone filming may not be available in case of rain or strong winds." },
            { name: "Additional Retouched Photo", price: 8, desc: "Per photo. Maximum 10 photos available." },
            { name: "Express Retouching Service", price: 85, desc: "10 retouched photos for invitation card. Service will be completed within 2 weeks from the photo selection date." },
            { name: "Fresh Bouquet", price: 160, desc: "Hatt (Instagram: @hatt__flower)" },
          ],
        },
        {
          name: "Package B",
          subtitle: "Eui.me Snap (4-Hr) & OVE",
          partners: {
            photographer: { name: "Eui.me Snap", instagram: "@eui.me" },
            hmu: { name: "OVE", instagram: "@ove.makeup" },
            suit: { name: "The Suit Homme", instagram: "@thesuit_rentalcenter" },
          },
          inclusiveItems: [
            "Photography Session",
            "Hair & Makeup for Couple",
            "2 Dress (Shoes NOT included)",
            "2 Suits (Shirt and Shoes NOT included)",
            "Accessories (Veil, Earrings, Hair acc)",
            "1 Fresh Flower Bouquet",
            "Interpreter (On Shoot Day)",
            "Private Van with Driver (On Shoot Day)",
            "Stylist (On Shoot Day)",
          ],
          shootingTime: "4 Hours",
          locations: "3 sites",
          originalPhotos: "1,500+",
          retouched: 30,
          retouchedDetail: "Customer Selected Photos",
          priceSNS: 2170,
          priceNoSNS: 2260,
          addons: [
            { name: "Additional Retouched Photo", price: 8, desc: "Per photo. Maximum 10 photos available." },
            { name: "Express Retouching Service", price: 85, desc: "10 retouched photos for invitation card. Service will be completed within 2 weeks from the photo selection date." },
          ],
        },
      ],
    },
    {
      id: "jeju-2", number: "#2", name: "Jeju Ohu", instagram: "@jejuohu",
      packages: [
        {
          name: "Package",
          subtitle: "Jeju Ohu (2-Hr Casual Snap)",
          partners: {
            photographer: { name: "Jeju Ohu", instagram: "@jejuohu" },
          },
          inclusiveItems: ["Photography Session"],
          shootingTime: "2 Hours",
          shootingNote: "ONLY available for morning sessions (Option 1: 9AM-11AM / Option 2: 10AM-12PM). Sunset shoot is NOT available.",
          locations: "2 sites",
          originalPhotos: "500+",
          retouched: 15,
          retouchedDetail: "Customer Selected Photos",
          priceSNS: 390,
          priceNoSNS: 485,
          notes: ["Interpreter is not included.", "Transportation is not included. Please arrange your own transportation, such as a rental car or taxi, to the shooting locations."],
          addons: [
            { name: "Hair & Makeup for Couple", price: 280, desc: "OVE Makeup (Instagram: @ove.makeup) or K Salon (Instagram: @k__salon)" },
            { name: "Videography", price: 185, desc: "Highlight video (approx. 1 minute). Complimentary drone footage clip (approx. 15 seconds). *Please note drone filming may not be available in case of rain or strong winds." },
            { name: "Additional Retouched Photo", price: 8, desc: "Per photo. Maximum 10 photos available." },
            { name: "Express Retouching Service", price: 85, desc: "10 retouched photos for invitation card. Service will be completed within 2 weeks from the photo selection date." },
            { name: "Fresh Bouquet", price: 160, desc: "Hatt (Instagram: @hatt__flower)" },
          ],
        },
      ],
    },
    {
      id: "jeju-3", number: "#3", name: "Jeju and You (Director Ura)", instagram: "@jejuandyou_ura",
      packages: [
        {
          name: "Package A",
          subtitle: "Jeju and You Ura (2-Hr) - Including Interpreter",
          partners: {
            photographer: { name: "Jeju and You (Director Ura)", instagram: "@jejuandyou_ura" },
          },
          inclusiveItems: [
            "Photography Session",
            "Interpreter (During the Shooting)",
          ],
          shootingTime: "2-2.5 Hours",
          shootingNote: "ONLY available at 10AM morning sessions. Sunset shoot is NOT available.",
          locations: "2 sites",
          originalPhotos: "500+",
          retouched: 20,
          retouchedDetail: "Detailed Retouched: 10 (Customer Selected)\nColor Correction: 10 (Customer Selected)",
          priceSNS: 770,
          priceNoSNS: 910,
          notes: ["Transportation is not included. Please arrange your own transportation, such as a rental car or taxi, to the shooting locations.", "The 2-hour photography package is suited for personal outfit photoshoots. Dress and suit rental is not included in this package (available as an add-on)."],
          addons: [
            { name: "Hair & Makeup for Couple", price: 257, desc: "Dansum (Instagram: @dansum_makeup)" },
          ],
        },
        {
          name: "Package B",
          subtitle: "Jeju and You Ura (2-Hr) - Without Interpreter",
          partners: {
            photographer: { name: "Jeju and You (Director Ura)", instagram: "@jejuandyou_ura" },
          },
          inclusiveItems: [
            "Photography Session",
          ],
          shootingTime: "2-2.5 Hours",
          shootingNote: "ONLY available at 10AM morning sessions. Sunset shoot is NOT available.",
          locations: "2 sites",
          originalPhotos: "500+",
          retouched: 20,
          retouchedDetail: "Detailed Retouched: 10 (Customer Selected)\nColor Correction: 10 (Customer Selected)",
          priceSNS: 580,
          priceNoSNS: 720,
          notes: ["This package is available only for clients who can communicate in Korean, as no interpreter is provided.", "Transportation is not included. Please arrange your own transportation, such as a rental car or taxi, to the shooting locations.", "The 2-hour photography package is suited for personal outfit photoshoots. Dress and suit rental is not included in this package (available as an add-on)."],
          addons: [
            { name: "Hair & Makeup for Couple", price: 257, desc: "Dansum (Instagram: @dansum_makeup)" },
          ],
        },
      ],
    },
    {
      id: "jeju-4", number: "#4", name: "Indigo Bridge", instagram: "@indigo_bridge_snap",
      packages: [
        {
          name: "Package A",
          subtitle: "Indigo Bridge (1-Hr Couple, Proposal Snap)",
          partners: {
            photographer: { name: "Indigo Bridge", instagram: "@indigo_bridge_snap" },
          },
          inclusiveItems: [
            "Photography Session",
            { text: "Signature Drone Video", detail: "Under 30 sec / Portrait or landscape (randomly assigned) / Logo included / Weather permitting" },
            "Interpreter (During the Shooting)",
          ],
          shootingTime: "1 Hour",
          locations: "1 site",
          originalPhotos: "500+",
          retouched: 5,
          retouchedDetail: "Customer Selected Photos\n(Detailed Retouched + Color Correction)",
          priceSNS: 561,
          priceNoSNS: 655,
          outfitNote: "Up to 1 outfit. No outfit change available.",
          notes: [
            "Sunset time shooting is available.",
            "Photography only. Hair, makeup, and outfits are not included and must be arranged separately.",
            "Studio photography addition is available.",
            "Drone video can be upgraded for pre-wedding ceremony video use.",
            "Additional color correction is available.",
            "Transportation is not included. Please rent your own vehicle for transportation to the shooting locations.",
          ],
          addons: [
            { name: "Additional Detailed Retouched or Color Correction", price: 9, desc: "Per photo. No limit on number of cuts. Includes both detailed retouched and color correction. Longer processing time with more requested cuts." },
            { name: "Additional 1-Hour + 1 Location", price: 182, desc: "Add 1 hour of shooting time and 1 additional location to your package." },
            { name: "Express Retouching (Photos)", price: 9, desc: "Per photo. Min 1, max 20 photos. Completed within 15 days from selection date. Available after shoot completion." },
            { name: "Express Retouching (Drone Video)", price: 46, desc: "Drone video editing completed and delivered 1-2 weeks before the ceremony. Available only for clients who upgraded to the pre-wedding drone video option. Available after shoot completion." },
          ],
        },
        {
          name: "Package B",
          subtitle: "Indigo Bridge (1-Hr Friends, Family, Maternity, Solo Snap)",
          partners: {
            photographer: { name: "Indigo Bridge", instagram: "@indigo_bridge_snap" },
          },
          inclusiveItems: [
            "Photography Session",
            { text: "4K Cinematic Drone Shooting", detail: "20-30 sec video / Portrait or landscape (randomly assigned) / Logo included / Weather permitting / Raw video footage is NOT provided" },
            "Interpreter (During the Shooting)",
            "*Note: Up to 4 people (base). Up to 2 outfits / 1 outfit change.",
          ],
          shootingTime: "40-60 Min",
          locations: "1 site",
          originalPhotos: "500+",
          retouched: 10,
          retouchedDetail: "Customer Selected Photos\n(Detailed Retouched + Color Correction)",
          priceSNS: 490,
          priceNoSNS: 580,
          notes: [
            "Options subject to availability. Actual shooting conditions may vary.",
            "Transportation is not included. Please rent your own vehicle for transportation to the shooting locations.",
            "The casual photography package is suited for personal outfits photoshoot. Dress and suit rental is not included in this package (add-ons service).",
          ],
          addons: [
            { name: "Additional Detailed Retouched or Color Correction", price: 9, desc: "Per photo. No limit on number of cuts. Includes both detailed retouched and color correction. Longer processing time with more requested cuts." },
            { name: "Additional 1-Hour + 1 Location", price: 182, desc: "Add 1 hour of shooting time and 1 additional location to your package." },
            { name: "Express Retouching (Photos)", price: 9, desc: "Per photo. Min 1, max 20 photos. Completed within 15 days from selection date. Available after shoot completion." },
            { name: "Express Retouching (Drone Video)", price: 46, desc: "Drone video editing completed and delivered 1-2 weeks before the ceremony. Available only for clients who upgraded to the pre-wedding drone video option. Available after shoot completion." },
          ],
        },
      ],
    },
  ],
  seoul: [
    {
      id: "seoul-1", number: "#1", name: "Eo.ways", instagram: "@eo.ways",
      packages: [
        {
          name: "Package A",
          subtitle: "Eo.ways (2-Hr Casual Snap)",
          partners: {
            photographer: { name: "Eo.ways", instagram: "@eo.ways" },
          },
          inclusiveItems: ["Photography Session"],
          shootingTime: "2 Hours",
          locations: "1 site",
          originalPhotos: "100+",
          retouched: 15,
          retouchedDetail: "Customer Selected Photos",
          priceSNS: 250,
          priceNoSNS: null,
          outfitNote: "For a 2-hour photoshoot, up to 1 outfit is available.",
          notes: ["Transportation is not included. Please arrange your own transportation, such as a rental car or taxi, to the shooting locations."],
          addons: [
            { name: "Hair & Makeup for Couple", price: 210, desc: "K Salon (Instagram: @k__salon)" },
          ],
        },
        {
          name: "Package B",
          subtitle: "Eo.ways (3-Hr Casual Snap)",
          partners: {
            photographer: { name: "Eo.ways", instagram: "@eo.ways" },
          },
          inclusiveItems: ["Photography Session"],
          shootingTime: "3 Hours",
          locations: "2 sites",
          originalPhotos: "200+",
          retouched: 30,
          retouchedDetail: "Customer Selected Photos",
          priceSNS: 345,
          priceNoSNS: null,
          addons: [
            { name: "Hair & Makeup for Couple", price: 210, desc: "K Salon (Instagram: @k__salon)" },
          ],
        },
        {
          name: "Package C",
          subtitle: "Eo.ways (4-5Hr) & K Salon",
          partners: {
            photographer: { name: "Eo.ways", instagram: "@eo.ways" },
            hmu: { name: "K Salon", instagram: "@k__salon" },
          },
          inclusiveItems: [
            "Photography Session",
            "Hair & Makeup for Couple",
            "2 Dress (Shoes NOT included)",
            "2 Suits (Shirt and Shoes NOT included)",
            "Accessories (Veil, Earrings, Hair acc)",
            "1 Fresh Flower Bouquet",
            "Stylist (On Shoot Day)",
            "Interpreter (On Shoot Day)",
            "Private Van with Driver (On Shoot Day)",
          ],
          shootingTime: "4-5 Hours",
          locations: "3 sites",
          originalPhotos: "1,000+",
          retouched: 40,
          retouchedDetail: "Customer Selected Photos",
          priceSNS: 2412,
          priceNoSNS: null,
          addons: [],
        },
      ],
    },
    {
      id: "seoul-2", number: "#2", name: "Kiss and Smoking", instagram: "@kiss_and.smoking",
      packages: [
        {
          name: "Package",
          subtitle: "Kiss and Smoking - Simple Day (2-Hr)",
          partners: {
            photographer: { name: "Kiss and Smoking", instagram: "@kiss_and.smoking" },
          },
          inclusiveItems: [
            "Photography Session",
            "Interpreter (2 hours, during the shoot)",
          ],
          shootingTime: "2 Hours",
          locations: "1 site",
          originalPhotos: "300+",
          retouched: 10,
          retouchedDetail: "Customer Selected Photos",
          priceSNS: 400,
          priceNoSNS: null,
          outfitNote: "For a 2-hour photoshoot, up to 1 outfit is available.",
          notes: ["Transportation is not included. Please arrange your own transportation, such as a rental car or taxi, to the shooting locations."],
          addons: [],
        },
      ],
    },
  ],
};

/* ─── Helpers ─── */

function InstagramLink({ handle }) {
  if (!handle) return null;
  const handles = handle.split(" / ");
  return (
    <span>
      {handles.map((h, i) => (
        <span key={h}>
          <a
            href={`https://instagram.com/${h.replace("@", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#3B9B8F", textDecoration: "none", borderBottom: "1px solid #A8D5CF" }}
          >
            {h}
          </a>
          {i < handles.length - 1 && " / "}
        </span>
      ))}
    </span>
  );
}

function RenderDesc({ text }) {
  if (!text) return null;
  const parts = text.split(/(@[\w._]+)/g);
  return parts.map((part, i) =>
    part.startsWith("@") ? (
      <a key={i} href={`https://instagram.com/${part.replace("@", "")}`} target="_blank" rel="noopener noreferrer" style={{ color: "#3B9B8F", textDecoration: "none", borderBottom: "1px solid #A8D5CF" }}>{part}</a>
    ) : <span key={i}>{part}</span>
  );
}

function BackButton({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "none",
        border: "none",
        color: "#3B9B8F",
        cursor: "pointer",
        fontSize: "14px",
        padding: "8px 0",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <span style={{ fontSize: "18px" }}>&#8249;</span> {label}
    </button>
  );
}

function ListButton({ onClick, disabled, left, right }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 20px",
        background: !disabled ? "#fff" : "#F5FAF9",
        border: "1px solid #D0E6E2",
        borderRadius: "8px",
        cursor: !disabled ? "pointer" : "default",
        opacity: !disabled ? 1 : 0.5,
        transition: "all 0.2s",
        textAlign: "left",
        width: "100%",
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.borderColor = "#3B9B8F";
          e.currentTarget.style.boxShadow = "0 2px 12px rgba(59,155,143,0.1)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#D0E6E2";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div>{left}</div>
      <div>{right}</div>
    </button>
  );
}

function RegionSelect({ onSelect }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", marginTop: "60px" }}>
      <p style={{ color: "#666", fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase", margin: 0 }}>
        Select Location
      </p>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
        {[
          { key: "jeju", label: "Jeju", sub: "4 Photographers" },
          { key: "seoul", label: "Seoul", sub: "2 Photographers" },
        ].map((r) => (
          <button
            key={r.key}
            onClick={() => onSelect(r.key)}
            style={{
              width: "200px",
              padding: "40px 24px",
              background: "#fff",
              border: "1px solid #D0E6E2",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.2s",
              textAlign: "center",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#3B9B8F";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(59,155,143,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#D0E6E2";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ fontSize: "24px", fontWeight: 300, color: "#1E3A3A", fontFamily: "'Cormorant Garamond', serif" }}>{r.label}</div>
            <div style={{ fontSize: "12px", color: "#666", marginTop: "8px", letterSpacing: "1px" }}>{r.sub}</div>
          </button>
        ))}
      </div>
    </div>
  );
}

function PhotographerList({ region, photographers, onSelect, onBack }) {
  return (
    <div>
      <BackButton onClick={onBack} label="Location" />
      <p style={{ color: "#666", fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", margin: "24px 0 16px", textAlign: "center" }}>
        {region === "jeju" ? "Jeju" : "Seoul"} Photographers
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxWidth: "480px", margin: "0 auto" }}>
        {photographers.map((p) => {
          const hasPackages = p.packages && p.packages.length > 0;
          return (
            <ListButton
              key={p.id}
              onClick={() => hasPackages && onSelect(p)}
              disabled={!hasPackages}
              left={
                <>
                  <span style={{ color: "#3B9B8F", fontSize: "12px", fontWeight: 600 }}>{p.number}</span>
                  <span style={{ color: "#1E3A3A", fontSize: "16px", marginLeft: "12px", fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
                    {p.name}
                  </span>
                </>
              }
              right={
                hasPackages ? (
                  <span style={{ color: "#3B9B8F", fontSize: "12px" }}>
                    {p.packages.length} {p.packages.length === 1 ? "package" : "packages"} ›
                  </span>
                ) : (
                  <span style={{ color: "#999", fontSize: "12px" }}>Coming Soon</span>
                )
              }
            />
          );
        })}
      </div>
    </div>
  );
}

function PackageDetail({ photographer, onBack }) {
  const [selectedPkg, setSelectedPkg] = useState(0);
  const [expandedAddon, setExpandedAddon] = useState(null);
  const pkg = photographer.packages[selectedPkg];

  return (
    <div>
      <BackButton onClick={onBack} label="Photographers" />

      <div style={{ textAlign: "center", margin: "24px 0 32px" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "28px", color: "#1E3A3A", margin: 0 }}>
          {photographer.name}
        </h2>
        <p style={{ margin: "4px 0 0", fontSize: "13px" }}>
          <InstagramLink handle={photographer.instagram} />
        </p>
      </div>

      {/* Package tabs */}
      {photographer.packages.length > 1 && (
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap", marginBottom: "32px" }}>
          {photographer.packages.map((p, i) => (
            <button
              key={p.name}
              onClick={() => { setSelectedPkg(i); setExpandedAddon(null); }}
              style={{
                padding: "10px 20px",
                background: i === selectedPkg ? "#1E3A3A" : "#fff",
                color: i === selectedPkg ? "#fff" : "#1E3A3A",
                border: "1px solid #1E3A3A",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.5px",
                transition: "all 0.2s",
              }}
            >
              {p.name}
            </button>
          ))}
        </div>
      )}

      {/* Package subtitle */}
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <p style={{ fontSize: "14px", color: "#3B9B8F", fontWeight: 500, margin: 0, letterSpacing: "0.5px" }}>{pkg.subtitle}</p>
      </div>

      {/* Partners */}
      <div style={{ background: "#F5FAF9", border: "1px solid #D0E6E2", borderRadius: "8px", padding: "20px 24px", marginBottom: "24px" }}>
        <p style={{ fontSize: "12px", color: "#666", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 12px" }}>Partners</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          {Object.entries(pkg.partners).map(([role, info]) => (
            <div key={role}>
              <span style={{ fontSize: "12px", color: "#666", textTransform: "capitalize" }}>{role === "hmu" ? "Hair & Makeup" : role === "dress" ? "Dress" : role === "suit" ? "Suit" : role === "bouquet" ? "Bouquet" : "Photographer"}</span>
              <div style={{ fontSize: "14px", color: "#1E3A3A", fontWeight: 500, marginTop: "2px" }}>{info.name}</div>
              <InstagramLink handle={info.instagram} />
            </div>
          ))}
        </div>
        <p style={{ fontSize: "14px", color: "#3B9B8F", fontWeight: 500, margin: "12px 0 0" }}>
          * Please check each studio's portfolio on Instagram
        </p>
      </div>

      {/* Package Inclusive */}
      {pkg.inclusiveItems && pkg.inclusiveItems.length > 0 && (
        <div style={{ marginBottom: "24px" }}>
          <p style={{ fontSize: "12px", color: "#666", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 12px" }}>Package Inclusive</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "6px" }}>
            {pkg.inclusiveItems.filter(item => typeof item === "string" ? !item.startsWith("*Note:") : true).map((item, idx) => (
              <div key={typeof item === "string" ? item : item.text} style={{ fontSize: "14px", color: "#1E3A3A", padding: "6px 0", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <span style={{ color: "#3B9B8F", flexShrink: 0 }}>✓</span>
                <div>
                  {typeof item === "string" ? item : (
                    <>
                      <span>{item.text}</span>
                      {item.detail && <p style={{ fontSize: "11px", color: "#888", margin: "3px 0 0", lineHeight: "1.5" }}>{item.detail}</p>}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          {pkg.inclusiveItems.filter(item => typeof item === "string" && item.startsWith("*Note:")).map((note) => (
            <p key={note} style={{ fontSize: "12px", color: "#999", fontStyle: "italic", margin: "12px 0 0", padding: "8px 12px", borderLeft: "2px solid #D0E6E2" }}>
              {note}
            </p>
          ))}
        </div>
      )}

      {/* Photography Details */}
      <div style={{ background: "#F5FAF9", border: "1px solid #D0E6E2", borderRadius: "8px", padding: "20px 24px", marginBottom: "24px" }}>
        <p style={{ fontSize: "12px", color: "#666", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 16px" }}>Photography Details</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 24px" }}>
          {[
            { label: "Shooting Time", value: pkg.shootingTime },
            { label: "Locations", value: pkg.locations },
            { label: "Original Photos", value: `${pkg.originalPhotos} photos` },
          ].map((d) => (
            <div key={d.label}>
              <div style={{ fontSize: "12px", color: "#666" }}>{d.label}</div>
              <div style={{ fontSize: "18px", fontWeight: 400, color: "#1E3A3A", marginTop: "2px", fontFamily: "'Cormorant Garamond', serif" }}>{d.value}</div>
            </div>
          ))}
          <div>
            <div style={{ fontSize: "12px", color: "#666" }}>Retouched Photos</div>
            <div style={{ fontSize: "18px", fontWeight: 400, color: "#1E3A3A", marginTop: "2px", fontFamily: "'Cormorant Garamond', serif" }}>{pkg.retouched} photos</div>
            <div style={{ fontSize: "12px", color: "#888", marginTop: "4px", lineHeight: "1.5", whiteSpace: "pre-line" }}>{pkg.retouchedDetail}</div>
          </div>
        </div>
        {pkg.shootingNote && (
          <p style={{ fontSize: "12px", color: "#999", fontStyle: "italic", margin: "16px 0 0", padding: "8px 12px", borderLeft: "2px solid #D0E6E2" }}>
            *Note: {pkg.shootingNote}
          </p>
        )}
        {pkg.outfitNote && (
          <p style={{ fontSize: "12px", color: "#999", fontStyle: "italic", margin: "8px 0 0", padding: "8px 12px", borderLeft: "2px solid #D0E6E2" }}>
            *Note: {pkg.outfitNote}
          </p>
        )}
      </div>

      {/* Pricing */}
      {pkg.priceNoSNS !== null ? (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "24px" }}>
          <div style={{ background: "#1E3A3A", borderRadius: "8px", padding: "16px", textAlign: "center" }}>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.75)", letterSpacing: "1px", textTransform: "uppercase" }}>Agree to SNS Upload</div>
            <div style={{ fontSize: "22px", fontWeight: 400, color: "#fff", marginTop: "6px", fontFamily: "'Cormorant Garamond', serif" }}>
              USD {pkg.priceSNS.toLocaleString()}
            </div>
          </div>
          <div style={{ background: "#F5FAF9", border: "1px solid #D0E6E2", borderRadius: "8px", padding: "16px", textAlign: "center" }}>
            <div style={{ fontSize: "12px", color: "#666", letterSpacing: "1px", textTransform: "uppercase" }}>Decline SNS Upload</div>
            <div style={{ fontSize: "22px", fontWeight: 400, color: "#1E3A3A", marginTop: "6px", fontFamily: "'Cormorant Garamond', serif" }}>
              USD {pkg.priceNoSNS.toLocaleString()}
            </div>
          </div>
        </div>
      ) : (
        <div style={{ background: "#1E3A3A", borderRadius: "8px", padding: "16px", textAlign: "center", marginBottom: "24px" }}>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.75)", letterSpacing: "1px", textTransform: "uppercase" }}>Package Price</div>
          <div style={{ fontSize: "22px", fontWeight: 400, color: "#fff", marginTop: "6px", fontFamily: "'Cormorant Garamond', serif" }}>
            USD {pkg.priceSNS.toLocaleString()}
          </div>
        </div>
      )}
      <p style={{ fontSize: "12px", color: "#666", margin: "-12px 0 8px 4px" }}>
        * Final price is subject to change based on current USD exchange rate and does NOT include add-ons.
      </p>
      {pkg.priceNoSNS !== null && (
        <p style={{ fontSize: "12px", color: "#666", margin: "0 0 24px 4px" }}>
          * SNS Upload: Hype Pig (Hype Wedding, Hype Snap) SNS, Photographer SNS
        </p>
      )}

      {/* Add-ons */}
      {pkg.addons && pkg.addons.length > 0 && (
        <div style={{ marginBottom: "32px" }}>
          <p style={{ fontSize: "12px", color: "#666", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 12px" }}>Add-ons</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {pkg.addons.map((addon, i) => (
              <div
                key={addon.name}
                style={{ border: "1px solid #D0E6E2", borderRadius: "8px", overflow: "hidden" }}
              >
                <button
                  onClick={() => setExpandedAddon(expandedAddon === i ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 16px",
                    background: expandedAddon === i ? "#F5FAF9" : "#fff",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span style={{ fontSize: "14px", color: "#1E3A3A" }}>{addon.name}</span>
                  <span style={{ fontSize: "14px", color: "#3B9B8F", fontWeight: 500, flexShrink: 0, marginLeft: "12px" }}>
                    {addon.price !== null ? `+$${addon.price}` : "See details"} {expandedAddon === i ? "−" : "+"}
                  </span>
                </button>
                {expandedAddon === i && (
                  <div style={{ padding: "0 16px 12px", fontSize: "13px", color: "#555", lineHeight: "1.6", background: "#F5FAF9" }}>
                    <RenderDesc text={addon.desc} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <p style={{ fontSize: "12px", color: "#666", margin: "8px 0 0 4px", fontStyle: "italic" }}>
            * Add-ons are NOT included in the total price. Additional charges will apply.
          </p>
        </div>
      )}

      {/* Notes */}
      {pkg.notes && pkg.notes.length > 0 && (
        <div style={{ marginBottom: "32px" }}>
          <p style={{ fontSize: "12px", color: "#666", letterSpacing: "2px", textTransform: "uppercase", margin: "0 0 12px" }}>Notes</p>
          {pkg.notes.map((note, i) => (
            <p key={i} style={{ fontSize: "13px", color: "#666", margin: "0 0 6px", padding: "0 0 0 12px", borderLeft: "2px solid #D0E6E2" }}>
              {note}
            </p>
          ))}
        </div>
      )}

      {/* CTA */}
      <div style={{ textAlign: "center", padding: "32px 0", borderTop: "1px solid #D0E6E2" }}>
        <p style={{ fontSize: "14px", color: "#555", margin: "0 0 16px" }}>Ready to book or have questions?</p>
        <a
          href="https://wa.me/821062695990"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "14px 40px",
            background: "#1E3A3A",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "6px",
            fontSize: "13px",
            letterSpacing: "1px",
            fontWeight: 500,
          }}
        >
          CONTACT US ON WHATSAPP
        </a>
        <p style={{ fontSize: "12px", color: "#666", marginTop: "12px" }}>
          Instagram:{" "}
          <a href="https://instagram.com/hypesnap_" target="_blank" rel="noopener noreferrer" style={{ color: "#3B9B8F", textDecoration: "none" }}>
            @hypesnap_
          </a>
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const [region, setRegion] = useState(null);
  const [photographer, setPhotographer] = useState(null);

  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, sans-serif",
      maxWidth: "640px",
      margin: "0 auto",
      padding: "24px 20px",
      color: "#1E3A3A",
      minHeight: "100vh",
      background: "#fff",
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "20px",
          fontWeight: 300,
          letterSpacing: "4px",
          textTransform: "uppercase",
          color: "#1E3A3A",
          margin: 0,
        }}>
          Hype Snap
        </h1>
        <div style={{ width: "40px", height: "1px", background: "#3B9B8F", margin: "12px auto" }} />
        <p style={{ fontSize: "12px", color: "#666", letterSpacing: "2px", textTransform: "uppercase", margin: 0 }}>
          Package & Rate
        </p>
        <p style={{ fontSize: "11px", color: "#3B9B8F", letterSpacing: "1px", marginTop: "8px" }}>
          Casual Snap for Anyone Visiting Korea
        </p>
      </div>

      {/* Content */}
      {!region && <RegionSelect onSelect={setRegion} />}
      {region && !photographer && (
        <PhotographerList
          region={region}
          photographers={PHOTOGRAPHERS[region]}
          onSelect={setPhotographer}
          onBack={() => setRegion(null)}
        />
      )}
      {photographer && (
        <PackageDetail
          photographer={photographer}
          onBack={() => setPhotographer(null)}
        />
      )}

      {/* Footer */}
      <div style={{ textAlign: "center", padding: "40px 0 16px", borderTop: "1px solid #D0E6E2", marginTop: "40px" }}>
        <p style={{ fontSize: "12px", color: "#888", letterSpacing: "1px", margin: 0 }}>
          © 2026 Hype Pig Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}
