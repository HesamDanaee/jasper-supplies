import Flex from "@/components/common/Flex";
import Slider from "@/components/slider/Slider";

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
