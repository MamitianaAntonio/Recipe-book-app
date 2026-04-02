import recipes from "@/data/recipes.json";
import styles from "./page.module.css";
import Link from "next/link";

export default async function RecipePage({ params }) {
  const { id } = await params;
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return <p>Recette introuvable.</p>;
  }

  return (
    <main className={styles.page}>
      <Link href="/" className={styles.backButton}>
        ← Retour
      </Link>

      <div className={styles.container}>
        <img src={recipe.image} alt={recipe.name} />

        <h1>{recipe.name}</h1>

        <div className={styles.meta}>
          <span>{recipe.category}</span>
          <span>{recipe.duration} min</span>
        </div>

        <h2>Ingrédients</h2>
        <ul>
          {recipe.ingredients.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>

        <h2>Étapes</h2>
        <ul className={styles.list}>
          {recipe.steps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
