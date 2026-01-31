"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--cream)]"
        >
            {/* Background Art - Créatif */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Blobs colorés */}
                <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-pink-200 to-rose-100 opacity-40 blur-[100px] animate-blob -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-orange-100 to-yellow-100 opacity-50 blur-[120px] animate-blob animation-delay-4s translate-x-1/3 translate-y-1/3" />
                <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[var(--soft-pink)] to-white opacity-60 blur-[80px] animate-blob animation-delay-2s -translate-x-1/2 -translate-y-1/2" />

                {/* Grille décorative */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: 'linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Floating Elements Créatifs */}
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
                className="absolute top-[20%] left-[10%] hidden lg:block"
            >
                <div className="relative">
                    <div className="w-24 h-24 rounded-2xl bg-white shadow-2xl flex items-center justify-center text-5xl rotate-12 hover:rotate-0 transition-transform duration-500">
                        🥞
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-white" />
                    </div>
                </div>
            </motion.div>

            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, -80]) }}
                className="absolute bottom-[25%] right-[12%] hidden lg:block"
            >
                <div className="w-20 h-20 rounded-2xl bg-white shadow-2xl flex items-center justify-center text-4xl -rotate-12 hover:rotate-0 transition-transform duration-500">
                    🎂
                </div>
            </motion.div>

            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, 60]) }}
                className="absolute top-[40%] right-[8%] hidden lg:block"
            >
                <div className="w-16 h-16 rounded-full bg-[var(--gold)] shadow-xl flex items-center justify-center text-2xl animate-spin-slow">
                    ⭐
                </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
                style={{ y, opacity, scale }}
                className="relative z-10 text-center px-6 max-w-5xl mx-auto"
            >
                {/* Badge Créatif */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2, duration: 0.5, type: "spring" }}
                    className="mb-8 inline-flex items-center gap-3"
                >
                    <span className="flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full shadow-lg font-semibold text-sm border border-gray-100">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Ouvert maintenant
                    </span>
                    <span className="px-4 py-2 bg-[var(--primary)] text-white rounded-full text-sm font-bold shadow-lg shadow-red-500/20">
                        Yaoundé 📍
                    </span>
                </motion.div>

                {/* Titre Principal - Créatif avec mix de styles */}
                <div className="space-y-2 mb-8">
                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: 120, rotate: 3 }}
                            animate={{ y: 0, rotate: 0 }}
                            transition={{ delay: 2.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[var(--ink)]"
                        >
                            Le Plaisir
                        </motion.h1>
                    </div>

                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: 120, rotate: -2 }}
                            animate={{ y: 0, rotate: 0 }}
                            transition={{ delay: 2.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                        >
                            <span className="text-outline">de la</span>{" "}
                            <span className="text-[var(--primary)] relative">
                                Gourmandise
                                {/* Underline décoratif */}
                                <svg className="absolute -bottom-2 left-0 w-full h-4" viewBox="0 0 200 10" preserveAspectRatio="none">
                                    <motion.path
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ delay: 2.8, duration: 0.8 }}
                                        d="M0 5 Q50 0 100 5 T200 5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                        </motion.h1>
                    </div>
                </div>

                {/* Sous-titre */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5, duration: 0.8 }}
                    className="text-lg md:text-xl text-gray-500 max-w-lg mx-auto mb-10 leading-relaxed"
                >
                    Crêpes artisanales & gâteaux moelleux,
                    <span className="text-[var(--ink)] font-medium"> préparés avec amour</span> et livrés chez vous.
                </motion.p>

                {/* Boutons Créatifs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.7, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="#la-carte"
                        className="group relative px-8 py-4 bg-[var(--primary)] text-white rounded-full font-bold text-base overflow-hidden shadow-xl shadow-red-500/25 hover:shadow-2xl hover:shadow-red-500/30 transition-all"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Voir la carte
                            <motion.span
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>

                    <a
                        href="https://wa.me/237691037693"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-8 py-4 bg-white text-[var(--ink)] rounded-full font-bold text-base border-2 border-gray-200 hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all flex items-center gap-3 shadow-lg"
                    >
                        <span className="w-3 h-3 bg-green-500 rounded-full group-hover:animate-pulse" />
                        Commander sur WhatsApp
                    </a>
                </motion.div>

                {/* Prix Badge Créatif */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 3, duration: 0.5, type: "spring" }}
                    className="mt-12 inline-flex items-center gap-4 px-6 py-3 bg-[var(--ink)] text-white rounded-2xl shadow-xl"
                >
                    <div className="text-left">
                        <span className="block text-xs uppercase tracking-wider opacity-60">À partir de</span>
                        <span className="font-display text-2xl">100 FCFA</span>
                    </div>
                    <div className="w-px h-10 bg-white/20" />
                    <div className="text-3xl">🥞</div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator Créatif */}
            {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-3 text-gray-400"
                >
                    <span className="text-xs uppercase tracking-[0.3em] font-medium">Découvrir</span>
                    <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2">
                        <motion.div
                            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full"
                        />
                    </div>
                </motion.div>
            </motion.div> */}
        </section>
    );
}
