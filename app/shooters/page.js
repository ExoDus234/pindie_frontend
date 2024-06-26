'use client'
import { CardsListSection } from "../components/CardListSection/CardsListSection";
import { endpoints } from "../api/config";
import { Preloader } from "../components/Preloader/Preloader";
import { useGetDataByCategory } from "../api/api-hooks";

export default function Shooters() {
    const shooterGames = useGetDataByCategory(endpoints.games, "shooter");

    return (
        <main className={"main-inner"}>
            {shooterGames ? (
                <CardsListSection id="shooter" title="Шутеры" data={shooterGames} />
            ) : (
                <Preloader />
            )}
        </main>
    )
}