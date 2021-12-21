import React, {useState, useRef} from 'react';
import {
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

import {Fonts, Colors, Images} from '../../assets/Theme';

import {Logo, Button, Typography} from '../../components';

import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';
const Analytics = () => {
  const {width, height} = Dimensions.get('window');

  const data = {
    // labels: [7, 9, 3, 4, 10],
    datasets: [
      {
        data: [7, 9, 3, 4, 10],
        // strokeWidth: 2,
        colors: [
          (opacity = 1) => `${Colors.red}`,
          (opacity = 1) => `${Colors.blue}`,
          (opacity = 1) => `${Colors.orange}`,
          (opacity = 1) => `${Colors.green}`,
          (opacity = 1) => `${Colors.primary}`,
        ],
      },
    ],
  };

  const lineData = {
    labels: [' 1d', ' 5d', '10d', '15d', '30d'],
    datasets: [
      {
        data: [1, 7, 6, 4, 2, 5],
        strokeWidth: 2,
        color: (opacity = 1) => `rgba(255,0,0,${opacity})`, // optional
      },
      {
        data: [2, 4, 6, 8, 8, 2],
        strokeWidth: 2,
        color: (opacity = 1) => `rgba(0,0,102, ${opacity})`, // optional
      },
      {
        data: [9, 4, 7, 8, 2, 4],
        strokeWidth: 2,
        color: (opacity = 1) => `rgba(0,102,0, ${opacity})`, // optional
      },
    ],
  };

  const chartConfig = {
    backgroundColor: 'transparent',
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `${Colors.white}`,
    labelColor: (opacity = 1) => `${Colors.inputLabel}`,
  };

  return (
    <ScrollView
      style={styles.scrollview}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.wrapper}>
        <View
          style={{
            width: 150,
            height: 150,
            borderRadius: 10000,
            position: 'absolute',
            backgroundColor: Colors.blue,
            top: -30,
            right: -30,
          }}
        />
        {/* <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 10000,
            position: 'absolute',
            backgroundColor: Colors.orange,
            left: -50,
            bottom: 90,
          }}
        /> */}
        <View style={styles.container}>
          <Typography
            size={35}
            color={Colors.primary}
            family={Fonts.NexaBold}
            mt={70}>
            Analytics
          </Typography>

          <Typography
            size={20}
            color={Colors.lightgrey}
            family={Fonts.NexaExtraBold}
            mt={10}>
            Today's Health Score
          </Typography>
        </View>
        {/* Body Area */}
        <View style={styles.body}>
          <BarChart
            // style={graphStyle}
            withVerticalLabels={false}
            yLabelsOffset={5}
            data={data}
            width={width - 50}
            height={220}
            chartConfig={chartConfig}
            withVerticalLabels={false}
            flatColor={true}
            fromZero={true}
            withCustomBarColorFromData={true}
            showBarTops={false}
            maxValue={10}
            minValue={1}
            style={{
              paddingRight: 17,
            }}
          />
          <View style={styles.detailsContainer}>
            <View style={styles.detailsWrapper}>
              <Typography
                size={16}
                color={Colors.primary}
                family={Fonts.NexaRegular}>
                Eating
              </Typography>
              <View style={styles.line} />
              <Typography
                size={16}
                color={Colors.primary}
                family={Fonts.NexaRegular}>
                7
              </Typography>
            </View>
          </View>
          {/* Stress Meter */}
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 10,
                marginVertical: 10,
              }}>
              <Entypo name="emoji-happy" size={25} color={Colors.inputLabel} />
              <Entypo
                name="emoji-neutral"
                size={25}
                color={Colors.inputLabel}
              />
              <Entypo name="emoji-sad" size={25} color={Colors.primary} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20,
              }}>
              <View
                style={{
                  width: 1,
                  height: 15,
                  backgroundColor: Colors.primary,
                  marginBottom: -10,
                }}
              />
              <View
                style={{
                  width: 1,
                  height: 15,
                  backgroundColor: Colors.primary,
                  marginBottom: -10,
                }}
              />
              <View
                style={{
                  width: 1,
                  height: 15,
                  backgroundColor: Colors.primary,
                  marginBottom: -10,
                }}
              />
            </View>
            <View style={styles.stressHorizoneLine} />
            {/* <View
              style={{
                borderWidth: 1,
                width: 20,
                height: 20,
                borderRadius: 100,
                backgroundColor: Colors.white,
              }}
            /> */}
          </View>

          {/* Line Chart */}
          <View>
            <Typography
              size={20}
              color={Colors.primary}
              family={Fonts.NexaBold}
              mt={30}
              mb={20}>
              Past Stats
            </Typography>
            <LineChart
              bezier
              withDots={false}
              onDataPointClick={data => {
                console.log('hsss');
              }}
              data={lineData}
              width={width - 50}
              height={220}
              chartConfig={chartConfig}
              style={{
                // marginVertical: 8,
                // borderRadius: 16,
                paddingRight: 25,
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Analytics;
