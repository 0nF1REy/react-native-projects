import React from "react";
import { ActivityIndicator } from "react-native";
import renderInfo from "../actions/render-info";

export default function Index() {
  return (
    <React.Suspense fallback={<ActivityIndicator />}>
      {renderInfo({ name: "World" })}
    </React.Suspense>
  );
}
