"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Clock, Sparkles, Truck, Star, Shield } from "lucide-react";

const FEATURES = [
    {
        icon: <Heart className="w-8 h-8" />,
        title: "Fait avec Amour",
        desc: "Chaque création est préparée avec passion et attention aux détails",
        color: "from-rose-500 to-pink-500",
        emoji: "❤️",
    },
    {
        icon: <Sparkles className="w-8 h-8" />,
        title: "Ingrédients Frais",
        desc: "Nous utilisons uniquement des produits de qualité, sélectionnés avec soin",
        color: "from-amber-500 to-orange-500",
        emoji: "✨",
    },
    {
        icon: <Clock className="w-8 h-8" />,
        title: "Préparé Minute",
        desc: "Vos commandes sont préparées à la demande pour une fraîcheur optimale",
        color: "from-emerald-500 to-teal-500",
        emoji: "⏱️",
    },
    {
        icon: <Truck className="w-8 h-8" />,
        title: "Livraison Rapide",
        desc: "Recevez vos douceurs rapidement, encore chaudes et moelleuses",
        color: "from-blue-500 to-cyan-500",
        emoji: "🚀",
    },
    {
        icon: <Star className="w-8 h-8" />,
        title: "Prix Doux",
        desc: "Des gourmandises accessibles à tous, sans compromis sur la qualité",
        color: "from-yellow-500 to-amber-500",
        emoji: "⭐",
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: "Satisfaction Garantie",
        desc: "Votre bonheur est notre priorité, on refait si vous n'êtes pas satisfait",
        color: "from-purple-500 to-violet-500",
        emoji: "🛡️",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 md:py-32 bg-[var(--cream-dark)] relative overflow-hidden">
            {/* Background Créatif */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-pink-100 to-rose-50 opacity-50 blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-orange-100 to-yellow-50 opacity-50 blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">

                {/* Header Créatif */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-sm mb-6"
                    >
                        <span className="text-2xl">🌟</span>
                        <span className="font-semibold text-sm text-[var(--ink)]">La différence LYSY</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-4xl md:text-6xl text-[var(--ink)] mb-6"
                    >
                        Pourquoi <span className="text-[var(--primary)]">nous</span> choisir ?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 text-lg max-w-xl mx-auto"
                    >
                        Ce qui fait de LYSY Croustilles votre meilleur choix pour vos envies sucrées
                    </motion.p>
                </div>

                {/* Features Grid - Layout Créatif Bento */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {FEATURES.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`group relative ${i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                        >
                            <div className="relative bg-white rounded-3xl p-8 h-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                {/* Emoji Décoratif */}
                                <div className="absolute top-4 right-4 text-4xl opacity-10 group-hover:opacity-30 group-hover:scale-125 transition-all duration-500">
                                    {feature.emoji}
                                </div>

                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                    {feature.icon}
                                </div>

                                {/* Content */}
                                <h3 className="font-bold text-xl text-[var(--ink)] mb-3 group-hover:text-[var(--primary)] transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed">
                                    {feature.desc}
                                </p>

                                {/* Bottom Line Effect */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    <StatItem number="500+" label="Clients Satisfaits" />
                    <StatItem number="11" label="Recettes Uniques" />
                    <StatItem number="100%" label="Fait Maison" />
                    <StatItem number="24h" label="Délai Moyen" />
                </motion.div>
            </div>
        </section>
    );
}

function StatItem({ number, label }: { number: string; label: string }) {
    return (
        <div className="text-center">
            <div className="font-display text-4xl md:text-5xl text-[var(--primary)] mb-2">
                {number}
            </div>
            <div className="text-gray-500 text-sm uppercase tracking-wider">
                {label}
            </div>
        </div>
    );
}
