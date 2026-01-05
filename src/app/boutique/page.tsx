import { Metadata } from "next";
import BoutiquePage from "./BoutiquePage";

export const metadata: Metadata = {
    title: "Boutique | LYSY Croustilles",
    description: "Découvrez toutes nos crêpes et gâteaux. Commandez en ligne et faites-vous livrer à Yaoundé.",
};

export default function Page() {
    return <BoutiquePage />;
}
