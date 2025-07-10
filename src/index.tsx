import { use } from "react";
import { View } from "react-native";

function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export default function Component() {
  use(wait(1000));

  return <View testID="component" />;
}
