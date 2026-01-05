"use client";

import React from "react";

export default function Marquee() {
    const items = [
        { text: "Crêpes Maison", emoji: "🥞" },
        { text: "Gâteaux Moelleux", emoji: "🎂" },
        { text: "Fait avec Amour", emoji: "❤️" },
        { text: "Livraison Rapide", emoji: "🚀" },
        { text: "Prix Doux", emoji: "💰" },
        { text: "100% Frais", emoji: "✨" },
    ];

    return (
        <section className="relative py-6 bg-[var(--ink)] overflow-hidden">
            {/* Ligne 1 - Rapide */}
            <div className="flex whitespace-nowrap animate-marquee">
                {[...Array(3)].map((_, setIndex) => (
                    <div key={setIndex} className="flex items-center">
                        {items.map((item, i) => (
                            <div key={i} className="flex items-center mx-8">
                                <span className="text-2xl mr-3">{item.emoji}</span>
                                <span className="font-display text-2xl md:text-3xl text-white uppercase tracking-wider">
                                    {item.text}
                                </span>
                                <span className="mx-8 text-[var(--primary)] text-2xl">✦</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
