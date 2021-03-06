import React from "react";
import { ScrollView, StyleSheet, Platform, View } from "react-native";
import {
  VictoryChart,
  VictoryBar,
  VictoryGroup,
  VictoryCandlestick,
  VictoryLine,
  VictoryScatter,
  VictoryArea,
  VictoryStack,
  VictoryTooltip,
  VictoryAxis,
  VictoryPolarAxis,
  VictoryTheme
} from "victory-native";
// import { range, random } from "lodash";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  monospace: {
    fontFamily: Platform.OS === "ios" ? "Menlo" : "monospace"
  },
  contentContainer: {
    alignItems: "center"
  },
  header: {
    fontWeight: "600",
    padding: 15,
    fontSize: 18
  }
});

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

export default class Victory extends React.Component {
  render() {
    return (
      <ScrollView>
           <VictoryChart
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={20}
      >
        {/* <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => (`$${x / 1000}k`)}
        /> */}
        <VictoryBar
          data={data}
        //   x="quarter"
        //   y="earnings"
        />
      </VictoryChart>
      </ScrollView>
    )
  }
}
