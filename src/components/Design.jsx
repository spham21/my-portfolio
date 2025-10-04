// src/components/Design.jsx
import { useState } from "react";
import { designClients } from "../data/designs";

export default function Design() {
  const [activeClient, setActiveClient] = useState(null);
  const [activeDesign, setActiveDesign] = useState(null);

  return (
    <section id="design" className="py-16 md:py-20 border-t border-neutral-800">
      <h3 className="text-3xl font-bold">Client Designs</h3>
      <p className="mt-3 text-white/75 max-w-3xl">
        Click a client’s logo to view more of the design work created for them.
      </p>

      {/* Logo Grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {designClients.map((client) => (
          <button
            key={client.client}
            onClick={() => setActiveClient(client)}
            className="group rounded-xl bg-neutral-900/80 border border-white/5 hover:border-[#ff4ecd] p-6 flex items-center justify-center transition"
          >
            {client.logo ? (
              <img
              src={client.logo}
              alt={`${client.client} logo`}
              className="h-20 w-20 rounded-full object-cover group-hover:scale-105 transition"
            />
            ) : (
              <div className="h-20 w-full bg-neutral-800 flex items-center justify-center rounded">
                <span className="text-white/70">{client.client}</span>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Client gallery modal */}
      {activeClient && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur z-50 flex items-center justify-center p-4"
          onClick={() => {
            setActiveClient(null);
            setActiveDesign(null);
          }}
        >
          <div
            className="relative max-w-5xl w-full bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
              <h4 className="text-xl font-semibold text-[#ff4ecd]">
                {activeClient.client}
              </h4>
              <div className="flex gap-2">
                {activeClient.href && (
                  <a
                    href={activeClient.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded border border-[#ff4ecd] text-[#ff4ecd] hover:bg-[#ff4ecd] hover:text-black transition"
                  >
                    Visit Site
                  </a>
                )}
                <button
                  className="px-3 py-1 rounded border border-white/20 hover:border-[#ff4ecd]"
                  onClick={() => {
                    setActiveClient(null);
                    setActiveDesign(null);
                  }}
                >
                  ✕ Close
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
              {(activeClient.designs || []).map((d, i) => (
                <button
                  key={i}
                  onClick={() => setActiveDesign(d)}
                  className="group rounded-lg overflow-hidden border border-white/5 hover:border-[#ff4ecd] transition"
                >
                  {d.type === "image" ? (
                    <img
                      src={d.src}
                      alt={d.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition"
                    />
                  ) : (
                    <video
                      src={d.src}
                      className="w-full h-40 object-cover"
                      muted
                      playsInline
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Full-size lightbox */}
      {activeDesign && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur z-[60] flex items-center justify-center p-4"
          onClick={() => setActiveDesign(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-4 py-3 border-b border-neutral-800">
              <h5 className="text-lg font-semibold">{activeDesign.title}</h5>
              <button
                className="px-3 py-1 rounded border border-white/20 hover:border-[#ff4ecd]"
                onClick={() => setActiveDesign(null)}
              >
                ✕
              </button>
            </div>

            <div className="p-4 flex justify-center bg-black">
              {activeDesign.type === "image" ? (
                <img
                  src={activeDesign.src}
                  alt={activeDesign.title}
                  className="max-h-[70vh] object-contain"
                />
              ) : (
                <video
                  src={activeDesign.src}
                  className="max-h-[70vh] object-contain"
                  controls
                  playsInline
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}