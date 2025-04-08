import styles from "./skeletons.module.css";

export function CardSkeleton() {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.skeletonShimmer}></div>
    </div>
  );
}

export function CardsSkeleton() {
  const skeletons = Array.from({ length: 9 }, (_, index) => (
    <div key={index} className={styles.cardWrapper}>
      <CardSkeleton />
    </div>
  ));

  return <div className={styles.gridContainer}>{skeletons}</div>;
}

export function CardDetailSkeleton() {
  return (
    <div className="cardDetailSkeletonWrapper">
      <div className={styles.skeletonCardDetail}>
        <div className={styles.skeletonShimmer}></div>
      </div>
    </div>
  );
}
