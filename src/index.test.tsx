import { render, screen } from "@testing-library/react-native";
import { Suspense } from "react";
import { Text, View } from "react-native";
import Component from ".";

describe("<Component />", () => {
  it("renders successfully", () => {
    render(
      <Suspense
        fallback={
          <View>
            <Text>Loading</Text>
          </View>
        }
      >
        <Component />
      </Suspense>
    );

    expect(screen.getByTestId("component")).toBeOnTheScreen();
  });
});
