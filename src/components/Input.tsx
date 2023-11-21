import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

// HTML 태그 기본 속성을 사용할 때는 하나하나 가져오는게 아니라, '태그'HTMLAttributes<HTML'태그'Element> 사용하기
interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className = "", ...rest }: Props) {
  const classNames = `${styles.input} ${className}`;
  return <input className={classNames} {...rest} />;
}
