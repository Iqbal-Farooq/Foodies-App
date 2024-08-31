import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import MealGrid from '@/components/meals/meals-grid'
import { getMeals } from '@/lib/meals'
import { Suspense } from 'react'
export const metadata = {
  title: 'Meals',
  description: 'custom meta data.',
};
async function Meals(){
  const MEALS =await getMeals()
     
      return  <MealGrid  meals={MEALS}/>

}
const MealsPage =  () => {
  
  return (
    <>
    <header className={styles.header}>
      <h1> Delicious meals, created 
        <span className={styles.highlight}>by you </span>
      </h1>
      <p>Choose ypour favorite recipe and cook it yourself. It is easy  and Fun</p>
      <p className={styles.cta}><Link href='/meals/share'>Share Your Favorite Recipe</Link> </p>
    </header>
    <main className={styles.main}>
      <Suspense fallback={<p className={styles.loading}>Fetching Meals Data...</p>}>
        <Meals />
      </Suspense>
    </main>
    </>
  )
}

export default MealsPage