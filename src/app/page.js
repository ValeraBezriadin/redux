import Image from "next/image";
import styles from "./page.module.css";
import Count from "@/components/Count";

export default function Home() {
  return (
    <main className={styles.main}>
      <Count />
    </main>
  );
}
