"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Truck, Clock, Heart, Instagram } from "lucide-react";

export default function InfoSection() {
    return (
        <section className="relative py-32 bg-[var(--ink)] text-white overflow-hidden">
            {/* Background Decorative */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-20 text-[30rem] leading-none font-display tracking-tighter -rotate-12">
                    LYSY
                </div>
            </div>

            <div className="relative z-10 max-w-[1800px] mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Big Statement */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-display text-6xl md:text-8xl leading-[0.9] mb-8"
                        >
                            C'est
                            <br />
                            <span className="text-outline-white">Simple.</span>
                            <br />
                            C'est <span className="text-[var(--primary)]">Bon.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-400 max-w-lg leading-relaxed"
                        >
                            Chez LYSY, on croit que les petits plaisirs font les grandes joies.
                            Chaque crêpe, chaque gâteau est préparé avec soin, juste pour vous.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex items-center gap-4 mt-8"
                        >
                            <Heart className="w-6 h-6 text-[var(--primary)] fill-current" />
                            <span className="text-lg">Fait avec amour à Yaoundé</span>
                        </motion.div>
                    </div>

                    {/* Right: Info Cards Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        <InfoCard
                            icon={<MapPin className="w-6 h-6" />}
                            title="Zone de Livraison"
                            desc="Ngousso & Petrolex"
                            delay={0}
                        />
                        <InfoCard
                            icon={<Truck className="w-6 h-6" />}
                            title="Livraison"
                            desc="Rapide & Soignée"
                            delay={0.1}
                        />
                        <InfoCard
                            icon={<Phone className="w-6 h-6" />}
                            title="WhatsApp"
                            desc="691 03 76 93"
                            link="https://wa.me/237691037693"
                            highlight
                            delay={0.2}
                        />
                        <InfoCard
                            icon={<Clock className="w-6 h-6" />}
                            title="Disponibilité"
                            desc="Tous les jours"
                            delay={0.3}
                        />
                    </div>
                </div>

                {/* Footer Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6"
                >
                    <div className="flex items-center gap-6">
                        <span className="font-display text-2xl">LYSY<span className="text-[var(--primary)]">.</span></span>
                        <span className="text-gray-500">Croustilles</span>
                    </div>

                    <div className="flex items-center gap-6 text-gray-400">
                        <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
                            <Instagram className="w-5 h-5" />
                            <span className="hidden md:inline">@lysy_croustilles</span>
                        </a>
                    </div>

                    <div className="text-sm text-gray-500">
                        © 2026 LYSY Croustilles • Yaoundé, Cameroun
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function InfoCard({
    icon,
    title,
    desc,
    link,
    highlight,
    delay
}: {
    icon: React.ReactNode;
    title: string;
    desc: string;
    link?: string;
    highlight?: boolean;
    delay: number;
}) {
    const Wrapper = link ? 'a' : 'div';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
        >
            <Wrapper
                {...(link ? { href: link, target: "_blank" } : {})}
                className={`block p-8 rounded-3xl transition-all duration-300 ${highlight
                        ? 'bg-[var(--primary)] hover:bg-[var(--primary-light)]'
                        : 'bg-white/5 hover:bg-white/10 border border-white/10'
                    } ${link ? 'cursor-pointer group' : ''}`}
            >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${highlight ? 'bg-white/20' : 'bg-white/10'
                    } ${link ? 'group-hover:scale-110 transition-transform' : ''}`}>
                    {icon}
                </div>
                <h3 className="font-bold text-xl mb-2">{title}</h3>
                <p className={highlight ? 'text-white/80' : 'text-gray-400'}>{desc}</p>
            </Wrapper>
        </motion.div>
    );
}
