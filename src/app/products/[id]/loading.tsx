import { CardDetailSkeleton } from "@/components/skeletons/skeletons";
import styles from "./page.module.css";
export default function Loading() {
  return (
    <div className={styles.skeleton}>
      <CardDetailSkeleton />
    </div>
  );
}
