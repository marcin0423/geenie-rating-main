import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function AnimateChats({ children } : any) {
  const [ref] = useAutoAnimate();
  return <div ref={ref}>{children}</div>;
}
