import { ReactNode } from "react";
import Flex from "./Flex";

interface ListProps<X> {
  list: X[];
  className?: string;
  callback: (item: X, index: number) => ReactNode;
}

export default function List<X>({ list, className, callback }: ListProps<X>) {
  return <Flex className={className}>{list.map(callback)}</Flex>;
}
