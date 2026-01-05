"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[var(--accent)] text-white py-12">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[var(--primary)] rounded-full flex items-center justify-center font-bold">L</div>
                    <span className="font-display font-bold text-xl">LYSY Croustilles</span>
                </div>

                <div className="text-sm text-gray-400 text-center md:text-right">
                    <p>© {new Date().getFullYear()} LYSY Croustilles. Tous droits réservés.</p>
                    <p className="mt-1">Fait avec ❤️ à Yaoundé</p>
                </div>

            </div>
        </footer>
    );
}
