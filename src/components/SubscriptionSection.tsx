"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Calendar, Gift, Zap, Heart } from "lucide-react";

const PLANS = [
    {
        id: "weekend",
        name: "Pack Week-end",
        emoji: "🥞",
        description: "4 crêpes livrées chaque samedi matin",
        price: 1000,
        period: "/ semaine",
        features: [
            "4 crêpes au choix",
            "Livraison gratuite",
            "Changez les parfums chaque semaine",
        ],
        popular: false,
        color: "from-orange-400 to-amber-500",
    },
    {
        id: "family",
        name: "Formule Famille",
        emoji: "🎂",
        description: "Un gâteau + 6 crêpes chaque dimanche",
        price: 4500,
        period: "/ semaine",
        features: [
            "1 gâteau au choix",
            "6 crêpes assorties",
            "Livraison prioritaire",
            "Message personnalisé gratuit",
        ],
        popular: true,
        color: "from-[var(--primary)] to-rose-500",
    },
    {
        id: "gourmand",
        name: "Club Gourmand",
        emoji: "⭐",
        description: "Accès VIP + surprises mensuelles",
        price: 15000,
        period: "/ mois",
        features: [
            "4 gâteaux par mois",
            "12 crêpes par mois",
            "Nouvelles recettes en avant-première",
            "Réductions exclusives -15%",
            "Cadeau surprise mensuel",
        ],
        popular: false,
        color: "from-purple-500 to-violet-600",
    },
];

export default function SubscriptionSection() {
    return (
        <section className="py-24 md:py-32 bg-gradient-to-b from-white to-[var(--cream)]">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-100 rounded-full mb-6"
                    >
                        <Calendar className="w-4 h-4 text-purple-600" />
                        <span className="text-purple-700 font-semibold text-sm">Nouveau : Abonnements</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-4xl md:text-6xl text-[var(--ink)] mb-4"
                    >
                        Des douceurs <span className="text-[var(--primary)]">régulières</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 text-lg max-w-xl mx-auto"
                    >
                        Recevez vos gourmandises préférées automatiquement, sans avoir à repasser commande
                    </motion.p>
                </div>

                {/* Plans Grid */}
                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {PLANS.map((plan, i) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative group ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                    <span className="px-4 py-1.5 bg-[var(--primary)] text-white text-sm font-bold rounded-full shadow-lg shadow-red-500/30 flex items-center gap-1.5">
                                        <Zap className="w-4 h-4" />
                                        Plus populaire
                                    </span>
                                </div>
                            )}

                            <div className={`h-full bg-white rounded-3xl p-8 border-2 transition-all duration-300 ${plan.popular
                                    ? 'border-[var(--primary)] shadow-xl shadow-red-500/10'
                                    : 'border-gray-100 hover:border-gray-200 hover:shadow-lg'
                                }`}>
                                {/* Header */}
                                <div className="text-center mb-6">
                                    <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} items-center justify-center text-3xl mb-4 shadow-lg`}>
                                        {plan.emoji}
                                    </div>
                                    <h3 className="font-display text-2xl text-[var(--ink)]">{plan.name}</h3>
                                    <p className="text-gray-500 text-sm mt-1">{plan.description}</p>
                                </div>

                                {/* Price */}
                                <div className="text-center mb-6 pb-6 border-b border-gray-100">
                                    <div className="flex items-end justify-center gap-1">
                                        <span className="font-display text-4xl text-[var(--ink)]">
                                            {plan.price.toLocaleString('fr-FR')}
                                        </span>
                                        <span className="text-gray-400 text-sm mb-1">FCFA</span>
                                    </div>
                                    <span className="text-gray-500 text-sm">{plan.period}</span>
                                </div>

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-start gap-3">
                                            <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                                <Check className="w-3 h-3 text-white" />
                                            </div>
                                            <span className="text-gray-600 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <a
                                    href={`https://wa.me/237691037693?text=${encodeURIComponent(`Bonjour ! Je suis intéressé(e) par l'abonnement "${plan.name}" à ${plan.price} FCFA${plan.period}. Pouvez-vous m'en dire plus ?`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`block w-full py-4 rounded-xl font-bold text-center transition-all ${plan.popular
                                            ? 'bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] shadow-lg shadow-red-500/20'
                                            : 'bg-gray-100 text-[var(--ink)] hover:bg-gray-200'
                                        }`}
                                >
                                    S'abonner via WhatsApp
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-gray-500"
                >
                    <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500" />
                        Annulation gratuite
                    </div>
                    <div className="flex items-center gap-2">
                        <Gift className="w-5 h-5 text-purple-500" />
                        1ère semaine offerte
                    </div>
                    <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-red-500" />
                        Satisfaction garantie
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
