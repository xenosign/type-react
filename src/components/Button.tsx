import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  className?: string;
  id?: string;
  // children 쓸 때에는 ReactNode 타입 고정
  children?: ReactNode;
  onClick: any;
}

export default function Button({
  className = "",
  id,
  children,
  onClick,
}: Props) {
  const classNames = `${styles.button} ${className}`;
  return <button className={classNames} />;
}
