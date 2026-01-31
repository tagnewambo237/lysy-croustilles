"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, MapPin } from "lucide-react";

const LOCATIONS = ["Ngousso", "Bastos", "Mvan", "Essos", "Biyem-Assi", "Mokolo", "Ekounou"];
const NAMES = ["Alice", "Jean", "Marie", "Paul", "Sophie", "Emmanuel", "Fatou", "Yves", "Céline", "David"];
const PRODUCTS = [
    "une Crêpe Chocolat",
    "3 Crêpes Coco",
    "un Gâteau Marbré",
    "6 Crêpes Simples",
    "un Gâteau au Chocolat",
    "2 Crêpes Choco-Coco",
    "un Gâteau au Yaourt",
];

interface Notification {
    id: number;
    name: string;
    location: string;
    product: string;
    time: string;
}

export default function SocialProof() {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
    const [orderCount, setOrderCount] = useState(47);

    // Générer une notification aléatoire
    const generateNotification = (): Notification => {
        return {
            id: Date.now(),
            name: NAMES[Math.floor(Math.random() * NAMES.length)],
            location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)],
            product: PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)],
            time: "À l'instant",
        };
    };

    useEffect(() => {
        // Afficher une notification toutes les 8-15 secondes
        const showNotification = () => {
            const notification = generateNotification();
            setCurrentNotification(notification);
            setOrderCount(prev => prev + 1);

            // Masquer après 4 secondes
            setTimeout(() => {
                setCurrentNotification(null);
            }, 4000);
        };

        // Première notification après 5 secondes
        const initialTimeout = setTimeout(showNotification, 5000);

        // Notifications suivantes
        const interval = setInterval(() => {
            showNotification();
        }, Math.random() * 7000 + 8000); // Entre 8 et 15 secondes

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            {/* Notification Toast - Coin inférieur gauche */}
            <AnimatePresence>
                {currentNotification && (
                    <motion.div
                        initial={{ opacity: 0, x: -100, y: 50 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="fixed bottom-24 left-4 md:bottom-8 md:left-8 z-[55] max-w-sm"
                    >
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 flex items-start gap-4">
                            {/* Avatar */}
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                                {currentNotification.name[0]}
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <p className="text-sm text-[var(--ink)]">
                                    <span className="font-bold">{currentNotification.name}</span> à{" "}
                                    <span className="text-[var(--primary)]">{currentNotification.location}</span>
                                </p>
                                <p className="text-sm text-gray-500 mt-0.5">
                                    vient de commander {currentNotification.product}
                                </p>
                                <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                    {currentNotification.time}
                                </p>
                            </div>

                            {/* Close */}
                            <button
                                onClick={() => setCurrentNotification(null)}
                                className="text-gray-400 hover:text-gray-600 text-xl leading-none"
                            >
                                ×
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Compteur de commandes du jour - En haut de la section produits */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-4 py-2 bg-green-50 border border-green-200 rounded-full"
            >
                <div className="flex items-center gap-1.5">
                    <ShoppingBag className="w-4 h-4 text-green-600" />
                    <span className="text-green-700 font-bold">{orderCount}</span>
                </div>
                <span className="text-green-600 text-sm">commandes aujourd'hui</span>
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </motion.div>
        </>
    );
}
