import Flex from "@/components/Flex";
import Slider from "@/containers/home/components/slider/Slider";

export default function Playground() {
  return (
    <Flex
      className="w-full h-screen bg-foreground"
      align="center"
      justify="center"
    >
      <Slider />
    </Flex>
  );
}
