import { screen } from "@testing-library/react-native";
import { renderRouter } from "expo-router/testing-library";
import Component from ".";

describe("<Component />", () => {
  it("renders successfully", () => {
    renderRouter({
      index: () => <Component />,
    });

    expect(screen.getByTestId("component")).toBeOnTheScreen();
  });
});
