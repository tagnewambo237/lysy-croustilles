"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FLAVORS = [
    { id: "chocolat", name: "Chocolaté", emoji: "🍫", color: "#5D4037", products: [3, 6, 9, 11] },
    { id: "fruity", name: "Fruité", emoji: "🍊", color: "#FF9800", products: [5, 10] },
    { id: "vanilla", name: "Vanillé", emoji: "🍦", color: "#FFF8E1", products: [1, 2, 8, 9] },
    { id: "coco", name: "Exotique", emoji: "🥥", color: "#A5D6A7", products: [4, 6] },
    { id: "moelleux", name: "Moelleux", emoji: "☁️", color: "#E3F2FD", products: [7, 8, 9, 10, 11] },
    { id: "gourmand", name: "Gourmand", emoji: "🤤", color: "#FFCDD2", products: [3, 6, 11] },
];

interface FlavorWheelProps {
    onFlavorSelect: (productIds: number[] | null) => void;
    selectedFlavor: string | null;
}

export default function FlavorWheel({ onFlavorSelect, selectedFlavor }: FlavorWheelProps) {
    const [hoveredFlavor, setHoveredFlavor] = useState<string | null>(null);

    const handleFlavorClick = (flavor: typeof FLAVORS[0]) => {
        if (selectedFlavor === flavor.id) {
            onFlavorSelect(null);
        } else {
            onFlavorSelect(flavor.products);
        }
    };

    return (
        <div className="relative">
            {/* Titre */}
            <div className="text-center mb-8">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display text-2xl md:text-3xl text-[var(--ink)] mb-2"
                >
                    Quelle envie aujourd'hui ?
                </motion.h3>
                <p className="text-gray-500">Cliquez sur une saveur pour filtrer</p>
            </div>

            {/* Roue des Saveurs */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-4"
            >
                {FLAVORS.map((flavor, index) => (
                    <motion.button
                        key={flavor.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleFlavorClick(flavor)}
                        onMouseEnter={() => setHoveredFlavor(flavor.id)}
                        onMouseLeave={() => setHoveredFlavor(null)}
                        className={`relative group flex flex-col items-center gap-2 p-4 md:p-6 rounded-2xl transition-all duration-300 ${selectedFlavor === flavor.id
                                ? 'ring-4 ring-[var(--primary)] ring-offset-2 scale-110'
                                : 'hover:scale-105'
                            }`}
                        style={{
                            backgroundColor: selectedFlavor === flavor.id ? flavor.color : 'white',
                            boxShadow: selectedFlavor === flavor.id ? `0 10px 40px ${flavor.color}50` : '0 4px 20px rgba(0,0,0,0.05)'
                        }}
                    >
                        {/* Emoji */}
                        <motion.span
                            className="text-4xl md:text-5xl"
                            animate={{
                                scale: hoveredFlavor === flavor.id || selectedFlavor === flavor.id ? 1.2 : 1,
                                rotate: hoveredFlavor === flavor.id ? [0, -10, 10, 0] : 0
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {flavor.emoji}
                        </motion.span>

                        {/* Label */}
                        <span className={`font-bold text-sm md:text-base ${selectedFlavor === flavor.id ? 'text-[var(--ink)]' : 'text-gray-700'
                            }`}>
                            {flavor.name}
                        </span>

                        {/* Compteur */}
                        <span className={`text-xs px-2 py-0.5 rounded-full ${selectedFlavor === flavor.id
                                ? 'bg-white/50 text-[var(--ink)]'
                                : 'bg-gray-100 text-gray-500'
                            }`}>
                            {flavor.products.length} produits
                        </span>

                        {/* Effet de particules au survol */}
                        <AnimatePresence>
                            {hoveredFlavor === flavor.id && (
                                <>
                                    {[...Array(3)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                                            animate={{
                                                opacity: [0, 1, 0],
                                                scale: [0.5, 1, 0.5],
                                                x: (i - 1) * 20,
                                                y: -30 - i * 10
                                            }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5, delay: i * 0.1 }}
                                            className="absolute top-0 text-xl pointer-events-none"
                                        >
                                            {flavor.emoji}
                                        </motion.div>
                                    ))}
                                </>
                            )}
                        </AnimatePresence>
                    </motion.button>
                ))}

                {/* Bouton Reset */}
                {selectedFlavor && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        onClick={() => onFlavorSelect(null)}
                        className="flex flex-col items-center gap-2 p-4 md:p-6 rounded-2xl bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                        <span className="text-4xl">✕</span>
                        <span className="font-bold text-sm text-gray-600">Tout voir</span>
                    </motion.button>
                )}
            </motion.div>
        </div>
    );
}
