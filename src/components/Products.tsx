"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Check, ShoppingBag, Wheat, Milk, Leaf } from "lucide-react";
import { useCart } from "../context/CartContext";
import FlavorWheel from "./FlavorWheel";
import SocialProof from "./SocialProof";

type DietaryType = "no-gluten" | "no-lactose" | "vegan";

interface Product {
    id: number;
    name: string;
    desc: string;
    price: number;
    category: string;
    dietary: DietaryType[];
    image: string;
    tag?: string;
}

const CATEGORIES = [
    { id: "all", name: "Tout", emoji: "🍽️" },
    { id: "crepes", name: "Crêpes", emoji: "🥞" },
    { id: "gateaux", name: "Gâteaux", emoji: "🎂" },
];

// Filtres allergènes/régimes
const DIETARY_FILTERS: Array<{ id: "all" | DietaryType; name: string; icon: React.ReactNode }> = [
    { id: "all", name: "Tout", icon: null },
    { id: "no-gluten", name: "Sans Gluten", icon: <Wheat className="w-4 h-4" /> },
    { id: "no-lactose", name: "Sans Lactose", icon: <Milk className="w-4 h-4" /> },
    { id: "vegan", name: "Végétalien", icon: <Leaf className="w-4 h-4" /> },
];

const PRODUCTS: Product[] = [
    // === CRÊPES ===
    { id: 1, name: "Crêpe Simple", desc: "Nature, légère et moelleuse", price: 100, category: "crepes", dietary: ["no-lactose"], image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600" },
    { id: 2, name: "Crêpe Marbrée", desc: "Bicolore vanille & chocolat", price: 150, category: "crepes", dietary: [], image: "https://images.unsplash.com/photo-1575487426162-d278065d6c93?w=600" },
    { id: 3, name: "Crêpe Chocolat", desc: "Garnie au chocolat fondant", price: 150, category: "crepes", tag: "Gourmand", dietary: [], image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600" },
    { id: 4, name: "Crêpe Coco", desc: "Saveur noix de coco naturelle", price: 200, category: "crepes", dietary: ["no-lactose", "vegan"], image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=600" },
    { id: 5, name: "Crêpe Orange", desc: "Au sirop d'orange, parfumée", price: 250, category: "crepes", dietary: ["no-gluten"], image: "https://images.unsplash.com/photo-1504113888839-1c8f5a5c8b5c?w=600" },
    { id: 6, name: "Crêpe Choco-Coco", desc: "Double plaisir chocolat + coco", price: 300, category: "crepes", tag: "Populaire", dietary: [], image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600" },
    // === GÂTEAUX ===
    { id: 7, name: "Gâteau au Lait", desc: "Moelleux et doux", price: 2500, category: "gateaux", dietary: [], image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600" },
    { id: 8, name: "Gâteau Yaourt", desc: "Léger et savoureux", price: 3000, category: "gateaux", dietary: [], image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600" },
    { id: 9, name: "Gâteau Marbré", desc: "L'équilibre vanille & chocolat", price: 3500, category: "gateaux", tag: "Best Seller", dietary: [], image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600" },
    { id: 10, name: "Gâteau Orange", desc: "Parfumé et frais", price: 3500, category: "gateaux", dietary: ["no-gluten"], image: "https://images.unsplash.com/photo-1551879400-111a9087cd86?w=600" },
    { id: 11, name: "Gâteau Chocolat", desc: "Intense et fondant", price: 4000, category: "gateaux", tag: "Premium", dietary: [], image: "https://images.unsplash.com/photo-1606313564200-e75d5e304abd?w=600" },
];

export default function Shop() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [activeDietary, setActiveDietary] = useState<"all" | DietaryType>("all");
    const [flavorFilter, setFlavorFilter] = useState<number[] | null>(null);
    const { openCart, totalItems } = useCart();

    // Filtrage combiné
    let filteredProducts = PRODUCTS.filter(p => {
        const matchesCategory = activeCategory === "all" || p.category === activeCategory;
        const matchesDietary = activeDietary === "all" || p.dietary?.includes(activeDietary);
        const matchesFlavor = !flavorFilter || flavorFilter.includes(p.id);
        return matchesCategory && matchesDietary && matchesFlavor;
    });

    return (
        <section id="la-carte" className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[var(--primary)] font-bold uppercase tracking-widest text-sm mb-4 block"
                    >
                        Nos Douceurs
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-4xl md:text-6xl text-[var(--ink)] mb-4"
                    >
                        La Carte<span className="text-[var(--primary)]">.</span>
                    </motion.h2>

                    {/* Social Proof Counter */}
                    {/* <div className="flex justify-center mt-4">
                        <SocialProof />
                    </div> */}
                </div>

                {/* Roue des Saveurs */}
                <div className="mb-16">
                    <FlavorWheel
                        onFlavorSelect={(ids) => setFlavorFilter(ids)}
                        selectedFlavor={flavorFilter ? "active" : null}
                    />
                </div>

                {/* Filtres Catégories + Régimes */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                    {/* Categories */}
                    <div className="flex gap-2">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${activeCategory === cat.id
                                        ? "bg-[var(--primary)] text-white shadow-lg shadow-red-500/20"
                                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                    }`}
                            >
                                <span>{cat.emoji}</span>
                                <span>{cat.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Dietary Filters */}
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {DIETARY_FILTERS.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveDietary(filter.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${activeDietary === filter.id
                                        ? "bg-green-500 text-white"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                            >
                                {filter.icon}
                                <span>{filter.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product, i) => (
                            <ProductCard key={product.id} product={product} index={i} />
                        ))}
                    </AnimatePresence>
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="font-bold text-xl mb-2">Aucun produit trouvé</h3>
                        <p className="text-gray-500">Essayez de modifier vos filtres</p>
                        <button
                            onClick={() => { setActiveCategory("all"); setActiveDietary("all"); setFlavorFilter(null); }}
                            className="mt-4 px-6 py-2 bg-[var(--primary)] text-white rounded-full font-medium"
                        >
                            Réinitialiser les filtres
                        </button>
                    </div>
                )}

                {/* Floating Cart Button - Mobile */}
                {totalItems > 0 && (
                    <motion.button
                        initial={{ scale: 0, y: 100 }}
                        animate={{ scale: 1, y: 0 }}
                        onClick={openCart}
                        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[var(--primary)] text-white rounded-full shadow-2xl shadow-red-500/30 flex items-center justify-center md:hidden"
                    >
                        <ShoppingBag className="w-6 h-6" />
                        <span className="absolute -top-1 -right-1 w-6 h-6 bg-white text-[var(--primary)] text-xs font-bold rounded-full flex items-center justify-center shadow">
                            {totalItems}
                        </span>
                    </motion.button>
                )}

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 md:mt-28"
                >
                    <div className="relative bg-[var(--ink)] rounded-[2rem] p-8 md:p-12 overflow-hidden">
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute top-0 right-0 text-[20rem] leading-none font-display">🥞</div>
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="text-center md:text-left">
                                <h3 className="font-display text-3xl md:text-4xl text-white mb-3">
                                    Prêt à commander ?
                                </h3>
                                <p className="text-gray-400 max-w-md">
                                    Ajoutez vos favoris au panier et commandez en quelques clics via WhatsApp !
                                </p>
                            </div>

                            <button
                                onClick={openCart}
                                className="flex items-center gap-3 px-8 py-4 bg-[var(--primary)] text-white rounded-full font-bold text-lg hover:bg-white hover:text-[var(--primary)] transition-all shadow-xl hover:shadow-2xl group"
                            >
                                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Voir mon panier
                                {totalItems > 0 && (
                                    <span className="ml-2 px-2.5 py-0.5 bg-white/20 rounded-full text-sm">
                                        {totalItems}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
    const { addItem, items } = useCart();
    const [justAdded, setJustAdded] = useState(false);

    const itemInCart = items.find(item => item.id === product.id);
    const quantity = itemInCart?.quantity || 0;

    const handleAdd = () => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
        });
        setJustAdded(true);
        setTimeout(() => setJustAdded(false), 800);
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
        >
            <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <motion.img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {product.tag && (
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-bold text-[var(--primary)] shadow-sm">
                                {product.tag}
                            </span>
                        </div>
                    )}

                    {/* Dietary Badges */}
                    {product.dietary && product.dietary.length > 0 && (
                        <div className="absolute top-4 right-4 flex gap-1">
                            {product.dietary.includes("no-gluten") && (
                                <span className="w-7 h-7 bg-amber-100 rounded-full flex items-center justify-center" title="Sans Gluten">
                                    <Wheat className="w-4 h-4 text-amber-600" />
                                </span>
                            )}
                            {product.dietary.includes("no-lactose") && (
                                <span className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center" title="Sans Lactose">
                                    <Milk className="w-4 h-4 text-blue-600" />
                                </span>
                            )}
                            {product.dietary.includes("vegan") && (
                                <span className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center" title="Végétalien">
                                    <Leaf className="w-4 h-4 text-green-600" />
                                </span>
                            )}
                        </div>
                    )}

                    <AnimatePresence>
                        {quantity > 0 && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                className="absolute bottom-4 left-4 w-8 h-8 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg"
                            >
                                {quantity}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="absolute bottom-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <motion.button
                            onClick={handleAdd}
                            whileTap={{ scale: 0.9 }}
                            className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors duration-200 ${justAdded
                                    ? 'bg-green-500 text-white'
                                    : 'bg-white text-[var(--ink)] hover:bg-[var(--primary)] hover:text-white'
                                }`}
                        >
                            {justAdded ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                        </motion.button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-lg text-[var(--ink)] truncate group-hover:text-[var(--primary)] transition-colors">
                                {product.name}
                            </h3>
                            <p className="text-gray-400 text-sm mt-1 line-clamp-1">
                                {product.desc}
                            </p>
                        </div>
                        <div className="text-right flex-shrink-0">
                            <span className="font-display text-xl text-[var(--primary)]">
                                {product.price.toLocaleString('fr-FR')}
                            </span>
                            <span className="text-xs text-gray-400 block">FCFA</span>
                        </div>
                    </div>

                    <motion.button
                        onClick={handleAdd}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full mt-4 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 ${justAdded
                                ? 'bg-green-500 text-white'
                                : 'bg-gray-100 text-[var(--ink)] hover:bg-[var(--primary)] hover:text-white'
                            }`}
                    >
                        {justAdded ? (
                            <>
                                <Check className="w-4 h-4" />
                                Ajouté !
                            </>
                        ) : (
                            <>
                                <Plus className="w-4 h-4" />
                                Ajouter au panier
                            </>
                        )}
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}
